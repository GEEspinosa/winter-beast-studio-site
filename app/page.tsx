import HeroImage from "@/components/HeroImage";
import ReleasesGrid from "@/components/ReleasesGrid";
import { featuredHomepageReleases } from "@/lib/selectors/featuredHomepageReleasesSelector";
import HomePageGallerySection from "@/components/HomePageGallerySection";

export default function Home() {
  return (
    <main className="bg-black text-[#e6e6e6]">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden ">
        <div className="absolute inset-0">
          <img
            src="/images/home-page/WinterBeast black n white blue paint Cover.webp"
            alt="Winterbeast studio"
            className="w-full h-full object-cover object-[center_10%]"
          />
        </div>

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-20  mx-auto w-full">
          <p className="text-[20px] uppercase tracking-[0.28em] text-zinc-300">
            Recording • Production • Mixing
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-light tracking-wide font-display">
            WinterBeast
          </h1>

          <p className="mt-6 text-[16px] leading-relaxed text-zinc-300 max-w-xl">
            Recording studio in Portland, Oregon focused on album production and
            long-form collaboration.
          </p>
        </div>

      {/* <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/home-page/WinterBeast black n white blue paint Cover.webp"
            alt="Winterbeast studio"
            className="w-full h-full object-cover object-[center_20%]"
          />
        </div>

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 text-center mx-auto w-full flex flex-col items-center">
          <p className="text-[20px] uppercase tracking-[0.28em] text-zinc-300">
            Recording • Production • Mixing
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-light tracking-wide font-display">
            WinterBeast
          </h1>

          <p className="mt-6 text-[16px] leading-relaxed text-zinc-300 max-w-xl">
            Recording studio in Portland, Oregon focused on album production and
            long-form collaboration.
          </p>
        </div> */}

        <div className="absolute inset-1 border border-white/30 pointer-events-none" />
        <div className="absolute inset-2 border border-white/30 pointer-events-none" />
        <div className="absolute inset-3 border border-white/30 pointer-events-none" />
        <div className="absolute inset-4 border border-white/30 pointer-events-none" />
      </section>

      {/* RELEASES */}
      {/* <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-[20px] uppercase tracking-[0.22em]  mb-10">
            Selected Work
          </p>
          <ReleasesGrid releases={featuredHomepageReleases} />
        </div>
        
      </section> */}


<section className="px-6 md:px-12 lg:px-20 py-20">
  <div className="max-w-6xl mx-auto">

    <p className="text-[20px] uppercase tracking-[0.22em] mb-10">
      Selected Work
    </p>

    <div className="relative bg-[#121A22] border border-white/10 p-5 md:p-8">

      <ReleasesGrid releases={featuredHomepageReleases} />

      <div className="absolute inset-1 border border-white/10 pointer-events-none" />
      <div className="absolute inset-2 border border-white/10 pointer-events-none" />

    </div>

  </div>
</section>

      {/* PRACTICE */}
      {/* <section className="relative px-6 md:px-12 lg:px-20 py-24 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <img
            src="/images/home-page/winterbeast-homepage-banner-mics-on-floor.webp"
            className="w-full h-full object-cover object-[center_80%]"
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[20px] uppercase tracking-[0.22em]">Practice</p>
          </div>
          <div className="md:col-span-8 space-y-12 text-[18px] leading-relaxed">
            <div>
              <p className="text-xl leading-relaxed">
                Records develop through extended collaboration, iteration, and
                revision rather than a fixed production formula.
              </p>
            </div>

            <div>
              <p>
                Analog front-end into digital multitrack recording and
                in-the-box mixing. A purposefully selected microphone collection
                and modular live room provide a flexible foundation for shaping
                each project.
              </p>
            </div>

            <div>
              <p className="text-xl leading-relaxed">
                The recording process follows the needs of the record rather
                than a predetermined workflow.
              </p>

              <p className="mt-4">
                Live, overdub, or hybrid tracking, editing, reamping, and
                layered textures become part of the process depending on the
                aims of the project.
              </p>
            </div>

            <div>
              <p className="text-xl leading-relaxed">
                WinterBeast intentionally takes on only a handful of projects
                each year.
              </p>

              <p className="mt-4 text-zinc-200">
                The studio focuses on EPs and full-length albums for artists who
                want to be deeply involved in the process, push beyond{" "}
                {' "good enough"'} takes, explore new directions, and give
                recordings the time they need to become their strongest
                versions.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="relative px-6 md:px-12 lg:px-20 py-16 md:py-20 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <img
            src="/images/home-page/winterbeast-homepage-banner-mics-on-floor.webp"
            className="w-full h-full object-cover object-[center_80%]"
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="text-[20px] uppercase tracking-[0.22em]">Practice</p>
          </div>

          <div className="md:col-span-7 space-y-10 text-[17px] leading-relaxed">
            <div>
              <p className="text-xl leading-relaxed">
                Records develop through extended collaboration, iteration, and
                revision rather than a fixed production formula.
              </p>

              <p className="mt-5">
                Analog front-end into digital multitrack recording and
                in-the-box mixing. A purposefully selected microphone collection
                and modular live room provide a flexible foundation for shaping
                each project.
              </p>
            </div>

            <div>
              <p>
                The recording process follows the needs of the record rather
                than a predetermined workflow. Live, overdub, or hybrid
                tracking, editing, reamping, and layered textures become part of
                the process depending on the aims of the project.
              </p>
            </div>

            <div>
              <p className="text-xl leading-relaxed">
                WinterBeast intentionally takes on only a handful of projects
                each year.
              </p>

              <p className="mt-5 text-zinc-200">
                The studio focuses on EPs and full-length albums for artists who
                want to be deeply involved in the process, push beyond{" "}
                {' "good enough"'} takes, explore new directions, and give
                recordings the time they need to become their strongest
                versions.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative px-6 md:px-12 lg:px-20 py-20 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0">
          <img
            src="/images/home-page/winterbeast-homepage-banner-mics-on-floor.webp"
            className="w-full h-full object-cover object-[center_80%]"
            alt=""
          />
        </div>

        <div className="absolute inset-0 bg-black/65" />

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-3">
              <p className="text-[20px] uppercase tracking-[0.22em]">
                Practice
              </p>
            </div>

            <div className="md:col-span-7 space-y-16">
              <div className="space-y-5">
                <p className="text-[17px] leading-relaxed">
                  Records develop through extended collaboration, iteration, and
                  revision rather than a fixed production formula.
                </p>

                <p className="text-[17px] leading-relaxed">
                  Analog front-end into digital multitrack recording, in-the-box
                  mixing. A selected microphone collection and a modular live
                  room with movable acoustic baffles.
                </p>

                <p className="text-[17px] leading-relaxed">
                  Live, overdub, or hybrid tracking, with attention to
                  microphone choice, room acoustics, and source sound. Editing,
                  comping, punch-ins, reamping, and layered textures are part of
                  the process as needed, whether the goal is a faithful document
                  of a performance or a record that goes beyond what the artist
                  could do live.
                </p>

                <p className="text-[17px] leading-relaxed">
                  WinterBeast takes on a small number of projects each year —
                  EPs and full-length albums, usually multi-week engagements —
                  for artists who want to be closely involved in the process and
                  give the record time to develop.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute inset-1 border border-white/30 pointer-events-none" />
        <div className="absolute inset-2 border border-white/30 pointer-events-none" />
        <div className="absolute inset-3 border border-white/30 pointer-events-none" />
        <div className="absolute inset-4 border border-white/30 pointer-events-none" />
      </section>

      <HomePageGallerySection />

      <section className="relative px-6 md:px-12 lg:px-20 py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="text-[20px] uppercase tracking-[0.22em]">About</p>
          </div>

          <div className="md:col-span-7 text-[17px] leading-relaxed">
            <p>
              WinterBeast is the studio of Gabriel Espinosa, a producer and
              recording engineer based in Portland, Oregon. Over the past decade
              he has recorded, produced, and mixed albums for select Portland
              independent artists. Before that, he worked as a freelance audio
              engineer, with credits including Blondie and Fischerspooner.
            </p>
          </div>
        </div>

        <div className="absolute inset-1 border border-white/30 pointer-events-none" />
        <div className="absolute inset-2 border border-white/30 pointer-events-none" />
        <div className="absolute inset-3 border border-white/30 pointer-events-none" />
        <div className="absolute inset-4 border border-white/30 pointer-events-none" />
      </section>
    </main>
  );
}
