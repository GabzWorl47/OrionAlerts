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
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
  },
  {
    id: "estate-ops",
    title: "Assets, AMC & Uptime",
    description:
      "Track assets, maintenance contracts, and infrastructure health so operations stay ready.",
    src: "/Videos/video/Asset%20tracking.mp4",
    poster: "/visuals/solutions/asset-tracking.png",
  },
];

/**
 * Trust marquee entries reused from existing landing trust/partner naming patterns.
 * Replace with approved logo assets (`logoSrc`) when marketing supplies them.
 */
export const clients: ClientLogo[] = [
  { id: "manufacturing", name: "Manufacturing" },
  { id: "logistics", name: "Logistics & Warehousing" },
  { id: "corporate", name: "Corporate Campuses" },
  { id: "critical", name: "Critical Infrastructure" },
  { id: "pharma", name: "Pharma & Life Sciences" },
  { id: "energy", name: "Energy & Utilities" },
  { id: "retail", name: "Retail Operations" },
  { id: "smart-cities", name: "Smart Cities" },
  { id: "camera-oem", name: "Camera OEM" },
  { id: "access", name: "Access Control" },
  { id: "cloud", name: "Cloud Infra" },
  { id: "network", name: "Network" },
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

/** Customer testimonials shown on homepage and industries pages. */
export const testimonials: Testimonial[] = [
  {
    id: "t-1",
    quote:
      "Alert noise dropped sharply and operators started trusting the queue again across our multi-plant estate.",
    name: "Rajesh Mehta",
    organization: "Aarav Precision Components",
    designation: "Head of Security",
    rating: 5,
  },
  {
    id: "t-2",
    quote:
      "Investigations that used to take hours of footage review now start from the right clip within minutes.",
    name: "Sneha Kulkarni",
    organization: "Northline Logistics",
    designation: "Operations Lead",
    rating: 5,
  },
  {
    id: "t-3",
    quote:
      "One command layer for live monitoring, AI alerts, and estate health keeps our facilities team aligned.",
    name: "Vikram Nair",
    organization: "Crestline Infrastructure",
    designation: "Director of Facilities",
    rating: 5,
  },
  {
    id: "t-4",
    quote:
      "PPE exceptions are caught on the line instead of in the weekly audit. Supervisors respond while the shift is still live.",
    name: "Ananya Krishnan",
    organization: "Orbit Auto Systems",
    designation: "Plant Safety Manager",
    rating: 5,
  },
  {
    id: "t-5",
    quote:
      "Camera downtime used to go unnoticed for hours. Health alerts now keep every campus node online.",
    name: "Farhan Siddiqui",
    organization: "Greenfield University",
    designation: "Campus Security Lead",
    rating: 4,
  },
  {
    id: "t-6",
    quote:
      "Dispatch disputes are easier to close because we can pull the exact packing and rider handoff moment.",
    name: "Meera Joshi",
    organization: "SwiftBasket Commerce",
    designation: "Regional Ops Manager",
    rating: 5,
  },
  {
    id: "t-7",
    quote:
      "Restricted-zone breaches in the cleanroom are flagged instantly, which helps us stay audit-ready every shift.",
    name: "Dr. Kavita Rao",
    organization: "Helix Formulations",
    designation: "Compliance Officer",
    rating: 5,
  },
  {
    id: "t-8",
    quote:
      "Loading-bay congestion and unsafe forklift movement are visible in real time, not after an incident report.",
    name: "Imran Qureshi",
    organization: "HarborStack Warehousing",
    designation: "Warehouse Superintendent",
    rating: 5,
  },
  {
    id: "t-9",
    quote:
      "Perimeter events at remote sites reach the control room before crews are even dispatched.",
    name: "Priya Deshmukh",
    organization: "GridNova Utilities",
    designation: "Control Room Lead",
    rating: 5,
  },
  {
    id: "t-10",
    quote:
      "Queue and crowd pressure in the concourse are easier to manage when alerts arrive with usable context.",
    name: "Arjun Malhotra",
    organization: "Skybridge Terminal Services",
    designation: "Terminal Operations Manager",
    rating: 4,
  },
  {
    id: "t-11",
    quote:
      "After-hours intrusion on construction plots is no longer a next-morning discovery for our security desk.",
    name: "Nisha Verma",
    organization: "SummitBuild Projects",
    designation: "Site Security Coordinator",
    rating: 5,
  },
  {
    id: "t-12",
    quote:
      "Branch teams get clearer evidence for suspicious activity without scrubbing hours of unrelated footage.",
    name: "Suresh Iyer",
    organization: "Meridian Cooperative Bank",
    designation: "Security Operations Head",
    rating: 5,
  },
  {
    id: "t-13",
    quote:
      "Gate and common-area incidents in our township are routed with clips attached, so response is faster.",
    name: "Ritu Agarwal",
    organization: "Lakeview Residences",
    designation: "Facility Director",
    rating: 5,
  },
  {
    id: "t-14",
    quote:
      "Process-zone exceptions on the polymer line now show up as prioritized alerts instead of inbox noise.",
    name: "Harish Patel",
    organization: "PolyForge Industries",
    designation: "EHS Manager",
    rating: 5,
  },
  {
    id: "t-15",
    quote:
      "Event-day crowd and restricted-area monitoring finally feels proactive instead of purely reactive.",
    name: "Daniel Fernandes",
    organization: "ArenaOne Venues",
    designation: "Venue Security Director",
    rating: 5,
  },
];
