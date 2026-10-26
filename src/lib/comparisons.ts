/**
 * Comparison pages (/compare). Rows are qualitative — no prices, percentages
 * or benchmark numbers. "Where OrionAlerts fits" uses only facts already on the
 * site (nebula-os.ts, site.ts, faqs.ts). The Nebula OS comparison reuses the
 * existing table in nebula-os.ts so the two never drift.
 */

import { nebulaComparison } from "@/lib/nebula-os";

export type ComparisonRow = { dimension: string; a: string; b: string };

export type ComparisonChoice = {
  /** e.g. "Choose an on-premise VMS if…" */
  option: string;
  when: string[];
};

export type Comparison = {
  slug: string;
  /** Short name for cards and breadcrumbs. */
  title: string;
  /** One-sentence summary for hub cards. */
  summary: string;
  /** Visible H1. */
  h1: string;
  /** Page title (≤46 chars; " | OrionAlerts" is appended). */
  seoTitle: string;
  /** Meta description (120–155 chars). */
  seoDescription: string;
  /** 40–60 word answer shown under the H1. */
  answer: string;
  labelA: string;
  labelB: string;
  /** Which column the table tints; "none" for neutral comparisons. */
  highlight: "a" | "b" | "none";
  rows: ComparisonRow[];
  choose: ComparisonChoice[];
  whereOrionAlertsFits: string[];
  related: { href: string; label: string }[];
  faqs: { question: string; answer: string }[];
};

export const COMPARE_PATH = "/compare";

