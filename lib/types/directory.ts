export type FileType =
  | "general-overview"
  | "artist-overview"
  | "artist-album"
  | "gallery-view"
  | "pre-winterbeast-overview";

export type DirectoryNode = {
  id: number;
  name: string;

  artistName?: string;
   eraId?: string;

  type: "file" | "folder";
  fileType?: FileType;

  children?: DirectoryNode[];
  content?: string;
  url?: string;
};
