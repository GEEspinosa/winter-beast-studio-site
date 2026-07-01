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
  releaseDate?: string;
  personnel?: {
    name: string;
    role: string;
  }[];

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


export type GalleryImage = {
  url: string;
  project?: string; 
  location?: string;
  priority: number;
  context?: string;  // e.g. "Hail", "Winterbeast sessions"
  date?: string;      // or year, or range
  description?: string;
  photoInfo?: string;
};