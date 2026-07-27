export const site = {
  name: "OrionAlerts",
  tagline: "Intelligent video, analytics, and asset intelligence for enterprise operations.",
  description:
    "OrionAlerts helps enterprises see more, decide faster, and operate safer with VMS, AI analytics, asset tracking, and AMC management.",
  email: "hello@orionalerts.com",
  phone: "+1 (800) 555-0147",
  address: "Global HQ · Security Operations",
};

export type Solution = {
  slug: string;
  name: string;
  shortName: string;
  summary: string;
  overview: string;
  features: { title: string; description: string }[];
  architecture: string[];
  workflow: string[];
  benefits: string[];
  screenshotLabels: string[];
};

export const solutions: Solution[] = [
  {
    slug: "vms",
    name: "Video Management System (VMS)",
    shortName: "VMS",
    summary:
      "Unify your surveillance operations with an enterprise-grade platform designed for seamless visibility and control. Orion Alerts enables security teams to collaborate more effectively, improve operational efficiency, and manage surveillance ecosystems with greater confidence.",
    overview:
      "Simplify surveillance operations with a centralized Video Management System (VMS) that brings all your cameras, recorders, and sites onto a single platform. Monitor live video, access recorded footage, manage users, and oversee multiple locations through an intuitive, unified interface. Designed for scalability and seamless integration, the platform enhances situational awareness, accelerates incident investigations, and provides a future-ready foundation for AI-powered video analytics.",
    features: [
      {
        title: "Centralized Live Monitoring & Playback",
        description: "View live video and recorded footage from one unified operations interface.",
      },
      {
        title: "Multi-Site Surveillance Management",
        description: "Oversee cameras, recorders, and sites across locations from a single platform.",
      },
      {
        title: "Video Search & Incident Investigation",
        description: "Find footage quickly and accelerate investigations with searchable video workflows.",
      },
      {
        title: "User & Role-Based Access Control",
        description: "Manage users and permissions so the right teams see the right cameras and tools.",
      },
      {
        title: "Open Integration with IP Cameras & Third-Party Systems",
        description: "Connect IP cameras and third-party systems for a flexible, open architecture.",
      },
    ],
    architecture: [
      "Edge encode / camera ingest",
      "Secure media gateway",
      "Recording & retention services",
      "Operator console & APIs",
    ],
    workflow: [
      "Connect cameras and map sites",
      "Define roles, zones, and retention",
      "Operate live walls and incident playbooks",
      "Export evidence and report outcomes",
    ],
    benefits: [
      "Faster incident awareness across locations",
      "Lower operational complexity vs fragmented NVRs",
      "Audit-ready access and export trails",
      "Foundation for AI analytics overlays",
    ],
    screenshotLabels: ["Live operations wall", "Site map overview", "Incident timeline"],
  },
  {
    slug: "ai-analytics",
    name: "AI Vision & Real-Time Alerts",
    shortName: "AI Vision",
    summary:
      "Empower your organization with intelligent visual insights that enhance security, improve operational awareness, and support faster decision-making. Orion Alerts helps businesses move beyond traditional surveillance by turning video into meaningful actions and measurable outcomes.",
    overview:
      "Transform your surveillance system from passive monitoring to proactive intelligence with AI-powered video analytics. ORION Alerts continuously analyzes live video streams to detect security, safety, and operational events in real time, instantly notifying the right teams for faster response and informed decision-making. From intrusion detection and PPE compliance to people counting, vehicle monitoring, and custom AI use cases, the platform delivers actionable insights that improve security, operational efficiency, and business intelligence.",
    features: [
      {
        title: "Real-Time AI Video Analytics",
        description: "Continuously analyze live video streams for security, safety, and operational events.",
      },
      {
        title: "Instant Event Detection & Smart Alerts",
        description: "Detect events as they happen and notify the right teams without delay.",
      },
      {
        title: "Intrusion, PPE & Safety Monitoring",
        description: "Monitor intrusion, PPE compliance, and safety conditions across sites.",
      },
      {
        title: "People, Vehicle & Occupancy Analytics",
        description: "Track people, vehicles, and occupancy for operations and security insight.",
      },
      {
        title: "Custom AI Rules & Workflows",
        description: "Configure custom AI use cases and response workflows for your environment.",
      },
    ],
    architecture: [
      "Video stream tap / clip ingest",
      "Inference workers (edge or cloud)",
      "Rules & alert engine",
      "Operator inbox & integrations",
    ],
    workflow: [
      "Select cameras and detection zones",
      "Enable rule packs and thresholds",
      "Validate alerts in pilot windows",
      "Scale policies across sites",
    ],
    benefits: [
      "Higher signal-to-noise for security teams",
      "24/7 coverage without proportional staffing",
      "Faster investigation with searchable events",
      "Consistent policy enforcement multi-site",
    ],
    screenshotLabels: ["Alert inbox", "Zone configuration", "Forensic search"],
  },
  {
    slug: "smart-search",
    name: "Smart Search",
    shortName: "Smart Search",
    summary:
      "Instantly retrieve relevant clips, events, and alerts — without manually reviewing hours of footage.\n\nQuery events like \"Show all crowding incidents at Gate 1\" and get relevant clips and alerts in seconds — faster investigations with less storage dependency.",
    overview:
      "Finding a specific person, vehicle, or event across dozens of cameras used to require hours of manual footage review. Smart Search uses AI to index every frame and return matching clips in seconds — ranked by relevance and filterable by site, time, or camera. Operators get faster investigations without scrubbing through recordings.",
    features: [
      {
        title: "Natural-Language & Filter-Based Retrieval",
        description: "Search events with plain language or filters to find the clips that matter.",
      },
      {
        title: "Cross-Site Camera Search",
        description: "Search across cameras, zones, and time ranges simultaneously.",
      },
      {
        title: "Ranked Results in Seconds",
        description: "Return relevance-ranked clips and alerts without manual footage scrubbing.",
      },
      {
        title: "Filter by Site, Time, Camera & Event",
        description: "Narrow results by site, time range, camera, or event type for precise investigations.",
      },
      {
        title: "Faster Investigations, Lower Review Cost",
        description: "Dramatically reduce investigation time and the cost of manual video review.",
      },
    ],
    architecture: [
      "AI frame & event indexing",
      "Natural-language search engine",
      "Cross-site filter layer",
      "Ranked clip & alert results",
    ],
    workflow: [
      "Index cameras, events, and alert history",
      "Query by language or filters across sites",
      "Review ranked clips and related alerts",
      "Export evidence and close investigations faster",
    ],
    benefits: [
      "Seconds instead of hours for footage review",
      "Search across all cameras and sites at once",
      "Less storage dependency for investigations",
      "Higher operator productivity on every incident",
    ],
    screenshotLabels: ["Smart Search results", "Cross-site filters", "Clip evidence timeline"],
  },
  {
    slug: "asset-tracking",
    name: "Asset Tracking",
    shortName: "Asset Tracking",
    summary:
      "Gain complete visibility and control over your organization's assets through a centralized platform. Track asset inventory, location, ownership, warranty, lifecycle, and movement in real time to improve utilization, simplify audits, and support informed business decisions.",
    overview:
      "Gain complete visibility and control over your organization's assets through a centralized platform. Track asset inventory, location, ownership, warranty, lifecycle, and movement in real time to improve utilization, simplify audits, and support informed business decisions.",
    features: [
      {
        title: "Centralized Asset Inventory",
        description: "Maintain a single inventory of organizational assets with clear operational context.",
      },
      {
        title: "Lifecycle & Warranty Management",
        description: "Track asset lifecycle stages and warranty coverage in one place.",
      },
      {
        title: "Asset Location & Ownership Tracking",
        description: "Know where assets are and who owns them to improve utilization and accountability.",
      },
      {
        title: "Asset Transfer History",
        description: "Follow asset movement and transfers with a clear historical record.",
      },
      {
        title: "Reports & Audit Trail",
        description: "Simplify audits with reports and a reliable trail of asset activity.",
      },
    ],
    architecture: [
      "Tag / beacon layer",
      "Gateway & location services",
      "Asset registry",
      "Maps, alerts & ERP sync",
    ],
    workflow: [
      "Register assets and attach tags",
      "Map sites and geofences",
      "Monitor movement and exceptions",
      "Reconcile with ops systems",
    ],
    benefits: [
      "Reduce loss and search time",
      "Improve utilization of shared equipment",
      "Clear audit trail for regulated environments",
      "Security + operations in one view",
    ],
    screenshotLabels: ["Facility asset map", "Geofence alerts", "Custody timeline"],
  },
  {
    slug: "amc-management",
    name: "AMC Management",
    shortName: "AMC Management",
    summary:
      "Streamline maintenance operations with intelligent AMC and warranty management. Automate preventive maintenance, monitor service requests, track vendor performance, and manage SLA compliance to maximize asset uptime and reduce maintenance costs.",
    overview:
      "Streamline maintenance operations with intelligent AMC and warranty management. Automate preventive maintenance, monitor service requests, track vendor performance, and manage SLA compliance to maximize asset uptime and reduce maintenance costs.",
    features: [
      {
        title: "AMC & Warranty Tracking",
        description: "Manage AMC and warranty coverage alongside the assets they protect.",
      },
      {
        title: "Preventive Maintenance Scheduling",
        description: "Automate preventive maintenance so assets stay available and productive.",
      },
      {
        title: "Service Request Management",
        description: "Monitor service requests from intake through resolution.",
      },
      {
        title: "Vendor & SLA Management",
        description: "Track vendor performance and SLA compliance across maintenance operations.",
      },
      {
        title: "Renewal Alerts & Performance Reports",
        description: "Stay ahead of renewals and review maintenance performance with clear reports.",
      },
    ],
    architecture: [
      "Asset & contract registry",
      "Scheduling engine",
      "Partner / technician portal",
      "SLA & reporting layer",
    ],
    workflow: [
      "Import assets and active AMCs",
      "Define SLA and preventive plans",
      "Dispatch tickets to partners",
      "Review performance and renewals",
    ],
    benefits: [
      "Fewer prolonged camera outages",
      "Clear partner accountability",
      "Predictable maintenance spend",
      "Executive-ready estate health view",
    ],
    screenshotLabels: ["AMC portfolio", "SLA ticket board", "Estate health"],
  },
  {
    slug: "health-monitoring",
    name: "Health Monitoring",
    shortName: "Health Monitoring",
    summary:
      "Maintain complete confidence in your surveillance ecosystem with intelligent infrastructure oversight. Orion Alerts provides continuous operational visibility, helping organizations improve system reliability, streamline maintenance efforts, and ensure business-critical security systems are always performing at their best.",
    overview:
      "Ensure uninterrupted surveillance operations with a centralized health monitoring platform that continuously tracks the status and performance of your security infrastructure. Monitor cameras, NVRs, servers, storage, and network devices in real time to detect issues before they impact operations. By proactively identifying device failures, recording interruptions, storage issues, and network outages, the platform enables faster resolution, minimizes downtime, and ensures your surveillance system remains reliable and operational.",
    features: [
      {
        title: "Real-Time Device Health Monitoring",
        description: "Continuously track the status and performance of your security infrastructure.",
      },
      {
        title: "Camera, NVR & Server Status",
        description: "See the health of cameras, NVRs, and servers from one centralized view.",
      },
      {
        title: "Recording & Storage Health Monitoring",
        description: "Detect recording interruptions and storage issues before they create blind spots.",
      },
      {
        title: "Network & Connectivity Monitoring",
        description: "Identify network outages and connectivity problems that affect surveillance uptime.",
      },
      {
        title: "Instant Alerts & Notifications",
        description: "Get notified immediately when devices or services fall out of healthy status.",
      },
    ],
    architecture: [
      "Device & infrastructure polling",
      "Health status engine",
      "Alert & notification layer",
      "Centralized dashboard & reports",
    ],
    workflow: [
      "Connect cameras, NVRs, servers, storage, and network devices",
      "Monitor real-time health and performance status",
      "Receive instant alerts on failures and outages",
      "Resolve issues and review health reports",
    ],
    benefits: [
      "Detect issues before they impact operations",
      "Minimize surveillance downtime",
      "Faster resolution of device and network failures",
      "Reliable, continuously operational camera estate",
    ],
    screenshotLabels: ["Health dashboard", "Device status board", "Alert notifications"],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}

export type Industry = {
  slug: string;
  name: string;
  summary: string;
  challenges: string[];
  outcomes: string[];
  relatedSolutions: string[];
};

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    summary:
      "Protect people, production lines, and high-value tooling across plants and warehouses.",
    challenges: [
      "Blind spots across large floorplates",
      "PPE and restricted-zone compliance",
      "Tooling and WIP asset loss",
      "Fragmented vendor AMC coverage",
    ],
    outcomes: [
      "Unified plant video operations",
      "AI alerts for safety exceptions",
      "Tracked critical assets on the floor",
      "Coordinated maintenance across sites",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "asset-tracking", "amc-management", "health-monitoring"],
  },
  {
    slug: "logistics",
    name: "Logistics & Warehousing",
    summary:
      "Secure yards, docks, and high-throughput facilities with searchable video and asset visibility.",
    challenges: [
      "Yard and dock incident response",
      "Shrinkage and chain-of-custody gaps",
      "Multi-site operator overload",
      "Camera estate uptime risk",
    ],
    outcomes: [
      "Faster yard incident review",
      "Movement alerts on high-value freight zones",
      "Centralized multi-DC operations",
      "SLA-backed camera maintenance",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "asset-tracking", "health-monitoring"],
  },
  {
    slug: "campuses",
    name: "Campuses & Corporate",
    summary:
      "Deliver a safer workplace experience across offices, campuses, and shared facilities.",
    challenges: [
      "After-hours intrusion risk",
      "Crowding and access exceptions",
      "Distributed security staffing",
      "Inconsistent system health",
    ],
    outcomes: [
      "Prioritized AI alert queues",
      "Consistent multi-building coverage",
      "Clear visitor and zone policies",
      "Proactive AMC-driven uptime",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "health-monitoring"],
  },
  {
    slug: "critical-infrastructure",
    name: "Critical Infrastructure",
    summary:
      "Operate with higher assurance across utilities, transport hubs, and regulated environments.",
    challenges: [
      "Perimeter and intrusion pressure",
      "Audit and evidence requirements",
      "Partner network complexity",
      "Zero-tolerance downtime windows",
    ],
    outcomes: [
      "Hardened video command workflows",
      "Forensic-ready event trails",
      "Partner SLA visibility",
      "Estate health before incidents escalate",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "amc-management", "health-monitoring"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}

export const navLinks = [
  {
    href: "/solutions",
    label: "Solutions",
    children: solutions.map((s) => ({ href: `/solutions/${s.slug}`, label: s.shortName })),
  },
  { href: "/industries", label: "Industries" },
  { href: "/partners", label: "Partners" },
  { href: "/resources", label: "Resources" },
  { href: "/about", label: "About" },
];

export const resourceCategories = [
  {
    title: "Blogs & Insights",
    description: "Product thinking, security operations trends, and deployment lessons.",
    href: "/resources#insights",
  },
  {
    title: "Case Studies",
    description: "How enterprises adopt OrionAlerts across sites and partners.",
    href: "/resources#case-studies",
  },
  {
    title: "FAQs",
    description: "Clear answers on deployment, integrations, and support.",
    href: "/resources#faqs",
  },
  {
    title: "Documentation",
    description: "Architecture notes, admin guides, and integration overviews.",
    href: "/resources#docs",
  },
  {
    title: "Partner Resources",
    description: "Enablement packs for system integrators and technology partners.",
    href: "/resources#partner-resources",
  },
  {
    title: "Comparisons",
    description: "Honest capability framing versus common alternatives.",
    href: "/resources#comparisons",
  },
];
