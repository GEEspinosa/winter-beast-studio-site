"use client";

import { useState } from "react";
import Image from "next/image";
import { Artist } from "../../lib/types/artist";
import AlbumView from "./AlbumView";
import { ImageViewer } from "./ImageViewer";

export default function ArtistOverviewView({ artist }: { artist: Artist }) {
  type ActivePanel = "releases" | "images" | "videos" | null;

  const [activePanel, setActivePanel] = useState<ActivePanel>(null);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

  const hasReleases = artist.output.some(
    (album) => !album.selectOutputName.toLowerCase().includes("wip"),
  );

  const hasImages = artist.media.photos.length > 0;
  const hasVideos = artist.media.videos.length > 0;

  const tabs: {
    key: Exclude<ActivePanel, null>;
    label: string;
    enabled: boolean;
  }[] = [
    { key: "releases", label: "Releases", enabled: hasReleases },
    { key: "images", label: "Images", enabled: hasImages },
    { key: "videos", label: "Videos", enabled: hasVideos },
  ] as const;

  // Type guard to filter enabled tabs and preserve literal key types
  const enabledTabs = tabs.filter(
    (t): t is typeof t & { key: ActivePanel } => t.enabled,
  );

  return (
    <section className="mb-8 max-w-4xl mx-auto px-4 text-white">
      {/* Artist Banner */}
      <Image
        src={artist.artistBanner}
        width={1200}
        height={400}
        className="mb-6 border border-white"
        alt={`${artist.artistName} banner`}
      />

      {/* Overview Text */}
      <p className="leading-relaxed mb-6">{artist.overview}</p>

      {/* Tab Buttons */}
      <div className="inline-grid grid-flow-col auto-cols-fr border border-white mb-4">
        {enabledTabs.map(({ key, label }, index) => (
          <button
            key={key}
            aria-pressed={activePanel === key}
            onClick={() =>
              setActivePanel((prev) => (prev === key ? null : key))
            }
            className={`
              px-4 py-2 text-sm transition
              ${activePanel === key ? "bg-white text-black" : "bg-black text-white"}
              ${index !== enabledTabs.length - 1 ? "border-r border-white" : ""}
            `}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Conditional Content Panels */}
      {activePanel === "releases" && (
        <div className="border border-white bg-gray-900 p-6">
          {artist.output?.length ? (
            artist.output.map((album) => (
              <AlbumView key={album.selectOutputName} album={album} />
            ))
          ) : (
            <p className="text-gray-400 italic">No releases yet.</p>
          )}
        </div>
      )}

      {activePanel === "images" && (
  <div className="border border-white bg-gray-900 p-6">
    {artist.media.photos.length ? (
      <div
        className="
          grid 
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-4
          auto-rows-[1fr]
        "
      >
        {artist.media.photos.map((src, i) => (
          <button
            key={src}
            onClick={() => {
              setViewerIndex(i);
              setViewerOpen(true);
            }}
            className="focus:outline-none"
          >
            <div className="relative w-full aspect-square bg-white p-2 flex items-center justify-center min-h-0">
              <Image
                src={src}
                alt={`${artist.artistName} photo ${i + 1}`}
                fill
                className="p-1 object-contain"
                sizes="(max-width: 768px) 100vw, 300px"
                priority={false}
              />
            </div>
          </button>
        ))}
      </div>
    ) : (
      <p className="text-gray-400 italic">No images available.</p>
    )}
  </div>
)}


      {activePanel === "videos" && (
        <div className="border border-white bg-gray-900 p-6">
          {artist.media.videos.length ? (
            // Replace with your video player/gallery component or markup
            <div className="space-y-4">
              {artist.media.videos.map((videoUrl, i) => (
                <video
                  key={i}
                  src={videoUrl}
                  controls
                  className="w-full rounded"
                />
              ))}
            </div>
          ) : (
            <p className="text-gray-400 italic">No videos available.</p>
          )}
        </div>
      )}

      {viewerOpen && (
        <ImageViewer
          images={artist.media.photos}
          startIndex={viewerIndex}
          onClose={() => setViewerOpen(false)}
        />
      )}
    </section>
  );
}
