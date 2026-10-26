"use client";

import { useEffect, useId, useRef, useState } from "react";
import { site } from "@/lib/site";

declare global {
  interface Window {
    grecaptcha?: {
      render: (
        container: HTMLElement,
        parameters: {
          sitekey: string;
          callback?: (token: string) => void;
          "expired-callback"?: () => void;
          "error-callback"?: () => void;
          theme?: "light" | "dark";
        },
      ) => number;
      reset: (widgetId?: number) => void;
      getResponse: (widgetId?: number) => string;
    };
    ___recaptchaOnLoad?: () => void;
  }
}

/** `undefined` while the key is still being resolved, `null` when none is configured. */
export type RecaptchaSiteKey = string | null | undefined;

type GoogleRecaptchaProps = {
  /** From `useRecaptchaSiteKey()`. */
  siteKey: RecaptchaSiteKey;
  onChange: (token: string | null) => void;
  resetSignal?: number;
};

// Inlined only when NEXT_PUBLIC_RECAPTCHA_SITE_KEY was set at build time. Used
// as a fallback if the runtime config endpoint can't be reached.
const BUILD_TIME_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY?.trim() || null;

let siteKeyRequest: Promise<string | null> | null = null;

/**
 * The site key is resolved by the server at request time (`/api/recaptcha-config`),
 * so setting RECAPTCHA_SITE_KEY as a runtime variable (Cloudflare Worker variable,
 * cPanel env) is enough; no rebuild needed. Fetched once per page load.
 */
function fetchRecaptchaSiteKey(): Promise<string | null> {
  if (!siteKeyRequest) {
    siteKeyRequest = fetch("/api/recaptcha-config", {
      cache: "no-store",
      headers: { Accept: "application/json" },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`recaptcha-config ${response.status}`);
        return response.json() as Promise<{ siteKey?: unknown }>;
      })
      .then(({ siteKey }) =>
        typeof siteKey === "string" && siteKey.trim() ? siteKey.trim() : null,
      )
      .catch(() => {
        // Allow a retry on the next mount; meanwhile fall back to the inlined key.
        siteKeyRequest = null;
        return BUILD_TIME_SITE_KEY;
      });
  }
  return siteKeyRequest;
}

/** Resolves the reCAPTCHA site key at runtime. Pass `enabled: false` to skip the request. */
export function useRecaptchaSiteKey(enabled = true): RecaptchaSiteKey {
  const [siteKey, setSiteKey] = useState<RecaptchaSiteKey>(undefined);

  useEffect(() => {
    if (!enabled) return;
    let active = true;
    void fetchRecaptchaSiteKey().then((key) => {
      if (active) setSiteKey(key);
    });
    return () => {
      active = false;
    };
  }, [enabled]);

  return enabled ? siteKey : null;
}

let scriptLoading: Promise<void> | null = null;

function loadRecaptchaScript() {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.grecaptcha?.render) return Promise.resolve();
  if (scriptLoading) return scriptLoading;

  scriptLoading = new Promise<void>((resolve, reject) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src*="recaptcha/api.js"]',
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error("reCAPTCHA failed to load")), {
        once: true,
      });
      if (window.grecaptcha?.render) resolve();
      return;
    }

    window.___recaptchaOnLoad = () => resolve();
    const script = document.createElement("script");
    // Prefer recaptcha.net to reduce unrelated Google cookies (per Google guidance / audit).
    script.src =
      "https://www.recaptcha.net/recaptcha/api.js?onload=___recaptchaOnLoad&render=explicit";
    script.async = true;
    script.defer = true;
    script.onerror = () => reject(new Error("reCAPTCHA failed to load"));
    document.body.appendChild(script);
  });

  return scriptLoading;
}

export function GoogleRecaptcha({ siteKey, onChange, resetSignal = 0 }: GoogleRecaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const onChangeRef = useRef(onChange);
  const reactId = useId();

  useEffect(() => {
    onChangeRef.current = onChange;
  }, [onChange]);

  useEffect(() => {
    if (!siteKey || !containerRef.current) return;

    let cancelled = false;

    void loadRecaptchaScript()
      .then(() => {
        if (cancelled || !containerRef.current || !window.grecaptcha?.render) return;
        if (widgetIdRef.current !== null) return;

        widgetIdRef.current = window.grecaptcha.render(containerRef.current, {
          sitekey: siteKey,
          callback: (token) => onChangeRef.current(token),
          "expired-callback": () => onChangeRef.current(null),
          "error-callback": () => onChangeRef.current(null),
          theme: "light",
        });
      })
      .catch(() => {
        onChangeRef.current(null);
      });

    return () => {
      cancelled = true;
    };
  }, [siteKey, reactId]);

  useEffect(() => {
    if (widgetIdRef.current === null || !window.grecaptcha?.reset) return;
    window.grecaptcha.reset(widgetIdRef.current);
    onChange(null);
  }, [resetSignal, onChange]);

  if (siteKey === null) {
    // Visitors can't fix a missing key, so production shows a neutral fallback
    // with the sales inbox; the setup hint stays for local development only.
    if (process.env.NODE_ENV === "production") {
      return (
        <p className="rounded-[12px] border border-line bg-surface-2 px-3 py-2.5 text-xs text-muted">
          The form is temporarily unavailable. Please email{" "}
          <a href={`mailto:${site.email}`} className="text-blue underline underline-offset-2 hover:no-underline">
            {site.email}
          </a>
          .
        </p>
      );
    }
    return (
      <p className="rounded-[12px] border border-dashed border-line bg-surface-2 px-3 py-2.5 text-xs text-muted">
        Add <code className="text-text">RECAPTCHA_SITE_KEY</code> (runtime) or{" "}
        <code className="text-text">NEXT_PUBLIC_RECAPTCHA_SITE_KEY</code> (build time) to enable
        Google reCAPTCHA.
      </p>
    );
  }

  // Rendered while the key resolves too, reserving the checkbox's 78px height.
  return (
    <div
      ref={containerRef}
      aria-busy={siteKey === undefined}
      className="min-h-[78px] overflow-hidden rounded-[8px]"
    />
  );
}
