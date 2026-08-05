import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { IndustryGrid } from "@/components/landing/IndustryGrid";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCta } from "@/components/landing/FinalCta";

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
        <TestimonialsSection className="!pt-8 md:!pt-10" />
        <FinalCta />
      </>
    </PageShell>
  );
}
