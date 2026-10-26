"use client";

import { useReducedMotion } from "framer-motion";
import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/**
 * Hydration-safe `useReducedMotion`.
 *
 * Framer's hook reads `matchMedia` on the very first client render, so for
 * reduced-motion visitors it disagrees with the server render (always
 * `false`). That causes hydration mismatches: structural ones (conditional
 * markup) make React regenerate the tree, and style-only ones leave the SSR
 * `opacity: 0` inline styles in place because framer never rewrites a value
 * that is already at its target — content stays invisible.
 *
 * This returns `false` during SSR and hydration, then the real preference.
 */
export function useSafeReducedMotion(): boolean {
  const hydrated = useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
  const reduce = useReducedMotion();
  return hydrated && Boolean(reduce);
}
