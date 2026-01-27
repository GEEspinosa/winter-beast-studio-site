// "use client";

// import Link from "next/link";
// import Image from "next/image";

// const artists = [
//   {
//     name: "Hail",
//     bannerUrl: "/images/artist-banners/WB: Hail Cover.png",
//     href: "/documentation/artists/hail",
//   },
//   {
//     name: "Old Town Diamonds",
//     bannerUrl: "/images/artist-banners/WB: Old Town Diamonds.png",
//     href: "/documentation/artists/old-town-diamonds",
//   },
//   // Add other artists here
// ];

// export default function DocumentationOrientation() {
//   return (
//     <section className="mb-8 max-w-6xl mx-auto px-4 text-white">
//       <h1 className="text-4xl font-bold mb-8">Documentation Home</h1>

//       <p className="mb-8 max-w-3xl leading-relaxed">
//         Welcome to WinterBeast documentation. Explore artist archives,
//         experiments, and other studio materials through the sections below.
//       </p>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//         {artists.map(({ name, bannerUrl, href }) => (
//           <Link
//             key={name}
//             href={href}
//             className="group relative block rounded-lg overflow-hidden border border-white hover:border-blue-400 transition"
//             aria-label={`Go to ${name} documentation`}
//           >
//             <div className="relative w-full" style={{ paddingTop: "66.66%" }}>
//               <Image
//                 src={bannerUrl}
//                 alt={`${name} banner`}
//                 fill
//                 className="object-cover grayscale group-hover:grayscale-0 transition duration-500"
//                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
//                 priority
//               />
//             </div>
//             <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4 opacity-0 group-hover:opacity-100 transition duration-300">
//               <h2 className="text-xl font-semibold text-white">{name}</h2>
//             </div>
//           </Link>
//         ))}

//         <Link
//           href="/documentation/experiments"
//           className="group relative block rounded-lg overflow-hidden border border-white hover:border-blue-400 transition"
//           aria-label="Go to experiments documentation"
//         >
//           <div className="flex items-center justify-center h-48 bg-gray-800">
//             <span className="text-white text-2xl font-semibold">
//               Experiments
//             </span>
//           </div>
//         </Link>
//       </div>
//     </section>
//   );
// }

"use client";

import { useDirectoryToggle } from "../../context/DirectoryToggleContext";

const artists = [
  {
    name: "Hail",
    bannerUrl: "/images/artist-banners/WB: Hail Cover.png",
  },
  {
    name: "Old Town Diamonds",
    bannerUrl: "/images/artist-banners/WB: Old Town Diamonds.png",
  },
  {
    name: "Hollow Senses",
    bannerUrl: "/images/artist-banners/WB: Hollow Senses Cover.png",
  },
  {
    name: "Fliege",
    bannerUrl: "/images/artist-banners/WB: Fliege Cover 2.png",
  },
  {
    name: "L'Acephale",
    bannerUrl: "/images/artist-banners/WB: LAcephale Cover 4.png",
  },
  {
    name: "The Mistons",
    bannerUrl: "/images/artist-banners/WB: The Mistons Cover Mask.png",
  },
  {
    name: "Entrain",
    bannerUrl: "/images/artist-banners/WB: Entrain Cover 2.png",
  },
  {
    name: "Refrigerated Nurses",
    bannerUrl: "/images/artist-banners/WB: Refrigerated Nurses Cover.png",
  },
  {
    name: "Notnauts",
    bannerUrl: "/images/artist-banners/WB: Notnauts Cover Darker.png",
  },
  {
    name: "The Hellcows",
    bannerUrl: "/images/artist-banners/WB: The Hell Cows Cover_Darker 2.png",
  },
  // ...
];

export default function DocumentationOrientation() {
  const { setSelectedNode } = useDirectoryToggle();

  const { navigateToNode } = useDirectoryToggle();

 function handleArtistClick(artistName: string) {
  navigateToNode(node => 
    node.type === "file" && 
    node.fileType === "artist-overview" && 
    node.artistName === artistName
  );
}

  return (
    <section className="mb-8 max-w-6xl mx-auto px-4 text-white">
      <h1 className="text-4xl font-bold mb-8">Documentation Home</h1>
      <p className="mb-8 max-w-3xl leading-relaxed">
        Welcome to WinterBeast documentation. Explore artist archives,
        experiments, and other studio materials below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map(({ name, bannerUrl }) => (
          <div
            key={name}
            role="button"
            tabIndex={0}
            onClick={() =>
              handleArtistClick(name)
            }
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setSelectedNode({
                  id: -1,
                  name: "Overview",
                  artistName: name,
                  type: "file",
                  fileType: "artist-overview",
                });
              }
            }}
            className="group relative block  overflow-hidden border border-white hover:border-blue-400 transition cursor-pointer"
            aria-label={`View ${name} artist overview`}
            style={{ aspectRatio: "3 / 2" }} // <-- container aspect ratio
          >
            <img
              src={bannerUrl}
              alt={`${name} banner`}
              className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition duration-500"
            />
          </div>
        ))}

        {/* Example for experiments or other sections */}
        <div
          role="button"
          tabIndex={0}
          onClick={() =>
            setSelectedNode({
              id: -2,
              name: "Experiments",
              type: "folder",
            })
          }
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setSelectedNode({
                id: -2,
                name: "Experiments",
                type: "folder",
              });
            }
          }}
          className="group relative block rounded-lg overflow-hidden border border-white hover:border-blue-400 transition cursor-pointer flex items-center justify-center h-48 bg-gray-800"
          aria-label="View Experiments"
        >
          <span className="text-white text-2xl font-semibold">Experiments</span>
        </div>
      </div>
    </section>
  );
}
