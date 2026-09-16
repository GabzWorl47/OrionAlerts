"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: { opacity: 1, y: 0 },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -72 },
  show: { opacity: 1, x: 0 },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 72 },
  show: { opacity: 1, x: 0 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1 },
};

const map = {
  up: fadeUp,
  left: fadeLeft,
  right: fadeRight,
  scale: scaleIn,
};

export type RevealDirection = keyof typeof map;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  once?: boolean;
  amount?: number | "some" | "all";
};

/** Avoid SSR/client tree mismatches from useReducedMotion. */
function useMotionReady() {
  const [ready, setReady] = useState(false);
  useEffect(() => setReady(true), []);
  return ready;
}

export function Reveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  amount = 0.25,
}: RevealProps) {
  const ready = useMotionReady();
  const reduce = useReducedMotion();
  const animate = ready && !reduce;

  return (
    <motion.div
      className={className}
      variants={map[direction]}
      initial={animate ? "hidden" : false}
      whileInView={animate ? "show" : undefined}
      viewport={animate ? { once, amount, margin: "-10% 0px -8% 0px" } : undefined}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = "",
  delay = 0.08,
  once = true,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  once?: boolean;
}) {
  const ready = useMotionReady();
  const reduce = useReducedMotion();
  const animate = ready && !reduce;

  return (
    <motion.div
      className={className}
      initial={animate ? "hidden" : false}
      whileInView={animate ? "show" : undefined}
      viewport={animate ? { once, amount: 0.2, margin: "-8% 0px" } : undefined}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: animate ? delay : 0 },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode;
  className?: string;
  direction?: RevealDirection;
}) {
  return (
    <motion.div
      className={className}
      variants={map[direction]}
      transition={{ duration: 0.65, ease }}
    >
      {children}
    </motion.div>
  );
}
