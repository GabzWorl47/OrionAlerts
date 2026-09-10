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

export const inputLayer = [
  "IP Cameras",
  "Edge Devices",
  "Sensors",
  "OEM Devices",
] as const;

export const deviceLayer = [
  "Universal Drivers",
  "OEM SDKs",
  "ONVIF",
  "RTSP",
] as const;

export const nebulaCoreEngines = [
  "Video Engine",
  "Recording Engine",
  "AI Runtime",
  "Health Engine",
  "API Engine",
  "Device Manager",
] as const;

export const cloudLayer = [
  "Orion Cloud",
  "Command Center",
  "Alerts",
  "Analytics",
  "Remote Management",
] as const;

export const nebulaSectionCopy = {
  eyebrow: "PURPOSE-BUILT FOR VISION AI",
  heading: "One OS to Run Your Entire AI Ecosystem.",
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

/** Drop the Nebula OS demo video at this public path. */
export const nebulaVideo = {
  src: "/Videos/video/nebula-os.mp4",
  poster: "/visuals/solutions/ai-vision.png",
};
