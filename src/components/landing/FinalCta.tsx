"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 grid-texture opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_70%,rgba(43,140,255,0.28),transparent_45%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_100%,rgba(48,227,255,0.12),transparent_40%)]" />

      <div className="container relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display mx-auto max-w-4xl text-[clamp(2.3rem,5.5vw,5rem)] uppercase text-blue-gradient"
        >
          See What Your
          <br />
          Operations Are Missing.
        </motion.h2>
        <p className="mx-auto mt-5 max-w-xl text-muted">
          Turn every camera, event, and alert into a confident decision.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <MagneticButton href="/book-demo">Book Your Demo</MagneticButton>
          <MagneticButton href="/contact" variant="outline">
            Talk to Our Team
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
