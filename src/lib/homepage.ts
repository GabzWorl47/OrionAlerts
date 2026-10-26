import { site, solutions } from "@/lib/site";

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
  /** Solution module the detection belongs to (read by src/lib/use-cases.ts — keep). */
  href: string;
  /** Dedicated use-case page the homepage card deep-links to. */
  pageHref: string;
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
    src: "/Videos/outcomes/ai-analytics.mp4",
    poster: "/visuals/solutions/ai-vision.webp",
  },
  {
    id: "health-uptime",
    title: "Infrastructure Health & Uptime",
    description:
      "Detect camera, NVR, storage, and network issues before they create operational blind spots.",
    src: "/Videos/video/health-monitoring.mp4",
    poster:
      "/Images/health-monitoring-overview.webp",
  },
  {
    id: "estate-ops",
    title: "Assets, AMC & Uptime",
    description:
      "Track assets, maintenance contracts, and infrastructure health so operations stay ready.",
    src: "/Videos/video/asset-tracking.mp4",
    poster: "/Images/asset-tracking-overview.webp",
  },
];

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

/** Homepage order: record and watch, detect, keep cameras healthy, then assets and maintenance. */
const HOMEPAGE_SOLUTION_ORDER = [
  "vms",
  "ai-analytics",
  "health-monitoring",
  "asset-tracking",
  "amc-management",
];

export const homepageSolutions: HomepageSolution[] = HOMEPAGE_SOLUTION_ORDER.flatMap((slug) => {
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) return [];
  const leadFeature = solution.features[0]?.title;
  return [
    {
      slug: solution.slug,
      name: solution.name,
      description: solution.oneLiner || solution.summary.split("\n")[0],
      benefits: solution.benefits.slice(0, 4),
      media: {
        poster: solution.image,
        src: solution.introVideo,
        alt: leadFeature
          ? `OrionAlerts ${solution.name}: ${leadFeature.toLowerCase()}`
          : `OrionAlerts ${solution.name} screen`,
      },
      ctaLabel: `Explore ${solution.shortName}`,
      ctaHref: `/solutions/${solution.slug}`,
    },
  ];
});

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

const useCasePoster = "/visuals/solutions/ai-vision.webp";
const useCasePreview = "/Videos/workflow/ai-alert.mp4";

