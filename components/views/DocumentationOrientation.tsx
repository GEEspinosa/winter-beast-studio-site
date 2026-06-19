// // "use client";

// // import { useDirectoryToggle } from "../../context/DirectoryToggleContext";

// // const artists = [
// //   {
// //     name: "Hail",
// //     bannerUrl: "/images/artist-banners/WB: Hail Cover 2.png",
// //   },
// //   {
// //     name: "Old Town Diamonds",
// //     bannerUrl: "/images/artist-banners/WB: Old Town Diamonds.png",
// //   },
// //   {
// //     name: "Hollow Senses",
// //     bannerUrl: "/images/artist-banners/WB: Hollow Senses Cover.png",
// //   },
// //   {
// //     name: "Fliege",
// //     bannerUrl: "/images/artist-banners/WB: Fliege Cover 3.png",
// //   },
// //   {
// //     name: "L'Acephale",
// //     bannerUrl: "/images/artist-banners/WB: LAcephale Cover 4.png",
// //   },
// //   {
// //     name: "The Mistons",
// //     bannerUrl: "/images/artist-banners/WB: The Mistons Cover Mask 2.png",
// //   },
// //   {
// //     name: "Entrain",
// //     bannerUrl: "/images/artist-banners/WB: Entrain Cover 2.png",
// //   },
// //   {
// //     name: "Refrigerated Nurses",
// //     bannerUrl: "/images/artist-banners/WB: Refrigerated Nurses Cover 2.png",
// //   },
// //   {
// //     name: "Notnauts",
// //     bannerUrl: "/images/artist-banners/WB: Notnauts Cover Darker.png",
// //   },
// //   {
// //     name: "The Hellcows",
// //     bannerUrl: "/images/artist-banners/WB: The Hell Cows Cover_Darker3.png",
// //   },
// //   // ...
// // ];

// // export default function DocumentationOrientation() {
// //   const { setSelectedNode, navigateToNode, highlightColor } =
// //     useDirectoryToggle();

// //   //   const { navigateToNode } = useDirectoryToggle();

// //   function handleArtistClick(artistName: string) {
// //     navigateToNode(
// //       (node) =>
// //         node.type === "file" &&
// //         node.fileType === "artist-overview" &&
// //         node.artistName === artistName,
// //     );
// //   }

// //   return (
// //     <>
// //       <section className="mb-8 max-w-6xl mx-auto px-4 text-white">
// //         <h1 className="text-4xl font-bold mb-8">Documentation Home</h1>
// //         <p className="mb-8 max-w-3xl leading-relaxed">
// //           Welcome to WinterBeast documentation. Explore artist archives,
// //           experiments, and other studio materials below.
// //         </p>

// //         <div className="w-full mb-6">
// //           <img
// //             src="/images/artist-banners/WB:Artists Cover 2 1048.png"
// //             alt="Artists banner"
// //             className="w-full object-contain grayscale transition duration-500 border border-white"
// //             style={{ maxHeight: "500px" }}
// //           />
// //         </div>

// //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
// //           {artists.map(({ name, bannerUrl }) => (
// //             <div
// //               key={name}
// //               role="button"
// //               tabIndex={0}
// //               onClick={() => handleArtistClick(name)}
// //               onKeyDown={(e) => {
// //                 if (e.key === "Enter" || e.key === " ") {
// //                   setSelectedNode({
// //                     id: -1,
// //                     name: "Overview",
// //                     artistName: name,
// //                     type: "file",
// //                     fileType: "artist-overview",
// //                   });
// //                 }
// //               }}
// //               className="group relative block overflow-hidden border border-white"
// //               aria-label={`View ${name} artist overview`}
// //               style={{ aspectRatio: "3 / 2" }}
// //             >
// //               <img
// //                 src={bannerUrl}
// //                 alt={`${name} banner`}
// //                 className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition duration-500"
// //               />

// //               {/* Blue tint overlay on hover */}
// //               <div
// //                 className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-1000 transition duration-500 rounded"
// //                 style={{
// //                   backgroundColor: highlightColor,
// //                   mixBlendMode: "multiply",
// //                 }}
// //               />
// //             </div>
// //           ))}

