import Link from "next/link";
import { notFound } from "next/navigation";
import { Button, CtaBand, Section, SectionHeading } from "@/components/ui";
import { getIndustry, getSolution, industries } from "@/lib/site";

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) return {};
  return { title: industry.name, description: industry.summary };
}

export default async function IndustryDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const industry = getIndustry(slug);
  if (!industry) notFound();

  return (
    <>
      <Section className="pt-14">
        <p className="eyebrow">Industry</p>
        <h1 className="display mt-3 max-w-3xl text-4xl text-ink md:text-6xl">{industry.name}</h1>
        <p className="lede mt-4">{industry.summary}</p>
        <div className="mt-8">
          <Button href="/book-demo">Book a Demo</Button>
        </div>
      </Section>

      <Section className="bg-white/40">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Pressure points" title="Challenges" />
            <ul className="space-y-3">
              {industry.challenges.map((item) => (
                <li key={item} className="surface rounded-[var(--radius)] px-4 py-3 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="What changes" title="Outcomes" />
            <ul className="space-y-3">
              {industry.outcomes.map((item) => (
                <li key={item} className="surface rounded-[var(--radius)] px-4 py-3 text-ink-soft">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Solution mix" title="Recommended OrionAlerts stack" />
        <div className="grid gap-4 sm:grid-cols-2">
          {industry.relatedSolutions.map((slug) => {
            const solution = getSolution(slug);
            if (!solution) return null;
            return (
              <Link
                key={slug}
                href={`/solutions/${slug}`}
                className="surface rounded-[var(--radius)] p-5 transition hover:border-signal/35"
              >
                <h3 className="display text-xl text-ink">{solution.shortName}</h3>
                <p className="mt-2 text-sm text-muted">{solution.summary}</p>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section>
        <CtaBand
          title={`See OrionAlerts for ${industry.name}`}
          lede="Book a demo tailored to your sector workflows and operator model."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref="/contact"
          secondaryLabel="Connect With Us"
        />
      </Section>
    </>
  );
}
