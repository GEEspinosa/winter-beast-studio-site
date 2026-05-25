// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-[#181818]">
//       <img
//         className="max-w-[80vw] max-h-[80vh] object-contain"
//         src="/images/home-page/gold and waves 7.webp"
//         alt=""
//       />
//     </div>
//   );
// }

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#181818] text-[#e6e6e6] flex items-center">
//       <div className="w-full px-8 md:px-16 lg:px-24">

//         <div className="space-y-6 max-w-3xl">

//           <p className="text-sm tracking-widest text-[#cdb654] uppercase">
//             Recording • Production • Mixing
//           </p>

//           <p className="text-sm text-zinc-400">
//             Album-focused work in Portland
//           </p>

//         </div>

//       </div>
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main className="bg-[#181818] text-[#e6e6e6]">

//       {/* HERO */}
//       <section className="relative min-h-[92vh] flex items-end">

//         {/* HERO IMAGE PLACEHOLDER */}
//         <div className="absolute inset-0 bg-[#2a2a2a]">
//           {/* replace with actual image */}
//           <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm tracking-widest">
//             HERO IMAGE
//           </div>
//         </div>

//         {/* subtle darkening for readability */}
//         <div className="absolute inset-0 bg-black/30" />

//         {/* overlay content */}
//         <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-20 max-w-3xl">

//           <p className="text-sm uppercase tracking-[0.22em] text-[#cdb654]">
//             Recording • Production • Mixing
//           </p>

//           <h1 className="mt-4 text-4xl md:text-6xl font-light leading-tight tracking-tight">
//             Album-focused collaborative work built around long-form records.
//           </h1>

//           <p className="mt-6 text-sm text-zinc-300 max-w-xl leading-relaxed">
//             Winterbeast is a recording and production environment focused on
//             immersive, intentional, album-oriented work and long-term artistic
//             collaboration.
//           </p>

//           <div className="mt-10 flex gap-6 text-sm">
//             <a
//               href="/documentation"
//               className="border-b border-[#cdb654] text-[#e6e6e6] hover:text-white transition"
//             >
//               View Documentation
//             </a>

//             <a
//               href="/contact"
//               className="text-zinc-400 hover:text-white transition"
//             >
//               Contact
//             </a>
//           </div>
//         </div>
//       </section>

//       {/* FEATURED WORK */}
//       <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-[#2f2f2f]">

//         <div className="max-w-6xl">

//           <div className="mb-12">
//             <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
//               Selected Documentation
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

//             {/* PROJECT */}
//             <a
//               href="/documentation/project-1"
//               className="group block"
//             >
//               <div className="aspect-square bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-xs tracking-widest">
//                 ALBUM ART
//               </div>

//               <div className="mt-4">
//                 <h3 className="text-lg group-hover:text-[#cdb654] transition">
//                   Artist Name
//                 </h3>

//                 <p className="mt-1 text-sm text-zinc-400">
//                   Album Title
//                 </p>

//                 <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500">
//                   Recording / Mixing
//                 </p>
//               </div>
//             </a>

//             {/* PROJECT */}
//             <a
//               href="/documentation/project-2"
//               className="group block"
//             >
//               <div className="aspect-square bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-xs tracking-widest">
//                 ALBUM ART
//               </div>

//               <div className="mt-4">
//                 <h3 className="text-lg group-hover:text-[#cdb654] transition">
//                   Artist Name
//                 </h3>

//                 <p className="mt-1 text-sm text-zinc-400">
//                   Record Title
//                 </p>

//                 <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500">
//                   Production / Mixing
//                 </p>
//               </div>
//             </a>

//             {/* PROJECT */}
//             <a
//               href="/documentation/project-3"
//               className="group block"
//             >
//               <div className="aspect-square bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-xs tracking-widest">
//                 SESSION IMAGE
//               </div>

//               <div className="mt-4">
//                 <h3 className="text-lg group-hover:text-[#cdb654] transition">
//                   Artist Name
//                 </h3>

//                 <p className="mt-1 text-sm text-zinc-400">
//                   EP / LP Title
//                 </p>

