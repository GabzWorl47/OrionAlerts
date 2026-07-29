"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

const featured = {
  title: "How operators cut alert noise without losing coverage",
  category: "Industry Insights",
  href: "/blogs",
};

const items = [
  { title: "Blogs", blurb: "Insights and deployment lessons.", href: "/blogs" },
  { title: "FAQs", blurb: "Answers on demos, deployments, and support.", href: "/faqs" },
  { title: "Partner Program", blurb: "Enablement for system integrators.", href: "/partners" },
];

export function ResourcesPreview() {
  return (
    <section id="resources" className="bg-white py-20 md:py-28">
      <div className="container">
        <Reveal>
          <h2 className="display max-w-3xl text-[clamp(1.8rem,4vw,3rem)] text-text">
            Intelligence,
            <br />
            Beyond the Platform.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.35fr_0.9fr]">
          <Reveal direction="left">
            <Link
              href={featured.href}
              className="group panel block overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(26,115,232,0.12)]"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-blue via-[#1a5fb4] to-cyan p-6">
                <p className="text-[11px] uppercase tracking-[0.16em] text-white/80">
                  {featured.category}
                </p>
                <p className="mt-auto pt-24 font-display text-3xl text-white md:text-4xl">
                  {featured.title}
                </p>
              </div>
              <div className="flex items-center justify-between p-5 text-sm font-semibold text-blue">
                Read insight
                <ArrowUpRight
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  size={16}
                />
              </div>
            </Link>
          </Reveal>

          <Stagger className="flex flex-col gap-4" delay={0.1}>
            {items.map((item) => (
              <StaggerItem key={item.title}>
                <Link
                  href={item.href}
                  className="group flex h-full items-end justify-between rounded-[20px] border border-line bg-surface p-5 transition hover:border-blue/30 hover:bg-white"
                >
                  <div>
                    <h3 className="font-display text-xl text-text">{item.title}</h3>
                    <p className="mt-1 text-sm text-muted">{item.blurb}</p>
                  </div>
                  <ArrowUpRight size={16} className="mb-1 text-muted group-hover:text-blue" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
