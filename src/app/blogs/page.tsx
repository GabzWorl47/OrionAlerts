import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { BlogsExperience } from "@/components/BlogsExperience";
import { getPublishedBlogPosts } from "@/lib/blog-store";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights & updates on AI Vision, video operations, and operational intelligence from OrionAlerts.",
};

export default async function BlogsPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <PageShell>
      <BlogsExperience posts={posts} />
    </PageShell>
  );
}
