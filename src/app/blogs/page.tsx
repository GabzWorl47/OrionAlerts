import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { BlogsExperience } from "@/components/BlogsExperience";
import { blogCalendarDay, sortBlogPosts, type BlogPost } from "@/lib/blogs";
import { buildPageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { absoluteUrl } from "@/lib/industries/site-origin";
import { breadcrumbJsonLd, JsonLdScript, organizationId } from "@/lib/jsonld";
import { getBlogPostsForDisplay } from "./_lib/posts";

export const dynamic = "force-dynamic";

const BLOG_NAME = `${site.name} Blog`;
const BLOG_DESCRIPTION =
  "Guides on AI video analytics, enterprise VMS, CCTV camera health and AMC management for multi-site operations in India, from the OrionAlerts team.";

export const metadata: Metadata = buildPageMetadata({
  title: "AI Video Analytics & CCTV Operations Blog",
  description: BLOG_DESCRIPTION,
  pathname: "/blogs",
});

const abs = (path: string) => (path.startsWith("http") ? path : absoluteUrl(path));

/** `Blog` node listing every published post, plus an `ItemList` in display order. */
function blogJsonLd(posts: BlogPost[]) {
  const blogUrl = absoluteUrl("/blogs");
  const orgId = organizationId();
  const publisher = orgId ? { "@id": orgId } : { "@type": "Organization", name: site.name };

  return [
    {
      "@context": "https://schema.org",
      "@type": "Blog",
      "@id": `${blogUrl}#blog`,
      name: BLOG_NAME,
      description: BLOG_DESCRIPTION,
      url: blogUrl,
      inLanguage: "en-IN",
      publisher,
      blogPost: posts.map((post) => {
        const url = absoluteUrl(`/blogs/${post.slug}`);
        return {
          "@type": "BlogPosting",
          "@id": `${url}#article`,
          headline: post.title,
          description: post.excerpt,
          url,
          image: abs(post.image),
          datePublished: post.date,
          dateModified: blogCalendarDay(post.updatedAt) ?? post.date,
          articleSection: post.category,
          author:
            post.author === `${site.name} Team`
              ? publisher
              : { "@type": "Person", name: post.author },
        };
      }),
    },
    {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "@id": `${blogUrl}#posts`,
      name: `${BLOG_NAME} articles`,
      numberOfItems: posts.length,
      itemListOrder: "https://schema.org/ItemListOrderDescending",
      itemListElement: posts.map((post, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: post.title,
        url: absoluteUrl(`/blogs/${post.slug}`),
      })),
    },
  ];
}

export default async function BlogsPage() {
  const posts = sortBlogPosts(await getBlogPostsForDisplay());

  return (
    <PageShell>
      <>
        <JsonLdScript
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blogs" },
          ])}
        />
        {blogJsonLd(posts).map((node) => (
          <JsonLdScript key={node["@type"]} data={node} />
        ))}
        <BlogsExperience posts={posts} />
      </>
    </PageShell>
  );
}
