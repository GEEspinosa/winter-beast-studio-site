// import { homePageImages } from "../lib/homePageImages";
// import { featuredHomepageReleases } from "@/lib/selectors/featuredHomepageReleasesSelector";
// import Link from "next/link";

// export default function Home() {
//   return (
//     <main className="bg-[#181818] text-[#e6e6e6]">
//       {/* HERO */}
//       <section className="relative min-h-[92vh] flex items-end overflow-hidden">
//         {/* HERO IMAGE */}
//         <div className="absolute inset-0">
//           <img
//             src="/images/home-page/WinterBeast black n white blue paint Cover.webp"
//             alt="Winterbeast studio"
//             className="w-full h-full object-cover object-[center_10%]"
//           />
//         </div>

//         {/* OVERLAY */}
//         <div className="absolute inset-0 bg-black/25" />

//         {/* HERO CONTENT */}
//         <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-20 max-w-2xl">
//           <p className="text-[11px] uppercase tracking-[0.28em] text-[#cdb654]">
//             Recording • Production • Mixing
//           </p>

//           <h1 className="mt-5 text-4xl md:text-6xl font-light tracking-wide">
//             Winterbeast
//           </h1>

//           <p className="mt-6 max-w-md text-sm leading-relaxed text-zinc-300">
//             Recording studio in Portland, Oregon, focused on album production
//             and long-form collaboration.
//           </p>

//           {/* LINKS */}
//           {/* <div className="mt-8 flex gap-8 text-sm">
//             <Link
//               href="/documentation"
//               className="group inline-flex items-center text-zinc-300 hover:text-white transition border-b border-transparent hover:border-[#cdb654]"
//             >
//               Documentation
//               <span className="ml-1 arrow-rotate-left transition-transform duration-200 group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>

//             <Link
//               href="/about"
//               className="group inline-flex items-center text-zinc-300 hover:text-white transition border-b border-transparent hover:border-[#cdb654]"
//             >
//               About
//               <span className="ml-1 arrow-rotate-left transition-transform duration-200 group-hover:translate-x-1">
//                 →
//               </span>
//             </Link>
//           </div> */}
//         </div>
//       </section>

//       {/* releases */}
//       <section className="px-6 md:px-12 lg:px-20 py-20">
//         <div className="mb-12">
//           <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654]">
//             Selected Releases
//           </p>
//         </div>

//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//           {featuredHomepageReleases.map((release) => (
//             <div
//               key={release.selectOutputName}
//               className="border border-zinc-300/15 p-[2px] hover:border-zinc-300/30 transition"
//             >
//               <img
//                 src={release.albumArtUrl}
//                 alt={release.selectOutputName}
//                 className="w-full aspect-square object-cover"
//               />

//               <div className="p-2">
//                 <p className="text-xs text-zinc-200">{release.artistName}</p>

//                 <p className="text-xs text-zinc-500">{release.outputName}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#222]">
//         <div className="max-w-5xl mx-auto">
//           <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654]">
//             Practice
//           </p>

//           <div className="mt-6 text-sm leading-relaxed text-zinc-400 space-y-4 max-w-2xl">
//             <p>
//               Recording, mixing, and production centered on studio-based work,
//               combining analog front-end capture with digital recording and mix
//               workflows.
//             </p>

//             <p>
//               Live tracking, overdubbing, experimental mic techniques, reamping,
//               and layered sound development with musicians and sound makers.
//             </p>

//             <p>
//               Work develops through long-form collaboration, iteration, and
//               revision rather than fixed-session production schedules.
//             </p>

//             <p>
//               Focused on EP and full-length records developed over time through
//               sustained collaboration.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* GALLERY */}
//       <section className="px-3 md:px-4 py-3">
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
//           {homePageImages.map((src, index) => (
//             <div
//               key={src}
//               className="mb-3 break-inside-avoid border border-zinc-300/15 p-[2px]"
//             >
//               <img
//                 src={src}
//                 alt=""
//                 className={`
//                   w-full h-auto block
//                   ${index % 5 === 0 ? "brightness-95" : ""}
//                 `}
//               />
//             </div>
//           ))}
//         </div>
//       </section>
//       {/* FOOTER TEXT */}
//       {/* <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#222]">
//         <div className="max-w-2xl">
//           <p className="mt-6 text-sm leading-relaxed text-zinc-400">
//             Projects are developed over time rather than through fixed-session
//             production schedules. The focus is on sustained collaboration,
//             iteration, and full-record outcomes rather than isolated
//             deliverables.
//           </p>
//         </div>
//       </section> */}
//     </main>
//   );
// }

