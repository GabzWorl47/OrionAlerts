import type { Metadata, Viewport } from "next";
import { Outfit } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { RouteTransition } from "@/components/RouteTransition";
import { site } from "@/lib/site";
import { getSiteOrigin } from "@/lib/industries/site-origin";
import {
  DEFAULT_OG_IMAGE,
  DEFAULT_OG_IMAGE_SIZE,
  OG_LOCALE,
  SITE_DEFAULT_DESCRIPTION,
  SITE_DEFAULT_TITLE,
} from "@/lib/seo";
import { JsonLdScript, organizationJsonLd } from "@/lib/jsonld";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const siteOrigin = getSiteOrigin();

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin),
  title: {
    default: `${SITE_DEFAULT_TITLE} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description: SITE_DEFAULT_DESCRIPTION,
  applicationName: site.name,
  // No default canonical: every indexable route sets a self-referencing one via
  // buildPageMetadata. A root default would leak a homepage canonical into any
  // route that forgets to, which is worse than no canonical at all.
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: OG_LOCALE,
    title: `${SITE_DEFAULT_TITLE} | ${site.name}`,
    description: SITE_DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, ...DEFAULT_OG_IMAGE_SIZE, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_DEFAULT_TITLE} | ${site.name}`,
    description: SITE_DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  // No `icons` here: the file conventions emit them. src/app/icon.png is a 48px
  // favicon and src/app/apple-icon.png the 180px touch icon; the 192/512 PNGs
  // in public/Images are referenced only by the web manifest (manifest.ts).
};

export const viewport: Viewport = {
  themeColor: "#0c2238",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className={`${outfit.variable} h-full antialiased`}>
      <body className="site-shell flex min-h-full flex-col bg-bg font-sans text-text">
        {/*
          Organization ships on every page, not just the homepage. An AI crawler
          or assistant that lands directly on /solutions/vms reads one page in
          isolation — without this it has no way to resolve who the provider is,
          and the `@id` references from Service/SoftwareApplication dangle.
        */}
        <JsonLdScript data={organizationJsonLd()} />
        <SiteChrome>{children}</SiteChrome>
        <RouteTransition />
      </body>
    </html>
  );
}
