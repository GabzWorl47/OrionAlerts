"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const INTRO_VIDEO = "/Videos/video/Intro%20video.mp4";
const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [progress, setProgress] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;

    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay may be blocked until interaction.
      }
    };

    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      void tryPlay();
    } else {
      video.addEventListener("loadeddata", () => void tryPlay(), { once: true });
    }

    const onTime = () => {
      if (!video.duration || !Number.isFinite(video.duration)) return;
      setProgress(video.currentTime / video.duration);
      setSeconds(Math.floor(video.currentTime));
    };

    video.addEventListener("timeupdate", onTime);
    return () => video.removeEventListener("timeupdate", onTime);
  }, []);

  const ringSize = 52;
  const stroke = 1.75;
  const radius = (ringSize - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#061018] text-white">
      {/* Full-bleed video under everything */}
      <video
        ref={videoRef}
        src={INTRO_VIDEO}
        className="absolute inset-0 h-full w-full object-cover"
        muted
        loop
        playsInline
        autoPlay
        preload="auto"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(43,140,255,0.22),transparent_50%),radial-gradient(ellipse_at_90%_50%,rgba(251,146,60,0.16),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#061018]/55 via-transparent to-[#061018]/35" />

      {/* Title locked to the true center of the video frame — shows for 5s then fades */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6">
        <motion.h1
          initial={reduce ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
          animate={
            reduce
              ? { opacity: 1 }
              : {
                  opacity: [0, 1, 1, 0],
                  scale: [0.98, 1, 1, 1],
                }
          }
          transition={
            reduce
              ? { duration: 0 }
              : {
                  duration: 6,
                  times: [0, 0.12, 0.83, 1],
                  ease: "easeInOut",
                }
          }
          className="select-none text-center font-display text-[clamp(3.2rem,12vw,8.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em]"
        >
          <span className="bg-[linear-gradient(105deg,#9fd4ff_0%,#ffffff_42%,#fdba74_100%)] bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(43,140,255,0.25)]">
            Orion
          </span>
          <span className="mt-1 block bg-[linear-gradient(105deg,#fdba74_0%,#ffffff_55%,#9fd4ff_100%)] bg-clip-text text-transparent md:mt-2">
            Alerts
          </span>
        </motion.h1>
      </div>

      {!reduce ? (
        <div
          className="pointer-events-none absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 md:right-8 md:block"
          aria-hidden
        >
          <div
            className="relative flex items-center justify-center"
            style={{ width: ringSize, height: ringSize }}
          >
            <svg
              width={ringSize}
              height={ringSize}
              className="-rotate-90"
              viewBox={`0 0 ${ringSize} ${ringSize}`}
            >
              <circle
                cx={ringSize / 2}
                cy={ringSize / 2}
                r={radius}
                fill="none"
                stroke="rgba(255,255,255,0.22)"
                strokeWidth={stroke}
              />
              <circle
                cx={ringSize / 2}
                cy={ringSize / 2}
                r={radius}
                fill="none"
                stroke="rgba(255,255,255,0.95)"
                strokeWidth={stroke}
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={dashOffset}
                className="transition-[stroke-dashoffset] duration-200 ease-linear"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-[13px] font-semibold tabular-nums tracking-tight text-white">
              {seconds}
            </span>
          </div>
        </div>
      ) : null}

      {/* Glass band over the video — Verkada-style */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/15 bg-[#061018]/45 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#061018]/30">
        <div className="container flex flex-col gap-3 py-4 md:flex-row md:items-end md:justify-between md:gap-10 md:py-5">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.12, ease }}
            className="max-w-md"
          >
            <p className="text-[clamp(1.15rem,1.8vw,1.45rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
              Intelligent alerts for smarter, safer operations.
            </p>
            <Link
              href="/book-demo"
              className="mt-2.5 inline-flex items-center gap-2 text-sm font-semibold text-cyan transition hover:text-white"
            >
              Book a demo
              <ArrowRight size={15} />
            </Link>
          </motion.div>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease }}
            className="max-w-lg text-[13px] leading-relaxed text-white/75 md:text-right md:text-sm"
          >
            Monitor sites in real time, detect exceptions earlier, and notify the right teams
            fast — with Orion Alerts as the operational command layer.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
