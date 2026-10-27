"use client";

import Link from "next/link";
import { FormEvent, useId, useState } from "react";
import { GoogleRecaptcha, useRecaptchaSiteKey } from "@/components/GoogleRecaptcha";
import { legalMeta } from "@/lib/legal";

type LeadKind = "demo" | "contact";

/** Values of the contact form's "Reason for reaching out" select. */
export type ContactTopic = "sales" | "support" | "press" | "privacy" | "other";

/**
 * Optional demo-form ranges. Values must stay in sync with the allow-lists in
 * `src/app/api/leads/route.ts`, which rejects anything else.
 */
const SITE_COUNT_OPTIONS = [
  { value: "1", label: "1" },
  { value: "2-5", label: "2–5" },
  { value: "6-20", label: "6–20" },
  { value: "21-100", label: "21–100" },
  { value: "100+", label: "100+" },
] as const;

const CAMERA_COUNT_OPTIONS = [
  { value: "under-50", label: "Under 50" },
  { value: "50-200", label: "50–200" },
  { value: "200-1000", label: "200–1,000" },
  { value: "1000+", label: "1,000+" },
] as const;

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-alert">
      *
    </span>
  );
}

type LeadFormProps = {
  kind: LeadKind;
  title: string;
  subtitle: string;
  /** Use h2 when the page already has an H1 (e.g. contact). */
  titleAs?: "h1" | "h2";
  defaultTopic?: ContactTopic;
};

