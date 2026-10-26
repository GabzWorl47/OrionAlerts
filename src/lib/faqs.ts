import { legalMeta } from "@/lib/legal";
import { industries, site } from "@/lib/site";

/** Buyer-journey groups, in the order they render on /faqs (each is an H2). */
export const faqGroups = [
  "About OrionAlerts",
  "Cameras & Integrations",
  "Deployment & Data",
  "AI Detections & Alerts",
  "Health, Assets & AMC",
  "Pricing, Onboarding & Support",
  "Security & Compliance",
  "Industries",
  "Partners",
] as const;

export type FaqCategory = (typeof faqGroups)[number];

export type FaqItem = {
  q: string;
  /** Answer-first, 40–60 words, plain text (also emitted as FAQPage JSON-LD). */
  a: string;
  category: FaqCategory;
  /** Optional related pages rendered under the answer (not part of the JSON-LD text). */
  links?: { href: string; label: string }[];
};

export const faqCategories = ["All", ...faqGroups] as const;

export type FaqCategoryFilter = (typeof faqCategories)[number];

/**
 * Buyer FAQ. Every answer uses only facts published elsewhere on the site
 * (site.ts, nebula-os.ts, legal.ts, the solution pages). No prices, SLAs,
 * timelines, customer counts or certifications until the team confirms them.
 */
