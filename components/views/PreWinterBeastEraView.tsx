"use client";

import { useDirectoryToggle } from "../../context/DirectoryToggleContext";
import { eraData } from "../../lib/preWinterBeastData";

export default function PreWinterbeastEraView() {
  const { selectedNode } = useDirectoryToggle();

  const eraId = selectedNode?.eraId ?? "2006-2011";
  const era = eraData[eraId];

  if (!era) return null;

  return (
    <section className="max-w-5xl mx-auto px-4 text-white pb-24">
      {/* HERO */}
      <div className="mb-10 border border-white">
        <img
          src={`/images/archive/${era.id}.jpg`}
          alt={era.title}
          className="w-full object-cover"
          style={{ maxHeight: "420px" }}
        />
      </div>

      <div className="mb-10">
        <h1 className="text-3xl">{era.title}</h1>

        <div className="text-xs uppercase tracking-[0.2em] text-[#cdb654] mt-2">
          {era.period} • {era.location}
        </div>

        <p className="text-sm text-zinc-400 mt-6 max-w-3xl leading-relaxed">
          {era.description}
        </p>
      </div>

      {/* CONTEXT / PEOPLE (optional extension slot) */}
      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.22em] text-[#cdb654] mb-4">
          Context
        </h2>

        <p className="text-sm text-zinc-400 max-w-3xl">
          Work during this period involved frequent collaboration across
          shifting studio environments, adapting to different rooms, engineers,
          and production expectations.
        </p>
      </div>

      {/* RELEASES */}
      {/* <div className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.22em] text-[#cdb654] mb-6">
          Selected Work
        </h2>

        {era.releases.length === 0 ? (
          <p className="text-sm text-zinc-500">
            No cataloged releases for this period.
          </p>
        ) : (
          <div className="space-y-4">
            {era.releases.map((r, i) => (
              <div key={i} className="border border-white p-4">
                <div className="text-sm">{r.title}</div>
                {r.notes && (
                  <div className="text-xs text-zinc-400 mt-1">{r.notes}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div> */}

      {/* <div className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.22em] text-[#cdb654] mb-6">
          Selected Work
        </h2>

        <div className="space-y-6">
          {era.releases.map((release, i) => (
            <div
              key={i}
              className="
          border-b border-white/20
          py-6
        "
            >
              <div className="flex gap-6">
                {release.albumArtUrl && (
                  <img
                    src={release.albumArtUrl}
                    alt={release.title}
                    className="w-24 h-24 object-cover border border-white/20"
                  />
                )}

                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="text-lg">{release.title}</h3>

                    {release.year && (
                      <span className="text-xs text-zinc-500">
                        {release.year}
                      </span>
                    )}
                  </div>

                  <div className="text-sm text-zinc-400 mt-1">
                    {release.artist}
                  </div>
                  <div className="text-sm text-zinc-400 mt-1">
                    {release.credits}
                  </div>

                  {release.notes && (
                    <p className="text-sm text-zinc-400 mt-3 max-w-2xl">
                      {release.notes}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div> */}

      {/* <div className="space-y-12">
        {era.releases.map((release, i) => (
          <div
            key={i}
            className="
        border border-white/15
        hover:border-white/30
        transition
      "
          >
            <div className="grid md:grid-cols-[260px_1fr] gap-0">
              {release.albumArtUrl && (
                <div>
                  <img
                    src={release.albumArtUrl}
                    alt={release.title}
                    className="
                w-full
                aspect-square
                object-cover
              "
                  />
                </div>
              )}

              <div className="p-8 flex flex-col justify-center">
                <div className="text-xs uppercase tracking-[0.2em] text-[#cdb654] mb-3">
                  {release.year}
                </div>

                <h3 className="text-2xl mb-2">{release.title}</h3>

                <div className="text-zinc-300 mb-4">{release.artist}</div>

                {release.credits && (
                  <div className="text-sm text-zinc-500 mb-4">
                    {release.credits}
                  </div>
                )}

                {release.notes && (
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-2xl">
                    {release.notes}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div> */}

      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.22em] text-[#cdb654] mb-6">
          Selected Work
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {era.releases.map((release, i) => (
            <div key={i}>
              {release.albumArtUrl && (
                <img
                  src={release.albumArtUrl}
                  alt={release.title}
                  className="
              w-full
              aspect-square
              object-cover
              border border-white/15
            "
                />
              )}

              <div className="mt-3">
                <div className="text-sm text-white">{release.title}</div>

                <div className="text-sm text-zinc-400">{release.artist}</div>

                {release.year && (
                  <div className="text-xs text-zinc-500 mt-1">
                    {release.year}
                  </div>
                )}

                {release.credits && (
                  <div className="text-xs text-zinc-500 mt-2">
                    {release.credits}
                  </div>
                )}

                {release.notes && (
                  <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                    {release.notes}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* IMAGE STRIP (optional) */}
      {era.images && era.images.length > 0 && (
        <div>
          <h2 className="text-xs uppercase tracking-[0.22em] text-[#cdb654] mb-6">
            Archive
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {era.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt=""
                className="w-full border border-white object-cover"
              />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
