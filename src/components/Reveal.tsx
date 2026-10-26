"use client";

import { m, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode, useSyncExternalStore } from "react";

/**
 * Shared reveal easing - mirrors --ease-soft in globals.css (expo-out).
 * Keep the two in sync if you tune one.
 */
const ease = [0.16, 1, 0.3, 1] as const;

/**
 * Direction variants: a soft fade + short translate + a whisper of scale.
 * The scale keeps things editorial rather than a plain slide, without
 * being showy - distances are intentionally small so it reads as a
 * refinement, not an entrance effect.
 */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  show: { opacity: 1, y: 0, scale: 1 },
};

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -56, scale: 0.985 },
  show: { opacity: 1, x: 0, scale: 1 },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 56, scale: 0.985 },
  show: { opacity: 1, x: 0, scale: 1 },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
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
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
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
    <m.div
      className={className}
      variants={map[direction]}
      initial={animate ? "hidden" : false}
      whileInView={animate ? "show" : undefined}
      viewport={animate ? { once, amount, margin: "-10% 0px -8% 0px" } : undefined}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </m.div>
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
    <m.div
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
    </m.div>
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
    <m.div
      className={className}
      variants={map[direction]}
      transition={{ duration: 0.6, ease }}
    >
      {children}
    </m.div>
  );
}
