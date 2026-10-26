export const site = {
  name: "OrionAlerts",
  tagline:
    "AI video analytics, VMS, CCTV health monitoring and AMC management for multi-site enterprises. Built in Mumbai, India.",
  description:
    "OrionAlerts turns existing CCTV into real-time AI alerts and unifies VMS, camera health, asset tracking and AMC for multi-site enterprises in India.",
  /**
   * The canonical "What is OrionAlerts" statement. Reuse it verbatim (About intro,
   * FAQ #1, homepage, llms.txt, fact sheet) so search and answer engines see one
   * consistent description of the entity.
   */
  entityStatement:
    "OrionAlerts is an enterprise video intelligence platform from Global Ace Technology Pvt. Ltd., Mumbai, India. It turns existing CCTV and IP cameras into real-time AI video analytics alerts, and combines a video management system (VMS), camera health monitoring, asset tracking and AMC management on Nebula OS, its Linux-based operating system, for single-site and multi-site organizations.",
  email: "sales@orionalerts.com",
  /** Leave empty until a verified public phone number is published. */
  phone: "",
  address: "K Raheja Platinum, 3rd Floor, Marol, Andheri East, Mumbai, Maharashtra 400059",
  /** ISO 3166 country the business operates from. Used for schema.org areaServed. */
  country: "IN",
};

/**
 * Public profiles that belong to OrionAlerts, emitted as schema.org `sameAs`.
 * Keep empty until real company-owned profile URLs exist — do not invent them.
 */
export const socialProfiles: string[] = [];

/** Topics the company is an authority on; emitted as schema.org `knowsAbout`. */
export const knowsAbout: string[] = [
  "AI video analytics",
  "Video management systems",
  "CCTV camera health monitoring",
  "Surveillance asset management",
  "Annual maintenance contract management",
  "Computer vision for industrial safety",
];

export type Solution = {
  slug: string;
  name: string;
  shortName: string;
  /** Keyword-led page title (≤46 chars; " | OrionAlerts" is appended). Falls back to `name`. */
  seoTitle?: string;
  /** Meta description (120–155 chars). Falls back to the shared SEO copy in seo.ts. */
  seoDescription?: string;
  image: string;
  tagline: string;
  headline: string;
  summary: string;
  overview: string;
  introVideo?: string;
  introVideoPoster?: string;
  /** One visible line for cards and lists: who it is for and the problem it solves. */
  oneLiner: string;
  /**
   * Question-style H2 plus a 40–60 word definition-first answer, shown at the
   * top of the page (AEO: featured snippets and AI answers quote this).
   */
  definition: { question: string; answer: string };
  features: SolutionFeature[];
  /** Text version of the architecture diagram, in order. Empty when there is no diagram. */
  architecture: string[];
  /** "How it works" step titles, rendered as a numbered list. */
  workflow: string[];
  /** Optional one-line description per `workflow` step (same order). */
  workflowDetails?: string[];
  benefits: string[];
  screenshotLabels: string[];
  /** Visible FAQ (H3 questions) and FAQPage structured data. Facts only — no invented numbers. */
  faqs: SolutionFaq[];
};

export type SolutionFaq = { question: string; answer: string };

/**
 * One capability row. The title drives the anchor id (`featureAnchorId`), so a
 * rename changes deep links — keep the old id working via `featureAnchorAliases`
 * in src/lib/feature-anchors.ts.
 */
export type SolutionFeature = {
  title: string;
  description: string;
  /** Optional "Learn more" links to the matching /use-cases pages. */
  links?: { label: string; href: string }[];
};

