/** Stable URL-safe id from a feature / capability title. */
export function featureAnchorId(title: string) {
  return title
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function featureDeepLink(solutionSlug: string, title: string) {
  return `/solutions/${solutionSlug}#${featureAnchorId(title)}`;
}

/**
 * Old anchor ids that still resolve after a feature was renamed or merged
 * (bookmarks, search results and external links keep working). Keyed by the
 * current feature title; each old id is rendered as an extra anchor element on
 * that feature's row.
 */
export const featureAnchorAliases: Record<string, string[]> = {
  // AI video analytics (Oct 2026 restructure)
  "Intrusion & Restricted-Zone Detection": ["intrusion-detection", "restricted-area-monitoring"],
  "PPE & Safety Compliance Detection": ["intrusion-ppe-and-safety-monitoring"],
  // Health monitoring
  "Real-Time Device Health Monitoring": ["camera-nvr-and-server-status"],
  "Storage & Retention Monitoring": ["recording-and-storage-health-monitoring"],
  "Device Failure Alerts": ["instant-alerts-and-notifications"],
};
