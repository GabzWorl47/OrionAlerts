import Link from "next/link";
import type { Metadata } from "next";
import { CtaBand, Section, SectionHeading } from "@/components/ui";
import { PageShell } from "@/components/PageShell";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore OrionAlerts VMS, AI Vision, Smart Search, Asset Tracking, AMC Management, and Health Monitoring.",
};

export default function SolutionsIndexPage() {
  return (
    <PageShell>
      <>
        <Section className="pt-14">
          <SectionHeading
            align="center"
            eyebrow="Platform"
            title="Solutions built to work as a system"
            lede="One connected platform across video, AI vision, Smart Search, assets, maintenance, and health."
          />
          <div className="grid gap-4 md:grid-cols-2">
            {solutions.map((solution, index) => (
              <Link
                key={solution.slug}
                href={`/solutions/${solution.slug}`}
                className="surface group rounded-[20px] p-7 transition hover:-translate-y-0.5 hover:border-blue/35"
              >
                <p className="font-display text-sm text-blue">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h2 className="display mt-2 text-3xl normal-case text-steel-gradient">
                  {solution.name}
                </h2>
                <p className="mt-3 text-muted">{solution.summary}</p>
                <span className="mt-5 inline-block text-sm font-semibold">View solution →</span>
              </Link>
            ))}
          </div>
        </Section>
        <Section>
          <CtaBand
            title="Not sure where to start?"
            lede="Book a demo and we’ll map your sites, camera estate, and operating model to the right solution mix."
            primaryHref="/book-demo"
            primaryLabel="Book a Demo"
            secondaryHref="/industries"
            secondaryLabel="Browse industries"
          />
        </Section>
      </>
    </PageShell>
  );
}
