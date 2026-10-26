import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CtaBand, Section, SectionHeading } from "@/components/ui";
import { QaList } from "@/components/landing/QaList";
import { breadcrumbJsonLd, faqPageJsonLd, JsonLdScript } from "@/lib/jsonld";
import { buildPageMetadata } from "@/lib/seo";
import { site, solutions } from "@/lib/site";

export const metadata: Metadata = buildPageMetadata({
  title: "Pricing for AI Video Analytics & VMS",
  description:
    "How OrionAlerts pricing works: quotes are based on camera count, number of sites, modules and support scope. Share your setup for a tailored estimate.",
  pathname: "/pricing",
});

/** What drives a quote. Factors only — no prices or licensing terms are published. */
const quoteFactors = [
  {
    title: "Cameras and channels",
    description: "How many camera streams the platform records, monitors and manages.",
  },
  {
    title: "Number of sites",
    description: "A single facility, or many branches, plants or warehouses under one view.",
  },
  {
    title: "Modules",
    description:
      "Which of the five modules you need: VMS, AI video analytics, camera health monitoring, asset tracking and AMC management.",
  },
  {
    title: "AI-enabled channels",
    description:
      "How many cameras run AI detections, and which detections — this drives node sizing.",
  },
  {
    title: "Hardware approach",
    description:
      "Running Nebula OS on your own server or on an appliance, sized to channel count and the detections in use.",
  },
  {
    title: "Deployment",
    description:
      "An on-site node only, or on-site nodes plus Orion Cloud for a central view across sites.",
  },
  {
    title: "Support scope",
    description: "The level of onboarding, maintenance and ongoing support you need.",
  },
];

const sendUsChecklist = [
  "Approximate number of cameras, and the camera or recorder brands you use",
  "Number of sites and where they are",
  "The modules you are interested in",
  "Which cameras should run AI detections, and what you want to detect",
  "Existing servers or recorders you want to reuse, if any",
  "Whether you need a central view across sites (Orion Cloud) or on-site only",
  "The support you expect after go-live",
];

const pricingFaqs = [
  {
    question: "How much does OrionAlerts cost?",
    answer:
      "OrionAlerts does not publish a public price list; each deployment is quoted individually. The quote depends on your camera and site count, the modules you choose (VMS, AI video analytics, health monitoring, asset tracking, AMC management), how many channels run AI detections, your hardware and deployment approach, and the support scope you need.",
  },
  {
    question: "What should I send for a quote?",
    answer: `Send your approximate camera and site count, the camera or recorder brands you use, the modules you need, which cameras should run AI detections and for what, whether you want an on-site node only or Orion Cloud as well, and the support you expect. Email ${site.email} or use the contact form.`,
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <JsonLdScript
        data={breadcrumbJsonLd([
          { name: "Home", path: "/" },
          { name: "Pricing", path: "/pricing" },
        ])}
      />
      <JsonLdScript data={faqPageJsonLd(pricingFaqs)} />

      <Section narrow className="pt-14">
        <p className="eyebrow">Pricing</p>
        <h1 className="display mt-3 text-4xl text-text md:text-5xl">Pricing</h1>
        <p className="lede mt-4">
          OrionAlerts is quoted per deployment. Your price depends on how many cameras and sites you
          have, which modules you need, and the support scope you choose. We do not publish a public
          price list.
        </p>
        <div className="mt-6 space-y-3 text-[1.0625rem] leading-[1.72] text-muted">
          <p>
            Every module runs on{" "}
            <Link href="/nebula-os" className="font-semibold text-blue hover:underline">
              Nebula OS
            </Link>
            , so you can start with one and add others later on the same platform:{" "}
            {solutions.map((solution, index) => (
              <span key={solution.slug}>
                <Link
                  href={`/solutions/${solution.slug}`}
                  className="font-semibold text-blue hover:underline"
                >
                  {solution.name}
                </Link>
                {index < solutions.length - 2 ? ", " : index === solutions.length - 2 ? " and " : "."}
              </span>
            ))}
          </p>
        </div>
      </Section>

      <Section narrow className="bg-surface">
        <SectionHeading
          eyebrow="Quote factors"
          title="What affects your quote"
          lede="These are the inputs we use to scope and price an OrionAlerts deployment."
          compact
        />
        <dl className="grid gap-3 sm:grid-cols-2">
          {quoteFactors.map((factor) => (
            <div key={factor.title} className="rounded-[18px] border border-line bg-white p-5">
              <dt className="font-semibold text-text">{factor.title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-muted-strong">
                {factor.description}
              </dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section narrow>
        <SectionHeading
          eyebrow="Checklist"
          title="What to send us"
          lede="Share as much of this as you have. Rough numbers are fine for a first estimate."
          compact
        />
        <ul className="space-y-3">
          {sendUsChecklist.map((item) => (
            <li key={item} className="flex items-start gap-3 text-[1.0625rem] leading-relaxed text-text">
              <Check size={18} className="mt-1 shrink-0 text-cyan" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-[1.0625rem] leading-[1.72] text-muted">
          Email{" "}
          <a href={`mailto:${site.email}`} className="font-semibold text-blue hover:underline">
            {site.email}
          </a>
          , use the{" "}
          <Link href="/contact?topic=sales" className="font-semibold text-blue hover:underline">
            contact form
          </Link>
          , or{" "}
          <Link href="/book-demo" className="font-semibold text-blue hover:underline">
            book a demo
          </Link>{" "}
          to walk through your setup with our team.
        </p>
      </Section>

      <Section narrow className="bg-surface">
        <SectionHeading eyebrow="FAQ" title="Pricing questions" compact />
        <QaList items={pricingFaqs} />
      </Section>

      <Section>
        <CtaBand
          title="Get a quote for your sites"
          lede="Tell us about your cameras, sites and the modules you need, and we will scope an OrionAlerts deployment for you."
          primaryHref="/contact?topic=sales"
          primaryLabel="Request a Quote"
          secondaryHref="/book-demo"
          secondaryLabel="Book a Demo"
        />
      </Section>
    </PageShell>
  );
}
