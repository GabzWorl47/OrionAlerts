import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { FaqsExperience } from "@/components/FaqsExperience";
import { faqs } from "@/lib/faqs";
import { faqPageJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "FAQs",
  description:
    "Answers on OrionAlerts deployment, cameras, AI detections, multi-site ops, partners, and support.",
  pathname: "/faqs",
});

export default function FaqsPage() {
  return (
    <PageShell>
      <JsonLdScript
        data={faqPageJsonLd(
          faqs.map((item) => ({ question: item.q, answer: item.a })),
        )}
      />
      <FaqsExperience />
    </PageShell>
  );
}
