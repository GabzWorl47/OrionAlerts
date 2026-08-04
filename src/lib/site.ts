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

export const industries: Industry[] = [
  {
    slug: "manufacturing",
    name: "Manufacturing",
    cardLabel: "Manufacturing",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=900&q=80",
    introVideo: "/Videos/industries/manufacturing.mp4",
    tagline: "Discrete & process plants",
    summary:
      "Modern manufacturing demands high productivity, worker safety, and reliable operations. Orion Alerts transforms existing CCTV into an AI-powered platform that delivers real-time monitoring, proactive alerts, and actionable insights to reduce downtime, improve compliance, and optimize production.",
    challenges: [
      "PPE and restricted-area violations on busy floors",
      "Production bottlenecks and process anomalies",
      "Surveillance infrastructure failures creating blind spots",
      "Slow incident search across large camera estates",
    ],
    outcomes: [
      "AI workplace safety alerts in real time",
      "Production monitoring for idle time and deviations",
      "Proactive infrastructure health for cameras and NVRs",
      "Instant event search and critical event alerts",
    ],
    relatedSolutions: ["vms", "ai-analytics", "asset-tracking", "amc-management", "health-monitoring"],
  },
  {
    slug: "automotive",
    name: "Automotive & Autoparts",
    cardLabel: "Automotive",
    image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=900&q=80",
    tagline: "Precision engineering & assemblies",
    summary:
      "Automotive manufacturing requires synchronized production, consistent quality, and uninterrupted operations. Orion Alerts converts existing CCTV into an AI-powered monitoring platform that enhances safety, streamlines production, and improves operational visibility across assembly plants.",
    challenges: [
      "Bottlenecks and stoppages across assembly lines",
      "PPE and restricted-area safety at scale",
      "Limited visibility of components and finished goods",
      "Slow investigation of quality and safety events",
    ],
    outcomes: [
      "Production monitoring across assembly lines",
      "AI workplace safety detection in real time",
      "Material and asset visibility across plant areas",
      "Instant event search and operational alerts",
    ],
    relatedSolutions: ["vms", "ai-analytics", "health-monitoring", "amc-management"],
  },
  {
    slug: "metals-mining",
    name: "Metals, Minerals & Mining",
    cardLabel: "Metals & Mining",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=900&q=80",
    introVideo: "/Videos/industries/metals-mining.mp4",
    tagline: "Heavy industry & extraction",
    summary:
      "Mining operations demand continuous monitoring of worker safety, heavy equipment, and material handling. Orion Alerts enhances operational visibility with AI-driven monitoring, real-time alerts, and centralized intelligence across mines and processing facilities.",
    challenges: [
      "Worker safety risks in hazardous mining zones",
      "Heavy equipment and vehicle movement blind spots",
      "Material and process visibility gaps",
      "Slow incident review across distributed sites",
    ],
    outcomes: [
      "AI safety monitoring across mines and plants",
      "Equipment and vehicle monitoring in real time",
      "Material and process monitoring at scale",
      "Instant event search and critical alerts",
    ],
    relatedSolutions: ["vms", "ai-analytics", "health-monitoring", "asset-tracking", "amc-management"],
  },
  {
    slug: "cement",
    name: "Cement & Building Materials",
    cardLabel: "Cement",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80",
    tagline: "Continuous plants & heavy material flow",
    summary:
      "Cement plants require continuous monitoring of production, material handling, and worker safety. Orion Alerts delivers AI-powered monitoring, real-time alerts, and centralized visibility to improve operational efficiency and minimize risks.",
    challenges: [
      "High-risk zones with PPE and access gaps",
      "Conveyor and material handling blind spots",
      "Vehicle and loading bay visibility gaps",
      "Slow incident search across plant cameras",
    ],
    outcomes: [
      "AI safety monitoring across the plant",
      "Conveyor and material monitoring in real time",
      "Vehicle and loading monitoring at dispatch",
      "Instant event search and critical alerts",
    ],
    relatedSolutions: [
      "vms",
      "ai-analytics",
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
      "Oil, gas, and petrochemical facilities require continuous monitoring of hazardous areas, critical assets, and site security. Orion Alerts provides AI-powered monitoring, real-time alerts, and centralized visibility to enhance safety, security, and operational reliability.",
    challenges: [
      "Hazardous-area safety and compliance risk",
      "Perimeter and critical asset exposure",
      "Vehicle and loading area blind spots",
      "Slow investigation of security and safety events",
    ],
    outcomes: [
      "AI safety monitoring in high-risk zones",
      "Perimeter and asset protection alerts",
      "Vehicle and loading monitoring in real time",
      "Instant event search and critical alerts",
    ],
    relatedSolutions: ["vms", "ai-analytics", "health-monitoring", "amc-management"],
  },
  {
    slug: "schools",
    name: "Schools",
    cardLabel: "Schools",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=900&q=80",
    tagline: "K-12, colleges & educational campuses",
    summary:
      "From classrooms and playgrounds to school buses and entry gates, Orion Alerts uses AI to monitor critical campus activities, detect potential risks, and provide real-time alerts that strengthen safety and operational efficiency.",
    challenges: [
      "Campus perimeter and entry-point gaps",
      "Student safety risks across buildings and grounds",
      "Bus and traffic monitoring blind spots",
      "Slow review of campus incidents",
    ],
    outcomes: [
      "Stronger campus security monitoring",
      "Student safety alerts in real time",
      "Bus and traffic monitoring coverage",
      "Instant event search and critical alerts",
    ],
    relatedSolutions: ["vms", "ai-analytics", "health-monitoring", "amc-management"],
  },
  {
    slug: "pharma",
    name: "Pharmaceuticals & Life Sciences",
    cardLabel: "Pharma",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80",
    tagline: "API, formulations, biologics & CDMO",
    summary:
      "Maintaining compliance and product integrity requires continuous visibility across every stage of pharmaceutical manufacturing. Orion Alerts delivers AI-powered monitoring, proactive alerts, and centralized oversight to support safer, more efficient operations.",
    challenges: [
      "GMP and cleanroom compliance gaps",
      "Limited visibility on production and packaging lines",
      "Warehouse and cold storage security risk",
      "Slow investigation of quality and access events",
    ],
    outcomes: [
      "GMP and cleanroom compliance monitoring",
      "Production and packaging visibility",
      "Warehouse and cold storage security",
      "Instant event search and critical alerts",
    ],
    relatedSolutions: ["vms", "ai-analytics", "health-monitoring", "amc-management"],
  },
  {
    slug: "food-fmcg",
    name: "Food & FMCG",
    cardLabel: "Food & FMCG",
    image: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&w=900&q=80",
    tagline: "Processing, bottling, packaging & personal care",
    summary:
      "Food and FMCG manufacturers must maintain strict hygiene, product quality, and production consistency. Orion Alerts uses AI-powered video intelligence to strengthen compliance, improve operational visibility, and support uninterrupted manufacturing.",
    challenges: [
      "Hygiene and PPE compliance on production floors",
      "Process deviations affecting product quality",
      "Warehouse and dispatch visibility gaps",
      "Slow incident review across plants",
    ],
    outcomes: [
      "Hygiene and PPE compliance monitoring",
      "Production monitoring for quality consistency",
      "Warehouse and dispatch monitoring",
      "Instant event search and critical alerts",
    ],
    relatedSolutions: ["vms", "ai-analytics", "asset-tracking", "health-monitoring"],
  },
  {
    slug: "quick-commerce",
    name: "Quick Commerce & Micro-Fulfillment",
    cardLabel: "Quick Commerce",
    image: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=900&q=80",
    tagline: "Dark stores, MFCs & hyperlocal fulfillment",
    summary:
      "Quick commerce platforms depend on dense networks of micro-fulfillment centers—also known as dark stores—to deliver in minutes. Orion Alerts turns existing CCTV into an AI-powered operations platform that monitors picking floors, staging zones, and multi-outlet networks with instant alerts and actionable insights for speed, safety, and loss prevention.",
    challenges: [
      "Pick-and-pack SLAs measured in minutes under peak load",
      "Shrinkage and unauthorized access in high-SKU dense layouts",
      "Blind spots when cameras or NVRs go offline across hundreds of nodes",
      "Slow investigation of disputes, damage, and process failures",
    ],
    outcomes: [
      "Floor and pick-path visibility across dark store networks",
      "Rider staging, entry, and high-value zone monitoring",
      "Infrastructure health for cameras, NVRs, and networks",
      "Smart search and instant alerts for critical events",
    ],
    relatedSolutions: ["ai-analytics", "vms", "health-monitoring", "asset-tracking"],
  },
  {
    slug: "logistics",
    name: "Logistics & Warehousing",
    cardLabel: "Logistics",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
    tagline: "Transport hubs, yards & fulfillment",
    summary:
      "Warehouses and distribution centers require continuous visibility to ensure safe operations, inventory security, and on-time deliveries. Orion Alerts uses AI-powered video intelligence to optimize warehouse workflows, strengthen security, and improve operational efficiency.",
    challenges: [
      "Warehouse safety risks at scale",
      "Loading bay and vehicle blind spots",
      "Inventory shrinkage and custody gaps",
      "Slow incident search across DCs",
    ],
    outcomes: [
      "Warehouse safety monitoring in real time",
      "Loading and vehicle monitoring",
      "Stronger inventory protection",
      "Instant event search and critical alerts",
    ],
    relatedSolutions: ["vms", "ai-analytics", "asset-tracking", "health-monitoring"],
  },
  {
    slug: "commercial-infrastructure",
    name: "Airports, Buildings & Commercial",
    cardLabel: "Commercial",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    tagline: "Transport hubs, retail & logistics facilities",
    summary:
      "Airports, commercial buildings, business parks, and public facilities require continuous visibility to manage security, visitor movement, and daily operations. Orion Alerts delivers AI-powered intelligence that helps improve safety, operational efficiency, and facility performance.",
    challenges: [
      "Access and perimeter security gaps",
      "Crowd and occupancy visibility issues",
      "Parking and traffic management blind spots",
      "Slow review of facility incidents",
    ],
    outcomes: [
      "Access and perimeter security monitoring",
      "Crowd and occupancy monitoring",
      "Parking and traffic management visibility",
      "Instant event search and critical alerts",
    ],
    relatedSolutions: ["vms", "ai-analytics", "health-monitoring", "amc-management"],
  },
  {
    slug: "utilities",
    name: "Utilities & Smart Infrastructure",
    cardLabel: "Utilities",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=80",
    tagline: "Power, water, grids & industrial facilities",
    summary:
      "Critical infrastructure demands continuous monitoring to protect assets, maintain compliance, and minimize operational disruptions. Orion Alerts provides AI-driven insights and automated monitoring to improve security and operational continuity across remote facilities.",
    challenges: [
      "Perimeter and asset exposure at remote sites",
      "Limited visibility across distributed facilities",
      "Worker safety and compliance gaps",
      "Slow investigation of infrastructure incidents",
    ],
    outcomes: [
      "Perimeter and asset security monitoring",
      "Remote site monitoring with centralized alerts",
      "Worker safety and compliance detection",
      "Instant event search and critical alerts",
    ],
    relatedSolutions: ["vms", "ai-analytics", "health-monitoring", "amc-management"],
  },
  {
    slug: "pulp-paper",
    name: "Pulp, Paper & Packaging",
    cardLabel: "Pulp & Paper",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=900&q=80",
    tagline: "Integrated mills & specialty packaging",
    summary:
      "Pulp, paper, and packaging plants rely on uninterrupted production, safe operations, and efficient material handling. Orion Alerts delivers AI-powered monitoring to improve productivity, enhance worker safety, and strengthen operational control across manufacturing facilities.",
    challenges: [
      "Continuous-process production blind spots",
      "Worker safety risks on mill floors",
      "Warehouse and dispatch visibility gaps",
      "Slow incident review across mill sections",
    ],
    outcomes: [
      "Production monitoring across mill operations",
      "Safety monitoring in real time",
      "Warehouse and dispatch monitoring",
      "Instant event search and critical alerts",
    ],
    relatedSolutions: ["vms", "ai-analytics", "health-monitoring", "amc-management"],
  },
  {
    slug: "textile",
    name: "Textile & Garment",
    cardLabel: "Textile",
    image: "https://images.unsplash.com/photo-1558171813-4c088753af8f?auto=format&fit=crop&w=900&q=80",
    tagline: "Spinning, weaving, dyeing & finishing",
    summary:
      "Textile and garment manufacturers rely on synchronized production and efficient material flow to meet customer demands. Orion Alerts provides AI-driven monitoring that helps identify operational bottlenecks, improve safety, and optimize factory performance.",
    challenges: [
      "Production bottlenecks across sewing and finishing",
      "Safety and compliance gaps on factory floors",
      "Material and warehouse visibility issues",
      "Slow investigation of operational incidents",
    ],
    outcomes: [
      "Production monitoring across factory floors",
      "Safety and compliance alerts in real time",
      "Material and warehouse monitoring",
      "Instant event search and critical alerts",
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
      "Polymer and plastics plants need continuous monitoring of production lines, worker safety, and material flow. Orion Alerts turns existing CCTV into an AI-powered platform for real-time alerts, centralized visibility, and faster operational decisions.",
    challenges: [
      "Limited visibility across molding and extrusion lines",
      "Worker safety risks in processing areas",
      "Warehouse and dispatch blind spots",
      "Slow incident search across plants",
    ],
    outcomes: [
      "Production monitoring across polymer lines",
      "Safety monitoring in real time",
      "Warehouse and dispatch monitoring",
      "Instant event search and critical alerts",
    ],
    relatedSolutions: ["vms", "ai-analytics", "health-monitoring", "asset-tracking"],
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
