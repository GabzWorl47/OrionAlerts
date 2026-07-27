"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { solutions } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function ProductExplore() {
  return (
    <section id="solutions" className="relative overflow-hidden bg-bg py-20 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(124,58,237,0.08),transparent_45%)]" />
      <div className="container relative">
        <Reveal>
          <p className="eyebrow">Solutions</p>
          <h2 className="display mt-3 text-[clamp(1.9rem,4vw,3.2rem)] uppercase text-steel-gradient">
            Explore our solutions
          </h2>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" delay={0.07}>
          {solutions.map((solution) => (
            <StaggerItem key={solution.slug}>
              <Link
                href={`/solutions/${solution.slug}`}
                className="group panel flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1 hover:border-blue/40"
              >
                <div className="command-panel aspect-square p-5">
                  <span className="text-xs uppercase tracking-[0.14em] text-cyan">
                    {solution.shortName}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="font-display text-lg text-text">{solution.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted">{solution.summary}</p>
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
