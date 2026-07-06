"use client";

export default function AboutPage() {
  return (
    <main className="px-6 md:px-12 lg:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        {/* PAGE TITLE */}
        <header className="mb-24">
          <p className="text-[20px] uppercase tracking-[0.22em]">About</p>

          <p className="mt-6 max-w-3xl text-[18px] leading-8 text-zinc-300">
            Placeholder introduction.
          </p>
        </header>

        {/* PORTRAIT + INTRO */}
        <section className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start mb-28">
          {/* <div>
            <div className="aspect-[4/5] border border-white/10 bg-zinc-900 flex items-center justify-center">
              <span className="text-zinc-600 text-sm uppercase tracking-[0.18em]">
                Portrait
              </span>
            </div>
          </div> */}

          <div className="relative">
            {/* Outer frame */}
            <div className="absolute inset-2 border border-white/10 pointer-events-none z-10" />

            <img
              src="/images/about/gabriel.webp"
              alt="Gabriel Espinosa at Winterbeast"
              className="
      w-full
      aspect-[4/5]
      object-cover
      border
      border-white/10
      grayscale
      hover:grayscale-0
      transition
      duration-500
    "
            />
          </div>

          <div>
            <div className="text-[11px] uppercase tracking-[0.18em] text-zinc-500 mb-6">
              Gabriel Espinosa
            </div>

            <div className="space-y-6 text-[17px] leading-8 text-zinc-300 max-w-2xl">
              <p>Placeholder paragraph.</p>

              <p>Placeholder paragraph.</p>

              <p>Placeholder paragraph.</p>
            </div>
          </div>
        </section>

        <div className="border-t border-white/10 mb-24" />

        {/* BUILDING THE STUDIO */}
        <section className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 mb-28">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              Building Winterbeast
            </p>
          </div>

          <div className="space-y-6 text-[17px] leading-8 text-zinc-300 max-w-3xl">
            <p>Placeholder paragraph.</p>

            <p>Placeholder paragraph.</p>
          </div>
        </section>

        <div className="border-t border-white/10 mb-24" />

        {/* PHILOSOPHY */}
        <section className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12 mb-28">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              Philosophy
            </p>
          </div>

          <div className="space-y-6 text-[17px] leading-8 text-zinc-300 max-w-3xl">
            <p>Placeholder paragraph.</p>

            <p>Placeholder paragraph.</p>

            <p>Placeholder paragraph.</p>
          </div>
        </section>

        <div className="border-t border-white/10 mb-24" />

        {/* TIMELINE */}
        <section className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">
          <div>
            <p className="text-[11px] uppercase tracking-[0.18em] text-zinc-500">
              Timeline
            </p>
          </div>

          <div className="space-y-10">
            <div className="grid grid-cols-[90px_1fr] gap-8">
              <p className="font-mono text-zinc-500">2008</p>

              <p className="text-zinc-300">Placeholder milestone.</p>
            </div>

            <div className="grid grid-cols-[90px_1fr] gap-8">
              <p className="font-mono text-zinc-500">2018</p>

              <p className="text-zinc-300">Placeholder milestone.</p>
            </div>

            <div className="grid grid-cols-[90px_1fr] gap-8">
              <p className="font-mono text-zinc-500">2019–20</p>

              <p className="text-zinc-300">Placeholder milestone.</p>
            </div>

            <div className="grid grid-cols-[90px_1fr] gap-8">
              <p className="font-mono text-zinc-500">Present</p>

              <p className="text-zinc-300">Placeholder milestone.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