// //         </div>
// //       </section>
// //     </>
// //   );
// // }

// // "use client";

// // import { useDirectoryToggle } from "../../context/DirectoryToggleContext";
// // import ArchiveGrid from "../ArchiveGrid";

// // const artists = [
// //   {
// //     name: "Hail",
// //     bannerUrl: "/images/artist-banners/WB: Hail Cover 2.png",
// //   },
// //   {
// //     name: "Old Town Diamonds",
// //     bannerUrl: "/images/artist-banners/WB: Old Town Diamonds.png",
// //   },
// //   {
// //     name: "Hollow Senses",
// //     bannerUrl: "/images/artist-banners/WB: Hollow Senses Cover.png",
// //   },
// //   {
// //     name: "Fliege",
// //     bannerUrl: "/images/artist-banners/WB: Fliege Cover 3.png",
// //   },

// //   // {
// //   //   name: "L'Acephale",
// //   //   bannerUrl: "/images/artist-banners/WB: LAcephale Cover 4.png",
// //   // },
// //   // {
// //   //   name: "The Mistons",
// //   //   bannerUrl: "/images/artist-banners/WB: The Mistons Cover Mask 2.png",
// //   // },
// //   // {
// //   //   name: "Entrain",
// //   //   bannerUrl: "/images/artist-banners/WB: Entrain Cover 2.png",
// //   // },
// //   // {
// //   //   name: "Refrigerated Nurses",
// //   //   bannerUrl: "/images/artist-banners/WB: Refrigerated Nurses Cover 2.png",
// //   // },
// //   // {
// //   //   name: "Notnauts",
// //   //   bannerUrl: "/images/artist-banners/WB: Notnauts Cover Darker.png",
// //   // },
// //   // {
// //   //   name: "The Hellcows",
// //   //   bannerUrl: "/images/artist-banners/WB: The Hell Cows Cover_Darker3.png",
// //   // },
// // ];

// // export default function DocumentationOrientation() {
// //   const { navigateToNode, setSelectedNode } = useDirectoryToggle();

// //   const items = artists.map((a) => ({
// //     id: a.name,
// //     title: a.name,
// //     subtitle: "Artist Archive",
// //     imageUrl: a.bannerUrl,
// //     onSelect: () => {
// //       navigateToNode(
// //         (node) =>
// //           node.type === "file" &&
// //           node.fileType === "artist-overview" &&
// //           node.artistName === a.name
// //       );
// //     },
// //   }));

// //   return (
// //     <section className="mb-12 max-w-6xl mx-auto px-4 text-white">
// //       <h1 className="text-3xl mb-4">Documentation</h1>

// //       <p className="text-sm text-zinc-400 mb-10 max-w-2xl">
// //         Archive of recording work, experiments, and long-form projects.
// //       </p>

// //       <ArchiveGrid items={items} />
// //     </section>
// //   );
// // }

// "use client";

// import { useDirectoryToggle } from "../../context/DirectoryToggleContext";
// import ArchiveGrid from "../ArchiveGrid";

// const artists = [
//   { name: "Hail", bannerUrl: "/images/artist-banners/WB: Hail Cover 2.png" },
//   {
//     name: "Old Town Diamonds",
//     bannerUrl: "/images/artist-banners/WB: Old Town Diamonds.png",
//   },
//   {
//     name: "Hollow Senses",
//     bannerUrl: "/images/artist-banners/WB: Hollow Senses Cover.png",
//   },
//   {
//     name: "Fliege",
//     bannerUrl: "/images/artist-banners/WB: Fliege Cover 3.png",
//   },
//   {
//     name: "Zothique",
//     bannerUrl: "/images/artist-banners/WB: Zothique Cover2.webp",
//   },
// ];

// const preWinterbeast = [
//  {
//   id: "pre-winterbeast",
//   type: "file",
//   fileType: "pre-winterbeast-overview"
// }
// ];

// export default function DocumentationOrientation() {
//   const { navigateToNode } = useDirectoryToggle();

