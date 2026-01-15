import { artistData } from "../lib/artistData";
// import type { Album, Artist } from "../lib/types/artist";

import { useDirectoryToggle } from "../context/DirectoryToggleContext";
import ArtistOverviewView from "./views/ArtistOverviewView";
import AlbumView from "./views/AlbumView";

export default function ContentViewer() {
  const { selectedNode } = useDirectoryToggle();

  if (!selectedNode || selectedNode.type === "folder") {
    return <div className="">Please select a file for viewing.</div>;
  }
  console.log("selectedNode.fileType:", selectedNode.fileType);

  switch (selectedNode.fileType) {
    case "artist-overview": {
      const artist = artistData.find(
        (a) => a.artistName === selectedNode.artistName
      );
      if (!artist) {
        return <div>Artist data not found.</div>;
      }
      return <ArtistOverviewView artist={artist} />;
    }

    case "artist-album": {
      const artist = artistData.find(
        (a) => a.artistName === selectedNode.artistName
      );

      if (!artist) {
        return <div>Artist data not found.</div>;
      }

      const album = artist.output.find(
        (o) => o.selectOutputName === selectedNode.name
      );

      if (!album) {
        return <div>Album info coming soon.</div>;
      }

      return <AlbumView album={album} />;
    }

    // other cases...
  }
}

// case "readme":
//   return <READMEView content={selectedNode.content ?? ""} />;
// case "live-demo":
//   return <LiveDemoView demoURL={selectedNode.url!} />;
// case "pre-wb-album": {
//   const album = preWinterBeastAlbumsData.find(
//     (a) => a.selectName === selectedNode.name
//   );

//   if (!album) {
//     return <div>Album data not found.</div>;
//   }
//   return <PreWinterBeastAlbumView album={album} />;
// }
// case "wb-album": {
//   const album = winterBeastAlbumsData.find(
//     (a) => a.selectName === selectedNode.name
//   );

//   if (!album) {
//     return <div>Album data not found.</div>;
//   }
//   return <WinterBeastAlbumView album={album} />;
// }
