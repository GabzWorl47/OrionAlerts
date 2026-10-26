"use client";

import { m } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";

export function FinalCta() {
  return (
    <section
      id="final-cta"
      aria-labelledby="final-cta-heading"
      className="relative overflow-hidden bg-blue py-10 md:py-14"
    >
      <div className="container relative text-center">
        <m.h2
          id="final-cta-heading"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-balance text-[clamp(2rem,5vw,3.6rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white"
        >
          See OrionAlerts in action
        </m.h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
          We&apos;ll show live AI alerts, camera health and AMC tracking for a site like yours.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="/book-demo">Book a Demo</MagneticButton>
          <MagneticButton
            href="/contact"
            variant="outline"
            className="!border-white/30 !bg-transparent !text-white hover:!border-cyan hover:!text-cyan"
          >
            Talk to an Expert
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
