"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { industries } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function IndustryGrid() {
  return (
    <section id="industries" className="relative overflow-hidden bg-surface py-20 md:py-24">
      <div className="absolute inset-0 grid-texture opacity-30" />
      <div className="container relative">
        <Reveal>
          <p className="eyebrow">Industries</p>
          <h2 className="display mt-3 text-[clamp(1.9rem,4vw,3.2rem)] uppercase text-steel-gradient">
            Modern protection for any space
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" delay={0.07}>
          {industries.map((industry) => (
            <StaggerItem key={industry.slug}>
              <Link
                href={`/industries/${industry.slug}`}
                className="group panel flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-blue/35 hover:shadow-[0_0_30px_rgba(124,58,237,0.08)]"
              >
                <div className="command-panel aspect-[16/10]">
                  <div className="flex h-full items-end p-5">
                    <span className="text-xs uppercase tracking-[0.14em] text-white/50">
                      Industry visual placeholder
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-xl text-text">{industry.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{industry.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue group-hover:gap-2 group-hover:text-cyan">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
