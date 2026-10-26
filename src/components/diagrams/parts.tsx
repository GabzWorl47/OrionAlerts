import type { ComponentType, ReactNode, SVGProps } from "react";

/**
 * Shared pieces for the inline SVG diagrams.
 *
 * Colours come from the global tokens (Tailwind `fill-*` / `stroke-*` theme
 * utilities backed by --text, --surface, --cyan … in globals.css), so the
 * diagrams follow the site palette. The one deliberate exception is the
 * Nebula OS node, drawn as a fixed navy chip with white text: a self-contained
 * colour pair that keeps its contrast whatever the page background is.
 *
 * Text is real <text> in viewBox units and inherits the site font (Outfit).
 * Arrowheads are plain paths rather than <marker>s so several diagrams can sit
 * on one page without id collisions.
 */

export const NODE_FILL = "#0c2238";
export const NODE_TEXT = "#ffffff";
export const NODE_TEXT_MUTED = "rgba(226, 236, 248, 0.78)";

type IconComponent = ComponentType<SVGProps<SVGSVGElement> & { size?: number; strokeWidth?: number }>;

/** A lucide icon placed as a nested <svg>, centred on (cx, cy). */
export function Glyph({
  icon: Icon,
  cx,
  cy,
  size = 22,
  className = "text-blue",
  strokeWidth = 1.8,
}: {
  icon: IconComponent;
  cx: number;
  cy: number;
  size?: number;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <Icon
      x={cx - size / 2}
      y={cy - size / 2}
      width={size}
      height={size}
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden
      focusable={false}
    />
  );
}

/** Straight connector with an arrowhead at the end (and optionally the start). */
export function Arrow({
  x1,
  y1,
  x2,
  y2,
  dashed = false,
  both = false,
  className = "stroke-blue",
  head = 7,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  dashed?: boolean;
  both?: boolean;
  className?: string;
  head?: number;
}) {
  const angle = Math.atan2(y2 - y1, x2 - x1);
  const tip = (x: number, y: number, a: number) => {
    const l = head;
    const w = Math.PI / 6;
    const ax = x - l * Math.cos(a - w);
    const ay = y - l * Math.sin(a - w);
    const bx = x - l * Math.cos(a + w);
    const by = y - l * Math.sin(a + w);
    return `M${ax.toFixed(1)} ${ay.toFixed(1)} L${x} ${y} L${bx.toFixed(1)} ${by.toFixed(1)}`;
  };
  return (
    <g className={className} fill="none" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <line x1={x1} y1={y1} x2={x2} y2={y2} strokeDasharray={dashed ? "6 6" : undefined} />
      <path d={tip(x2, y2, angle)} />
      {both ? <path d={tip(x1, y1, angle + Math.PI)} /> : null}
    </g>
  );
}

/** Small pill label, e.g. sitting on a connector. Width is set by the caller. */
export function Chip({
  cx,
  cy,
  width,
  children,
  fontSize = 12,
}: {
  cx: number;
  cy: number;
  width: number;
  children: ReactNode;
  fontSize?: number;
}) {
  const h = fontSize + 12;
  return (
    <g>
      <rect
        x={cx - width / 2}
        y={cy - h / 2}
        width={width}
        height={h}
        rx={h / 2}
        className="fill-surface stroke-blue/25"
        strokeWidth={1}
      />
      <text
        x={cx}
        y={cy + fontSize * 0.36}
        textAnchor="middle"
        fontSize={fontSize}
        fontWeight={600}
        className="fill-text"
      >
        {children}
      </text>
    </g>
  );
}

/**
 * Wraps a wide and a narrow layout of the same diagram. Only one is displayed
 * at a time (the other is display:none, so it is also out of the
 * accessibility tree), which keeps text legible on phones.
 */
export function Responsive({
  wide,
  narrow,
  breakpoint = "lg",
  narrowMaxWidth = "26rem",
  narrowAlign = "center",
}: {
  wide: ReactNode;
  narrow: ReactNode;
  breakpoint?: "md" | "lg";
  narrowMaxWidth?: string;
  narrowAlign?: "center" | "start";
}) {
  const wideClass = breakpoint === "md" ? "hidden md:block" : "hidden lg:block";
  const narrowClass = breakpoint === "md" ? "md:hidden" : "lg:hidden";
  return (
    <>
      <div className={wideClass}>{wide}</div>
      <div
        className={`${narrowClass} ${narrowAlign === "center" ? "mx-auto" : ""}`}
        style={{ maxWidth: narrowMaxWidth }}
      >
        {narrow}
      </div>
    </>
  );
}

/** Root <svg> with role="img", an aria-label, and <desc> wired up by id. */
export function DiagramSvg({
  id,
  viewBox,
  title,
  desc,
  className = "",
  children,
}: {
  id: string;
  viewBox: string;
  title: string;
  desc: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <svg
      viewBox={viewBox}
      role="img"
      aria-label={title}
      aria-describedby={`${id}-desc`}
      className={`block h-auto w-full select-none ${className}`}
      fontFamily="inherit"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <desc id={`${id}-desc`}>{desc}</desc>
      {children}
    </svg>
  );
}
