
"use client";

import { useState } from "react";
import ReleasesGrid from "@/components/ReleasesGrid";
import type { Album } from "@/lib/types/artist";

export default function ExpandableReleases({
  releases,
}: {
  releases: Album[];
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-8">
      <button
        type="button"
        onClick={() => setExpanded((current) => !current)}
        aria-expanded={expanded}
        className="text-[12px] uppercase tracking-[0.16em] border border-white/30 px-3 py-2 hover:border-white transition"
      >
        {expanded ? "Show less −" : "More releases +"}
      </button>

      {expanded && (
        <section className="mt-12">
          <p className="text-[20px] uppercase tracking-[0.22em] mb-10">
            Pre-WinterBeast Releases
          </p>

          <ReleasesGrid releases={releases} />
        </section>
      )}
    </div>
  );
}
