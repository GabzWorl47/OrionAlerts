"use client";

import Link from "next/link";
import { FormEvent, useId, useState } from "react";
import { legalMeta } from "@/lib/legal";

const PARTNER_TRACK_OPTIONS = [
  { value: "system-integrator", label: "System Integrator (SI) / CCTV Installer" },
  { value: "technology-partner", label: "Technology Partner (Camera / VMS / Sensors)" },
  { value: "distributor-var", label: "Value Added Reseller (VAR) / Distributor" },
  { value: "white-label", label: "White-Label / OEM Solution" },
  { value: "other", label: "Other Channel Collaboration" },
] as const;

const DEPLOYMENT_OPTIONS = [
  { value: "1-10", label: "1 – 10 sites / projects per year" },
  { value: "11-50", label: "11 – 50 sites / projects per year" },
  { value: "51-200", label: "51 – 200 sites / projects per year" },
  { value: "200+", label: "200+ sites / projects per year" },
] as const;

function RequiredMark() {
  return (
    <span aria-hidden="true" className="text-alert">
      *
    </span>
  );
}

export function PartnerForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  const formTitleId = useId();

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
        body: JSON.stringify({
          kind: "partner",
          ...data,
        }),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };

      if (!res.ok || !json.ok) {
        throw new Error(json.error || "Submission failed");
      }

      setStatus("success");
      setMessage(
        "Partner application received! Our channel partnerships team will review your details and reach out within 1 business day.",
      );
      form.reset();
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong.");
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
        <h2 id={formTitleId} className="display text-3xl text-text md:text-4xl">
          Apply to Partner
        </h2>
        <p className="mt-2 text-muted">
          Tell us about your organization, integration capability, and target market.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-cyan">
          Partner Program Application · Dedicated Channel Route
        </p>
        <p className="mt-1 text-xs text-muted">
          Fields marked <RequiredMark /> are required.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="text-sm font-medium text-text">
          Contact person <RequiredMark />
          <input
            name="name"
            required
            maxLength={120}
            className={fieldClass}
            autoComplete="name"
            placeholder="John Doe"
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
            placeholder="partner@yourcompany.com"
          />
        </label>

        <label className="text-sm font-medium text-text">
          Company name <RequiredMark />
          <input
            name="company"
            required
            maxLength={160}
            className={fieldClass}
            autoComplete="organization"
            placeholder="Acme Security Solutions"
          />
        </label>

        <label className="text-sm font-medium text-text">
          Company website
          <input
            name="website"
            type="url"
            maxLength={254}
            className={fieldClass}
            placeholder="https://yourcompany.com"
          />
        </label>

        <label className="text-sm font-medium text-text">
          Direct phone number
          <input
            name="phone"
            type="tel"
            maxLength={40}
            className={fieldClass}
            autoComplete="tel"
            placeholder="+91 98765 43210"
          />
        </label>

        <label className="text-sm font-medium text-text">
          Primary territory / Region
          <input
            name="region"
            maxLength={120}
            className={fieldClass}
            placeholder="e.g. Western India, GCC, South Asia"
          />
        </label>

        <label className="text-sm font-medium text-text sm:col-span-2">
          Partner Track / Type <RequiredMark />
          <select name="partnerTrack" required className={fieldClass} defaultValue="">
            <option value="" disabled>
              Select your partnership track
            </option>
            {PARTNER_TRACK_OPTIONS.map((track) => (
              <option key={track.value} value={track.value}>
                {track.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-text sm:col-span-2">
          Estimated annual deployment volume
          <select name="annualDeployments" className={fieldClass} defaultValue="">
            <option value="">Select annual volume…</option>
            {DEPLOYMENT_OPTIONS.map((dep) => (
              <option key={dep.value} value={dep.value}>
                {dep.label}
              </option>
            ))}
          </select>
        </label>

        <label className="text-sm font-medium text-text sm:col-span-2">
          Partnership proposal & objectives <RequiredMark />
          <textarea
            name="message"
            rows={4}
            required
            maxLength={4000}
            className={`${fieldClass} resize-y`}
            placeholder="Tell us about your current CCTV/AI solutions portfolio, target clients, and how you want to collaborate with OrionAlerts…"
          />
        </label>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted" data-privacy-notice>
        By submitting, you send these details to the OrionAlerts Channel Partnerships desk. We use them
        solely to evaluate and respond to your partnership application. See our{" "}
        <Link href={"/privacy"} className="text-blue underline hover:text-blue/80">
          Privacy Policy
        </Link>{" "}
        for details.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[14px] bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#1f7aef] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting Application…" : "Submit Partner Application"}
      </button>

      {message ? (
        <p
          className={`mt-4 text-sm font-medium ${status === "success" ? "text-cyan" : "text-alert"}`}
          role="status"
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}
