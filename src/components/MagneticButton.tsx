"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";
import { ReactNode, useRef } from "react";

type MagneticButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
};

// transition-smooth / focus-ring come from globals.css so every button
// (and any future primitive) eases and focuses the same way.
const variants = {
  solid:
    "rounded-[10px] border border-cyan/50 bg-cyan px-5 py-3 text-sm font-semibold !text-blue shadow-[0_10px_28px_rgba(12,34,56,0.12)] transition-smooth focus-ring hover:-translate-y-0.5 hover:bg-white hover:!text-blue hover:shadow-[0_16px_36px_rgba(126,200,255,0.35)]",
  outline:
    "rounded-[10px] border border-line bg-white px-5 py-3 text-sm font-semibold text-text shadow-[0_10px_28px_rgba(12,34,56,0.06)] transition-smooth focus-ring hover:-translate-y-0.5 hover:border-blue/25 hover:text-blue hover:shadow-[0_14px_32px_rgba(126,200,255,0.22)]",
  ghost:
    "rounded-[10px] border border-transparent bg-transparent px-5 py-3 text-sm font-semibold text-muted transition-smooth focus-ring hover:-translate-y-0.5 hover:text-text",
};

export function MagneticButton({
  href,
  children,
  variant = "solid",
  className = "",
}: MagneticButtonProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  // Slightly softer spring for a more premium, less snappy pull.
  const springX = useSpring(x, { stiffness: 200, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 200, damping: 20, mass: 0.5 });

  function onMove(e: React.MouseEvent) {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const dx = e.clientX - (rect.left + rect.width / 2);
    const dy = e.clientY - (rect.top + rect.height / 2);
    x.set(dx * 0.22);
    y.set(dy * 0.22);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div style={{ x: springX, y: springY }} className="inline-flex">
      <Link
        ref={ref}
        href={href}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className={`inline-flex items-center justify-center gap-2 tracking-wide ${variants[variant]} ${className}`}
      >
        {children}
      </Link>
    </motion.div>
  );
}
