import { ReactNode } from "react";

/** Adds top offset for the fixed transparent header on inner pages. */
export function PageShell({ children }: { children: ReactNode }) {
  return <div className="pt-[var(--header-h)]">{children}</div>;
}
