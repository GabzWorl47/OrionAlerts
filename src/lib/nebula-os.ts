export type NebulaCapability = {
  id: string;
  label: string;
  title: string;
  description: string;
  href: string;
};

export type NebulaBenefit = {
  id: string;
  title: string;
  description: string;
};

export type NebulaModule = {
  id: string;
  /** H3 on the page. Written to carry the search term, not just the brand word. */
  heading: string;
  label: string;
  summary: string;
  points: string[];
  href: string;
  linkLabel: string;
};

export type NebulaLayer = {
  id: string;
  name: string;
  role: string;
  items: readonly string[];
};

export type NebulaDeploymentModel = {
  id: string;
  name: string;
  bestFor: string;
  description: string;
  traits: string[];
};

export type NebulaComparisonRow = {
  dimension: string;
  legacy: string;
  nebula: string;
};

export type NebulaFaq = {
  question: string;
  answer: string;
};

/* ------------------------------------------------------------------ */
/* Capability modules (used by the architecture diagram + homepage)    */
/* ------------------------------------------------------------------ */

export const nebulaCapabilities: NebulaCapability[] = [
  {
    id: "vms",
    label: "VMS",
    title: "Video Management",
    description:
      "Live monitoring, recording, playback, multi-site control, and video investigation.",
    href: "/solutions/vms",
  },
  {
    id: "ai",
    label: "AI ENGINE",
    title: "AI Intelligence",
    description:
      "Real-time detection, smart alerts, safety analytics, and event intelligence.",
    href: "/solutions/ai-analytics",
  },
  {
    id: "health",
    label: "HEALTH",
    title: "Infrastructure Health",
    description:
      "Continuously monitor cameras, recording, storage, servers, and connectivity.",
    href: "/solutions/health-monitoring",
  },
  {
    id: "assets",
    label: "ASSETS",
    title: "Asset Visibility",
    description:
      "Track devices, ownership, location, lifecycle, serial numbers, and deployment status.",
    href: "/solutions/asset-tracking",
  },
  {
    id: "amc",
    label: "AMC",
    title: "Maintenance & AMC",
    description:
      "Manage warranties, preventive maintenance, service requests, SLAs, and renewals.",
    href: "/solutions/amc-management",
  },
];

export const capabilities = nebulaCapabilities;

/* ------------------------------------------------------------------ */
/* Page copy                                                           */
/* ------------------------------------------------------------------ */

export const nebulaSectionCopy = {
  eyebrow: "PURPOSE-BUILT FOR VISION AI",
  heading: "One OS to Run Your Entire AI Ecosystem.",
  /** H1 on /nebula-os. Category term first, demand term inside the same line. */
  pageHeading: "Nebula OS — the Vision AI operating system for your camera estate",
  pageLede:
    "Nebula OS is the operating system underneath OrionAlerts. It boots on a single appliance or server and runs video management, AI video analytics, camera health monitoring, asset records, and AMC workflows as one connected system instead of five disconnected tools.",
  paragraph:
    "Nebula OS brings video management, AI intelligence, infrastructure health, asset visibility, maintenance, and system control together in one purpose-built operating system for Vision AI infrastructure.",
  supporting:
    "One intelligent layer to connect, manage, monitor, and scale your complete AI infrastructure",
  platformHeadline: "Built into the OS. Not bolted on later.",
  platformCopy:
    "Nebula OS combines device connectivity, camera SDKs, video processing, GPU acceleration, APIs, recording, AI runtimes, system health, and cloud connectivity into one managed environment.",
  primaryCta: { label: "Explore Nebula OS", href: "/nebula-os" },
  secondaryCta: { label: "View Architecture", href: "/nebula-os#nebula-architecture" },
};

