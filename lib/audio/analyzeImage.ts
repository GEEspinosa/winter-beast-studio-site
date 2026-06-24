import type { ImageAudioProfile } from "./types";

const cache = new Map<string, ImageAudioProfile>();

export async function analyzeImageProfile(
  src: string
): Promise<ImageAudioProfile> {
  if (cache.has(src)) return cache.get(src)!;

  const img = new Image();
  img.src = src;
  await img.decode().catch(() => null);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  if (!ctx) return { brightness: 0.5, contrast: 0.5, edge: 0.5 };

  const W = 48;
  const H = 48;

  canvas.width = W;
  canvas.height = H;

  ctx.drawImage(img, 0, 0, W, H);

  const data = ctx.getImageData(0, 0, W, H).data;

  let sum = 0;
  let min = 255;
  let max = 0;

  const lum: number[] = [];

  for (let i = 0; i < data.length; i += 4) {
    const l =
      0.2126 * data[i] +
      0.7152 * data[i + 1] +
      0.0722 * data[i + 2];

    lum.push(l);

    sum += l;
    min = Math.min(min, l);
    max = Math.max(max, l);
  }

  const brightness = sum / lum.length / 255;
  const contrast = (max - min) / 255;

  let edge = 0;
  for (let i = 1; i < lum.length; i++) {
    edge += Math.abs(lum[i] - lum[i - 1]);
  }

  edge = edge / lum.length / 255;

  const profile = { brightness, contrast, edge };

  cache.set(src, profile);
  return profile;
}