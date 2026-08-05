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
  image: string;
  tagline: string;
  headline: string;
  summary: string;
  overview: string;
  introVideo?: string;
  introVideoPoster?: string;
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
    image: "/Images/VMS.jpeg",
    tagline: "Live monitoring & control",
    headline:
      "Unify cameras, sites, and operators in one enterprise VMS for live monitoring, playback, and control.",
    introVideo: "/Videos/VMS.mp4",
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
    image: "/visuals/solutions/ai-vision.png",
    tagline: "Intelligent video analytics",
    headline:
      "Turn live video into real-time AI alerts for safety, intrusion, PPE, and operational events.",
    introVideo: "/Videos/video/AI_video_analytics_real-time_alerts_202607281709.mp4",
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
    slug: "asset-tracking",
    name: "Asset Tracking",
    shortName: "Asset Tracking",
    image: "/visuals/solutions/asset-tracking.png",
    tagline: "Inventory & lifecycle visibility",
    headline:
      "Track surveillance and IT assets across locations with clear ownership and lifecycle visibility.",
    introVideo: "/Videos/video/Asset%20tracking.mp4",
    summary:
      "Gain complete visibility and control over your organization's assets through a centralized platform. Track asset inventory, location, ownership, warranty, lifecycle, and movement in real time to improve utilization, simplify audits, and support informed business decisions.",
    overview:
      "Orion Alerts Asset Tracking provides a centralized platform to manage and monitor your organization's physical assets throughout their entire lifecycle. From procurement and deployment to transfer, maintenance, and retirement, every asset is digitally tracked with complete ownership, warranty, location, and utilization visibility. This eliminates manual spreadsheets, improves accountability, reduces asset loss, and enables smarter operational planning.",
    features: [
      {
        title: "Centralized Asset Inventory",
        description: "Maintain a single inventory of organizational assets with clear operational context.",
      },
      {
        title: "Asset Lifecycle Management",
        description: "Track assets from procurement and deployment through transfer, maintenance, and retirement.",
      },
      {
        title: "QR/Barcode & Serial Number Tracking",
        description: "Identify and look up assets quickly with QR, barcode, and serial number support.",
      },
      {
        title: "Location & Department Mapping",
        description: "Map assets to sites, locations, and departments for clear operational visibility.",
      },
      {
        title: "Asset Assignment & Ownership",
        description: "Assign ownership and accountability so every asset has a clear responsible party.",
      },
      {
        title: "Transfer & Movement History",
        description: "Follow asset transfers and movement with a complete historical record.",
      },
      {
        title: "Warranty & Documentation Management",
        description: "Keep warranty coverage and supporting documents attached to each asset.",
      },
      {
        title: "Audit Trail & Compliance Reports",
        description:
          "Generate a complete audit trail of ownership, transfers, and document access with compliance-ready reports for regulated reviews.",
      },
      {
        title: "Utilization & Performance Reports",
        description:
          "Measure utilization and performance across assets to cut idle inventory and guide smarter procurement and deployment decisions.",
      },
      {
        title: "Dashboard & Analytics",
        description:
          "Track estate health, warranty risk, movement, and KPIs from a centralized asset analytics dashboard.",
      },
    ],
    architecture: [
      "Tag / beacon layer",
      "Gateway & location services",
      "Asset registry",
      "Maps, alerts & ERP sync",
    ],
    workflow: [
      "Asset Procurement",
      "Asset Registration",
      "Location & Ownership Mapping",
      "Transfer / Movement Tracking",
      "Lifecycle & Warranty Monitoring",
      "Dashboard • Reports • Analytics",
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
    image: "/visuals/solutions/amc-management.png",
    tagline: "Maintenance & warranties",
    headline:
      "Keep AMC, warranties, vendors, and preventive maintenance on schedule from one workspace.",
    introVideo: "/Videos/video/AMC_Management_video_202607281648.mp4",
    summary:
      "Streamline maintenance operations with intelligent AMC and warranty management. Automate preventive maintenance, monitor service requests, track vendor performance, and manage SLA compliance to maximize asset uptime and reduce maintenance costs.",
    overview:
      "Orion Alerts AMC Management digitizes maintenance operations by automating preventive maintenance schedules, warranty tracking, service requests, vendor management, and SLA monitoring. The platform helps organizations reduce equipment downtime, extend asset life, improve vendor accountability, and ensure maintenance activities are completed on time.",
    features: [
      {
        title: "AMC & Warranty Management",
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
        title: "Vendor Performance Monitoring",
        description: "Track vendor performance across maintenance jobs and service visits.",
      },
      {
        title: "SLA Compliance Tracking",
        description: "Monitor SLA commitments and catch breaches before they escalate.",
      },
      {
        title: "Renewal Alerts & Notifications",
        description: "Stay ahead of contract and warranty renewals with timely alerts.",
      },
      {
        title: "Maintenance History",
        description: "Keep a complete history of maintenance activity on every asset.",
      },
      {
        title: "Work Order Management",
        description: "Create, assign, and close work orders from one maintenance workspace.",
      },
      {
        title: "Dashboard & Maintenance Reports",
        description: "Review estate maintenance health and performance from clear reports.",
      },
      {
        title: "Automated Reminders",
        description: "Trigger reminders for upcoming maintenance, renewals, and open tickets.",
      },
    ],
    architecture: [
      "Asset Added",
      "AMC/Warranty Assigned",
      "Preventive Maintenance Scheduled",
      "Service Requests Managed",
      "Vendor & SLA Tracking",
      "Performance Reports",
    ],
    workflow: [
      "Asset Added",
      "AMC/Warranty Assigned",
      "Preventive Maintenance Scheduled",
      "Service Requests Managed",
      "Vendor & SLA Tracking",
      "Performance Reports",
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
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    tagline: "Infrastructure uptime",
    headline:
      "Spot camera, NVR, storage, and network issues before they create operational blind spots.",
    introVideo: "/Videos/video/health-monitoring.mp4",
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
  cardLabel?: string;
  tagline?: string;
  image: string;
  introVideo?: string;
  introVideoPoster?: string;
  summary: string;
  challenges: string[];
  outcomes: string[];
  relatedSolutions: string[];
};

const defaultRelated = ["vms", "ai-analytics", "health-monitoring"] as const;

function industryEntry(
  partial: Omit<Industry, "summary" | "challenges" | "outcomes" | "relatedSolutions"> &
    Partial<Pick<Industry, "summary" | "challenges" | "outcomes" | "relatedSolutions">>,
): Industry {
  const focus = partial.tagline ?? partial.name;
  return {
    ...partial,
    summary:
      partial.summary ??
      `${partial.name} operations need continuous visibility for safety, security, and performance. Orion Alerts turns existing CCTV into AI-powered monitoring for ${focus.toLowerCase()}.`,
    challenges: partial.challenges ?? [
      "Limited real-time visibility across critical zones",
      "Delayed response to safety and security events",
      "Surveillance blind spots from offline cameras or NVRs",
      "Slow investigation of incidents across sites",
    ],
    outcomes: partial.outcomes ?? [
      "Real-time AI monitoring across key operating areas",
      "Faster alerts for safety, access, and operational risk",
      "Stronger multi-site visibility from a single platform",
      "Instant event search for audits and investigations",
    ],
    relatedSolutions: partial.relatedSolutions ?? [...defaultRelated],
  };
}

/** Final industry set shown on /industries cards (name + recommended description as tagline). */
export const industries: Industry[] = [
  industryEntry({
    slug: "manufacturing",
    name: "Manufacturing",
    cardLabel: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=90",
    introVideo: "/Videos/industries/manufacturing.mp4",
    tagline: "Worker safety, PPE compliance and production-area intelligence",
  }),
  industryEntry({
    slug: "automotive",
    name: "Automotive & Auto Components",
    cardLabel: "Automotive",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?auto=format&fit=crop&w=1600&q=90",
    tagline: "Assembly-line safety, restricted-zone detection and operational monitoring",
  }),
  industryEntry({
    slug: "cement",
    name: "Cement & Building Materials",
    cardLabel: "Cement",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=90",
    tagline: "Material-flow visibility, high-risk-zone monitoring and safety alerts",
  }),
  industryEntry({
    slug: "metals-mining",
    name: "Metals, Mining & Minerals",
    cardLabel: "Metals & Mining",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?auto=format&fit=crop&w=1600&q=90",
    introVideo: "/Videos/industries/metals-mining.mp4",
    tagline: "Perimeter protection, worker safety and hazardous-area monitoring",
  }),
  industryEntry({
    slug: "oil-gas",
    name: "Oil, Gas & Petrochemicals",
    cardLabel: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=1600&q=90",
    tagline: "Critical-zone monitoring, fire detection and safety compliance",
  }),
  industryEntry({
    slug: "pharma",
    name: "Pharmaceuticals & Life Sciences",
    cardLabel: "Pharma",
    image: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&w=1600&q=90",
    tagline: "Controlled-area access, process compliance and facility safety",
  }),
  industryEntry({
    slug: "food-fmcg",
    name: "Food, Beverage & FMCG",
    cardLabel: "Food & FMCG",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=1600&q=90",
    tagline: "Hygiene monitoring, process visibility and packaging-line intelligence",
  }),
  industryEntry({
    slug: "logistics",
    name: "Logistics & Warehousing",
    cardLabel: "Logistics",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1600&q=90",
    tagline: "Loading-bay safety, vehicle movement and warehouse monitoring",
  }),
  industryEntry({
    slug: "dark-stores",
    name: "Dark Stores & Micro-Fulfilment",
    cardLabel: "Dark Stores",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1600&q=90",
    tagline: "Inventory security, dispatch monitoring and 24/7 operational visibility",
  }),
  industryEntry({
    slug: "quick-commerce",
    name: "Quick Commerce",
    cardLabel: "Quick Commerce",
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?auto=format&fit=crop&w=1600&q=90",
    tagline: "Order-handling visibility, staff safety and rapid-dispatch monitoring",
  }),
  industryEntry({
    slug: "ecommerce-fulfilment",
    name: "E-commerce Fulfilment Centres",
    cardLabel: "E-commerce FC",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&w=1600&q=90",
    tagline: "Package movement, dispatch verification and restricted-area monitoring",
  }),
  industryEntry({
    slug: "cold-storage",
    name: "Cold Storage & Refrigerated Warehousing",
    cardLabel: "Cold Storage",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=90",
    tagline: "Temperature-sensitive area monitoring, access control and operational safety",
  }),
  industryEntry({
    slug: "airports-ports-railways",
    name: "Airports, Ports & Railways",
    cardLabel: "Airports & Ports",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=1600&q=90",
    tagline: "Crowd, perimeter and restricted-zone intelligence",
  }),
  industryEntry({
    slug: "commercial-buildings",
    name: "Commercial Buildings",
    cardLabel: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=90",
    tagline: "Access monitoring, occupancy visibility and rapid incident response",
  }),
  industryEntry({
    slug: "data-centres",
    name: "Data Centres",
    cardLabel: "Data Centres",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=90",
    tagline: "Critical-area protection, access intelligence and perimeter monitoring",
  }),
  industryEntry({
    slug: "education-campuses",
    name: "Education & Campuses",
    cardLabel: "Education",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=90",
    tagline: "Student safety, trespassing alerts and restricted-area monitoring",
  }),
  industryEntry({
    slug: "healthcare",
    name: "Healthcare & Hospitals",
    cardLabel: "Healthcare",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=90",
    tagline: "Patient safety, fall detection and emergency-area intelligence",
  }),
  industryEntry({
    slug: "retail-shopping",
    name: "Retail & Shopping Centres",
    cardLabel: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=90",
    tagline: "Crowd monitoring, queue visibility and customer-area safety",
  }),
  industryEntry({
    slug: "hotels-hospitality",
    name: "Hotels & Hospitality",
    cardLabel: "Hospitality",
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90",
    tagline: "Guest safety, service-area visibility and real-time incident alerts",
  }),
  industryEntry({
    slug: "utilities",
    name: "Utilities & Infrastructure",
    cardLabel: "Utilities",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=90",
    tagline: "Remote-site monitoring, perimeter security and asset protection",
  }),
  industryEntry({
    slug: "construction",
    name: "Construction Sites",
    cardLabel: "Construction",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=90",
    tagline: "PPE detection, unsafe-zone entry and after-hours intrusion",
  }),
  industryEntry({
    slug: "pulp-paper",
    name: "Pulp, Paper & Packaging",
    cardLabel: "Pulp & Paper",
    image: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?auto=format&fit=crop&w=1600&q=90",
    tagline: "Production safety, material movement and process monitoring",
  }),
  industryEntry({
    slug: "textile",
    name: "Textiles & Garments",
    cardLabel: "Textiles",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1600&q=90",
    tagline: "Workforce safety, production-area visibility and fire-risk monitoring",
  }),
  industryEntry({
    slug: "polymers-plastics",
    name: "Polymers & Plastics",
    cardLabel: "Polymers",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1600&q=90",
    tagline: "Process-zone safety, fire alerts and equipment-area monitoring",
  }),
  industryEntry({
    slug: "banking",
    name: "Banking & Financial Institutions",
    cardLabel: "Banking",
    image: "https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=1600&q=90",
    tagline: "Branch security, restricted-area access and suspicious-activity monitoring",
  }),
  industryEntry({
    slug: "residential",
    name: "Residential Communities & Townships",
    cardLabel: "Residential",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1600&q=90",
    tagline: "Perimeter security, vehicle monitoring and common-area safety",
  }),
  industryEntry({
    slug: "government",
    name: "Government & Public Infrastructure",
    cardLabel: "Government",
    image: "https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=1600&q=90",
    tagline: "Public-area monitoring, perimeter protection and incident detection",
  }),
  industryEntry({
    slug: "solar-renewable",
    name: "Solar & Renewable Energy Facilities",
    cardLabel: "Renewables",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=90",
    tagline: "Remote-site security, perimeter intrusion and asset monitoring",
  }),
  industryEntry({
    slug: "telecom-remote",
    name: "Telecom & Remote Sites",
    cardLabel: "Telecom",
    image: "https://images.unsplash.com/photo-1513828583688-c52646db42da?auto=format&fit=crop&w=1600&q=90",
    tagline: "Unauthorised access detection, equipment protection and remote monitoring",
  }),
  industryEntry({
    slug: "sports-events",
    name: "Sports & Event Venues",
    cardLabel: "Sports & Events",
    image: "https://images.unsplash.com/photo-1471295253337-3ceaaedca402?auto=format&fit=crop&w=1600&q=90",
    tagline: "Crowd intelligence, restricted-area monitoring and emergency response",
  }),
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
  {
    href: "#",
    label: "Resources",
    children: [
      { href: "/blogs", label: "Blogs" },
      { href: "/faqs", label: "FAQs" },
    ],
  },
  { href: "/about", label: "About Us" },
];

export const resourceNavItems = [
  {
    label: "Blogs",
    description: "Operator playbooks and vision intelligence briefs.",
    href: "/blogs",
  },
  {
    label: "FAQs",
    description: "Cameras, AI, multi-site, and platform answers.",
    href: "/faqs",
  },
];

export const resourceCategories = [
  {
    title: "Blogs & Insights",
    description: "Product thinking, security operations trends, and deployment lessons.",
    href: "/blogs",
  },
  {
    title: "Case Studies",
    description: "How enterprises adopt OrionAlerts across sites and partners.",
    href: "/book-demo",
  },
  {
    title: "FAQs",
    description: "Clear answers on deployment, integrations, and support.",
    href: "/faqs",
  },
  {
    title: "Documentation",
    description: "Architecture notes, admin guides, and integration overviews.",
    href: "/contact",
  },
  {
    title: "Partner Resources",
    description: "Enablement packs for system integrators and technology partners.",
    href: "/partners",
  },
  {
    title: "Comparisons",
    description: "Honest capability framing versus common alternatives.",
    href: "/contact",
  },
];
