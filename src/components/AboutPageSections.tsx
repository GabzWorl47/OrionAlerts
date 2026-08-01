"use client";

import Image from "next/image";
import { Button, CtaBand, FeatureCard, Section, SectionHeading } from "@/components/ui";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import {
  companyIntro,
  culture,
  principles,
  trustSignals,
  values,
} from "@/lib/about";
import { site } from "@/lib/site";
import { visuals } from "@/lib/visuals";

export function AboutHero() {
  return (
    <Section className="relative overflow-hidden pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(43,140,255,0.1),transparent_55%)]" />
      <div className="relative">
        <Reveal>
          <p className="eyebrow">{companyIntro.tagline}</p>
          <h1 className="display mt-3 max-w-4xl text-[clamp(2rem,4.5vw,3.5rem)] text-steel-gradient">
            {companyIntro.headline}
          </h1>
          <p className="mt-4 text-xl font-semibold text-text">{companyIntro.title}</p>
          <p className="lede mt-4 max-w-3xl">{companyIntro.description}</p>
        </Reveal>
      </div>
    </Section>
  );
}

export function AboutOverview() {
  return (
    <Section>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <Reveal>
          <SectionHeading eyebrow="Who we are" title="Built for estates that cannot afford blind spots" />
          <p className="text-lg leading-relaxed text-muted">
            Security and operations teams are drowning in disconnected systems: NVRs that do not talk,
            alerts without context, assets that vanish between shifts, and maintenance contracts that
            only surface after downtime. OrionAlerts makes the estate visible, actionable, and
            partner-ready.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            We work with enterprises and system integrators across manufacturing, logistics, pharma,
            utilities, and commercial infrastructure — anywhere reliable video intelligence and estate
            health matter.
          </p>
        </Reveal>

        <Reveal direction="right" delay={0.08}>
          <div className="relative overflow-hidden rounded-[20px] border border-line bg-[#0b1220] shadow-[0_24px_60px_-28px_rgba(15,23,42,0.45)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={visuals.platformDashboard}
                alt="OrionAlerts platform dashboard"
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

export function AboutEthos() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="Operating principles"
          title="Commitments behind every deployment"
          lede="The standards that guide how we build, deploy, and support every OrionAlerts estate."
          align="center"
        />
      </Reveal>

      <Stagger className="grid gap-4 md:grid-cols-2">
        {principles.map((item, index) => (
          <StaggerItem key={item.label}>
            <article className="h-full rounded-[20px] border border-line bg-surface p-6 md:p-8">
              <div className="flex items-start gap-4">
                <span className="display text-4xl text-blue/30">{item.number}</span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan">
                    {item.label}
                  </p>
                  <h3 className="display mt-2 text-xl text-text">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export function AboutEssence() {
  return (
    <Section className="bg-surface">
      <Reveal>
        <SectionHeading
          eyebrow="How we work"
          title="Focused, accountable, and forward-looking"
          align="center"
        />
      </Reveal>

      <Stagger className="grid gap-4 md:grid-cols-3">
        {culture.map((item, index) => (
          <StaggerItem key={item.title}>
            <FeatureCard title={item.title} description={item.description} index={index} />
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export function AboutVirtues() {
  return (
    <Section>
      <Reveal>
        <SectionHeading
          eyebrow="What we stand for"
          title="Values we put into practice"
          lede="The standards that shape how we work with customers, partners, and each other."
          align="center"
        />
      </Reveal>

      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((item) => (
          <StaggerItem key={item.title}>
            <article className="h-full rounded-[20px] border border-line bg-surface p-6 text-center transition duration-300 hover:-translate-y-1 hover:border-blue/30">
              <h3 className="display text-xl uppercase text-text">{item.title}</h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-blue">
                {item.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
            </article>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

export function AboutTrust() {
  return (
    <Section className="bg-surface">
      <Reveal>
        <SectionHeading
          eyebrow="Trust & security"
          title="Enterprise-grade by design"
          lede="Security, reliability, and partner readiness are woven into the product — not bolted on."
        />
      </Reveal>

      <Stagger className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {trustSignals.map((item) => (
          <StaggerItem key={item}>
            <div className="rounded-[20px] border border-line bg-bg px-5 py-4 text-sm font-medium text-text">
              {item}
            </div>
          </StaggerItem>
        ))}
      </Stagger>
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
            <p className="font-semibold text-text">Need us directly?</p>
            <p className="mt-1 text-sm text-muted">
              {site.email} · {site.phone}
            </p>
          </div>
          <Button href="/contact" variant="outline" className={ctaButtonClass}>
            Connect With Us
          </Button>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <CtaBand
          title="Let's build the operating picture together"
          lede="Demo for buyers. Connect for partnerships, support, and team introductions."
          primaryHref="/book-demo"
          primaryLabel="Book a Demo"
          className="!p-6"
          primaryClassName={ctaButtonClass}
        />
      </Reveal>
    </Section>
  );
}
