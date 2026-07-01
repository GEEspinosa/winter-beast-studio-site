// import type { Album } from "../../lib/types/artist";

// export default function AlbumViewModal({
//   album,
//   onClose,
// }: {
//   album: Album;
//   onClose: () => void;
// }) {
//   return (
//     <div className="w-[min(1000px,92vw)] mx-auto bg-black text-[#e6e6e6]  shadow-2xl overflow-hidden   border border-white/10 relative">
//       {/* Frame system */}
//       {/* <div className="absolute inset-1 border border-white/10 pointer-events-none" /> */}
//       <div className="absolute inset-2 border border-white/10 pointer-events-none" />
//       {/* <div className="absolute inset-3 border border-white/10 pointer-events-none" /> */}
//       {/* <div className="absolute inset-4 border border-white/10 pointer-events-none" /> */}

//       {/* Close button */}
//       <button
//         onClick={onClose}
//         aria-label="Close modal"
//         className="
//     absolute top-5 right-5
//     w-10 h-10
//     flex items-center justify-center
//     text-zinc-400 hover:text-white
//     transition
//     z-20
//     leading-none
//   "
//       >
//         <span className="text-4xl">×</span>
//       </button>

//       {/* Content */}
//       <div className="relative p-7 space-y-6">
//         {/* HEADER */}
//         <header className="flex flex-col md:flex-row gap-6 items-start">
//           {album.albumArtUrl && (
//             <img
//               src={album.albumArtUrl}
//               className="w-full md:w-[300px] md:h-[300px] aspect-square object-cover border border-white/10"
//             />
//           )}

//           <div className="flex flex-col justify-between">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-tight">
//                 {album.outputName}
//               </h1>

//               <p className="text-xl md:text-2xl text-zinc-300 mt-2">
//                 {album.artistName}
//               </p>

//               <p className="text-sm text-zinc-400 font-mono mt-2">
//                 {album.year}
//               </p>
//             </div>

//             {album.yourCredits && (
//               <p className="text-sm text-zinc-300 italic mt-5 max-w-md">
//                 Credits: {album.yourCredits}
//               </p>
//             )}
//           </div>
//         </header>

//         {/* LINKS */}
//         {album.links && album.links.length > 0 && (
//           <section className="pt-2">
//             <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-2">
//               Links
//             </h2>

//             <ul className="flex flex-wrap gap-2">
//               {album.links.map(({ label, url }) => (
//                 <li key={url}>
//                   <a
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center px-3 py-1.5 text-sm bg-white/10 text-zinc-200 border border-white/10 rounded hover:bg-white hover:text-black transition"
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </section>
//         )}
//       </div>
//     </div>
//   );
// }

// import type { Album } from "../../lib/types/artist";

// export default function AlbumViewModal({
//   album,
//   onClose,
// }: {
//   album: Album;
//   onClose: () => void;
// }) {
//   return (
//     <div className="w-[min(1000px,92vw)] mx-auto bg-black text-[#e6e6e6] shadow-2xl overflow-hidden border border-white/10 relative">
//       {/* Frame system */}
//       <div className="absolute inset-2 border border-white/10 pointer-events-none" />

//       {/* Close */}
//       <button
//         onClick={onClose}
//         aria-label="Close modal"
//         className="
//           absolute top-5 right-5
//           w-10 h-10
//           flex items-center justify-center
//           text-zinc-400 hover:text-white
//           transition
//           z-20
//           leading-none
//         "
//       >
//         <span className="text-4xl">×</span>
//       </button>

//       <div className="relative p-7 space-y-8">
//         {/* HEADER */}
//         <header className="flex flex-col md:flex-row gap-6 items-start">
//           {album.albumArtUrl && (
//             <img
//               src={album.albumArtUrl}
//               alt=""
//               className="w-full md:w-[300px] md:h-[300px] aspect-square object-cover border border-white/10"
//             />
//           )}

//           <div className="flex flex-col">
//             <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-tight">
//               {album.outputName}
//             </h1>

//             <p className="text-xl md:text-2xl text-zinc-300 mt-2">
//               {album.artistName}
//             </p>

//             {album.rlabel && <p className="text-sm text-zinc-400 font-mono mt-2">
//               {album.rlabel}
//             </p>}

//             <p className="text-sm text-zinc-400 font-mono mt-2">
//               {album.year}
//             </p>

