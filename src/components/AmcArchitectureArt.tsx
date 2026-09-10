"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";

export function AmcArchitectureArt() {
  return (
    <section
      id="amc-architecture"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#e8f6ff_0%,#f0fbff_55%,#eaf4ff_100%)] py-10 md:py-14"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(126,200,255,0.28),transparent_55%)]"
        aria-hidden
      />

      <div className="container relative">
        <Reveal>
          <div className="mx-auto max-w-5xl">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-[clamp(1.6rem,3.2vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-text">
                AMC Management Architecture
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-sm leading-relaxed text-muted-strong md:text-[15px]">
                How assets, contracts, service workflows, and renewals connect in one
                operational system.
              </p>
            </div>

            <Image
              src="/Images/ChatGPT%20Image%20Sep%208%2C%202026%2C%2006_48_54%20PM.png"
              alt="AMC Management System Architecture"
              width={1600}
              height={900}
              className="mx-auto mt-3 h-auto w-full object-contain md:mt-4"
              sizes="(max-width: 1024px) 100vw, 64rem"
              priority={false}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
