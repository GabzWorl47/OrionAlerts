"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui";
import type { Solution } from "@/lib/site";

type SolutionIntroSplitProps = {
  solution: Solution;
};

const ASSET_TRACKING_COPY =
  "Orion Alerts Asset Tracking provides a centralized platform to manage and monitor your organization's physical assets throughout their entire lifecycle. From procurement and deployment to transfer, maintenance, and retirement, every asset is digitally tracked with complete ownership, warranty, location, and utilization visibility. This eliminates manual spreadsheets, improves accountability, reduces asset loss, and enables smarter operational planning.";

export function SolutionIntroSplit({ solution }: SolutionIntroSplitProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const src = solution.introVideo;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !src) return;
    video.muted = true;
    const tryPlay = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay may be blocked until user interaction.
      }
    };
    if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
      void tryPlay();
    } else {
      video.addEventListener("loadeddata", () => void tryPlay(), { once: true });
    }
  }, [src]);

  return (
    <section className="relative overflow-hidden bg-bg py-8 md:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(43,140,255,0.12),transparent_50%)]" />
      <div className="container relative">
        <div className="grid items-stretch gap-5 lg:grid-cols-[1.35fr_0.65fr] lg:gap-6">
          <div className="relative min-h-[300px] overflow-hidden rounded-[22px] bg-[#0b1628] shadow-[0_24px_60px_-40px_rgba(15,61,120,0.55)] md:min-h-[360px]">
            {src ? (
              <video
                ref={videoRef}
                src={src}
                poster={solution.introVideoPoster ?? solution.image}
                className="absolute inset-0 h-full w-full object-cover"
                muted
                loop
                playsInline
                autoPlay
                preload="auto"
                aria-label={`${solution.shortName} product video`}
              />
            ) : (
              <Image
                src={solution.image}
                alt={`${solution.shortName} overview`}
                fill
                sizes="(max-width: 1024px) 100vw, 65vw"
                className="object-cover"
              />
            )}
          </div>

          <div className="flex h-full flex-col justify-center rounded-[22px] border border-line bg-white px-5 py-6 shadow-[0_14px_32px_-24px_rgba(43,140,255,0.35)] md:px-7 md:py-7">
            <p className="eyebrow">{solution.tagline}</p>
            <h2 className="mt-2 font-display text-[clamp(1.25rem,2vw,1.6rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-text">
              {solution.shortName}
            </h2>
            <p className="mt-3 text-[14px] leading-relaxed text-muted-strong md:text-[15px]">
              {ASSET_TRACKING_COPY}
            </p>
            <div className="mt-5">
              <Button href="/book-demo">Book a Demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
