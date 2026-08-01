"use client";

import Image from "next/image";
import { Button, CtaBand, Section, SectionHeading } from "@/components/ui";
import { Reveal } from "@/components/Reveal";
import {
  companyIntro,
  finalCta,
  whoWeAre,
  whyWeExist,
} from "@/lib/about";
import { site } from "@/lib/site";
import { visuals } from "@/lib/visuals";

export function AboutHero() {
  return (
    <Section className="relative overflow-hidden pt-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_0%,rgba(43,140,255,0.1),transparent_55%)]" />
      <div className="relative">
        <Reveal>
          <p className="eyebrow">About {site.name}</p>
          <h1 className="display mt-3 max-w-4xl text-[clamp(2rem,4.5vw,3.5rem)] text-steel-gradient">
            {companyIntro.headline}
          </h1>
          <p className="lede mt-5 max-w-3xl">{companyIntro.subheading}</p>
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
          <SectionHeading eyebrow="Who we are" title="Enterprise AI video intelligence" />
          {whoWeAre.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-muted first:mt-0">
              {paragraph}
            </p>
          ))}
        </Reveal>

        <Reveal direction="right" delay={0.08}>
          <div className="relative overflow-hidden rounded-[20px] border border-line bg-[#0b1220] shadow-[0_24px_60px_-28px_rgba(15,23,42,0.45)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={visuals.platformDashboard}
                alt="Orion Alerts platform dashboard"
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
            <p className="font-semibold text-text">Need us directly?</p>
            <p className="mt-1 text-sm text-muted">
              {site.email} · {site.phone}
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
