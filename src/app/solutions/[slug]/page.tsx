import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CtaBand,
  Section,
  SectionHeading,
} from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { SolutionFeatureHighlights } from "@/components/SolutionFeatureHighlights";
import { SolutionFeatureMediaRows } from "@/components/SolutionFeatureMediaRows";
import { SolutionHero } from "@/components/SolutionHero";
import { SolutionIntroSplit } from "@/components/SolutionIntroSplit";
import { SolutionVideoSection } from "@/components/SolutionVideoSection";
import { WorkflowArchitectureStepper } from "@/components/WorkflowArchitectureStepper";
import { LogoMarquee } from "@/components/landing/LogoMarquee";
import { TestimonialsSection } from "@/components/landing/TestimonialsSection";
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
        <SolutionHero solution={solution} />

        <LogoMarquee compact />

        {solution.slug === "asset-tracking" ? (
          <>
            <SolutionIntroSplit solution={solution} />
            <SolutionFeatureMediaRows solution={solution} />

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
          </>
        ) : (
          <>
            <Section
              compact
              className="bg-[linear-gradient(180deg,#e8f6ff_0%,#f0fbff_55%,#eaf4ff_100%)]"
            >
              <SectionHeading compact eyebrow="Overview" title="What this solution delivers" />
              <p className="max-w-3xl text-base leading-relaxed text-muted md:text-lg">
                {solution.overview}
              </p>
            </Section>

            <SolutionVideoSection
              label={`${solution.shortName} intro video`}
              src={solution.introVideo}
              poster={solution.introVideoPoster ?? solution.image}
              cinematicEntrance={
                solution.slug === "vms" ||
                solution.slug === "ai-analytics" ||
                solution.slug === "amc-management" ||
                solution.slug === "health-monitoring"
              }
              outcomes={
                solution.slug === "vms"
                  ? [
                      {
                        title: "Faster incident awareness across locations",
                        description: "Live multi-cam view so operators spot issues sooner",
                        preview: "livewall",
                        videoSrc: "/Videos/outcomes/incident-awareness.mp4",
                      },
                      {
                        title: "Lower operational complexity vs fragmented NVRs",
                        description: "AI-prioritized alert with live video context",
                        preview: "alert",
                        videoSrc: "/Videos/outcomes/ops-dashboard.mp4",
                      },
                      {
                        title: "Audit-ready access and export trails",
                        description: "Searchable evidence clips ready for review",
                        preview: "search",
                        videoSrc: "/Videos/outcomes/audit-trails.mp4",
                      },
                      {
                        title: "Foundation for AI analytics overlays",
                        description: "Multi-site live feeds in one operator workflow",
                        preview: "multisite",
                        videoSrc: "/Videos/outcomes/ai-analytics.mp4",
                      },
                    ]
                  : solution.slug === "ai-analytics"
                    ? [
                        {
                          title: "Higher signal-to-noise for security teams",
                          description: "Prioritized AI alerts instead of raw camera noise",
                          preview: "alert",
                        },
                        {
                          title: "24/7 coverage without proportional staffing",
                          description: "Continuous detection across cameras and sites",
                          preview: "livewall",
                        },
                        {
                          title: "Faster investigation with searchable events",
                          description: "Jump to the clip and context behind every alert",
                          preview: "search",
                        },
                        {
                          title: "Consistent policy enforcement multi-site",
                          description: "Same PPE, intrusion, and safety rules everywhere",
                          preview: "multisite",
                        },
                      ]
                    : solution.slug === "amc-management"
                      ? [
                          {
                            title: "Fewer prolonged camera outages",
                            description: "Catch renewals and tickets before downtime spreads",
                            preview: "alert",
                          },
                          {
                            title: "Clear partner accountability",
                            description:
                              "Track vendors, SLAs, and technician visits in one place",
                            preview: "multisite",
                          },
                          {
                            title: "Predictable maintenance spend",
                            description:
                              "Plan preventive work and renewals with less surprise cost",
                            preview: "livewall",
                          },
                          {
                            title: "Executive-ready estate health view",
                            description: "See contract and uptime status across every site",
                            preview: "search",
                          },
                        ]
                      : solution.benefits.slice(0, 4)
              }
              gap="1.5rem"
              workflowSteps={
                solution.slug === "vms"
                  ? [
                      {
                        title: "Live wall",
                        description: "Watch every site from one command view",
                        preview: "livewall",
                        videoSrc: "/Videos/workflow/live-wall.mp4",
                      },
                      {
                        title: "AI alert",
                        description: "Critical exceptions surface instantly",
                        preview: "alert",
                        videoSrc: "/Videos/workflow/ai-alert.mp4",
                      },
                      {
                        title: "Evidence search",
                        description: "Pull evidence without scrubbing footage",
                        preview: "search",
                        videoSrc: "/Videos/video/Smart%20search.mp4",
                      },
                      {
                        title: "Multi-site ops",
                        description: "Keep plants and campuses in sync",
                        preview: "multisite",
                        videoSrc: "/Videos/workflow/multi-site.mp4",
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
              caption={
                solution.introVideo
                  ? undefined
                  : "Reusable template slot for solution intro film."
              }
            />

            <Section>
              <SectionHeading eyebrow="Capabilities" title="Feature highlights" />
              <SolutionFeatureHighlights features={solution.features} />
            </Section>

            <Section className="bg-[linear-gradient(180deg,#e8f6ff_0%,#f0fbff_55%,#eaf4ff_100%)]">
              <SectionHeading eyebrow="Architecture" title="How the pieces fit" />
              <ol
                className={`grid gap-3 sm:grid-cols-2 ${
                  solution.architecture.length > 4 ? "lg:grid-cols-3" : "md:grid-cols-4"
                }`}
              >
                {solution.architecture.map((step, index) => (
                  <li key={step} className="surface rounded-[20px] p-5">
                    <p className="font-display text-sm text-blue">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <p className="mt-2 font-medium text-text">{step}</p>
                  </li>
                ))}
              </ol>
            </Section>

            <Section>
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <SectionHeading eyebrow="Process" title="Workflow Architecture" />
                  <WorkflowArchitectureStepper steps={solution.workflow} />
                </div>
                <div>
                  <SectionHeading eyebrow="Outcomes" title="Benefits" />
                  <ul className="space-y-3">
                    {solution.benefits.map((benefit) => (
                      <li
                        key={benefit}
                        className="surface rounded-[20px] px-4 py-3 text-muted"
                      >
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>
          </>
        )}

        <TestimonialsSection compact />

        <Section compact>
          <p className="mb-3 text-sm text-muted">
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
