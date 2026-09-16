import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { BlogsExperience } from "@/components/BlogsExperience";
import { getPublishedBlogPosts } from "@/lib/blog-store";
import { buildPageMetadata } from "@/lib/seo";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";

export const dynamic = "force-dynamic";

export const metadata: Metadata = buildPageMetadata({
  title: "Blog",
  description:
    "Insights on AI vision, video operations, alert fatigue, and enterprise surveillance from OrionAlerts.",
  pathname: "/blogs",
});

export default async function BlogsPage() {
  const posts = await getPublishedBlogPosts();

  return (
    <PageShell>
      <>
        <JsonLdScript
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blogs" },
          ])}
        />
        <BlogsExperience posts={posts} />
      </>
    </PageShell>
  );
}
