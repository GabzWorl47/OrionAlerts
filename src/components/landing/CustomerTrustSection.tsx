"use client";

import Link from "next/link";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const ratings = [
  { score: "—", label: "Ease of Use", note: "Placeholder rating" },
  { score: "—", label: "Quality of Support", note: "Placeholder rating" },
  { score: "—", label: "Ease of Setup", note: "Placeholder rating" },
];

export function CustomerTrustSection() {
  return (
    <section className="relative overflow-hidden bg-bg py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(124,58,237,0.08),transparent_50%)]" />
      <div className="container relative">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">Trust</p>
            <h2 className="display mt-3 text-[clamp(1.9rem,4vw,3.2rem)] uppercase text-steel-gradient">
              Built for enterprises that cannot afford blind spots
            </h2>
            <p className="mt-4 text-lg text-muted">
              From multi-site manufacturers to critical infrastructure operators — customer stories
              and logos will publish here as case studies land.
            </p>
            <Link
              href="/resources#case-studies"
              className="mt-6 inline-flex text-sm font-semibold text-cyan hover:text-text"
            >
              See all customer stories →
            </Link>
          </div>
        </Reveal>

        <Stagger className="mt-12 flex flex-wrap gap-4" delay={0.06}>
          {["Enterprise Logo", "Enterprise Logo", "Enterprise Logo", "Enterprise Logo"].map(
            (logo, i) => (
              <StaggerItem key={`${logo}-${i}`}>
                <div className="flex h-14 min-w-[120px] items-center justify-center rounded-[12px] border border-line bg-surface px-6 text-xs uppercase tracking-wider text-muted transition hover:border-blue/30">
                  {logo}
                </div>
              </StaggerItem>
            ),
          )}
        </Stagger>

        <Stagger className="mt-14 grid gap-6 sm:grid-cols-3" delay={0.1}>
          {ratings.map((item) => (
            <StaggerItem key={item.label}>
              <div className="panel p-6 text-center transition hover:border-blue/35">
                <p className="display text-5xl text-blue">{item.score}</p>
                <p className="mt-3 text-sm font-semibold text-text">{item.label}</p>
                <p className="mt-1 text-xs text-muted">{item.note}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