//                 <p className="mt-2 text-xs uppercase tracking-wide text-zinc-500">
//                   Recording / Production
//                 </p>
//               </div>
//             </a>

//           </div>
//         </div>
//       </section>

//       {/* STUDIO / PROCESS STRIP */}
//       <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-[#2f2f2f]">

//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

//           {/* IMAGE PLACEHOLDER */}
//           <div className="aspect-[4/3] bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-xs tracking-widest">
//             STUDIO / SESSION IMAGE
//           </div>

//           {/* TEXT */}
//           <div className="max-w-xl">

//             <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
//               Studio
//             </p>

//             <p className="mt-6 text-lg leading-relaxed text-zinc-300">
//               Winterbeast is built around focused recording environments,
//               long-form collaboration, and records developed through sustained
//               process rather than rapid content production.
//             </p>

//             <p className="mt-6 text-sm leading-relaxed text-zinc-500">
//               Sessions prioritize arrangement, texture, dynamics, and
//               performance with an emphasis on cohesive album-oriented work.
//             </p>

//             <div className="mt-10">
//               <a
//                 href="/studio"
//                 className="border-b border-[#cdb654] text-sm hover:text-white transition"
//               >
//                 Explore Studio
//               </a>
//             </div>

//           </div>
//         </div>
//       </section>

//       {/* CONTACT */}
//       <section className="px-8 md:px-16 lg:px-24 py-32 border-t border-[#2f2f2f]">

//         <div className="max-w-2xl">

//           <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
//             Contact
//           </p>

//           <h2 className="mt-6 text-3xl md:text-5xl font-light leading-tight">
//             Selective collaboration for album-oriented recording projects.
//           </h2>

//           <p className="mt-6 text-sm text-zinc-400 leading-relaxed max-w-xl">
//             Currently booking recording, production, and mixing sessions for
//             artists seeking long-form collaborative work.
//           </p>

//           <div className="mt-10">
//             <a
//               href="/contact"
//               className="inline-block border border-[#cdb654] px-6 py-3 text-sm hover:bg-[#cdb654] hover:text-[#181818] transition"
//             >
//               Inquire
//             </a>
//           </div>

//         </div>
//       </section>
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main className="bg-[#181818] text-[#e6e6e6]">

//       {/* HERO */}
//       <section className="relative min-h-[90vh] flex items-end">

//         {/* HERO IMAGE PLACEHOLDER */}
//         <div className="absolute inset-0 bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-sm tracking-widest">
//           HERO IMAGE / STUDIO / SESSION
//         </div>

//         {/* dark overlay for readability */}
//         <div className="absolute inset-0 bg-black/40" />

//         {/* minimal overlay text */}
//         <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-20 max-w-3xl">

//           <p className="text-sm uppercase tracking-[0.22em] text-[#cdb654]">
//             Recording • Production • Mixing
//           </p>

//           <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
//             Album-focused recording and production in Portland.
//           </p>

//         </div>
//       </section>

//       {/* SELECTED WORK */}
//       <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-[#2f2f2f]">

//         <div className="max-w-6xl">

//           <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-10">
//             Selected Documentation
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

//             {/* ITEM */}
//             <a href="/documentation/project-1" className="block group">
//               <div className="aspect-square bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-xs">
//                 IMAGE / ARTWORK
//               </div>

//               <div className="mt-4">
//                 <p className="text-sm group-hover:text-[#cdb654] transition">
//                   Artist Name — Album Title
//                 </p>
//                 <p className="text-xs text-zinc-500 mt-1">
//                   Recording / Mixing
//                 </p>
//               </div>
//             </a>

//             {/* ITEM */}
//             <a href="/documentation/project-2" className="block group">
//               <div className="aspect-square bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-xs">
//                 IMAGE / SESSION
//               </div>

//               <div className="mt-4">
//                 <p className="text-sm group-hover:text-[#cdb654] transition">
//                   Artist Name — Release
//                 </p>
//                 <p className="text-xs text-zinc-500 mt-1">
//                   Production / Mixing
//                 </p>
//               </div>
//             </a>

