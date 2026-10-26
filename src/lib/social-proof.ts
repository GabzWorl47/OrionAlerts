/*
 * Client logos and testimonials. Kept free of imports so client components can
 * use them without bundling `@/lib/site` (see the re-export in homepage.ts).
 */

export type ClientLogo = {
  id: string;
  name: string;
  /** Optional image; omit until approved logos land. */
  logoSrc?: string;
  href?: string;
};

export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  organization: string;
  designation: string;
  rating?: number;
  /** When true, item is never shown in TestimonialsSection. */
  placeholder?: boolean;
};

/** Client logos for the trusted-organizations marquee. */
export const clients: ClientLogo[] = [
  { id: "axis", name: "Axis Bank", logoSrc: "/Images/clients/axis.webp" },
  { id: "icici", name: "ICICI Bank", logoSrc: "/Images/clients/icici.webp" },
  { id: "kotak", name: "Kotak Mahindra Bank", logoSrc: "/Images/clients/kotak.webp" },
  { id: "bob", name: "Bank of Baroda", logoSrc: "/Images/clients/bob.webp" },
  { id: "boi", name: "Bank of India", logoSrc: "/Images/clients/boi.webp" },
  { id: "pnb", name: "Punjab National Bank", logoSrc: "/Images/clients/pnb.webp" },
  { id: "idbi", name: "IDBI Bank", logoSrc: "/Images/clients/idbi.webp" },
  { id: "idfc", name: "IDFC First Bank", logoSrc: "/Images/clients/idfc.webp" },
  { id: "yes-bank", name: "Yes Bank", logoSrc: "/Images/clients/yes-bank.webp" },
  { id: "union-bank", name: "Union Bank of India", logoSrc: "/Images/clients/union-bank.webp" },
  { id: "south-indian-bank", name: "South Indian Bank", logoSrc: "/Images/clients/south-indian-bank.webp" },
  { id: "indian-oil", name: "Indian Oil", logoSrc: "/Images/clients/indian-oil.webp" },
  { id: "starbucks", name: "Starbucks", logoSrc: "/Images/clients/starbucks.webp" },
  { id: "dominos", name: "Domino's", logoSrc: "/Images/clients/dominos.webp" },
  { id: "pizzahut", name: "Pizza Hut", logoSrc: "/Images/clients/pizzahut.webp" },
  { id: "rustomjee", name: "Rustomjee", logoSrc: "/Images/clients/rustomjee.webp" },
  { id: "inox", name: "INOX", logoSrc: "/Images/clients/inox.webp" },
  { id: "shoppers-stop", name: "Shoppers Stop", logoSrc: "/Images/clients/shoppers-stop.webp" },
  { id: "stanza", name: "Stanza Living", logoSrc: "/Images/clients/stanza.webp" },
  { id: "yrf", name: "Yash Raj Films", logoSrc: "/Images/clients/yrf.webp" },
  { id: "tseries", name: "T-Series", logoSrc: "/Images/clients/tseries.webp" },
  { id: "navy", name: "Indian Navy", logoSrc: "/Images/clients/navy.webp" },
  { id: "police", name: "Police", logoSrc: "/Images/clients/police.webp" },
  { id: "mcd", name: "Municipal Corporation of Delhi", logoSrc: "/Images/clients/mcd.webp" },
];

/** Customer testimonials shown on homepage and industries pages. Empty until approved quotes land. */
export const testimonials: Testimonial[] = [];
