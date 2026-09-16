import { notFound, permanentRedirect } from "next/navigation";
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
import { buildPageMetadata, clipDescription } from "@/lib/seo";
import { breadcrumbJsonLd, JsonLdScript } from "@/lib/jsonld";

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
    return buildPageMetadata({
      title: page.seo.title,
      description: page.seo.description,
      pathname: page.seo.canonicalPath,
      absoluteTitle: true,
      image: page.seo.image,
      imageAlt: page.seo.ogTitle ?? page.seo.title,
      ogTitle: page.seo.ogTitle,
      ogDescription: page.seo.ogDescription,
    });
  }

  const industry = getIndustryPage(resolved);
  if (!industry) return {};
  return buildPageMetadata({
    title: industry.name,
    description: clipDescription(
      industry.tagline
        ? `${industry.name}: ${industry.tagline}`
        : industry.summary,
    ),
    pathname: `/industries/${industry.slug}`,
    image: industry.image,
    imageAlt: industry.name,
  });
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
        <JsonLdScript
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Industries", path: "/industries" },
            { name: industry.name, path: `/industries/${industry.slug}` },
          ])}
        />
        <IndustryHero industry={industry} />
        <LogoMarquee />
        <IndustryPageSections industry={industry} related={related} />
      </>
    </PageShell>
  );
}
