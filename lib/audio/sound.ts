import type { ImageAudioProfile } from "./types";
import { hashString, seededRandom } from "./imagePatch";

let ctx: AudioContext | null = null;

function getCtx() {
  if (!ctx) ctx = new AudioContext();
  return ctx;
}

type Patch = {
  nodes: AudioNode[];
  gain: GainNode;
};

const patches = new Map<string, Patch>();

// -----------------------------
// CREATE PATCH PER IMAGE
// -----------------------------
export function startAudioForImage(src: string, profile: ImageAudioProfile) {
  const ctx = getCtx();

  if (patches.has(src)) return;

  const seed = hashString(src);
  const rand = seededRandom(seed);

  // -----------------------------
  // NOISE SOURCE (unique per image)
  // -----------------------------
  const bufferSize = ctx.sampleRate * 2;
  const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const data = buffer.getChannelData(0);

  for (let i = 0; i < bufferSize; i++) {
    // deterministic noise per image
    data[i] = (rand() * 2 - 1) * (0.5 + profile.edge);
  }

  const srcNode = ctx.createBufferSource();
  srcNode.buffer = buffer;
  srcNode.loop = true;

  // -----------------------------
  // FILTER SHAPING (image identity)
  // -----------------------------
  const low = ctx.createBiquadFilter();
  low.type = "lowpass";

  const mid = ctx.createBiquadFilter();
  mid.type = "bandpass";

  const high = ctx.createBiquadFilter();
  high.type = "highpass";

  low.frequency.value = 80 + profile.brightness * 400;
  mid.frequency.value = 400 + profile.contrast * 2000;
  high.frequency.value = 2000 + profile.edge * 6000;

  // -----------------------------
  // DISTORTION (image fingerprint)
  // -----------------------------
  const shaper = ctx.createWaveShaper();

  const grit = 2 + profile.edge * 14;
  const curve = new Float32Array(44100);

  for (let i = 0; i < curve.length; i++) {
    const x = (i / curve.length) * 2 - 1;
    curve[i] = Math.tanh(x * grit);
  }

  shaper.curve = curve;

  // -----------------------------
  // OUTPUT GAIN
  // -----------------------------
  const gain = ctx.createGain();
  gain.gain.value = 0.25;

  // routing
  srcNode.connect(low);
  low.connect(mid);
  mid.connect(high);

  high.connect(shaper);
  shaper.connect(gain);
  gain.connect(ctx.destination);

  srcNode.start();

  patches.set(src, {
    nodes: [srcNode, low, mid, high, shaper],
    gain,
  });
}

// -----------------------------
export function stopAudioForImage(src: string) {
  const patch = patches.get(src);
  if (!patch) return;

  const ctx = getCtx();

  patch.gain.gain.setTargetAtTime(0, ctx.currentTime, 0.05);

  setTimeout(() => {
    patch.nodes.forEach((n) => {
      try {
        n.disconnect();
      } catch {}
    });
  }, 150);

  patches.delete(src);
}

// -----------------------------
export function updateAudioForImage(
  src: string,
  x: number,
  y: number,
  profile: ImageAudioProfile
) {
  const ctx = getCtx();

  const patch = patches.get(src);
  if (!patch) return;

  const nodes = patch.nodes;

  // we expect consistent ordering from startAudioForImage:
  const mid = nodes[1] as BiquadFilterNode;
  const high = nodes[2] as BiquadFilterNode;
  const low = nodes[0] as BiquadFilterNode;

  const jitter = (Math.random() - 0.5) * 8;

  // -------------------------
  // X → spectral motion
  // -------------------------
  mid.frequency.setTargetAtTime(
    200 + x * 3000 + jitter,
    ctx.currentTime,
    0.03
  );

  high.frequency.setTargetAtTime(
    2500 + x * 6000,
    ctx.currentTime,
    0.03
  );

  // -------------------------
  // Y → density / weight
  // -------------------------
  low.frequency.setTargetAtTime(
    80 + y * 600 + profile.brightness * 300,
    ctx.currentTime,
    0.03
  );
}
