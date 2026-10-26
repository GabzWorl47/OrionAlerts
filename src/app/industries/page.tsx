import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { IndustryGrid } from "@/components/landing/IndustryGrid";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCta } from "@/components/landing/FinalCta";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";
import { absoluteUrl, getSiteOrigin } from "@/lib/industries/site-origin";
import { industries, site } from "@/lib/site";

const HUB_DESCRIPTION =
  "AI video analytics for 30 industries, from factories, warehouses and pharma plants to bank branches and campuses, with VMS, AI alerts and camera health.";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Video Analytics by Industry",
  description: HUB_DESCRIPTION,
  pathname: "/industries",
});

function industriesCollectionJsonLd() {
  const origin = getSiteOrigin();
  const url = absoluteUrl("/industries");
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#webpage`,
    url,
    name: "AI Video Analytics by Industry",
    description: site.entityStatement,
    inLanguage: "en",
    isPartOf: { "@id": `${origin}/#website` },
    publisher: { "@id": `${origin}/#organization` },
    mainEntity: {
      "@type": "ItemList",
      "@id": `${url}#industries`,
      name: "Industries served by OrionAlerts",
      numberOfItems: industries.length,
      itemListElement: industries.map((industry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: industry.name,
        url: absoluteUrl(`/industries/${industry.slug}`),
        ...(industry.tagline ? { description: industry.tagline } : {}),
      })),
    },
  };
}

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
        <JsonLdScript data={industriesCollectionJsonLd()} />
        <IndustryGrid />
        <TestimonialsSection className="!pt-8 md:!pt-10" />
        <FinalCta />
      </>
    </PageShell>
  );
}
