import Link from "next/link";
import type { Metadata } from "next";
import { CtaBand, Section, SectionHeading } from "@/components/ui";
import { solutions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Explore OrionAlerts VMS, AI Analytics, Asset Tracking, and AMC Management — one connected enterprise platform.",
};

export default function SolutionsIndexPage() {
  return (
    <>
      <Section className="pt-14">
        <SectionHeading
          eyebrow="Platform"
          title="Solutions built to work as a system"
          lede="Four product areas, one reusable narrative: video, intelligence, assets, and maintenance."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="surface group rounded-[var(--radius)] p-7 transition hover:-translate-y-0.5 hover:border-signal/35"
            >
              <p className="font-display text-sm text-signal">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h2 className="display mt-2 text-3xl text-ink group-hover:text-signal-deep">
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
  );
}
