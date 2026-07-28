"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";

export function PlatformSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24">
      <div className="absolute inset-0 bg-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(43,140,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_90%_40%,rgba(48,227,255,0.06),transparent_45%)]" />

      <div className="container relative grid items-center gap-12 lg:grid-cols-2">
        <Reveal direction="left">
          <p className="eyebrow">ORION Command</p>
          <h2 className="display mt-3 text-[clamp(1.9rem,4vw,3.2rem)] uppercase text-steel-gradient">
            One integrated platform
          </h2>
          <p className="description mt-5 max-w-lg text-lg">
            Control your entire physical security operation from ORION Command — video, AI
            analytics, asset tracking, and AMC workflows in one cloud-ready layer.
          </p>
          <Link
            href="/solutions"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue transition hover:gap-3"
          >
            Learn more <ArrowRight size={16} />
          </Link>
        </Reveal>

        <Reveal direction="right" delay={0.12}>
          <div className="panel overflow-hidden p-2">
            <div className="command-panel aspect-[4/3] rounded-[20px] p-6">
              <div className="grid h-full grid-cols-2 gap-3">
                {["Live walls", "Alert inbox", "Asset map", "AMC desk"].map((label, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 14, scale: 0.96 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.18 + i * 0.08, duration: 0.45 }}
                    whileHover={{ y: -4, borderColor: "rgba(124,58,237,0.35)" }}
                    className="flex items-end rounded-[12px] border border-white/10 bg-black/25 p-3"
                  >
                    <span className="text-xs font-medium text-white/70">{label}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-4 text-[10px] uppercase tracking-[0.16em] text-white/50">
                ORION Command · platform placeholder
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
