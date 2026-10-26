"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

export function NebulaCore({ featured = false }: { featured?: boolean } = {}) {
  const reduce = useSafeReducedMotion();

  return (
    <div
      className={`relative overflow-hidden border border-blue/10 bg-white/75 shadow-[0_30px_80px_-36px_rgba(43,140,255,0.45)] backdrop-blur-xl ${
        featured
          ? "rounded-[28px] px-8 py-5 md:rounded-[32px] md:px-14 md:py-6 lg:py-7"
          : "rounded-[28px] px-6 py-10 md:px-10 md:py-12"
      }`}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,rgba(43,140,255,0.18),transparent_58%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(43,140,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(43,140,255,0.07) 1px, transparent 1px)",
          backgroundSize: featured ? "36px 36px" : "28px 28px",
          maskImage:
            "radial-gradient(ellipse at center, black 35%, transparent 78%)",
        }}
      />
      {!reduce
        ? Array.from({ length: featured ? 12 : 8 }).map((_, i) => (
            <span
              key={i}
              aria-hidden
              className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-cyan/50"
              style={{
                left: `${12 + ((i * 11) % 76)}%`,
                top: `${18 + ((i * 17) % 64)}%`,
                boxShadow: "0 0 10px rgba(48,227,255,0.45)",
              }}
            />
          ))
        : null}

      {!reduce ? (
        <motion.div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[70%] w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(48,227,255,0.12),transparent_68%)]"
          animate={{ opacity: [0.45, 0.85, 0.45], scale: [0.96, 1.04, 0.96] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        />
      ) : null}

      <div className="relative z-10 flex flex-col items-center text-center">
        <Image
          src="/Images/nebula.webp"
          alt="Nebula OS logo, the operating system behind OrionAlerts"
          width={720}
          height={200}
          className={`h-auto w-full object-contain ${
            featured
              ? "max-h-[5.5rem] max-w-[min(100%,56rem)] md:max-h-[6.5rem] md:max-w-[min(100%,68rem)] lg:max-h-[7.5rem]"
              : "max-h-[3.75rem] max-w-[min(100%,36rem)] md:max-h-[4.5rem] md:max-w-[min(100%,44rem)]"
          }`}
        />
      </div>
    </div>
  );
}
