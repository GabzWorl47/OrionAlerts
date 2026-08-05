import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { SolutionGrid } from "@/components/landing/SolutionGrid";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { FinalCta } from "@/components/landing/FinalCta";

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
        <TestimonialsSection />
        <FinalCta />
      </>
    </PageShell>
  );
}
