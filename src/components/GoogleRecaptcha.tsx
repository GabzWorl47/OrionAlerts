"use client";

import { useEffect, useId, useRef } from "react";
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

type GoogleRecaptchaProps = {
  onChange: (token: string | null) => void;
  resetSignal?: number;
};

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

export function GoogleRecaptcha({ onChange, resetSignal = 0 }: GoogleRecaptchaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<number | null>(null);
  const onChangeRef = useRef(onChange);
  const reactId = useId();
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

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

  if (!siteKey) {
    // Visitors can't fix a missing key, so production shows a neutral fallback
    // with the sales inbox; the setup hint stays for local development only.
    if (process.env.NODE_ENV === "production") {
      return (
        <p className="rounded-[12px] border border-line bg-surface-2 px-3 py-2.5 text-xs text-muted">
          The form is temporarily unavailable. Please email{" "}
          <a href={`mailto:${site.email}`} className="text-blue hover:underline">
            {site.email}
          </a>
          .
        </p>
      );
    }
    return (
      <p className="rounded-[12px] border border-dashed border-line bg-surface-2 px-3 py-2.5 text-xs text-muted">
        Add <code className="text-text">NEXT_PUBLIC_RECAPTCHA_SITE_KEY</code> to enable Google
        reCAPTCHA.
      </p>
    );
  }

  return <div ref={containerRef} className="overflow-hidden rounded-[8px]" />;
}
