import { notFound, redirect } from "next/navigation";
import type { Metadata } from "next";
import { PageShell } from "@/components/PageShell";
import { IndustryHero } from "@/components/IndustryHero";
import { IndustryPageSections } from "@/components/IndustryPageSections";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { MigratedIndustryPage } from "@/components/industries/MigratedIndustryPage";
import { industries } from "@/lib/site";
import { getIndustryPage, getRelatedIndustries } from "@/lib/industry-pages";
import {
  getIndustryPageRecord,
  shouldUseMigratedIndustryPage,
} from "@/lib/industries/registry";
import { absoluteUrl } from "@/lib/industries/site-origin";

/** Old industry slugs that were renamed — keep deep links working. */
const legacyIndustrySlugs: Record<string, string> = {
  schools: "education-campuses",
  "commercial-infrastructure": "airports-ports-railways",
  qsr: "quick-commerce",
  "quick-service-restaurants": "quick-commerce",
};

export const dynamicParams = true;

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
    const canonical = absoluteUrl(page.seo.canonicalPath);
    return {
      title: { absolute: page.seo.title },
      description: page.seo.description,
      alternates: canonical ? { canonical } : undefined,
      openGraph: {
        title: page.seo.ogTitle ?? page.seo.title,
        description: page.seo.ogDescription ?? page.seo.description,
        url: canonical,
        images: page.seo.image ? [{ url: page.seo.image }] : undefined,
      },
    };
  }

  const industry = getIndustryPage(resolved);
  if (!industry) return {};
  return {
    title: industry.name,
    description: industry.summary,
  };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const legacyTarget = legacyIndustrySlugs[slug];
  if (legacyTarget) redirect(`/industries/${legacyTarget}`);

  if (shouldUseMigratedIndustryPage(slug)) {
    const page = getIndustryPageRecord(slug);
    if (!page) notFound();
    return (
      <PageShell>
        <MigratedIndustryPage page={page} />
      </PageShell>
    );
  }

  const industry = getIndustryPage(slug);
  if (!industry) notFound();

  const related = getRelatedIndustries(slug, 4);

  return (
    <PageShell>
      <>
        <IndustryHero industry={industry} />
        <LogoMarquee />
        <IndustryPageSections industry={industry} related={related} />
      </>
    </PageShell>
  );
}
