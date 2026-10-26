"use client";

import Image from "next/image";
import type React from "react";
import Link from "next/link";
import { Button, CtaBand, Section, SectionHeading } from "@/components/ui";
import { QaList, type QaItem } from "@/components/landing/QaList";
import { Reveal } from "@/components/Reveal";
import {
  companyIntro,
  finalCta,
  whoWeAre,
  whyWeExist,
} from "@/lib/about";
import { legalMeta } from "@/lib/legal";
import { industries, site, solutions } from "@/lib/site";
import { visuals } from "@/lib/visuals";

export function AboutHero() {
  return (
    <Section className="relative overflow-hidden pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(43,140,255,0.1),transparent_55%)]" />
      <div className="relative">
        <Reveal>
          <h1 className="display max-w-4xl text-[clamp(2rem,4.5vw,3.5rem)] text-steel-gradient">
            {companyIntro.title}
          </h1>
          <p className="mt-3 max-w-3xl text-[clamp(1.15rem,2vw,1.5rem)] font-semibold leading-snug tracking-[-0.02em] text-text">
            {companyIntro.headline}
          </p>
          <p className="lede mt-4 max-w-3xl">{companyIntro.subheading}</p>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-muted">
            {companyIntro.valueLine}
          </p>
        </Reveal>
      </div>
    </Section>
  );
}

export function AboutWhoWeAre() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <SectionHeading eyebrow="Who we are" title="Five modules on one operating system" />
          {whoWeAre.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-muted first:mt-0">
              {paragraph}
            </p>
          ))}
          <p className="mt-4 text-lg leading-relaxed text-muted">
            {whoWeAre.modulesLead} <ModuleLinks /> — on{" "}
            <Link href="/nebula-os" className="font-semibold text-blue hover:underline">
              Nebula OS
            </Link>
            , our Linux-based operating system.
          </p>
        </Reveal>

        <Reveal direction="right" delay={0.08}>
          <div className="relative overflow-hidden rounded-[20px] border border-line bg-[#0b1220] shadow-[0_24px_60px_-28px_rgba(15,23,42,0.45)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={visuals.platformDashboard}
                alt="Illustration of the OrionAlerts console with live camera walls, an alert inbox, an asset map and an AMC desk"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-left-top"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-[#0b1220]/35 via-transparent to-transparent" />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

export function AboutWhyWeExist() {
  return (
    <Section className="bg-surface">
      <Reveal>
        <SectionHeading eyebrow="Why we exist" title={whyWeExist.title} />
        <div className="max-w-3xl space-y-4">
          {whyWeExist.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="text-lg leading-relaxed text-muted">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

export function AboutContactCta() {
  const ctaButtonClass = "w-[11.25rem] justify-center";

  return (
    <Section>
      <Reveal>
        <div className="mb-10 rounded-[20px] border border-line bg-surface p-6 md:flex md:items-center md:justify-between md:gap-6">
          <div>
            <p className="font-semibold text-text">Prefer email?</p>
            <p className="mt-1 text-sm text-muted">
              <a href={`mailto:${site.email}`} className="text-blue hover:underline">
                {site.email}
              </a>
              {site.phone ? ` · ${site.phone}` : null}
            </p>
          </div>
          <Button href="/contact" variant="outline" className={ctaButtonClass}>
            Contact Us
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <CtaBand
          title={finalCta.title}
          lede={finalCta.description}
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          className="!p-6"
          primaryClassName={ctaButtonClass}
        />
      </Reveal>
    </Section>
  );
}

/** Module names as used in running copy, keyed by solution slug. */
const MODULE_LABELS: Record<string, string> = {
  vms: "video management (VMS)",
  "ai-analytics": "AI video analytics",
  "health-monitoring": "camera health monitoring",
  "asset-tracking": "asset tracking",
  "amc-management": "AMC management",
};
const MODULE_ORDER = ["vms", "ai-analytics", "health-monitoring", "asset-tracking", "amc-management"];

function ModuleLinks() {
  return (
    <>
      {MODULE_ORDER.map((slug, index) => (
        <span key={slug}>
          <Link href={`/solutions/${slug}`} className="font-semibold text-blue hover:underline">
            {MODULE_LABELS[slug]}
          </Link>
          {index < MODULE_ORDER.length - 2 ? ", " : index === MODULE_ORDER.length - 2 ? " and " : ""}
        </span>
      ))}
    </>
  );
}

/**
 * Plain who/what/where facts. Only verified facts — founding year, customer,
 * camera and site counts, leadership and certifications are added once the
 * team supplies them.
 */
export function AboutFacts() {
  const linkClass = "font-semibold text-blue hover:underline";
  const facts: { label: string; value: React.ReactNode }[] = [
    { label: "Legal entity", value: legalMeta.controllerLegalName },
    { label: "Headquarters", value: site.address },
    {
      label: "Product",
      value: (
        <>
          OrionAlerts, running on{" "}
          <Link href="/nebula-os" className={linkClass}>
            Nebula OS
          </Link>
          , a Linux-based operating system
        </>
      ),
    },
    {
      label: "Modules",
      value: (
        <>
          {solutions.length} modules: <ModuleLinks />
        </>
      ),
    },
    {
      label: "Industries served",
      value: (
        <>
          <Link href="/industries" className={linkClass}>
            {industries.length} industries
          </Link>
          , including manufacturing, logistics, banking, retail, healthcare and government
        </>
      ),
    },
    { label: "Camera compatibility", value: "ONVIF, RTSP and vendor SDKs" },
    {
      label: "Contact",
      value: (
        <>
          <a href={`mailto:${site.email}`} className={linkClass}>
            {site.email}
          </a>{" "}
          ·{" "}
          <Link href="/contact" className={linkClass}>
            Contact form
          </Link>
        </>
      ),
    },
  ];

  return (
    <Section id="facts">
      <Reveal>
        <SectionHeading eyebrow="Company facts" title="OrionAlerts at a glance" />
        <dl className="grid overflow-hidden rounded-[20px] border border-line bg-white md:grid-cols-2">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="border-b border-line px-5 py-4 last:border-b-0 md:px-6 md:[&:nth-last-child(2):nth-child(odd)]:border-b-0"
            >
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-caption">
                {fact.label}
              </dt>
              <dd className="mt-1.5 text-[15px] leading-relaxed text-text">{fact.value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-5 text-sm leading-relaxed text-muted">
          More detail:{" "}
          <Link href="/company" className={linkClass}>
            company fact sheet
          </Link>
          {" · "}
          <Link href="/security" className={linkClass}>
            security
          </Link>
          {" · "}
          <Link href="/partners" className={linkClass}>
            partner program
          </Link>
          {" · "}
          <Link href="/careers" className={linkClass}>
            careers
          </Link>
        </p>
      </Reveal>
    </Section>
  );
}

export function AboutFaq({ items }: { items: readonly QaItem[] }) {
  return (
    <Section className="bg-surface">
      <SectionHeading eyebrow="FAQ" title="Questions about OrionAlerts" />
      <QaList items={items} />
    </Section>
  );
}