export function LeadForm({
  kind,
  title,
  subtitle,
  titleAs = "h1",
  defaultTopic,
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState<string>(defaultTopic ?? "");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaReset, setRecaptchaReset] = useState(0);
  const requireCaptcha = kind === "demo";
  const TitleTag = titleAs;
  const formTitleId = useId();
  const captchaHintId = useId();
  const awaitingCaptcha = requireCaptcha && !recaptchaToken;
  // Resolved at runtime; without a site key the widget shows its own notice instead of a checkbox.
  const recaptchaSiteKey = useRecaptchaSiteKey(requireCaptcha);
  const captchaConfigured = Boolean(recaptchaSiteKey);
  const showCaptchaHint = awaitingCaptcha && captchaConfigured;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    if (awaitingCaptcha && captchaConfigured) {
      setStatus("error");
      setMessage("Please complete the reCAPTCHA challenge before submitting.");
      return;
    }

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind,
          ...data,
          ...(requireCaptcha && recaptchaToken ? { recaptchaToken } : {}),
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Submission failed");
      }

      setStatus("success");
      setMessage(
        kind === "demo"
          ? "Demo request received. Our team will reach out within one business day."
          : "Message received. We’ll connect you with the right person shortly.",
      );
      form.reset();
      setSelectedTopic(defaultTopic ?? "");
      setRecaptchaToken(null);
      setRecaptchaReset((value) => value + 1);
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
      setRecaptchaToken(null);
      setRecaptchaReset((value) => value + 1);
    }
  }

  const fieldClass =
    "mt-1.5 w-full rounded-[12px] border border-line bg-surface-2 px-3 py-2.5 text-sm text-text outline-none transition focus:border-blue/40 focus:ring-2 focus:ring-blue/10";

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-[24px] border border-line bg-surface p-6 md:p-8"
      aria-labelledby={formTitleId}
    >
      <div className="mb-6">
        <TitleTag id={formTitleId} className="display text-3xl text-text md:text-4xl">
          {title}
        </TitleTag>
        <p className="mt-2 text-muted">{subtitle}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-cyan">
          {kind === "demo" ? "Demo request" : "Contact request"} · processed by OrionAlerts
        </p>
        <p className="mt-1 text-xs text-muted">
          Fields marked <RequiredMark /> are required.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-text">
          Full name <RequiredMark />
          <input
            name="name"
            required
            maxLength={120}
            className={fieldClass}
            autoComplete="name"
          />
        </label>
        <label className="text-sm font-medium text-text">
          Work email <RequiredMark />
          <input
            name="email"
            type="email"
            required
            maxLength={254}
            className={fieldClass}
            autoComplete="email"
          />
        </label>
        <label className="text-sm font-medium text-text">
          Company <RequiredMark />
          <input
            name="company"
            required
            maxLength={160}
            className={fieldClass}
            autoComplete="organization"
          />
        </label>
        <label className="text-sm font-medium text-text">
          Phone (optional)
          <input
            name="phone"
            type="tel"
            maxLength={40}
            className={fieldClass}
            autoComplete="tel"
          />
        </label>
        {kind === "demo" ? (
          <>
            <label className="text-sm font-medium text-text sm:col-span-2">
              Solutions of interest
              <select name="interest" className={fieldClass} defaultValue="">
                <option value="" disabled>
                  Select a focus area
                </option>
                <option value="vms">VMS</option>
                <option value="ai-analytics">AI Vision & Real-Time Alerts</option>
                <option value="asset-tracking">Asset Tracking</option>
                <option value="amc-management">AMC Management</option>
                <option value="health-monitoring">Health Monitoring</option>
                <option value="platform">Full platform</option>
              </select>
            </label>
            <label className="text-sm font-medium text-text">
              Number of sites (optional)
              <select name="siteCount" className={fieldClass} defaultValue="">
                <option value="">Select range…</option>
                {SITE_COUNT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium text-text">
              Approximate cameras (optional)
              <select name="cameraCount" className={fieldClass} defaultValue="">
                <option value="">Select range…</option>
                {CAMERA_COUNT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
          </>
        ) : (
          <label className="text-sm font-medium text-text sm:col-span-2">
            Reason for reaching out
            <select
              name="topic"
              className={fieldClass}
              value={selectedTopic}
              onChange={(e) => setSelectedTopic(e.target.value)}
            >
              <option value="" disabled>
                Choose a topic
              </option>
              <option value="sales">Sales inquiry</option>
              <option value="support">Customer support</option>
              <option value="press">Press / investor</option>
              <option value="privacy">Privacy request</option>
              <option value="other">Other</option>
            </select>
          </label>
        )}
        <label className="text-sm font-medium text-text sm:col-span-2">
          {kind === "demo" ? "What should we cover in the demo?" : "How can we help?"}{" "}
          <RequiredMark />
          <textarea
            name="message"
            rows={4}
            required
            maxLength={4000}
            className={`${fieldClass} resize-y`}
            placeholder={
              kind === "demo"
                ? "Use cases, timelines, or questions you want answered…"
                : "Share context so we route you correctly…"
            }
          />
        </label>
      </div>

      {requireCaptcha ? (
        <div className="mt-5">
          <GoogleRecaptcha
            siteKey={recaptchaSiteKey}
            onChange={setRecaptchaToken}
            resetSignal={recaptchaReset}
          />
          <p className="mt-2 text-xs text-muted">Protected by Google reCAPTCHA.</p>
        </div>
      ) : null}

      <p className="mt-5 text-xs leading-relaxed text-muted" data-privacy-notice>
        By submitting, you send these details to OrionAlerts. We use them only to respond to your
        request. We also record your IP address for rate-limiting and abuse prevention, and Google
        processes verification data for bot protection when reCAPTCHA is active. See our{" "}
        <Link href={"/privacy"} className="text-blue underline hover:text-blue/80">
          Privacy Policy
        </Link>{" "}
        for how long we keep your details and your rights, or email{" "}
        <a
          href={`mailto:${legalMeta.privacyEmail}`}
          className="text-blue underline hover:text-blue/80"
        >
          {legalMeta.privacyEmail}
        </a>{" "}
        to request access or deletion.
      </p>

      {showCaptchaHint ? (
        <p id={captchaHintId} className="mt-3 text-xs text-caption" role="note">
          Please check the reCAPTCHA box above before clicking {kind === "demo" ? "Request demo" : "Send message"}.
        </p>
      ) : null}

      <button
        type="submit"
        disabled={status === "submitting" || awaitingCaptcha}
        aria-describedby={showCaptchaHint ? captchaHintId : undefined}
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[14px] bg-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f7aef] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting"
          ? "Sending…"
          : kind === "demo"
            ? "Request demo"
            : "Send message"}
      </button>

      {message ? (
        <p
          className={`mt-4 text-sm ${status === "success" ? "text-cyan" : "text-alert"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
