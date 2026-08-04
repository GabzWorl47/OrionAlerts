export type FaqItem = {
  q: string;
  a: string;
  category: "General" | "Deployment" | "Platform" | "Partners";
};

export const faqCategories = ["All", "General", "Deployment", "Platform", "Partners"] as const;

export type FaqCategoryFilter = (typeof faqCategories)[number];

/** Curated from OrionAlerts FAQ source document. */
export const faqs: FaqItem[] = [
  {
    category: "General",
    q: "What is Orion Alerts?",
    a: "Orion Alerts is an AI-powered video intelligence platform that transforms existing CCTV cameras into intelligent monitoring systems. It enables real-time event detection, automated alerts, operational monitoring, infrastructure health management, and business insights through a single centralized platform.",
  },
  {
    category: "General",
    q: "How is Orion Alerts different from traditional CCTV systems?",
    a: "Traditional CCTV systems record footage for post-incident investigation. Orion Alerts continuously analyses live video, detects predefined events, generates instant alerts, automates investigations, and provides actionable intelligence for proactive decision-making.",
  },
  {
    category: "Deployment",
    q: "Do I need to replace my existing cameras?",
    a: "No. Orion Alerts integrates with most existing IP cameras and RTSP-compatible surveillance systems, allowing organizations to add AI capabilities without replacing their existing camera infrastructure.",
  },
  {
    category: "General",
    q: "Which industries can benefit from Orion Alerts?",
    a: "Orion Alerts is designed for Manufacturing, Warehousing & Logistics, Metals & Mining, Cement, Oil & Gas, Pharmaceutical, Food & FMCG, Textile & Garment, Polymers & Plastics, Commercial Buildings, Education, Utilities, and Smart Infrastructure.",
  },
  {
    category: "Deployment",
    q: "Is Orion Alerts suitable for both single-site and multi-site operations?",
    a: "Yes. Orion Alerts provides centralized monitoring, reporting, and management for a single facility or multiple locations through one unified dashboard.",
  },
  {
    category: "Platform",
    q: "What AI capabilities does Orion Alerts provide?",
    a: "The platform offers AI Video Analytics, Vision Copilot, Real-Time Alerts, Incident Management, Business Intelligence Dashboards, and intelligent workflow automation.",
  },
  {
    category: "Platform",
    q: "What is Vision Copilot?",
    a: "Vision Copilot is an AI assistant that enables users to interact with surveillance data using natural language, making it easier to search events, retrieve evidence, and generate operational insights.",
  },
  {
    category: "Platform",
    q: "What types of AI detections are supported?",
    a: "Depending on operational requirements, Orion Alerts supports PPE detection, intrusion detection, line crossing, restricted area monitoring, crowd detection, occupancy monitoring, vehicle detection, fire & smoke detection, loitering, process compliance, and custom AI use cases.",
  },
  {
    category: "Platform",
    q: "Can Orion Alerts send real-time notifications?",
    a: "Yes. Alerts can be delivered instantly through dashboards, mobile applications, email, SMS, WhatsApp, or other integrated communication channels with configurable escalation workflows.",
  },
  {
    category: "Platform",
    q: "What is Health Monitoring?",
    a: "Health Monitoring continuously tracks the status of cameras, NVRs, servers, storage devices, and network infrastructure, providing proactive alerts before failures impact operations.",
  },
  {
    category: "Platform",
    q: "What is Asset Tracking & AMC Management?",
    a: "The platform manages asset inventory, warranty status, AMC contracts, preventive maintenance schedules, vendor performance, service requests, and maintenance history from a centralized dashboard.",
  },
  {
    category: "Platform",
    q: "Can Orion Alerts generate reports and dashboards?",
    a: "Yes. Orion Alerts provides customizable dashboards and automated reports covering safety compliance, incident trends, infrastructure health, operational KPIs, response times, and asset performance.",
  },
  {
    category: "Deployment",
    q: "Can Orion Alerts be customized for business-specific workflows?",
    a: "Absolutely. AI rules, alerts, dashboards, reports, user roles, and operational workflows can all be configured to match industry-specific processes and compliance requirements.",
  },
  {
    category: "Platform",
    q: "Can Orion Alerts integrate with existing security infrastructure?",
    a: "Yes. Orion Alerts is designed to integrate with existing IP camera networks, NVRs, VMS platforms, IoT devices, access control systems, and enterprise applications where required.",
  },
  {
    category: "Deployment",
    q: "How does Orion Alerts help manufacturing facilities?",
    a: "It improves workplace safety by monitoring PPE compliance, production processes, restricted areas, machine activity, and operational workflows while reducing manual monitoring and production downtime.",
  },
  {
    category: "Deployment",
    q: "How does Orion Alerts improve warehouse and logistics operations?",
    a: "The platform monitors loading and unloading activities, dock operations, vehicle movement, inventory areas, restricted zones, and perimeter security to improve operational efficiency and reduce losses.",
  },
  {
    category: "General",
    q: "Why should businesses choose Orion Alerts?",
    a: "Orion Alerts brings AI Video Analytics, Vision Copilot, Health Monitoring, Asset Tracking, AMC Management, and Business Intelligence together in one integrated platform — transforming existing surveillance into a proactive system without a full infrastructure replacement.",
  },
  {
    category: "Partners",
    q: "How do partners get certified?",
    a: "Training and certification tracks publish under Partner Resources as program rules finalize. Until then, connect with our partner team to get started on enablement.",
  },
  {
    category: "General",
    q: "Are Book a Demo and Contact the same?",
    a: "No. Demo requests and contact messages are separate flows — so the right team can follow up with the right context.",
  },
];

export function getFeaturedFaqs(limit = 3) {
  const preferred = [
    "Do I need to replace my existing cameras?",
    "What is Health Monitoring?",
    "Is Orion Alerts suitable for both single-site and multi-site operations?",
  ];
  const picked = preferred
    .map((q) => faqs.find((item) => item.q === q))
    .filter((item): item is FaqItem => Boolean(item));
  if (picked.length >= limit) return picked.slice(0, limit);
  return [...picked, ...faqs.filter((f) => !picked.includes(f))].slice(0, limit);
}
