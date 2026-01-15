type Artist = {
  artistName: string;
  overview: string;
  // add other props if needed
};

export default function ArtistOverviewView({ artist }: { artist: Artist }) {
  return (
    <section className="mb-8 max-w-4xl mx-auto px-4 text-white-900">
      <h2 className="text-3xl font-semibold mb-4">About {artist.artistName}</h2>
      <p className="leading-relaxed">{artist.overview}</p>
    </section>
  );
}
