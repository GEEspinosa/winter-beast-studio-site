"use client";

import { useEffect, useMemo, useState } from "react";

import {
  startAudioForImage,
  stopAudioForImage,
  updateAudioForImage,
} from "@/lib/audio/sound";

import { analyzeImageProfile } from "@/lib/audio/analyzeImage";

import type { ImageAudioProfile } from "@/lib/audio/types";

export default function HeroImage() {
  // -------------------------
  // 1. IMAGE SET (stable)
  // -------------------------
  const heroImages = useMemo(
    () => [
      "/images/home-page-film-icon/cherry-blossom-film-icon.webp",
      "/images/home-page-film-icon/dark-beach-film-icon.webp",
      "/images/home-page-film-icon/tower-film-icon.webp",
      "/images/home-page-film-icon/window-tree-film-icon.webp",
      "/images/home-page-film-icon/yuppie-vineyard-film-icon.webp",
      "/images/home-page-film-icon/netarts-beach-film-icon.webp",
      "/images/home-page-film-icon/gorge-waterfall-wa-film-icon.webp",
      "/images/home-page-film-icon/netarts-crooked-tree-film-icon.webp",
      "/images/home-page-film-icon/black-butte-trees-film-icon.webp",
      "/images/home-page-film-icon/porter-point-beach-stream-film-icon.webp",
      "/images/home-page-film-icon/tabor-tree-glare-shutter-leaves-film-icon.webp",
      "/images/home-page-film-icon/misty-gorge-trees-film-icon.webp",
      "/images/home-page-film-icon/tabor-res-reflection-film-icon.webp"
    ],
    []
  );

  // -------------------------
  // 2. STABLE RANDOM PICK (client-only)
  // -------------------------
  const [img] = useState<string>(() => {
    const i = Math.floor(Math.random() * heroImages.length);
    return heroImages[i];
  });

  // -------------------------
  // 3. IMAGE ANALYSIS PROFILE
  // -------------------------
  const [profile, setProfile] = useState<ImageAudioProfile | null>(null);

  useEffect(() => {
    let alive = true;

    (async () => {
      const p = await analyzeImageProfile(img);
      if (alive) setProfile(p);
    })();

    return () => {
      alive = false;
    };
  }, [img]);

  // -------------------------
  // 4. RENDER
  // -------------------------
  return (
    <img
      src={img}
      alt=""
      // draggable={false}
      // onMouseEnter={() => {
      //   if (!profile) return;
      //   startAudioForImage(img, profile);
      // }}
      // onMouseLeave={() => {
      //   stopAudioForImage(img);
      // }}
      // onMouseMove={(e) => {
      //   if (!profile) return;

      //   const rect = e.currentTarget.getBoundingClientRect();

      //   const x = (e.clientX - rect.left) / rect.width;
      //   const y = (e.clientY - rect.top) / rect.height;

      //   updateAudioForImage(img, x, y, profile);
      // }}
      className="
        absolute inset-0 w-full h-full object-cover
        grayscale contrast-125 brightness-150 opacity-80
        transition duration-300
        hover:invert
      "
    />
  );
}