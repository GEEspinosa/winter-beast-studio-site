export type Release = {
  artist: string;
  title: string;
  year?: string;
  albumArtUrl?: string;
  credits?: string;
  description?: string;
  notes?: string;

  label?: string;
  format?: string;
  runtime?: string;

  trackListing?: {
    title: string;
    duration?: string;
  }[];
};

export type EraData = {
  id: string;

  title: string;
  location: string;
  description: string;

  context?: string;

  heroImage?: string;

  releases: Release[];
  images?: string[];
};
