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
    name: "Video Management System",
    shortName: "VMS",
    summary:
      "Centralized video command for multi-site operations — live monitoring, recording, and rapid incident response.",
    overview:
      "OrionAlerts VMS unifies camera fleets across facilities into one secure operations layer. Operators get live walls, smart search, retention policies, and role-based access without juggling disconnected NVRs.",
    features: [
      {
        title: "Multi-site live walls",
        description: "Compose camera grids by site, zone, or priority with operator-ready layouts.",
      },
      {
        title: "Evidence-grade recording",
        description: "Configurable retention, export workflows, and chain-of-custody friendly archives.",
      },
      {
        title: "Role-based access",
        description: "Fine-grained permissions for security teams, facility managers, and auditors.",
      },
      {
        title: "Health & uptime",
        description: "Camera and stream health monitoring so blind spots are caught early.",
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
    name: "AI Analytics",
    shortName: "AI Analytics",
    summary:
      "Turn video into actionable alerts — intrusion, crowding, PPE, anomaly detection, and more.",
    overview:
      "Layer AI on your existing camera estate. OrionAlerts Analytics surfaces high-signal events so teams respond to what matters instead of watching endless feeds.",
    features: [
      {
        title: "Event detection",
        description: "Intrusion, loitering, line crossing, crowd density, and custom rule packs.",
      },
      {
        title: "Alert routing",
        description: "Push prioritized alerts to operators, mobile teams, or ticketing systems.",
      },
      {
        title: "Search & forensics",
        description: "Find people, vehicles, and moments with attribute and timeline filters.",
      },
      {
        title: "Model governance",
        description: "Tune thresholds, zones, and schedules per site without redeploying cameras.",
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
    slug: "asset-tracking",
    name: "Asset Tracking",
    shortName: "Asset Tracking",
    summary:
      "Locate critical assets across facilities with unified visibility for ops and security.",
    overview:
      "Know where high-value equipment, tools, and inventory sit in real time. OrionAlerts Asset Tracking connects tags, gateways, and operational maps into one live picture.",
    features: [
      {
        title: "Live asset map",
        description: "See asset position by building, floor, and zone with status context.",
      },
      {
        title: "Movement alerts",
        description: "Notify when assets leave geofences or move outside approved windows.",
      },
      {
        title: "Custody history",
        description: "Track handoffs and location history for audits and loss prevention.",
      },
      {
        title: "Ops integrations",
        description: "Sync asset IDs with CMMS, ERP, or inventory systems.",
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
      "Run maintenance contracts, SLAs, and service tickets for security infrastructure at scale.",
    overview:
      "Keep cameras, sensors, and critical systems healthy. OrionAlerts AMC Management tracks contracts, preventive schedules, partner SLAs, and field tickets in one control plane.",
    features: [
      {
        title: "Contract lifecycle",
        description: "Store AMCs, renewals, coverage scope, and commercial terms per site.",
      },
      {
        title: "Preventive schedules",
        description: "Plan inspections and maintenance windows before failures cascade.",
      },
      {
        title: "Ticket & SLA desk",
        description: "Route service tickets to partners with SLA clocks and escalation paths.",
      },
      {
        title: "Health dashboards",
        description: "See uptime, open tickets, and contract risk across the estate.",
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
    relatedSolutions: ["vms", "ai-analytics", "asset-tracking", "amc-management"],
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
    relatedSolutions: ["vms", "ai-analytics", "asset-tracking"],
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
    relatedSolutions: ["vms", "ai-analytics", "amc-management"],
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
    relatedSolutions: ["vms", "ai-analytics", "amc-management"],
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
