"use client";

import { useState } from "react";
import type { Album } from "@/lib/types/artist";
import AlbumViewModal from "@/components/views/AlbumViewModal";

export default function ReleasesGrid({
  releases,
}: {
  releases: Album[];
}) {
  const [selected, setSelected] = useState<Album | null>(null);

  return (
    <>
      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-start">
        {releases.map((release) => (
          <button
            key={release.selectOutputName}
            onClick={() => setSelected(release)}
            className="
              group text-left
              p-[2px]
              border border-transparent
              hover:border-white/20
              transition
              overflow-hidden
            "
          >
            {/* IMAGE (fixed aspect = no layout shift) */}
            <div className="aspect-square w-full overflow-hidden bg-black">
              <img
                src={release.albumArtUrl}
                className="
                  w-full h-full object-cover
                  group-hover:invert transition
                "
                alt={release.outputName}
              />
            </div>

            {/* TEXT (fixed height prevents reflow) */}
            <div className="p-3 h-[72px] flex flex-col justify-start overflow-hidden">
              <p className="text-[15px] leading-tight truncate">
                {release.artistName}
              </p>

              <p className="text-[13px] text-zinc-300 leading-tight truncate">
                {release.outputName}
              </p>
            </div>
          </button>
        ))}
      </div>

      {/* MODAL */}
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