export const aiUseCases: UseCase[] = [
  {
    slug: "fire-smoke-detection",
    title: "Fire and Smoke Detection",
    description: "Spot early smoke and fire indicators across monitored zones.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/fire-smoke-detection.mp4",
    href: "/solutions/ai-analytics",
    pageHref: "/use-cases/fire-smoke-detection",
  },
  {
    slug: "fall-detection",
    title: "Fall Detection",
    description: "Identify falls quickly so responders can intervene sooner.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/fall-detection.mp4",
    href: "/solutions/ai-analytics",
    pageHref: "/use-cases/fall-detection",
  },
  {
    slug: "unauthorized-area-entry",
    title: "Unauthorized Area Entry",
    description: "Alert when people enter areas they should not access.",
    poster: useCasePoster,
    previewSrc: useCasePreview,
    href: "/solutions/ai-analytics",
    pageHref: "/use-cases/unauthorized-area-entry",
  },
  {
    slug: "perimeter-intrusion",
    title: "Perimeter Intrusion Detection",
    description: "Monitor fences, gates, and outer boundaries continuously.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/perimeter-intrusion-detection.mp4",
    href: "/solutions/ai-analytics",
    pageHref: "/use-cases/perimeter-intrusion-detection",
  },
  {
    slug: "crowd-detection",
    title: "Crowd Detection",
    description: "Track density build-ups that need operational attention.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/crowd-detection.mp4",
    href: "/solutions/ai-analytics",
    pageHref: "/use-cases/crowd-detection",
  },
  {
    slug: "loitering-detection",
    title: "Loitering Detection",
    description: "Flag prolonged presence in sensitive or idle zones.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/loitering-detection.mp4",
    href: "/solutions/ai-analytics",
    pageHref: "/use-cases/loitering-detection",
  },
  {
    slug: "camera-tampering",
    title: "Camera Tampering Detection",
    description: "Detect blocked, moved, or otherwise compromised cameras.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/camera-tampering-detection.mp4",
    href: "/solutions/ai-analytics",
    pageHref: "/use-cases/camera-tampering-detection",
  },
  {
    slug: "no-motion-black-screen",
    title: "No-Motion or Black-Screen Alert",
    description: "Catch failed feeds and silent sensors before blind spots grow.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/no-motion-black-screen-alert.mp4",
    href: "/solutions/health-monitoring",
    pageHref: "/use-cases/no-motion-black-screen-alert",
  },
  {
    slug: "vehicle-detection",
    title: "Vehicle Detection",
    description: "Monitor vehicle presence, movement, and restricted approaches.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/vehicle-detection.mp4",
    href: "/solutions/ai-analytics",
    pageHref: "/use-cases/vehicle-detection",
  },
  {
    slug: "safety-compliance",
    title: "Safety Compliance Detection",
    description: "Enforce PPE and site safety rules with visual AI checks.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/safety-compliance-detection.mp4",
    href: "/solutions/ai-analytics",
    pageHref: "/use-cases/safety-compliance-detection",
  },
  {
    slug: "abandoned-object",
    title: "Abandoned Object Detection",
    description: "Identify unattended items that may indicate risk.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/abandoned-object-detection.mp4",
    href: "/solutions/ai-analytics",
    pageHref: "/use-cases/abandoned-object-detection",
  },
  {
    slug: "restricted-zone",
    title: "Restricted-Zone Monitoring",
    description: "Keep prohibited zones clear with continuous zone analytics.",
    poster: useCasePoster,
    previewSrc: "/Videos/video/restricted-zone-monitoring.mp4",
    href: "/solutions/ai-analytics",
    pageHref: "/use-cases/restricted-zone-monitoring",
  },
];

/** Customer testimonials shown on homepage and industries pages. Empty until approved quotes land. */
export const testimonials: Testimonial[] = [];

/**
 * The "What is OrionAlerts?" Q&A, shown as its own section under the hero
 * (HomeEntityStatement) rather than repeated in the FAQ list.
 */
export const homepageEntityFaq = {
  question: "What is OrionAlerts?",
  answer: site.entityStatement,
};

/**
 * Homepage Q&A list (emitted with `homepageEntityFaq` as FAQPage JSON-LD on `/`). Facts only: the
 * entity statement, ONVIF/RTSP/SDK support, the per-site node + Orion Cloud
 * model and the pricing factors already published on /pricing.
 */
export const homepageFaqs: { question: string; answer: string }[] = [
  {
    question: "Does OrionAlerts work with my existing CCTV cameras?",
    answer:
      "Yes. OrionAlerts connects to supported IP cameras and recorders over ONVIF, RTSP and vendor SDKs, so you add AI alerts and camera health monitoring without replacing working cameras. Compatibility is confirmed model by model during solution design, and older cameras are evaluated individually.",
  },
  {
    question: "Can OrionAlerts monitor many branches or plants?",
    answer:
      "Yes. Each site runs its own Nebula OS node for video, recording and AI detection, and Orion Cloud gives one central view of alerts, camera health, assets and maintenance across every branch, plant or warehouse. Single sites use the same platform, so you can start with one location and add more.",
  },
  {
    question: "Does my video leave the premises?",
    answer:
      "Not in the standard deployment. Video and AI processing stay on the on-site Nebula OS node inside your network; only health status, alerts and configuration sync to Orion Cloud for central management. That keeps bandwidth needs low, and the on-site node is built to work through weak or intermittent internet links.",
  },
  {
    question: "How is OrionAlerts priced?",
    answer:
      "OrionAlerts is quoted per deployment rather than from a public price list. The quote depends on your camera and site count, the modules you need, how many channels run AI detections, your hardware and deployment approach, and the support scope. Share those details through the contact form or book a demo.",
  },
];
