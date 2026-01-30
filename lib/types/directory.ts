export type FileType =
  | "general-overview"
  | "artist-overview"
  | "artist-album"
  | "gallery-view";

export type DirectoryNode = {
  id: number;
  name: string;
  artistName?: string;
  type: "file" | "folder";
  fileType?: FileType;
  children?: DirectoryNode[];
  content?: string;
  url?: string;
};
