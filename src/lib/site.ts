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
    slug: "smart-search",
    name: "Smart Search",
    shortName: "Smart Search",
    image: "/visuals/solutions/smart-search.png",
    tagline: "Faster investigations",
    headline:
      "Find the right clip across sites in seconds with natural-language and filter-based search.",
    introVideo: "/Videos/video/Smart%20search.mp4",
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
    introVideo:
      "/Videos/video/Health_monitoring_security_infra._202607281649%20(1).mp4",
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

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    cardLabel: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    tagline: "Discrete & process plants",
    summary:
      "Protect production lines, people, and high-value equipment across plants with unified video, AI safety alerts, and estate health monitoring.",
    challenges: [
      "Blind spots across large floorplates and loading bays",
      "PPE and restricted-zone compliance at scale",
      "Tooling, WIP, and asset loss on the shop floor",
      "Fragmented camera and AMC coverage across sites",
    ],
    outcomes: [
      "Unified plant video operations and incident response",
      "AI alerts for safety and zone exceptions",
      "Tracked critical assets with maintenance visibility",
      "Coordinated uptime across multi-plant estates",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "asset-tracking", "amc-management", "health-monitoring"],
  },
  {
    slug: "automotive",
    name: "Automotive & Autoparts",
    cardLabel: "Automotive",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
    tagline: "Precision engineering & assemblies",
    summary:
      "Secure assembly lines, precision zones, and supplier logistics with real-time video intelligence built for high-throughput manufacturing.",
    challenges: [
      "Quality incidents hard to trace across lines",
      "Restricted assembly zones and visitor control",
      "Multi-shift safety and PPE enforcement",
      "Camera blind spots in large production halls",
    ],
    outcomes: [
      "Faster root-cause review with searchable video",
      "Consistent safety monitoring across shifts",
      "Clear audit trails for compliance and OEM standards",
      "Proactive camera estate health before downtime",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "health-monitoring", "amc-management"],
  },
  {
    slug: "metals-mining",
    name: "Metals, Minerals & Mining",
    cardLabel: "Metals & Mining",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    tagline: "Heavy industry & extraction",
    summary:
      "Monitor hazardous zones, perimeter security, and remote sites where safety, uptime, and rapid incident visibility are non-negotiable.",
    challenges: [
      "Harsh environments with limited operator coverage",
      "Perimeter intrusion and unauthorized access",
      "Equipment downtime cascading across operations",
      "Distributed sites with inconsistent surveillance health",
    ],
    outcomes: [
      "Real-time alerts for intrusion and safety events",
      "Centralized visibility across pits, plants, and yards",
      "Health monitoring for cameras and recorders in the field",
      "Evidence-ready footage for incident investigations",
    ],
    relatedSolutions: ["vms", "ai-analytics", "health-monitoring", "asset-tracking", "amc-management"],
  },
  {
    slug: "cement",
    name: "Cement & Building Materials",
    cardLabel: "Cement",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    tagline: "Building smarter, safer & more efficient cement operations",
    summary:
      "Cement manufacturing operates in demanding environments with continuous production, heavy machinery, high-temperature processes, and large-scale material movement. Orion Alerts transforms existing surveillance infrastructure into an AI-powered operational intelligence platform for real-time monitoring, proactive alerts, and centralized management across the entire cement plant.",
    challenges: [
      "Process interruptions, equipment bottlenecks, and operational deviations that threaten production targets",
      "Weak visibility across limestone, clinker, gypsum, and finished cement movement through conveyors, yards, silos, and loading areas",
      "High-risk zones — kilns, crushers, clinker coolers, electrical rooms, and heavy equipment — where PPE gaps and unauthorized entry escalate quickly",
      "Silent camera, NVR, storage, and network failures that create blind spots and unplanned downtime",
    ],
    outcomes: [
      "Real-time production intelligence that identifies abnormal operations before they impact plant output",
      "Stronger logistics visibility across loading bays, weighbridges, packaging, and dispatch with fewer material losses",
      "AI-driven PPE, restricted-zone, vehicle, fire/smoke, and fall alerts with complete incident records for investigation and audit",
      "Proactive health monitoring, asset tracking, and AMC workflows that maximize plant availability and surveillance uptime",
    ],
    relatedSolutions: [
      "vms",
      "ai-analytics",
      "smart-search",
      "asset-tracking",
      "amc-management",
      "health-monitoring",
    ],
  },
  {
    slug: "oil-gas",
    name: "Oil, Gas & Petrochemicals",
    cardLabel: "Oil & Gas",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=900&q=80",
    tagline: "Refining, upstream & midstream",
    summary:
      "Harden surveillance across refineries, pipelines, and processing facilities with proactive alerts, compliance-ready evidence, and estate reliability.",
    challenges: [
      "High-risk zones requiring constant situational awareness",
      "Regulatory audit and incident documentation pressure",
      "Partner and contractor access complexity",
      "Zero-tolerance windows for camera and recorder failure",
    ],
    outcomes: [
      "Perimeter and zone intelligence with prioritized alerts",
      "Forensic-ready video trails for investigations",
      "Partner SLA and maintenance visibility",
      "Health dashboards before outages impact operations",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "health-monitoring", "amc-management"],
  },
  {
    slug: "schools",
    name: "Schools",
    cardLabel: "Schools",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80",
    tagline: "K-12, colleges & educational campuses",
    summary:
      "Create safer learning environments with campus-wide video, AI alerts for access exceptions, and reliable surveillance across buildings and grounds.",
    challenges: [
      "Large campuses with limited security staffing",
      "After-hours intrusion and unauthorized access",
      "Crowding and incident response across multiple buildings",
      "Aging camera estates with inconsistent uptime",
    ],
    outcomes: [
      "Unified live operations across campus buildings",
      "AI alerts for perimeter and access exceptions",
      "Faster incident review with searchable video",
      "Proactive health monitoring for camera infrastructure",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "health-monitoring", "amc-management"],
  },
  {
    slug: "pharma",
    name: "Pharmaceuticals & Life Sciences",
    cardLabel: "Pharma",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    tagline: "API, formulations, biologics & CDMO",
    summary:
      "Support GxP environments with controlled access monitoring, cleanroom-adjacent visibility, and audit-ready surveillance workflows.",
    challenges: [
      "Validated environments with strict access control",
      "Documentation requirements for security incidents",
      "Cold chain and storage area monitoring gaps",
      "Distributed CDMO and multi-site coordination",
    ],
    outcomes: [
      "Compliance-friendly incident review and export",
      "AI monitoring for unauthorized access and anomalies",
      "Centralized multi-site operations for QA and security",
      "Reliable camera estate health across facilities",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "health-monitoring", "amc-management"],
  },
  {
    slug: "food-fmcg",
    name: "Food & FMCG",
    cardLabel: "Food & FMCG",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=80",
    tagline: "Processing, bottling, packaging & personal care",
    summary:
      "Protect processing lines, cold storage, and high-throughput packaging floors with video intelligence tuned for hygiene, safety, and loss prevention.",
    challenges: [
      "Hygiene and restricted production zone compliance",
      "Shrinkage and chain-of-custody in warehouses",
      "Cold storage and loading dock incident response",
      "High camera counts with limited operator bandwidth",
    ],
    outcomes: [
      "Prioritized AI alerts instead of endless feed watching",
      "Multi-DC video command and investigation workflows",
      "Health monitoring for 24/7 production uptime",
      "Asset visibility for shared equipment and tooling",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "asset-tracking", "health-monitoring"],
  },
  {
    slug: "logistics",
    name: "Logistics & Warehousing",
    cardLabel: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    tagline: "Transport hubs, yards & fulfillment",
    summary:
      "Secure yards, docks, and high-throughput facilities with searchable video, movement alerts, and centralized multi-site operations.",
    challenges: [
      "Yard and dock incident response delays",
      "Shrinkage and chain-of-custody gaps",
      "Multi-site operator overload",
      "Camera estate uptime risk across DCs",
    ],
    outcomes: [
      "Faster yard incident review and evidence export",
      "Movement alerts on high-value freight zones",
      "Centralized multi-DC live operations",
      "SLA-backed camera and system maintenance",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "asset-tracking", "health-monitoring"],
  },
  {
    slug: "commercial-infrastructure",
    name: "Airports, Buildings & Commercial",
    cardLabel: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    tagline: "Transport hubs, retail & logistics facilities",
    summary:
      "Deliver safer experiences across airports, malls, offices, and mixed-use facilities with crowd-aware AI and multi-building video command.",
    challenges: [
      "High footfall and crowding across large floorplates",
      "After-hours intrusion and access exceptions",
      "Distributed security staffing",
      "Inconsistent system health across buildings",
    ],
    outcomes: [
      "Prioritized AI alert queues for operators",
      "Consistent multi-building surveillance coverage",
      "Clear visitor, zone, and perimeter policies",
      "Proactive maintenance-driven camera uptime",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "health-monitoring", "amc-management"],
  },
  {
    slug: "utilities",
    name: "Utilities & Smart Infrastructure",
    cardLabel: "Utilities",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    tagline: "Power, water, grids & industrial facilities",
    summary:
      "Operate with higher assurance across substations, plants, and regulated infrastructure where downtime and security incidents carry major impact.",
    challenges: [
      "Remote substations and perimeter pressure",
      "Audit and evidence requirements",
      "Partner network and contractor complexity",
      "Zero-tolerance surveillance downtime",
    ],
    outcomes: [
      "Hardened video command for critical sites",
      "Forensic-ready event trails",
      "Partner SLA and estate health visibility",
      "Early warning before camera failures cascade",
    ],
    relatedSolutions: ["vms", "ai-analytics", "health-monitoring", "amc-management", "smart-search"],
  },
  {
    slug: "pulp-paper",
    name: "Pulp, Paper & Packaging",
    cardLabel: "Pulp & Paper",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
    tagline: "Integrated mills & specialty packaging",
    summary:
      "Monitor sprawling mill operations, conveyor networks, and storage yards with unified video and AI safety intelligence.",
    challenges: [
      "Large continuous-process sites with blind spots",
      "Fire and safety risk in storage and production areas",
      "Energy-intensive operations needing reliable CCTV uptime",
      "Multi-unit estates with manual health checks",
    ],
    outcomes: [
      "Centralized visibility across mill sections",
      "AI safety and zone monitoring at scale",
      "Health dashboards for cameras and recorders",
      "Searchable video for compliance and incidents",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "health-monitoring", "amc-management"],
  },
  {
    slug: "textile",
    name: "Textile & Garment",
    cardLabel: "Textile",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=900&q=80",
    tagline: "Spinning, weaving, dyeing & finishing",
    summary:
      "Secure production floors, dye houses, and finishing units with video operations built for shift-heavy, multi-building manufacturing.",
    challenges: [
      "Shift turnover and inconsistent manual monitoring",
      "Theft and material movement across units",
      "Safety compliance in noisy, fast-paced floors",
      "Fragmented NVRs across buildings",
    ],
    outcomes: [
      "Unified live operations across units",
      "AI alerts for safety and restricted zones",
      "Asset tracking for high-value machinery",
      "AMC-driven uptime for camera infrastructure",
    ],
    relatedSolutions: ["vms", "ai-analytics", "asset-tracking", "health-monitoring", "amc-management"],
  },
  {
    slug: "polymers-plastics",
    name: "Polymers & Plastics",
    cardLabel: "Polymers",
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=900&q=80",
    tagline: "Molding, extrusion & polymer processing",
    summary:
      "Watch extrusion lines, molding bays, and warehouse zones with proactive video analytics and reliable multi-site surveillance health.",
    challenges: [
      "High-temperature zones and equipment safety",
      "Material handling and warehouse shrinkage",
      "Limited visibility across molding and extrusion lines",
      "Camera failures disrupting shift handovers",
    ],
    outcomes: [
      "Real-time safety and intrusion alerts",
      "Multi-site VMS for plants and warehouses",
      "Smart search for quality and security incidents",
      "Predictable maintenance for surveillance estate",
    ],
    relatedSolutions: ["vms", "ai-analytics", "smart-search", "health-monitoring", "asset-tracking"],
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
    description: "Insights, trends, and deployment lessons.",
    href: "/blogs",
  },
  {
    label: "FAQs",
    description: "Clear answers on deployment, integrations, and support.",
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
