import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, Section } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { BlogArticle } from "@/components/BlogArticle";
import { getBlog, getPublishedBlogPosts, getRelatedPosts } from "@/lib/blog-store";
import { articleJsonLd, breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata, clipTitle } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await getPublishedBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) return {};
  return buildPageMetadata({
    title: clipTitle(post.title),
    description: post.excerpt,
    pathname: `/blogs/${post.slug}`,
    image: post.image,
    imageAlt: post.title,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.date,
    authors: [post.author],
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getBlog(slug);
  if (!post) notFound();

  const related = await getRelatedPosts(slug, 2);

  return (
    <PageShell>
      <>
        <JsonLdScript
          data={articleJsonLd({
            title: post.title,
            description: post.excerpt,
            slug: post.slug,
            image: post.image,
            datePublished: post.date,
            dateModified: post.date,
            authorName: post.author,
            authorRole: post.authorRole,
          })}
        />
        <JsonLdScript
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Blog", path: "/blogs" },
            { name: post.title, path: `/blogs/${post.slug}` },
          ])}
        />
        <BlogArticle post={post} related={related} />
        <Section className="bg-surface">
          <CtaBand
            title="Ready to respond faster?"
            lede="See how OrionAlerts fits your camera estate, staffing model, and industry workflows."
            primaryHref="/book-demo"
            primaryLabel="Book a Demo"
            secondaryHref="/blogs"
            secondaryLabel="More articles"
          />
        </Section>
      </>
    </PageShell>
  );
}
