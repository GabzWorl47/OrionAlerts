"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MagneticButton } from "@/components/MagneticButton";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pt-[var(--header-h)]">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 grid-texture opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(43,140,255,0.14),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_75%,rgba(48,227,255,0.08),transparent_42%)]" />

      <div className="container relative z-10 grid items-center gap-10 py-14 md:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] md:gap-12 md:py-20 lg:py-24">
        <div className="max-w-xl">
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease }}
            className="display text-[clamp(2.35rem,5.5vw,4.25rem)] uppercase leading-[0.95] tracking-[-0.04em] text-steel-gradient"
          >
            Intelligent Alerts for Smarter, Safer Operations.
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.1, ease }}
            className="mt-5 max-w-lg text-base leading-relaxed text-muted-strong md:text-lg"
          >
            Monitor sites in real time, detect exceptions earlier, and notify the right teams fast —
            with Orion Alerts as the operational command layer.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton href="/book-demo">Book a Demo</MagneticButton>
            <MagneticButton href="/solutions" variant="outline">
              Explore Solutions
            </MagneticButton>
          </motion.div>

          <motion.a
            href="#platform-videos"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.45, delay: 0.35 }}
            className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-muted transition hover:text-blue"
          >
            See the platform in action
            <ChevronDown size={16} className="animate-bounce" />
          </motion.a>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 28, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.14, ease }}
          className="relative"
        >
          <div className="panel relative aspect-[16/10] overflow-hidden shadow-[0_24px_60px_rgba(15,23,42,0.14)]">
            <div className="command-panel absolute inset-0" />
            <div className="scanlines absolute inset-0 opacity-40" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_35%,rgba(43,140,255,0.28),transparent_40%),radial-gradient(circle_at_72%_62%,rgba(48,227,255,0.18),transparent_42%)]" />

            {!reduce ? (
              <motion.div
                className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
                animate={{ top: ["12%", "86%", "12%"] }}
                transition={{ duration: 5.5, ease: "linear", repeat: Infinity }}
              />
            ) : null}

            <div className="absolute left-[14%] top-[24%] h-[36%] w-[22%] rounded-[4px] border-2 border-cyan/90">
              <span className="absolute -top-6 left-0 whitespace-nowrap rounded bg-black/50 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan">
                Person Detected
              </span>
            </div>
            <div className="absolute left-[48%] top-[42%] h-[24%] w-[28%] rounded-[4px] border-2 border-alert/90">
              <span className="absolute -top-6 left-0 whitespace-nowrap rounded bg-black/50 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-alert">
                Restricted Zone
              </span>
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-[10px] uppercase tracking-[0.14em] text-white/70">
              <span>ORION Ops · Dashboard preview</span>
              <span className="inline-flex items-center gap-2 text-alert">
                <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-alert" />
                Live
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
