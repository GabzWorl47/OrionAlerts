/**
 * Page-level copy for the five /solutions/[slug] pages that is not part of the
 * shared `Solution` record: section headings, comparison tables, internal
 * links and Service structured-data hints.
 *
 * Facts only. Everything here restates what is already published elsewhere on
 * the site (nebula-os.ts, faqs.ts, site.ts). Do not add camera brands, camera
 * counts, accuracy figures, pricing, timelines or alert channels beyond
 * "dashboard, mobile app and email" without confirmation from the team.
 */

import type { SolutionFaq } from "@/lib/site";

export type ComparisonTable = {
  heading: string;
  lede: string;
  /** Column headers: [dimension label, "the other approach", "OrionAlerts"]. */
  columns: [string, string, string];
  rows: { dimension: string; other: string; orion: string }[];
};

export type RelatedLink = { label: string; href: string };

export type SolutionPageContent = {
  /** How the module is named in running copy, e.g. "Industries that use …". */
  topic: string;
  outcomesHeading: string;
  howItWorksHeading: string;
  howItWorksLede: string;
  /** Diagram shown under the numbered steps. */
  diagram?: { src: string; alt: string; width: number; height: number };
  faqHeading: string;
  comparison: ComparisonTable;
  /** Industry slugs (resolved to names from site.ts). */
  usedIn: string[];
  furtherReading: RelatedLink[];
  glossary: RelatedLink[];
  ctaTitle: string;
  service: {
    alternateName: string[];
    serviceType: string;
    audience: string;
  };
};

/** Facts shared by every module (nebula-os.ts deployment + device layer, faqs.ts). */
export const solutionFacts = {
  worksWith: "Existing IP cameras and recorders over ONVIF, RTSP and vendor SDKs",
  deploysAs: "On-site Nebula OS node · multi-site with Orion Cloud · partner-managed",
  alertsVia: "Dashboard, mobile app and email",
  dataNote:
    "Video stays on the on-site node. Only health, alert, configuration and operational metadata syncs to Orion Cloud.",
} as const;

const blog = {
  cpPlus: {
    label: "Adding AI video analytics to CP Plus surveillance",
    href: "/blogs/cp-plus-ai-video-analytics-integration",
  },
  alertFatigue: {
    label: "Alert fatigue is an ops problem",
    href: "/blogs/alert-fatigue-is-an-ops-problem",
  },
  visionPlatform: {
    label: "What is a vision intelligence platform?",
    href: "/blogs/what-is-a-vision-intelligence-platform",
  },
  traditionalCctv: {
    label: "Why traditional CCTV monitoring is no longer enough",
    href: "/blogs/why-traditional-cctv-monitoring-is-no-longer-enough",
  },
  addAi: {
    label: "How to add AI to existing CCTV cameras",
    href: "/blogs/add-ai-to-existing-cctv-cameras",
  },
  healthGuide: {
    label: "CCTV camera health monitoring",
    href: "/blogs/cctv-camera-health-monitoring",
  },
  amcChecklist: {
    label: "CCTV AMC management checklist",
    href: "/blogs/cctv-amc-management-checklist",
  },
  vmsVsNvr: { label: "VMS vs NVR: what's the difference?", href: "/blogs/vms-vs-nvr" },
  ppeFactories: {
    label: "AI PPE detection in factories",
    href: "/blogs/ai-ppe-detection-factories",
  },
} satisfies Record<string, RelatedLink>;

const glossary = {
  vms: { label: "Video management system (VMS)", href: "/glossary/vms" },
  vsaas: { label: "Video surveillance as a service (VSaaS)", href: "/glossary/vsaas" },
  nvrDvrVms: { label: "NVR vs DVR vs VMS", href: "/glossary/nvr-vs-dvr-vs-vms" },
  videoAnalytics: { label: "Video analytics", href: "/glossary/video-analytics" },
  cameraHealth: {
    label: "Camera health monitoring",
    href: "/glossary/camera-health-monitoring",
  },
  onvif: { label: "ONVIF", href: "/glossary/onvif" },
  rtsp: { label: "RTSP", href: "/glossary/rtsp" },
  edgeAi: { label: "Edge AI video analytics", href: "/glossary/edge-ai-video-analytics" },
  ppe: { label: "PPE detection", href: "/glossary/ppe-detection" },
  amc: {
    label: "AMC (annual maintenance contract)",
    href: "/glossary/amc-annual-maintenance-contract",
  },
  nebula: { label: "Nebula OS", href: "/nebula-os" },
} satisfies Record<string, RelatedLink>;