const solutionsSource: Solution[] = [
  {
    slug: "vms",
    name: "Video Management System (VMS)",
    seoTitle: "Video Management System (VMS) Software",
    seoDescription:
      "OrionAlerts VMS puts live view, playback, alarms and evidence export for every site in one console. Works with existing ONVIF and RTSP IP cameras.",
    shortName: "VMS",
    image: "/Images/solutions/centralized-live-monitoring-playback.webp",
    tagline: "Live monitoring & control",
    headline:
      "Unify cameras, sites, and operators in one enterprise VMS for live monitoring, playback, and control.",
    introVideo: "/Videos/workflow/live-wall.mp4",
    summary:
      "Run live monitoring, playback, alarms and evidence export for every camera and site from one video management system, so security teams work from one console instead of separate recorders.",
    overview:
      "OrionAlerts VMS replaces NVR-by-NVR logins with one console for every camera, recorder and site. Recording and retention are set per camera, zone or site, incidents are found on searchable timelines, and the cameras you already own connect over ONVIF, RTSP and vendor SDKs.",
    oneLiner: "Live view, playback and evidence for every site in one console.",
    definition: {
      question: "What is a video management system (VMS)?",
      answer:
        "A video management system (VMS) is software that connects IP cameras and recorders so operators can watch live video, play back recordings, manage alarms and export evidence from one interface. OrionAlerts VMS runs as a native service of Nebula OS, so multi-site live view and playback sit on the same platform as AI alerts and camera health.",
    },
    features: [
      {
        title: "Centralized Live Monitoring & Playback",
        description:
          "View live camera streams and recorded footage from one unified operations interface—so control-room teams monitor events, review incidents, and coordinate response without switching between disconnected systems.",
      },
      {
        title: "Multi-Site Surveillance Management",
        description:
          "Oversee cameras, recorders, and sites across campuses and facilities from a single VMS platform, giving security leaders consistent visibility and control as the estate scales.",
      },
      {
        title: "Video Search & Incident Investigation",
        description:
          "Find relevant footage quickly with searchable video workflows that accelerate incident investigation, evidence export, and post-event review for security and compliance teams.",
      },
      {
        title: "Secure Remote Access",
        description:
          "Give authorized operators and managers secure remote access to live video, playback, and controls—without exposing the broader camera estate to unmanaged access risk.",
      },
      {
        title: "Event & Alarm Management",
        description:
          "Centralize events and alarms so operators can acknowledge, escalate, and clear incidents from one shared queue with clearer ownership and faster on-floor response.",
      },
      {
        title: "Open Integration with IP Cameras & Third-Party Systems",
        description:
          "Connect IP cameras and third-party systems through an open architecture so organizations can expand coverage, protect existing investments, and avoid closed hardware lock-in.",
      },
    ],
    architecture: [
      "Camera ingest over ONVIF, RTSP and vendor SDKs",
      "Video and recording engines on the on-site Nebula OS node",
      "Recording and retention policies per camera, zone or site",
      "Operator console with role-based access and APIs",
    ],
    workflow: [
      "Connect cameras and map sites",
      "Define roles, zones and retention",
      "Monitor live video and handle alarms",
      "Search incidents and export evidence",
    ],
    workflowDetails: [
      "Bring existing IP cameras and recorders onto the platform over ONVIF, RTSP or vendor SDKs, and map them to sites and zones.",
      "Decide who sees which sites and cameras, and set recording and retention per camera, zone or site.",
      "Operators watch live walls across sites and acknowledge, escalate and clear alarms from one shared queue.",
      "Find footage on searchable incident timelines and export evidence for investigations and audits.",
    ],
    benefits: [
      "Faster incident awareness across locations",
      "One console instead of NVR-by-NVR logins",
      "Audit-ready access and export trails",
      "Ready for AI alerts on the same cameras",
    ],
    screenshotLabels: ["Live operations wall", "Site map overview", "Incident timeline"],
    faqs: [
      {
        question: "Do I need to replace my cameras to use OrionAlerts VMS?",
        answer:
          "No. OrionAlerts connects supported IP cameras and recorders through ONVIF, RTSP and vendor SDKs, so the cameras you already own are brought onto the platform rather than replaced.",
      },
      {
        question: "What is the difference between a VMS and an NVR?",
        answer:
          "An NVR records cameras at one location. A VMS manages many cameras and recorders across sites from one console, with shared user roles, alarm handling, search and evidence export.",
      },
      {
        question: "Does video leave my site?",
        answer:
          "Not in the standard deployment. Video is recorded and stored on the on-site Nebula OS node, and Orion Cloud synchronizes only health status, alerts, configuration and operational metadata, so you get a central view without uploading raw video.",
      },
      {
        question: "Can one VMS manage multiple sites?",
        answer:
          "Yes. Each site runs its own Nebula OS node for video and recording, and Orion Cloud provides one command view across every location. Role-based access means operators, managers and auditors each see the sites and cameras in their scope.",
      },
      {
        question: "Can I add AI video analytics to the same cameras later?",
        answer:
          "Yes. AI video analytics is another module of the same platform. The AI runtime reads frames from the same video engine that records your cameras, so detections can be switched on for selected cameras without a separate analytics appliance.",
      },
    ],
  },
  {
    slug: "ai-analytics",
    name: "AI Vision & Real-Time Alerts",
    seoTitle: "AI Video Analytics & Real-Time CCTV Alerts",
    seoDescription:
      "AI video analytics that turn existing CCTV into real-time alerts for intrusion, PPE, fire, smoke and loitering, on your dashboard, mobile app or email.",
    shortName: "AI Vision",
    image: "/Images/solutions/real-time-ai-video-analytics.webp",
    tagline: "Intelligent video analytics",
    headline:
      "Turn live video into real-time AI alerts for safety, intrusion, PPE, and operational events.",
    introVideo: "/Videos/outcomes/ai-analytics.mp4",
    summary:
      "Turn the cameras you already own into real-time alerts for security, safety and operational events, so teams act on what is happening instead of reviewing footage after the fact.",
    overview:
      "OrionAlerts AI video analytics watches live CCTV streams and raises an alert when a defined event happens, such as an intrusion, a missing helmet or vest, smoke, loitering or a vehicle in the wrong zone. Detections run on the on-site Nebula OS node, and zone and schedule rules keep alerts to the events each site cares about.",
    oneLiner: "Real-time alerts for intrusion, PPE, fire and smoke from existing CCTV.",
    definition: {
      question: "How does AI video analytics work?",
      answer:
        "AI video analytics software runs computer-vision models on live camera streams to detect defined events, such as a person entering a restricted zone or a worker without a helmet. When a rule is met, the system raises an alert for a person to review. In OrionAlerts, the AI runtime reads frames from the same video engine that records the cameras.",
    },
    features: [
      {
        title: "Real-Time AI Video Analytics",
        description:
          "Continuously analyze live video streams for security, safety, and operational events—so surveillance moves from passive recording to proactive detection that operators can act on immediately.",
      },
      {
        title: "Instant Event Detection & Smart Alerts",
        description:
          "Detect events as they happen and send the alert to the dashboard, mobile app and email with the event type, camera, site and zone, so the right team knows what happened and where. Zone and schedule rules decide which events raise an alert, cutting low-value noise.",
      },
      {
        title: "Intrusion & Restricted-Zone Detection",
        description:
          "Alert when a person crosses a perimeter, enters a restricted or hazardous zone, or walks into an area they should not access during the hours that zone is active. Zones and lines are drawn on each camera view, so a breach is flagged as it happens rather than found later on the recording.",
        links: [
          { label: "Perimeter intrusion", href: "/use-cases/perimeter-intrusion-detection" },
          { label: "Restricted zones", href: "/use-cases/restricted-zone-monitoring" },
          { label: "Unauthorized entry", href: "/use-cases/unauthorized-area-entry" },
        ],
      },
      {
        title: "PPE & Safety Compliance Detection",
        description:
          "Check that workers wear the required PPE, such as hard hats and high-visibility vests, in designated zones and shifts. Violations are flagged in real time so EHS supervisors can intervene, and each event is kept for safety reviews and audits.",
        links: [{ label: "PPE and safety compliance", href: "/use-cases/safety-compliance-detection" }],
      },
      {
        title: "Fire & Smoke Detection",
        description:
          "Spot visible smoke and flames in camera footage across monitored zones such as warehouses, yards and plant areas, and alert the responsible team. It adds a visual early-warning layer that supplements, and does not replace, certified fire detection and alarm systems.",
        links: [{ label: "Fire and smoke detection", href: "/use-cases/fire-smoke-detection" }],
      },
      {
        title: "Loitering & Line-Crossing Detection",
        description:
          "Flag a person who stays in a sensitive or idle zone longer than the time set for that zone, or who crosses a virtual line drawn at a fence, gate or doorway. An alert needs someone to stay past the set time, so people simply passing through do not raise one.",
        links: [
          { label: "Loitering detection", href: "/use-cases/loitering-detection" },
          { label: "Line crossing at perimeters", href: "/use-cases/perimeter-intrusion-detection" },
        ],
      },
      {
        title: "People, Vehicle & Occupancy Analytics",
        description:
          "Track people, vehicles, and occupancy patterns for security and operations insight—supporting crowd awareness, traffic flow, and site utilization decisions in real time.",
        links: [
          { label: "Crowd detection", href: "/use-cases/crowd-detection" },
          { label: "Vehicle detection", href: "/use-cases/vehicle-detection" },
        ],
      },
    ],
    architecture: [
      "Decoded frames from the same video engine that records the cameras",
      "AI runtime running the enabled detections",
      "Rules and alert engine (zones, schedules, event types)",
      "Alerts on the dashboard, mobile app and email",
    ],
    workflow: [
      "Select cameras and detection zones",
      "Turn on detections and rules",
      "Review alerts during a pilot",
      "Apply the same rules across sites",
    ],
    workflowDetails: [
      "Choose which camera streams to analyze and mark the zones that matter, such as a perimeter, a hazardous area or a loading bay.",
      "Pick event types such as intrusion, PPE, fire and smoke or loitering, and set zone and schedule rules that match how the site operates.",
      "Check each alert against the recorded footage before a wider rollout.",
      "Push the same safety and security rules to every site.",
    ],
    benefits: [
      "Fewer false alarms for security teams",
      "Cameras watched around the clock, not just the ones on screen",
      "Faster investigation with searchable events",
      "The same safety rules at every site",
    ],
    screenshotLabels: ["Alert inbox", "Zone configuration", "Forensic search"],
    faqs: [
      {
        question: "What can OrionAlerts AI video analytics detect?",
        answer:
          "Depending on the site, detections include PPE and safety compliance, perimeter intrusion, line crossing, restricted-area entry, crowd and occupancy, vehicles, fire and smoke, loitering and process compliance. Custom AI use cases can also be scoped for specific operational requirements.",
      },
      {
        question: "How are AI alerts delivered?",
        answer:
          "Alerts appear on the OrionAlerts dashboard, in the mobile app and by email. Each one names the event type, camera, site and zone, so the responder can check the recorded footage, and zone and schedule rules decide which events raise an alert.",
      },
      {
        question: "Do I need new cameras for AI video analytics?",
        answer:
          "No. OrionAlerts runs AI on supported existing IP cameras connected over ONVIF, RTSP or vendor SDKs, so detections are added to the cameras you already record.",
      },
      {
        question: "How is AI video analytics different from motion detection?",
        answer:
          "Motion detection triggers on any change in the picture, such as shadows, headlights, rain or moving foliage. AI video analytics recognizes what is in the scene, such as a person, a vehicle, a missing helmet or smoke, and raises an alert only when a defined rule is met.",
      },
      {
        question: "What is Vision Copilot?",
        answer:
          "Vision Copilot is the OrionAlerts AI assistant for surveillance data. Teams ask questions in natural language to search events, retrieve evidence and generate operational insights, instead of scrubbing through footage.",
      },
    ],
  },
  {
    slug: "asset-tracking",
    name: "Asset Tracking",
    seoTitle: "IT & Surveillance Asset Tracking Software",
    seoDescription:
      "Track IT and surveillance assets by serial, QR or barcode: location, custodian, warranty and lifecycle history in one register, with audit-ready exports.",
    shortName: "Asset Tracking",
    image: "/Images/solutions/centralized-asset-inventory.webp",
    tagline: "Inventory & lifecycle visibility",
    headline:
      "Track surveillance and IT assets across locations with clear ownership and lifecycle visibility.",
    introVideo: "/Videos/video/asset-tracking.mp4",
    summary:
      "Keep one register of your IT, surveillance and operational assets, with location, ownership, warranty, lifecycle and transfers, so audits are simpler and shared equipment is easier to find and use.",
    overview:
      "OrionAlerts Asset Tracking covers cameras, recorders, servers, network devices and other IT and operational equipment across all your sites. It shares its records with Health Monitoring and AMC Management, so an asset's location, custodian, warranty, health alerts and service history sit on one record instead of in separate tools.",
    oneLiner: "One register of what you own, where it is and who has it.",
    definition: {
      question: "What is asset tracking software?",
      answer:
        "Asset tracking software keeps one register of the equipment an organization owns: what each item is, where it is installed, who is responsible for it, and which warranty and documents apply. It records every transfer from purchase to retirement, so audits, handovers and missing-equipment questions are answered from one record instead of spreadsheets.",
    },
    features: [
      {
        title: "Centralized Asset Inventory",
        description:
          "Build a single source of truth for IT, surveillance, and operational assets—type, status, serial details, and utilization—so every team works from the same live inventory instead of fragmented spreadsheets.",
      },
      {
        title: "Asset Lifecycle Management",
        description:
          "Track each asset end to end from procurement and deployment through transfer, maintenance, and retirement, with status history that supports planning, budgeting, and replacement decisions.",
      },
      {
        title: "Serial Number Tracking",
        description:
          "Identify and retrieve assets instantly using serial numbers, with QR and barcode support for field lookups, handovers, and multi-site verification when devices move between locations.",
      },
      {
        title: "Location & Department Mapping",
        description:
          "Map assets to sites, floors, zones, and departments so operations leaders can see deployment density, plan moves, and answer “where is this asset?” without manual chasing.",
      },
      {
        title: "Asset Assignment & Ownership",
        description:
          "Assign clear custodians and responsible owners for every asset, so accountability stays visible during transfers, audits, and investigations when equipment is missing or reassigned.",
      },
      {
        title: "Warranty & Documentation Management",
        description:
          "Store warranty coverage, invoices, manuals, and supporting files against each asset record—so claims, renewals, and vendor conversations start with the right documents already attached.",
      },
      {
        title: "Audit Trail & Compliance Reports",
        description:
          "Generate a complete custody and change history—ownership, transfers, and document access—with exportable reports that simplify regulated reviews and internal compliance checks.",
      },
    ],
    // No architecture diagram for this module. The old "tag / beacon layer" and
    // "geofence" data described location tracking the product does not claim.
    architecture: [],
    workflow: [
      "Purchase recorded",
      "Asset registration",
      "Location & ownership mapping",
      "Transfer and handover tracking",
      "Lifecycle & warranty monitoring",
      "Report and audit",
    ],
    workflowDetails: [
      "Add the asset with its type, serial number, invoice and warranty documents.",
      "Register it in the central inventory, searchable by serial number, QR code or barcode.",
      "Map it to a site, floor, zone and department, and assign a responsible custodian.",
      "Log every transfer and handover so custody history stays complete.",
      "Track status and warranty coverage through deployment, maintenance and retirement.",
      "Export custody, change and document history for internal and regulatory audits.",
    ],
    benefits: [
      "Less time searching for equipment",
      "Better use of shared equipment",
      "Clear audit trail for regulated environments",
      "Security, IT and operations work from one register",
    ],
    screenshotLabels: ["Asset register", "Location mapping", "Custody timeline"],
    faqs: [
      {
        question: "How is Asset Tracking different from AMC Management?",
        answer:
          "Asset Tracking answers what you own, where it is and who is responsible for it. AMC Management answers who maintains it, under which contract and SLA, and when coverage renews. Both share the same asset records.",
      },
      {
        question: "Does the asset register stay in sync with the cameras?",
        answer:
          "Yes. Every device the platform connects to is also an asset record with its location, owner, serial number, lifecycle stage and documents, so the inventory does not drift away from the live estate the way a spreadsheet does.",
      },
      {
        question: "How do teams find a specific asset?",
        answer:
          "By serial number, QR code or barcode. Each record also maps the asset to its site, floor, zone and department, so field teams can verify devices during handovers and multi-site audits.",
      },
      {
        question: "What does the audit trail record?",
        answer:
          "Every change of ownership, transfer and status from purchase to retirement, plus access to the documents attached to the asset. The history can be exported as a report for internal and regulatory reviews.",
      },
      {
        question: "Which assets can OrionAlerts track?",
        answer:
          "Cameras, recorders, servers, network devices, other IT equipment and operational equipment, each with its warranty documents, invoices and manuals attached to the record.",
      },
    ],
  },
  {
    slug: "amc-management",
    name: "AMC Management",
    seoTitle: "AMC & Warranty Management Software",
    seoDescription:
      "AMC management software for annual maintenance contracts, warranties, preventive maintenance, service tickets, vendor SLAs and renewal alerts across sites.",
    shortName: "AMC Management",
    image: "/Images/solutions/amc-warranty-management.webp",
    tagline: "Maintenance & warranties",
    headline:
      "Keep AMC, warranties, vendors, and preventive maintenance on schedule from one workspace.",
    introVideo: "/Videos/video/amc-management.mp4",
    summary:
      "Manage AMCs and warranties, schedule preventive maintenance, track service requests and hold vendors to their SLAs from one workspace, so cameras and equipment stay covered and serviced.",
    overview:
      "OrionAlerts AMC Management works from the same asset records as Asset Tracking, so each contract and warranty is attached to the device it covers rather than kept in a separate sheet. Because Health Monitoring runs on the same platform, a failing camera can raise a service request against the vendor and contract attached to it, and the ticket is tracked against that vendor's SLA until it is closed.",
    oneLiner: "Track maintenance contracts, warranties, SLAs and renewals.",
    definition: {
      question: "What is AMC management software?",
      answer:
        "AMC management software tracks annual maintenance contracts (AMCs) and warranties against the equipment they cover, so an organization knows what is covered, which vendor services it, what the SLA promises and when coverage ends. It replaces spreadsheets and email threads with one record of contracts, preventive visits, service tickets and renewals.",
    },
    features: [
      {
        title: "AMC & Warranty Management",
        description:
          "Centralize annual maintenance contracts and warranty coverage against each protected asset—vendor terms, start and end dates, and claim context—so operations never lose track of what is covered where.",
      },
      {
        title: "Preventive Maintenance Scheduling",
        description:
          "Automate preventive maintenance calendars across sites and asset classes so cameras, NVRs, and critical equipment stay serviceable before failures interrupt monitoring or operations.",
      },
      {
        title: "Service Request Management",
        description:
          "Capture, assign, and close service requests in one workflow—from intake and vendor dispatch through resolution notes—so every ticket stays visible until it is completed.",
      },
      {
        title: "Vendor Performance Monitoring",
        description:
          "Measure vendor response time, completion quality, and repeat issues across maintenance jobs so procurement and facilities teams can hold partners accountable with evidence.",
      },
      {
        title: "SLA Compliance Tracking",
        description:
          "Monitor SLA commitments against real service activity, flag at-risk tickets early, and document breaches so uptime agreements stay enforceable—not theoretical.",
      },
      {
        title: "Renewal & PM Reminders",
        description:
          "Get reminders before AMC, warranty and contract renewals, preventive maintenance visits and open tickets fall due, so coverage does not lapse and teams act on schedule without manual follow-ups.",
      },
      {
        title: "Maintenance History",
        description:
          "Maintain a complete service history on every asset—visits, parts, outcomes, and vendor notes—to support audits, warranty claims, and smarter replacement decisions.",
      },
    ],
    // The AMC diagram is a process, so its text version is `workflow` below.
    architecture: [],
    workflow: [
      "Asset added",
      "AMC or warranty assigned",
      "Preventive maintenance scheduled",
      "Service requests managed",
      "Vendor and SLA tracking",
      "Performance reports",
    ],
    workflowDetails: [
      "Start from the asset record, shared with Asset Tracking.",
      "Attach the contract or warranty: vendor, terms, coverage and start and end dates.",
      "Plan preventive maintenance visits across sites and asset classes.",
      "Log, assign and close tickets from intake through vendor dispatch to resolution.",
      "Measure vendor response and completion against each SLA, and flag at-risk tickets early.",
      "Review vendor performance, SLA status, service history and upcoming renewals.",
    ],
    benefits: [
      "Fewer prolonged camera outages",
      "Clear partner accountability",
      "Preventive work and renewals planned ahead",
      "Contract and SLA status for every site in one report",
    ],
    screenshotLabels: ["AMC portfolio", "SLA ticket board", "Renewal calendar"],
    faqs: [
      {
        question: "What is an AMC?",
        answer:
          "An annual maintenance contract (AMC) is a yearly service agreement in which a vendor maintains equipment for a fixed fee, usually covering preventive visits, repairs and response-time commitments. It typically starts after the manufacturer's warranty ends.",
      },
      {
        question: "What does OrionAlerts AMC Management track?",
        answer:
          "AMC and warranty coverage for each asset, preventive maintenance schedules, service requests from intake to closure, vendor response and completion against SLAs, renewal dates and the full service history of every asset.",
      },
      {
        question: "How does it prevent missed AMC and warranty renewals?",
        answer:
          "Renewal and preventive-maintenance reminders reach the responsible team before an AMC, warranty or PM visit falls due, so coverage does not lapse unnoticed and budget owners can act before the expiry date.",
      },
      {
        question: "Can AMC partners and system integrators use it?",
        answer:
          "Yes. In the partner-managed deployment, integrators and AMC providers run OrionAlerts for their clients and use the health, asset and AMC modules to deliver service, track SLAs and keep evidence for warranty and contract claims.",
      },
      {
        question: "How is AMC Management different from Asset Tracking?",
        answer:
          "Asset Tracking answers what you own, where it is and who is responsible for it. AMC Management answers who maintains it, under which contract and SLA, and when coverage renews. Both share the same asset records.",
      },
    ],
  },
  {
    slug: "health-monitoring",
    name: "Health Monitoring",
    seoTitle: "CCTV Camera Health Monitoring Software",
    seoDescription:
      "CCTV health monitoring for cameras, NVRs, storage and network links. Get alerts when a camera goes offline or stops recording, so gaps are caught early.",
    shortName: "Health Monitoring",
    image: "/Images/solutions/real-time-device-health-monitoring.webp",
    tagline: "Infrastructure uptime",
    headline:
      "Spot camera, NVR, storage, and network issues before they create operational blind spots.",
    introVideo: "/Videos/video/health-monitoring.mp4",
    summary:
      "Continuously check cameras, recorders, servers, storage and network links across every site, so failures are caught and fixed early and the surveillance system stays reliable.",
    overview:
      "OrionAlerts Health Monitoring checks every camera, NVR, server, storage volume and network link around the clock from each site's Nebula OS node. When a device goes offline, recording stops or storage runs low, the responsible team is alerted so the fault can be fixed before the gap in coverage grows.",
    oneLiner: "Alerts when a camera, NVR or link fails, or a camera stops recording.",
    definition: {
      question: "What is CCTV health monitoring?",
      answer:
        "CCTV health monitoring is the continuous checking of a surveillance system's cameras, recorders (NVRs), servers, storage and network links, so a failure is found and fixed quickly instead of being discovered when footage is needed. Good health monitoring checks recording itself, not just whether a device is online, because a camera can respond on the network and still record nothing.",
    },
    features: [
      {
        title: "Real-Time Device Health Monitoring",
        description:
          "Track the live status of every camera, NVR and server across sites from one view—so control-room and IT teams see an offline or degraded device before it becomes a monitoring blind spot.",
      },
      {
        title: "Recording Verification",
        description:
          "Check recording status per camera, not just whether a device answers on the network. Because the health engine runs inside the platform, it catches a camera that responds to a ping but has stopped recording.",
        links: [{ label: "No-motion and black-screen alerts", href: "/use-cases/no-motion-black-screen-alert" }],
      },
      {
        title: "Storage & Retention Monitoring",
        description:
          "Watch storage capacity and retention risk on every recorder and storage volume, and flag a full disk or a broken retention policy early—so video evidence is still there when investigations and audits need it.",
      },
      {
        title: "Network & Connectivity Monitoring",
        description:
          "Identify network outages, link failures, and connectivity problems that take devices offline—helping teams restore surveillance uptime before operations are impacted.",
      },
      {
        title: "Device Failure Alerts",
        description:
          "Alert the responsible team on the dashboard, mobile app or email when a camera, NVR, storage volume or network link fails—showing which device is affected and where the fault lies, so it is fixed before more footage is lost.",
      },
      {
        title: "Uptime & Availability Reports",
        description:
          "Review uptime and availability trends across cameras, NVRs, and network nodes to prove reliability, prioritize fixes, and brief leadership with clear infrastructure health evidence.",
      },
    ],
    architecture: [
      "Device & infrastructure polling",
      "Health status engine",
      "Alert & notification layer",
      "Centralized dashboard & reports",
    ],
    workflow: [
      "Connect cameras, NVRs, servers, storage and network devices",
      "Monitor health and recording status continuously",
      "Get alerts on failures and outages",
      "Resolve issues and review health reports",
    ],
    workflowDetails: [
      "Every device the platform talks to is added to the health engine on the on-site Nebula OS node.",
      "Device, stream, recording and storage status is checked continuously, along with servers, services and network links.",
      "Alerts reach the dashboard, mobile app or email and show whether the camera, NVR, storage or network failed.",
      "Fix the fault, then review uptime and availability per site and device.",
    ],
    benefits: [
      "Detect issues before they impact operations",
      "Minimize surveillance downtime",
      "Faster resolution of device and network failures",
      "Every camera across all sites kept in view",
    ],
    screenshotLabels: ["Health dashboard", "Device status board", "Alert notifications"],
    faqs: [
      {
        question: "What does CCTV health monitoring check?",
        answer:
          "Cameras, NVRs, servers, storage capacity and retention, recording status and network links. Each device's status is tracked continuously, and uptime and availability are reported per site and device.",
      },
      {
        question: "How is this different from ping or network monitoring?",
        answer:
          "A ping or network monitor only tells you a device responds. OrionAlerts checks from inside the video platform, so it also flags a camera that is online but not recording, a full disk or a broken retention policy.",
      },
      {
        question: "What happens when a camera stops recording?",
        answer:
          "The responsible team gets an alert on the dashboard, mobile app or email that names the affected camera and site and shows whether the camera, NVR, storage or network is the cause, so the right person can be sent to fix it.",
      },
      {
        question: "Can health monitoring prove uptime for audits?",
        answer:
          "Yes. Uptime and availability reports show the history of every camera, NVR and network node by site and device, for audits, vendor reviews and leadership briefings.",
      },
      {
        question: "Does it work across multiple sites?",
        answer:
          "Yes. Each site's Nebula OS node checks its own devices, and Orion Cloud brings health status from every location into one view without uploading raw video.",
      },
    ],
  },
];

