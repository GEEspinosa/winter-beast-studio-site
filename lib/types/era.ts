export type Release = {
  artist: string;
  title: string;
  year?: string;
  albumArtUrl?: string;
  credits?: string;
  description?: string;
  notes?: string;
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