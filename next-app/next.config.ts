import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
      }
    ],
  },
  cacheComponents: true,
};

export default nextConfig;
