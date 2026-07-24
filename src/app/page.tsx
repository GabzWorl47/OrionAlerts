import Link from "next/link";
import {
  Button,
  CtaBand,
  FeatureCard,
  Section,
  SectionHeading,
  VideoPlaceholder,
} from "@/components/ui";
import { industries, site, solutions } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-var(--header-h))] overflow-hidden">
        <div className="absolute inset-0 grid-atmosphere opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-paper" />
        <div className="container relative grid min-h-[calc(100svh-var(--header-h))] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <p className="eyebrow animate-rise">OrionAlerts</p>
            <h1 className="display animate-rise-delay-1 mt-4 max-w-xl text-5xl text-ink md:text-6xl lg:text-7xl">
              See more.
              <br />
              Decide faster.
              <br />
              Operate safer.
            </h1>
            <p className="lede animate-rise-delay-2 mt-6">{site.tagline}</p>
            <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
              <Button href="/book-demo">Book a Demo</Button>
              <Button href="/contact" variant="secondary">
                Connect With Us
              </Button>
            </div>
          </div>
          <VideoPlaceholder
            className="animate-rise-delay-1 w-full shadow-[0_30px_80px_rgba(11,28,44,0.22)]"
            label="30-second brand film"
            caption="Placeholder for homepage brand video — edge-to-edge visual plane."
          />
        </div>
      </section>

      <Section className="pt-0">
        <SectionHeading
          eyebrow="Industry lens"
          title="Built for real operational pressure"
          lede="A short industry film sets context before we unpack the platform capabilities."
        />
        <VideoPlaceholder
          label="Industry operations film"
          caption="Replace with sector montage: manufacturing, logistics, campuses, critical infrastructure."
        />
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Solutions"
          title="Four connected capabilities"
          lede="One platform story across video, AI, assets, and maintenance — each with a consistent product narrative."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {solutions.map((solution, index) => (
            <Link
              key={solution.slug}
              href={`/solutions/${solution.slug}`}
              className="group surface block rounded-[var(--radius)] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-signal/35"
            >
              <p className="font-display text-sm text-signal">
                {String(index + 1).padStart(2, "0")} · {solution.shortName}
              </p>
              <h3 className="display mt-2 text-2xl text-ink group-hover:text-signal-deep">
                {solution.name}
              </h3>
              <p className="mt-2 text-sm text-muted">{solution.summary}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-ink">
                Explore solution →
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="bg-white/40">
        <SectionHeading
          eyebrow="Customer proof"
          title="Trust earned in the field"
          lede="Case narratives and logos will land here. For now, proof points frame the outcomes buyers care about."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              title: "Multi-site command",
              description: "Operators consolidate live walls and incident playbooks across facilities.",
            },
            {
              title: "Higher-signal alerts",
              description: "AI reduces noise so teams respond to prioritized events, not endless feeds.",
            },
            {
              title: "Estate uptime",
              description: "AMC workflows keep cameras and sensors healthy before outages cascade.",
            },
          ].map((item, index) => (
            <FeatureCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-8 overflow-hidden rounded-[var(--radius)] bg-ink text-white md:grid-cols-[1.1fr_0.9fr]">
          <div className="px-8 py-10 md:px-12 md:py-14">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-signal">Team</p>
            <h2 className="display mt-3 text-3xl md:text-4xl">People behind the platform</h2>
            <p className="mt-4 max-w-md text-white/70">
              Meet the operators, engineers, and partners who ship OrionAlerts. Photography and bios
              will replace this banner.
            </p>
            <div className="mt-6">
              <Button href="/about#team" variant="inverse">
                Meet the Team
              </Button>
            </div>
          </div>
          <div className="relative min-h-56 bg-gradient-to-br from-steel via-ink-soft to-signal-deep md:min-h-full">
            <div className="absolute inset-0 grid-atmosphere opacity-30" />
            <div className="absolute inset-0 flex items-end p-8">
              <p className="text-sm text-white/70">Team photography placeholder</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Industries"
          title="Where the platform proves itself"
          lede="Use-case pages show how solutions map to sector realities."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="surface rounded-[var(--radius)] p-5 transition hover:border-signal/30"
            >
              <h3 className="display text-xl text-ink">{industry.name}</h3>
              <p className="mt-2 text-sm text-muted">{industry.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section className="pb-20">
        <CtaBand
          title="Ready to see OrionAlerts live?"
          lede="Book a demo for a guided walkthrough, or connect with the team for partnership and support paths."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          secondaryHref="/contact"
          secondaryLabel="Connect With Us"
        />
      </Section>
    </>
  );
}