//             {/* ITEM */}
//             <a href="/documentation/project-3" className="block group">
//               <div className="aspect-square bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-xs">
//                 IMAGE / SESSION
//               </div>

//               <div className="mt-4">
//                 <p className="text-sm group-hover:text-[#cdb654] transition">
//                   Artist Name — EP
//                 </p>
//                 <p className="text-xs text-zinc-500 mt-1">
//                   Recording / Production
//                 </p>
//               </div>
//             </a>

//           </div>
//         </div>
//       </section>

//       {/* PROCESS STRIP (OPTIONAL) */}
//       <section className="px-8 md:px-16 lg:px-24 py-20 border-t border-[#2f2f2f]">

//         <div className="max-w-3xl space-y-4">

//           <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
//             Approach
//           </p>

//           <p className="text-sm text-zinc-400 leading-relaxed">
//             Long-form collaboration focused on performance, arrangement, and
//             album cohesion. Sessions prioritize clarity, dynamics, and trust
//             in the recording process.
//           </p>

//         </div>
//       </section>

//       {/* CTA */}
//       <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-[#2f2f2f]">

//         <div className="max-w-2xl">

//           <p className="text-sm text-zinc-300">
//             Selective collaboration for album-oriented recording projects.
//           </p>

//           <a
//             href="/contact"
//             className="inline-block mt-8 border border-[#cdb654] px-6 py-3 text-sm hover:bg-[#cdb654] hover:text-[#181818] transition"
//           >
//             Inquire
//           </a>

//         </div>
//       </section>

//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main className="bg-[#181818] text-[#e6e6e6]">

//       {/* HERO */}
//       <section className="relative min-h-[90vh] flex items-end">

//         {/* HERO IMAGE PLACEHOLDER */}
//         <div className="absolute inset-0 bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-sm tracking-widest">
//           HERO IMAGE / SESSION / STUDIO
//         </div>

//         {/* overlay for readability */}
//         <div className="absolute inset-0 bg-black/40" />

//         {/* minimal identity layer */}
//         <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-20 max-w-3xl">

//           <p className="text-sm uppercase tracking-[0.22em] text-[#cdb654]">
//             Recording • Production • Mixing
//           </p>

//           <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
//             Album-focused recording and production in Portland.
//           </p>

//         </div>
//       </section>

//       {/* SELECTED DOCUMENTATION */}
//       <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-[#2f2f2f]">

//         <div className="max-w-6xl">

//           <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-10">
//             Selected Documentation
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

//             <a href="/documentation/project-1" className="block group">
//               <div className="aspect-square bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-xs">
//                 IMAGE / ARTWORK
//               </div>
//               <div className="mt-4">
//                 <p className="group-hover:text-[#cdb654] transition text-sm">
//                   Artist — Album
//                 </p>
//                 <p className="text-xs text-zinc-500 mt-1">
//                   Recording / Mixing
//                 </p>
//               </div>
//             </a>

//             <a href="/documentation/project-2" className="block group">
//               <div className="aspect-square bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-xs">
//                 IMAGE / SESSION
//               </div>
//               <div className="mt-4">
//                 <p className="group-hover:text-[#cdb654] transition text-sm">
//                   Artist — Record
//                 </p>
//                 <p className="text-xs text-zinc-500 mt-1">
//                   Production / Mixing
//                 </p>
//               </div>
//             </a>

//             <a href="/documentation/project-3" className="block group">
//               <div className="aspect-square bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-xs">
//                 IMAGE / SESSION
//               </div>
//               <div className="mt-4">
//                 <p className="group-hover:text-[#cdb654] transition text-sm">
//                   Artist — EP
//                 </p>
//                 <p className="text-xs text-zinc-500 mt-1">
//                   Recording / Production
//                 </p>
//               </div>
//             </a>

//           </div>
//         </div>
//       </section>

//       {/* PROCESS / STANCE (minimal, non-manifesto) */}
//       <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-[#2f2f2f]">

//         <div className="max-w-3xl space-y-6">