// import { homePageImages } from "../lib/homePageImages";
// import { featuredHomepageReleases } from "@/lib/selectors/featuredHomepageReleasesSelector";

// export default function Home() {
//   return (
//     <main className="bg-[#181818] text-[#e6e6e6]">
//       {/* HERO */}
//       <section className="relative min-h-[92vh] flex items-end overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="/images/home-page/WinterBeast black n white blue paint Cover.webp"
//             alt="Winterbeast studio"
//             className="w-full h-full object-cover object-[center_10%]"
//           />
//         </div>

//         <div className="absolute inset-0 bg-black/30" />

//         <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-20 max-w-3xl">
//           <p className="text-[11px] uppercase tracking-[0.28em] text-[#cdb654]">
//             Recording • Production • Mixing
//           </p>

//           <h1 className="mt-5 text-4xl md:text-6xl font-light tracking-wide">
//             Winterbeast
//           </h1>

//           <p className="mt-6 text-sm leading-relaxed text-zinc-300 max-w-xl">
//             Recording studio in Portland, Oregon focused on album production and
//             long-form collaboration.
//           </p>
//         </div>
//       </section>

//       {/* RELEASES */}
//       <section className="px-6 md:px-12 lg:px-20 py-10">
//         <div className="max-w-6xl mx-auto">
//           <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654] mb-10">
//             Selected Work
//           </p>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//             {featuredHomepageReleases.map((release) => (
//               <div
//                 key={release.selectOutputName}
//                 className="group border border-white/10 p-[2px] hover:border-white/25 transition"
//               >
//                 <div className="overflow-hidden bg-black">
//                   <img
//                     src={release.albumArtUrl}
//                     alt={release.selectOutputName}
//                     className="w-full aspect-square object-cover group-hover:scale-[1.02] transition duration-300"
//                   />
//                 </div>

//                 <div className="p-3">
//                   <p className="text-xs text-zinc-200">{release.artistName}</p>
//                   <p className="text-xs text-zinc-500">{release.outputName}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PRACTICE */}
//       <section className="relative px-6 md:px-12 lg:px-20 py-24 border-t border-white/10 overflow-hidden">
//         {/* background image */}
//         <div className="absolute inset-0">
//           <img
//             src="/images/home-page/winterbeast-homepage-banner-mics-on-floor.webp"
//             alt=""
//             // className="w-full h-full object-cover scale-105"
//             className="w-full h-full object-cover object-[center_80%]"
//           />
//         </div>

//         {/* subtle vignette for focus */}
//         <div className="absolute inset-0 bg-black/40" />

//         {/* content */}
//         <div className="relative z-10 max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
//           <div className="md:col-span-4">
//             <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654]">
//               Practice
//             </p>
//           </div>

//           <div className="md:col-span-8 space-y-6 text-sm leading-relaxed text-zinc-300">
//             <p>
//               Recording, mixing, and production centered on studio-based work.
//               Analog front-end capture into digital recording and mix workflows.
//             </p>

//             <p>
//               Live tracking, overdubbing, close and distant mic techniques,
//               reamping, and layered sound construction with artists and bands.
//             </p>

//             <p>
//               Projects develop through extended collaboration, iteration, and
//               revision rather than fixed-session production schedules.
//             </p>

//             <p className="text-zinc-200">
//               EPs and full-length records developed over time as complete works,
//               not isolated deliverables.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ARCHIVE / IMAGE GRID */}
//       <section className="px-3 md:px-4 py-3">
//         <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">
//           {homePageImages.map((src, index) => (
//             <div
//               key={src}
//               className="mb-3 break-inside-avoid border border-white/10 p-[2px] bg-black/20"
//             >
//               <img src={src} alt="" className="w-full h-auto block" />
//             </div>
//           ))}
//         </div>
//         <div className="mt-10 text-[11px] uppercase tracking-[0.18em] text-zinc-600">
//           * Images captured on and scanned from 35mm film.
//         </div>
//       </section>

//       <section className="relative px-6 md:px-12 lg:px-20 py-24 border-t border-white/10 overflow-hidden">
//         {/* background image */}
//         <div className="absolute inset-0">
//           <img
//             src="/images/home-page/winterbeast-homepage-banner-bassplayer.webp"
//             alt=""
//             className="w-full h-full object-cover object-[center_65%]"
//           />
//         </div>

