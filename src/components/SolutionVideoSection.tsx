"use client";

import type { CSSProperties, ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import {
  Activity,
  BellRing,
  CheckCircle2,
  LayoutGrid,
  Play,
  Radar,
  Search,
  ShieldCheck,
  X,
  Zap,
} from "lucide-react";
import { SolutionVideo } from "@/components/SolutionVideo";

const DEFAULT_OUTCOMES = [
  "Multi-site visibility from one command view",
  "Faster review with clearer incident context",
  "Operators stay focused on what matters",
];

export type PreviewKind = "livewall" | "alert" | "search" | "multisite";

export type WorkflowStep = {
  title: string;
  description: string;
  preview?: PreviewKind;
  videoSrc?: string;
};

const DEFAULT_WORKFLOW: WorkflowStep[] = [
  {
    title: "Live monitoring",
    description: "Unified video wall across sites",
    preview: "livewall",
  },
  {
    title: "AI alert",
    description: "High-signal events rise first",
    preview: "alert",
  },
  {
    title: "Smart search",
    description: "Find evidence in seconds",
    preview: "search",
  },
  {
    title: "Multi-site sync",
    description: "One operator workflow everywhere",
    preview: "multisite",
  },
];

const OUTCOME_CAPTIONS = [
  "Watch every site from one live command view",
  "See the alert with video context the moment it fires",
  "Jump straight to matching evidence clips",
  "Keep multi-site operations synchronized visually",
];

const OUTCOME_PREVIEW_FALLBACK: PreviewKind[] = [
  "livewall",
  "alert",
  "search",
  "multisite",
];

export type OutcomeItem = {
  title: string;
  description?: string;
  preview?: PreviewKind;
  videoSrc?: string;
};

function normalizeOutcomes(
  outcomes: Array<string | OutcomeItem>,
): Array<{
  title: string;
  description: string;
  preview: PreviewKind;
  videoSrc?: string;
}> {
  return outcomes.slice(0, 4).map((item, index) => {
    if (typeof item === "string") {
      return {
        title: item,
        description: OUTCOME_CAPTIONS[index % OUTCOME_CAPTIONS.length],
        preview: OUTCOME_PREVIEW_FALLBACK[index % OUTCOME_PREVIEW_FALLBACK.length],
      };
    }
    return {
      title: item.title,
      description:
        item.description ?? OUTCOME_CAPTIONS[index % OUTCOME_CAPTIONS.length],
      preview:
        item.preview ?? OUTCOME_PREVIEW_FALLBACK[index % OUTCOME_PREVIEW_FALLBACK.length],
      videoSrc: item.videoSrc,
    };
  });
}

const FEED_STILLS = [
  {
    src: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=900&q=80",
    label: "Cam 01 · Gate",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    label: "Cam 07 · Yard",
  },
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    label: "Cam 12 · Line",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    label: "Cam 18 · Lobby",
  },
];

const SEARCH_CLIPS = [
  {
    src: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=800&q=80",
    time: "14:02",
  },
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
    time: "14:11",
  },
  {
    src: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80",
    time: "14:27",
  },
];

const SITE_FEEDS = [
  {
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    site: "Pune Plant",
    status: "86 cams · Live",
  },
  {
    src: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    site: "Chennai DC",
    status: "42 cams · Live",
  },
  {
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
    site: "Ahmedabad Yard",
    status: "2 offline",
    warn: true,
  },
];

const outcomeIcons = [ShieldCheck, Radar, Zap, CheckCircle2];
const workflowIcons = [LayoutGrid, BellRing, Search, Activity];

type PreviewTarget =
  | { source: "workflow"; index: number }
  | { source: "outcome"; index: number }
  | null;

type SolutionVideoSectionProps = {
  label: string;
  src?: string;
  poster?: string;
  caption?: string;
  outcomes?: Array<string | OutcomeItem>;
  workflowSteps?: WorkflowStep[];
  gap?: string;
  sideWidth?: string;
  /** Wide intro video, then zoom out as side panels slide in */
  cinematicEntrance?: boolean;
};

