import type {Album} from "../../lib/types/artist";

export default function AlbumView({ album }: { album: Album }) {
  return (
    <div className="max-w-4xl mx-auto p-6 m-2 bg-gray-50 rounded shadow-md space-y-6">
      {/* Album Header */}
      <header className="flex items-center space-x-6">
        {album.albumArtUrl && (
          <img
            src={album.albumArtUrl}
            // alt={`${album.artist} - ${album.name} album art`}
            className="w-40 h-40 object-cover rounded border border-gray-100"
          />
        )}
        <div>
          <h1 className="text-[20px] font-bold font-sans text-gray-800">
            {album.outputName}
          </h1>
          <p className="text-[18px] font-semibold text-gray-700 font-sans">{album.artistName}</p>
          <p className="text-[14px] text-gray-600 font-mono">{album.year}</p>
          {album.yourCredits && (
            <p className="mt-2 text-[12px] italic text-gray-700 ">
              Credits: {album.yourCredits}
            </p>
          )}
        </div>
      </header>

      {/* Links Section */}
      {album.links && album.links.length > 0 && (
        <section>
          <h2 className="font-semibold text-gray-700 font-sans text-[12px] mb-2">
            Links
          </h2>

          <ul className="flex gap-4 mt-4 font-mono">
            {album.links.map(({ label, url }) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-[12px] gap-2 text-gray-800 p-4 bg-gray-200 rounded hover:text-white hover:bg-black transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
