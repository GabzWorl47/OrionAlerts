"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { aiUseCases, type UseCase } from "@/lib/homepage";

const ease = [0.22, 1, 0.36, 1] as const;
const AUTO_ADVANCE_MS = 8000;

function FeaturedVideo({
  useCase,
  playing,
}: {
  useCase: UseCase;
  playing: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !useCase.previewSrc) return;
    video.muted = true;
    if (!playing) {
      video.pause();
      return;
    }
    void video.play().catch(() => {
      // Autoplay may be blocked until interaction.
    });
  }, [playing, useCase.previewSrc, useCase.slug]);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#071018]">
      {useCase.previewSrc ? (
        <video
          key={useCase.slug}
          ref={videoRef}
          src={useCase.previewSrc}
          poster={useCase.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      ) : (
        <Image
          src={useCase.poster}
          alt=""
          fill
          className="object-cover object-center"
          sizes="(max-width: 1024px) 100vw, 55vw"
        />
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#071018]/90 via-[#071018]/25 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-6 lg:p-7">
        <div className="min-w-0 max-w-lg">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-cyan/90">
            Preview
          </p>
          <h3 className="mt-1.5 font-display text-[clamp(1.2rem,2vw,1.55rem)] font-semibold leading-snug tracking-[-0.02em] text-white">
            {useCase.title}
          </h3>
          {useCase.description ? (
            <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-white/65">
              {useCase.description}
            </p>
          ) : null}
        </div>

        <Link
          href={useCase.href}
          className="pointer-events-auto inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-semibold text-white backdrop-blur-sm transition hover:border-white/35 hover:bg-white/15"
        >
          Solution
          <ArrowUpRight size={13} strokeWidth={2} />
        </Link>
      </div>
    </div>
  );
}

export function UseCasesSection() {
  const reduce = useReducedMotion();
  const [activeSlug, setActiveSlug] = useState(aiUseCases[0]?.slug ?? "");
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const active =
    aiUseCases.find((item) => item.slug === activeSlug) ?? aiUseCases[0];
  const activeIndex = Math.max(
    0,
    aiUseCases.findIndex((item) => item.slug === active?.slug),
  );

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const root = listRef.current;
    if (!root) return;
    const row = root.querySelector<HTMLElement>(`[data-usecase="${activeSlug}"]`);
    row?.scrollIntoView({ block: "nearest", behavior: reduce ? "auto" : "smooth" });
  }, [activeSlug, reduce]);

  useEffect(() => {
    if (!visible || reduce || aiUseCases.length < 2) return;
    const id = window.setInterval(() => {
      setActiveSlug((current) => {
        const i = aiUseCases.findIndex((item) => item.slug === current);
        const next = (i + 1) % aiUseCases.length;
        return aiUseCases[next]?.slug ?? current;
      });
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(id);
  }, [visible, reduce, activeSlug]);

  if (!active) return null;

  return (
    <section
      ref={sectionRef}
      id="ai-use-cases"
      aria-labelledby="use-cases-heading"
      className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20"
    >
      {/* Full-bleed atmosphere so the sides never feel empty */}
      <div className="absolute inset-0 bg-[#eef3f7]" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_12%_20%,rgba(126,200,255,0.22),transparent_42%),radial-gradient(ellipse_at_88%_80%,rgba(12,34,56,0.07),transparent_48%)]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(12,34,56,0.12)] to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[rgba(12,34,56,0.12)] to-transparent"
        aria-hidden
      />

      <div className="relative mx-auto w-[min(100%-2.5rem,84rem)]">
        <Reveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between md:gap-10">
            <div className="max-w-xl">
              <p className="eyebrow mb-3">AI use cases</p>
              <h2
                id="use-cases-heading"
                className="text-[clamp(1.7rem,3.4vw,2.45rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-text"
              >
                Proactive physical security, powered by AI
              </h2>
              <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-muted-strong">
                Select a detection to preview how Orion surfaces the event — then open the
                related solution.
              </p>
            </div>

            <div className="flex items-center gap-3 md:pb-1">
              <span className="font-mono text-sm tabular-nums text-muted">
                <span className="font-semibold text-text">
                  {String(activeIndex + 1).padStart(2, "0")}
                </span>
                <span className="mx-1.5 text-line-strong">—</span>
                {String(aiUseCases.length).padStart(2, "0")}
              </span>
              <div className="h-px w-16 bg-[rgba(12,34,56,0.15)] sm:w-24" aria-hidden />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.06}>
          <div className="mt-8 overflow-hidden rounded-[22px] border border-[rgba(12,34,56,0.1)] bg-white shadow-[0_24px_60px_-40px_rgba(12,34,56,0.35)] md:mt-9">
            <div className="grid lg:grid-cols-[17.5rem_minmax(0,1fr)] xl:grid-cols-[18.5rem_minmax(0,1fr)]">
              {/* Elegant index */}
              <aside className="flex flex-col border-b border-line bg-[#f6f9fb] lg:border-b-0 lg:border-r">
                <div className="px-4 pt-4 pb-2 md:px-5">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
                      Library
                    </p>
                    <div className="h-[2px] w-12 overflow-hidden rounded-full bg-[rgba(12,34,56,0.08)]">
                      <motion.div
                        key={`${active.slug}-${visible}`}
                        className="h-full rounded-full bg-blue"
                        initial={{ width: "0%" }}
                        animate={{ width: visible && !reduce ? "100%" : "0%" }}
                        transition={
                          reduce || !visible
                            ? { duration: 0 }
                            : { duration: AUTO_ADVANCE_MS / 1000, ease: "linear" }
                        }
                      />
                    </div>
                  </div>
                </div>

                {/* Mobile */}
                <div
                  className="flex gap-2 overflow-x-auto px-4 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:hidden [&::-webkit-scrollbar]:hidden"
                  role="tablist"
                  aria-label="AI use cases"
                >
                  {aiUseCases.map((useCase, i) => {
                    const selected = useCase.slug === active.slug;
                    return (
                      <button
                        key={useCase.slug}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        onClick={() => setActiveSlug(useCase.slug)}
                        className={`shrink-0 rounded-full px-3.5 py-2 text-xs font-semibold transition ${
                          selected
                            ? "bg-blue text-white"
                            : "bg-white text-muted-strong ring-1 ring-line hover:text-text"
                        }`}
                      >
                        {String(i + 1).padStart(2, "0")} · {useCase.title}
                      </button>
                    );
                  })}
                </div>

                {/* Desktop index list */}
                <div
                  ref={listRef}
                  role="tablist"
                  aria-label="AI use cases"
                  className="hidden max-h-[28rem] flex-1 overflow-y-auto overscroll-contain px-2 pb-3 lg:block xl:max-h-none"
                >
                  {aiUseCases.map((useCase, i) => {
                    const selected = useCase.slug === active.slug;
                    return (
                      <button
                        key={useCase.slug}
                        type="button"
                        role="tab"
                        aria-selected={selected}
                        data-usecase={useCase.slug}
                        onClick={() => setActiveSlug(useCase.slug)}
                        className={`group flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition ${
                          selected ? "bg-white shadow-[0_1px_0_rgba(12,34,56,0.06)]" : "hover:bg-white/70"
                        }`}
                      >
                        <span
                          className={`w-5 shrink-0 font-mono text-[11px] tabular-nums transition ${
                            selected ? "font-semibold text-blue" : "text-caption"
                          }`}
                        >
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span
                          className={`min-w-0 flex-1 truncate text-[13.5px] leading-snug transition ${
                            selected
                              ? "font-semibold text-text"
                              : "font-medium text-muted-strong group-hover:text-text"
                          }`}
                        >
                          {useCase.title}
                        </span>
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full transition ${
                            selected ? "bg-cyan" : "bg-transparent"
                          }`}
                          aria-hidden
                        />
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* Cinema preview — aspect locks the overall size */}
              <div
                role="tabpanel"
                aria-label={active.title}
                className="relative aspect-[16/10] min-h-[16rem] w-full sm:min-h-[18rem]"
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={active.slug}
                    initial={reduce ? false : { opacity: 0.4 }}
                    animate={{ opacity: 1 }}
                    exit={reduce ? undefined : { opacity: 0 }}
                    transition={{ duration: 0.3, ease }}
                    className="absolute inset-0"
                  >
                    <FeaturedVideo useCase={active} playing={visible && !reduce} />
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
