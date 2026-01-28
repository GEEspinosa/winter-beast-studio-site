import { useState } from "react";

type ImageViewerProps = {
  images: string[];
  startIndex: number;
  onClose: () => void;
};

export function ImageViewer({ images, startIndex, onClose }: ImageViewerProps) {
  const [activeIndex, setActiveIndex] = useState(startIndex);

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white text-2xl z-10"
        aria-label="Close image viewer"
      >
        ✕
      </button>

      {/* Main image — UNCHANGED */}
      <div className="flex-1 flex items-center justify-center px-6">
        <img
          src={images[activeIndex]}
          alt=""
          className="w-auto h-auto max-h-[75vh] max-w-[90vw] object-contain"
        />
      </div>

      {/* Thumbnail carousel */}
      <div className="border-t border-white/20 px-6 py-4 overflow-x-auto">
        <div className="flex gap-4">
          {images.map((src, i) => (
            <button
              key={`${src}-${i}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`View image ${i + 1}`}
              className={`
                shrink-0
                transition
                ${
                  i === activeIndex
                    ? "ring-2 ring-blue-400"
                    : "ring-1 ring-white/30 hover:ring-white"
                }
              `}
            >
              {/* Square slide frame */}
              <div className="w-35 h-35 bg-white p-1 flex items-center justify-center">
                <img
                  src={src}
                  alt=""
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