export const comparisons: Comparison[] = [
  {
    slug: "vms-vs-vsaas",
    title: "VMS vs VSaaS",
    summary:
      "On-premise video management compared with cloud-hosted video surveillance as a service: where video lives, bandwidth, control and cost model.",
    h1: "VMS vs VSaaS: on-premise video management or cloud surveillance?",
    seoTitle: "VMS vs VSaaS: On-Premise vs Cloud Video",
    seoDescription:
      "Compare an on-premise VMS with cloud VSaaS: where video is stored, bandwidth, internet dependence, control, cost model and multi-site management.",
    answer:
      "A VMS is video management software traditionally run on your own servers or appliances, so video is recorded and kept on site. VSaaS is a cloud subscription in which video is streamed to and stored by a provider. An on-premise VMS favors control and low upload bandwidth; VSaaS favors minimal on-site infrastructure. Hybrid models combine both.",
    labelA: "VMS (on-premise)",
    labelB: "VSaaS (cloud-hosted)",
    highlight: "none",
    rows: [
      {
        dimension: "Where video is recorded",
        a: "On servers, appliances or recorders at the site",
        b: "In the provider's cloud, sometimes with a small local buffer",
      },
      {
        dimension: "Where the software runs",
        a: "On infrastructure you own or control",
        b: "Hosted and operated by the provider",
      },
      {
        dimension: "Upload bandwidth",
        a: "Low; video stays on the local network",
        b: "Higher; recorded video or event clips are uploaded from every site",
      },
      {
        dimension: "Internet outage",
        a: "Recording and local viewing continue",
        b: "Remote access and cloud recording depend on the link; local buffering varies by provider",
      },
      {
        dimension: "Data control and residency",
        a: "Video stays on premises under your own policies",
        b: "Video is held by the provider, in the regions it operates",
      },
      {
        dimension: "Cost model",
        a: "Servers, storage and software licenses upfront, often with annual support fees",
        b: "Recurring subscription, usually per camera, plus upload bandwidth",
      },
      {
        dimension: "Maintenance and updates",
        a: "Managed by your team or an integrator, including servers, storage and software",
        b: "Handled by the provider",
      },
      {
        dimension: "Multi-site management",
        a: "Needs a central management layer across sites",
        b: "Central by design through the cloud portal",
      },
    ],
    choose: [
      {
        option: "Choose an on-premise VMS if",
        when: [
          "Video must stay on site for policy, privacy or data-residency reasons",
          "Sites have limited, costly or unreliable upload bandwidth",
          "You run many high-resolution cameras per site",
          "You want AI video analytics on every camera without uploading streams",
        ],
      },
      {
        option: "Choose VSaaS if",
        when: [
          "Sites are small, with a handful of cameras each",
          "Upload bandwidth is plentiful and reliable",
          "You prefer a subscription with no servers to run",
        ],
      },
      {
        option: "Consider a hybrid if",
        when: [
          "You want video kept on site but managed centrally across many locations",
          "You need central health, alerts and configuration without uploading raw video",
        ],
      },
    ],
    whereOrionAlertsFits: [
      "OrionAlerts is not a VSaaS. It is on-premise first: in the standard deployment, video and AI inference stay on an on-site Nebula OS node next to the cameras.",
      "For multi-site estates, Orion Cloud synchronizes health status, alerts, configuration and operational metadata for a central command view, without requiring raw video to be uploaded. That gives the central management of a cloud service while video stays where it is recorded.",
    ],
    related: [
      { href: "/glossary/vms", label: "What is a VMS?" },
      { href: "/glossary/vsaas", label: "What is VSaaS?" },
      { href: "/solutions/vms", label: "OrionAlerts VMS" },
      { href: "/nebula-os", label: "Nebula OS deployment models" },
      { href: "/compare/on-prem-vs-cloud-video-analytics", label: "On-prem vs cloud video analytics" },
    ],
    faqs: [
      {
        question: "Is VSaaS cheaper than an on-premise VMS?",
        answer:
          "It depends on the estate. VSaaS replaces upfront servers with a recurring subscription and adds upload bandwidth costs. An on-premise VMS usually costs more upfront, for servers, storage and licenses, often with annual support fees, but has no cloud storage charges. Compare total cost over the system's expected life, not just the first year.",
      },
      {
        question: "Can a VMS be managed from the cloud?",
        answer:
          "Yes. Hybrid designs keep recording on site and add a cloud layer for remote access and central management. OrionAlerts works this way: video stays on the on-site Nebula OS node, and Orion Cloud synchronizes health status, alerts, configuration and operational metadata so every site can be managed from one view.",
      },
      {
        question: "Does VSaaS work with existing cameras?",
        answer:
          "Sometimes. Some VSaaS services connect existing ONVIF or RTSP cameras through an on-site gateway or bridge; others work only with their own cloud-connected cameras. Even where existing cameras are supported, upload bandwidth per camera often limits resolution or frame rate, so check compatibility and bandwidth per model with the provider.",
      },
    ],
  },
  {
    slug: "on-prem-vs-cloud-video-analytics",
    title: "On-prem vs cloud video analytics",
    summary:
      "Running AI video analytics on site compared with sending video to the cloud for analysis: bandwidth, latency, privacy, resilience and hardware.",
    h1: "On-premise vs cloud video analytics: where should AI run?",
    seoTitle: "On-Prem vs Cloud Video Analytics Compared",
    seoDescription:
      "Compare on-premise (edge) and cloud AI video analytics: bandwidth, alert latency, privacy, behavior during internet outages, hardware and scaling.",
    answer:
      "On-premise video analytics runs AI models on servers or appliances at the site, so video never needs to leave the local network. Cloud video analytics uploads video or clips to a provider that runs the models remotely. On-premise favors bandwidth, privacy and resilience; cloud favors minimal on-site hardware for small, well-connected sites.",
    labelA: "On-premise (edge) analytics",
    labelB: "Cloud video analytics",
    highlight: "none",
    rows: [
      {
        dimension: "Where inference runs",
        a: "On a server or appliance at the site, usually GPU-accelerated",
        b: "In the provider's data centers",
      },
      {
        dimension: "Bandwidth",
        a: "Low; only events and metadata need to leave the site",
        b: "High; video or frames must be uploaded for analysis",
      },
      {
        dimension: "Alert latency",
        a: "Local; does not depend on the internet round trip",
        b: "Depends on upload speed and the round trip to the cloud",
      },
      {
        dimension: "Privacy and data residency",
        a: "Video stays inside the site network",
        b: "Video is transmitted to and processed by a third party",
      },
      {
        dimension: "Internet outage",
        a: "On-site detection and local alerting continue; remote notifications depend on the link",
        b: "Analysis stops or degrades until the link returns",
      },
      {
        dimension: "On-site hardware",
        a: "Requires a node with GPU capacity sized to cameras and detections",
        b: "Minimal; cameras plus, for some services, a gateway or bridge",
      },
      {
        dimension: "Scaling to more cameras",
        a: "Add node capacity per site",
        b: "Add cloud capacity and upload bandwidth per site",
      },
      {
        dimension: "Multi-site oversight",
        a: "Needs a central layer that collects events from each site",
        b: "Central by design",
      },
    ],
    choose: [
      {
        option: "Choose on-premise analytics if",
        when: [
          "You want analytics on many cameras per site",
          "Upload bandwidth is limited, costly or unreliable",
          "Video must not leave the site",
          "Detection must keep running during internet outages",
        ],
      },
      {
        option: "Choose cloud analytics if",
        when: [
          "Sites have only a few cameras and strong, reliable connectivity",
          "You cannot place or maintain any compute hardware on site",
          "Only short clips or snapshots need occasional analysis",
        ],
      },
    ],
    whereOrionAlertsFits: [
      "OrionAlerts runs AI video analytics on premises. Inference happens on the on-site Nebula OS node with GPU acceleration, sized per deployment to the channel count and the detections running, and analytics use the same decoded video that the node records.",
      "For multi-site estates, Orion Cloud adds the central layer, synchronizing health status, alerts, configuration and operational metadata so teams get one command view without uploading raw video. Alerts reach the dashboard, mobile app and email.",
    ],
    related: [
      { href: "/glossary/edge-ai-video-analytics", label: "What is edge AI video analytics?" },
      { href: "/glossary/video-analytics", label: "What is video analytics?" },
      { href: "/solutions/ai-analytics", label: "OrionAlerts AI video analytics" },
      { href: "/use-cases", label: "AI video analytics use cases" },
      { href: "/compare/vms-vs-vsaas", label: "VMS vs VSaaS" },
    ],
    faqs: [
      {
        question: "How much bandwidth does cloud video analytics need?",
        answer:
          "It depends on how much video is sent. Continuous analysis needs each camera's stream uploaded, which adds up quickly across cameras and sites. Services that analyze only motion-triggered clips or snapshots use far less, but can miss events between uploads. On-premise analytics sends only events and metadata off site.",
      },
      {
        question: "Which costs less, on-premise or cloud video analytics?",
        answer:
          "It depends on scale. Cloud analytics avoids buying on-site compute but adds subscription and upload bandwidth costs that grow with every camera. On-premise analytics needs a node with enough GPU capacity at each site, but its running costs do not depend on uploading video. Compare the total cost for your camera count and sites.",
      },
      {
        question: "Can on-premise and cloud approaches be combined?",
        answer:
          "Yes. A common hybrid design runs detection on site and sends only events, health and metadata to a central cloud layer for multi-site oversight. OrionAlerts works this way: each site runs its own Nebula OS node, and Orion Cloud provides one command view of health, alerts, assets and maintenance without uploading raw video.",
      },
    ],
  },
  {
    slug: "nebula-os-vs-nvr-plus-analytics",
    title: "Nebula OS vs NVR + separate analytics",
    summary:
      "One Vision AI operating system compared with a recorder plus a separate analytics box, monitoring tool and spreadsheets.",
    h1: "Nebula OS vs an NVR plus separate analytics",
    seoTitle: "Nebula OS vs NVR Plus Separate Analytics",
    seoDescription:
      "Compare Nebula OS with a traditional NVR, separate analytics appliance and spreadsheets: architecture, AI, camera health, assets, maintenance and updates.",
    answer:
      "A traditional stack records on an NVR or VMS and adds AI through a separate analytics appliance, with health, assets and maintenance tracked elsewhere. Nebula OS is one Linux-based operating system that runs video management, AI analytics, camera health, asset tracking and AMC as modules sharing one device and event model.",
    labelA: nebulaComparison.legacyLabel,
    labelB: nebulaComparison.nebulaLabel,
    highlight: "b",
    rows: nebulaComparison.rows.map((row) => ({
      dimension: row.dimension,
      a: row.legacy,
      b: row.nebula,
    })),
    choose: [
      {
        option: "An NVR plus separate tools may be enough if",
        when: [
          "You run a single small site where recording and playback are the main need",
          "AI is needed on only a few cameras",
          "Camera health, asset records and maintenance are already handled well elsewhere",
        ],
      },
      {
        option: "Nebula OS fits better if",
        when: [
          "You manage many cameras across one or more sites",
          "You want AI analytics on the cameras you already record",
          "Silent camera and recording failures are a problem",
          "Asset, warranty and AMC records need to match the live estate",
          "You want one update path instead of maintaining integrations between vendors",
        ],
      },
    ],
    whereOrionAlertsFits: [
      "Nebula OS is the Linux-based operating system underneath OrionAlerts. Instead of a recorder plus separate tools, one node at the site runs video management, AI video analytics, camera health monitoring, asset records and AMC workflows, all referring to the same device and event records.",
      "It does not require replacing what already works. The universal device layer connects supported IP cameras and recorders through ONVIF, RTSP and vendor SDKs, so an existing NVR can keep recording while Nebula OS adds analytics, health, asset and maintenance functions alongside it.",
    ],
    related: [
      { href: "/nebula-os", label: "Nebula OS overview" },
      { href: "/glossary/nvr-vs-dvr-vs-vms", label: "NVR vs DVR vs VMS" },
      { href: "/glossary/camera-health-monitoring", label: "What is camera health monitoring?" },
      { href: "/solutions/health-monitoring", label: "Camera health monitoring" },
      { href: "/solutions/amc-management", label: "AMC management" },
    ],
    faqs: [
      {
        question: "Do I have to remove my NVRs to use Nebula OS?",
        answer:
          "No. Nebula OS connects supported IP cameras and recorders through ONVIF, RTSP and vendor SDKs, so an existing NVR can keep its recording role while Nebula OS adds AI video analytics, camera health monitoring, asset records and AMC workflows. Support for each recorder and camera model is confirmed during solution design.",
      },
      {
        question: "Is Nebula OS only for large multi-site estates?",
        answer:
          "No. The on-site node model is designed for single plants, campuses and facilities, with one Nebula OS node next to the cameras. Multi-site organizations run a node at each site and add Orion Cloud for one central view, and integrators can run nodes for their clients in the partner-managed model.",
      },
      {
        question: "When is a separate analytics appliance enough?",
        answer:
          "When AI is needed on only a few cameras at one site, the existing recorder works well, and camera health, assets and maintenance are already managed elsewhere. As camera counts, sites and integrations grow, keeping separate products connected and updated becomes harder, which is the problem a single operating system is designed to address.",
      },
    ],
  },
];

export function getComparison(slug: string) {
  return comparisons.find((c) => c.slug === slug);
}

/** Hub copy for /compare. */
export const compareHub = {
  title: "Video surveillance and AI analytics comparisons",
  seoTitle: "VMS, VSaaS & Video Analytics Comparisons",
  seoDescription:
    "Side-by-side comparisons for CCTV buyers: VMS vs VSaaS, on-premise vs cloud video analytics, and Nebula OS vs an NVR plus separate analytics.",
  answer:
    "These comparisons help buyers choose how to run video surveillance and AI analytics: on premises or in the cloud, as one platform or several tools. Each page sets out the differences in a table, explains which option suits which situation and states plainly where OrionAlerts fits.",
};
