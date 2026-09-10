import Link from "next/link";
import { notFound } from "next/navigation";
import {
  Section,
  SectionHeading,
} from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { SolutionFeatureMediaRows } from "@/components/SolutionFeatureMediaRows";
import { SolutionHero } from "@/components/SolutionHero";
import { SolutionOverviewArt } from "@/components/SolutionOverviewArt";
import { SolutionVideoSection } from "@/components/SolutionVideoSection";
import { WorkflowArchitectureStepper } from "@/components/WorkflowArchitectureStepper";
import { AmcArchitectureArt } from "@/components/AmcArchitectureArt";
import { FinalCta } from "@/components/landing/FinalCta";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
import { HashScroll } from "@/components/HashScroll";
import { getSolutionOutcomes } from "@/lib/solution-outcomes";
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
        <HashScroll />
        <SolutionHero solution={solution} />

        <LogoMarquee compact />

        <SolutionOverviewArt solution={solution} />

        <SolutionVideoSection
          label={`${solution.shortName} overview`}
          poster={solution.image}
          cinematicEntrance
          outcomes={getSolutionOutcomes(solution)}
          gap="1.5rem"
          workflowSteps={
            solution.slug === "vms"
              ? [
                  {
                    title: "Live wall",
                    description: "Watch every site from one command view",
                    preview: "livewall",
                  },
                  {
                    title: "AI alert",
                    description: "Critical exceptions surface instantly",
                    preview: "alert",
                  },
                  {
                    title: "Evidence search",
                    description: "Pull evidence without scrubbing footage",
                    preview: "search",
                  },
                  {
                    title: "Multi-site ops",
                    description: "Keep plants and campuses in sync",
                    preview: "multisite",
                  },
                ]
              : solution.slug === "ai-analytics"
                ? [
                    {
                      title: "Select cameras",
                      description: "Choose streams and detection zones",
                      preview: "livewall",
                    },
                    {
                      title: "Enable rules",
                      description: "Turn on packs, thresholds, and policies",
                      preview: "alert",
                    },
                    {
                      title: "Validate alerts",
                      description: "Pilot windows before full rollout",
                      preview: "search",
                    },
                    {
                      title: "Scale sites",
                      description: "Push the same rules across locations",
                      preview: "multisite",
                    },
                  ]
                : solution.slug === "amc-management"
                  ? [
                      {
                        title: "Import contracts",
                        description: "Bring in assets and active AMCs",
                        preview: "livewall",
                      },
                      {
                        title: "Set SLAs",
                        description: "Define SLA and preventive plans",
                        preview: "search",
                      },
                      {
                        title: "Dispatch tickets",
                        description: "Send work to partners and technicians",
                        preview: "alert",
                      },
                      {
                        title: "Review renewals",
                        description: "Track performance and upcoming renewals",
                        preview: "multisite",
                      },
                    ]
                  : undefined
          }
        />

        {solution.slug === "amc-management" ? <AmcArchitectureArt /> : null}

        {solution.slug === "ai-analytics" ||
        solution.slug === "vms" ||
        solution.slug === "health-monitoring" ? (
          <section className="relative w-full overflow-hidden px-3 sm:px-4 md:px-6">
            {/* eslint-disable-next-line @next/next/no-img-element -- diagram asset with spaces in filename */}
            <img
              src={
                solution.slug === "vms"
                  ? "/Images/ChatGPT%20Image%20Sep%208%2C%202026%2C%2003_19_19%20PM.png"
                  : solution.slug === "health-monitoring"
                    ? "/Images/ChatGPT%20Image%20Sep%208%2C%202026%2C%2004_00_26%20PM.png"
                    : "/Images/ChatGPT%20Image%20Sep%208%2C%202026%2C%2003_08_55%20PM.png"
              }
              alt={
                solution.slug === "vms"
                  ? "VMS System Architecture"
                  : solution.slug === "health-monitoring"
                    ? "Surveillance Health Monitoring System Architecture"
                    : "Vision AI System Architecture"
              }
              className="block h-auto w-full object-cover object-center"
            />
          </section>
        ) : null}

        <SolutionFeatureMediaRows solution={solution} />

        {solution.slug === "asset-tracking" ? (
          <Section
            compact
            className="bg-[linear-gradient(180deg,#e8f6ff_0%,#f0fbff_55%,#eaf4ff_100%)]"
          >
            <div className="grid gap-8 md:grid-cols-2 md:gap-10">
              <div>
                <SectionHeading
                  compact
                  eyebrow="Process"
                  title="How teams run Asset Tracking"
                />
                <WorkflowArchitectureStepper steps={solution.workflow} />
              </div>
              <div>
                <SectionHeading
                  compact
                  eyebrow="Outcomes"
                  title="What changes for operators"
                />
                <ul className="space-y-2.5">
                  {solution.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="surface rounded-[16px] px-4 py-2.5 text-sm text-muted"
                    >
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>
        ) : null}

        <TestimonialsSection compact />

        <Section compact>
          <p className="mb-0 text-center text-sm text-muted">
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
          secondaryLabel="Contact Us"
        />
      </Section>
        <FinalCta />
      </>
    </PageShell>
  );
}
