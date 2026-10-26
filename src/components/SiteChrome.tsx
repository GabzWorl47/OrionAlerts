"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { LazyMotion, domAnimation } from "framer-motion";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AiAssistant } from "@/components/AiAssistant";
import { BookDemoModalProvider } from "@/components/BookDemoModal";
import { ConsentProvider } from "@/components/consent/ConsentProvider";
import { CookieConsentGate } from "@/components/consent/CookieConsentGate";

/**
 * Site components render `m.*` (not `motion.*`) so only the `domAnimation`
 * feature set ships in the shared bundle. Components that need layout/drag
 * animations scope their own `<LazyMotion features={domMax}>` (see FaqsExperience).
 */
export function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      <SiteChromeInner>{children}</SiteChromeInner>
    </LazyMotion>
  );
}

function SiteChromeInner({ children }: { children: ReactNode }) {
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
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <AiAssistant />
        <CookieConsentGate />
      </BookDemoModalProvider>
    </ConsentProvider>
  );
}
