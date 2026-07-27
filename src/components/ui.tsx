import Link from "next/link";
import { ReactNode } from "react";
import { MagneticButton } from "@/components/MagneticButton";

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
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  narrow?: boolean;
}) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
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
      <h2 className="display text-3xl uppercase text-steel-gradient md:text-4xl">{title}</h2>
      {lede ? (
        <p className={`mt-4 text-muted ${align === "center" ? "mx-auto" : ""}`}>{lede}</p>
      ) : null}
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
      <div className="panel relative flex aspect-video items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#15233a] to-[#0d1626]" />
        <div className="scanlines absolute inset-0 opacity-40" />
        <div className="relative z-10 px-6 text-center">
          <p className="display text-lg text-text md:text-xl">{label}</p>
          {caption ? <p className="mt-2 max-w-md text-sm text-muted">{caption}</p> : null}
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
    <article className="rounded-[20px] border border-line bg-surface p-6 transition duration-300 hover:border-blue/35">
      {typeof index === "number" ? (
        <p className="mb-3 font-display text-sm text-cyan">{String(index + 1).padStart(2, "0")}</p>
      ) : null}
      <h3 className="display text-xl text-text">{title}</h3>
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
    <div className="overflow-hidden rounded-[24px] border border-line bg-surface px-8 py-10 md:px-12 md:py-12">
      <div className="grid gap-8 md:grid-cols-[1.4fr_auto] md:items-end">
        <div>
          <h2 className="display text-3xl uppercase text-steel-gradient md:text-4xl">{title}</h2>
          <p className="mt-3 max-w-xl text-muted">{lede}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <MagneticButton href={primaryHref}>{primaryLabel}</MagneticButton>
          {secondaryHref && secondaryLabel ? (
            <MagneticButton href={secondaryHref} variant="outline">
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
    <Link href={href} className="font-semibold text-cyan hover:text-text">
      {children}
    </Link>
  );
}
