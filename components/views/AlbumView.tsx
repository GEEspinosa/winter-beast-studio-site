// type Album = {
//   selectOutputName: string;
//   outputName: string;
//   artistName: string;
//   year: string;
//   rlabel: string;
//   locations: string[];
//   albumArtUrl: string;
//   yourCredits: string;
//   links: {
//     label: string;
//     url: string;
//   }[];
//   // add other props if needed
// };

import type {Album} from "../../lib/types/artist";

export default function AlbumView({ album }: { album: Album }) {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-50 rounded shadow-md space-y-6">
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
          <h1 className="text-3xl font-bold font-sans text-gray-800">
            {album.outputName}
          </h1>
          <p className="text-xl font-semibold text-gray-700 font-sans">{album.artistName}</p>
          <p className="text-md text-gray-600 font-mono">{album.year}</p>
          {album.yourCredits && (
            <p className="mt-2 italic text-gray-700 font-mono">
              Credits: {album.yourCredits}
            </p>
          )}
        </div>
      </header>

      {/* Links Section */}
      {album.links && album.links.length > 0 && (
        <section>
          <h2 className="font-semibold text-gray-700 font-sans text-lg mb-2">
            Links
          </h2>

          <ul className="flex gap-4 mt-4 font-mono">
            {album.links.map(({ label, url }) => (
              <li key={url}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-800 p-4 bg-gray-200 rounded hover:text-white hover:bg-black transition"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Notes or Anecdotes */}
      {/* {album.notes && (
        <section>
          <h2 className="font-semibold text-lg mb-2">Notes</h2>
          <p className="whitespace-pre-wrap text-gray-700">{album.notes}</p>
        </section>
      )} */}
    </div>
  );
}
