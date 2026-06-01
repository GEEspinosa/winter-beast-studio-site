import { artistData } from "../artistData";

export const featuredHomepageReleases = artistData
  .flatMap((artist) => artist.output)
  .filter((release) => release.homepagePriority !== undefined)
  .sort(
    (a, b) =>
      (a.homepagePriority ?? 999) -
      (b.homepagePriority ?? 999)
  );