const SOLUTION_ORDER = [
  "asset-tracking",
  "amc-management",
  "health-monitoring",
  "vms",
  "ai-analytics",
] as const;

export const solutions: Solution[] = SOLUTION_ORDER.map((slug) => {
  const solution = solutionsSource.find((item) => item.slug === slug);
  if (!solution) throw new Error(`Missing solution: ${slug}`);
  return solution;
});

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
      `${partial.name} operations need continuous visibility for safety, security, and performance. OrionAlerts turns existing CCTV into AI-powered monitoring for ${focus.toLowerCase()}.`,
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

/**
 * Industry set shown on /industries. `tagline` is the single source of truth
 * for the short card description (hub cards and the hub's ItemList JSON-LD).
 */
export const industries: Industry[] = [
  industryEntry({
    slug: "manufacturing",
    name: "Manufacturing",
    cardLabel: "Manufacturing",
    image: "/Images/industries/manufacturing.webp",
    introVideo: "/Videos/industries/manufacturing.mp4",
    tagline:
      "PPE and restricted-zone alerts, forklift crossings and material build-up.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about shift handovers, PPE observations and recurring material build-up.",
  }),
  industryEntry({
    slug: "automotive",
    name: "Automotive & Auto Components",
    cardLabel: "Automotive",
    image: "/Images/industries/automotive.webp",
    tagline:
      "Line-side buffer dwell, controlled-cell entry and clip retrieval by station.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about assembly-cell events and line-side replenishment.",
  }),
  industryEntry({
    slug: "cement",
    name: "Cement & Building Materials",
    cardLabel: "Cement",
    image: "/Images/industries/cement.webp",
    tagline:
      "Truck queues at loading bays, conveyor-zone entry and camera health in dust.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about truck staging and material-transfer visibility.",
  }),
  industryEntry({
    slug: "metals-mining",
    name: "Metals, Mining & Minerals",
    cardLabel: "Metals & Mining",
    image: "/Images/industries/metals-mining.webp",
    introVideo: "/Videos/industries/metals-mining.mp4",
    tagline:
      "Restricted-zone alerts at crushers and remote camera outage tracking.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about remote work-zone review and heavy-equipment interfaces.",
  }),
  industryEntry({
    slug: "oil-gas",
    name: "Oil, Gas & Petrochemicals",
    cardLabel: "Oil & Gas",
    image: "/Images/industries/oil-gas.webp",
    tagline:
      "Tanker-bay activity, controlled-area entry and operator-verified perimeter alerts.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about tanker-area activity and controlled operational access.",
  }),
  industryEntry({
    slug: "pharma",
    name: "Pharmaceuticals & Life Sciences",
    cardLabel: "Pharma",
    image: "/Images/industries/pharma.webp",
    tagline:
      "Gowning exceptions, controlled-area entry and fast clips for QA investigations.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about controlled-area observations and QA investigation context.",
  }),
  industryEntry({
    slug: "food-fmcg",
    name: "Food, Beverage & FMCG",
    cardLabel: "Food & FMCG",
    image: "/Images/industries/food-fmcg.webp",
    tagline:
      "Hygiene-zone entry, packaging-area build-up and footage for QA reviews.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about visible hygiene practices and packaging-flow observations.",
  }),
  industryEntry({
    slug: "logistics",
    name: "Logistics & Warehousing",
    cardLabel: "Logistics",
    image: "/Images/industries/logistics.webp",
    tagline:
      "Dock dwell and forklift–pedestrian route exceptions at cross-aisles.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about cross-aisle obstructions and loading-bay handoffs.",
  }),
  industryEntry({
    slug: "dark-stores",
    name: "Dark Stores & Micro-Fulfilment",
    cardLabel: "Dark Stores",
    image: "/Images/industries/dark-stores.webp",
    tagline:
      "Aisle obstructions and dispatch-handoff congestion in compact stores.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about compact stockroom layout and local dispatch pressure.",
  }),
  industryEntry({
    slug: "quick-commerce",
    name: "Quick Commerce",
    cardLabel: "Quick Commerce",
    image: "/Images/industries/quick-commerce.webp",
    tagline:
      "Pickup-area congestion and camera uptime compared across many stores.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about regional oversight and recurring local handoff problems.",
  }),
  industryEntry({
    slug: "ecommerce-fulfilment",
    name: "E-commerce Fulfilment Centres",
    cardLabel: "E-commerce Fulfilment",
    image: "/Images/industries/ecommerce-fc.webp",
    tagline:
      "Parcel build-up at packing and sortation transfers, with fast handoff clips.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about parcel-transfer interruptions and investigation context.",
  }),
  industryEntry({
    slug: "cold-storage",
    name: "Cold Storage & Refrigerated Warehousing",
    cardLabel: "Cold Storage",
    image: "/Images/industries/cold-storage.webp",
    tagline:
      "Chamber door activity and loading periods for temperature-excursion reviews.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about door activity and visual context around cold-chain investigations.",
  }),
  industryEntry({
    slug: "airports-ports-railways",
    name: "Airports, Ports & Railways",
    cardLabel: "Airports, Ports & Rail",
    image: "/Images/industries/airports-ports.webp",
    tagline:
      "Perimeter events, concourse congestion and fast incident retrieval.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about transport-specific access and passenger-area review.",
  }),
  industryEntry({
    slug: "commercial-buildings",
    name: "Commercial Buildings",
    cardLabel: "Commercial Buildings",
    image: "/Images/industries/commercial-buildings.webp",
    tagline:
      "After-hours alerts, lift-lobby congestion and fast incident retrieval.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about tenant-facing common areas and recurring service pressure.",
  }),
  industryEntry({
    slug: "data-centres",
    name: "Data Centres",
    cardLabel: "Data Centres",
    image: "/Images/industries/data-centres.webp",
    tagline:
      "Controlled-entrance events, checked against access logs once integrated.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about controlled entrances and security-review prioritisation.",
  }),
  industryEntry({
    slug: "education-campuses",
    name: "Education & Campuses",
    cardLabel: "Education",
    image: "/Images/industries/education.webp",
    tagline:
      "Perimeter alerts and arrival congestion at school and college gates.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about arrival, reception and common-area safeguarding.",
  }),
  industryEntry({
    slug: "healthcare",
    name: "Healthcare & Hospitals",
    cardLabel: "Healthcare",
    image: "/Images/industries/healthcare.webp",
    tagline:
      "Waiting-area congestion and pathway events in non-clinical areas.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about non-clinical common-area review and facilities priorities.",
  }),
  industryEntry({
    slug: "retail-shopping",
    name: "Retail & Shopping Centres",
    cardLabel: "Retail",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=90",
    tagline:
      "Checkout queues, stockroom entry and fast incident retrieval.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about checkout queues and stockroom access.",
  }),
  industryEntry({
    slug: "hotels-hospitality",
    name: "Hotels & Hospitality",
    cardLabel: "Hospitality",
    image: "/Images/industries/hospitality.webp",
    tagline:
      "Check-in congestion and after-hours alerts in lobbies and service areas.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about arrival pressure and service-area coordination.",
  }),
  industryEntry({
    slug: "utilities",
    name: "Utilities & Infrastructure",
    cardLabel: "Utilities",
    image: "/Images/industries/utilities.webp",
    tagline:
      "Perimeter events and remote-view outages at substations and field sites.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about remote-site access and field-inspection priorities.",
  }),
  industryEntry({
    slug: "construction",
    name: "Construction Sites",
    cardLabel: "Construction",
    image: "/Images/industries/construction.webp",
    tagline:
      "PPE at site entries and zone alerts that follow layout changes.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about changing routes and supervision across project areas.",
  }),
  industryEntry({
    slug: "pulp-paper",
    name: "Pulp, Paper & Packaging",
    cardLabel: "Pulp & Paper",
    image: "/Images/industries/pulp-paper.webp",
    tagline:
      "Roll-handling zone alerts and material build-up at transfer points.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about roll-handling interfaces and recurring transfer build-up.",
  }),
  industryEntry({
    slug: "textile",
    name: "Textiles & Garments",
    cardLabel: "Textiles",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=1600&q=90",
    tagline:
      "Material build-up at staging buffers and pathway events on the floor.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about material buffers and process-level improvement.",
  }),
  industryEntry({
    slug: "polymers-plastics",
    name: "Polymers & Plastics",
    cardLabel: "Polymers",
    image: "/Images/industries/polymers-plastics.webp",
    tagline:
      "Build-up at moulding and extrusion transfers, plus restricted-zone alerts.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about downstream build-up and controlled process-zone review.",
  }),
  industryEntry({
    slug: "banking",
    name: "Banking & Financial Institutions",
    cardLabel: "Banking",
    image: "/Images/industries/banking.webp",
    tagline:
      "After-hours branch alerts and offline-camera detection across every branch.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about branch-event review and regional follow-up.",
  }),
  industryEntry({
    slug: "residential",
    name: "Residential Communities & Townships",
    cardLabel: "Residential",
    image: "/Images/industries/residential.webp",
    tagline:
      "Gate congestion, perimeter events and common-area incident retrieval.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about shared-space events and property-management priorities.",
  }),
  industryEntry({
    slug: "government",
    name: "Government & Public Infrastructure",
    cardLabel: "Government",
    image: "/Images/industries/government.webp",
    tagline:
      "Service-counter queues, route obstructions and recording availability.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about service-counter pressure and accountable facility review.",
  }),
  industryEntry({
    slug: "solar-renewable",
    name: "Solar & Renewable Energy Facilities",
    cardLabel: "Renewables",
    image: "/Images/industries/renewables.webp",
    tagline:
      "Perimeter alerts at gates and equipment compounds on remote sites.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about remote equipment-compound review and O&M priorities.",
  }),
  industryEntry({
    slug: "telecom-remote",
    name: "Telecom & Remote Sites",
    cardLabel: "Telecom",
    image: "/Images/industries/telecom.webp",
    tagline:
      "Shelter-entry alerts checked against planned visits, with link health.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about shelter events and remote maintenance coordination.",
  }),
  industryEntry({
    slug: "sports-events",
    name: "Sports & Event Venues",
    cardLabel: "Sports & Events",
    image: "/Images/industries/sports-events.webp",
    tagline:
      "Gate and concourse congestion by event phase, plus steward response.",
    summary:
      "Map cameras to the places your team manages and ask Vision Copilot about event-phase congestion and stewarding decisions.",
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
  { href: "/nebula-os", label: "Nebula OS" },
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
    description: "Field notes and deployment stories from the OrionAlerts blog.",
    href: "/blogs",
  },
  {
    title: "FAQs",
    description: "Clear answers on deployment, integrations, and support.",
    href: "/faqs",
  },
  {
    title: "Documentation",
    description: "Deployment models, camera compatibility, hardware and integration overviews.",
    href: "/docs",
  },
  {
    title: "Partner Resources",
    description: "Enablement packs for system integrators and technology partners.",
    href: "/partners",
  },
  {
    title: "Talk to sales",
    description: "Compare options with our team for your sites and stack.",
    href: "/contact",
  },
];
