import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/winter-beast-studio-site",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
