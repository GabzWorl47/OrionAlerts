import { notFound, permanentRedirect } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { MigratedIndustryPage } from "@/components/industries/MigratedIndustryPage";
import { industries } from "@/lib/site";
import {
  getIndustryPageRecord,
  shouldUseMigratedIndustryPage,
  toPublicIndustryPage,
} from "@/lib/industries/registry";
import { buildPageMetadata } from "@/lib/seo";

/** Old industry slugs that were renamed — keep deep links working. */
const legacyIndustrySlugs: Record<string, string> = {
  schools: "education-campuses",
  "commercial-infrastructure": "airports-ports-railways",
  qsr: "quick-commerce",
  "quick-service-restaurants": "quick-commerce",
};

export const dynamicParams = true;

/** 1200×630 JPG social card for an industry page. */
function industryOgImage(slug: string) {
  return `/Images/og/industries/${slug}.jpg`;
}

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const resolved = legacyIndustrySlugs[slug] ?? slug;

  if (shouldUseMigratedIndustryPage(resolved)) {
    const page = getIndustryPageRecord(resolved);
    if (!page) return {};
    // seo.title is the keyword title without the brand; the root layout's
    // title template appends " | OrionAlerts".
    const metadata = buildPageMetadata({
      title: page.seo.title,
      description: page.seo.description,
      pathname: page.seo.canonicalPath,
      image: industryOgImage(page.slug),
      imageAlt: page.hero.h1,
      ogTitle: page.seo.ogTitle,
      ogDescription: page.seo.ogDescription,
    });
    // Purpose-made 1200×630 share cards (replaces hero images and hotlinked photos).
    const ogImage = { url: industryOgImage(page.slug), width: 1200, height: 630, alt: page.hero.h1 };
    return {
      ...metadata,
      openGraph: { ...metadata.openGraph, images: [ogImage] },
      twitter: { ...metadata.twitter, images: [ogImage.url] },
    };
  }

  // Every industry in the registry renders on the migrated path; anything else 404s.
  return {};
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const legacyTarget = legacyIndustrySlugs[slug];
  if (legacyTarget) permanentRedirect(`/industries/${legacyTarget}`);

  if (shouldUseMigratedIndustryPage(slug)) {
    const page = getIndustryPageRecord(slug);
    if (!page) notFound();
    return (
      <PageShell>
        <MigratedIndustryPage page={toPublicIndustryPage(page)} />
      </PageShell>
    );
  }

  notFound();
}
