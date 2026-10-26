"use client";

import { AnimatePresence, m } from "framer-motion";
import { X } from "lucide-react";
import { BOOK_DEMO_INTRO } from "@/components/BookDemoPanel";
import { LeadForm } from "@/components/LeadForm";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

/**
 * The Book a Demo dialog (lead form + reCAPTCHA). Loaded on demand by
 * `BookDemoModalProvider` so the form code stays out of the shared bundle.
 */
export function BookDemoDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const reduce = useSafeReducedMotion();

  return (
    <AnimatePresence>
      {open ? (
        <m.div
          className="fixed inset-0 z-[90] flex items-center justify-center p-4 md:p-6"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduce ? undefined : { opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close book demo dialog"
            className="absolute inset-0 bg-[#07111f]/45 backdrop-blur-[2px]"
            onClick={onClose}
          />
          <m.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="book-demo-modal-title"
            className="relative z-10 max-h-[min(92dvh,52rem)] w-full max-w-xl overflow-y-auto rounded-[28px] shadow-[0_40px_100px_-36px_rgba(7,17,31,0.65)]"
            initial={reduce ? false : { opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: 12, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              onClick={onClose}
              autoFocus
              className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/95 text-muted-strong shadow-sm transition hover:border-blue/30 hover:text-blue"
              aria-label="Close"
            >
              <X size={18} />
            </button>
            <div id="book-demo-modal-title" className="sr-only">
              Book a Demo
            </div>
            <LeadForm kind="demo" title="Book a Demo" titleAs="h2" subtitle={BOOK_DEMO_INTRO} />
          </m.div>
        </m.div>
      ) : null}
    </AnimatePresence>
  );
}
