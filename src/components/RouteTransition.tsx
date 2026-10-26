"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect } from "react";

/**
 * Subtle fade + rise of `#main-content` on client-side route changes.
 *
 * - Never runs on the first render (SSR / hydration), so first paint and LCP
 *   are untouched: the very first pathname is only recorded.
 * - Web Animations API on opacity/transform only, `fill: "none"` so nothing
 *   lingers on <main> afterwards (a leftover transform would turn it into the
 *   containing block for `position: fixed` descendants).
 * - Skipped under prefers-reduced-motion, and wherever `Element.animate` is
 *   missing — navigation then simply swaps content as before.
 * - Pathname-only: hash jumps and query-string filters do not animate.
 *
 * Renders nothing; mounted once in the root layout.
 */
const DURATION = 260;
let lastPathname: string | null = null;

export function RouteTransition() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const previous = lastPathname;
    lastPathname = pathname;
    if (previous === null || previous === pathname) return;

    const main = document.getElementById("main-content");
    if (!main || typeof main.animate !== "function") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const animation = main.animate(
      [
        { opacity: 0, transform: "translateY(6px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      { duration: DURATION, easing: "cubic-bezier(0.22, 1, 0.36, 1)", fill: "none" },
    );
    // Belt and braces: if frames are not being produced (throttled/hidden tab,
    // compositor hiccup) the animation can sit pending at opacity 0. Force it
    // to its end state shortly after it should have finished.
    const failsafe = window.setTimeout(() => animation.finish(), DURATION + 400);
    return () => {
      window.clearTimeout(failsafe);
      animation.cancel();
    };
  }, [pathname]);

  return null;
}