//             {album.yourCredits && (
//               <p className="text-sm italic text-zinc-300 mt-6 max-w-lg">
//                 Credits: {album.yourCredits}
//               </p>
//             )}
//           </div>
//         </header>

//         {/* LINKS — back to original placement */}
//         {album.links && album.links.length > 0 && (
//           <section>
//             <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-2">
//               Links
//             </h2>

//             <ul className="flex flex-wrap gap-2">
//               {album.links.map(({ label, url }) => (
//                 <li key={url}>
//                   <a
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="
//                       inline-flex items-center
//                       px-3 py-1.5
//                       text-sm
//                       bg-white/10
//                       text-zinc-200
//                       border border-white/10
//                       hover:bg-white
//                       hover:text-black
//                       transition
//                     "
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </section>
//         )}

//         {/* OPTIONAL METADATA */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">

//           {/* Future fields */}

//           {/* <div>
//             <p className="uppercase tracking-[0.2em] text-zinc-500 mb-1">
//               Personnel
//             </p>
//             <p>{album.personnel}</p>
//           </div> */}
//         </section>
//       </div>
//     </div>
//   );
// }

// import type { Album } from "../../lib/types/artist";

// export default function AlbumViewModal({
//   album,
//   onClose,
// }: {
//   album: Album;
//   onClose: () => void;
// }) {
//   return (
//     <div className="w-[min(1000px,92vw)] mx-auto bg-black text-[#e6e6e6] shadow-2xl overflow-hidden border border-white/10 relative">
//       {/* Frame */}
//       <div className="absolute inset-2 border border-white/10 pointer-events-none" />

//       {/* Close */}
//       <button
//         onClick={onClose}
//         aria-label="Close modal"
//         className="
//           absolute top-5 right-5
//           w-10 h-10
//           flex items-center justify-center
//           text-zinc-400 hover:text-white
//           transition
//           z-20
//           leading-none
//         "
//       >
//         <span className="text-4xl">×</span>
//       </button>

//       <div className="relative p-7 space-y-8">
//         {/* HEADER */}
//         <header className="flex flex-col md:flex-row gap-6 items-start">
//           {album.albumArtUrl && (
//             <img
//               src={album.albumArtUrl}
//               alt=""
//               className="w-full md:w-[300px] md:h-[300px] aspect-square object-cover border border-white/10"
//             />
//           )}

//           <div className="flex flex-col">
//             <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-tight">
//               {album.outputName}
//             </h1>

//             <p className="text-xl md:text-2xl text-zinc-300 mt-2">
//               {album.artistName}
//             </p>

//             {album.rlabel && (
//               <p className="text-sm text-zinc-400 font-mono mt-2">
//                 {album.rlabel}
//               </p>
//             )}

//             <p className="text-sm text-zinc-400 font-mono mt-2">{album.year}</p>

//             {album.yourCredits && (
//               <p className="text-sm italic text-zinc-300 mt-6 max-w-lg">
//                 Credits: {album.yourCredits}
//               </p>
//             )}
//           </div>
//         </header>

//         {/* LINKS */}
//         {album.links && album.links.length > 0 && (
//           <section>
//             <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-2">
//               Links
//             </h2>

//             <ul className="flex flex-wrap gap-2">
//               {album.links.map(({ label, url }) => (
//                 <li key={url}>
//                   <a
//                     href={url}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="
//                       inline-flex items-center
//                       px-3 py-1.5
//                       text-sm
//                       bg-white/10
//                       text-zinc-200
//                       border border-white/10
//                       hover:bg-white
//                       hover:text-black
//                       transition
//                     "
//                   >
//                     {label}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </section>
//         )}

//         {album.personnel && album.personnel.length > 0 && (
//           <section className="pt-2 border-t border-white/10">
//             <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-3">
//               Personnel
//             </h2>

//             <ul className="space-y-1 text-sm font-mono text-zinc-300">
//               {album.personnel.map((p, i) => (
//                 <li
//                   key={`${p.name}-${i}`}
//                   className="flex justify-between gap-6"
//                 >
//                   <span className="truncate">{p.name}</span>
//                   <span className="text-zinc-500 shrink-0">{p.role}</span>
//                 </li>
//               ))}
//             </ul>
//           </section>
//         )}

