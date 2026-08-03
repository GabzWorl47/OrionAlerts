"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

type WorkflowArchitectureStepperProps = {
  steps: string[];
};

function VerticalStep({
  step,
  index,
  total,
  progress,
  reduce,
}: {
  step: string;
  index: number;
  total: number;
  progress: MotionValue<number>;
  reduce: boolean | null;
}) {
  const start = index / total;
  const end = (index + 0.55) / total;
  const pulseEnd = Math.min(end + 0.12, 1);

  const scale = useTransform(progress, [start, end], [0.88, 1]);
  const pulseOpacity = useTransform(progress, [start, end, pulseEnd], [0, 0.5, 0]);
  const pulseScale = useTransform(progress, [start, end, pulseEnd], [0.75, 1.3, 1.5]);

  return (
    <motion.li
      className="flex items-start gap-3"
      initial={reduce ? false : { opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.4, delay: index * 0.06, ease }}
    >
      <motion.span
        className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-cyan/40 bg-white font-display text-sm font-semibold text-blue shadow-[0_8px_22px_rgba(43,140,255,0.18)]"
        style={reduce ? undefined : { scale }}
      >
        {!reduce ? (
          <motion.span
            aria-hidden
            className="absolute inset-0 rounded-full bg-cyan/25"
            style={{ opacity: pulseOpacity, scale: pulseScale }}
          />
        ) : null}
        <span className="relative">{String(index + 1).padStart(2, "0")}</span>
      </motion.span>

      <div className="min-w-0 flex-1 rounded-[16px] border border-blue/15 bg-white px-4 py-3.5 shadow-[0_10px_24px_rgba(26,115,232,0.08)]">
        <p className="text-sm font-semibold text-text">{step}</p>
      </div>
    </motion.li>
  );
}

export function WorkflowArchitectureStepper({
  steps,
}: WorkflowArchitectureStepperProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.5"],
  });

  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    restDelta: 0.001,
  });

  const lineScaleY = useTransform(progress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute bottom-4 left-[21px] top-4 w-[2px] overflow-hidden rounded-full bg-blue/15">
        <motion.div
          className="h-full origin-top rounded-full bg-gradient-to-b from-blue via-cyan to-blue"
          style={{ scaleY: reduce ? 1 : lineScaleY }}
        />
      </div>

      <ol className="relative space-y-4">
        {steps.map((step, index) => (
          <VerticalStep
            key={step}
            step={step}
            index={index}
            total={steps.length}
            progress={progress}
            reduce={reduce}
          />
        ))}
      </ol>
    </div>
  );
}