//         {/* vignette overlay */}
//         <div className="absolute inset-0 bg-black/20" />

//         {/* content */}
//         <div className="relative z-10 max-w-2xl">
//           <p className="text-sm leading-relaxed text-zinc-300">
//             Album-oriented recording and production. Extended collaboration.
//             Iterative process. Documentation of sound over throughput.
//           </p>
//         </div>
//       </section>
//     </main>
//   );
// }

// import { homePageImages } from "../lib/homePageImages";
// import { featuredHomepageReleases } from "@/lib/selectors/featuredHomepageReleasesSelector";

// export default function Home() {
//   return (
//     <main className="bg-[#181818] text-[#e6e6e6]">

//       {/* HERO */}
//       <section className="relative min-h-[92vh] flex items-end overflow-hidden">

//         <div className="absolute inset-0">
//           <img
//             src="/images/home-page/WinterBeast black n white blue paint Cover.webp"
//             alt="Winterbeast studio"
//             className="w-full h-full object-cover object-[center_10%]"
//           />
//         </div>

//         <div className="absolute inset-0 bg-black/30" />

//         <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-20 max-w-6xl mx-auto w-full">
//           <p className="text-[11px] uppercase tracking-[0.28em] text-[#cdb654]">
//             Recording • Production • Mixing
//           </p>

//           <h1 className="mt-5 text-4xl md:text-6xl font-light tracking-wide">
//             Winterbeast
//           </h1>

//           <p className="mt-6 text-sm leading-relaxed text-zinc-300 max-w-xl">
//             Recording studio in Portland, Oregon focused on album production and long-form collaboration.
//           </p>
//         </div>
//       </section>

//       {/* RELEASES */}
//       <section className="px-6 md:px-12 lg:px-20 py-20">
//         <div className="max-w-6xl mx-auto">

//           <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654] mb-10">
//             Selected Work
//           </p>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//             {featuredHomepageReleases.map((release) => (
//               <div
//                 key={release.selectOutputName}
//                 className="group border border-white/10 p-[2px] hover:border-white/25 transition"
//               >
//                 <div className="overflow-hidden bg-black">
//                   <img
//                     src={release.albumArtUrl}
//                     alt={release.selectOutputName}
//                     className="w-full aspect-square object-cover group-hover:scale-[1.02] transition duration-300"
//                   />
//                 </div>

//                 <div className="p-3">
//                   <p className="text-xs text-zinc-200">{release.artistName}</p>
//                   <p className="text-xs text-zinc-500">{release.outputName}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </section>

//       {/* PRACTICE */}
//       <section className="relative px-6 md:px-12 lg:px-20 py-24 border-t border-white/10 overflow-hidden">

//         <div className="absolute inset-0">
//           <img
//             src="/images/home-page/winterbeast-homepage-banner-mics-on-floor.webp"
//             alt=""
//             className="w-full h-full object-cover object-[center_80%]"
//           />
//         </div>

//         <div className="absolute inset-0 bg-black/40" />

//         <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

//           <div className="md:col-span-4">
//             <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654]">
//               Practice
//             </p>
//           </div>

//           <div className="md:col-span-8 space-y-6 text-sm leading-relaxed text-zinc-300 max-w-3xl">

//             <p>
//               Recording, mixing, and production centered on studio-based work.
//               Analog front-end capture into digital recording and mix workflows.
//             </p>

//             <p>
//               Live tracking, overdubbing, close and distant mic techniques,
//               reamping, and layered sound construction with artists and bands.
//             </p>

//             <p>
//               Projects develop through extended collaboration, iteration, and revision
//               rather than fixed-session production schedules.
//             </p>

//             <p className="text-zinc-200">
//               EPs and full-length records developed over time as complete works,
//               not isolated deliverables.
//             </p>

//           </div>
//         </div>
//       </section>

//       {/* ARCHIVE */}
//       <section className="px-6 md:px-12 lg:px-20 py-3">

//         <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-3">

//           {homePageImages.map((src) => (
//             <div
//               key={src}
//               className="mb-3 break-inside-avoid border border-white/10 p-[2px] bg-black/20"
//             >
//               <img src={src} alt="" className="w-full h-auto block" />
//             </div>
//           ))}

//         </div>

