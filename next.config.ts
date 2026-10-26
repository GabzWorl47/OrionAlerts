import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Framer Motion enter animations stay stuck at opacity:0 under React 19 Strict Mode
  // (double-mount), which blanks the whole site. See motiondivision/motion#3221.
  reactStrictMode: false,
  // Allow both localhost and 127.0.0.1 in dev so /_next assets & HMR work either way.
  allowedDevOrigins: ["127.0.0.1", "localhost"],
  // Self-contained Node server for cPanel / VPS (npm run build:cpanel → dist/).
  output: "standalone",
  poweredByHeader: false,
  compress: true,
  outputFileTracingRoot: path.join(__dirname),
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
  async headers() {
    // public/ media is not content-hashed, so cache for a week and revalidate in the
    // background rather than marking it immutable (replaced files must still roll out).
    const mediaCache = {
      key: "Cache-Control",
      value: "public, max-age=604800, stale-while-revalidate=2592000",
    };
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
      { source: "/Videos/:path*", headers: [mediaCache] },
      { source: "/Images/:path*", headers: [mediaCache] },
      { source: "/visuals/:path*", headers: [mediaCache] },
    ];
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
      {
        // Old, truncated slug of the CP Plus integration post.
        source:
          "/blogs/transforming-cp-plus-surveillance-into-intelligent-video-infrastructure-with-ori",
        destination: "/blogs/cp-plus-ai-video-analytics-integration",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