export const faqs: FaqItem[] = [
  /* -------------------------------- About ------------------------------- */
  {
    category: "About OrionAlerts",
    q: "What is OrionAlerts?",
    a: site.entityStatement,
    links: [
      { href: "/about", label: "About OrionAlerts" },
      { href: "/solutions", label: "The five modules" },
    ],
  },
  {
    category: "About OrionAlerts",
    q: "Who makes OrionAlerts and where are you based?",
    a: `Global Ace Technology Pvt. Ltd. makes OrionAlerts. The company is headquartered at ${site.address}, India, and builds both the OrionAlerts modules and Nebula OS, the Linux-based operating system they run on. You can reach the team at ${site.email} or through the contact form.`,
    links: [
      { href: "/about", label: "About us" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    category: "About OrionAlerts",
    q: "How is OrionAlerts different from traditional CCTV systems?",
    a: "Traditional CCTV records footage for review after an incident; OrionAlerts helps you act while it happens. It analyzes live video for predefined events, sends real-time alerts, checks that every camera is still recording, and links each camera to its asset and maintenance records, so teams can respond, investigate and fix problems from one platform.",
  },
  {
    category: "About OrionAlerts",
    q: "Why should businesses choose OrionAlerts?",
    a: "OrionAlerts adds AI video analytics, camera health monitoring, asset tracking and AMC management to the cameras you already own, in one platform instead of several tools. Every module runs on Nebula OS and shares one record of each camera, site and event, so an alert, an outage and a service ticket all point to the same device.",
    links: [{ href: "/nebula-os", label: "Nebula OS" }],
  },

  /* ------------------------- Cameras & Integrations --------------------- */
  {
    category: "Cameras & Integrations",
    q: "Do I need to replace my existing cameras?",
    a: "No. OrionAlerts connects to supported IP cameras and recorders through ONVIF, RTSP and vendor SDKs, so you can add AI video analytics and camera health monitoring without replacing working hardware. Compatibility is confirmed model by model during solution design, and older cameras are evaluated individually to find a suitable stream or integration path.",
  },
  {
    category: "Cameras & Integrations",
    q: "Which camera protocols does OrionAlerts support?",
    a: "OrionAlerts supports ONVIF, RTSP and vendor SDKs. Nebula OS translates them through a universal device layer into one internal device model, which keeps the deployment brand-neutral: cameras and recorders from different makers appear in the same console. Support for specific camera and recorder models is confirmed for your sites during solution design.",
    links: [{ href: "/nebula-os#nebula-architecture", label: "Nebula OS architecture" }],
  },
  {
    category: "Cameras & Integrations",
    q: "Can OrionAlerts integrate with existing security infrastructure?",
    a: "Yes. OrionAlerts is designed to work alongside existing IP camera networks, NVRs, VMS platforms, IoT devices, access control systems and enterprise applications where required. Nebula OS includes an API engine for these connections, and the integrations your sites need are scoped during solution design rather than assumed up front.",
  },

  /* --------------------------- Deployment & Data ------------------------- */
  {
    category: "Deployment & Data",
    q: "Is OrionAlerts on-premise or cloud?",
    a: "Both. In the standard deployment, an on-site Nebula OS node runs video, recording and AI inside your network. Orion Cloud, the central management layer, synchronizes health, alerts and configuration across sites. Multi-site organizations run a node per site with one central view, and partners can manage nodes on behalf of their clients.",
    links: [{ href: "/nebula-os", label: "Deployment models" }],
  },
  {
    category: "Deployment & Data",
    q: "Does our video leave our site?",
    a: "No, not in the standard deployment. Video and AI processing stay on the on-site Nebula OS node inside your network. Only health status, alerts, configuration and operational metadata synchronize to Orion Cloud for central management, so you can monitor many sites from one place without uploading raw video.",
    links: [{ href: "/security", label: "Trust & Security" }],
  },
  {
    category: "Deployment & Data",
    q: "Is OrionAlerts suitable for both single-site and multi-site operations?",
    a: "Yes. A single facility runs one Nebula OS node next to its cameras. Multi-site organizations run a node at each site for video, recording and AI, while Orion Cloud gives one central view of alerts, camera health, assets and maintenance across every branch, plant or warehouse.",
  },
  {
    category: "Deployment & Data",
    q: "Does OrionAlerts need a GPU or special hardware?",
    a: "Nebula OS runs on an on-premise appliance or server and is designed for hardware-accelerated video decoding and AI inference, so GPU acceleration is used where AI analytics are enabled. The right node size depends on how many channels you have and which detections are running, and our team sizes the hardware for each deployment.",
  },
  {
    category: "Deployment & Data",
    q: "Does OrionAlerts work on a weak internet connection?",
    a: "Yes. Recording and AI detection run on the on-site node, so they do not depend on a fast internet link. The on-site deployment is built to work through constrained or intermittent WAN links, and only lightweight health, alert and configuration metadata synchronizes to Orion Cloud, which keeps the bandwidth footprint low.",
  },
  {
    category: "Deployment & Data",
    q: "How are OrionAlerts updates handled?",
    a: "Nebula OS and its services are updated together through a managed, rollback-ready deployment path, including secure over-the-air updates for connected nodes. A platform upgrade is therefore one controlled change rather than a component-by-component migration, and you do not have to re-test integrations between separate video, analytics and monitoring products.",
  },
  {
    category: "Deployment & Data",
    q: "Can OrionAlerts be customized for business-specific workflows?",
    a: "Yes. AI rules, alert zones and schedules, dashboards, reports, user roles and operational workflows can be configured to match how each site works and the compliance requirements of your industry. Zone and schedule rules mean alerts follow how the site actually operates, instead of firing on every movement in view.",
  },

  /* ------------------------ AI Detections & Alerts ----------------------- */
  {
    category: "AI Detections & Alerts",
    q: "What AI capabilities does OrionAlerts provide?",
    a: "OrionAlerts provides real-time AI video analytics on your existing cameras, alerts with zone and schedule rules, incident timelines with evidence search, dashboards and reports, and Vision Copilot, an assistant for asking questions about surveillance data in plain language. Detections run on the on-site node, on the same video the system records.",
    links: [{ href: "/solutions/ai-analytics", label: "AI video analytics" }],
  },
  {
    category: "AI Detections & Alerts",
    q: "What types of AI detections are supported?",
    a: "Depending on your sites, OrionAlerts supports PPE and safety compliance, perimeter intrusion, line crossing, restricted-area entry, crowd and occupancy, vehicles, fire and smoke, loitering and process compliance. Custom AI use cases can also be scoped for specific operational requirements. Fire and smoke detection supplements, and does not replace, certified fire detection and alarm systems.",
    links: [{ href: "/solutions/ai-analytics", label: "AI video analytics" }],
  },
  {
    category: "AI Detections & Alerts",
    q: "What is Vision Copilot?",
    a: "Vision Copilot is the OrionAlerts AI assistant for surveillance data. Security and operations teams ask questions in natural language to search events, retrieve evidence and generate operational insights. That replaces scrubbing through hours of footage or building search filters by hand, so people who are not video specialists can still find what they need.",
  },
  {
    category: "AI Detections & Alerts",
    q: "Can OrionAlerts send real-time notifications?",
    // Channels match the solution pages. SMS, WhatsApp and Microsoft Teams (named in the
    // original FAQ and the health-monitoring diagram) stay off the site until the team confirms them.
    a: "Yes. Alerts are delivered in real time to the OrionAlerts dashboard, the mobile app and email. Each alert carries the event type, camera, site and zone it came from, operators can acknowledge and escalate it from a shared queue, and zone and schedule rules decide when an event raises an alert, so notifications stay relevant.",
  },
  {
    category: "AI Detections & Alerts",
    q: "How accurate are OrionAlerts AI detections?",
    a: "Accuracy depends on camera placement, lighting, resolution, field of view and the use case being detected. Each camera view is assessed during solution design, and zone and schedule rules are tuned so alerts match how the site operates. That is why results are judged per site and per camera rather than as one headline figure.",
  },

  /* -------------------------- Health, Assets & AMC ----------------------- */
  {
    category: "Health, Assets & AMC",
    q: "What is Health Monitoring?",
    a: "Health monitoring continuously checks cameras, recorders, servers, storage and network connectivity, and alerts the responsible team as soon as something fails, so a blind spot is fixed instead of discovered when footage is needed. Because it runs inside Nebula OS, it catches problems a ping misses, such as a camera that is online but not recording.",
    links: [{ href: "/solutions/health-monitoring", label: "Health monitoring" }],
  },
  {
    category: "Health, Assets & AMC",
    q: "What is Asset Tracking & AMC Management?",
    a: "Asset tracking keeps one register of cameras, recorders, servers and network devices with location, ownership, serial numbers, warranty documents and service history. AMC management tracks maintenance contracts, warranties, preventive maintenance, service requests, vendor performance and SLAs, so a failing camera can raise a service request against the right vendor and contract.",
    links: [
      { href: "/solutions/asset-tracking", label: "Asset tracking" },
      { href: "/solutions/amc-management", label: "AMC management" },
    ],
  },
  {
    category: "Health, Assets & AMC",
    q: "Can OrionAlerts generate reports and dashboards?",
    a: "Yes. OrionAlerts includes configurable dashboards and automated reports covering safety compliance, incident trends, camera and infrastructure health, uptime, response times and asset performance. Because every module shares one record of each camera and site, a report can combine alerts, outages and maintenance history for a single site or across all locations.",
  },

  /* --------------------- Pricing, Onboarding & Support ------------------- */
  {
    category: "Pricing, Onboarding & Support",
    q: "How much does OrionAlerts cost?",
    a: "OrionAlerts does not publish a public price list; each deployment is quoted individually. The quote depends on your camera and site count, the modules you choose (VMS, AI video analytics, health monitoring, asset tracking, AMC management), how many channels run AI detections, your hardware and deployment approach, and the support scope you need.",
    links: [{ href: "/pricing", label: "How pricing works" }],
  },
  {
    category: "Pricing, Onboarding & Support",
    q: "How do I get a demo?",
    a: `Request one on the Book a Demo page and tell us about your cameras, sites and the problems you want to solve. We will show OrionAlerts on scenarios like yours, including AI alerts, camera health and AMC tracking. For other questions, use the contact form or email ${site.email}.`,
    links: [
      { href: "/book-demo", label: "Book a Demo" },
      { href: "/contact", label: "Contact" },
    ],
  },

  /* ------------------------- Security & Compliance ----------------------- */
  {
    category: "Security & Compliance",
    q: "Who can access video and alerts in OrionAlerts?",
    a: "Access is role-based, so operators, managers and auditors each see only the sites, cameras and functions in their scope. Authorized users get secure remote access to live video, playback and controls, and access and evidence exports leave an audit-ready trail for security and compliance teams reviewing who viewed or exported footage.",
  },
  {
    category: "Security & Compliance",
    q: "How do I report a security vulnerability?",
    a: `Email ${legalMeta.securityEmail} with steps to reproduce, an impact assessment and your contact details. Please do not access or modify other customers' data or disrupt production services while testing. OrionAlerts does not currently run a public bug-bounty program; the Trust & Security page summarizes how the website and lead data are protected.`,
    links: [{ href: "/security", label: "Trust & Security" }],
  },

  /* ------------------------------ Industries ----------------------------- */
  {
    category: "Industries",
    q: "Which industries can benefit from OrionAlerts?",
    a: `OrionAlerts is designed for organizations in ${industries.length} industries, including manufacturing, logistics and warehousing, pharmaceuticals, cement, oil and gas, data centers, healthcare, banking, retail and commercial buildings. Each industry page explains the common risks, the detections and modules that apply, and how the platform works with the cameras already installed at those sites.`,
    links: [{ href: "/industries", label: `All ${industries.length} industries` }],
  },
  {
    category: "Industries",
    q: "How does OrionAlerts help manufacturing facilities?",
    a: "It improves workplace safety and visibility on the shop floor. AI detections monitor PPE compliance, restricted areas, machine zones and process workflows on existing cameras, while health monitoring keeps every camera recording. Teams spend less time on manual monitoring and can investigate incidents across shifts and plants from one platform.",
    links: [{ href: "/industries/manufacturing", label: "Manufacturing" }],
  },
  {
    category: "Industries",
    q: "How does OrionAlerts improve warehouse and logistics operations?",
    a: "It watches the areas where losses and delays happen. OrionAlerts monitors loading and unloading, dock activity, vehicle movement, inventory areas, restricted zones and perimeters on existing cameras, then alerts the right team in real time. Multi-site operators see every warehouse in one view, with camera health and maintenance tracked alongside.",
    links: [{ href: "/industries/logistics", label: "Logistics & warehousing" }],
  },

  /* ------------------------------- Partners ------------------------------ */
  {
    category: "Partners",
    q: "Who can become an OrionAlerts partner?",
    a: "System integrators and AMC providers who deploy and service CCTV for their clients, and technology partners who integrate cameras, sensors, access control or operations systems, can apply to the OrionAlerts partner program. Apply through the partner program page with your region, specialties and the type of partnership you are interested in.",
    links: [{ href: "/partners", label: "Partner program" }],
  },
  {
    category: "Partners",
    q: "Can partners manage multiple client sites?",
    a: "Yes. In the partner-managed model, integrators deploy and operate Nebula OS nodes on behalf of their customers and use the health, asset and AMC modules to run service delivery across multiple client sites. Each client gets its own view, with service and SLA workflows and evidence for warranty and contract claims built in.",
    links: [{ href: "/partners", label: "Partner program" }],
  },
  {
    category: "Partners",
    q: "How do partners get certified?",
    a: "Partner certification is arranged directly with the OrionAlerts partner team rather than through a public program page. Start by applying through the partner program: tell us your region, your specialties and whether you are a system integrator, technology partner or both, and the team will explain the enablement and training that applies to you.",
    links: [{ href: "/contact?topic=partner", label: "Apply to partner" }],
  },
];

export function getFeaturedFaqs(limit = 3) {
  const preferred = [
    "Do I need to replace my existing cameras?",
    "What is Health Monitoring?",
    "Is OrionAlerts suitable for both single-site and multi-site operations?",
  ];
  const picked = preferred
    .map((q) => faqs.find((item) => item.q === q))
    .filter((item): item is FaqItem => Boolean(item));
  if (picked.length >= limit) return picked.slice(0, limit);
  return [...picked, ...faqs.filter((f) => !picked.includes(f))].slice(0, limit);
}
