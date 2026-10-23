"use client";

import Link from "next/link";
import { FormEvent, useEffect, useState } from "react";
import { GoogleRecaptcha } from "@/components/GoogleRecaptcha";
import { legalMeta } from "@/lib/legal";

type LeadKind = "demo" | "contact";

type LeadFormProps = {
  kind: LeadKind;
  title: string;
  subtitle: string;
  /** Use h2 when the page already has an H1 (e.g. contact). */
  titleAs?: "h1" | "h2";
  defaultTopic?: string;
};

export function LeadForm({ kind, title, subtitle, titleAs = "h1", defaultTopic = "" }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const [selectedTopic, setSelectedTopic] = useState(defaultTopic);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [recaptchaReset, setRecaptchaReset] = useState(0);
  const requireCaptcha = kind === "demo";
  const TitleTag = titleAs;
  const formTitleId = "lead-form-title";

  useEffect(() => {
    if (typeof window !== "undefined") {
      const param = new URLSearchParams(window.location.search).get("topic");
      if (param && ["sales", "support", "partner", "press", "privacy", "other"].includes(param)) {
        setSelectedTopic(param);
      }
    }
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    if (requireCaptcha && !recaptchaToken) {
      setStatus("error");
      setMessage("Please complete the reCAPTCHA challenge.");
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
          ...(requireCaptcha ? { recaptchaToken } : {}),
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Submission failed");
      }

      setStatus("success");
      setMessage(
        kind === "demo"
          ? "Demo request received. Our team will reach out to schedule."
          : "Message received. We’ll connect you with the right person.",
      );
      form.reset();
      setSelectedTopic(defaultTopic);
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
    "mt-1.5 w-full rounded-[12px] border border-line bg-white px-3 py-2.5 text-sm text-text outline-none transition focus:border-blue/40 focus:ring-2 focus:ring-blue/10";

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
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-text">
          Full name
          <input name="name" required className={fieldClass} autoComplete="name" />
        </label>
        <label className="text-sm font-medium text-text">
          Work email
          <input name="email" type="email" required className={fieldClass} autoComplete="email" />
        </label>
        <label className="text-sm font-medium text-text">
          Company
          <input name="company" required className={fieldClass} autoComplete="organization" />
        </label>
        <label className="text-sm font-medium text-text">
          Phone
          <input name="phone" className={fieldClass} autoComplete="tel" />
        </label>
        {kind === "demo" ? (
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
              <option value="sales">Sales conversation</option>
              <option value="support">Support / ticket</option>
              <option value="partner">Partnership</option>
              <option value="press">Press / investor</option>
              <option value="privacy">Privacy request</option>
              <option value="other">Other</option>
            </select>
          </label>
        )}
        <label className="text-sm font-medium text-text sm:col-span-2">
          {kind === "demo" ? "What should we cover in the demo?" : "How can we help?"}
          <textarea
            name="message"
            rows={4}
            required
            className={`${fieldClass} resize-y`}
            placeholder={
              kind === "demo"
                ? "Sites, camera count, timelines, or use cases…"
                : "Share context so we route you correctly…"
            }
          />
        </label>
      </div>

      {requireCaptcha ? (
        <div className="mt-5">
          <GoogleRecaptcha onChange={setRecaptchaToken} resetSignal={recaptchaReset} />
          <p className="mt-2 text-xs text-muted">Protected by Google reCAPTCHA.</p>
        </div>
      ) : (
        <p className="mt-4 text-xs text-muted">
          Submissions are rate-limited by IP.
        </p>
      )}

      <p className="mt-5 text-xs leading-relaxed text-muted" data-privacy-notice>
        By submitting, you send these details to OrionAlerts so we can respond to your request. We
        also record your IP address for rate-limiting and abuse prevention
        {requireCaptcha ? ", and Google processes reCAPTCHA data for bot protection" : ""}.
        See our{" "}
        <Link href="/privacy" className="text-blue hover:underline">
          Privacy Policy
        </Link>{" "}
        for retention and your rights, or email{" "}
        <a href={`mailto:${legalMeta.privacyEmail}`} className="text-blue hover:underline">
          {legalMeta.privacyEmail}
        </a>{" "}
        to request access or deletion.
      </p>

      <button
        type="submit"
        disabled={status === "submitting" || (requireCaptcha && !recaptchaToken)}
        className="mt-5 inline-flex items-center justify-center rounded-[14px] bg-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1f7aef] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : kind === "demo" ? "Request demo" : "Send message"}
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
