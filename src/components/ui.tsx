import Link from "next/link";
import { ReactNode } from "react";
import { MagneticButton } from "@/components/MagneticButton";
import { SolutionVideo } from "@/components/SolutionVideo";

export function Button({
  href,
  children,
  variant = "solid",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
}) {
  return (
    <MagneticButton href={href} variant={variant} className={className}>
      {children}
    </MagneticButton>
  );
}

export function Section({
  id,
  children,
  className = "",
  narrow = false,
  compact = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
  compact?: boolean;
}) {
  return (
    <section
      id={id}
      className={`${compact ? "section-y-compact" : "section-y"} ${className}`}
    >
      <div className={narrow ? "container max-w-3xl" : "container"}>{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  lede,
  align = "left",
  compact = false,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  align?: "left" | "center";
  compact?: boolean;
}) {
  return (
    <div
      className={`${
        compact ? "mb-6" : "mb-[var(--section-heading-gap)]"
      } max-w-3xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      {eyebrow ? <p className={`eyebrow ${compact ? "mb-2" : "mb-3"}`}>{eyebrow}</p> : null}
      <h2
        className={`${
          compact
            ? "text-[clamp(1.45rem,2.8vw,2rem)]"
            : "text-[clamp(1.75rem,3.5vw,2.5rem)]"
        } font-semibold leading-[1.1] tracking-[-0.03em] text-text`}
      >
        {title}
      </h2>
      {lede ? (
        <p className={`mt-4 description ${align === "center" ? "mx-auto" : ""}`}>{lede}</p>
      ) : null}
    </div>
  );
}

export function VideoPlaceholder({
  label,
  caption,
  className = "",
  src,
  poster,
}: {
  label: string;
  caption?: string;
  className?: string;
  src?: string;
  poster?: string;
}) {
  return (
    <div className={`w-full ${className}`}>
      <div className="relative overflow-hidden rounded-[16px] border border-line bg-[#0b1220] shadow-[0_18px_50px_rgba(15,23,42,0.12)]">
        <div className="relative aspect-video">
          {src ? (
            <SolutionVideo src={src} label={label} poster={poster} />
          ) : (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-[#15233a] to-[#0d1626]" />
              <div className="scanlines absolute inset-0 opacity-40" />
              <div className="relative z-10 flex h-full items-center justify-center px-6 text-center">
                <div>
                  <p className="display text-lg text-text md:text-xl">{label}</p>
                  {caption ? <p className="mt-2 max-w-md text-sm text-muted">{caption}</p> : null}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {caption && src ? (
        <p className="mt-3 text-center text-sm text-muted">{caption}</p>
      ) : null}
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
    <article className="rounded-[20px] border border-line bg-surface p-6 card-lift hover:border-blue/35 hover:shadow-[0_16px_36px_rgba(126,200,255,0.22)]">
      {typeof index === "number" ? (
        <p className="mb-3 font-display text-sm text-muted">{String(index + 1).padStart(2, "0")}</p>
      ) : null}
      <h3 className="display text-xl text-text">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-strong">{description}</p>
    </article>
  );
}

export function CtaBand({
  title,
  lede,
  primaryHref,
  primaryLabel,
  primaryClassName = "",
  className = "",
  actionsClassName = "",
  secondaryHref,
  secondaryLabel,
}: {
  title: string;
  lede: string;
  primaryHref: string;
  primaryLabel: string;
  primaryClassName?: string;
  className?: string;
  actionsClassName?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div className={`overflow-hidden rounded-[28px] bg-blue px-8 py-10 text-white md:px-12 md:py-12 ${className}`}>
      <div className="grid gap-8 md:grid-cols-[1.4fr_auto] md:items-end">
        <div>
          <h2 className="text-[clamp(1.75rem,3.5vw,2.5rem)] font-semibold leading-[1.1] tracking-[-0.03em] text-white">
            {title}
          </h2>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">{lede}</p>
        </div>
        <div className={`flex flex-wrap gap-3 ${actionsClassName}`}>
          <MagneticButton href={primaryHref} className={primaryClassName}>
            {primaryLabel}
          </MagneticButton>
          {secondaryHref && secondaryLabel ? (
            <MagneticButton
              href={secondaryHref}
              variant="outline"
              className="!border-white/30 !bg-transparent !text-white hover:!border-cyan hover:!text-cyan"
            >
              {secondaryLabel}
            </MagneticButton>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link
      href={href}
      className="rounded-sm font-semibold text-cyan transition-smooth-fast focus-ring hover:text-blue"
    >
      {children}
    </Link>
  );
}
