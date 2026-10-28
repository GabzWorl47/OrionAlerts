"use client";

import Link from "next/link";
import { FormEvent, useId, useState } from "react";

const PARTNER_TRACK_OPTIONS = [
  { value: "system-integrator", label: "System Integrator (SI) / CCTV Installer" },
  { value: "technology-partner", label: "Technology Partner (Camera / VMS / Sensors)" },
  { value: "distributor-var", label: "Value Added Reseller (VAR) / Distributor" },
  { value: "white-label", label: "White-Label / OEM Solution" },
  { value: "other", label: "Other Channel Collaboration" },
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
        "Application received! Our channel partnerships team will review your application and reach out within 1 business day.",
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
        <h2 id={formTitleId} className="display text-3xl text-text">
          Apply to Partner
        </h2>
        <p className="mt-2 text-sm text-muted">
          Tell us about your organization and how you plan to deploy OrionAlerts.
        </p>
        <p className="mt-3 text-xs uppercase tracking-[0.14em] text-cyan">
          Partner Application · Processed by OrionAlerts
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

        <label className="text-sm font-medium text-text sm:col-span-2">
          Partner track / Type <RequiredMark />
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
          How would you like to collaborate? <RequiredMark />
          <textarea
            name="message"
            rows={4}
            required
            maxLength={4000}
            placeholder="Tell us about your client base, current CCTV / VMS offerings, and expected deployment scope..."
            className={`${fieldClass} resize-y`}
          />
        </label>
      </div>

      <p className="mt-5 text-xs leading-relaxed text-muted" data-privacy-notice>
        By submitting, you send these details to OrionAlerts. We use them only to respond to your partnership application.
        We also record your IP address for rate-limiting and abuse prevention. See our{" "}
        <Link href="/privacy" className="text-blue underline hover:text-blue/80">
          Privacy Policy
        </Link>{" "}
        for how long we keep your details and your rights, or email{" "}
        <a href="mailto:privacy@orionalerts.com" className="text-blue underline hover:text-blue/80">
          privacy@orionalerts.com
        </a>{" "}
        to request access or deletion.
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-5 inline-flex min-h-11 items-center justify-center rounded-[14px] bg-[#0c1a2e] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#152844] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Submitting application…" : "Submit application"}
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
