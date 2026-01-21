"use client";

import { useState } from "react";
import Image from "next/image";
import { Artist } from "../../lib/types/artist";
import AlbumView from "./AlbumView";

export default function ArtistOverviewView({ artist }: { artist: Artist }) {
  type ActivePanel = "releases" | "images" | "videos" | null;

  const [activePanel, setActivePanel] = useState<ActivePanel>(null);

  return (
    <section className="mb-8 max-w-4xl mx-auto px-4 text-white-900 ">
      {/* <h2 className="text-3xl font-semibold mb-4">{artist.artistName}</h2> */}
      <Image
        src={artist.artistBanner}
        width={1200}
        height={400}
        className="mb-6 border border-white"
        alt={`${artist.artistName} banner`}
      />

      <p className="leading-relaxed mb-6">{artist.overview}</p>

      {/* Toggle button */}

      <div className="inline-grid grid-cols-3 border border-white mb-2">
        <button
          onClick={() =>
            setActivePanel((prev) => (prev === "releases" ? null : "releases"))
          }
          className={`px-4 py-2 text-sm transition
      ${activePanel === "releases" ? "bg-white text-black" : "bg-black text-white"}
      border-r border-white last:border-r-0`}
        >
          Releases
        </button>

        <button
          onClick={() => setActivePanel((prev) => (prev === "images" ? null : "images"))}
          className={`px-4 py-2 text-sm transition
      ${activePanel === "images" ? "bg-white text-black" : "bg-black text-white"}
      border-r border-white last:border-r-0`}
        >
          Images
        </button>

        <button
          onClick={() => setActivePanel((prev) => (prev === "videos" ? null : "videos"))}
          className={`px-4 py-2 text-sm transition
      ${activePanel === "videos" ? "bg-white text-black" : "bg-black text-white"}`}
        >
          Videos
        </button>
      </div>

      {/* Render all albums */}
      <div className="border border-white bg-gray-900 p-6">
        {artist.output?.length ? (
          artist.output.map((album) => (
            <AlbumView key={album.selectOutputName} album={album} />
          ))
        ) : (
          <p className="text-gray-400 italic">No releases yet.</p>
        )}
      </div>
    </section>
  );
}
