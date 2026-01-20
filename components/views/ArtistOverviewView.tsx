import {Artist} from "../../lib/types/artist";
import AlbumView from "./AlbumView";

export default function ArtistOverviewView({ artist }: { artist: Artist }) {
  return (
    <section className="mb-8 max-w-4xl mx-auto px-4 text-white-900">
      {/* <h2 className="text-3xl font-semibold mb-4">{artist.artistName}</h2> */}
      <img src={artist.artistBanner}/> 
      <p className="leading-relaxed">{artist.overview}</p>

      {/* Render all albums */}
      {artist.output.map((album) => (
        <AlbumView key={album.selectOutputName} album={album} />
      ))}
    </section>
    
  );
}
