import { notFound } from "next/navigation";
import { PageShell } from "@/components/PageShell";
import { IndustryHero } from "@/components/IndustryHero";
import { IndustryPageSections } from "@/components/IndustryPageSections";
import { industries } from "@/lib/site";
import { getIndustryPage, getRelatedIndustries } from "@/lib/industry-pages";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustryPage(slug);
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
  const industry = getIndustryPage(slug);
  if (!industry) notFound();

  const related = getRelatedIndustries(slug, 4);

  return (
    <PageShell>
      <>
        <IndustryHero industry={industry} />
        <IndustryPageSections industry={industry} related={related} />
      </>
    </PageShell>
  );
}
