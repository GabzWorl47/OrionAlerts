import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Framer Motion enter animations stay stuck at opacity:0 under React 19 Strict Mode
  // (double-mount), which blanks the whole site. See motiondivision/motion#3221.
  reactStrictMode: false,
  // Allow both localhost and 127.0.0.1 in dev so /_next assets & HMR work either way.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
