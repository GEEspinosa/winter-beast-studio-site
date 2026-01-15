// import GitHubRepoView from "./GitHubRepoView";
// import READMEView from "./READMEView";
// import LiveDemoView from "./LiveDemoView";
// import PreWinterBeastAlbumView from "./PreWinterBeastAlbumView";
// import WinterBeastAlbumView from "./WinterBeastAlbumView";
// import { preWinterBeastAlbumsData } from "@/lib/albumData/preWinterBeastAlbumData";
// import { winterBeastAlbumsData } from "@/lib/albumData/winterBeastAlbumData";
import { artistData } from "../lib/artistData";

import { useDirectoryToggle } from "../context/DirectoryToggleContext";
import ArtistOverviewView from "./views/ArtistOverviewView";

export default function ContentViewer() {
  const { selectedNode } = useDirectoryToggle();

  if (!selectedNode || selectedNode.type === "folder") {
    return <div className="">Please select a file for viewing.</div>;
  }
  console.log("selectedNode.fileType:", selectedNode.fileType);

  switch (selectedNode.fileType) {
    case "artist-overview": {
      const artist = artistData.find((a) => a.artistName === selectedNode.artistName);
      console.log("selectedNode.name:", selectedNode.name);
      if (!artist) {
        return <div>Artist data not found.</div>;
      }
      return <ArtistOverviewView artist={artist} />;
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
