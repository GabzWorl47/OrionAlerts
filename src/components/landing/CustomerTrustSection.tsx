"use client";

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const certificates = [
  "ISO 27001",
  "SOC 2 Type II",
  "GDPR Ready",
  "ONVIF Compliant",
  "CE Certified",
  "PCI DSS",
  "ISO 9001",
  "HIPAA Ready",
];

const customerSegments = [
  "Manufacturing",
  "Logistics & Warehousing",
  "Corporate Campuses",
  "Critical Infrastructure",
  "Pharma & Life Sciences",
  "Energy & Utilities",
  "Retail Operations",
  "Smart Cities",
];

const outcomeStats = [
  { score: "99.9%", label: "Platform uptime", note: "Enterprise SLA target" },
  { score: "<3s", label: "Alert-to-video", note: "Operator response time" },
  { score: "500+", label: "Cameras per site", note: "Multi-site scale" },
  { score: "24/7", label: "Ops support", note: "Partner & AMC coverage" },
];

const featuredQuote = {
  text: "We cut alert noise by 40% across twelve sites — operators finally trust the queue again.",
  role: "Head of Security",
  industry: "Manufacturing",
};

function MarqueeBadge({
  label,
  subdued = false,
}: {
  label: string;
  subdued?: boolean;
}) {
  return (
    <div
      className={`flex h-16 w-[200px] shrink-0 items-center justify-center rounded-[14px] border border-line px-5 text-center text-xs font-semibold uppercase tracking-wider shadow-sm transition hover:border-blue/30 ${
        subdued
          ? "bg-surface-2 text-muted hover:text-text"
          : "bg-surface text-muted hover:text-text"
      }`}
    >
      {label}
    </div>
  );
}

function TrustMarquee({
  items,
  slow = false,
  className = "",
}: {
  items: string[];
  slow?: boolean;
  className?: string;
}) {
  const loop = [...items, ...items];

  return (
    <div className={`certificate-marquee relative overflow-hidden ${className}`}>
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-bg to-transparent sm:w-24"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-bg to-transparent sm:w-24"
        aria-hidden
      />

      <div
        className={`certificate-marquee-track gap-4 px-2 ${slow ? "certificate-marquee-track--slow" : ""}`}
      >
        {loop.map((item, i) => (
          <MarqueeBadge key={`${item}-${i}`} label={item} subdued={slow} />
        ))}
      </div>
    </div>
  );
}

export function CustomerTrustSection() {
  return (
    <section className="relative overflow-hidden bg-bg py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(43,140,255,0.08),transparent_50%)]" />
      <div className="container relative">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Trust</p>
            <h2 className="display mt-3 text-[clamp(1.9rem,4vw,3.2rem)] uppercase text-steel-gradient">
              Built for enterprises that cannot afford blind spots
            </h2>
            <p className="description mt-4 text-lg">
              Enterprise-grade compliance and security built in — with customer stories publishing
              as multi-site deployments go live.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <MagneticButton href="/book-demo" className="px-4 py-2.5">
                Request a customer briefing
              </MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm font-semibold text-cyan transition hover:gap-2 hover:text-blue"
              >
                Explore compliance & security
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <TrustMarquee items={certificates} className="mt-12" />
        </Reveal>

        <Reveal delay={0.1}>
          <TrustMarquee items={customerSegments} slow className="mt-4" />
        </Reveal>

        <Reveal delay={0.14}>
          <blockquote className="panel relative mt-10 overflow-hidden p-8 md:p-10">
            <div className="absolute right-6 top-6 text-cyan/20" aria-hidden>
              <Quote size={48} strokeWidth={1.25} />
            </div>
            <p className="relative max-w-3xl font-display text-xl leading-snug text-text md:text-2xl">
              &ldquo;{featuredQuote.text}&rdquo;
            </p>
            <footer className="relative mt-6 flex flex-wrap items-center gap-2 text-sm text-muted">
              <span className="font-semibold text-text">{featuredQuote.role}</span>
              <span aria-hidden>·</span>
              <span>{featuredQuote.industry}</span>
              <span className="rounded-full border border-line bg-surface-2 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted">
                Customer voice · anonymized
              </span>
            </footer>
          </blockquote>
        </Reveal>

        <Stagger className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.08}>
          {outcomeStats.map((item) => (
            <StaggerItem key={item.label}>
              <div className="panel h-full p-6 text-center transition hover:border-blue/35">
                <p className="display text-4xl text-blue md:text-5xl">{item.score}</p>
                <p className="mt-3 text-sm font-semibold text-text">{item.label}</p>
                <p className="mt-1 caption">{item.note}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
