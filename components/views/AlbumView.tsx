type Album = {
  selectOutputName: string;
  outputName: string;
  year: string;
  rlabel: string;
  locations: string[];
  albumArtUrl: string;
  yourCredits: string;
  links: {
    label: string;
    url: string;
  }[];
  // add other props if needed
};

export default function AlbumView({ album }: { album: Album }) {
  return (
    <section className="mb-8 max-w-4xl mx-auto px-4 text-white-900">
      <h2 className="text-3xl font-semibold mb-4">About {album.outputName}</h2>
      <p className="leading-relaxed">{album.year}</p>
    </section>
  );
}
