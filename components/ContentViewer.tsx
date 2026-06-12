import { useState } from "react";
import Image from "next/image";
import { artistData } from "../lib/artistData";
import { ImageViewer } from "./views/ImageViewer";
import PreWinterbeastEraView from "../components/views/PreWinterBeastEraView";

import { useDirectoryToggle } from "../context/DirectoryToggleContext";
import ArtistOverviewView from "./views/ArtistOverviewView";
import AlbumView from "./views/AlbumView";
import DocumentationOrientation from "./views/DocumentationOrientation";

export default function ContentViewer() {
  const { selectedNode } = useDirectoryToggle();
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);

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
      return <DocumentationOrientation />;
    }
    case "artist-overview": {
      const artist = artistData.find(
        (a) => a.artistName === selectedNode.artistName,
      );
      if (!artist) {
        return <div>Artist data not found.</div>;
      }
      return <ArtistOverviewView artist={artist} />;
    }

    case "artist-album": {
      const artist = artistData.find(
        (a) => a.artistName === selectedNode.artistName,
      );

      if (!artist) {
        return <div>Artist data not found.</div>;
      }

      const album = artist.output.find(
        (o) => o.selectOutputName === selectedNode.name,
      );

      if (!album) {
        return <div>Album info coming soon.</div>;
      }

      return <AlbumView album={album} />;
    }

    case "gallery-view": {
      const artist = artistData.find(
        (a) => a.artistName === selectedNode.artistName,
      );

      console.log(artist);

      if (!artist) {
        return <div>Artist data not found.</div>;
      }

      return (
        <div className="border border-white bg-gray-900 p-6">
          {artist.media.photos.length ? (
            <div
              className="
            grid 
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            gap-4
          "
            >
              {artist.media.photos.map((src, i) => (
                <button
                  key={src}
                  onClick={() => {
                    setViewerIndex(i);
                    setViewerOpen(true);
                  }}
                  className="focus:outline-none"
                >
                  <div className="relative w-full aspect-square bg-white p-2 flex items-center justify-center">
                    <Image
                      src={src}
                      alt={`${artist.artistName} photo ${i + 1}`}
                      fill
                      className="object-contain p-1"
                      sizes="(max-width: 768px) 100vw, 300px"
                    />
                  </div>
                </button>
              ))}
            </div>
          ) : (
            <p className="text-gray-400 italic">No images available.</p>
          )}

          {viewerOpen && (
            <ImageViewer
              images={artist.media.photos}
              startIndex={viewerIndex}
              onClose={() => setViewerOpen(false)}
            />
          )}
        </div>
      );
    }

    case "pre-winterbeast-overview": {
      return <PreWinterbeastEraView />;
    }
    // other cases...
  }
}
