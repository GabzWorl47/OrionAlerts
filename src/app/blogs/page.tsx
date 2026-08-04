import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { BlogsExperience } from "@/components/BlogsExperience";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights & updates on AI Vision, video operations, and operational intelligence from OrionAlerts.",
};

export default function BlogsPage() {
  return (
    <PageShell>
      <BlogsExperience />
    </PageShell>
  );
}
