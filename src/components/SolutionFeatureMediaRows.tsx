import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import type { Solution, SolutionFeature } from "@/lib/site";
import { featureAnchorAliases, featureAnchorId } from "@/lib/feature-anchors";
import { responsiveSrcSet } from "@/lib/responsive-images";

type FeatureMediaRow = SolutionFeature & {
  result?: string;
};

type SolutionFeatureMediaRowsProps = {
  solution: Pick<Solution, "slug" | "shortName" | "headline" | "image" | "features">;
  features?: FeatureMediaRow[];
};

const SECTION_COPY: Record<
  string,
  { eyebrow: string; title: string; description: string }
> = {
  "asset-tracking": {
    eyebrow: "Asset tracking capabilities",
    title: "Asset tracking features for multi-site organizations",
    description:
      "Centralize inventory, ownership, location, warranty, and audit history so security and operations teams can manage every asset across sites—from registration to retirement—without spreadsheets.",
  },
  "amc-management": {
    eyebrow: "AMC management capabilities",
    title: "AMC and warranty management features",
    description:
      "Manage AMC coverage, warranties, preventive maintenance, vendors, and SLAs in one workspace—so maintenance teams protect asset availability and catch renewals before coverage gaps appear.",
  },
  vms: {
    eyebrow: "VMS capabilities",
    title: "Enterprise video management system features",
    description:
      "Bring cameras, sites, and operators into one video management system—so security teams monitor live video, investigate incidents faster, and run multi-site surveillance without fragmented NVR workflows.",
  },
  "ai-analytics": {
    eyebrow: "AI Vision capabilities",
    title: "AI video analytics built for real-time security and operations",
    description:
      "Turn live camera streams into detections for intrusion, PPE, fire and smoke, loitering, and occupancy—so teams respond to real events with less manual monitoring.",
  },
  "health-monitoring": {
    eyebrow: "Health monitoring capabilities",
    title: "CCTV health monitoring features",
    description:
      "Monitor cameras, NVRs, servers, storage, and network connectivity in real time—so security teams detect failures early, protect recording continuity, and keep multi-site surveillance operational.",
  },
};

const FEATURE_IMAGES: Record<string, string> = {
  // Asset Tracking
  "Centralized Asset Inventory": "/Images/solutions/centralized-asset-inventory.webp",
  "Asset Lifecycle Management": "/Images/solutions/asset-lifecycle-management.webp",
  "Serial Number Tracking": "/Images/solutions/serial-number-tracking.webp",
  "Location & Department Mapping": "/Images/solutions/location-department-mapping.webp",
  "Asset Assignment & Ownership": "/Images/solutions/asset-assignment-ownership.webp",
  "Warranty & Documentation Management": "/Images/solutions/warranty-documentation-management.webp",
  "Audit Trail & Compliance Reports": "/Images/solutions/audit-trail-compliance-reports.webp",

  // AMC Management
  "AMC & Warranty Management": "/Images/solutions/amc-warranty-management.webp",
  "Preventive Maintenance Scheduling": "/Images/solutions/preventive-maintenance-scheduling-clean.webp",
  "Service Request Management": "/Images/solutions/service-request-management-clean.webp",
  "Vendor Performance Monitoring": "/Images/solutions/vendor-performance-monitoring-clean.webp",
  "SLA Compliance Tracking": "/Images/solutions/sla-compliance-tracking-clean.webp",
  "Renewal & PM Reminders": "/Images/solutions/renewal-alerts-notifications-clean.webp",
  "Maintenance History": "/Images/solutions/maintenance-history.webp",

  // VMS
  "Centralized Live Monitoring & Playback": "/Images/solutions/centralized-live-monitoring-playback.webp",
  "Multi-Site Surveillance Management": "/Images/solutions/multi-site-surveillance-management-clean.webp",
  "Video Search & Incident Investigation": "/Images/solutions/video-search-incident-investigation.webp",
  "Secure Remote Access": "/Images/solutions/secure-remote-access-clean.webp",
  "Event & Alarm Management": "/Images/solutions/event-alarm-management.webp",
  "Open Integration with IP Cameras & Third-Party Systems": "/Images/solutions/open-integration-ip-cameras-third-party-clean.webp",

  // AI Analytics
  "Real-Time AI Video Analytics": "/Images/solutions/real-time-ai-video-analytics.webp",
  // Alert workflow: alert card, timeline and mobile notification.
  "Instant Event Detection & Smart Alerts": "/Images/solutions/restricted-area-monitoring.webp",
  "Intrusion & Restricted-Zone Detection": "/Images/solutions/intrusion-detection.webp",
  "PPE & Safety Compliance Detection": "/Images/solutions/intrusion-ppe-safety-monitoring.webp",
  // The only existing visual with fire / smoke detections on screen.
  "Fire & Smoke Detection": "/Images/solutions/instant-event-detection-smart-alerts.webp",
  // People tracked across a crossing: dwell and line-crossing context.
  "Loitering & Line-Crossing Detection": "/visuals/solutions/ai-vision-clean.webp",
  "People, Vehicle & Occupancy Analytics": "/Images/solutions/people-vehicle-occupancy-analytics.webp",

  // Health Monitoring
  "Real-Time Device Health Monitoring": "/Images/solutions/real-time-device-health-monitoring.webp",
  // Shows "Recording status" and not-recording counts per device.
  "Recording Verification": "/Images/solutions/recording-storage-health-monitoring.webp",
  // NVR disk usage, storage server and RAID status.
  "Storage & Retention Monitoring": "/Images/solutions/camera-nvr-server-status.webp",
  "Network & Connectivity Monitoring": "/Images/solutions/network-connectivity-monitoring.webp",
  // Camera offline / HDD error / network loss alerts on dashboard and mobile.
  // (instant-alerts-notifications.webp is not used: it shows an SMS channel.)
  "Device Failure Alerts": "/Images/health-monitoring-overview-clean.webp",
  "Uptime & Availability Reports": "/Images/solutions/uptime-availability-reports.webp",
};

