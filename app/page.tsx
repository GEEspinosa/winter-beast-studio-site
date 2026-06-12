import { homePageImages } from "../lib/homePageImages";
import { featuredHomepageReleases } from "@/lib/selectors/featuredHomepageReleasesSelector";
import Link from "next/link";



export default function Home() {
  return (
    <main className="bg-[#181818] text-[#e6e6e6]">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">
        {/* HERO IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/images/home-page/WinterBeast black n white blue paint Cover.webp"
            alt="Winterbeast studio"
            className="w-full h-full object-cover object-[center_10%]"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/25" />

        {/* HERO CONTENT */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-20 max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.28em] text-[#cdb654]">
            Recording • Production • Mixing
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-light tracking-wide">
            Winterbeast
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-300">
            Album-focused recording and long-form collaboration in Portland.
          </p>

{/* LINKS */}
<div className="mt-8 flex gap-8 text-sm">
  <Link
    href="/documentation"
    className="group inline-flex items-center text-zinc-300 hover:text-white transition border-b border-transparent hover:border-[#cdb654]"
  >
    Documentation
    <span className="ml-1 arrow-rotate-left transition-transform duration-200 group-hover:translate-x-1">
      →
    </span>
  </Link>

  <Link
    href="/about"
    className="group inline-flex items-center text-zinc-300 hover:text-white transition border-b border-transparent hover:border-[#cdb654]"
  >
    About
    <span className="ml-1 arrow-rotate-left transition-transform duration-200 group-hover:translate-x-1">
      →
    </span>
  </Link>
</div>
        
        </div>
      </section>

      {/* releases */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="mb-12">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654]">
            Selected Releases
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {featuredHomepageReleases.map((release) => (
            <div
              key={release.selectOutputName}
              className="border border-zinc-300/15 p-[2px] hover:border-zinc-300/30 transition"
            >
              <img
                src={release.albumArtUrl}
                alt={release.selectOutputName}
                className="w-full aspect-square object-cover"
              />

              <div className="p-2">
                <p className="text-xs text-zinc-200">{release.artistName}</p>

                <p className="text-xs text-zinc-500">{release.outputName}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#222]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* TEXT */}
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654]">
              Process
            </p>

            <div className="mt-6 text-sm leading-relaxed text-zinc-400 space-y-4">
              <p>
                Winterbeast is a recording environment built around sustained
                attention to records over time rather than short, transactional
                sessions.
              </p>

              <p>
                Work develops through repetition, listening, and revision. Takes
                are not treated as raw material to be fixed later, but part of
                an evolving structure shaped gradually through collaboration.
              </p>

              <p>
                The focus is on albums as complete objects rather than isolated
                deliverables. Sessions are organized to allow decisions to
                remain open long enough for the material to define its own
                direction.
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className="border border-zinc-300/15 p-[2px] bg-[#1b1b1b]">
            <img
              src="/images/home-page/Home quad color enter.webp"
              alt="Winterbeast process abstraction"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="max-w-5xl mx-auto mt-8">
          <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-600">
            Documentation over throughput
          </p>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-3 md:px-4 py-3">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
          {homePageImages.map((src, index) => (
            <div
              key={src}
              className="mb-3 break-inside-avoid border border-zinc-300/15 p-[2px]"
            >
              <img
                src={src}
                alt=""
                className={`
                  w-full h-auto block
                  ${index % 5 === 0 ? "brightness-95" : ""}
                `}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER TEXT
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#222]">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654]">
            Process
          </p>

          <p className="mt-6 text-sm leading-relaxed text-zinc-400">
            Winterbeast is a recording and production space centered around
            album-oriented work, extended collaboration, documentation, and
            iterative process rather than high-throughput commercial sessions.
          </p>
        </div>
      </section> */}
    </main>
  );
}
