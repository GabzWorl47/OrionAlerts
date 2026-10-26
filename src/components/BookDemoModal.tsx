"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { BOOK_DEMO_INTRO } from "@/components/BookDemoPanel";
import { LeadForm } from "@/components/LeadForm";
import { useSafeReducedMotion } from "@/lib/use-safe-reduced-motion";

type BookDemoModalContextValue = {
  open: boolean;
  openBookDemo: () => void;
  closeBookDemo: () => void;
};

const BookDemoModalContext = createContext<BookDemoModalContextValue | null>(null);

export function useBookDemoModal() {
  const ctx = useContext(BookDemoModalContext);
  if (!ctx) {
    throw new Error("useBookDemoModal must be used within BookDemoModalProvider");
  }
  return ctx;
}

function isBookDemoHref(href: string | null) {
  if (!href) return false;
  try {
    if (href.startsWith("http")) {
      const url = new URL(href);
      return url.pathname === "/book-demo" || url.pathname === "/book-demo/";
    }
  } catch {
    return false;
  }
  return href === "/book-demo" || href.startsWith("/book-demo?");
}

function isOnBookDemoPage() {
  const path = window.location.pathname;
  return path === "/book-demo" || path === "/book-demo/";
}

export function BookDemoModalProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const reduce = useSafeReducedMotion();

  const openBookDemo = useCallback(() => setOpen(true), []);
  const closeBookDemo = useCallback(() => setOpen(false), []);

  useEffect(() => {
    function onClick(event: MouseEvent) {
      if (event.defaultPrevented) return;
      if (event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!anchor) return;
      if (!isBookDemoHref(anchor.getAttribute("href"))) return;
      // On /book-demo the form is already on the page; don't stack a modal
      // (and a second reCAPTCHA widget) on top of it.
      if (isOnBookDemoPage()) return;

      event.preventDefault();
      setOpen(true);
    }

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const value = useMemo(
    () => ({ open, openBookDemo, closeBookDemo }),
    [open, openBookDemo, closeBookDemo],
  );

  return (
    <BookDemoModalContext.Provider value={value}>
      {children}
      <AnimatePresence>
        {open ? (
          <motion.div
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
              onClick={closeBookDemo}
            />
            <motion.div
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
                onClick={closeBookDemo}
                autoFocus
                className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white/95 text-muted-strong shadow-sm transition hover:border-blue/30 hover:text-blue"
                aria-label="Close"
              >
                <X size={18} />
              </button>
              <div id="book-demo-modal-title" className="sr-only">
                Book a Demo
              </div>
              <LeadForm
                kind="demo"
                title="Book a Demo"
                titleAs="h2"
                subtitle={BOOK_DEMO_INTRO}
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </BookDemoModalContext.Provider>
  );
}
