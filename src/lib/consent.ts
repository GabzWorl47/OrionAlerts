export const CONSENT_STORAGE_KEY = "oa_cookie_consent_v1";
export const CONSENT_VERSION = "2026-09-08";

export type ConsentCategory = "necessary" | "preferences" | "analytics" | "advertising";

export type ConsentState = {
  version: string;
  timestamp: string;
  /** True after the visitor has made an explicit choice (accept, reject, or save). */
  decided: boolean;
  /**
   * Coarse region hint for audit records only (not used for geo-blocking or consent UX).
   * Always persisted. Defaults to `"unspecified"` because this build has no geo/IP
   * jurisdiction detection — do not invent a country or GDPR/CCPA label without a real signal.
   */
  region: string;
  preferences: boolean;
  analytics: boolean;
  advertising: boolean;
};

/** Canonical fallback when geo is unavailable. Always write this string; never omit `region`. */
export const CONSENT_REGION_UNSPECIFIED = "unspecified";

export const defaultConsentState = (): ConsentState => ({
  version: CONSENT_VERSION,
  timestamp: new Date().toISOString(),
  decided: false,
  region: CONSENT_REGION_UNSPECIFIED,
  preferences: false,
  analytics: false,
  advertising: false,
});

export function isCategoryAllowed(
  state: ConsentState,
  category: ConsentCategory,
): boolean {
  if (category === "necessary") return true;
  if (!state.decided) return false;
  return Boolean(state[category]);
}

export function normalizeConsentRegion(value: unknown): string {
  return typeof value === "string" && value.trim() ? value.trim() : CONSENT_REGION_UNSPECIFIED;
}

export function parseStoredConsent(raw: string | null): ConsentState | null {
  if (!raw) return null;
  try {
    const parsed = JSON.parse(raw) as Partial<ConsentState>;
    if (parsed.version !== CONSENT_VERSION) return null;
    return {
      version: CONSENT_VERSION,
      timestamp: typeof parsed.timestamp === "string" ? parsed.timestamp : new Date().toISOString(),
      decided: Boolean(parsed.decided),
      region: normalizeConsentRegion(parsed.region),
      preferences: Boolean(parsed.preferences),
      analytics: Boolean(parsed.analytics),
      advertising: Boolean(parsed.advertising),
    };
  } catch {
    return null;
  }
}

/**
 * Load a third-party script only when the matching consent category is granted.
 * Necessary scripts (e.g. reCAPTCHA when classified as necessary) should not use this.
 */
export function loadConsentedScript(options: {
  src: string;
  category: Exclude<ConsentCategory, "necessary">;
  allowed: boolean;
  id?: string;
  async?: boolean;
  defer?: boolean;
}): HTMLScriptElement | null {
  if (typeof document === "undefined" || !options.allowed) return null;
  const id = options.id ?? `oa-consent-${options.category}-${btoa(options.src).slice(0, 12)}`;
  const existing = document.getElementById(id);
  if (existing instanceof HTMLScriptElement) return existing;

  const script = document.createElement("script");
  script.id = id;
  script.src = options.src;
  script.async = options.async ?? true;
  if (options.defer) script.defer = true;
  script.dataset.consentCategory = options.category;
  document.head.appendChild(script);
  return script;
}
