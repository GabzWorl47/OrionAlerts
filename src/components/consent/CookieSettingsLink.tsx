"use client";

import type { ReactNode } from "react";
import { openCookieSettings } from "@/components/consent/ConsentProvider";

/** Client link that opens the site-wide Cookie Settings dialog. */
export function CookieSettingsLink({
  className,
  children = "Cookie Settings",
}: {
  className?: string;
  children?: ReactNode;
}) {
  return (
    <button type="button" onClick={openCookieSettings} className={className}>
      {children}
    </button>
  );
}
