import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { SITE_DEFAULT_DESCRIPTION } from "@/lib/seo";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: SITE_DEFAULT_DESCRIPTION,
    start_url: "/",
    display: "browser",
    background_color: "#f4f6f8",
    theme_color: "#0c2238",
    icons: [
      { src: "/Images/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/Images/favicon.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
