"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";

export function TrialCta() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-surface" />
      <div className="absolute inset-0 grid-texture opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(124,58,237,0.1),transparent_45%)]" />

      <div className="container relative">
        <Reveal>
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="panel mx-auto max-w-4xl overflow-hidden p-10 text-center md:p-14"
          >
            <h2 className="display text-[clamp(1.8rem,4vw,2.8rem)] uppercase text-steel-gradient">
              Book your OrionAlerts demo
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted">
              See the platform against your sites, camera estate, and operating model. Demo requests
              and contact messages stay in separate flows.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <MagneticButton href="/book-demo">Book a Demo</MagneticButton>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-[14px] border border-line bg-white px-5 py-3 text-sm font-semibold text-text transition hover:border-blue hover:text-blue"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
