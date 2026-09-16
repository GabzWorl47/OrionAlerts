import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import { site } from "@/lib/site";
import { getSiteOrigin } from "@/lib/industries/site-origin";
import {
  DEFAULT_OG_IMAGE,
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
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${SITE_DEFAULT_TITLE} | ${site.name}`,
    description: SITE_DEFAULT_DESCRIPTION,
    url: "/",
    images: [{ url: DEFAULT_OG_IMAGE, alt: site.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_DEFAULT_TITLE} | ${site.name}`,
    description: SITE_DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: [{ url: "/Images/favicon.png", type: "image/png" }],
    apple: [{ url: "/Images/favicon.png", type: "image/png" }],
    shortcut: "/Images/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} h-full antialiased`}>
      <body className="site-shell flex min-h-full flex-col bg-bg font-sans text-text">
        {/*
          Organization ships on every page, not just the homepage. An AI crawler
          or assistant that lands directly on /solutions/vms reads one page in
          isolation — without this it has no way to resolve who the provider is,
          and the `@id` references from Service/SoftwareApplication dangle.
        */}
        <JsonLdScript data={organizationJsonLd()} />
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
