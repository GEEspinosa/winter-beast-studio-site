
import { artistData } from "@/lib/artistData";
import type { Album } from "@/lib/types/artist";

const preWinterBeastArtists = new Set([
  "Stab The Matador",
  "Mobile",
  "Fischerspooner",
  "Caseyspooner",
  "Shalants",
  "Blondie",
  "Night Surgeon",
  "Steelhymen",
  "Bulldog Shadow",
  "Twin Perish",
  "L'Acephale",
  "Kolotov Mocktail",
]);

export const preWinterBeastReleases: Album[] = artistData
  .filter((artist) => preWinterBeastArtists.has(artist.artistName))
  .flatMap((artist) => artist.output)
  .sort(
  (a, b) =>
    (a.archivePriority ?? Number.MAX_SAFE_INTEGER) -
    (b.archivePriority ?? Number.MAX_SAFE_INTEGER)
);