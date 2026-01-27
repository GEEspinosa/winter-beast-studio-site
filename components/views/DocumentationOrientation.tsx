"use client";

import Link from "next/link";

const artists = [
  {
    name: "Hail",
    bannerUrl: "/images/artist-banners/hail-banner.jpg",
    href: "/documentation/artists/hail",
  },
  {
    name: "Old Town Diamonds",
    bannerUrl: "/images/artist-banners/old-town-diamonds.jpg",
    href: "/documentation/artists/old-town-diamonds",
  },
  // Add other artists here
];

export default function DocumentationOrientation() {
  return (
    <section className="mb-8 max-w-6xl mx-auto px-4 text-white">
      <h1 className="text-4xl font-bold mb-8">Documentation Home</h1>

      <p className="mb-8 max-w-3xl leading-relaxed">
        Welcome to WinterBeast documentation. Explore artist archives, experiments, and other studio materials through the sections below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {artists.map(({ name, bannerUrl, href }) => (
          <Link
            key={name}
            href={href}
            className="group relative block rounded-lg overflow-hidden border border-white hover:border-blue-400 transition"
          >
            <img
              src={bannerUrl}
              alt={`${name} banner`}
              className="w-full h-48 object-cover grayscale group-hover:grayscale-0 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 p-4">
              <h2 className="text-xl font-semibold text-white">{name}</h2>
            </div>
          </Link>
        ))}

        <Link
          href="/documentation/experiments"
          className="group relative block rounded-lg overflow-hidden border border-white hover:border-blue-400 transition"
        >
          <div className="flex items-center justify-center h-48 bg-gray-800">
            <span className="text-white text-2xl font-semibold">Experiments</span>
          </div>
        </Link>
      </div>
    </section>
  );
}