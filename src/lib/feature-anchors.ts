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