/**
 * Optional "Outcome:" line under a feature. Only kept where it adds something
 * the description does not already say — lines that repeated their description
 * (and unsupported claims such as "in seconds" or "minutes, not hours") were
 * removed.
 */
const FEATURE_RESULTS: Record<string, string> = {
  "Vendor Performance Monitoring":
    "Outcome: compare partners on response time and completion quality so you renew the vendors who actually deliver.",
  "Video Search & Incident Investigation":
    "Outcome: evidence search without scrubbing footage, so investigations move from search to action sooner.",
};

export function SolutionFeatureMediaRows({
  solution,
  features,
}: SolutionFeatureMediaRowsProps) {
  const copy = SECTION_COPY[solution.slug] ?? {
    eyebrow: "Key capabilities",
    title: `Built for ${solution.shortName}`,
    description: solution.headline,
  };

  const rows =
    features ??
    solution.features.map((feature) => ({
      ...feature,
      result: FEATURE_RESULTS[feature.title],
    }));

  return (
    <section
      id="key-capabilities"
      className="relative overflow-hidden bg-white py-10 md:py-14"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(43,140,255,0.05),transparent_45%)]" />
      <div className="container relative">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="eyebrow mb-2">{copy.eyebrow}</p>
            <h2 className="text-[clamp(1.6rem,3.2vw,2.35rem)] font-semibold leading-[1.12] tracking-[-0.03em] text-text">
              {copy.title}
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-strong md:text-[15px]">
              {copy.description}
            </p>
          </div>
        </Reveal>

        <div className="mt-8 space-y-10 md:mt-10 md:space-y-14">
          {rows.map((feature, index) => {
            const mediaFirst = index % 2 === 0;
            const imageSrc = FEATURE_IMAGES[feature.title] ?? solution.image;

            return (
              <Reveal key={feature.title} delay={0.04}>
                <div
                  id={featureAnchorId(feature.title)}
                  className={`relative grid items-center gap-6 lg:grid-cols-2 lg:gap-10 ${
                    mediaFirst ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-[#0b1628] shadow-[0_24px_60px_-40px_rgba(15,61,120,0.5)]">
                    {/* Plain <img>: with images.unoptimized next/image can't emit a
                        srcSet, and phones only need the 828px copy. */}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imageSrc}
                      srcSet={responsiveSrcSet(imageSrc)}
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      alt={`${feature.title} in OrionAlerts ${solution.shortName}`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover opacity-90"
                    />
                  </div>

                  <div className="max-w-xl">
                    {/* Old ids from renamed / merged features keep deep links
                        working; positioned against the row, not this column. */}
                    {(featureAnchorAliases[feature.title] ?? []).map((alias) => (
                      <span
                        key={alias}
                        id={alias}
                        aria-hidden
                        className="absolute left-0 top-0 h-px w-px"
                      />
                    ))}
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.3rem,2.2vw,1.7rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-text">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted-strong md:text-[15px]">
                      {feature.description}
                    </p>
                    {feature.links?.length ? (
                      <p className="mt-3 text-sm text-muted-strong">
                        <span className="font-medium text-text">Learn more: </span>
                        {feature.links.map((link, linkIndex, links) => (
                          <span key={link.href}>
                            <Link
                              href={link.href}
                              className="font-medium text-blue hover:underline"
                            >
                              {link.label}
                            </Link>
                            {linkIndex < links.length - 1 ? " · " : ""}
                          </span>
                        ))}
                      </p>
                    ) : null}
                    {feature.result ? (
                      <p className="mt-3 border-l-2 border-cyan/70 pl-3.5 text-sm font-medium leading-relaxed text-text">
                        {feature.result}
                      </p>
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
