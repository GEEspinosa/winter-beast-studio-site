"use client";

import { useDirectoryToggle } from "../../context/DirectoryToggleContext";

const artists = [
  {
    name: "Hail",
    bannerUrl: "/images/artist-banners/WB: Hail Cover 2.png",
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
    bannerUrl: "/images/artist-banners/WB: Fliege Cover 3.png",
  },
  {
    name: "L'Acephale",
    bannerUrl: "/images/artist-banners/WB: LAcephale Cover 4.png",
  },
  {
    name: "The Mistons",
    bannerUrl: "/images/artist-banners/WB: The Mistons Cover Mask 2.png",
  },
  {
    name: "Entrain",
    bannerUrl: "/images/artist-banners/WB: Entrain Cover 2.png",
  },
  {
    name: "Refrigerated Nurses",
    bannerUrl: "/images/artist-banners/WB: Refrigerated Nurses Cover 2.png",
  },
  {
    name: "Notnauts",
    bannerUrl: "/images/artist-banners/WB: Notnauts Cover Darker.png",
  },
  {
    name: "The Hellcows",
    bannerUrl: "/images/artist-banners/WB: The Hell Cows Cover_Darker3.png",
  },
  // ...
];

export default function DocumentationOrientation() {
  const { setSelectedNode, navigateToNode, highlightColor } =
    useDirectoryToggle();

  //   const { navigateToNode } = useDirectoryToggle();

  function handleArtistClick(artistName: string) {
    navigateToNode(
      (node) =>
        node.type === "file" &&
        node.fileType === "artist-overview" &&
        node.artistName === artistName,
    );
  }

  return (
    <>
      <section className="mb-8 max-w-6xl mx-auto px-4 text-white">
        <h1 className="text-4xl font-bold mb-8">Documentation Home</h1>
        <p className="mb-8 max-w-3xl leading-relaxed">
          Welcome to WinterBeast documentation. Explore artist archives,
          experiments, and other studio materials below.
        </p>

        <div className="w-full mb-6">
          <img
            src="/images/artist-banners/WB:Artists Cover 2 1048.png"
            alt="Artists banner"
            className="w-full object-contain grayscale transition duration-500 border border-white"
            style={{ maxHeight: "500px" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {artists.map(({ name, bannerUrl }) => (
            <div
              key={name}
              role="button"
              tabIndex={0}
              onClick={() => handleArtistClick(name)}
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
              className="group relative block overflow-hidden border border-white"
              aria-label={`View ${name} artist overview`}
              style={{ aspectRatio: "3 / 2" }}
            >
              <img
                src={bannerUrl}
                alt={`${name} banner`}
                className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition duration-500"
              />

              {/* Blue tint overlay on hover */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-1000 transition duration-500 rounded"
                style={{
                  backgroundColor: highlightColor,
                  mixBlendMode: "multiply",
                }}
              />
            </div>
          ))}

          {/* Example for experiments or other sections */}
          {/* <div
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
        </div> */}
        </div>
      </section>
    </>
  );
}
