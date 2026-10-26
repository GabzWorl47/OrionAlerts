import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { FaqsExperience } from "@/components/FaqsExperience";
import { faqs } from "@/lib/faqs";
import { breadcrumbJsonLd, faqPageJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQ: AI Video Analytics, VMS & Deployment",
  description:
    "Answers on OrionAlerts deployment, camera compatibility, AI video analytics detections, multi-site operations, data handling, partners and support.",
  pathname: "/faqs",
});

export default function FaqsPage() {
  return (
    <PageShell>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "FAQs", path: "/faqs" },
        ])}
      />
      <JsonLdScript
        data={faqPageJsonLd(
          faqs.map((item) => ({ question: item.q, answer: item.a })),
        )}
      />
      <FaqsExperience />
    </PageShell>
  );
}
