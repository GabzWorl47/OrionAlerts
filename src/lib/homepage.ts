import { site, solutions } from "@/lib/site";
import { mediumImage } from "@/lib/responsive-images";

// Client logos and testimonials live in their own module so the client
// components that render them (LogoMarquee, TestimonialsSection) don't pull
// this file — and through it all of `@/lib/site` — into the browser bundle.
export { clients, testimonials, type ClientLogo, type Testimonial } from "@/lib/social-proof";

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
    poster: "/visuals/solutions/ai-vision-clean.webp",
  },
  {
    id: "health-uptime",
    title: "Infrastructure Health & Uptime",
    description:
      "Detect camera, NVR, storage, and network issues before they create operational blind spots.",
    src: "/Videos/video/health-monitoring.mp4",
    poster:
      "/Images/health-monitoring-overview-clean.webp",
  },
  {
    id: "estate-ops",
    title: "Assets, AMC & Uptime",
    description:
      "Track assets, maintenance contracts, and infrastructure health so operations stay ready.",
    src: "/Videos/video/asset-tracking.mp4",
    poster: "/Images/asset-tracking-overview-clean.webp",
  },
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
        // Rendered in a ~600px card, so the 828px copy is plenty.
        poster: mediumImage(solution.image),
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

const useCasePoster = "/visuals/solutions/ai-vision-clean.webp";
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
