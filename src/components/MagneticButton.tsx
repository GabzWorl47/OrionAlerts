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

const variants = {
  solid:
    "rounded-[10px] border border-cyan/50 bg-cyan px-5 py-3 text-sm font-semibold !text-blue shadow-[0_10px_28px_rgba(12,34,56,0.12)] transition-colors hover:bg-white hover:!text-blue",
  outline:
    "rounded-[10px] border border-line bg-white px-5 py-3 text-sm font-semibold text-text shadow-[0_10px_28px_rgba(12,34,56,0.06)] transition duration-200 hover:border-blue/25 hover:text-blue",
  ghost:
    "rounded-[10px] border border-transparent bg-transparent px-5 py-3 text-sm font-semibold text-muted transition duration-200 hover:text-text",
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
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.4 });

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
