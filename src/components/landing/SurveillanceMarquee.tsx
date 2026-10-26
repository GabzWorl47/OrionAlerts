"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

const rowA = [
  "Thermal Scan",
  "Dock Camera",
  "Perimeter Map",
  "Alert Timeline",
  "Floor Heatmap",
  "Asset Route",
  "Operator Wall",
  "Night Vision",
];

const rowB = [
  "Analytics Chart",
  "Gate Feed",
  "Zone Overlay",
  "Confidence Meter",
  "Campus Grid",
  "Incident Clip",
  "Tracking Path",
  "Control Room",
];

function Tile({ label, tone }: { label: string; tone: number }) {
  const tones = [
    "from-[#132033] to-[#1a2d48]",
    "from-[#101c2e] to-[#16324a]",
    "from-[#0f1a28] to-[#1c2740]",
    "from-[#15253d] to-[#0e1830]",
  ];
  return (
    <div
      className={`aspect-[16/10] w-[280px] shrink-0 overflow-hidden rounded-[20px] border border-line bg-gradient-to-br ${tones[tone % tones.length]} sm:w-[320px]`}
    >
      <div className="relative flex h-full flex-col justify-between p-4">
        <div className="scanlines absolute inset-0 opacity-30" />
        <div className="h-2 w-16 rounded-full bg-cyan/40" />
        <div>
          <p className="text-[10px] uppercase tracking-[0.16em] text-muted">Feed placeholder</p>
          <p className="mt-1 font-display text-lg text-text">{label}</p>
        </div>
      </div>
    </div>
  );
}

export function SurveillanceMarquee() {
  const reduce = useSafeReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x1 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [80, -220]);
  const x2 = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-220, 80]);

  return (
    <section ref={ref} className="overflow-hidden py-20 md:py-28">
      <div className="container mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="display text-[clamp(2rem,4.5vw,3.8rem)] uppercase text-blue-gradient"
        >
          See More. Respond Faster.
        </motion.h2>
      </div>

      <div className="space-y-5">
        <motion.div style={{ x: x1 }} className="flex gap-4 will-change-transform">
          {[...rowA, ...rowA].map((label, i) => (
            <Tile key={`a-${label}-${i}`} label={label} tone={i} />
          ))}
        </motion.div>
        <motion.div style={{ x: x2 }} className="flex gap-4 will-change-transform">
          {[...rowB, ...rowB].map((label, i) => (
            <Tile key={`b-${label}-${i}`} label={label} tone={i + 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
