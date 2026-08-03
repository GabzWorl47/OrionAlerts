"use client";

import Image from "next/image";
import Link from "next/link";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui";
import type { Solution } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;
/** Modest corner peel — all four corners */
const MAX_CURL = 140;

type SolutionHeroProps = {
  solution: Solution;
};

type Corner = "top-left" | "top-right" | "bottom-left" | "bottom-right";

function shortLede(summary: string) {
  const first = summary.split(/(?<=[.!?])\s+/)[0]?.trim();
  if (!first) return summary;
  return first.length > 180 ? `${first.slice(0, 177)}…` : first;
}

function bezier(
  t: number,
  p0: number,
  p1: number,
  p2: number,
  p3: number,
) {
  const u = 1 - t;
  return u * u * u * p0 + 3 * u * u * t * p1 + 3 * u * t * t * p2 + t * t * t * p3;
}

type Pt = { x: number; y: number };

/** Soft S-curve crease A → B, bulging toward the outer corner */
function creasePoints(a: Pt, b: Pt, corner: Pt, steps = 20): Pt[] {
  const c1 = {
    x: a.x + (corner.x - a.x) * 0.55,
    y: a.y + (corner.y - a.y) * 0.18,
  };
  const c2 = {
    x: b.x + (corner.x - b.x) * 0.18,
    y: b.y + (corner.y - b.y) * 0.55,
  };

  const pts: Pt[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    pts.push({
      x: bezier(t, a.x, c1.x, c2.x, b.x),
      y: bezier(t, a.y, c1.y, c2.y, b.y),
    });
  }
  return pts;
}

function ptsToPoly(pts: Pt[]) {
  return pts.map((p) => `${p.x.toFixed(1)}px ${p.y.toFixed(1)}px`).join(", ");
}

/** Visible page with all four corners curled away */
function pageClipPath(size: number, w: number, h: number) {
  const s = Math.max(size, 0);
  if (s < 1 || w < 1 || h < 1) return "none";

  const topLeft = creasePoints(
    { x: 0, y: s },
    { x: s, y: 0 },
    { x: 0, y: 0 },
  );
  const topRight = creasePoints(
    { x: w - s, y: 0 },
    { x: w, y: s },
    { x: w, y: 0 },
  );
  const bottomRight = creasePoints(
    { x: w, y: h - s },
    { x: w - s, y: h },
    { x: w, y: h },
  );
  const bottomLeft = creasePoints(
    { x: s, y: h },
    { x: 0, y: h - s },
    { x: 0, y: h },
  );

  return `polygon(${ptsToPoly(topLeft)}, ${ptsToPoly(topRight)}, ${ptsToPoly(bottomRight)}, ${ptsToPoly(bottomLeft)})`;
}

/** Flap path in unit 0–100 — tip peels onto the page from that corner */
function flapSvgPath(corner: Corner) {
  switch (corner) {
    case "bottom-right":
      return [
        "M 0 100",
        "C 18 100 8 62 34 34",
        "C 52 14 86 10 100 0",
        "C 78 28 28 72 0 100",
        "Z",
      ].join(" ");
    case "bottom-left":
      return [
        "M 100 100",
        "C 82 100 92 62 66 34",
        "C 48 14 14 10 0 0",
        "C 22 28 72 72 100 100",
        "Z",
      ].join(" ");
    case "top-right":
      return [
        "M 0 0",
        "C 18 0 8 38 34 66",
        "C 52 86 86 90 100 100",
        "C 78 72 28 28 0 0",
        "Z",
      ].join(" ");
    case "top-left":
      return [
        "M 100 0",
        "C 82 0 92 38 66 66",
        "C 48 86 14 90 0 100",
        "C 22 72 72 28 100 0",
        "Z",
      ].join(" ");
  }
}

function PageTurnFlap({
  corner,
  size,
  shade,
}: {
  corner: Corner;
  size: MotionValue<number>;
  shade: MotionValue<number>;
}) {
  const width = useTransform(size, (s) => `${Math.max(s, 0)}px`);
  const height = useTransform(size, (s) => `${Math.max(s, 0)}px`);
  const d = flapSvgPath(corner);

  const isLeft = corner.endsWith("left");
  const isTop = corner.startsWith("top");
  const pos =
    corner === "top-left"
      ? "left-0 top-0"
      : corner === "top-right"
        ? "right-0 top-0"
        : corner === "bottom-left"
          ? "left-0 bottom-0"
          : "right-0 bottom-0";

  const shadowDx = isLeft ? 4 : -4;
  const shadowDy = isTop ? 3 : -3;
  const shadeTranslate = `translate(${isLeft ? 2.5 : -2.5} ${isTop ? 2 : -2})`;

  return (
    <motion.div
      aria-hidden
      className={`pointer-events-none absolute z-30 ${pos}`}
      style={{ width, height, opacity: shade }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 overflow-visible"
      >
        <defs>
          <filter
            id={`curl-shadow-${corner}`}
            x="-30%"
            y="-30%"
            width="160%"
            height="160%"
          >
            <feDropShadow
              dx={shadowDx}
              dy={shadowDy}
              stdDeviation="4"
              floodColor="rgba(15,23,42,0.3)"
            />
          </filter>
        </defs>
        <path d={d} fill="rgba(15,23,42,0.12)" transform={shadeTranslate} />
        <path
          d={d}
          fill="var(--bg)"
          stroke="rgba(15,23,42,0.12)"
          strokeWidth="1.4"
          vectorEffect="non-scaling-stroke"
          filter={`url(#curl-shadow-${corner})`}
        />
      </svg>
    </motion.div>
  );
}

const CORNERS: Corner[] = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
];

