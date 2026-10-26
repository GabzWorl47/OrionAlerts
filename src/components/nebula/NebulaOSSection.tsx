"use client";

import { useEffect, useRef, useState } from "react";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";
import { MagneticButton } from "@/components/MagneticButton";
import { Reveal } from "@/components/Reveal";
import { NebulaCore } from "@/components/nebula/NebulaCore";
import { nebulaSectionCopy, nebulaVideo } from "@/lib/nebula-os";

function NebulaVideoBox() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const reduce = useSafeReducedMotion();
  const [visible, setVisible] = useState(false);
  const canPlay = nebulaVideo.available && Boolean(nebulaVideo.src);

  useEffect(() => {
    if (!canPlay) return;
    const el = boxRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [canPlay]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canPlay) return;
    video.muted = true;
    if (!visible || reduce) {
      video.pause();
      return;
    }
    void video.play().catch(() => {
      // Autoplay may be blocked.
    });
  }, [visible, reduce, canPlay]);

  return (
    <div
      ref={boxRef}
      className="relative mt-6 overflow-hidden rounded-[28px] border border-blue/15 bg-[#071018] shadow-[0_40px_90px_-40px_rgba(12,34,56,0.7)] ring-1 ring-white/10 md:mt-8 md:rounded-[32px]"
    >
      <div className="relative aspect-[16/9] min-h-[18rem] w-full sm:min-h-[22rem] lg:min-h-[32rem] xl:min-h-[38rem]">
        {canPlay && !reduce ? (
          <video
            ref={videoRef}
            src={nebulaVideo.src}
            poster={nebulaVideo.poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover object-center"
            aria-label="Nebula OS overview video"
          />
        ) : (
          // eslint-disable-next-line @next/next/no-img-element -- poster fallback until video ships
          <img
            src={nebulaVideo.poster}
            alt="Operator monitoring a street camera feed with AI boxes marking people, vehicles and anomaly alerts"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        )}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071018]/55 via-transparent to-[#071018]/15"
          aria-hidden
        />
      </div>
    </div>
  );
}

export function NebulaOSSection() {
  const headingId = "nebula-os-heading";

  return (
    <section
      id="platform-videos"
      aria-labelledby={headingId}
      className="relative overflow-hidden border-y border-[rgba(12,34,56,0.08)] bg-[#dfe9f2] pt-8 pb-10 md:pt-10 md:pb-12 lg:pt-12 lg:pb-14"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_10%,rgba(126,200,255,0.32),transparent_48%),radial-gradient(ellipse_at_85%_90%,rgba(12,34,56,0.1),transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto w-[min(100%-1.5rem,96rem)] sm:w-[min(100%-2rem,96rem)] lg:w-[min(100%-2.5rem,96rem)]">
        <Reveal>
          <header className="mx-auto max-w-5xl text-center">
            <h2
              id={headingId}
              className="text-balance text-[clamp(1.5rem,3.4vw,2.6rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-blue"
            >
              {nebulaSectionCopy.heading}
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-base font-semibold leading-relaxed text-text md:text-lg">
              {nebulaSectionCopy.supporting}
            </p>
          </header>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-10 w-full md:mt-14">
            <NebulaCore featured />
            <NebulaVideoBox />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-3 md:mt-14">
            <MagneticButton href="/nebula-os">
              {nebulaSectionCopy.primaryCta.label}
            </MagneticButton>
            <MagneticButton href="/nebula-os#nebula-architecture" variant="outline">
              View Architecture
            </MagneticButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
