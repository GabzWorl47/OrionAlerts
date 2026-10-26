import { industries, solutions } from "@/lib/site";

/** Human label for an internal solution / platform href. */
export function solutionLabel(href: string): string {
  if (href === "/nebula-os") return "Explore Nebula OS";
  const slug = href.replace(/^\/solutions\//, "");
  const solution = solutions.find((s) => s.slug === slug);
  return solution ? `Explore ${solution.name}` : "Explore the solution";
}

/** Solution name for an href, e.g. "/solutions/vms" → "Video Management System (VMS)". */
export function solutionName(href: string): string {
  if (href === "/nebula-os") return "Nebula OS";
  const slug = href.replace(/^\/solutions\//, "");
  return solutions.find((s) => s.slug === slug)?.name ?? slug;
}

/** Industry display name for a slug (falls back to the slug). */
export function industryName(slug: string): string {
  return industries.find((i) => i.slug === slug)?.name ?? slug;
}
