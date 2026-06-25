"use client";

import { useState, useEffect } from "react";
import { homePageImages } from "@/lib/homePageImages";

export default function HomePageGallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section className="px-6 md:px-12 lg:px-20 py-16">
      {/* HEADER */}
      <p className="max-w-6xl mx-auto mt-6 text-[20px] uppercase tracking-[0.22em] mb-10">
        Gallery
      </p>

      <div className="max-w-6xl mx-auto mt-6 text-[12px] uppercase tracking-[0.18em] text-zinc-400">
        Scanned from 35mm negatives
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-3 mt-8">
        {homePageImages.map((src) => (
          <div
            key={src}
            className="mb-3 break-inside-avoid p-[2px] cursor-pointer"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              className="w-full h-auto block hover:invert transition"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6 overflow-y-auto"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative w-[min(1000px,92vw)] max-h-[90vh] bg-black text-[#e6e6e6] shadow-2xl overflow-y-auto border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* FRAME (match AlbumViewModal) */}
            <div className="absolute inset-2 border border-white/10 pointer-events-none" />

            {/* CLOSE */}
            <button
              onClick={() => setSelectedImage(null)}
              aria-label="Close modal"
              className="
          absolute top-5 right-5
          w-10 h-10
          flex items-center justify-center
          text-zinc-400 hover:text-white
          transition
          z-20
          leading-none
        "
            >
              <span className="text-4xl">×</span>
            </button>

            {/* CONTENT */}
            <div className="relative p-7 grid grid-cols-1 md:grid-cols-5 gap-6">
              {/* IMAGE */}
              <div className="md:col-span-4 flex items-center justify-center">
                <img
                  src={selectedImage}
                  className="max-h-[80vh] w-auto max-w-full object-contain"
                />
              </div>

              {/* INFO PANEL */}
              <div className="md:col-span-1 flex flex-col justify-end text-[12px] uppercase tracking-[0.2em] text-zinc-300 space-y-4">
                <div className="border-t border-white/10 pt-4">
                  <p className="text-zinc-500">Winterbeast Archive</p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-zinc-500">Format</p>
                  <p>35mm Scan</p>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <p className="text-zinc-500">Context</p>
                  <p>Field documentation</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
