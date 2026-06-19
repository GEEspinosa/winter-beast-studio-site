// 



"use client";

import { useDirectoryToggle } from "../../context/DirectoryToggleContext";
import { eraData } from "../../lib/preWinterBeastData";

export default function PreWinterbeastEraView() {
  const { selectedNode, setSelectedNode } = useDirectoryToggle();

  if (!selectedNode) return null;

  if (selectedNode.fileType !== "pre-winterbeast-overview") {
    return null;
  }

  const era = eraData["pre-winterbeast"];

  if (!era) return null;

  return (
    <section className="max-w-5xl mx-auto px-4 text-white pb-24">

      {/* HERO */}
      <div className="mb-10 border border-white/20">
        <img
          src={era.heroImage}
          alt={era.title}
          className="w-full object-cover"
          style={{ maxHeight: "420px" }}
        />
      </div>

      {/* HEADER */}
      <div className="mb-12">
        <h1 className="text-3xl">{era.title}</h1>

        <div className="text-xs uppercase tracking-[0.2em] text-[#cdb654] mt-2">
          {era.location}
        </div>

        <p className="text-sm text-zinc-400 mt-6 max-w-3xl leading-relaxed">
          {era.description}
        </p>
      </div>

      {/* CONTEXT */}
      {era.context && (
        <div className="mb-12">
          <h2 className="text-xs uppercase tracking-[0.22em] text-[#cdb654] mb-4">
            Context
          </h2>

          <p className="text-sm text-zinc-400 max-w-3xl leading-relaxed">
            {era.context}
          </p>
        </div>
      )}

      {/* RELEASES */}
      <div className="mb-12">
        <h2 className="text-xs uppercase tracking-[0.22em] text-[#cdb654] mb-6">
          Selected Work
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {era.releases.map((release, i) => (
            <div
              key={i}
              className="border border-white/15 p-2"
              onClick={() =>
                setSelectedNode({
                  id: -1,
                  type: "file",
                  fileType: "pre-winterbeast-overview",
                  eraId: "pre-winterbeast",
                  name: release.title,
                })
              }
            >
              {release.albumArtUrl && (
                <img
                  src={release.albumArtUrl}
                  alt={release.title}
                  className="w-full aspect-square object-cover"
                />
              )}

              <div className="mt-3">
                <div className="text-sm text-white">{release.title}</div>
                <div className="text-sm text-zinc-400">{release.artist}</div>

                <div className="text-xs text-zinc-500 mt-1">
                  {release.year} {release.credits ? `• ${release.credits}` : ""}
                </div>

                {/* <p className="text-sm text-zinc-400 mt-3">
                  {release.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}