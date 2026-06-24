// components/ReleasesGrid.tsx
"use client";

import { useState } from "react";
import type { Album } from "@/lib/types/artist";
import AlbumViewModal from "@/components/views/AlbumViewModal";

export default function ReleasesGrid({ releases }: { releases: Album[] }) {
  const [selected, setSelected] = useState<Album | null>(null);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {releases.map((release) => (
          <button
            key={release.selectOutputName}
            onClick={() => setSelected(release)}
            className="p-[2px] text-left hover:border-white/25 transition"
          >
            <img
              src={release.albumArtUrl}
              className="w-full aspect-square object-cover hover:invert "
            />
            <div className="p-3">
              <p className="text-[16px]">{release.artistName}</p>
              <p className="text-[14px]">{release.outputName}</p>
            </div>
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6"
          onClick={() => setSelected(null)}
        >
          <div
            className="max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
          

            <AlbumViewModal
              album={selected}
              onClose={() => setSelected(null)}
            />
          </div>
        </div>
      )}
    </>
  );
}
