import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SiteChromeClient } from "@/components/SiteChromeClient";
import { buildHeaderNav } from "@/lib/mega-menu";
import { industries, solutions } from "@/lib/site";

/**
 * Server component. The header (client) gets slim, precomputed link lists and
 * the footer is a server component, so `@/lib/site` (all solution features,
 * FAQs and industries) stays out of the JS shipped on every page.
 */
const headerNav = buildHeaderNav(solutions, industries);

export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <SiteChromeClient header={<Header nav={headerNav} />} footer={<Footer />}>
      {children}
    </SiteChromeClient>
  );
}
