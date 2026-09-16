import { solutions } from "@/lib/site";

export type UniversalVideoCard = {
  id: string;
  title: string;
  description: string;
  src: string;
  poster?: string;
};

export type HomepageSolution = {
  slug: string;
  name: string;
  description: string;
  benefits: string[];
  media: { poster: string; src?: string; alt: string };
  ctaLabel: string;
  ctaHref: string;
};

export type ClientLogo = {
  id: string;
  name: string;
  /** Optional image; omit until approved logos land. */
  logoSrc?: string;
  href?: string;
};

export type CertificateBadge = {
  id: string;
  name: string;
  label: string;
  logoSrc: string;
};

export type ComparisonRow = {
  traditional: string;
  orion: string;
};

export type UseCase = {
  slug: string;
  title: string;
  description: string;
  poster: string;
  previewSrc?: string;
  href: string;
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

/** Four equally weighted end-to-end platform videos shown under the homepage hero. */
export const universalSolutionVideos: UniversalVideoCard[] = [
  {
    id: "multi-site-ops",
    title: "Multi-Site Live Operations",
    description:
      "Operate live walls, recording, and incident response across facilities from one command view.",
    src: "/Videos/workflow/live-wall.mp4",
  },
  {
    id: "ai-alerts",
    title: "AI Detection & Real-Time Alerts",
    description:
      "Turn camera streams into prioritized alerts for safety, intrusion, and operational exceptions.",
    src: "/Videos/video/AI_video_analytics_real-time_alerts_202607281709.mp4",
    poster: "/visuals/solutions/ai-vision.png",
  },
  {
    id: "health-uptime",
    title: "Infrastructure Health & Uptime",
    description:
      "Detect camera, NVR, storage, and network issues before they create operational blind spots.",
    src: "/Videos/video/health-monitoring.mp4",
    poster:
      "/Images/ChatGPT%20Image%20Sep%208%2C%202026%2C%2012_54_34%20PM.png",
  },
  {
    id: "estate-ops",
    title: "Assets, AMC & Uptime",
    description:
      "Track assets, maintenance contracts, and infrastructure health so operations stay ready.",
    src: "/Videos/video/Asset%20tracking.mp4",
    poster: "/Images/ChatGPT%20Image%20Sep%208%2C%202026%2C%2012_29_40%20PM.png",
  },
];

/** Client logos for the trusted-organizations marquee. */
export const clients: ClientLogo[] = [
  { id: "axis", name: "Axis Bank", logoSrc: "/Images/clients/axis.png" },
  { id: "icici", name: "ICICI Bank", logoSrc: "/Images/clients/icici.png" },
  { id: "kotak", name: "Kotak Mahindra Bank", logoSrc: "/Images/clients/kotak.png" },
  { id: "bob", name: "Bank of Baroda", logoSrc: "/Images/clients/bob.png" },
  { id: "boi", name: "Bank of India", logoSrc: "/Images/clients/boi.png" },
  { id: "pnb", name: "Punjab National Bank", logoSrc: "/Images/clients/pnb.png" },
  { id: "idbi", name: "IDBI Bank", logoSrc: "/Images/clients/idbi.png" },
  { id: "idfc", name: "IDFC First Bank", logoSrc: "/Images/clients/idfc.png" },
  { id: "yes-bank", name: "Yes Bank", logoSrc: "/Images/clients/yes-bank.png" },
  { id: "union-bank", name: "Union Bank of India", logoSrc: "/Images/clients/union-bank.png" },
  { id: "south-indian-bank", name: "South Indian Bank", logoSrc: "/Images/clients/south-indian-bank.png" },
  { id: "indian-oil", name: "Indian Oil", logoSrc: "/Images/clients/indian-oil.png" },
  { id: "starbucks", name: "Starbucks", logoSrc: "/Images/clients/starbucks.png" },
  { id: "dominos", name: "Domino's", logoSrc: "/Images/clients/dominos.png" },
  { id: "pizzahut", name: "Pizza Hut", logoSrc: "/Images/clients/pizzahut.png" },
  { id: "rustomjee", name: "Rustomjee", logoSrc: "/Images/clients/rustomjee.png" },
  { id: "inox", name: "INOX", logoSrc: "/Images/clients/inox.png" },
  { id: "shoppers-stop", name: "Shoppers Stop", logoSrc: "/Images/clients/shoppers-stop.png" },
  { id: "stanza", name: "Stanza Living", logoSrc: "/Images/clients/stanza.png" },
  { id: "yrf", name: "Yash Raj Films", logoSrc: "/Images/clients/yrf.png" },
  { id: "tseries", name: "T-Series", logoSrc: "/Images/clients/tseries.png" },
  { id: "navy", name: "Indian Navy", logoSrc: "/Images/clients/navy.png" },
  { id: "police", name: "Police", logoSrc: "/Images/clients/police.png" },
  { id: "mcd", name: "Municipal Corporation of Delhi", logoSrc: "/Images/clients/mcd.png" },
];

/** Colored compliance / trust marks for the #customers section. */
export const certificates: CertificateBadge[] = [
  {
    id: "onvif",
    name: "ONVIF",
    label: "ONVIF Conformant",
    logoSrc: "/Images/certificates/onvif.svg",
  },
  {
    id: "fips",
    name: "FIPS 140-2",
    label: "FIPS 140-2 Support",
    logoSrc: "/Images/certificates/fips-140-2.svg",
  },
  {
    id: "safety-act",
    name: "SAFETY Act",
    label: "SAFETY Act Designation",
    logoSrc: "/Images/certificates/safety-act.svg",
  },
  {
    id: "ndaa",
    name: "NDAA",
    label: "NDAA Compliant",
    logoSrc: "/Images/certificates/ndaa.svg",
  },
  {
    id: "taa",
    name: "TAA",
    label: "TAA Compliant",
    logoSrc: "/Images/certificates/taa.svg",
  },
  {
    id: "soc-2",
    name: "SOC 2",
    label: "SOC 2 Type II",
    logoSrc: "/Images/certificates/soc2.png",
  },
  {
    id: "iso-27001",
    name: "ISO 27001",
    label: "ISO 27001 Certified",
    logoSrc: "/Images/certificates/iso-27001.png",
  },
  {
    id: "iso-27017",
    name: "ISO 27017",
    label: "ISO 27017 Cloud Security",
    logoSrc: "/Images/certificates/iso-27017.svg",
  },
  {
    id: "iso-27018",
    name: "ISO 27018",
    label: "ISO 27018 Cloud Privacy",
    logoSrc: "/Images/certificates/iso-27018.svg",
  },
  {
    id: "iso-27701",
    name: "ISO 27701",
    label: "ISO 27701 Privacy",
    logoSrc: "/Images/certificates/iso-27701.svg",
  },
  {
    id: "fedramp",
    name: "FedRAMP",
    label: "FedRAMP Moderate",
    logoSrc: "/Images/certificates/fedramp.svg",
  },
];

export const homepageSolutions: HomepageSolution[] = solutions.map((solution) => ({
  slug: solution.slug,
  name: solution.shortName,
  description: solution.summary.split("\n")[0],
  benefits: solution.benefits.slice(0, 5),
  media: {
    poster: solution.image,
    src: solution.introVideo,
    alt: `${solution.shortName} product preview`,
  },
  ctaLabel: "Explore Solution",
  ctaHref: `/solutions/${solution.slug}`,
}));

export const comparisonRows: ComparisonRow[] = [
  {
    traditional: "Manual monitoring",
    orion: "Intelligent real-time monitoring",
  },
  {
    traditional: "Reactive incident response",
    orion: "Proactive alerts",
  },
  {
    traditional: "Limited automation",
    orion: "Automated event detection",
  },
  {
    traditional: "Delayed notifications",
    orion: "Instant notifications",
  },
  {
    traditional: "High dependence on human observation",
    orion: "Centralized multi-location management",
  },
  {
    traditional: "Difficult to manage multiple locations",
    orion: "Faster response and stronger operational visibility",
  },
];

const useCasePoster = "/visuals/solutions/ai-vision.png";
const useCasePreview = "/Videos/workflow/ai-alert.mp4";

export const aiUseCases: UseCase[] = [
  {
    slug: "fire-smoke-detection",
    title: "Fire and Smoke Detection",
    description: "Spot early smoke and fire indicators across monitored zones.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/Fire%20and%20Smoke%20Detection.mp4",
    href: "/solutions/ai-analytics",
  },
  {
    slug: "fall-detection",
    title: "Fall Detection",
    description: "Identify falls quickly so responders can intervene sooner.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/Fall%20Detection.mp4",
    href: "/solutions/ai-analytics",
  },
  {
    slug: "unauthorized-area-entry",
    title: "Unauthorized Area Entry",
    description: "Alert when people enter areas they should not access.",
    poster: useCasePoster,
    previewSrc: useCasePreview,
    href: "/solutions/ai-analytics",
  },
  {
    slug: "perimeter-intrusion",
    title: "Perimeter Intrusion Detection",
    description: "Monitor fences, gates, and outer boundaries continuously.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/Perimeter%20Intrusion%20Detection.mp4",
    href: "/solutions/ai-analytics",
  },
  {
    slug: "crowd-detection",
    title: "Crowd Detection",
    description: "Track density build-ups that need operational attention.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/Crowd%20Detection.mp4",
    href: "/solutions/ai-analytics",
  },
  {
    slug: "loitering-detection",
    title: "Loitering Detection",
    description: "Flag prolonged presence in sensitive or idle zones.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/Loitering%20Detection.mp4",
    href: "/solutions/ai-analytics",
  },
  {
    slug: "camera-tampering",
    title: "Camera Tampering Detection",
    description: "Detect blocked, moved, or otherwise compromised cameras.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/Camera%20tampering%20detection.mp4",
    href: "/solutions/ai-analytics",
  },
  {
    slug: "no-motion-black-screen",
    title: "No-Motion or Black-Screen Alert",
    description: "Catch failed feeds and silent sensors before blind spots grow.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/No-Motion%20Or%20Black-Screen%20Alert.mp4",
    href: "/solutions/health-monitoring",
  },
  {
    slug: "vehicle-detection",
    title: "Vehicle Detection",
    description: "Monitor vehicle presence, movement, and restricted approaches.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/Vehicle%20Detection.mp4",
    href: "/solutions/ai-analytics",
  },
  {
    slug: "safety-compliance",
    title: "Safety Compliance Detection",
    description: "Enforce PPE and site safety rules with visual AI checks.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/Safety%20Compliance%20Detection.mp4",
    href: "/solutions/ai-analytics",
  },
  {
    slug: "abandoned-object",
    title: "Abandoned Object Detection",
    description: "Identify unattended items that may indicate risk.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/Abandoned%20Object%20Detection.mp4",
    href: "/solutions/ai-analytics",
  },
  {
    slug: "restricted-zone",
    title: "Restricted-Zone Monitoring",
    description: "Keep prohibited zones clear with continuous zone analytics.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/Restricted-Zone%20Monitoring.mp4",
    href: "/solutions/ai-analytics",
  },
];

/** Customer testimonials shown on homepage and industries pages. Empty until approved quotes land. */
export const testimonials: Testimonial[] = [];
