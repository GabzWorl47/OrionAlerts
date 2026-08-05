"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { aiUseCases, type UseCase } from "@/lib/homepage";

function UseCaseCard({ useCase, active }: { useCase: UseCase; active: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !useCase.previewSrc) return;
    video.muted = true;
    if (!active) {
      video.pause();
      return;
    }
    void video.play().catch(() => {
      // Autoplay may be blocked until interaction.
    });
  }, [active, useCase.previewSrc]);

  return (
    <Link
      href={useCase.href}
      className="group flex h-full w-full flex-col overflow-hidden rounded-[28px] bg-blue text-white transition hover:bg-[#0e2740]"
    >
      <div className="flex items-start gap-3 px-7 pt-7 md:gap-4 md:px-9 md:pt-9">
        <span className="mt-1 inline-flex shrink-0 text-cyan">
          <Sparkles size={22} strokeWidth={1.6} />
        </span>
        <h3 className="font-display text-[clamp(1.35rem,2.4vw,1.85rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-white">
          {useCase.title}
        </h3>
      </div>

      <div className="relative mx-5 mb-0 mt-6 flex-1 overflow-hidden rounded-t-[18px] bg-ink-deep md:mx-7 md:mt-8">
        <div className="relative aspect-[16/10] w-full md:aspect-[16/9]">
          {useCase.previewSrc ? (
            <video
              ref={videoRef}
              src={useCase.previewSrc}
              poster={useCase.poster}
              muted
              loop
              playsInline
              preload="metadata"
              className="absolute inset-0 h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.02]"
            />
          ) : (
            <Image
              src={useCase.poster}
              alt=""
              fill
              className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
              sizes="(max-width: 768px) 92vw, 70vw"
            />
          )}
        </div>
      </div>
    </Link>
  );
}

export function UseCasesSection() {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollToIndex = useCallback((next: number) => {
    const root = scrollerRef.current;
    if (!root) return;
    const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-usecase-card]"));
    const target = cards[next];
    if (!target) return;
    root.scrollTo({
      left: target.offsetLeft,
      behavior: "smooth",
    });
    setIndex(next);
  }, []);

  const goNext = () => scrollToIndex(Math.min(index + 1, aiUseCases.length - 1));
  const goPrev = () => scrollToIndex(Math.max(index - 1, 0));

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root) return;

    const onScroll = () => {
      const cards = Array.from(root.querySelectorAll<HTMLElement>("[data-usecase-card]"));
      if (!cards.length) return;
      const rootLeft = root.getBoundingClientRect().left;
      let nearest = 0;
      let best = Number.POSITIVE_INFINITY;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.getBoundingClientRect().left - rootLeft);
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
      className="relative overflow-hidden bg-bg py-16 md:py-24"
    >
      <div className="container">
        <Reveal>
          <h2
            id="use-cases-heading"
            className="mx-auto max-w-4xl text-center text-[clamp(2rem,4.5vw,3.35rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-text"
          >
            Proactive physical security, powered by AI
          </h2>
        </Reveal>
      </div>

      <div className="relative mt-10 min-w-0 w-full md:mt-14">
        <div
          ref={scrollerRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-2 pt-1 [-ms-overflow-style:none] [scrollbar-width:none] snap-x snap-mandatory [&::-webkit-scrollbar]:hidden"
        >
          {aiUseCases.map((useCase, i) => (
            <div
              key={useCase.slug}
              data-usecase-card
              className={`w-[min(92vw,42rem)] shrink-0 snap-start md:w-[min(78%,48rem)] lg:w-[min(72%,52rem)] ${
                i === 0 ? "ml-4 sm:ml-5" : ""
              }`}
            >
              <UseCaseCard useCase={useCase} active={i === index} />
            </div>
          ))}
          <div className="w-4 shrink-0 sm:w-8" aria-hidden />
        </div>

        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-bg to-transparent md:w-24" />

        <div className="absolute right-4 top-1/2 z-10 flex -translate-y-1/2 flex-col gap-3 md:right-8">
          {index > 0 ? (
            <button
              type="button"
              aria-label="Previous use case"
              onClick={goPrev}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-text shadow-[0_10px_28px_rgba(12,34,56,0.16)] transition hover:scale-105"
            >
              <ArrowLeft size={18} strokeWidth={1.75} />
            </button>
          ) : null}
          {index < aiUseCases.length - 1 ? (
            <button
              type="button"
              aria-label="Next use case"
              onClick={goNext}
              className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-white text-text shadow-[0_10px_28px_rgba(12,34,56,0.16)] transition hover:scale-105"
            >
              <ArrowRight size={18} strokeWidth={1.75} />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}
