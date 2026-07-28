import type { Metadata } from "next";
import { CtaBand, Section } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { IndustryGrid } from "@/components/landing/IndustryGrid";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "See how OrionAlerts delivers unified video, AI alerts, and surveillance health across manufacturing, energy, pharma, logistics, and commercial infrastructure.",
};

export default function IndustriesPage() {
  return (
    <PageShell>
      <>
        <IndustryGrid />
        <Section className="pt-0">
          <CtaBand
            title="Bring your site blueprint"
            lede="We'll walk a demo against your operating constraints — staffing, camera count, SLAs, and partner model."
            primaryHref="/book-demo"
            primaryLabel="Book a Demo"
          />
        </Section>
      </>
    </PageShell>
  );
}
