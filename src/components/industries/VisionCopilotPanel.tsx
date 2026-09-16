"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";
import type { IndustryPageRecord } from "@/lib/industries/types";

const ease = [0.22, 1, 0.36, 1] as const;
const THINKING_MS = 850;

/** Three bouncing dots — the classic "assistant is typing" indicator. */
function TypingDots() {
  return (
    <span className="inline-flex items-center gap-1" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-[rgba(126,211,255,0.85)]"
          animate={{ y: [0, -4, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
        />
      ))}
    </span>
  );
}

function CopilotAvatar() {
  return (
    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[rgba(25,184,255,0.18)]">
      <Search size={12} strokeWidth={2.4} className="text-[var(--industry-accent)]" aria-hidden />
    </span>
  );
}

/**
 * Owns the "thinking" -> "answered" timeline for one question. Remounted via a
 * `key` on `active` from the parent, so a fresh instance always starts in the
 * correct phase — no synchronous setState-in-effect needed to reset it.
 */
function CopilotAnswerSequence({
  page,
  reduceMotion,
}: {
  page: IndustryPageRecord;
  reduceMotion: boolean;
}) {
  const [phase, setPhase] = useState<"thinking" | "answered">(reduceMotion ? "answered" : "thinking");

  useEffect(() => {
    if (reduceMotion) return;
    const timer = setTimeout(() => setPhase("answered"), THINKING_MS);
    return () => clearTimeout(timer);
  }, [reduceMotion]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {phase === "thinking" ? (
        <motion.div
          key="thinking"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease }}
          className="mr-auto flex max-w-[88%] items-center gap-2.5 rounded-2xl rounded-tl-sm bg-white/10 px-4 py-3"
        >
          <CopilotAvatar />
          <span className="text-sm text-white/70">Vision Copilot is analysing</span>
          <TypingDots />
        </motion.div>
      ) : (
        <motion.div
          key="answer"
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease }}
          className="mr-auto max-w-[94%] rounded-2xl rounded-tl-sm bg-white/10 px-4 py-4 md:px-5"
        >
          <span className="mb-1 inline-flex items-center gap-1.5">
            <CopilotAvatar />
            <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[rgba(126,211,255,0.85)]">
              Vision Copilot
            </span>
          </span>
          <p className="mt-3 text-sm font-semibold text-white">Mapped context</p>
          <p className="mt-1.5 text-sm leading-relaxed text-white/75">
            {page.locationContext.hierarchyExample.map((level) => level.example).join(" → ")} · Camera
          </p>
          <p className="mt-4 text-sm font-semibold text-white">
            Suggested reading of available observations
          </p>
          <p className="mt-1.5 text-sm leading-relaxed text-white/75">{page.copilot.exampleAnswer}</p>
          <p className="mt-4 text-sm font-semibold text-white">Decision owner</p>
          <p className="mt-1.5 text-sm leading-relaxed text-white/75">
            {page.sceneIntelligence.decisionOwner}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function VisionCopilotPanel({
  page,
}: {
  page: IndustryPageRecord;
}) {
  const [active, setActive] = useState(0);
  const reduceMotion = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, amount: 0.4 });

  return (
    <div className="industry-copilot">
      <div>
        <p
          className="industry-kicker inline-flex items-center gap-2"
          style={{ color: "var(--industry-accent)" }}
        >
          <Search size={14} strokeWidth={2.4} aria-hidden />
          Vision Copilot
        </p>
        <h2 className="industry-h2" style={{ color: "#fff", maxWidth: "14ch" }}>
          {page.copilot.heading}
        </h2>
        <p className="industry-prose" style={{ color: "#b9c7d9" }}>
          {page.copilot.body}
        </p>
        <div className="mt-6 space-y-3">
          {page.copilot.prompts.map((prompt, index) => (
            <button
              key={prompt}
              type="button"
              className="industry-copilot__prompt"
              aria-pressed={active === index}
              onClick={() => setActive(index)}
            >
              <span className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(126,211,255,0.85)]">
                Example question {String(index + 1).padStart(2, "0")}
              </span>
              <span className="mt-2 block text-sm font-medium leading-relaxed text-white">
                {prompt}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div
        ref={containerRef}
        className="relative flex min-h-[320px] flex-col overflow-hidden rounded-[20px] border border-white/15 bg-white/[0.06] p-5 md:p-6"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[rgba(126,211,255,0.85)]">
          Illustrative example
        </p>

        <div className="mt-4 flex flex-1 flex-col justify-end gap-3">
          <motion.div
            key={`question-${active}`}
            initial={reduceMotion ? false : { opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, ease }}
            className="ml-auto max-w-[88%] rounded-2xl rounded-tr-sm bg-[rgba(25,184,255,0.18)] px-4 py-3"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[rgba(126,211,255,0.75)]">
              Question
            </p>
            <p className="mt-1 text-sm font-medium leading-relaxed text-white">
              {page.copilot.prompts[active]}
            </p>
          </motion.div>

          {inView ? (
            <CopilotAnswerSequence key={active} page={page} reduceMotion={Boolean(reduceMotion)} />
          ) : (
            <div className="mr-auto h-[96px] w-[88%] max-w-[88%]" aria-hidden />
          )}
        </div>
      </div>
    </div>
  );
}
