"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { MagneticButton } from "@/components/MagneticButton";

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const springX = useSpring(mx, { stiffness: 60, damping: 20 });
  const springY = useSpring(my, { stiffness: 60, damping: 20 });
  const layerX = useTransform(springX, (v) => v * -0.03);
  const layerY = useTransform(springY, (v) => v * -0.03);

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mx.set(e.clientX - (rect.left + rect.width / 2));
    my.set(e.clientY - (rect.top + rect.height / 2));
  }

  return (
    <section
      ref={ref}
      onMouseMove={onMove}
      className="relative overflow-hidden pt-[var(--header-h)]"
    >
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 grid-texture opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(124,58,237,0.12),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_70%,rgba(6,182,212,0.08),transparent_45%)]" />

      <div className="container relative z-10 py-16 text-center md:py-20">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow"
        >
          Enterprise AI Surveillance
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="display mx-auto mt-5 max-w-4xl text-[clamp(2.6rem,6.5vw,5rem)] uppercase text-steel-gradient"
        >
          Proactive physical security, powered by AI
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-muted"
        >
          ORION Alerts turns video, AI analytics, and operational data into real-time decisions —
          one platform for security and operations teams.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.28 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <MagneticButton href="/book-demo">Book a Demo</MagneticButton>
          <MagneticButton href="/#solutions" variant="outline">
            Explore Solutions
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 36, scale: 0.97 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="container relative z-10 pb-16 md:pb-20"
        style={{ x: layerX, y: layerY }}
      >
        <div className="panel relative mx-auto aspect-[21/9] max-w-5xl overflow-hidden will-change-transform ai-glow">
          <div className="command-panel absolute inset-0" />
          <div className="absolute inset-0 opacity-40 mix-blend-screen bg-[radial-gradient(circle_at_30%_40%,rgba(124,58,237,0.35),transparent_35%),radial-gradient(circle_at_70%_60%,rgba(6,182,212,0.25),transparent_40%)]" />
          <div className="scanlines absolute inset-0 opacity-45" />
          {!reduce ? (
            <motion.div
              className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan to-transparent"
              animate={{ top: ["10%", "90%", "10%"] }}
              transition={{ duration: 5.5, ease: "linear", repeat: Infinity }}
            />
          ) : null}
          <motion.div
            className="absolute left-[18%] top-[28%] h-[38%] w-[18%] border border-cyan"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2.6, repeat: Infinity }}
          >
            <span className="absolute -top-5 left-0 text-[10px] font-semibold tracking-wide text-cyan">
              Person Detected
            </span>
          </motion.div>
          <motion.div
            className="absolute left-[52%] top-[40%] h-[26%] w-[24%] border border-alert"
            animate={{ opacity: [0.35, 1, 0.35] }}
            transition={{ duration: 3.1, repeat: Infinity, delay: 0.4 }}
          >
            <span className="absolute -top-5 left-0 text-[10px] font-semibold tracking-wide text-alert">
              Restricted Zone
            </span>
          </motion.div>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] uppercase tracking-[0.16em] text-white/60">
            <span>ORION Ops · Command visual placeholder</span>
            <span className="flex items-center gap-2 text-alert">
              <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-alert" /> Live
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
