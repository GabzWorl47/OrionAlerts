import Link from "next/link";
import { ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-signal text-white hover:bg-signal-deep shadow-[0_10px_30px_rgba(13,148,136,0.28)]",
  secondary:
    "bg-white text-ink border border-line hover:border-steel/40 hover:bg-mist/60",
  ghost: "bg-transparent text-ink hover:bg-white/50",
  inverse: "bg-white text-ink hover:bg-mist",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

export function Button({ href, children, variant = "primary", className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-[var(--radius)] px-5 py-3 text-sm font-semibold tracking-wide transition duration-200 ${variants[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}

export function Section({
  id,
  children,
  className = "",
  narrow = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <div className={narrow ? "container max-w-3xl" : "container"}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-10 max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow ? <p className="eyebrow mb-3">{eyebrow}</p> : null}
      <h2 className="display text-3xl text-ink md:text-4xl">{title}</h2>
      {lede ? <p className={`lede mt-4 ${align === "center" ? "mx-auto" : ""}`}>{lede}</p> : null}
    </div>
  );
}

export function VideoPlaceholder({
  label,
  caption,
  className = "",
}: {
  label: string;
  caption?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <div className="video-frame flex items-center justify-center text-white">
        <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
          <span className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/40 bg-white/10 backdrop-blur">
            <span className="pulse-ring absolute inset-0 rounded-full border border-white/50" />
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-white" aria-hidden>
              <path d="M8 5.5v13l11-6.5-11-6.5z" />
            </svg>
          </span>
          <p className="display text-lg md:text-xl">{label}</p>
          {caption ? <p className="max-w-md text-sm text-white/75">{caption}</p> : null}
        </div>
      </div>
    </div>
  );
}

export function FeatureCard({
  title,
  description,
  index,
}: {
  title: string;
  description: string;
  index?: number;
}) {
  return (
    <article className="surface rounded-[var(--radius)] p-6 transition duration-300 hover:-translate-y-0.5 hover:border-signal/30">
      {typeof index === "number" ? (
        <p className="mb-3 font-display text-sm text-signal">{String(index + 1).padStart(2, "0")}</p>
      ) : null}
      <h3 className="display text-xl text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{description}</p>
    </article>
  );
}

export function CtaBand({
  title,
  lede,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  lede: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className="overflow-hidden rounded-[var(--radius)] bg-ink px-8 py-10 text-white md:px-12 md:py-12">
      <div className="grid gap-8 md:grid-cols-[1.4fr_auto] md:items-end">
        <div>
          <h2 className="display text-3xl md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-white/70">{lede}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button href={primaryHref} variant="inverse">
            {primaryLabel}
          </Button>
          {secondaryHref && secondaryLabel ? (
            <Button
              href={secondaryHref}
              className="border border-white/25 bg-transparent text-white hover:bg-white/10"
            >
              {secondaryLabel}
            </Button>
          ) : null}
        </div>
      </div>
    </div>
  );
}
