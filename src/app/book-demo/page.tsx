import type { Metadata } from "next";
import { LeadForm } from "@/components/LeadForm";
import { Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Book a Demo",
  description: "Request a guided OrionAlerts demo. Demo leads are stored separately from contact inquiries.",
};

export default function BookDemoPage() {
  return (
    <Section className="max-w-3xl pt-14" narrow>
      <LeadForm
        kind="demo"
        title="Book a Demo"
        subtitle="Tell us about your sites and priorities. We’ll schedule a guided walkthrough."
      />
    </Section>
  );
}