//           <p className="text-xs uppercase tracking-[0.22em] text-zinc-500">
//             Practice
//           </p>

//           <p className="text-sm text-zinc-400 leading-relaxed">
//             Long-form recording and production centered on performance, arrangement,
//             and cohesive album structure.
//           </p>

//           <p className="text-sm text-zinc-500 leading-relaxed">
//             Work is developed through sustained collaboration rather than
//             high-throughput production cycles.
//           </p>

//         </div>
//       </section>
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main className="bg-[#181818] text-[#e6e6e6]">

//       {/* HERO */}
//       <section className="relative min-h-[90vh] flex items-end">

//         {/* HERO IMAGE PLACEHOLDER */}
//         <div className="absolute inset-0 bg-[#232323] flex items-center justify-center text-zinc-500 text-sm tracking-widest">
//           HERO IMAGE / SESSION / STUDIO
//         </div>

//         {/* subtle gradient instead of heavy overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-[#181818] via-[#181818]/40 to-transparent" />

//         {/* identity layer */}
//         <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-20 max-w-3xl">

//           <p className="text-xs uppercase tracking-[0.24em] text-[#cdb654]">
//             Recording • Production • Mixing
//           </p>

//           <p className="mt-5 text-sm text-zinc-300 leading-relaxed max-w-xl">
//             Album-focused recording and production in Portland.
//             Built around long-form collaboration and cohesive records.
//           </p>

//         </div>
//       </section>

//       {/* SELECTED DOCUMENTATION */}
//       <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-[#2f2f2f]">

//         <div className="max-w-6xl">

//           <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 mb-10">
//             Selected Documentation
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

//             {[
//               ["Artist — Album", "Recording / Mixing"],
//               ["Artist — Record", "Production / Mixing"],
//               ["Artist — EP", "Recording / Production"],
//             ].map(([title, role], i) => (
//               <a
//                 key={i}
//                 href={`/documentation/project-${i + 1}`}
//                 className="block group"
//               >

//                 <div className="aspect-square bg-[#232323] flex items-center justify-center text-zinc-600 text-xs">
//                   IMAGE / SESSION
//                 </div>

//                 <div className="mt-4">
//                   <p className="group-hover:text-[#cdb654] transition text-sm">
//                     {title}
//                   </p>
//                   <p className="text-xs text-zinc-500 mt-1">
//                     {role}
//                   </p>
//                 </div>

//               </a>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* PRACTICE / STANCE */}
//       <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-[#2f2f2f]">

//         <div className="max-w-3xl space-y-6">

//           <p className="text-xs uppercase tracking-[0.24em] text-zinc-500">
//             Practice
//           </p>

//           <p className="text-sm text-zinc-300 leading-relaxed">
//             Long-form recording and production centered on performance,
//             arrangement, and cohesive album structure.
//           </p>

//           <p className="text-sm text-zinc-500 leading-relaxed">
//             Work develops through sustained collaboration rather than
//             high-throughput production cycles.
//           </p>

//         </div>

//       </section>
//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main className="min-h-screen bg-[#181818] text-[#e6e6e6] flex items-center">

//       <div className="px-8 md:px-16 lg:px-24 max-w-2xl space-y-10">

//         {/* IDENTITY */}
//         <div className="space-y-4">

//           <p className="text-xs uppercase tracking-[0.24em] text-[#cdb654]">
//             Winterbeast
//           </p>

//           <p className="text-sm text-zinc-300 leading-relaxed">
//             Recording, production, and mixing for long-form collaborative records.
//           </p>

//           <p className="text-xs text-zinc-500 leading-relaxed">
//             Portland, OR
//           </p>

//         </div>

//         {/* ENTRY POINTS */}
//         <div className="space-y-4 text-sm">

//           <a
//             href="/documentation"
//             className="block text-zinc-300 hover:text-[#cdb654] transition"
//           >
//             → Documentation
//           </a>

//           <a
//             href="/sessions"
//             className="block text-zinc-300 hover:text-[#cdb654] transition"
//           >
//             → Sessions
//           </a>

//         </div>

