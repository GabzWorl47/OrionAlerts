"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToHash(behavior: ScrollBehavior = "smooth") {
  const hash = window.location.hash.replace(/^#/, "");
  if (!hash) return true;
  const el = document.getElementById(hash);
  if (!el) return false;
  el.scrollIntoView({ behavior, block: "start" });
  return true;
}

/** Scroll to capability hash targets after navigation (accounts for fixed header). */
export function HashScroll() {
  const pathname = usePathname();

  useEffect(() => {
    let cancelled = false;
    let attempts = 0;

    const tryScroll = () => {
      if (cancelled) return;
      if (scrollToHash() || attempts >= 40) return;
      attempts += 1;
      window.setTimeout(tryScroll, 50);
    };

    const start = window.setTimeout(tryScroll, 50);

    const onHashChange = () => {
      attempts = 0;
      tryScroll();
    };

    // Next.js client navigations to the same path with a new hash often skip hashchange.
    const onClick = (event: MouseEvent) => {
      const anchor = (event.target as HTMLElement | null)?.closest("a[href*='#']");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      try {
        const url = new URL(href, window.location.origin);
        if (!url.hash) return;
        if (url.pathname !== window.location.pathname && url.pathname !== pathname) {
          return;
        }
        window.setTimeout(() => {
          attempts = 0;
          tryScroll();
        }, 80);
      } catch {
        /* ignore invalid href */
      }
    };

    window.addEventListener("hashchange", onHashChange);
    document.addEventListener("click", onClick, true);

    return () => {
      cancelled = true;
      window.clearTimeout(start);
      window.removeEventListener("hashchange", onHashChange);
      document.removeEventListener("click", onClick, true);
    };
  }, [pathname]);

  return null;
}
