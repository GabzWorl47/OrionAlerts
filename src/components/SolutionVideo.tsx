"use client";

import { useEffect, useRef } from "react";

type SolutionVideoProps = {
  src: string;
  label: string;
  poster?: string;
  fit?: "contain" | "cover";
  /** When false, video pauses. Defaults to true (autoplay). */
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

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = true;

    if (!playing) {
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
  }, [src, playing]);

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
      preload="auto"
      aria-label={label}
    />
  );
}
