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
  homepagePriority?: number;
  yourCredits: string;
  links: AlbumLink[];
  format?: string;
  runtime?: string;

  trackListing?: {
    title: string;
    duration?: string;
  }[];
};

export type Artist = {
  artistName: string;
  artistBanner: string;
  overview: string;
  output: Album[];
  media: {
    photos: string[];
    videos: string[];
  };
};