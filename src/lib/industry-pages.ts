import { getIndustry, industries, type Industry } from "@/lib/site";

export type IndustryStat = {
  value: string;
  label: string;
};

export type IndustryUseCase = {
  title: string;
  description: string;
  capability: string;
};

export type IndustryFaq = {
  question: string;
  answer: string;
};

export type IndustryQuote = {
  text: string;
  attribution: string;
};

export type IndustryPageData = Industry & {
  stats: IndustryStat[];
  useCases: IndustryUseCase[];
  howItWorks: [string, string, string];
  solutionBlurbs: Record<string, string>;
  quote: IndustryQuote;
  faqs: IndustryFaq[];
  contextNote?: string;
};

const sharedHowItWorks: [string, string, string] = [
  "Connect your camera estate and define the zones, sites, and roles that matter.",
  "Detect exceptions with AI Vision and route prioritized alerts to the right operators.",
  "Investigate faster with searchable video, then keep systems healthy with monitoring and AMC.",
];

const sharedFaqs = (name: string): IndustryFaq[] => [
  {
    question: "Can OrionAlerts work with our existing cameras?",
    answer:
      "Yes. OrionAlerts is built to unify existing camera infrastructure into a single operations layer — so you can modernize workflows without rip-and-replace.",
  },
  {
    question: `Can we start with one ${name.toLowerCase()} site and expand later?`,
    answer:
      "Absolutely. Most teams begin with a pilot site or critical zone, prove operator value, then roll out across plants, campuses, or regions.",
  },
  {
    question: "How do alerts reach our security and operations teams?",
    answer:
      "High-confidence events can be routed to the right roles with context and evidence — reducing noise and helping teams respond with clarity.",
  },
  {
    question: "What about camera downtime and maintenance?",
    answer:
      "Health Monitoring and AMC workflows give you proactive visibility into estate health, partner SLAs, and maintenance status before outages escalate.",
  },
];

type Extras = Omit<IndustryPageData, keyof Industry>;

