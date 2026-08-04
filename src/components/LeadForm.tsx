"use client";

import { FormEvent, useState } from "react";

type LeadKind = "demo" | "contact";

type LeadFormProps = {
  kind: LeadKind;
  title: string;
  subtitle: string;
};

export function LeadForm({ kind, title, subtitle }: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ kind, ...data }),
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
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
    }
  }

  const fieldClass =
    "mt-1.5 w-full rounded-[12px] border border-line bg-white px-3 py-2.5 text-sm text-text outline-none transition focus:border-blue/40 focus:ring-2 focus:ring-blue/10";

  return (
    <form onSubmit={onSubmit} className="rounded-[24px] border border-line bg-surface p-6 md:p-8">
      <div className="mb-6">
        <h1 className="display text-3xl text-text md:text-4xl">{title}</h1>
        <p className="mt-2 text-muted">{subtitle}</p>
        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-cyan">
          Stored as {kind === "demo" ? "Demo lead" : "Contact lead"} · separate ERP stream
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
            <select name="topic" className={fieldClass} defaultValue="">
              <option value="" disabled>
                Choose a topic
              </option>
              <option value="sales">Sales conversation</option>
              <option value="support">Support / ticket</option>
              <option value="partner">Partnership</option>
              <option value="press">Press / investor</option>
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

      <p className="mt-4 text-xs text-muted">
        Protected by Cloudflare bot management (Turnstile-ready). Submissions are rate-limited by IP.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
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
