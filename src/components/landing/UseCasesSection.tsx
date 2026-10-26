"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";
import { Reveal } from "@/components/Reveal";
import { aiUseCases, type UseCase } from "@/lib/homepage";

function UseCaseCard({
  useCase,
  active,
  playing,
}: {
  useCase: UseCase;
  active: boolean;
  /** Active and the carousel is on screen: only then is the clip fetched and played. */
  playing: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduce = useSafeReducedMotion();
  const canAutoplay = Boolean(useCase.previewSrc) && !reduce;

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !useCase.previewSrc) return;
    video.muted = true;
    if (!playing || reduce) {
      video.pause();
      return;
    }
    void video.play().catch(() => {
      // Autoplay may be blocked until interaction.
    });
  }, [playing, reduce, useCase.previewSrc]);

  return (
    <Link
      href={useCase.pageHref}
      className={`group relative block overflow-hidden rounded-[28px] bg-[#071525] transition duration-300 ${
        active
          ? "shadow-[0_28px_70px_-40px_rgba(12,34,56,0.6)] ring-1 ring-cyan/35"
          : "opacity-80 ring-1 ring-white/10 hover:opacity-100"
      }`}
    >
      <div className="relative aspect-[16/9] w-full">
        {canAutoplay ? (
          <video
            ref={videoRef}
            src={useCase.previewSrc}
            poster={useCase.poster}
            muted
            loop
            playsInline
            preload={playing ? "metadata" : "none"}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
        ) : (
          <Image
            src={useCase.poster}
            alt=""
            fill
            className="object-cover object-center"
            sizes="(max-width: 768px) 92vw, 64rem"
          />
        )}

        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/35 to-transparent px-5 pb-4 pt-16 md:px-7 md:pb-6">
          <h3 className="font-display text-[clamp(1.05rem,1.8vw,1.35rem)] font-semibold leading-snug tracking-[-0.02em] text-white">
            {useCase.title}
          </h3>
          <p className="mt-1 max-w-2xl text-[13px] leading-snug text-white/80 md:text-[0.95rem]">
            {useCase.description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export function UseCasesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  // The active card's clip used to start downloading (~1 MB) on page load even
  // though the carousel sits well below the fold; wait until it is near view.
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "200px 0px" },
    );
    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  const scrollToIndex = useCallback((next: number) => {
    const root = scrollerRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-usecase-card]"));
    const target = cards[next];
    if (!target) return;
    const left = target.offsetLeft - (root.clientWidth - target.clientWidth) / 2;
    root.scrollTo({
      left: Math.max(0, left),
      behavior: "smooth",
    });
    setIndex(next);
  }, []);

  const goNext = () => scrollToIndex(Math.min(index + 1, aiUseCases.length - 1));
  const goPrev = () => scrollToIndex(Math.max(index - 1, 0));

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const first = root.querySelector<HTMLElement>("[data-usecase-card]");
    if (first) {
      root.scrollLeft = first.offsetLeft - (root.clientWidth - first.clientWidth) / 2;
    }

    const onScroll = () => {
      const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-usecase-card]"));
      if (!cards.length) return;
      const rootRect = root.getBoundingClientRect();
      const centerX = rootRect.left + rootRect.width / 2;
      let nearest = 0;
      let best = Number.POSITIVE_INFINITY;
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.left + rect.width / 2;
        const dist = Math.abs(cardCenter - centerX);
        if (dist < best) {
          best = dist;
          nearest = i;
        }
      });
      setIndex(nearest);
    };

    root.addEventListener("scroll", onScroll, { passive: true });
    return () => root.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="ai-use-cases"
      aria-labelledby="use-cases-heading"
      className="relative overflow-hidden border-y border-white/15 bg-[#061018] pt-10 pb-16 md:pt-12 md:pb-24"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(48,227,255,0.08),transparent_45%),radial-gradient(ellipse_at_90%_100%,rgba(43,140,255,0.1),transparent_40%)]"
        aria-hidden
      />
      <div className="relative mx-auto w-[min(100%-2rem,var(--container))]">
        <Reveal>
          <div className="mx-auto max-w-5xl text-center">
            <p className="eyebrow mb-3 text-cyan/90">AI use cases</p>
            <h2
              id="use-cases-heading"
              className="text-balance text-[clamp(1.05rem,3.2vw,2.65rem)] font-semibold leading-[1.15] tracking-[-0.03em] text-white"
            >
              {aiUseCases.length} AI video analytics detections that run on your existing CCTV
            </h2>
            <p className="mx-auto mt-4 max-w-none md:whitespace-nowrap text-[clamp(0.8rem,1.6vw,1rem)] leading-relaxed text-white/65">
              Open a detection to see how it works, what affects its reliability and where it
              fits.
            </p>
          </div>
        </Reveal>

        <div className="mt-6 flex items-center justify-center gap-2">
          <button
            type="button"
            aria-label="Previous use case"
            onClick={goPrev}
            disabled={index <= 0}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowLeft size={18} strokeWidth={1.75} />
          </button>
          <button
            type="button"
            aria-label="Next use case"
            onClick={goNext}
            disabled={index >= aiUseCases.length - 1}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-35"
          >
            <ArrowRight size={18} strokeWidth={1.75} />
          </button>
        </div>
      </div>

      <div className="relative mt-8 min-w-0 md:mt-10">
        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth px-[max(1rem,calc((100%-min(90vw,64rem))/2))] pb-3 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {aiUseCases.map((useCase, i) => (
            <div
              key={useCase.slug}
              data-usecase-card
              className="w-[min(90vw,64rem)] shrink-0 snap-center"
            >
              <UseCaseCard useCase={useCase} active={i === index} playing={inView && i === index} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto mt-6 flex w-[min(100%-2rem,var(--container))] items-center gap-3">
        <p className="text-sm font-medium text-white/55">
          {String(index + 1).padStart(2, "0")} / {String(aiUseCases.length).padStart(2, "0")}
        </p>
        <div className="flex flex-1 justify-center" role="tablist" aria-label="Use case pages">
          {aiUseCases.map((item, i) => (
            // 24px hit area (WCAG 2.5.8 target size); the visible pill stays 6px tall.
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={i === index}
              aria-label={`Show ${item.title}`}
              onClick={() => scrollToIndex(i)}
              className="group flex h-6 min-w-6 items-center justify-center px-px"
            >
              <span
                aria-hidden
                className={`block h-1.5 rounded-full transition-all ${
                  i === index ? "w-8 bg-cyan" : "w-2.5 bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
        <span className="w-12 shrink-0" aria-hidden />
      </div>
    </section>
  );
}