//   const artistItems = artists.map((a) => ({
//     id: a.name,
//     title: a.name,
//     subtitle: "Artist Archive",
//     imageUrl: a.bannerUrl,
//     onSelect: () => {
//       navigateToNode(
//         (node) =>
//           node.type === "file" &&
//           node.fileType === "artist-overview" &&
//           node.artistName === a.name,
//       );
//     },
//   }));

//   // const legacyItems = preWinterbeast.map((e) => ({
//   //   id: e.id,
//   //   title: e.title,
//   //   period: e.period,
//   //   description: e.description,
//   //   location: e.location,
//   //   // imageUrl: e.imageUrl,
//   //   onSelect: () => {
//   //     navigateToNode(
//   //       (node) =>
//   //         node.type === "file" &&
//   //         node.fileType === "pre-winterbeast-overview" &&
//   //         node.eraId === e.id,
//   //     );
//   //   },
//   // }));

//   const legacyItem = {
//   id: "pre-winterbeast",
//   title: "Pre-Winterbeast",
//   subtitle: "Archive / Timeline",
//   description: "Freelance era through transitional studio work (2006–2018)",
//   onSelect: () =>
//     navigateToNode(
//       (node) =>
//         node.type === "file" &&
//         node.fileType === "pre-winterbeast-overview" &&
//         node.eraId === "pre-winterbeast"
//     ),
// };

//   return (
//     <section className="mb-12 max-w-6xl mx-auto px-4 text-white">
//       <h1 className="text-3xl mb-4">Documentation</h1>

//       <p className="text-sm text-zinc-400 mb-12 max-w-2xl">
//         Archive of recording work, long-form projects, and historical material.
//       </p>

//       {/* ARTISTS */}
//       <div className="mb-16">
//         <h2 className="text-xs uppercase tracking-[0.22em] text-[#cdb654] mb-6">
//           Artists
//         </h2>

//         <ArchiveGrid items={artistItems} />
//       </div>

//       {/* PRE-WINTERBEAST */}
//       <div>
//         <h2 className="text-xs uppercase tracking-[0.22em] text-[#cdb654] mb-6">
//           Pre-Winterbeast
//         </h2>
//         {/* <ArchiveGrid items={legacyItems} /> */}

//         {/* <div
//           role="button"
//           onClick={() => legacyItems[0].onSelect()}
//           className="border border-white p-6 hover:bg-white/5 transition"
//         >
//           <div className="text-xs uppercase tracking-[0.2em] text-[#cdb654]">
//             2011–2014
//           </div>

//           <div className="text-lg mt-2">Freelance Recording</div>

//           <div className="text-sm text-zinc-400 mt-2 max-w-2xl">
//             NYC / Bay Area / Montreal • formative recording work across small rooms, mobile
//             setups, and early collaboration systems.
//           </div>
//         </div>

//         <div
//           role="button"
//           onClick={() => legacyItems[1].onSelect()}
//           className="border border-white p-6 hover:bg-white/5 transition"
//         >
//           <div className="text-xs uppercase tracking-[0.2em] text-[#cdb654]">
//             2006–2011
//           </div>

//           <div className="text-lg mt-2">Hellhole</div>

//           <div className="text-sm text-zinc-400 mt-2 max-w-2xl">
//             Portland, OR • personal studio space.
//           </div>
//         </div>

//         <div
//           role="button"
//           onClick={() => legacyItems[2].onSelect()}
//           className="border border-white p-6 hover:bg-white/5 transition"
//         >
//           <div className="text-xs uppercase tracking-[0.2em] text-[#cdb654]">
//             2014–2018
//           </div>

//           <div className="text-lg mt-2">Freelance Recording</div>

//           <div className="text-sm text-zinc-400 mt-2 max-w-2xl">
//             Portland, OR • formative recording work across small rooms, mobile
//             setups, and early collaboration systems.
//           </div>
//         </div> */}

