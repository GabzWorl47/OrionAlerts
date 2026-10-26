import type { Metadata } from "next";
import { BookDemoPanel } from "@/components/BookDemoPanel";
import { PageShell } from "@/components/PageShell";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Book a Demo: VMS, AI Alerts & Asset Tracking",
  description:
    "Book a guided OrionAlerts demo of VMS, AI video alerts, camera health, asset tracking and AMC. Tell us about your sites and we’ll schedule a walkthrough.",
  pathname: "/book-demo",
});

/**
 * Server-rendered demo page. Direct visits (ads, email, AI citations) land here
 * and keep the URL; in-site "Book a demo" clicks are still intercepted by
 * BookDemoModalProvider and open the modal instead of navigating.
 */
export default function BookDemoPage() {
  return (
    <PageShell>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Book a Demo", path: "/book-demo" },
        ])}
      />
      <BookDemoPanel />
    </PageShell>
  );
}
