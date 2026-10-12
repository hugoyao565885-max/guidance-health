import type { NextConfig } from "next";
import { siteUrl } from "./lib/site";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [{
      source: "/:path*",
      has: [{ type: "host", value: "www.hccareadvisory.com" }],
      destination: `${siteUrl}/:path*`,
      permanent: true,
    }];
  },
};

export default nextConfig;