//         <div className="max-w-6xl mx-auto mt-10 text-[11px] uppercase tracking-[0.18em] text-zinc-600">
//           * Images captured on and scanned from 35mm film.
//         </div>

//       </section>

//       {/* FOOTER */}
//       <section className="relative px-6 md:px-12 lg:px-20 py-24 border-t border-white/10 overflow-hidden">

//         <div className="absolute inset-0">
//           <img
//             src="/images/home-page/winterbeast-homepage-banner-bassplayer.webp"
//             alt=""
//             className="w-full h-full object-cover object-[center_65%]"
//           />
//         </div>

//         <div className="absolute inset-0 bg-black/40" />

//         <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">

//           <div className="md:col-span-4">
//             <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654]">
//               Winterbeast
//             </p>
//           </div>

//           <div className="md:col-span-8">
//             <p className="text-sm leading-relaxed text-zinc-400 max-w-3xl">
//               Album-oriented recording and production. Extended collaboration.
//               Iterative process. Documentation of sound over throughput.
//             </p>
//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }

// import { homePageImages } from "../lib/homePageImages";
// import { featuredHomepageReleases } from "@/lib/selectors/featuredHomepageReleasesSelector";

// export default function Home() {
//   return (
//     <main className="bg-[#181818] text-[#e6e6e6]">

//       {/* HERO */}
//       <section className="relative min-h-[92vh] flex items-end overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="/images/home-page/WinterBeast black n white blue paint Cover.webp"
//             alt="Winterbeast studio"
//             className="w-full h-full object-cover object-[center_10%]"
//           />
//         </div>

//         <div className="absolute inset-0 bg-black/30" />

//         <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-20 max-w-6xl mx-auto w-full">
//           <p className="text-[11px] uppercase tracking-[0.28em] text-[#cdb654]">
//             Recording • Production • Mixing
//           </p>

//           <h1 className="mt-5 text-4xl md:text-6xl font-light tracking-wide ">
//             Winterbeast
//           </h1>

//           <p className="mt-6 text-sm leading-relaxed text-zinc-300 max-w-xl">
//             Recording studio in Portland, Oregon focused on album production and long-form collaboration.
//           </p>
//         </div>
//       </section>

//       {/* RELEASES */}
//       <section className="px-6 md:px-12 lg:px-20 py-16 ">
//         <div className="max-w-6xl mx-auto ">
//           <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654] mb-10">
//             Selected Work
//           </p>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
//             {featuredHomepageReleases.map((release) => (
//               <div
//                 key={release.selectOutputName}
//                 className=" p-[2px] hover:border-white/25 transition"
//               >
//                 <img
//                   src={release.albumArtUrl}
//                   className="w-full aspect-square object-cover"
//                 />

//                 <div className="p-3">
//                   <p className="text-xs text-zinc-200">{release.artistName}</p>
//                   <p className="text-xs text-zinc-500">{release.outputName}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* PRACTICE */}
//     <section className="relative px-6 md:px-12 lg:px-20 py-24 overflow-hidden border-t border-white/10">
//   {/* background */}
//   <div className="absolute inset-0">
//     <img
//       src="/images/home-page/winterbeast-homepage-banner-mics-on-floor.webp"
//       className="w-full h-full object-cover object-[center_80%]"
//       alt=""
//     />
//   </div>

//   <div className="absolute inset-0 bg-black/40" />

//   {/* content — now aligned with rest of site */}
//   <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
//     <div className="md:col-span-4">
//       <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654]">
//         Practice
//       </p>
//     </div>

//     <div className="md:col-span-8 space-y-6 text-sm text-zinc-300 leading-relaxed">
//       <p>
//         Recording, mixing, and production centered on studio-based work.
//         Analog front-end capture into digital recording and mix workflows.
//       </p>

//       <p>
//         Live tracking, overdubbing, close and distant mic techniques,
//         reamping, and layered sound construction with artists and bands.
//       </p>

//       <p>
//         Projects develop through extended collaboration, iteration, and revision.
//       </p>

//       <p className="text-zinc-200">
//         EPs and full-length records developed over time as complete works.
//       </p>
//     </div>
//   </div>
// </section>

//       {/* GALLERY */}
//       <section className="px-6 md:px-12 lg:px-20 py-6">
//         <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-3">
//           {homePageImages.map((src) => (
//             <div key={src} className="mb-3 break-inside-avoid p-[2px]">
//               <img src={src} className="w-full h-auto block" />
//             </div>
//           ))}
//         </div>