const extrasBySlug: Record<string, Extras> = {
  manufacturing: {
    stats: [
      { value: "<3s", label: "Alert-to-operator context" },
      { value: "Multi-plant", label: "Unified live operations" },
      { value: "24/7", label: "Estate health visibility" },
    ],
    useCases: [
      {
        title: "PPE & restricted-zone safety",
        description:
          "Detect PPE exceptions and unauthorized entry into high-risk production zones before incidents escalate.",
        capability: "AI Vision & Real-Time Alerts",
      },
      {
        title: "Shop-floor investigations",
        description:
          "Search across lines and shifts to reconstruct quality, safety, or theft events with evidence-ready timelines.",
        capability: "Smart Search + VMS",
      },
      {
        title: "Critical asset visibility",
        description:
          "Track high-value tooling and shared equipment so loss and custody gaps don’t interrupt production.",
        capability: "Asset Tracking",
      },
      {
        title: "Camera estate uptime",
        description:
          "Keep plant surveillance healthy with proactive monitoring and coordinated AMC across sites.",
        capability: "Health Monitoring + AMC",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "One command layer for live and recorded video across plants and warehouses.",
      "ai-analytics": "Prioritize PPE, intrusion, and zone exceptions instead of watching every feed.",
      "smart-search": "Find the exact moment on a line or dock without scrubbing hours of footage.",
      "asset-tracking": "Keep tooling and critical assets visible across the shop floor.",
      "amc-management": "Coordinate partner maintenance so camera downtime doesn’t surprise you.",
      "health-monitoring": "See recorder and camera health before a blind spot appears on the line.",
    },
    quote: {
      text: "We needed plant security that operated like production — measurable, multi-site, and fast when something goes wrong.",
      attribution: "Head of Security Operations, discrete manufacturing",
    },
    faqs: sharedFaqs("Manufacturing"),
    contextNote:
      "Built for plants where safety compliance, multi-shift coverage, and equipment uptime all depend on reliable video operations.",
  },
  automotive: {
    stats: [
      { value: "Shift-ready", label: "Consistent multi-shift monitoring" },
      { value: "OEM-ready", label: "Audit-friendly evidence trails" },
      { value: "Line-wide", label: "Faster root-cause review" },
    ],
    useCases: [
      {
        title: "Assembly zone control",
        description:
          "Monitor restricted precision areas and visitor exceptions across high-throughput assembly halls.",
        capability: "AI Vision",
      },
      {
        title: "Quality & incident reconstruction",
        description:
          "Trace line events quickly with searchable video when quality or safety incidents need root-cause clarity.",
        capability: "Smart Search",
      },
      {
        title: "Supplier & logistics docks",
        description:
          "Keep inbound/outbound dock activity visible with prioritized movement and access alerts.",
        capability: "VMS + Alerts",
      },
      {
        title: "Surveillance reliability",
        description:
          "Protect continuous operations with proactive camera and recorder health across plants.",
        capability: "Health Monitoring",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "Unify halls, docks, and yards under one operator workflow.",
      "ai-analytics": "Enforce zone and PPE policies across rotating shifts.",
      "smart-search": "Accelerate OEM and internal investigations with searchable evidence.",
      "health-monitoring": "Spot camera failures before they create compliance gaps.",
      "amc-management": "Keep plant surveillance SLAs visible across partners.",
    },
    quote: {
      text: "When a line event happens, waiting on fragmented NVRs is not an option. Searchable video changed our response speed.",
      attribution: "Plant Operations Lead, automotive manufacturing",
    },
    faqs: sharedFaqs("Automotive"),
    contextNote:
      "Designed for precision manufacturing where audit trails, shift consistency, and rapid investigation matter as much as deterrence.",
  },
  "metals-mining": {
    stats: [
      { value: "Remote-ready", label: "Visibility across harsh sites" },
      { value: "Realtime", label: "Intrusion & safety alerts" },
      { value: "Field-proof", label: "Camera health in tough conditions" },
    ],
    useCases: [
      {
        title: "Perimeter hardening",
        description:
          "Detect intrusion and unauthorized movement around pits, plants, and storage yards.",
        capability: "AI Vision",
      },
      {
        title: "Hazardous zone awareness",
        description:
          "Give operators prioritized visibility where continuous human coverage is limited.",
        capability: "VMS + Alerts",
      },
      {
        title: "Incident evidence",
        description:
          "Export forensic-ready footage for investigations across distributed heavy-industry sites.",
        capability: "Smart Search",
      },
      {
        title: "Field estate health",
        description:
          "Monitor cameras and recorders in harsh environments before outages cascade.",
        capability: "Health Monitoring + AMC",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "Centralize pits, plants, and yards into one operating picture.",
      "ai-analytics": "Prioritize intrusion and safety events in high-risk zones.",
      "health-monitoring": "Track estate health where environments are hardest on hardware.",
      "asset-tracking": "Keep critical field assets and equipment visibility tighter.",
      "amc-management": "Coordinate maintenance partners across remote locations.",
    },
    quote: {
      text: "Remote sites used to mean delayed awareness. Now exceptions surface before they become incidents.",
      attribution: "Security Manager, metals & mining operations",
    },
    faqs: sharedFaqs("Mining"),
    contextNote:
      "Built for environments where perimeter pressure, safety risk, and distributed infrastructure demand reliable surveillance.",
  },
  cement: {
    stats: [
      { value: "Yard-wide", label: "Perimeter & storage visibility" },
      { value: "Always-on", label: "Process plant monitoring" },
      { value: "SLA-led", label: "Camera maintenance clarity" },
    ],
    useCases: [
      {
        title: "Conveyor & machinery safety",
        description:
          "Watch high-risk process areas and restricted zones around heavy equipment and conveyors.",
        capability: "AI Vision",
      },
      {
        title: "Yard theft & movement",
        description:
          "Monitor storage yards and material movement with prioritized alerts for security teams.",
        capability: "VMS + Alerts",
      },
      {
        title: "Multi-plant command",
        description:
          "Operate plants and distribution points from a unified video workflow.",
        capability: "VMS",
      },
      {
        title: "Outdoor estate resilience",
        description:
          "Keep dusty, outdoor, and heat-exposed camera estates healthy with proactive monitoring.",
        capability: "Health Monitoring + AMC",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "Command plants and yards without juggling fragmented recorders.",
      "ai-analytics": "Flag restricted-zone and safety exceptions around continuous operations.",
      "smart-search": "Review incidents and audits without manual tape hunting.",
      "health-monitoring": "Catch outdoor camera failures before blind spots grow.",
      "amc-management": "Keep critical cameras under clear maintenance ownership.",
    },
    quote: {
      text: "Outdoor cameras used to fail quietly. Estate health turned that into an actionable queue.",
      attribution: "Plant Head, cement & building materials",
    },
    faqs: sharedFaqs("Cement"),
  },
  "oil-gas": {
    stats: [
      { value: "Zero-gap", label: "High-risk zone awareness" },
      { value: "Audit-ready", label: "Investigation evidence trails" },
      { value: "Partner-clear", label: "SLA & maintenance visibility" },
    ],
    useCases: [
      {
        title: "Perimeter & process zone security",
        description:
          "Prioritize intrusion and zone exceptions across refineries, terminals, and processing facilities.",
        capability: "AI Vision",
      },
      {
        title: "Compliance investigations",
        description:
          "Produce forensic-ready video trails when regulators, insurers, or internal teams need proof.",
        capability: "Smart Search",
      },
      {
        title: "Contractor & partner oversight",
        description:
          "Maintain clearer operational visibility where multiple partners touch critical infrastructure.",
        capability: "VMS + AMC",
      },
      {
        title: "No-blind-spot reliability",
        description:
          "Detect recorder and camera health issues before they create unacceptable downtime.",
        capability: "Health Monitoring",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "Unify high-risk sites under one hardened command workflow.",
      "ai-analytics": "Surface perimeter and zone threats with operator priority.",
      "smart-search": "Build investigation-ready event trails faster.",
      "health-monitoring": "Protect uptime where camera failure is not acceptable.",
      "amc-management": "Keep partner maintenance accountability visible.",
    },
    quote: {
      text: "In our environment, surveillance downtime is an operational risk. Health visibility is now part of daily assurance.",
      attribution: "HSE & Security Lead, oil & gas",
    },
    faqs: sharedFaqs("Oil & Gas"),
    contextNote:
      "Aligned to high-consequence environments that demand situational awareness, evidence quality, and system reliability.",
  },
  schools: {
    stats: [
      { value: "Campus-wide", label: "Multi-building visibility" },
      { value: "Faster", label: "Incident review cycles" },
      { value: "Proactive", label: "Camera estate health" },
    ],
    useCases: [
      {
        title: "Campus perimeter & access",
        description:
          "Get alerted to after-hours intrusion and unauthorized access across buildings and grounds.",
        capability: "AI Vision",
      },
      {
        title: "Incident response support",
        description:
          "Give administrators and security teams searchable video when campus incidents need fast clarity.",
        capability: "Smart Search + VMS",
      },
      {
        title: "Crowding & common areas",
        description:
          "Monitor high-traffic corridors, entries, and gathering spaces with prioritized operator queues.",
        capability: "AI Vision",
      },
      {
        title: "Reliable campus CCTV",
        description:
          "Keep aging camera estates healthier with monitoring and maintenance workflows.",
        capability: "Health Monitoring + AMC",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "Operate multiple buildings from one campus command view.",
      "ai-analytics": "Prioritize access and perimeter exceptions for lean security teams.",
      "smart-search": "Review incidents quickly without scrubbing every camera.",
      "health-monitoring": "Know which cameras are offline before the school day starts.",
      "amc-management": "Keep vendor maintenance on track across campus sites.",
    },
    quote: {
      text: "We needed campus safety tools that help a small team cover a large footprint — without drowning in feeds.",
      attribution: "Director of Campus Safety, educational institution",
    },
    faqs: sharedFaqs("School"),
    contextNote:
      "Designed for schools and campuses that need safer environments, faster incident clarity, and dependable multi-building coverage.",
  },
  pharma: {
    stats: [
      { value: "GxP-aware", label: "Audit-friendly workflows" },
      { value: "Controlled", label: "Access & zone monitoring" },
      { value: "Multi-site", label: "CDMO & plant coordination" },
    ],
    useCases: [
      {
        title: "Controlled area monitoring",
        description:
          "Watch restricted and cleanroom-adjacent zones for unauthorized access and anomalies.",
        capability: "AI Vision",
      },
      {
        title: "Audit & incident documentation",
        description:
          "Export compliance-friendly evidence trails for QA, security, and investigation needs.",
        capability: "Smart Search",
      },
      {
        title: "Storage & cold-chain adjacency",
        description:
          "Improve visibility around storage and sensitive areas where gaps create operational risk.",
        capability: "VMS",
      },
      {
        title: "Distributed site reliability",
        description:
          "Keep multi-site and CDMO camera estates healthy under one operating model.",
        capability: "Health Monitoring + AMC",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "Centralize labs, plants, and warehouses for security and QA visibility.",
      "ai-analytics": "Flag access and zone anomalies in controlled environments.",
      "smart-search": "Produce investigation and audit exports with less manual effort.",
      "health-monitoring": "Protect validated operations from silent camera failures.",
      "amc-management": "Keep maintenance accountability clear across facilities.",
    },
    quote: {
      text: "Evidence quality and controlled-area visibility matter as much as live monitoring in our world.",
      attribution: "QA & Site Security Lead, life sciences",
    },
    faqs: sharedFaqs("Pharma"),
    contextNote:
      "Supports life-sciences operations where access discipline, documentation, and multi-site coordination are non-negotiable.",
  },
  "food-fmcg": {
    stats: [
      { value: "Line-aware", label: "Hygiene & zone monitoring" },
      { value: "Dock-fast", label: "Incident response support" },
      { value: "24/7", label: "Production uptime focus" },
    ],
    useCases: [
      {
        title: "Restricted production zones",
        description:
          "Monitor hygiene-sensitive and restricted areas with prioritized exception alerts.",
        capability: "AI Vision",
      },
      {
        title: "Warehouse & cold-storage incidents",
        description:
          "Investigate shrinkage, dock events, and cold-storage exceptions with searchable video.",
        capability: "Smart Search",
      },
      {
        title: "High-throughput packaging floors",
        description:
          "Help lean teams cover more cameras by routing only high-signal events.",
        capability: "AI Vision + VMS",
      },
      {
        title: "Shared equipment visibility",
        description:
          "Track shared tooling and assets that move across packaging and processing areas.",
        capability: "Asset Tracking",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "Run packaging floors, cold stores, and DCs from one operations layer.",
      "ai-analytics": "Cut feed overload with prioritized safety and zone alerts.",
      "smart-search": "Resolve dock and warehouse incidents faster.",
      "asset-tracking": "Keep shared equipment custody clearer across shifts.",
      "health-monitoring": "Protect continuous production from surveillance gaps.",
    },
    quote: {
      text: "High camera counts used to overwhelm operators. Prioritized alerts made the floor manageable again.",
      attribution: "Operations Security Lead, FMCG",
    },
    faqs: sharedFaqs("Food & FMCG"),
  },
  logistics: {
    stats: [
      { value: "Yard-speed", label: "Faster dock investigations" },
      { value: "Multi-DC", label: "Centralized live operations" },
      { value: "Chain-clear", label: "High-value zone alerts" },
    ],
    useCases: [
      {
        title: "Yard & dock response",
        description:
          "Reconstruct dock and yard incidents quickly with searchable multi-camera evidence.",
        capability: "Smart Search + VMS",
      },
      {
        title: "High-value freight zones",
        description:
          "Get movement alerts where shrinkage and chain-of-custody risk are highest.",
        capability: "AI Vision",
      },
      {
        title: "Multi-DC operations",
        description:
          "Give operators a shared live picture across warehouses and fulfillment centers.",
        capability: "VMS",
      },
      {
        title: "Estate uptime across DCs",
        description:
          "Reduce blind spots caused by unmanaged camera and recorder failures.",
        capability: "Health Monitoring",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "Command yards, docks, and DCs without site-by-site friction.",
      "ai-analytics": "Prioritize movement exceptions in high-value freight zones.",
      "smart-search": "Cut investigation time on dock and yard events.",
      "asset-tracking": "Improve custody visibility for critical movable assets.",
      "health-monitoring": "Keep multi-DC camera estates online and accountable.",
    },
    quote: {
      text: "Dock disputes used to take hours. Searchable video made evidence retrieval an operator task, not a project.",
      attribution: "Regional Security Lead, logistics & warehousing",
    },
    faqs: sharedFaqs("Logistics"),
  },
  "commercial-infrastructure": {
    stats: [
      { value: "Footfall-ready", label: "Crowd-aware monitoring" },
      { value: "Multi-building", label: "Consistent coverage" },
      { value: "After-hours", label: "Intrusion prioritization" },
    ],
    useCases: [
      {
        title: "High-footfall spaces",
        description:
          "Help operators manage crowding and exceptions across large commercial floorplates.",
        capability: "AI Vision",
      },
      {
        title: "After-hours protection",
        description:
          "Detect intrusion and access exceptions when buildings are least staffed.",
        capability: "AI Vision + VMS",
      },
      {
        title: "Multi-building command",
        description:
          "Standardize surveillance operations across airports, malls, offices, and mixed-use sites.",
        capability: "VMS",
      },
      {
        title: "System health consistency",
        description:
          "Keep camera estates healthy across distributed commercial portfolios.",
        capability: "Health Monitoring + AMC",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "Run multi-building portfolios from one operator model.",
      "ai-analytics": "Prioritize crowding, intrusion, and access exceptions.",
      "smart-search": "Support investigations across large commercial campuses.",
      "health-monitoring": "Eliminate inconsistent uptime across buildings.",
      "amc-management": "Keep facility partners aligned on maintenance SLAs.",
    },
    quote: {
      text: "Distributed buildings used to mean uneven security posture. One command layer fixed the inconsistency.",
      attribution: "Facilities & Security Director, commercial portfolio",
    },
    faqs: sharedFaqs("Commercial"),
  },
  utilities: {
    stats: [
      { value: "Critical", label: "Hardened site command" },
      { value: "Evidence-first", label: "Audit-ready event trails" },
      { value: "Early-warn", label: "Camera failure detection" },
    ],
    useCases: [
      {
        title: "Substation & perimeter security",
        description:
          "Monitor remote and high-impact infrastructure with prioritized intrusion awareness.",
        capability: "AI Vision",
      },
      {
        title: "Regulatory investigations",
        description:
          "Produce forensic-ready trails when audits and incident reviews demand proof.",
        capability: "Smart Search",
      },
      {
        title: "Partner network clarity",
        description:
          "Keep contractor and partner maintenance accountability visible across sites.",
        capability: "AMC Management",
      },
      {
        title: "Zero-tolerance uptime",
        description:
          "Get early warning when cameras or recorders threaten critical visibility.",
        capability: "Health Monitoring",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "Hardened command for substations, plants, and regulated sites.",
      "ai-analytics": "Prioritize perimeter pressure and high-impact exceptions.",
      "smart-search": "Support audits with searchable, exportable evidence.",
      "health-monitoring": "Detect failures before they cascade into outages.",
      "amc-management": "Make partner SLAs operationally visible.",
    },
    quote: {
      text: "Critical infrastructure security is about assurance. We needed surveillance that fails loudly — not silently.",
      attribution: "OT Security Lead, utilities",
    },
    faqs: sharedFaqs("Utilities"),
    contextNote:
      "Built for regulated and high-impact infrastructure where downtime and weak evidence create outsized risk.",
  },
  "pulp-paper": {
    stats: [
      { value: "Mill-scale", label: "Section-wide visibility" },
      { value: "Safety-led", label: "Zone monitoring at scale" },
      { value: "Uptime", label: "Camera & recorder health" },
    ],
    useCases: [
      {
        title: "Mill section coverage",
        description:
          "Unify sprawling continuous-process areas into one searchable operating picture.",
        capability: "VMS",
      },
      {
        title: "Safety & storage risk",
        description:
          "Monitor production and storage areas where fire and safety risk demand faster awareness.",
        capability: "AI Vision",
      },
      {
        title: "Compliance investigations",
        description:
          "Review incidents across mill sections with searchable video workflows.",
        capability: "Smart Search",
      },
      {
        title: "Estate reliability",
        description:
          "Replace manual health checks with dashboards for cameras and recorders.",
        capability: "Health Monitoring + AMC",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "See mill sections and yards without fragmented recorder hopping.",
      "ai-analytics": "Scale safety and zone monitoring across continuous processes.",
      "smart-search": "Accelerate compliance and incident reviews.",
      "health-monitoring": "Keep energy-intensive operations under reliable CCTV coverage.",
      "amc-management": "Coordinate maintenance before outages create blind spots.",
    },
    quote: {
      text: "A mill is too large for manual monitoring. We needed intelligence that scales with the floorplate.",
      attribution: "Safety & Security Head, pulp & paper",
    },
    faqs: sharedFaqs("Pulp & Paper"),
  },
  textile: {
    stats: [
      { value: "Shift-proof", label: "Consistent unit monitoring" },
      { value: "Loss-aware", label: "Material movement visibility" },
      { value: "Unified", label: "Multi-building operations" },
    ],
    useCases: [
      {
        title: "Multi-unit live ops",
        description:
          "Connect spinning, weaving, dyeing, and finishing units under one video workflow.",
        capability: "VMS",
      },
      {
        title: "Safety on fast floors",
        description:
          "Prioritize PPE and restricted-zone exceptions across noisy, high-tempo production areas.",
        capability: "AI Vision",
      },
      {
        title: "Material & theft risk",
        description:
          "Improve visibility into material movement and high-value machinery areas.",
        capability: "Asset Tracking + Alerts",
      },
      {
        title: "Fragmented NVR cleanup",
        description:
          "Replace building-by-building recorder chaos with health-aware centralized operations.",
        capability: "Health Monitoring + AMC",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "Unify units and buildings into one operator-friendly command layer.",
      "ai-analytics": "Keep safety monitoring consistent across shift changes.",
      "asset-tracking": "Protect high-value machinery and shared production assets.",
      "health-monitoring": "End silent NVR and camera failures between buildings.",
      "amc-management": "Keep maintenance ownership clear across the estate.",
    },
    quote: {
      text: "Shift handovers used to reset our awareness. Unified ops finally gave us continuity.",
      attribution: "Factory Security Lead, textile & garment",
    },
    faqs: sharedFaqs("Textile"),
  },
  "polymers-plastics": {
    stats: [
      { value: "Line-clear", label: "Extrusion & molding visibility" },
      { value: "Safety-first", label: "High-temp zone alerts" },
      { value: "Predictable", label: "Surveillance maintenance" },
    ],
    useCases: [
      {
        title: "Extrusion & molding bays",
        description:
          "Keep production lines visible with unified live and recorded operations.",
        capability: "VMS",
      },
      {
        title: "High-temperature safety",
        description:
          "Prioritize safety and intrusion exceptions around high-risk processing zones.",
        capability: "AI Vision",
      },
      {
        title: "Warehouse shrinkage",
        description:
          "Investigate material handling and warehouse exceptions with searchable evidence.",
        capability: "Smart Search",
      },
      {
        title: "Shift-handover reliability",
        description:
          "Prevent camera failures from disrupting shift transitions and operator continuity.",
        capability: "Health Monitoring",
      },
    ],
    howItWorks: sharedHowItWorks,
    solutionBlurbs: {
      vms: "Cover plants and warehouses with one multi-site command model.",
      "ai-analytics": "Surface safety and intrusion events around processing lines.",
      "smart-search": "Resolve quality and security incidents without long scrub sessions.",
      "health-monitoring": "Keep surveillance predictable across shifts.",
      "asset-tracking": "Improve visibility for critical movable production assets.",
    },
    quote: {
      text: "Camera failures at handover used to create blind hours. Health monitoring closed that gap.",
      attribution: "Plant Operations Manager, polymers & plastics",
    },
    faqs: sharedFaqs("Polymers"),
  },
};

function fallbackExtras(industry: Industry): Extras {
  return {
    stats: [
      { value: "Unified", label: "Multi-site video operations" },
      { value: "AI-led", label: "Prioritized exception alerts" },
      { value: "Reliable", label: "Estate health visibility" },
    ],
    useCases: industry.challenges.slice(0, 4).map((challenge, index) => ({
      title: challenge,
      description: industry.outcomes[index] ?? industry.summary,
      capability: "OrionAlerts platform",
    })),
    howItWorks: sharedHowItWorks,
    solutionBlurbs: Object.fromEntries(
      industry.relatedSolutions.map((slug) => [
        slug,
        `Recommended for ${industry.name} operations and incident workflows.`,
      ]),
    ),
    quote: {
      text: `OrionAlerts helps ${industry.name.toLowerCase()} teams move from passive camera watching to prioritized, multi-site operations.`,
      attribution: `Security & Operations Leader, ${industry.name}`,
    },
    faqs: sharedFaqs(industry.cardLabel ?? industry.name),
  };
}

export function getIndustryPage(slug: string): IndustryPageData | undefined {
  const industry = getIndustry(slug);
  if (!industry) return undefined;
  const extras = extrasBySlug[slug] ?? fallbackExtras(industry);
  return { ...industry, ...extras };
}

export function getRelatedIndustries(slug: string, limit = 4) {
  const index = industries.findIndex((i) => i.slug === slug);
  if (index < 0) return industries.slice(0, limit);

  const related: typeof industries = [];
  for (let offset = 1; related.length < limit && offset < industries.length; offset += 1) {
    related.push(industries[(index + offset) % industries.length]);
  }
  return related;
}
