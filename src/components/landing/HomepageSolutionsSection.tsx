"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { homepageSolutions, type HomepageSolution } from "@/lib/homepage";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

function SolutionMedia({ media }: { media: HomepageSolution["media"] }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const reduce = useSafeReducedMotion();
  const isRemote = media.poster.startsWith("http");
  const canAutoplay = Boolean(media.src) && !reduce;

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !media.src) return;
    video.muted = true;
    if (!inView || reduce) {
      video.pause();
      return;
    }
    void video.play().catch(() => {});
  }, [inView, media.src, reduce]);

  return (
    <div
      ref={rootRef}
      className="relative aspect-[16/10] overflow-hidden rounded-[20px] border border-line bg-[#0b1220] shadow-[0_16px_40px_rgba(15,23,42,0.1)]"
    >
      {canAutoplay ? (
        <video
          ref={videoRef}
          src={media.src}
          poster={media.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : isRemote ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={media.poster}
          alt={media.alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <Image
          src={media.poster}
          alt={media.alt}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
    </div>
  );
}

function SolutionBlock({
  solution,
  index,
}: {
  solution: HomepageSolution;
  index: number;
}) {
  const mediaFirst = index % 2 === 1;

  return (
    <article className="grid items-center gap-8 border-t border-line py-14 md:grid-cols-2 md:gap-12 md:py-16">
      <div className={mediaFirst ? "md:order-2" : ""}>
        <p className="font-display text-sm text-blue">
          {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 text-[clamp(1.45rem,2.6vw,2rem)] font-semibold leading-[1.15] tracking-[-0.02em] text-text">
          <Link href={solution.ctaHref} className="transition hover:text-blue">
            {solution.name}
          </Link>
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-strong">
          {solution.description}
        </p>
        <ul className="mt-6 space-y-2.5">
          {solution.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2.5 text-sm text-text">
              <Check size={16} className="mt-0.5 shrink-0 text-cyan" aria-hidden />
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        <Link
          href={solution.ctaHref}
          className="mt-7 inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-blue transition hover:gap-2.5"
        >
          {solution.ctaLabel}
          <ArrowUpRight size={16} />
        </Link>
      </div>

      <div className={mediaFirst ? "md:order-1" : ""}>
        <SolutionMedia media={solution.media} />
      </div>
    </article>
  );
}

export function HomepageSolutionsSection() {
  return (
    <section
      id="solutions"
      aria-labelledby="solutions-heading"
      className="relative bg-surface py-16 md:py-20"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow">Solutions</p>
          <h2
            id="solutions-heading"
            className="mt-2 max-w-3xl text-balance text-[clamp(1.75rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text"
          >
            Five modules for your CCTV: VMS, AI video analytics, camera health, assets and AMC
          </h2>
          <p className="description mt-4 max-w-2xl text-base md:text-lg">
            Every module runs on{" "}
            <Link href="/nebula-os" className="font-semibold text-blue hover:underline">
              Nebula OS
            </Link>
            , so you can start with one and add the others on the same platform.
          </p>
        </Reveal>

        <div className="mt-4">
          {homepageSolutions.map((solution, index) => (
            <Reveal key={solution.slug} delay={(index % 2) * 0.04}>
              <SolutionBlock solution={solution} index={index} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
