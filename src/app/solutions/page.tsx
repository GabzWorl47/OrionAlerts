import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SolutionGrid } from "@/components/landing/SolutionGrid";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = buildPageMetadata({
  title: "Solutions",
  description:
    "Explore OrionAlerts VMS, AI Vision alerts, Asset Tracking, AMC Management, and Health Monitoring.",
  pathname: "/solutions",
});

export default function SolutionsIndexPage() {
  return (
    <PageShell>
      <>
        <JsonLdScript
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Solutions", path: "/solutions" },
          ])}
        />
        <SolutionGrid />
        <TestimonialsSection />
        <FinalCta />
      </>
    </PageShell>
  );
}
