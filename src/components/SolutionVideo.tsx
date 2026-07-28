"use client";

import { useEffect, useRef } from "react";

type SolutionVideoProps = {
  src: string;
  label: string;
  poster?: string;
};

export function SolutionVideo({ src, label, poster }: SolutionVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

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
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className="absolute inset-0 h-full w-full bg-[#0b1220] object-contain"
      controls
      playsInline
      muted
      loop
      preload="auto"
      aria-label={label}
    />
  );
}
