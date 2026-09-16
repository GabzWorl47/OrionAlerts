"use client";

import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AiAssistant } from "@/components/AiAssistant";
import { BookDemoModalProvider } from "@/components/BookDemoModal";
import { ConsentProvider } from "@/components/consent/ConsentProvider";
import { CookieConsentUI } from "@/components/consent/CookieConsentUI";

export function SiteChrome({ children }: { children: ReactNode }) {
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
        <CookieConsentUI />
      </BookDemoModalProvider>
    </ConsentProvider>
  );
}
