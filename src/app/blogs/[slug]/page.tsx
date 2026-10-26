import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, Section } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { BlogArticle } from "@/components/BlogArticle";
import { countBlogWords, getRelatedPosts } from "@/lib/blogs";
import { getBlogPostForDisplay, getBlogPostsForDisplay } from "../_lib/posts";
import { articleJsonLd, breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const posts = await getBlogPostsForDisplay();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostForDisplay(slug);
  if (!post) return {};
  return buildPageMetadata({
    // buildPageMetadata owns clipping (suffix-aware); do not pre-clip here.
    // seoTitle is the short search title for posts whose H1 runs past 60 chars.
    title: post.seoTitle || post.title,
    description: post.excerpt,
    pathname: `/blogs/${post.slug}`,
    image: post.image,
    imageAlt: post.imageAlt || post.title,
    type: "article",
    publishedTime: post.date,
    modifiedTime: post.updatedAt || post.date,
    authors: [post.author],
  });
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const posts = await getBlogPostsForDisplay();
  const post = posts.find((item) => item.slug === slug);
  if (!post) notFound();

  const related = getRelatedPosts(posts, slug, 2);

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
            dateModified: post.updatedAt || post.date,
            authorName: post.author,
            authorRole: post.authorRole,
            wordCount: countBlogWords(post.sections, post.takeaways),
            section: post.category,
            ...(post.tags?.length ? { about: post.tags } : {}),
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
            secondaryLabel="More Articles"
          />
        </Section>
      </>
    </PageShell>
  );
}
