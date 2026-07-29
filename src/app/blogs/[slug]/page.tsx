import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand, Section } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { BlogArticle } from "@/components/BlogArticle";
import { blogPosts, getBlog, getRelatedPosts } from "@/lib/blogs";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image],
    },
  };
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlog(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: [post.image],
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "OrionAlerts",
    },
    mainEntityOfPage: `/blogs/${post.slug}`,
  };

  return (
    <PageShell>
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
