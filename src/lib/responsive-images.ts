/**
 * Smaller copies of the large solution / blog renders.
 *
 * `images.unoptimized` is on (deliberately), so next/image never resizes and
 * phones were downloading 1536px+ heroes and posters. These 828px-wide copies
 * (`<name>-828w.webp`, generated with `cwebp -q 80 -m 6 -resize 828 0`) sit
 * next to the originals in public/. Only list files that actually have one;
 * anything else (e.g. admin uploads) falls back to the original.
 *
 * Value = intrinsic width of the original, for the srcSet `w` descriptor.
 */
const ORIGINAL_WIDTHS = new Map<string, number>([
  ["/Images/solutions/centralized-live-monitoring-playback.webp", 1536],
  ["/Images/solutions/real-time-ai-video-analytics.webp", 1536],
  ["/Images/solutions/secure-remote-access-clean.webp", 1536],
  ["/Images/solutions/centralized-asset-inventory.webp", 1586],
  ["/Images/solutions/real-time-device-health-monitoring.webp", 1586],
  ["/Images/solutions/amc-warranty-management.webp", 1586],
  ["/Images/solutions/asset-tracking-hero.webp", 1586],
  ["/Images/solutions/amc-management-hero.webp", 1586],
  ["/Images/solutions/health-monitoring-hero.webp", 1586],
  ["/Images/solutions/people-vehicle-occupancy-analytics.webp", 1586],
  ["/Images/solutions/maintenance-history.webp", 1586],
  ["/Images/solutions/intrusion-ppe-safety-monitoring.webp", 1586],
  ["/Images/solutions/instant-event-detection-smart-alerts.webp", 1586],
  ["/Images/solutions/event-alarm-management.webp", 1586],
  ["/Images/solutions/camera-nvr-server-status.webp", 1586],
  ["/Images/solutions/asset-lifecycle-management.webp", 1586],
  ["/Images/architecture-vms-clean.webp", 1672],
]);

const SMALL_WIDTH = 828;

function smallVariant(src: string): string {
  return src.replace(/\.webp$/, `-${SMALL_WIDTH}w.webp`);
}

/** The 828px copy when one exists, else the original (for card-sized slots and video posters). */
export function mediumImage(src: string): string {
  return ORIGINAL_WIDTHS.has(src) ? smallVariant(src) : src;
}

/** `srcSet` for a plain `<img>`, or undefined when no smaller copy exists. */
export function responsiveSrcSet(src: string): string | undefined {
  const width = ORIGINAL_WIDTHS.get(src);
  if (!width) return undefined;
  return `${smallVariant(src)} ${SMALL_WIDTH}w, ${src} ${width}w`;
}