export function SolutionHero({ solution }: SolutionHeroProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const update = () => {
      const r = el.getBoundingClientRect();
      setStageSize({ w: r.width, h: r.height });
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const turn = useTransform(scrollYProgress, [0.08, 0.62], [0, 1]);
  const curlSize = useTransform(turn, [0, 1], [0, MAX_CURL]);
  const curlShade = useTransform(turn, [0, 0.08, 1], [0, 1, 1]);
  const contentFade = useTransform(turn, [0, 0.75, 1], [1, 1, 0.95]);

  const pageClip = useTransform(curlSize, (s) =>
    pageClipPath(s, stageSize.w, stageSize.h),
  );

  return (
    <section ref={ref} className="relative h-[140vh] bg-[var(--bg)]">
      <div
        ref={stageRef}
        className="sticky top-0 h-[100svh] overflow-hidden bg-[var(--bg)]"
      >
        {reduce ? (
          <div className="absolute inset-0 bg-[#07111f] text-white">
            <Image
              src={solution.image}
              alt={`${solution.shortName} overview`}
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/78 to-[#07111f]/20" />
            <div className="absolute inset-0 flex flex-col justify-end">
              <HeroCopy solution={solution} reduce={reduce} />
            </div>
          </div>
        ) : (
          <>
            <motion.div
              className="absolute inset-0 overflow-hidden bg-[#07111f] text-white will-change-[clip-path]"
              style={{ clipPath: pageClip }}
            >
              <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.04, opacity: 0.9 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.15, ease }}
              >
                <Image
                  src={solution.image}
                  alt={`${solution.shortName} overview`}
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </motion.div>
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#07111f] via-[#07111f]/78 to-[#07111f]/20" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07111f] via-transparent to-[#07111f]/40" />

              <motion.div
                className="absolute inset-0 flex flex-col justify-end"
                style={{ opacity: contentFade }}
              >
                <HeroCopy solution={solution} reduce={reduce} />
              </motion.div>
            </motion.div>

            {CORNERS.map((corner) => (
              <PageTurnFlap
                key={corner}
                corner={corner}
                size={curlSize}
                shade={curlShade}
              />
            ))}
          </>
        )}
      </div>
    </section>
  );
}

function HeroCopy({
  solution,
  reduce,
}: {
  solution: Solution;
  reduce: boolean | null;
}) {
  return (
    <div className="container relative z-10 pb-14 pt-10 md:pb-20 md:pt-16">
      <div className="max-w-xl">
        <motion.nav
          aria-label="Breadcrumb"
          className="mb-7 text-sm text-white/55"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          <Link href="/solutions" className="transition hover:text-white">
            Solutions
          </Link>
          <span className="mx-2 text-white/30">/</span>
          <span className="text-white/85">{solution.shortName}</span>
        </motion.nav>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.06, ease }}
          className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan"
        >
          {solution.tagline}
        </motion.p>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12, ease }}
          className="mt-4 font-display text-[clamp(2.5rem,6.5vw,4.8rem)] font-semibold uppercase leading-[0.92] tracking-[-0.04em] text-white"
        >
          {solution.shortName}
        </motion.p>

        <motion.span
          aria-hidden
          className="mt-5 block h-px origin-left bg-gradient-to-r from-cyan via-blue/80 to-transparent"
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.28, ease }}
        />

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22, ease }}
          className="mt-5 max-w-xl font-display text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium normal-case leading-[1.3] text-white/90"
        >
          {solution.headline}
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.3, ease }}
          className="mt-5 max-w-md text-[15px] leading-relaxed text-white/65 md:text-base"
        >
          {shortLede(solution.summary)}
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.38, ease }}
          className="mt-9 flex flex-wrap gap-3"
        >
          <Button href="/book-demo">Book a Demo</Button>
        </motion.div>
      </div>
    </div>
  );
}
