"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { useConsent } from "@/components/consent/ConsentProvider";

// The banner / preference centre only ever renders after mount (it needs
// localStorage), so it never contributes to the server HTML. Loading it on
// demand keeps it out of the JS every page ships.
const CookieConsentUI = dynamic(
  () => import("@/components/consent/CookieConsentUI").then((mod) => mod.CookieConsentUI),
  { ssr: false },
);

/**
 * Mounts the cookie UI only when a visitor needs it: first visit (no decision
 * stored yet) or when Cookie Settings is opened. Once mounted it stays mounted,
 * matching the previous always-rendered behaviour.
 */
export function CookieConsentGate() {
  const { ready, consent, settingsOpen } = useConsent();
  const [needed, setNeeded] = useState(false);

  // Latch (render-time state sync): once needed, keep the UI mounted.
  if (!needed && ready && (!consent.decided || settingsOpen)) {
    setNeeded(true);
  }

  return needed ? <CookieConsentUI /> : null;
}
