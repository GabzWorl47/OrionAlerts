import { notFound, redirect } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { IndustryHero } from "@/components/IndustryHero";
import { IndustryPageSections } from "@/components/IndustryPageSections";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { industries } from "@/lib/site";
import { getIndustryPage, getRelatedIndustries } from "@/lib/industry-pages";

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

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const resolved = legacyIndustrySlugs[slug] ?? slug;
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
