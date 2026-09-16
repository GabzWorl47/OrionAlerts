import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { IndustryGrid } from "@/components/landing/IndustryGrid";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";

export const metadata: Metadata = buildPageMetadata({
  title: "Industries",
  description:
    "Industry playbooks for manufacturing, energy, pharma, logistics, campuses, and more—with VMS, AI alerts, and camera health.",
  pathname: "/industries",
});

export default function IndustriesPage() {
  return (
    <PageShell>
      <>
        <JsonLdScript
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
          ])}
        />
        <IndustryGrid />
        <TestimonialsSection className="!pt-8 md:!pt-10" />
        <FinalCta />
      </>
    </PageShell>
  );
}
