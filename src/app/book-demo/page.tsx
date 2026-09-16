import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Book a Demo",
  description:
    "Request a guided OrionAlerts demo for VMS, AI alerts, asset tracking, AMC, or health monitoring.",
  pathname: "/book-demo",
});

/** Direct visits open the site modal via BookDemoModalProvider and return home. */
export default function BookDemoPage() {
  return null;
}