function MiniFeedVideo({ src, poster }: { src: string; poster?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    video.muted = true;
    const play = async () => {
      try {
        await video.play();
      } catch {
        // Autoplay may be blocked.
      }
    };
    if (video.readyState >= 2) void play();
    else video.addEventListener("loadeddata", () => void play(), { once: true });
  }, [src]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}

function CameraFeed({
  label,
  image,
  videoSrc,
  poster,
  live = true,
  alert = false,
  timestamp = "12:41:08",
  box,
}: {
  label: string;
  image?: string;
  videoSrc?: string;
  poster?: string;
  live?: boolean;
  alert?: boolean;
  timestamp?: string;
  box?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[12px] bg-[#071018] ring-1 ${
        alert ? "ring-alert/50" : "ring-white/10"
      }`}
    >
      <div className="relative aspect-video">
        {videoSrc ? (
          <MiniFeedVideo src={videoSrc} poster={poster ?? image} />
        ) : image ? (
          <Image src={image} alt={label} fill sizes="280px" className="object-cover" />
        ) : null}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-black/25" />
        <div className="pointer-events-none absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(255,255,255,0.04)_2px,rgba(255,255,255,0.04)_4px)]" />

        {box ? (
          <div className="pointer-events-none absolute left-[18%] top-[22%] h-[42%] w-[28%] rounded-[4px] border-2 border-alert/90 shadow-[0_0_18px_rgba(244,63,94,0.35)]" />
        ) : null}

        <div className="absolute left-2 top-2 flex items-center gap-1.5">
          {live ? (
            <span className="inline-flex items-center gap-1 rounded bg-black/55 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white backdrop-blur-sm">
              <span
                className={`h-1.5 w-1.5 animate-pulse rounded-full ${alert ? "bg-alert" : "bg-cyan"}`}
              />
              Live
            </span>
          ) : (
            <span className="rounded bg-black/55 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-white/80 backdrop-blur-sm">
              Clip
            </span>
          )}
        </div>
        <div className="absolute right-2 top-2 rounded bg-black/50 px-1.5 py-0.5 font-mono text-[9px] text-white/75 backdrop-blur-sm">
          {timestamp}
        </div>
        <div className="absolute bottom-2 left-2 right-2 flex items-end justify-between gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-white/90">
            {label}
          </p>
          {alert ? (
            <span className="rounded bg-alert/90 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-[0.1em] text-white">
              Alert
            </span>
          ) : null}
        </div>
      </div>
    </div>
  );
}

function PreviewMock({
  kind,
  title,
  caption,
  videoSrc,
  poster,
}: {
  kind: PreviewKind;
  title: string;
  caption: string;
  videoSrc?: string;
  poster?: string;
}) {
  let body: ReactNode;

  if (kind === "livewall") {
    body = (
      <div className="grid h-full grid-cols-2 gap-2">
        <CameraFeed
          label={FEED_STILLS[0].label}
          videoSrc={videoSrc}
          poster={poster}
          image={FEED_STILLS[0].src}
        />
        <CameraFeed label={FEED_STILLS[1].label} image={FEED_STILLS[1].src} />
        <CameraFeed label={FEED_STILLS[2].label} image={FEED_STILLS[2].src} timestamp="12:41:07" />
        <CameraFeed label={FEED_STILLS[3].label} image={FEED_STILLS[3].src} timestamp="12:41:09" />
      </div>
    );
  } else if (kind === "alert") {
    body = (
      <div className="grid h-full gap-2 md:grid-cols-[1.4fr_0.9fr]">
        <CameraFeed
          label="Cam 14 · Restricted zone"
          videoSrc={videoSrc}
          poster={poster}
          image={FEED_STILLS[2].src}
          alert
          box
          timestamp="12:41:14"
        />
        <div className="flex flex-col gap-2">
          <CameraFeed
            label="Zoom · Subject track"
            image={FEED_STILLS[0].src}
            alert
            timestamp="12:41:14"
          />
          <div className="rounded-[12px] border border-alert/35 bg-alert/10 px-3 py-2.5 text-white">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-alert">
              Priority alert
            </p>
            <p className="mt-1 text-sm font-semibold">Unauthorized entry detected</p>
            <p className="mt-1 text-[11px] text-white/65">Plant A · 98% confidence · Now</p>
          </div>
        </div>
      </div>
    );
  } else if (kind === "search") {
    body = (
      <div className="flex h-full flex-col gap-2">
        <div className="flex items-center gap-2 rounded-full border border-cyan/30 bg-black/35 px-3 py-2 text-xs text-white/80 backdrop-blur-sm">
          <Search size={13} className="text-cyan" />
          blue truck · dock · yesterday 4pm
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-3 gap-2">
          {SEARCH_CLIPS.map((clip, index) => (
            <div key={clip.time} className="relative">
              <CameraFeed
                label={`Match ${index + 1}`}
                image={clip.src}
                videoSrc={index === 0 ? videoSrc : undefined}
                poster={poster}
                live={false}
                timestamp={clip.time}
              />
              <span className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-black/55 text-white backdrop-blur-sm">
                  <Play size={14} fill="currentColor" />
                </span>
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    body = (
      <div className="grid h-full grid-cols-3 gap-2">
        {SITE_FEEDS.map((site, index) => (
          <div key={site.site} className="relative flex flex-col gap-1.5">
            <CameraFeed
              label={site.site}
              image={site.src}
              videoSrc={index === 0 ? videoSrc : undefined}
              poster={poster}
              timestamp="12:41:22"
            />
            <div className="flex items-center justify-between px-0.5">
              <p className="text-[10px] text-white/70">{site.status}</p>
              <span
                className={`h-2 w-2 rounded-full ${site.warn ? "bg-amber-400" : "bg-emerald-400"}`}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#070d18] text-white shadow-[0_18px_50px_rgba(15,23,42,0.35)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-cyan">
            Video preview
          </p>
          <p className="truncate text-sm font-semibold">{title}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-cyan/15 px-2.5 py-1 text-[10px] font-semibold text-cyan">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
          LIVE
        </span>
      </div>
      <div className="min-h-0 flex-1 p-3">{body}</div>
      <p className="border-t border-white/10 px-4 py-2 text-[11px] text-white/55">{caption}</p>
    </div>
  );
}

function OutcomeClipPreview({
  title,
  caption,
  videoSrc,
}: {
  title: string;
  caption: string;
  videoSrc: string;
}) {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-[16px] border border-white/10 bg-[#070d18] text-white shadow-[0_18px_50px_rgba(15,23,42,0.35)]">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-2.5">
        <div className="min-w-0">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-emerald-300">
            Outcome clip
          </p>
          <p className="truncate text-sm font-semibold">{title}</p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-400/15 px-2.5 py-1 text-[10px] font-semibold text-emerald-300">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" />
          RESULT
        </span>
      </div>
      <div className="relative min-h-0 flex-1 bg-black">
        <MiniFeedVideo key={videoSrc} src={videoSrc} />
      </div>
      <p className="border-t border-white/10 px-4 py-2 text-[11px] text-white/55">{caption}</p>
    </div>
  );
}

export function SolutionVideoSection({
  label,
  src,
  poster,
  caption,
  outcomes = DEFAULT_OUTCOMES,
  workflowSteps = DEFAULT_WORKFLOW,
  gap = "1.5rem",
  sideWidth = "16.5rem",
  cinematicEntrance = false,
}: SolutionVideoSectionProps) {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const enteredView = useInView(sectionRef, { once: true, amount: 0.35 });
  const sectionVisible = useInView(sectionRef, { once: false, amount: 0.35 });
  const useCinematic = cinematicEntrance && !reduce;
  const [expanded, setExpanded] = useState(useCinematic);

  useEffect(() => {
    if (!useCinematic) {
      setExpanded(false);
      return;
    }
    if (!enteredView) return;
    const timer = window.setTimeout(() => setExpanded(false), 4000);
    return () => window.clearTimeout(timer);
  }, [enteredView, useCinematic]);

  const outcomeItems = normalizeOutcomes(outcomes);
  const steps = workflowSteps.slice(0, 4).map((step, index) => ({
    ...step,
    preview: step.preview ?? DEFAULT_WORKFLOW[index % DEFAULT_WORKFLOW.length].preview,
  }));

  const [activeStep, setActiveStep] = useState(0);
  const [preview, setPreview] = useState<PreviewTarget>(null);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (reduce || !autoPlay || preview || steps.length < 2 || expanded) return;
    const timer = window.setInterval(() => {
      setActiveStep((value) => (value + 1) % steps.length);
    }, 2600);
    return () => window.clearInterval(timer);
  }, [autoPlay, expanded, preview, reduce, steps.length]);

  const openWorkflowPreview = (index: number) => {
    setActiveStep(index);
    setAutoPlay(false);
    setPreview({ source: "workflow", index });
  };

  const openOutcomePreview = (index: number) => {
    setAutoPlay(false);
    setPreview({ source: "outcome", index });
  };

  const closePreview = () => {
    setPreview(null);
    setAutoPlay(true);
  };

  const activePreview =
    preview == null
      ? null
      : preview.source === "workflow"
        ? {
            source: "workflow" as const,
            kind: steps[preview.index]?.preview ?? "livewall",
            title: steps[preview.index]?.title ?? "Preview",
            caption: steps[preview.index]?.description ?? "",
            videoSrc: steps[preview.index]?.videoSrc ?? src,
          }
        : {
            source: "outcome" as const,
            kind: outcomeItems[preview.index]?.preview ?? "livewall",
            title: outcomeItems[preview.index]?.title ?? "Outcome",
            caption: outcomeItems[preview.index]?.description ?? "",
            videoSrc: outcomeItems[preview.index]?.videoSrc,
          };

  const panelsReady = !expanded;
  const showWorkflow = !cinematicEntrance;
  const cinematicEase = [0.22, 1, 0.36, 1] as const;
  const [isLg, setIsLg] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const sync = () => setIsLg(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const outcomesList = (
    <>
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue">
        Outcomes
      </p>
      <h3 className="display mt-2 text-[1.35rem] normal-case tracking-[-0.03em] text-text">
        What operators notice first
      </h3>
      <p className="mt-2 text-xs text-muted">
        Tap an outcome to open its dedicated video clip.
      </p>
      <ul className="mt-4 space-y-3">
        {outcomeItems.map((outcome, index) => {
          const Icon = outcomeIcons[index % outcomeIcons.length];
          const isActive =
            preview?.source === "outcome" && preview.index === index;
          return (
            <li key={outcome.title}>
              <button
                type="button"
                onClick={() => openOutcomePreview(index)}
                className={`group flex w-full gap-3 rounded-[16px] border px-3 py-3 text-left transition duration-300 hover:-translate-y-0.5 hover:border-blue/35 hover:shadow-[0_12px_28px_-18px_rgba(43,140,255,0.55)] ${
                  isActive
                    ? "border-blue/35 bg-[linear-gradient(135deg,rgba(43,140,255,0.1),rgba(48,227,255,0.08))]"
                    : "border-line bg-bg"
                }`}
              >
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#2b8cff,#30e3ff)] text-white shadow-[0_8px_18px_-10px_rgba(43,140,255,0.9)]">
                  <Icon size={16} strokeWidth={2.4} />
                </span>
                <span>
                  <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-blue/70">
                    {String(index + 1).padStart(2, "0")} · Video preview
                  </span>
                  <span className="mt-0.5 block text-sm font-semibold leading-snug text-text">
                    {outcome.title}
                  </span>
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );

  const outcomesPanel = (
    <motion.div
      className="rounded-[22px] border border-line bg-white/90 p-4 shadow-[0_18px_44px_-28px_rgba(43,140,255,0.45)] backdrop-blur-sm md:p-5"
      initial={false}
      animate={
        panelsReady
          ? { opacity: 1, x: 0 }
          : { opacity: 0, x: 72 }
      }
      transition={{
        duration: 0.75,
        ease: cinematicEase,
      }}
    >
      {outcomesList}
    </motion.div>
  );

  const videoStage = (
    <div className="solution-video-stage min-w-0 w-full">
      <div className="relative overflow-hidden rounded-[18px] border border-line bg-[#0b1220] shadow-[0_22px_60px_rgba(15,23,42,0.16)]">
        <div className="relative aspect-video">
          <AnimatePresence mode="wait" initial={false}>
            {activePreview ? (
              <motion.div
                key={`${preview?.source}-${preview?.index}-${activePreview.videoSrc ?? "none"}`}
                className="absolute inset-0 p-2.5 md:p-3"
                initial={reduce ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: cinematicEase }}
              >
                {activePreview.source === "outcome" && activePreview.videoSrc ? (
                  <OutcomeClipPreview
                    title={activePreview.title}
                    caption={activePreview.caption}
                    videoSrc={activePreview.videoSrc}
                  />
                ) : (
                  <PreviewMock
                    kind={activePreview.kind}
                    title={activePreview.title}
                    caption={activePreview.caption}
                    videoSrc={activePreview.videoSrc}
                    poster={poster}
                  />
                )}
                <button
                  type="button"
                  onClick={closePreview}
                  className="absolute right-4 top-4 z-10 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm transition hover:bg-black/70"
                >
                  <Play size={12} />
                  Back to video
                  <X size={12} className="opacity-70" />
                </button>
              </motion.div>
            ) : (
              <motion.div
                key="video"
                className="absolute inset-0"
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={reduce ? undefined : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {src ? (
                  <SolutionVideo
                    src={src}
                    label={label}
                    poster={poster}
                    fit="contain"
                    playing={sectionVisible && !activePreview}
                  />
                ) : (
                  <div className="flex h-full items-center justify-center bg-gradient-to-br from-[#15233a] to-[#0d1626] px-6 text-center">
                    <div>
                      <p className="display text-lg text-white md:text-xl">{label}</p>
                      {caption ? (
                        <p className="mt-2 max-w-md text-sm text-white/65">{caption}</p>
                      ) : null}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      {!activePreview && caption && src ? (
        <p className="mt-3 text-center text-sm text-muted">{caption}</p>
      ) : null}
      {!activePreview ? (
        <p className="mt-3 text-center text-xs text-muted lg:hidden">
          Tap an outcome to open a live video-style preview.
        </p>
      ) : null}
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="solution-video-section relative overflow-hidden pb-14 pt-16 md:pb-20 md:pt-24"
      style={
        {
          "--video-section-gap": gap,
          "--video-side-width": sideWidth,
        } as CSSProperties
      }
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_18%_50%,rgba(43,140,255,0.16),transparent_44%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_82%_50%,rgba(48,227,255,0.14),transparent_44%)]" />
        <div className="absolute inset-0 grid-texture opacity-35" />
      </div>

      <div className="container relative z-10">
        {cinematicEntrance ? (
          <div className="flex flex-col lg:flex-row lg:items-stretch">
            <motion.aside
              className="order-2 mt-6 shrink-0 overflow-hidden lg:order-1 lg:mt-0"
              initial={false}
              animate={
                isLg
                  ? {
                      width: expanded ? 0 : 300,
                      opacity: expanded ? 0 : 1,
                      marginRight: expanded ? 0 : 28,
                    }
                  : { width: "100%", opacity: 1, marginRight: 0 }
              }
              transition={{ duration: 1.15, ease: cinematicEase }}
            >
              <div className={isLg ? "w-[300px]" : "w-full"}>
                <div className="rounded-[22px] border border-line bg-white/90 p-4 shadow-[0_18px_44px_-28px_rgba(43,140,255,0.45)] backdrop-blur-sm md:p-5">
                  {outcomesList}
                </div>
              </div>
            </motion.aside>

            <div className="order-1 min-w-0 flex-1 lg:order-2">{videoStage}</div>
          </div>
        ) : (
          <div className="solution-video-layout grid items-center">
            {showWorkflow ? (
              <aside className="hidden lg:block">
                <motion.div
                  className="rounded-[22px] border border-line bg-white/90 p-4 shadow-[0_18px_44px_-28px_rgba(43,140,255,0.4)] backdrop-blur-sm"
                  initial={reduce ? false : { opacity: 0, x: -20 }}
                  animate={
                    enteredView || reduce
                      ? { opacity: 1, x: 0 }
                      : { opacity: 0, x: -20 }
                  }
                  transition={{
                    duration: 0.7,
                    delay: reduce ? 0 : 0.35,
                    ease: cinematicEase,
                  }}
                >
                  <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-blue">
                    Workflow
                  </p>
                  <h3 className="display mt-2 text-[1.25rem] normal-case tracking-[-0.03em] text-text">
                    How operators use it
                  </h3>
                  <p className="mt-2 text-xs text-muted">
                    Tap a step to open a live video preview.
                  </p>

                  <ol className="relative mt-5 space-y-3">
                    <span
                      aria-hidden
                      className="absolute bottom-3 left-[1.15rem] top-3 w-px bg-gradient-to-b from-blue/40 via-cyan/30 to-transparent"
                    />
                    {steps.map((step, index) => {
                      const Icon = workflowIcons[index % workflowIcons.length];
                      const isActive =
                        preview?.source === "workflow"
                          ? preview.index === index
                          : preview == null && activeStep === index;
                      return (
                        <li key={step.title}>
                          <button
                            type="button"
                            onClick={() => openWorkflowPreview(index)}
                            className={`relative flex w-full items-start gap-3 rounded-[16px] border px-3 py-3 text-left transition duration-300 ${
                              isActive
                                ? "border-blue/35 bg-[linear-gradient(135deg,rgba(43,140,255,0.1),rgba(48,227,255,0.08))] shadow-[0_12px_28px_-18px_rgba(43,140,255,0.55)]"
                                : "border-transparent bg-bg/70 hover:border-line"
                            }`}
                          >
                            <span
                              className={`relative z-10 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition ${
                                isActive
                                  ? "bg-[linear-gradient(135deg,#2b8cff,#30e3ff)] text-white"
                                  : "bg-white text-blue ring-1 ring-line"
                              }`}
                            >
                              <Icon size={15} strokeWidth={2.35} />
                            </span>
                            <span>
                              <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-blue/70">
                                Step {String(index + 1).padStart(2, "0")}
                              </span>
                              <span className="mt-0.5 block text-sm font-semibold text-text">
                                {step.title}
                              </span>
                              <span
                                className={`mt-1 block text-xs leading-relaxed transition ${
                                  isActive ? "text-muted-strong" : "text-muted"
                                }`}
                              >
                                {step.description}
                              </span>
                            </span>
                          </button>
                        </li>
                      );
                    })}
                  </ol>
                </motion.div>
              </aside>
            ) : null}

            {videoStage}

            <aside className="mt-6 lg:mt-0">{outcomesPanel}</aside>
          </div>
        )}

        {showWorkflow ? (
          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:hidden">
            {steps.map((step, index) => {
              const Icon = workflowIcons[index % workflowIcons.length];
              const isActive =
                preview?.source === "workflow" && preview.index === index;
              return (
                <button
                  key={step.title}
                  type="button"
                  onClick={() => openWorkflowPreview(index)}
                  className={`rounded-[16px] border px-4 py-3 text-left transition ${
                    isActive
                      ? "border-blue/35 bg-[linear-gradient(135deg,rgba(43,140,255,0.1),rgba(48,227,255,0.08))]"
                      : "border-line bg-white/90"
                  }`}
                >
                  <div className="flex items-center gap-2 text-blue">
                    <Icon size={15} />
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em]">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="mt-1 text-sm font-semibold text-text">{step.title}</p>
                  <p className="mt-1 text-xs text-muted">{step.description}</p>
                </button>
              );
            })}
          </div>
        ) : null}
      </div>
    </section>
  );
}
