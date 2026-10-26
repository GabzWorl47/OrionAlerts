"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { AiAssistant } from "@/components/AiAssistant";
import { BookDemoModalProvider } from "@/components/BookDemoModal";
import { ConsentProvider } from "@/components/consent/ConsentProvider";
import { CookieConsentGate } from "@/components/consent/CookieConsentGate";

/**
 * Client half of the site chrome. `header` and `footer` arrive pre-rendered
 * from the server component SiteChrome, so the site data they need is never
 * imported by client code.
 *
 * Site components render `m.*` (not `motion.*`) so only the `domAnimation`
 * feature set ships in the shared bundle. Components that need layout/drag
 * animations scope their own `<LazyMotion features={domMax}>` (see FaqsExperience).
 */
export function SiteChromeClient({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  return (
    <LazyMotion features={domAnimation} strict>
      <SiteChromeInner header={header} footer={footer}>
        {children}
      </SiteChromeInner>
    </LazyMotion>
  );
}

function SiteChromeInner({
  header,
  footer,
  children,
}: {
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}) {
  const pathname = usePathname();
  const isAdmin = pathname.startsWith("/admin");

  if (isAdmin) {
    return <main className="flex-1">{children}</main>;
  }

  return (
    <ConsentProvider>
      <a
        href="#main-content"
        className="absolute left-4 top-4 z-[100] -translate-y-[120%] rounded-[12px] bg-blue px-4 py-2 text-sm font-semibold text-white transition focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-cyan"
      >
        Skip to main content
      </a>
      <BookDemoModalProvider>
        {header}
        <main id="main-content" className="flex-1">
          {children}
        </main>
        {footer}
        <AiAssistant />
        <CookieConsentGate />
      </BookDemoModalProvider>
    </ConsentProvider>
  );
}
