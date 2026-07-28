"use client";

import { VideoPlaceholder } from "@/components/ui";

type SolutionVideoSectionProps = {
  label: string;
  src?: string;
  poster?: string;
  caption?: string;
};

export function SolutionVideoSection({
  label,
  src,
  poster,
  caption,
}: SolutionVideoSectionProps) {
  return (
    <section className="relative overflow-hidden pb-12 pt-2 md:pb-16">
      {/* Full-section atmosphere — lives OUTSIDE the video, in the page sides */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(43,140,255,0.14),transparent_42%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(48,227,255,0.12),transparent_42%)]" />
        <div className="absolute inset-0 grid-texture opacity-40" />

        {/* Left rail */}
        <div className="absolute inset-y-[12%] left-[max(0.75rem,calc((100%-min(100%,76rem))/2+0.5rem))] hidden w-px bg-gradient-to-b from-transparent via-blue/35 to-transparent lg:block" />
        {/* Right rail */}
        <div className="absolute inset-y-[12%] right-[max(0.75rem,calc((100%-min(100%,76rem))/2+0.5rem))] hidden w-px bg-gradient-to-b from-transparent via-cyan/35 to-transparent lg:block" />

        {/* Side orbs */}
        <div className="absolute left-[-4rem] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-blue/15 blur-3xl" />
        <div className="absolute right-[-4rem] top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-cyan/15 blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid items-center gap-4 lg:grid-cols-[minmax(0,9rem)_minmax(0,1fr)_minmax(0,9rem)] lg:gap-5 xl:grid-cols-[minmax(0,10rem)_minmax(0,1fr)_minmax(0,10rem)]">
          {/* Left side of section */}
          <aside className="hidden lg:flex lg:flex-col lg:items-end lg:gap-4 lg:pr-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-text">
              Live preview
            </p>
            <div className="h-16 w-px bg-gradient-to-b from-blue/50 to-transparent" />
            <p className="max-w-[9.5rem] text-right text-sm font-bold leading-relaxed text-muted-strong">
              See how operators monitor sites from one command view.
            </p>
          </aside>

          {/* Video stays clean in the center */}
          <div className="min-w-0">
            <VideoPlaceholder label={label} src={src} poster={poster} caption={caption} />
          </div>

          {/* Right side of section */}
          <aside className="hidden lg:flex lg:flex-col lg:items-start lg:gap-4 lg:pl-1">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-text">
              Built for ops
            </p>
            <div className="h-16 w-px bg-gradient-to-b from-cyan/50 to-transparent" />
            <p className="max-w-[9.5rem] text-sm font-bold leading-relaxed text-muted-strong">
              Multi-site visibility, faster review, clearer incident context.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
