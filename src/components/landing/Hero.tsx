"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

const INTRO_VIDEO = "/Videos/video/intro.mp4";
const HERO_POSTER = "/visuals/solutions/ai-vision-clean.webp";
const HERO_VIDEOS = [INTRO_VIDEO, INTRO_VIDEO, INTRO_VIDEO, INTRO_VIDEO] as const;

export function Hero() {
  const reduce = useSafeReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const advancingRef = useRef(false);
  const [videoIndex, setVideoIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [remaining, setRemaining] = useState(0);
  // The <video> itself is not mounted until this flips true, so the ~3MB
  // background clip never competes for bandwidth/CPU with the initial paint.
  // The poster <img> below is the actual LCP element for every visitor.
  const [videoReady, setVideoReady] = useState(false);

  const advance = useCallback(() => {
    if (advancingRef.current || reduce) return;
    advancingRef.current = true;

    setVideoIndex((i) => (i + 1) % HERO_VIDEOS.length);
    setProgress(0);
    setRemaining(0);

    const video = videoRef.current;
    if (video) {
      video.currentTime = 0;
      void video.play().catch(() => {
        // Autoplay may be blocked until interaction.
      });
    }

    window.setTimeout(() => {
      advancingRef.current = false;
    }, 400);
  }, [reduce]);

  // Defer mounting <video> until after the browser has had a chance to paint
  // (and, in the same idle window, hydrate). Scheduling the state flip inside
  // a requestIdleCallback/rAF callback keeps it off the effect's synchronous
  // call stack, so it never blocks or competes with the LCP poster paint.
  // The idle callback is only armed after window "load", so the ~3 MB clip
  // also stays out of the way of the page's scripts, fonts and images on slow
  // connections (it used to start downloading during hydration).
  useEffect(() => {
    if (reduce) return;
    let cancelled = false;
    let handle: number | undefined;

    const schedule =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback
        : (cb: () => void) => window.setTimeout(cb, 200);
    const cancelSchedule =
      typeof window.cancelIdleCallback === "function"
        ? window.cancelIdleCallback
        : window.clearTimeout;

    const arm = () => {
      if (cancelled) return;
      handle = schedule(() => {
        if (!cancelled) setVideoReady(true);
      }) as number;
    };

    if (document.readyState === "complete") arm();
    else window.addEventListener("load", arm, { once: true });

    return () => {
      cancelled = true;
      window.removeEventListener("load", arm);
      if (handle !== undefined) cancelSchedule(handle);
    };
  }, [reduce]);

  useEffect(() => {
    if (reduce || !videoReady) return;
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
      const ratio = video.currentTime / video.duration;
      setProgress(ratio);
      setRemaining(Math.max(0, Math.ceil(video.duration - video.currentTime)));
      if (ratio >= 0.98) advance();
    };

    const onEnded = () => advance();

    video.addEventListener("timeupdate", onTime);
    video.addEventListener("ended", onEnded);
    return () => {
      video.removeEventListener("timeupdate", onTime);
      video.removeEventListener("ended", onEnded);
    };
  }, [advance, reduce, videoReady]);

  const ringSize = 44;
  const stroke = 1.75;
  const radius = (ringSize - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = circumference * (1 - progress);

  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#061018] text-white">
      {/*
        Static poster: this is the actual LCP element for every visitor, not
        just reduced-motion users. The video (when eligible) is deferred and
        layers on top once it starts playing, so it never blocks or competes
        with this paint.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element -- fetchPriority isn't exposed by next/image for a plain background element */}
      <img
        src={HERO_POSTER}
        alt=""
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
        aria-hidden
      />
      {!reduce && videoReady ? (
        <video
          ref={videoRef}
          src={HERO_VIDEOS[videoIndex]}
          poster={HERO_POSTER}
          className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-700 ease-out"
          muted
          playsInline
          autoPlay
          preload="metadata"
          aria-hidden
          onPlaying={(event) => event.currentTarget.classList.add("opacity-100")}
        />
      ) : null}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_40%,rgba(43,140,255,0.22),transparent_50%),radial-gradient(ellipse_at_90%_50%,rgba(251,146,60,0.16),transparent_42%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#061018]/55 via-transparent to-[#061018]/35" />

      {/*
        Decorative brand wordmark — fades for motion users; stays visible when
        reduced motion is on. Deliberately not a heading: the page's H1 is the
        persistent keyword line in the bottom bar below.
      */}
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center px-6"
        aria-hidden
      >
        {/* CSS-driven (.hero-wordmark in globals.css) so it starts on first paint, not after hydration. */}
        <div className="hero-wordmark select-none text-center font-display text-[clamp(3.2rem,12vw,8.5rem)] font-semibold uppercase leading-[0.9] tracking-[-0.04em]">
          <span className="bg-[linear-gradient(105deg,#9fd4ff_0%,#ffffff_42%,#fdba74_100%)] bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(43,140,255,0.25)]">
            Orion
          </span>
          <span className="mt-1 block bg-[linear-gradient(105deg,#fdba74_0%,#ffffff_55%,#9fd4ff_100%)] bg-clip-text text-transparent md:mt-2">
            Alerts
          </span>
        </div>
      </div>

      {!reduce ? (
        <div
          className="pointer-events-none absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 md:right-8 md:block"
          aria-hidden
        >
          <div className="flex flex-col items-center gap-3">
            {HERO_VIDEOS.map((_, index) => {
              const isActive = index === videoIndex;
              if (!isActive) {
                return (
                  <span
                    key={index}
                    className="block size-1.5 rounded-full bg-white/45"
                  />
                );
              }

              return (
                <div
                  key={index}
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
                    {remaining}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : null}

      {/* Persistent value proposition + primary CTA (stays after brand animation) */}
      <div className="absolute inset-x-0 bottom-0 z-20 border-t border-white/15 bg-[#061018]/45 backdrop-blur-2xl supports-[backdrop-filter]:bg-[#061018]/30">
        <div className="container flex flex-col gap-4 py-4 md:flex-row md:items-end md:justify-between md:gap-10 md:py-5">
          {/* .hero-rise is CSS so the H1 paints with the HTML instead of waiting for hydration. */}
          <div className="hero-rise max-w-xl [animation-delay:120ms]">
            <h1 className="text-[clamp(1.05rem,1.6vw,1.35rem)] font-semibold leading-[1.25] tracking-[-0.02em] text-white">
              AI video analytics, VMS and CCTV health monitoring for multi-site
              enterprises
            </h1>
            <p className="mt-1.5 text-sm text-white/75">
              Real-time alerts from the cameras you already own, across every
              branch, plant and warehouse.
            </p>
          </div>
          {/* pr-36 reserves the corner the fixed Ask Orion launcher sits in. */}
          <div className="hero-rise flex flex-wrap gap-2 pr-36 [--hero-rise-y:12px] [animation-delay:200ms]">
            <Link
              href="/book-demo"
              className="inline-flex items-center justify-center rounded-[14px] bg-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f7aef]"
            >
              Book a Demo
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center rounded-[14px] border border-white/25 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/10"
            >
              Explore Solutions
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