//         {/* OPTIONAL SINGLE IMAGE (NOT GRID) */}
//         <div className="w-full h-48 bg-[#232323] flex items-center justify-center text-zinc-600 text-xs tracking-widest">
//           STUDIO / SESSION IMAGE
//         </div>

//       </div>

//     </main>
//   );
// }

// export default function Home() {
//   return (
//     <main className="bg-[#181818] text-[#e6e6e6]">

//       {/* HERO */}
//       <section className="relative min-h-[92vh] flex items-end">

//         {/* HERO IMAGE */}
//         <div className="absolute inset-0 bg-[#2a2a2a]">
//           <div className="w-full h-full flex items-center justify-center text-zinc-600 text-sm tracking-widest">
//             HERO IMAGE
//           </div>
//         </div>

//         <div className="absolute inset-0 bg-black/30" />

//         {/* CORE IDENTITY */}
//         <div className="relative z-10 px-8 md:px-16 lg:px-24 pb-20 max-w-2xl">

//           <p className="text-sm uppercase tracking-[0.22em] text-[#cdb654]">
//             Recording • Production • Mixing
//           </p>

//           <h1 className="mt-5 text-3xl md:text-5xl font-light leading-tight">
//             Album-focused collaborative recording.
//           </h1>

//           <p className="mt-6 text-sm text-zinc-400 leading-relaxed">
//             Long-form work built through trust, performance, and sustained collaboration.
//           </p>

//           <div className="mt-10 flex gap-8 text-sm">
//             <a
//               href="/documentation"
//               className="border-b border-[#cdb654] hover:text-white transition"
//             >
//               Documentation →
//             </a>

//             <a
//               href="/sessions"
//               className="text-zinc-500 hover:text-white transition"
//             >
//               Sessions →
//             </a>
//           </div>

//         </div>
//       </section>

//       {/* SELECTED WORK */}
//       <section className="px-8 md:px-16 lg:px-24 py-24 border-t border-[#2f2f2f]">

//         <div className="max-w-6xl">

//           <p className="text-xs uppercase tracking-[0.22em] text-zinc-500 mb-12">
//             Selected Documentation
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

//             {["1", "2", "3"].map((id) => (
//               <a key={id} href={`/documentation/project-${id}`} className="group block">

//                 <div className="aspect-square bg-[#2a2a2a] flex items-center justify-center text-zinc-600 text-xs tracking-widest">
//                   IMAGE
//                 </div>

//                 <div className="mt-4">
//                   <h3 className="group-hover:text-[#cdb654] transition text-sm">
//                     Artist Name
//                   </h3>

//                   <p className="text-xs text-zinc-500 mt-1">
//                     Album / Release
//                   </p>

//                   <p className="text-xs uppercase tracking-wide text-zinc-600 mt-2">
//                     Recording / Mixing
//                   </p>
//                 </div>

//               </a>
//             ))}

//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }

import { homePageImages } from "../lib/homePageImages";

export default function Home() {
  return (
    <main className="bg-[#181818] text-[#e6e6e6]">

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-end overflow-hidden">

        {/* HERO IMAGE */}
        <div className="absolute inset-0">
          <img
            src="/images/home/WB_Hero.webp"
            alt="Winterbeast studio"
            className="w-full h-full object-cover"
          />
        </div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/40" />

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

        </div>
      </section>

      {/* GALLERY */}
      <section className="px-3 md:px-4 py-3">

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-3">

          {homePageImages.map((src, index) => (
            <div
              key={src}
              className="mb-3 break-inside-avoid border border-zinc-300/20 bg-[#202020] p-[2px]"
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

      {/* FOOTER TEXT */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[#222]">

        <div className="max-w-2xl">

          <p className="text-[11px] uppercase tracking-[0.22em] text-[#cdb654]">
            Process
          </p>

          <p className="mt-6 text-sm leading-relaxed text-zinc-400">
            Winterbeast is a recording and production space centered around
            album-oriented work, extended collaboration, documentation,
            and iterative process rather than high-throughput commercial sessions.
          </p>

        </div>

      </section>

    </main>
  );
}
