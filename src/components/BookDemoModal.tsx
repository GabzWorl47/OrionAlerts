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
import dynamic from "next/dynamic";

const loadDialog = () => import("@/components/BookDemoDialog");

// The dialog (lead form + reCAPTCHA) is split out of the shared bundle and only
// fetched on intent (hover/focus of a Book a Demo link) or first open.
const BookDemoDialog = dynamic(() => loadDialog().then((mod) => mod.BookDemoDialog), {
  ssr: false,
});

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
  // Mount the lazily loaded dialog on first open, then keep it mounted so
  // AnimatePresence can play the exit animation on close.
  const [hasOpened, setHasOpened] = useState(false);
  if (open && !hasOpened) setHasOpened(true);

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

    function onIntent(event: Event) {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (anchor && isBookDemoHref(anchor.getAttribute("href"))) void loadDialog();
    }

    document.addEventListener("click", onClick, true);
    document.addEventListener("pointerover", onIntent, { passive: true });
    document.addEventListener("focusin", onIntent);
    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("pointerover", onIntent);
      document.removeEventListener("focusin", onIntent);
    };
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
      {hasOpened ? <BookDemoDialog open={open} onClose={closeBookDemo} /> : null}
    </BookDemoModalContext.Provider>
  );
}
