import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Framer Motion enter animations stay stuck at opacity:0 under React 19 Strict Mode
  // (double-mount), which blanks the whole site. See motiondivision/motion#3221.
  reactStrictMode: false,
  // Allow both localhost and 127.0.0.1 in dev so /_next assets & HMR work either way.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Self-contained Node server for cPanel / VPS (npm run build:cpanel → dist/).
  output: "standalone",
  // Blog JSON + uploads are read/written at runtime from process.cwd().
  outputFileTracingIncludes: {
    "/*": ["./data/**/*"],
    "/api/**/*": ["./data/**/*", "./public/uploads/**/*"],
    "/blogs": ["./data/**/*"],
    "/blogs/*": ["./data/**/*"],
  },
  images: {
    unoptimized: true,
    qualities: [75, 90, 95],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/resources",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/resources/:path*",
        destination: "/blogs",
        permanent: true,
      },
      {
        source: "/industries/schools",
        destination: "/industries/education-campuses",
        permanent: true,
      },
      {
        source: "/industries/commercial-infrastructure",
        destination: "/industries/airports-ports-railways",
        permanent: true,
      },
      {
        source: "/industries/qsr",
        destination: "/industries/quick-commerce",
        permanent: true,
      },
      {
        source: "/industries/quick-service-restaurants",
        destination: "/industries/quick-commerce",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
