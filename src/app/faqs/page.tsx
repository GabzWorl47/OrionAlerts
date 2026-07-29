import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { FaqsExperience } from "@/components/FaqsExperience";

export const metadata: Metadata = {
  title: "FAQs",
  description:
    "Clear answers on OrionAlerts deployment, integrations, demos, partners, and support.",
};

export default function FaqsPage() {
  return (
    <PageShell>
      <FaqsExperience />
    </PageShell>
  );
}