//         <div className="max-w-6xl mx-auto mt-8 text-[11px] uppercase tracking-[0.18em] text-zinc-600">
//           Images captured on and scanned from 35mm film
//         </div>
//       </section>
//     </main>
//   );
// }

import HeroImage from "@/components/HeroImage";
import { homePageImages } from "../lib/homePageImages";
import ReleasesGrid from "@/components/ReleasesGrid";
import { featuredHomepageReleases } from "@/lib/selectors/featuredHomepageReleasesSelector";



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

        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-20  mx-auto w-full">
          <p className="text-[20px] uppercase tracking-[0.28em] t">
            Recording • Production • Mixing
          </p>

          <h1 className="mt-5 text-4xl md:text-6xl font-light tracking-wide font-display">
            Winterbeast
          </h1>

          <p className="mt-6 text-[16px] leading-relaxed text-zinc-300 max-w-xl">
            Recording studio in Portland, Oregon focused on album production and
            long-form collaboration.
          </p>
        </div>

        {/* RIGHT FILM FRAME */}
        <div className="hidden md:block absolute right-10 lg:right-16 top-1/2 -translate-y-1/2">
          <div className="relative w-[320px] lg:w-[380px] aspect-[2/3] border border-white/30 bg-black/10">
            {/* <img
              src="/images/home-page/cherry blossom-banner.jpg"
              alt=""
              className="absolute inset-0 w-full h-full object-cover grayscale brightness-150 contrast-120 opacity-80 transition duration-300 hover:invert"
            /> */}
            <HeroImage/>
            <div className="absolute inset-1 border border-white/30 pointer-events-none" />
            <div className="absolute inset-2 border border-white/30 pointer-events-none" />
            <div className="absolute inset-3 border border-white/30 pointer-events-none" />
            <div className="absolute inset-4 border border-white/30 pointer-events-none" />
          </div>
        </div>

        <div className="absolute inset-1 border border-white/30 pointer-events-none" />
        <div className="absolute inset-2 border border-white/30 pointer-events-none" />
        <div className="absolute inset-3 border border-white/30 pointer-events-none" />
        <div className="absolute inset-4 border border-white/30 pointer-events-none" />
        
      </section>

      {/* RELEASES */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <p className="text-[20px] uppercase tracking-[0.22em]  mb-10">
            Selected Work
          </p>

          {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {featuredHomepageReleases.map((release) => (
              <div
                key={release.selectOutputName}
                className="  p-[2px] hover:border-white/25 transition"
              >
                <img
                  src={release.albumArtUrl}
                  className="w-full aspect-square object-cover"
                />

                <div className="p-3">
                  <p className="text-[16px] ">{release.artistName}</p>
                  <p className="text-[14px] ">{release.outputName}</p>
                </div>
              </div>
            ))}
          </div> */}
          <ReleasesGrid releases={featuredHomepageReleases} />

        </div>
      </section>


      {/* PRACTICE */}
      <section className="relative px-6 md:px-12 lg:px-20 py-24 overflow-hidden border-t border-white/10">
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

          <div className="md:col-span-8 space-y-6 text-[18px] leading-relaxed">
            <p>
              Analog front-end into digital multitrack recording and in-the-box
              mixing.
            </p>

            <p>
              Live, overdub, or hybrid tracking with an emphasis on microphones,
              acoustic space, and sound sources. Editing, comping, punch-ins,
              reamping, and layered sound construction are part of the process,
              whether aiming to faithfully document a performance or to develop
              adventurous, album-oriented recordings that extend beyond what
              could exist on stage.
            </p>

            <p>
              Projects develop through extended collaboration, iteration, and
              revision.
            </p>

            <p className="text-zinc-200">
              EPs and full-length records developed over time as complete works.
            </p>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="px-6 md:px-12 lg:px-20 py-16">
        <p className="max-w-6xl mx-auto mt-6 text-[20px] uppercase tracking-[0.22em]  mb-10">
          Gallery
        </p>
        <div className="max-w-6xl mx-auto mt-6 text-[12px] uppercase tracking-[0.18em] ">
          Scanned from 35mm negatives
        </div>
        <div className="max-w-6xl mx-auto columns-1 sm:columns-2 lg:columns-3 gap-3">
          {homePageImages.map((src) => (
            <div key={src} className="mb-3 break-inside-avoid  p-[2px]">
              <img src={src} className="w-full h-auto block hover:invert" />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
