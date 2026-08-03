import type { Metadata } from "next";
import { BookDemoPanel } from "@/components/BookDemoPanel";
import { PageShell } from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Book a Demo",
  description:
    "Request a guided OrionAlerts demo. Demo leads are stored separately from contact inquiries.",
};

export default function BookDemoPage() {
  return (
    <PageShell>
      <BookDemoPanel />
    </PageShell>
  );
}
