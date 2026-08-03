"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Play, X } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import {
  universalSolutionVideos,
  type UniversalVideoCard,
} from "@/lib/homepage";

const ease = [0.22, 1, 0.36, 1] as const;

function VideoCard({
  card,
  onPlay,
}: {
  card: UniversalVideoCard;
  onPlay: () => void;
}) {
  const reduce = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const rootRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

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
    if (!video) return;
    video.muted = true;

    if (reduce || !inView) {
      video.pause();
      return;
    }

    void video.play().catch(() => {
      // Autoplay can fail until interaction.
    });
  }, [inView, reduce, card.src]);

  return (
    <article
      ref={rootRef}
      className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-line bg-surface shadow-[0_12px_36px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:border-blue/30 hover:shadow-[0_18px_44px_rgba(43,140,255,0.12)]"
    >
      <div className="px-5 pb-3 pt-5">
        <h3 className="font-display text-lg font-semibold leading-snug text-text">
          {card.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-strong">
          {card.description}
        </p>
      </div>

      <div className="relative mx-4 mb-4 aspect-video overflow-hidden rounded-[14px] bg-[#0b1220]">
        <video
          ref={videoRef}
          src={card.src}
          poster={card.poster}
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/15" />

        <button
          type="button"
          onClick={onPlay}
          className="absolute inset-0 flex items-center justify-center"
          aria-label={`Play ${card.title}`}
        >
          <span className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/25 bg-black/45 text-white backdrop-blur-sm transition group-hover:scale-105 group-hover:bg-cyan group-hover:text-[#0c2238]">
            <Play size={18} fill="currentColor" className="ml-0.5" />
          </span>
        </button>
      </div>
    </article>
  );
}

function VideoModal({
  card,
  onClose,
}: {
  card: UniversalVideoCard;
  onClose: () => void;
}) {
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={card.title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 10, scale: 0.98 }}
        transition={{ duration: 0.28, ease }}
        className="relative w-full max-w-4xl overflow-hidden rounded-[20px] border border-white/10 bg-[#071018] shadow-[0_30px_80px_rgba(0,0,0,0.45)]"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
          <div>
            <p className="text-sm font-semibold text-white">{card.title}</p>
            <p className="mt-0.5 text-xs text-white/55">{card.description}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close video"
          >
            <X size={16} />
          </button>
        </div>
        <div className="relative aspect-video bg-black">
          <video
            src={card.src}
            poster={card.poster}
            controls
            autoPlay
            playsInline
            className="absolute inset-0 h-full w-full object-contain"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export function UniversalSolutionVideos() {
  const [active, setActive] = useState<UniversalVideoCard | null>(null);

  return (
    <section
      id="platform-videos"
      className="relative overflow-hidden bg-surface py-16 md:py-20"
    >
      <div className="container relative">
        <Reveal>
          <p className="eyebrow">Platform in action</p>
          <h2 className="display mt-2 max-w-3xl text-[clamp(1.85rem,4vw,2.75rem)] uppercase text-steel-gradient">
            End-to-end operations, shown clearly
          </h2>
          <p className="description mt-4 max-w-2xl text-base md:text-lg">
            Four views of the Orion Alerts platform — from live monitoring and AI alerts to
            investigations and estate operations.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {universalSolutionVideos.map((card, index) => (
            <Reveal key={card.id} delay={index * 0.06}>
              <VideoCard card={card} onPlay={() => setActive(card)} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active ? (
          <VideoModal card={active} onClose={() => setActive(null)} />
        ) : null}
      </AnimatePresence>
    </section>
  );
}
