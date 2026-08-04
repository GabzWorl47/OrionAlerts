import type { Metadata } from "next";
import { CtaBand, Section } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { SolutionGrid } from "@/components/landing/SolutionGrid";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore OrionAlerts VMS, AI Vision, Asset Tracking, AMC Management, and Health Monitoring.",
};

export default function SolutionsIndexPage() {
  return (
    <PageShell>
      <>
        <SolutionGrid />
        <Section className="pt-0">
          <CtaBand
            title="Not sure where to start?"
            lede="Book a demo and we’ll map your sites, camera estate, and operating model to the right solution mix."
            primaryHref="/book-demo"
            primaryLabel="Book a Demo"
            secondaryHref="/industries"
            secondaryLabel="Browse industries"
          />
        </Section>
      </>
    </PageShell>
  );
}