//         {/* {legacyItems.map((e) => (
//           <div
//             key={e.id}
//             role="button"
//             onClick={e.onSelect}
//             className="border border-white p-6 hover:bg-white/5 transition mb-6"
//           >
//             <div className="text-xs uppercase tracking-[0.2em] text-[#cdb654]">
//               {e.period}
//             </div>

//             <div className="text-lg mt-2">{e.title}</div>

//             <div className="text-sm text-zinc-400 mt-2 max-w-2xl">
//               {e.location} • {e.description}
//             </div>
//           </div>
//         ))} */}


//         <div className="mb-16">
//   <h2 className="text-xs uppercase tracking-[0.22em] text-[#cdb654] mb-6">
//     Pre-Winterbeast
//   </h2>

//   <div className="border border-white p-6 hover:bg-white/5 transition cursor-pointer"
//        onClick={legacyItem.onSelect}>
//     <div className="text-xs uppercase tracking-[0.2em] text-[#cdb654]">
//       Archive / Timeline
//     </div>

//     <div className="text-lg mt-2">Pre-Winterbeast</div>

//     <div className="text-sm text-zinc-400 mt-2 max-w-2xl">
//       2006–2018 • Freelance engineering, fixed studio work, and transitional production phases
//     </div>
//   </div>
// </div>
//       </div>
//     </section>
//   );
// }



"use client";

import { useDirectoryToggle } from "../../context/DirectoryToggleContext";
import ArchiveGrid from "../ArchiveGrid";

const artists = [
  { name: "Hail", bannerUrl: "/images/artist-banners/WB: Hail Cover 2.png" },
  { name: "Old Town Diamonds", bannerUrl: "/images/artist-banners/WB: Old Town Diamonds.png" },
  { name: "Hollow Senses", bannerUrl: "/images/artist-banners/WB: Hollow Senses Cover.png" },
  { name: "Fliege", bannerUrl: "/images/artist-banners/WB: Fliege Cover 3.png" },
  { name: "Zothique", bannerUrl: "/images/artist-banners/WB: Zothique Cover2.webp" },
];

export default function DocumentationOrientation() {
  const { navigateToNode } = useDirectoryToggle();

  const artistItems = artists.map((a) => ({
    id: a.name,
    title: a.name,
    subtitle: "Artist Archive",
    imageUrl: a.bannerUrl,
    onSelect: () => {
      navigateToNode(
        (node) =>
          node.type === "file" &&
          node.fileType === "artist-overview" &&
          node.artistName === a.name
      );
    },
  }));

  const preWinterbeastItem = {
    id: "pre-winterbeast",
    title: "Pre-Winterbeast",
    subtitle: "Archive / Timeline (2006–2018)",
    description:
      "Freelance engineering, studio work, and transitional production phases.",
    onSelect: () => {
      navigateToNode(
        (node) =>
          node.type === "file" &&
          node.fileType === "pre-winterbeast-overview"
      );
    },
  };

  return (
    <section className="mb-12 max-w-6xl mx-auto px-4 text-white">
      <h1 className="text-3xl mb-4">Documentation</h1>

      <p className="text-sm text-zinc-400 mb-12 max-w-2xl">
        Archive of recording work, long-form projects, and historical material.
      </p>

      {/* ARTISTS */}
      <div className="mb-16">
        <h2 className="text-xs uppercase tracking-[0.22em] text-[#cdb654] mb-6">
          Artists
        </h2>

        <ArchiveGrid items={artistItems} />
      </div>

      {/* PRE-WINTERBEAST */}
      <div>
        <h2 className="text-xs uppercase tracking-[0.22em] text-[#cdb654] mb-6">
          Pre-Winterbeast
        </h2>

        <div
          role="button"
          onClick={preWinterbeastItem.onSelect}
          className="border border-white p-6 hover:bg-white/5 transition cursor-pointer"
        >
          <div className="text-xs uppercase tracking-[0.2em] text-[#cdb654]">
            2006–2018
          </div>

          <div className="text-lg mt-2">{preWinterbeastItem.title}</div>

          <div className="text-sm text-zinc-400 mt-2 max-w-2xl">
            {preWinterbeastItem.description}
          </div>
        </div>
      </div>
    </section>
  );
}