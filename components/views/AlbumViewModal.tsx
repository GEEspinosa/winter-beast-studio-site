import type { Album } from "../../lib/types/artist";

export default function AlbumViewModal({
  album,
  onClose,
}: {
  album: Album;
  onClose: () => void;
}) {
  return (
    <div className="w-[min(1000px,92vw)] mx-auto bg-black text-[#e6e6e6]  shadow-2xl overflow-hidden   border border-white/10 relative">
      {/* Frame system */}
      {/* <div className="absolute inset-1 border border-white/10 pointer-events-none" /> */}
      <div className="absolute inset-2 border border-white/10 pointer-events-none" />
      {/* <div className="absolute inset-3 border border-white/10 pointer-events-none" /> */}
      {/* <div className="absolute inset-4 border border-white/10 pointer-events-none" /> */}

      {/* Close button */}
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
        <span className="text-2xl">×</span>
      </button>

      {/* Content */}
      <div className="relative p-7 space-y-6">
        {/* HEADER */}
        <header className="flex flex-col md:flex-row gap-6 items-start">
          {album.albumArtUrl && (
            <img
              src={album.albumArtUrl}
              className="w-full md:w-[300px] md:h-[300px] aspect-square object-cover border border-white/10"
            />
          )}

          <div className="flex flex-col justify-between">
            <div>
              <h1 className="text-4xl md:text-5xl font-light tracking-wide leading-tight">
                {album.outputName}
              </h1>

              <p className="text-xl md:text-2xl text-zinc-300 mt-2">
                {album.artistName}
              </p>

              <p className="text-sm text-zinc-400 font-mono mt-2">
                {album.year}
              </p>
            </div>

            {album.yourCredits && (
              <p className="text-sm text-zinc-300 italic mt-5 max-w-md">
                Credits: {album.yourCredits}
              </p>
            )}
          </div>
        </header>

        {/* LINKS */}
        {album.links && album.links.length > 0 && (
          <section className="pt-2">
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
                    className="inline-flex items-center px-3 py-1.5 text-sm bg-white/10 text-zinc-200 border border-white/10 rounded hover:bg-white hover:text-black transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </div>
  );
}
