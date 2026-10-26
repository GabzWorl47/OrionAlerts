"use client";

import { useEffect, useRef } from "react";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

type SolutionVideoProps = {
  src: string;
  label: string;
  poster?: string;
  fit?: "contain" | "cover";
  /** When false, video pauses. Defaults to true (autoplay when motion is allowed). */
  playing?: boolean;
};

export function SolutionVideo({
  src,
  label,
  poster,
  fit = "contain",
  playing = true,
}: SolutionVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useSafeReducedMotion();
  const shouldPlay = playing && !reduce;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    if (!shouldPlay) {
      video.pause();
      return;
    }

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
  }, [src, shouldPlay]);

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={`absolute inset-0 h-full w-full bg-[#0b1220] ${
        fit === "cover" ? "object-cover" : "object-contain"
      }`}
      controls
      playsInline
      muted
      loop
      preload="metadata"
      aria-label={label}
    />
  );
}
