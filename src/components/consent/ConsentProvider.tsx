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
import {
  CONSENT_STORAGE_KEY,
  CONSENT_VERSION,
  defaultConsentState,
  isCategoryAllowed,
  normalizeConsentRegion,
  parseStoredConsent,
  type ConsentCategory,
  type ConsentState,
} from "@/lib/consent";

type ConsentContextValue = {
  ready: boolean;
  consent: ConsentState;
  settingsOpen: boolean;
  openSettings: () => void;
  closeSettings: () => void;
  acceptAll: () => void;
  rejectOptional: () => void;
  savePreferences: (next: Pick<ConsentState, "preferences" | "analytics" | "advertising">) => void;
  allows: (category: ConsentCategory) => boolean;
};

const ConsentContext = createContext<ConsentContextValue | null>(null);

function persist(state: ConsentState) {
  try {
    localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Ignore quota / private mode failures; in-memory state still applies for the session.
  }
  window.dispatchEvent(new CustomEvent("oa-consent-updated", { detail: state }));
}

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [ready, setReady] = useState(false);
  const [consent, setConsent] = useState<ConsentState>(defaultConsentState);
  const [settingsOpen, setSettingsOpen] = useState(false);

  useEffect(() => {
    // Reading localStorage cannot happen during render/SSR, so this effect
    // hydrates the persisted consent state after mount. The state updates are
    // deferred to a microtask so they are not *synchronous* calls within the
    // effect body (avoiding the cascading-render footgun the lint rule
    // flags) while still landing before the browser paints.
    queueMicrotask(() => {
      const stored = parseStoredConsent(localStorage.getItem(CONSENT_STORAGE_KEY));
      if (stored) setConsent(stored);
      setReady(true);
    });

    const onOpen = () => setSettingsOpen(true);
    window.addEventListener("oa-open-cookie-settings", onOpen);
    return () => window.removeEventListener("oa-open-cookie-settings", onOpen);
  }, []);

  const commit = useCallback((next: ConsentState) => {
    setConsent(next);
    persist(next);
  }, []);

  const acceptAll = useCallback(() => {
    commit({
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      decided: true,
      region: normalizeConsentRegion(consent.region),
      preferences: true,
      analytics: true,
      advertising: true,
    });
    setSettingsOpen(false);
  }, [commit, consent.region]);

  const rejectOptional = useCallback(() => {
    commit({
      version: CONSENT_VERSION,
      timestamp: new Date().toISOString(),
      decided: true,
      region: normalizeConsentRegion(consent.region),
      preferences: false,
      analytics: false,
      advertising: false,
    });
    setSettingsOpen(false);
  }, [commit, consent.region]);

  const savePreferences = useCallback(
    (next: Pick<ConsentState, "preferences" | "analytics" | "advertising">) => {
      commit({
        version: CONSENT_VERSION,
        timestamp: new Date().toISOString(),
        decided: true,
        region: normalizeConsentRegion(consent.region),
        ...next,
      });
      setSettingsOpen(false);
    },
    [commit, consent.region],
  );

  const value = useMemo<ConsentContextValue>(
    () => ({
      ready,
      consent,
      settingsOpen,
      openSettings: () => setSettingsOpen(true),
      closeSettings: () => setSettingsOpen(false),
      acceptAll,
      rejectOptional,
      savePreferences,
      allows: (category) => isCategoryAllowed(consent, category),
    }),
    [ready, consent, settingsOpen, acceptAll, rejectOptional, savePreferences],
  );

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>;
}

export function useConsent() {
  const ctx = useContext(ConsentContext);
  if (!ctx) {
    throw new Error("useConsent must be used within ConsentProvider");
  }
  return ctx;
}

/** Open the cookie preference center from anywhere (e.g. footer link). */
export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event("oa-open-cookie-settings"));
}