//         {/* TRACKLIST */}
//         {album.trackListing && album.trackListing.length > 0 && (
//           <section className="pt-2 border-t border-white/10">
//             <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-3">
//               Tracklist
//             </h2>

//             <ol className="space-y-1 text-sm font-mono">
//               {album.trackListing.map((track, i) => (
//                 <li
//                   key={`${track.title}-${i}`}
//                   className="flex justify-between gap-6 text-zinc-300"
//                 >
//                   <span className="truncate">
//                     {i + 1}. {track.title}
//                   </span>

//                   {track.duration && (
//                     <span className="text-zinc-500 shrink-0">
//                       {track.duration}
//                     </span>
//                   )}
//                 </li>
//               ))}
//             </ol>
//           </section>
//         )}

//         {/* OPTIONAL METADATA SPACE */}
//         <section className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm" />
//       </div>
//     </div>
//   );
// }



import type { Album } from "../../lib/types/artist";

export default function AlbumViewModal({
  album,
  onClose,
}: {
  album: Album;
  onClose: () => void;
}) {
  return (
    <div className="w-[min(1000px,92vw)] mx-auto bg-black text-[#e6e6e6] shadow-2xl overflow-hidden border border-white/10 relative">

      {/* Frame */}
      <div className="absolute inset-2 border border-white/10 pointer-events-none" />

      {/* Close */}
      <button
        onClick={onClose}
        aria-label="Close modal"
        className="
          absolute top-5 right-5
          w-10 h-10
          flex items-center justify-center
          text-zinc-400 hover:text-white
          transition
          z-20
          leading-none
        "
      >
        <span className="text-4xl">×</span>
      </button>

      <div className="relative p-7">
        <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-10">

          {/* LEFT: ART ONLY */}
          <div>
            {album.albumArtUrl && (
              <img
                src={album.albumArtUrl}
                alt=""
                className="w-full aspect-square object-cover border border-white/10"
              />
            )}
          </div>

          {/* RIGHT: ALL INFORMATION */}
          <div className="space-y-8">

            {/* IDENTITY BLOCK (kept unified) */}
            <div>
              <p className="text-sm text-zinc-400 font-mono">
                {album.artistName}
              </p>

              <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-tight mt-1">
                {album.outputName}
              </h1>

              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-3 text-sm text-zinc-500 font-mono">
                <span>{album.year}</span>
                {album.rlabel && <span>{album.rlabel}</span>}
              </div>

              {album.yourCredits && (
                <p className="text-sm italic text-zinc-300 mt-5 max-w-lg">
                  {album.yourCredits}
                </p>
              )}
            </div>

            {/* LINKS */}
            {album.links && album.links.length > 0 && (
              <section>
                <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-2">
                  Links
                </h2>

                <ul className="flex flex-wrap gap-2">
                  {album.links.map(({ label, url }) => (
                    <li key={url}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                          inline-flex items-center
                          px-3 py-1.5
                          text-sm
                          bg-white/10
                          text-zinc-200
                          border border-white/10
                          hover:bg-white
                          hover:text-black
                          transition
                        "
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* PERSONNEL */}
            {/* {album.personnel && album.personnel.length > 0 && (
              <section className="pt-2 border-t border-white/10">
                <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-3">
                  Personnel
                </h2>

                <ul className="space-y-1 text-sm font-mono text-zinc-300">
                  {album.personnel.map((p, i) => (
                    <li key={`${p.name}-${i}`} className="flex justify-between gap-6">
                      <span className="truncate">{p.name}</span>
                      <span className="text-zinc-500 shrink-0">{p.role}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )} */}

            {/* TRACKLIST */}
            {/* {album.trackListing && album.trackListing.length > 0 && (
              <section className="pt-2 border-t border-white/10">
                <h2 className="text-sm uppercase tracking-[0.25em] text-zinc-400 mb-3">
                  Tracklist
                </h2>

                <ol className="space-y-1 text-sm font-mono">
                  {album.trackListing.map((track, i) => (
                    <li
                      key={`${track.title}-${i}`}
                      className="flex justify-between gap-6 text-zinc-300"
                    >
                      <span className="truncate">
                        {i + 1}. {track.title}
                      </span>

                      {track.duration && (
                        <span className="text-zinc-500 shrink-0">
                          {track.duration}
                        </span>
                      )}
                    </li>
                  ))}
                </ol>
              </section>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
