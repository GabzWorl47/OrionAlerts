"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";
import { useConsent } from "@/components/consent/ConsentProvider";
import type { ConsentState } from "@/lib/consent";

const categoryCopy: {
  key: keyof Pick<ConsentState, "preferences" | "analytics" | "advertising">;
  title: string;
  body: string;
  empty: string;
}[] = [
  {
    key: "preferences",
    title: "Preferences",
    body: "Remember UI choices that are not strictly necessary.",
    empty: "No preference cookies are active in the current site build.",
  },
  {
    key: "analytics",
    title: "Analytics",
    body: "Measure traffic and product usage to improve the site.",
    empty: "No analytics tags are loaded until this category is granted and a vendor is added.",
  },
  {
    key: "advertising",
    title: "Advertising",
    body: "Support advertising or remarketing pixels when introduced.",
    empty: "No advertising pixels are present in the current site build.",
  },
];

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function CookieConsentUI() {
  const {
    ready,
    consent,
    settingsOpen,
    openSettings,
    closeSettings,
    acceptAll,
    rejectOptional,
    savePreferences,
  } = useConsent();
  const titleId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);
  const [draft, setDraft] = useState({
    preferences: false,
    analytics: false,
    advertising: false,
  });
  const [draftSyncedForOpen, setDraftSyncedForOpen] = useState(false);

  // Reset draft when the dialog opens (React-recommended render-time sync).
  if (settingsOpen !== draftSyncedForOpen) {
    setDraftSyncedForOpen(settingsOpen);
    if (settingsOpen) {
      setDraft({
        preferences: consent.preferences,
        analytics: consent.analytics,
        advertising: consent.advertising,
      });
    }
  }

  useEffect(() => {
    if (!settingsOpen) return;

    previouslyFocusedRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;

    const dialog = dialogRef.current;
    const focusables = () =>
      dialog
        ? Array.from(dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)).filter(
            (el) => !el.hasAttribute("disabled") && el.tabIndex !== -1,
          )
        : [];

    const initial = focusables()[0];
    initial?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSettings();
        return;
      }
      if (event.key !== "Tab" || !dialog) return;
      const nodes = focusables();
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;
      if (event.shiftKey && active === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      previouslyFocusedRef.current?.focus?.();
      previouslyFocusedRef.current = null;
    };
  }, [settingsOpen, closeSettings]);

  if (!ready) return null;

  const showBanner = !consent.decided && !settingsOpen;

  return (
    <>
      {showBanner ? (
        <div
          className="animate-fade-rise-in fixed inset-x-0 bottom-0 z-[70] border-t border-line bg-surface/95 py-3 shadow-[0_-8px_30px_rgba(12,34,56,0.08)] backdrop-blur-md md:p-5"
          role="dialog"
          aria-label="Cookie notice"
        >
          <div className="container flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-4">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-text">Cookies on OrionAlerts</p>
              <p className="mt-1 text-[13px] leading-snug text-muted md:mt-1.5 md:text-sm md:leading-relaxed">
                We use strictly necessary cookies for security and admin sign-in. Optional analytics
                and advertising cookies are off by default, and we do not currently use any.
                Read the{" "}
                <Link href="/cookies" className="font-semibold text-blue hover:underline">
                  Cookie Notice
                </Link>{" "}
                for the full inventory.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={openSettings}
                className="inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-[12px] border border-line bg-white px-2.5 py-2 text-[13px] font-semibold text-text transition hover:border-blue/30 md:flex-none md:px-4 md:py-2.5 md:text-sm"
              >
                Cookie Settings
              </button>
              <button
                type="button"
                onClick={rejectOptional}
                className="inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-[12px] border border-line bg-white px-2.5 py-2 text-[13px] font-semibold text-text transition hover:border-blue/30 md:flex-none md:px-4 md:py-2.5 md:text-sm"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex flex-auto items-center justify-center whitespace-nowrap rounded-[12px] bg-blue px-2.5 py-2 text-[13px] font-semibold text-white transition hover:bg-[#1f7aef] md:flex-none md:px-4 md:py-2.5 md:text-sm"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      ) : null}

      {settingsOpen ? (
        <div className="fixed inset-0 z-[80] flex items-end justify-center bg-[rgba(12,34,56,0.45)] p-4 sm:items-center">
          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-[20px] border border-line bg-surface p-5 shadow-xl md:p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 id={titleId} className="text-lg font-semibold text-text">
                  Cookie Settings
                </h2>
                <p className="mt-1 text-sm text-muted">
                  Necessary cookies always stay on. Optional categories stay blocked until you grant
                  them—scripts for those categories will not load beforehand.
                </p>
              </div>
              <button
                type="button"
                onClick={closeSettings}
                className="rounded-[10px] border border-line px-2.5 py-1 text-sm text-muted hover:text-text"
                aria-label="Close cookie settings"
              >
                Close
              </button>
            </div>

            <div className="mt-5 space-y-4">
              <div className="rounded-[14px] border border-line bg-surface-2 px-4 py-3">
                <p className="text-sm font-semibold text-text">Necessary</p>
                <p className="mt-1 text-sm text-muted">
                  Admin session and bot-protection cookies required for core site functions. Always
                  active.
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan">
                  Always on
                </p>
              </div>

              {categoryCopy.map((category) => (
                <label
                  key={category.key}
                  className="flex cursor-pointer items-start justify-between gap-4 rounded-[14px] border border-line px-4 py-3"
                >
                  <span>
                    <span className="block text-sm font-semibold text-text">{category.title}</span>
                    <span className="mt-1 block text-sm text-muted">{category.body}</span>
                    <span className="mt-1 block text-xs text-muted">{category.empty}</span>
                  </span>
                  <input
                    type="checkbox"
                    className="mt-1 h-4 w-4 accent-[var(--blue)]"
                    checked={draft[category.key]}
                    onChange={(event) =>
                      setDraft((prev) => ({ ...prev, [category.key]: event.target.checked }))
                    }
                  />
                </label>
              ))}
            </div>

            <p className="mt-4 text-xs text-muted">
              Consent version {consent.version}
              {` · region ${consent.region || "unspecified"}`}. Withdraw anytime via Cookie Settings
              in the footer.{" "}
              <Link href="/cookies" className="font-semibold text-blue hover:underline">
                Cookie Notice
              </Link>
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={rejectOptional}
                className="inline-flex items-center justify-center rounded-[12px] border border-line bg-white px-4 py-2.5 text-sm font-semibold text-text"
              >
                Reject optional
              </button>
              <button
                type="button"
                onClick={() => savePreferences(draft)}
                className="inline-flex items-center justify-center rounded-[12px] border border-line bg-white px-4 py-2.5 text-sm font-semibold text-text"
              >
                Save choices
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="inline-flex items-center justify-center rounded-[12px] bg-blue px-4 py-2.5 text-sm font-semibold text-white"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