/** Three claims directly under the H1 — the compressed version of the USP. */
export const nebulaHeroPillars = [
  {
    id: "one-stack",
    title: "One stack, not five tools",
    description:
      "VMS, AI analytics, health, assets and AMC ship as modules of the same OS, on the same data.",
  },
  {
    id: "appliance",
    title: "Boots like an appliance",
    description:
      "Power on and the video, AI, storage and health services come up together — no manual stitching.",
  },
  {
    id: "brand-neutral",
    title: "Works with the cameras you own",
    description:
      "A universal device layer speaks ONVIF, RTSP and OEM SDKs, so the estate stays brand-neutral.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* What / why                                                          */
/* ------------------------------------------------------------------ */

export const nebulaDefinition = {
  heading: "What is Nebula OS?",
  body: [
    "Most surveillance deployments are assembled, not designed. A VMS from one vendor records the video. An analytics box from another vendor watches a subset of the cameras. A spreadsheet holds the asset list. A WhatsApp group holds the maintenance history. Nothing shares a database, so nobody can answer a simple question — which cameras are down, who owns them, and are they still under warranty — without opening four systems.",
    "Nebula OS collapses that stack. It is a Linux-based operating system built specifically for Vision AI infrastructure: the device layer, video engine, recording engine, AI runtime, health engine and API engine are all part of the same managed environment, released and updated together. The capability modules — video management, AI analytics, health monitoring, asset tracking and AMC — are surfaces on top of one shared record of every camera, site and event.",
    "The practical result is that a detection, a camera outage, an asset record and a maintenance ticket all refer to the same device object. An AI alert can tell you the camera it came from is out of warranty. A health failure can raise a service request against the vendor who installed it. That correlation is not an integration project — it is how the operating system is built.",
  ],
};

export const nebulaProblem = {
  heading: "The problem with a bolted-together surveillance stack",
  lede: "Fragmented tooling is the reason large camera estates quietly stop working. These are the failure patterns Nebula OS is designed to remove.",
  items: [
    {
      id: "blind-spots",
      title: "Silent blind spots",
      description:
        "A camera drops off the network and nobody notices until footage is needed for an investigation. Recording gaps are discovered weeks late, when they are no longer fixable.",
    },
    {
      id: "integration-tax",
      title: "The integration tax",
      description:
        "Every new capability means another server, another licence, another integration to maintain. Upgrade one component and the others need re-testing.",
    },
    {
      id: "no-ownership",
      title: "No single source of truth",
      description:
        "Asset lists live in spreadsheets, warranties live in email, and service history lives in people's memory. Audits and vendor disputes become archaeology.",
    },
    {
      id: "alert-noise",
      title: "Analytics that nobody trusts",
      description:
        "AI bolted onto a subset of cameras produces alerts with no operational context, so operators learn to ignore them and the investment stops paying back.",
    },
  ],
};

/* ------------------------------------------------------------------ */
/* Modules — the deep-dive section (H3 per module)                     */
/* ------------------------------------------------------------------ */

export const nebulaModules: NebulaModule[] = [
  {
    id: "vms",
    label: "Video management",
    heading: "Video management (VMS) built into the OS",
    summary:
      "Live monitoring, recording, playback and multi-site control run as a native service of Nebula OS rather than as a separate video management system you have to integrate.",
    points: [
      "Live wall and playback across sites from one operator console",
      "Recording and retention policies managed per camera, zone or site",
      "Searchable incident timelines and evidence export for investigations",
      "Role-based access so operators, managers and auditors see the right scope",
    ],
    href: "/solutions/vms",
    linkLabel: "Explore the VMS module",
  },
  {
    id: "ai",
    label: "AI analytics",
    heading: "AI video analytics on the same video pipeline",
    summary:
      "The AI runtime reads decoded frames directly from the video engine, so analytics run on the cameras you already record — not on a parallel stream into a separate analytics appliance.",
    points: [
      "Real-time detection for intrusion, restricted areas, PPE and safety events",
      "Zone and schedule rules so alerts match how the site actually operates",
      "Events written to the same record as the camera, site and asset they came from",
      "GPU-accelerated inference sized to the channel count of the node",
    ],
    href: "/solutions/ai-analytics",
    linkLabel: "Explore AI video analytics",
  },
  {
    id: "health",
    label: "Health monitoring",
    heading: "Camera health monitoring as a system service",
    summary:
      "A health engine continuously checks cameras, recording, storage, services and connectivity. Because it sits inside the OS, it sees failures the network alone cannot — a camera that pings but has stopped recording, for example.",
    points: [
      "Device, stream and recording status tracked continuously per camera",
      "Storage capacity and retention risk surfaced before footage is lost",
      "Server, service and connectivity checks with a built-in watchdog",
      "Uptime and availability reporting for the whole estate",
    ],
    href: "/solutions/health-monitoring",
    linkLabel: "Explore health monitoring",
  },
  {
    id: "assets",
    label: "Asset tracking",
    heading: "Asset records that match the live estate",
    summary:
      "Every device the OS talks to is also an asset record — location, ownership, serial number, lifecycle stage and documents — so the inventory cannot drift away from reality the way a spreadsheet does.",
    points: [
      "Single register for cameras, recorders, servers and network devices",
      "Site, floor, zone and department mapping for every deployed device",
      "Ownership and custody history for transfers, handovers and audits",
      "Warranty documents, invoices and manuals attached to the device itself",
    ],
    href: "/solutions/asset-tracking",
    linkLabel: "Explore asset tracking",
  },
  {
    id: "amc",
    label: "AMC & maintenance",
    heading: "AMC, warranty and maintenance workflows in the same place",
    summary:
      "Because health failures and asset records already live in the OS, maintenance stops being a separate discipline: a failing camera can raise a service request against the right vendor, under the right contract, automatically.",
    points: [
      "AMC and warranty coverage tracked against each protected device",
      "Preventive maintenance schedules across sites and asset classes",
      "Service requests from intake through vendor dispatch to closure",
      "SLA tracking, renewal alerts and complete per-asset service history",
    ],
    href: "/solutions/amc-management",
    linkLabel: "Explore AMC management",
  },
];

/* ------------------------------------------------------------------ */
/* Platform technology                                                 */
/* ------------------------------------------------------------------ */

export const nebulaTechnology: string[] = [
  "Linux Core",
  "Universal Drivers",
  "OEM SDKs",
  "ONVIF",
  "RTSP",
  "GPU Acceleration",
  "API Engine",
  "Recording Engine",
  "Watchdog",
  "Secure OTA",
  "Cloud Sync",
];

export const nebulaStack: NebulaLayer[] = [
  {
    id: "input",
    name: "Input layer",
    role: "Whatever is already on site — IP cameras, edge devices, sensors and OEM hardware — connects here without being replaced.",
    items: ["IP Cameras", "Edge Devices", "Sensors", "OEM Devices"],
  },
  {
    id: "device",
    name: "Device layer",
    role: "A universal driver layer normalises the estate. ONVIF, RTSP and vendor SDKs are translated into one internal device model, which is what keeps the deployment brand-neutral.",
    items: ["Universal Drivers", "OEM SDKs", "ONVIF", "RTSP"],
  },
  {
    id: "core",
    name: "Nebula OS core",
    role: "The engines that make it an operating system rather than an application: video, recording, AI runtime, health, APIs and device management, released and updated as one unit.",
    items: [
      "Video Engine",
      "Recording Engine",
      "AI Runtime",
      "Health Engine",
      "API Engine",
      "Device Manager",
    ],
  },
  {
    id: "cloud",
    name: "Cloud layer",
    role: "Orion Cloud synchronises health, alerts, configuration and operations so multi-site estates are managed centrally without pushing raw video off site.",
    items: [
      "Orion Cloud",
      "Command Center",
      "Alerts",
      "Analytics",
      "Remote Management",
    ],
  },
];

export const inputLayer = nebulaStack[0].items;
export const deviceLayer = nebulaStack[1].items;
export const nebulaCoreEngines = nebulaStack[2].items;
export const cloudLayer = nebulaStack[3].items;

/* ------------------------------------------------------------------ */
/* Benefits                                                            */
/* ------------------------------------------------------------------ */

export const nebulaBenefits: NebulaBenefit[] = [
  {
    id: "boot",
    title: "Boot Like an Appliance",
    description:
      "Power on and Nebula OS automatically initializes the video and AI stack.",
  },
  {
    id: "multi-brand",
    title: "Multi-Brand Ready",
    description:
      "Connect supported camera ecosystems through a unified device layer.",
  },
  {
    id: "gpu",
    title: "GPU Optimized",
    description:
      "Designed for hardware-accelerated video decoding and AI inference.",
  },
  {
    id: "self-monitoring",
    title: "Self-Monitoring",
    description:
      "Watchdog, device health, storage health, and service monitoring built in.",
  },
  {
    id: "updates",
    title: "Controlled Updates",
    description:
      "Managed OS and service updates with rollback-ready deployment architecture.",
  },
  {
    id: "cloud",
    title: "Cloud Connected",
    description:
      "Synchronize health, alerts, configuration, and operations with Orion Cloud.",
  },
];

/* ------------------------------------------------------------------ */
/* Deployment                                                          */
/* ------------------------------------------------------------------ */

export const nebulaDeployment = {
  heading: "Deployment models",
  lede: "Nebula OS runs where the video already is. The same operating system image and the same modules are used in every model — only the placement of the node changes.",
  models: [
    {
      id: "edge",
      name: "On-site node",
      bestFor: "Single plants, campuses and facilities",
      description:
        "Nebula OS runs on an on-premise appliance or server next to the cameras. Video and AI inference stay inside the site network; only health, alerts and configuration metadata sync outward.",
      traits: [
        "Video never leaves the site",
        "Works through constrained or intermittent WAN links",
        "Lowest bandwidth footprint",
      ],
    },
    {
      id: "hybrid",
      name: "Distributed nodes + Orion Cloud",
      bestFor: "Multi-site estates and regional operations",
      description:
        "Each site runs its own Nebula OS node for video, recording and inference, while Orion Cloud provides the central command view — estate-wide health, alerts, assets and AMC across every location.",
      traits: [
        "Per-site autonomy, central oversight",
        "One command view across regions",
        "Remote configuration and managed updates",
      ],
    },
    {
      id: "managed",
      name: "Partner-managed",
      bestFor: "System integrators and AMC providers",
      description:
        "Integrators deploy and operate Nebula OS nodes on behalf of their customers, using the health, asset and AMC modules to run service delivery across multiple client estates.",
      traits: [
        "Estate visibility per client",
        "Service and SLA workflows built in",
        "Evidence for warranty and contract claims",
      ],
    },
  ] satisfies NebulaDeploymentModel[],
};

/* ------------------------------------------------------------------ */
/* Comparison                                                          */
/* ------------------------------------------------------------------ */

export const nebulaComparison = {
  heading: "Nebula OS vs a traditional surveillance stack",
  lede: "The difference is not a longer feature list. It is that these capabilities share one system, one device model and one release cycle.",
  legacyLabel: "Traditional VMS + NVR + add-ons",
  nebulaLabel: "Nebula OS",
  rows: [
    {
      dimension: "Architecture",
      legacy: "Separate VMS, analytics box, monitoring tool and spreadsheets, joined by integrations",
      nebula: "One operating system with modules on a shared device and event model",
    },
    {
      dimension: "AI analytics",
      legacy: "A parallel stream into a separate appliance, usually on a subset of cameras",
      nebula: "An AI runtime reading the same decoded frames the recorder already uses",
    },
    {
      dimension: "Camera health",
      legacy: "Network ping at best; recording failures found during investigations",
      nebula: "Device, stream, recording and storage health checked continuously by the OS",
    },
    {
      dimension: "Asset & warranty records",
      legacy: "Spreadsheets and email threads that drift away from the live estate",
      nebula: "Every connected device is an asset record with ownership, warranty and history",
    },
    {
      dimension: "Maintenance",
      legacy: "Raised manually, after someone notices, against whichever vendor is remembered",
      nebula: "Driven by health events against the contract already attached to the device",
    },
    {
      dimension: "Updates",
      legacy: "Component-by-component, with re-testing of every integration",
      nebula: "Managed OS and service updates with a rollback-ready deployment path",
    },
    {
      dimension: "Camera choice",
      legacy: "Constrained by whichever ecosystem the VMS favours",
      nebula: "Brand-neutral through a universal device layer (ONVIF, RTSP, OEM SDKs)",
    },
  ] satisfies NebulaComparisonRow[],
};

/* ------------------------------------------------------------------ */
/* Who it is for                                                       */
/* ------------------------------------------------------------------ */

export const nebulaAudiences = [
  {
    id: "security",
    title: "Security & control-room leaders",
    description:
      "Know that every camera you are accountable for is actually recording, and investigate incidents without moving between systems.",
  },
  {
    id: "operations",
    title: "Plant & operations teams",
    description:
      "Use the cameras already installed for safety and process visibility, with alerts that carry the site context operators need to act.",
  },
  {
    id: "it",
    title: "IT & infrastructure",
    description:
      "Run one managed platform with one update path instead of maintaining integrations between four vendors' products.",
  },
  {
    id: "partners",
    title: "System integrators & AMC partners",
    description:
      "Deliver and service multi-client estates with health evidence, asset records and SLA tracking built into the platform you deploy.",
  },
];

/* ------------------------------------------------------------------ */
/* FAQ — also emitted as FAQPage structured data                       */
/* ------------------------------------------------------------------ */

export const nebulaFaqs: NebulaFaq[] = [
  {
    question: "What is Nebula OS?",
    answer:
      "Nebula OS is the Vision AI operating system that powers OrionAlerts. It is a Linux-based platform that runs video management, AI video analytics, camera health monitoring, asset tracking and AMC workflows as modules of one system, on one shared record of every camera, site and event.",
  },
  {
    question: "How is Nebula OS different from a VMS?",
    answer:
      "A VMS is an application for viewing and recording video. Nebula OS is the operating system underneath it. Video management is one module; the AI runtime, health engine, device manager, asset register and maintenance workflows are part of the same environment, released and updated together rather than integrated after the fact.",
  },
  {
    question: "Do I need to replace my existing cameras?",
    answer:
      "No. A universal device layer connects supported IP cameras and recorders through ONVIF, RTSP and vendor SDKs, so existing camera investments can be brought onto the platform rather than replaced.",
  },
  {
    question: "Does video have to leave my site?",
    answer:
      "No. In the standard deployment, video and AI inference stay on the on-site Nebula OS node. Orion Cloud synchronises health status, alerts, configuration and operational metadata for central management, without requiring raw video to be uploaded.",
  },
  {
    question: "Does Nebula OS need a GPU?",
    answer:
      "Nebula OS is designed for hardware-accelerated video decoding and AI inference, so GPU acceleration is used where AI analytics are enabled. The right node sizing depends on channel count and which detections are running — our team sizes this per deployment.",
  },
  {
    question: "Can Nebula OS manage multiple sites?",
    answer:
      "Yes. Each site can run its own node for video, recording and inference, while Orion Cloud provides a single command view of health, alerts, assets and maintenance across the entire estate.",
  },
  {
    question: "How are updates handled?",
    answer:
      "The OS and its services are updated together through a managed, rollback-ready deployment path, including secure over-the-air updates for connected nodes — so a platform upgrade is a single controlled change rather than a component-by-component migration.",
  },
  {
    question: "Who is Nebula OS built for?",
    answer:
      "Organisations running camera estates where surveillance is operationally critical — manufacturing, logistics and warehousing, energy and utilities, campuses, healthcare, retail and public infrastructure — along with the system integrators and AMC partners who deploy and service those estates.",
  },
];

/**
 * Nebula OS demo media. `src` stays empty until the MP4 is uploaded to
 * `/Videos/video/nebula-os.mp4` so the UI does not reference a 404 asset.
 */
export const nebulaVideo = {
  src: "/Videos/video/nebula.mp4",
  webmSrc: "/Videos/video/nebula.webm",
  poster: "/visuals/solutions/nebula-poster.webp",
  /** Set true and restore src when the file is present in public/. */
  available: true,
};
