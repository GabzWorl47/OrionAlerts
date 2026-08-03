"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { aiUseCases, type UseCase } from "@/lib/homepage";

function UseCaseTile({ useCase }: { useCase: UseCase }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin: "80px", threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !useCase.previewSrc) return;
    video.muted = true;
    if (!inView) {
      video.pause();
      return;
    }
    void video.play().catch(() => {});
  }, [inView, useCase.previewSrc]);

  return (
    <article
      ref={rootRef}
      className="group flex h-full min-w-[260px] flex-col overflow-hidden rounded-[18px] border border-line bg-surface shadow-[0_10px_28px_rgba(15,23,42,0.05)] transition duration-300 hover:-translate-y-0.5 hover:border-blue/30 focus-within:border-blue/40 sm:min-w-0"
    >
      <div className="relative aspect-video overflow-hidden bg-[#0b1220]">
        {useCase.previewSrc ? (
          <video
            ref={videoRef}
            src={useCase.previewSrc}
            poster={useCase.poster}
            muted
            loop
            playsInline
            preload="metadata"
            className="absolute inset-0 h-full w-full object-cover"
          />
        ) : (
          <Image
            src={useCase.poster}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 80vw, 25vw"
          />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10" />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="font-display text-base font-semibold leading-snug text-text">
          {useCase.title}
        </h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-muted-strong">
          {useCase.description}
        </p>
        <Link
          href={useCase.href}
          className="mt-4 inline-flex min-h-11 items-center gap-1 self-start text-sm font-semibold text-blue transition hover:gap-2"
        >
          View Details
          <ArrowUpRight size={14} />
        </Link>
      </div>
    </article>
  );
}

export function UseCasesSection() {
  return (
    <section
      id="ai-use-cases"
      aria-labelledby="use-cases-heading"
      className="relative bg-surface py-16 md:py-24"
    >
      <div className="container">
        <Reveal>
          <p className="eyebrow">AI catalogue</p>
          <h2
            id="use-cases-heading"
            className="display mt-2 max-w-3xl text-[clamp(1.85rem,4vw,2.75rem)] uppercase text-steel-gradient"
          >
            AI Use Cases Built for Real-World Operations
          </h2>
          <p className="description mt-4 max-w-2xl text-base md:text-lg">
            Detection packs for safety, security, and infrastructure awareness — ready to enable per
            camera and site.
          </p>
        </Reveal>

        <div className="mt-10 flex gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-2 md:overflow-visible lg:grid-cols-3 xl:grid-cols-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {aiUseCases.map((useCase, index) => (
            <Reveal key={useCase.slug} delay={(index % 4) * 0.04} className="snap-start">
              <UseCaseTile useCase={useCase} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
