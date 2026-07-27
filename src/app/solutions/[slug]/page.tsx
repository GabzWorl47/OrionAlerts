import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Button,
  CtaBand,
  FeatureCard,
  Section,
  SectionHeading,
  VideoPlaceholder,
} from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { getSolution, solutions } from "@/lib/site";

export function generateStaticParams() {
  return solutions.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) return {};
  return {
    title: solution.name,
    description: solution.summary,
  };
}

export default async function SolutionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = getSolution(slug);
  if (!solution) notFound();

  return (
    <PageShell>
      <>
      <Section className="pb-8 pt-14">
        <p className="eyebrow">Solution</p>
        <h1 className="display mt-3 max-w-3xl text-4xl text-text md:text-6xl">{solution.name}</h1>
        <p className="lede mt-4">{solution.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Button href="/book-demo">Book a Demo</Button>
          <Button href="/contact" variant="outline">
            Talk to sales
          </Button>
        </div>
      </Section>

      <Section className="pt-0">
        <VideoPlaceholder
          label={`${solution.shortName} intro video`}
          caption="Reusable template slot for solution intro film."
        />
      </Section>

      <Section>
        <SectionHeading eyebrow="Overview" title="What this solution delivers" />
        <p className="max-w-3xl text-lg leading-relaxed text-muted">{solution.overview}</p>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Capabilities" title="Feature highlights" />
        <div className="grid gap-4 md:grid-cols-2">
          {solution.features.map((feature, index) => (
            <FeatureCard key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Architecture"
          title="How the pieces fit"
          lede="High-level architecture diagram placeholder — replace with final diagram assets."
        />
        <ol className="grid gap-3 md:grid-cols-4">
          {solution.architecture.map((step, index) => (
            <li key={step} className="surface rounded-[20px] p-5">
              <p className="font-display text-sm text-blue">{String(index + 1).padStart(2, "0")}</p>
              <p className="mt-2 font-medium text-text">{step}</p>
            </li>
          ))}
        </ol>
      </Section>

      <Section className="bg-surface">
        <SectionHeading eyebrow="Product visuals" title="Screenshots" />
        <div className="grid gap-4 md:grid-cols-3">
          {solution.screenshotLabels.map((label) => (
            <div
              key={label}
              className="flex aspect-[4/3] items-end rounded-[20px] bg-gradient-to-br from-[#15233a] via-[#0d1626] to-[#1a3a55] p-5 text-white"
            >
              <p className="text-sm font-medium">{label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Adoption" title="Workflow" />
            <ol className="space-y-3">
              {solution.workflow.map((step, index) => (
                <li key={step} className="flex gap-3 text-muted">
                  <span className="font-display text-blue">{String(index + 1).padStart(2, "0")}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <SectionHeading eyebrow="Outcomes" title="Benefits" />
            <ul className="space-y-3">
              {solution.benefits.map((benefit) => (
                <li key={benefit} className="surface rounded-[20px] px-4 py-3 text-muted">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section>
        <p className="mb-4 text-sm text-muted">
          Explore other solutions:{" "}
          {solutions
            .filter((s) => s.slug !== solution.slug)
            .map((s, i, arr) => (
              <span key={s.slug}>
                <Link href={`/solutions/${s.slug}`} className="font-medium text-blue hover:underline">
                  {s.shortName}
                </Link>
                {i < arr.length - 1 ? " · " : ""}
              </span>
            ))}
        </p>
        <CtaBand
          title={`See ${solution.shortName} in action`}
          lede="Book a demo for a guided walkthrough tailored to your sites and operators."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref="/contact"
          secondaryLabel="Connect With Us"
        />
      </Section>
    </>
    </PageShell>
  );
}