const content: Record<string, SolutionPageContent> = {
  vms: {
    topic: "OrionAlerts VMS",
    outcomesHeading: "What control rooms notice first with OrionAlerts VMS",
    howItWorksHeading: "How OrionAlerts VMS works",
    howItWorksLede:
      "From connecting the cameras you already own to exporting evidence, in four steps.",
    diagram: {
      src: "/Images/architecture-vms.webp",
      alt: "VMS architecture: IP cameras at several sites connect over LAN or WAN to the VMS core for live view, recording, playback, user and device management, with storage and backup, and are viewed from control-room, operator, web and mobile clients",
      width: 1672,
      height: 941,
    },
    faqHeading: "Video management system (VMS) FAQs",
    comparison: {
      heading: "VMS vs NVR: what's the difference?",
      lede: "The practical differences show up as soon as there is more than one recorder or site.",
      columns: ["", "Typical NVR", "OrionAlerts VMS"],
      rows: [
        {
          dimension: "Scope",
          other: "Records the cameras at one location",
          orion: "Manages cameras and recorders across every site from one console",
        },
        {
          dimension: "Access",
          other: "Separate login on each recorder",
          orion: "One console with role-based access by site, camera and zone",
        },
        {
          dimension: "Alarms",
          other: "Handled device by device",
          orion: "One shared queue to acknowledge, escalate and clear alarms",
        },
        {
          dimension: "Investigation",
          other: "Scrub footage recorder by recorder",
          orion: "Searchable incident timelines and evidence export",
        },
        {
          dimension: "Camera choice",
          other: "Often tied to the recorder's own ecosystem",
          orion: "Brand-neutral through ONVIF, RTSP and vendor SDKs",
        },
        {
          dimension: "AI and camera health",
          other: "Separate tools, if any",
          orion: "AI alerts and camera health monitoring on the same platform",
        },
      ],
    },
    usedIn: [
      "banking",
      "quick-commerce",
      "retail-shopping",
      "commercial-buildings",
      "airports-ports-railways",
      "government",
    ],
    furtherReading: [blog.vmsVsNvr, blog.cpPlus, blog.visionPlatform],
    glossary: [
      glossary.vms,
      glossary.nvrDvrVms,
      glossary.vsaas,
      glossary.onvif,
      glossary.rtsp,
      glossary.nebula,
    ],
    ctaTitle: "See OrionAlerts VMS on your own cameras",
    service: {
      alternateName: ["OrionAlerts VMS", "Enterprise video management system", "CCTV VMS software"],
      serviceType: "Video management system (VMS) software",
      audience: "Security and control-room teams at single-site and multi-site organizations",
    },
  },
  "ai-analytics": {
    topic: "AI video analytics",
    outcomesHeading: "What security and safety teams notice first with AI video analytics",
    howItWorksHeading: "How OrionAlerts AI video analytics works",
    howItWorksLede:
      "AI runs on the cameras you already record. Setting it up is a matter of choosing cameras, zones and rules.",
    diagram: {
      src: "/Images/architecture-ai-analytics.webp",
      alt: "AI video analytics architecture: site cameras feed the AI core for analytics, event processing and rules, and alerts reach the operator dashboard, mobile app, workstations and control room; detections shown include people, vehicles, intrusion, PPE and smoke or fire",
      width: 1672,
      height: 941,
    },
    faqHeading: "AI video analytics FAQs",
    comparison: {
      heading: "Motion detection vs AI video analytics",
      lede: "Both work on the same cameras. What differs is what makes them raise an alert, and what the alert tells you.",
      columns: ["", "Motion detection", "OrionAlerts AI video analytics"],
      rows: [
        {
          dimension: "What triggers an alert",
          other: "Any change in pixels",
          orion: "A defined event: a person in a zone, missing PPE, smoke, loitering",
        },
        {
          dimension: "Common nuisance triggers",
          other: "Shadows, headlights, rain, moving foliage",
          orion: "Rules are tied to objects and zones, not raw movement",
        },
        {
          dimension: "Understands objects",
          other: "No",
          orion: "Yes: people, vehicles, PPE, fire and smoke",
        },
        {
          dimension: "Rules",
          other: "Sensitivity and masked areas",
          orion: "Event types with zone and schedule rules per camera",
        },
        {
          dimension: "Alert content",
          other: "A motion flag",
          orion: "The event type, camera, site and zone, on the dashboard, mobile app or email",
        },
        {
          dimension: "Finding it later",
          other: "Scrub motion-flagged footage",
          orion: "Search events by type, or ask Vision Copilot in natural language",
        },
      ],
    },
    usedIn: [
      "manufacturing",
      "construction",
      "logistics",
      "oil-gas",
      "pharma",
      "education-campuses",
    ],
    furtherReading: [blog.alertFatigue, blog.addAi, blog.ppeFactories, blog.cpPlus],
    glossary: [
      glossary.videoAnalytics,
      glossary.edgeAi,
      glossary.ppe,
      glossary.onvif,
      glossary.rtsp,
      glossary.nebula,
    ],
    ctaTitle: "See AI video analytics on your own cameras",
    service: {
      alternateName: ["OrionAlerts AI Video Analytics", "AI Vision", "AI CCTV analytics"],
      serviceType: "AI video analytics",
      audience: "Security, safety (EHS) and operations teams",
    },
  },
  "asset-tracking": {
    topic: "Asset Tracking",
    outcomesHeading: "What IT and admin teams notice first with Asset Tracking",
    howItWorksHeading: "How Asset Tracking works",
    howItWorksLede: "Every asset follows the same path from purchase to retirement, and every step is logged.",
    faqHeading: "Asset tracking FAQs",
    comparison: {
      heading: "Spreadsheet asset lists vs OrionAlerts Asset Tracking",
      lede: "A spreadsheet is a snapshot. A register connected to the live estate stays current.",
      columns: ["", "Spreadsheet asset list", "OrionAlerts Asset Tracking"],
      rows: [
        {
          dimension: "Staying current",
          other: "Updated by hand, drifts from reality",
          orion: "Every connected device is also an asset record",
        },
        {
          dimension: "Finding an asset",
          other: "Search rows and ask around",
          orion: "Look up by serial number, QR code or barcode",
        },
        {
          dimension: "Ownership",
          other: "A name in a column, if filled in",
          orion: "Assigned custodian with full transfer history",
        },
        {
          dimension: "Documents",
          other: "Warranties and invoices in email and shared drives",
          orion: "Warranty, invoices and manuals attached to the asset",
        },
        {
          dimension: "Audits",
          other: "Reconstructed before each audit",
          orion: "Exportable custody and change history",
        },
      ],
    },
    usedIn: ["banking", "quick-commerce", "telecom-remote", "utilities", "solar-renewable"],
    furtherReading: [blog.amcChecklist, blog.visionPlatform],
    glossary: [glossary.amc, glossary.cameraHealth, glossary.nebula],
    ctaTitle: "See Asset Tracking in action",
    service: {
      alternateName: [
        "OrionAlerts Asset Tracking",
        "IT and surveillance asset management",
        "CCTV asset register",
      ],
      serviceType: "Asset tracking software",
      audience: "IT, admin and facilities teams",
    },
  },
  "amc-management": {
    topic: "AMC Management",
    outcomesHeading: "What facilities teams notice first with AMC Management",
    howItWorksHeading: "How AMC Management works",
    howItWorksLede:
      "How assets, contracts, service requests and renewals connect, from the asset record to the performance report.",
    diagram: {
      src: "/Images/architecture-amc-management.webp",
      alt: "AMC Management workflow: asset added, AMC or warranty assigned, preventive maintenance scheduled, service requests managed, vendor and SLA tracking, performance reports",
      width: 1635,
      height: 788,
    },
    faqHeading: "AMC management FAQs",
    comparison: {
      heading: "Spreadsheet AMC tracking vs OrionAlerts AMC Management",
      lede: "Most AMC problems start with a contract date nobody was watching.",
      columns: ["", "Spreadsheet AMC tracking", "OrionAlerts AMC Management"],
      rows: [
        {
          dimension: "Contracts and warranties",
          other: "Rows in a sheet, separate from the asset",
          orion: "Attached to each asset record",
        },
        {
          dimension: "Renewals",
          other: "Someone has to remember to check the dates",
          orion: "Reminders before AMC, warranty and PM dates fall due",
        },
        {
          dimension: "Service requests",
          other: "Emails and phone calls",
          orion: "Tickets tracked from intake through vendor dispatch to closure",
        },
        {
          dimension: "SLA compliance",
          other: "Reconstructed after the fact",
          orion: "Tracked against real service activity, with at-risk tickets flagged",
        },
        {
          dimension: "Vendor performance",
          other: "Anecdotal",
          orion: "Response time, completion and repeat issues per vendor",
        },
        {
          dimension: "Service history",
          other: "Scattered across inboxes",
          orion: "Complete per-asset history for audits and claims",
        },
      ],
    },
    usedIn: ["banking", "telecom-remote", "utilities", "solar-renewable", "metals-mining", "cement"],
    furtherReading: [blog.amcChecklist, blog.healthGuide],
    glossary: [glossary.amc, glossary.cameraHealth, glossary.nebula],
    ctaTitle: "See AMC Management in action",
    service: {
      alternateName: [
        "OrionAlerts AMC Management",
        "Annual maintenance contract management",
        "AMC and warranty management",
      ],
      serviceType: "AMC and warranty management software",
      audience: "Facilities, procurement and security teams, and AMC service partners",
    },
  },
  "health-monitoring": {
    topic: "CCTV health monitoring",
    outcomesHeading: "What IT and security teams notice first with health monitoring",
    howItWorksHeading: "How CCTV health monitoring works",
    howItWorksLede:
      "Health checks run on each site's Nebula OS node, next to the cameras and recorders they watch.",
    diagram: {
      src: "/Images/architecture-health-monitoring.webp",
      alt: "CCTV health monitoring architecture: cameras, NVRs, switches and other devices report to the health monitoring engine, which checks online status, performance, connectivity, storage and video streams, raises alerts and feeds a command-center dashboard",
      width: 1672,
      height: 941,
    },
    faqHeading: "CCTV health monitoring FAQs",
    comparison: {
      heading: "Ping or network monitoring vs CCTV health monitoring",
      lede: "What each approach can see when something goes wrong.",
      columns: ["", "Ping / network monitoring", "OrionAlerts CCTV health monitoring"],
      rows: [
        { dimension: "Camera offline", other: "Detected", orion: "Detected" },
        {
          dimension: "Camera online but not recording",
          other: "Not detected",
          orion: "Detected",
        },
        {
          dimension: "Storage full or retention at risk",
          other: "Not detected",
          orion: "Detected",
        },
        {
          dimension: "Which part failed",
          other: "Network path only",
          orion: "Camera, NVR, storage or network",
        },
        {
          dimension: "Uptime reporting",
          other: "Per network device",
          orion: "Per camera, NVR and site",
        },
      ],
    },
    usedIn: [
      "banking",
      "quick-commerce",
      "telecom-remote",
      "solar-renewable",
      "metals-mining",
      "data-centres",
    ],
    furtherReading: [blog.healthGuide, blog.traditionalCctv, blog.amcChecklist],
    glossary: [glossary.cameraHealth, glossary.nvrDvrVms, glossary.onvif, glossary.nebula],
    ctaTitle: "See CCTV health monitoring in action",
    service: {
      alternateName: [
        "OrionAlerts Health Monitoring",
        "CCTV camera health monitoring",
        "Camera and NVR health monitoring",
      ],
      serviceType: "CCTV health monitoring software",
      audience: "IT and security teams responsible for camera uptime",
    },
  },
};

/** FAQs on the /solutions hub (visible and FAQPage JSON-LD; also in /llms-full.txt). */
export const hubFaqs: SolutionFaq[] = [
  {
    question: "Can I use one OrionAlerts module on its own?",
    answer:
      "Yes. Each module is designed to work alone or as part of one connected platform. All five run on Nebula OS and share one record of every camera, site and event, so you can start with the module you need and add others later on the same cameras and records.",
  },
  {
    question: "What is the difference between Asset Tracking and AMC Management?",
    answer:
      "Asset Tracking answers what you own, where it is and who is responsible for it. AMC Management answers who maintains it, under which contract and SLA, and when coverage renews. Both share the same asset records.",
  },
  {
    question: "Do I need to replace my cameras to use these solutions?",
    answer:
      "No. A universal device layer connects supported IP cameras and recorders through ONVIF, RTSP and vendor SDKs, so existing camera investments are brought onto the platform rather than replaced.",
  },
];

export function getSolutionPageContent(slug: string): SolutionPageContent | undefined {
  return content[slug];
}
