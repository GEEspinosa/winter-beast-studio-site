"use client";

import { useState, useEffect, useCallback } from "react";
import { homePageImages } from "@/lib/homePageImages";

export default function HomePageGallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = useCallback(() => {
    setSelectedIndex(null);
  }, []);

  const previousImage = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === 0
        ? homePageImages.length - 1
        : current - 1;
    });
  }, []);

  const nextImage = useCallback(() => {
    setSelectedIndex((current) => {
      if (current === null) return null;

      return current === homePageImages.length - 1
        ? 0
        : current + 1;
    });
  }, []);

  useEffect(() => {
    if (selectedIndex === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") previousImage();
      if (e.key === "ArrowRight") nextImage();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex, closeModal, previousImage, nextImage]);

  const selectedImage =
    selectedIndex !== null
      ? homePageImages[selectedIndex]
      : null;

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
        {homePageImages.map((src, index) => (
          <div
            key={src}
            className="mb-3 break-inside-avoid p-[2px] cursor-pointer"
            onClick={() => setSelectedIndex(index)}
          >
            <img
              src={src}
              alt=""
              className="w-full h-auto block hover:invert transition"
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 md:p-6"
          onClick={closeModal}
        >
          <div
            className="
              relative
              w-[min(1200px,95vw)]
              max-h-[92vh]
              bg-black
              text-[#e6e6e6]
              border border-white/10
              overflow-hidden
            "
            onClick={(e) => e.stopPropagation()}
          >
            {/* FRAME */}
            <div className="absolute inset-2 border border-white/10 pointer-events-none" />

            {/* CLOSE */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="
                absolute
                top-5
                right-5
                w-10
                h-10
                flex
                items-center
                justify-center
                text-zinc-500
                hover:text-white
                transition
                z-30
                leading-none
              "
            >
              <span className="text-4xl">×</span>
            </button>

            {/* PREVIOUS */}
            <button
              onClick={previousImage}
              aria-label="Previous image"
              className="
                absolute
                left-4
                md:left-6
                top-1/2
                -translate-y-1/2
                text-5xl
                text-zinc-600
                hover:text-white
                transition
                z-30
                leading-none
              "
            >
              ‹
            </button>

            {/* NEXT */}
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="
                absolute
                right-4
                md:right-6
                top-1/2
                -translate-y-1/2
                text-5xl
                text-zinc-600
                hover:text-white
                transition
                z-30
                leading-none
              "
            >
              ›
            </button>

            {/* CONTENT */}
            <div
              className="
                relative
                p-8
                md:p-10
                grid
                grid-cols-1
                md:grid-cols-[1fr_220px]
                gap-8
                items-center
                max-h-[92vh]
                overflow-y-auto
              "
            >
              {/* IMAGE */}
              <div className="flex items-center justify-center px-8 md:px-12">
                <img
                  src={selectedImage}
                  alt=""
                  className="
                    max-h-[78vh]
                    max-w-full
                    w-auto
                    object-contain
                  "
                />
              </div>

              {/* INFO */}
              <div className="mr-8 md:mr-12 self-end">
                <div className="space-y-5 text-[11px] uppercase tracking-[0.18em]">
                  <div className="border-t border-white/10 pt-4">
                    <p className="text-zinc-500 mb-1">
                      Winterbeast Archive
                    </p>

                    <p>
                      {(selectedIndex ?? 0) + 1} /{" "}
                      {homePageImages.length}
                    </p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <p className="text-zinc-500 mb-1">
                      Format
                    </p>

                    <p>35mm Scan</p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <p className="text-zinc-500 mb-1">
                      Context
                    </p>

                    <p>Field Documentation</p>
                  </div>

                  <div className="border-t border-white/10 pt-4">
                    <p className="text-zinc-500 mb-1">
                      Navigation
                    </p>

                    <p>← → Arrow Keys</p>
                    <p>Esc to Close</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}