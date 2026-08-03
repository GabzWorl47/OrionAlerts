"use client";

import { motion, useReducedMotion } from "framer-motion";
import { LeadForm } from "@/components/LeadForm";

export function BookDemoPanel() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex min-h-[calc(100dvh-var(--header-h))] items-center justify-center px-4 py-10 md:py-14">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(43,140,255,0.12),transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_100%,rgba(48,227,255,0.08),transparent_40%)]" />

      <motion.div
        className="relative z-10 w-full max-w-xl"
        initial={reduce ? false : { opacity: 0, scale: 0.92, y: 28 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.08 }
        }
      >
        <div className="rounded-[28px] shadow-[0_28px_80px_rgba(15,23,42,0.14)]">
          <LeadForm
            kind="demo"
            title="Book a Demo"
            subtitle="Tell us about your sites and priorities. We’ll schedule a guided walkthrough."
          />
        </div>
      </motion.div>
    </div>
  );
}
