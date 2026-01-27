import { artistData } from "../lib/artistData";
// import type { Album, Artist } from "../lib/types/artist";

import { useDirectoryToggle } from "../context/DirectoryToggleContext";
import ArtistOverviewView from "./views/ArtistOverviewView";
import AlbumView from "./views/AlbumView";
import DocumentationOrientation from "./views/DocumentationOrientation";

export default function ContentViewer() {
  const { selectedNode } = useDirectoryToggle();

    // Show DocumentationOrientation if nothing selected or a folder selected (default view)
  if (!selectedNode || selectedNode.type === "folder") {
    return <DocumentationOrientation />;
  }

  // if (!selectedNode || selectedNode.type === "folder") {
  //   return <div className="">Please select a file for viewing.</div>;
  // }
  // console.log("selectedNode.fileType:", selectedNode.fileType);

  switch (selectedNode.fileType) {

    case "general-overview": {
      return <DocumentationOrientation/>
    }
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

