"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { industries } from "@/lib/site";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";

export function IndustryGrid() {
  return (
    <section className="relative overflow-hidden bg-bg py-20 md:py-28">
      <div className="container relative">
        <Reveal>
          <h2 className="display max-w-xl text-[clamp(1.85rem,4vw,3rem)] normal-case tracking-[-0.03em] text-text">
            Modern protection for any space.
          </h2>
        </Reveal>

        <Stagger className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" delay={0.05}>
          {industries.map((industry, industryIndex) => {
            const label = industry.cardLabel ?? industry.name;

            return (
              <StaggerItem key={industry.slug}>
                <div className="group flex h-full flex-col">
                  <Link
                    href={`/industries/${industry.slug}`}
                    className="relative block aspect-[3/4] overflow-hidden rounded-[18px] bg-surface-2"
                  >
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      priority={industryIndex < 3}
                      sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 30vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                    <span className="absolute bottom-5 left-5 font-display text-[1.35rem] font-semibold leading-tight text-white md:text-[1.5rem]">
                      {label}
                    </span>
                  </Link>

                  <Link
                    href={`/industries/${industry.slug}`}
                    className="mt-4 inline-flex w-full items-center justify-between rounded-full border border-text/20 bg-white px-5 py-3.5 text-sm font-medium text-text transition duration-300 hover:border-text/40 hover:bg-surface-2 group-hover:border-text/35"
                  >
                    Learn more
                    <ChevronRight
                      size={16}
                      strokeWidth={2.25}
                      className="transition group-hover:translate-x-0.5"
                    />
                  </Link>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
