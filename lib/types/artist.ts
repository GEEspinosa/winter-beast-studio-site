export type AlbumLink = {
  label: string;
  url: string;
};

export type Album = {
  selectOutputName: string;
  outputName: string;
  artistName: string;
  year: string;
  rlabel: string;
  locations: string[];
  albumArtUrl: string;
  yourCredits: string;
  links: AlbumLink[];
};

export type Artist = {
  artistName: string;
  overview: string;
  output: Album[];
  media: {
    photos: string[];
    videos: string[];
  };
};