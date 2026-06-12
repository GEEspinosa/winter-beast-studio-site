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
  period: string;
  location: string;

  heroImage?: string;

  description: string;

  releases: Release[];

  images?: string[];
};