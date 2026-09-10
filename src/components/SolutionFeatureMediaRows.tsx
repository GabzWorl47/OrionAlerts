"use client";

import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import type { Solution } from "@/lib/site";
import { featureAnchorId } from "@/lib/feature-anchors";

type FeatureMediaRow = {
  title: string;
  description: string;
  result?: string;
};

type SolutionFeatureMediaRowsProps = {
  solution: Solution;
  features?: FeatureMediaRow[];
};

const SECTION_COPY: Record<
  string,
  { eyebrow: string; title: string; description: string }
> = {
  "asset-tracking": {
    eyebrow: "Asset tracking capabilities",
    title: "Enterprise asset tracking built for multi-site visibility",
    description:
      "Centralize inventory, ownership, location, warranty, and audit history so security and operations teams can manage every asset across sites—from registration to retirement—without spreadsheets.",
  },
  "amc-management": {
    eyebrow: "AMC management capabilities",
    title: "AMC and warranty operations built for multi-site uptime",
    description:
      "Manage AMC coverage, warranties, preventive maintenance, vendors, and SLAs in one workspace—so maintenance teams protect asset availability and catch renewals before coverage gaps appear.",
  },
  vms: {
    eyebrow: "VMS capabilities",
    title: "Enterprise VMS built for unified live monitoring and control",
    description:
      "Bring cameras, sites, and operators into one video management system—so security teams monitor live video, investigate incidents faster, and run multi-site surveillance without fragmented NVR workflows.",
  },
  "ai-analytics": {
    eyebrow: "AI Vision capabilities",
    title: "AI video analytics built for real-time security and operations",
    description:
      "Turn live camera streams into actionable detections for intrusion, PPE, occupancy, and operational events—so teams respond faster with higher signal and less manual monitoring.",
  },
  "health-monitoring": {
    eyebrow: "Health monitoring capabilities",
    title: "Surveillance infrastructure health built for always-on estates",
    description:
      "Monitor cameras, NVRs, servers, storage, and network connectivity in real time—so security teams detect failures early, protect recording continuity, and keep multi-site surveillance operational.",
  },
};

const FEATURE_IMAGES: Record<string, string> = {
  "Centralized Asset Inventory": "/Images/solutions/centralised.png",
};

const FEATURE_RESULTS: Record<string, string> = {
  "Centralized Asset Inventory":
    "Outcome: one trusted estate-wide asset register—so operators stop chasing outdated spreadsheets and start working from live inventory data.",
  "Asset Lifecycle Management":
    "Outcome: complete lifecycle visibility from procurement to retirement, with every transfer and status change recorded for operations and finance.",
  "Serial Number Tracking":
    "Outcome: locate the exact device in seconds using serial, QR, or barcode—even after multi-site handoffs and ownership changes.",
  "Location & Department Mapping":
    "Outcome: know what is deployed where by site, floor, and department—so audits, moves, and capacity planning stay accurate.",
  "Asset Assignment & Ownership":
    "Outcome: clear accountability on every asset, so missing equipment, transfers, and handovers never leave ownership in doubt.",
  "Warranty & Documentation Management":
    "Outcome: warranty terms and supporting documents stay attached to each asset—ready for claims, renewals, and vendor reviews.",
  "Audit Trail & Compliance Reports":
    "Outcome: compliance-ready custody and access history you can export for audits without last-minute reconstruction.",
  "AMC & Warranty Management":
    "Outcome: every asset carries live AMC and warranty coverage—so renewals, claims, and vendor handoffs start from accurate contract data.",
  "Preventive Maintenance Scheduling":
    "Outcome: planned maintenance runs on schedule across sites, reducing unplanned downtime before it hits operations.",
  "Service Request Management":
    "Outcome: every ticket has a clear path from intake to close—no lost requests or endless vendor follow-ups.",
  "Vendor Performance Monitoring":
    "Outcome: compare partners on response time and completion quality so you renew the vendors who actually deliver.",
  "SLA Compliance Tracking":
    "Outcome: see SLA risk early enough to escalate, recover, and protect uptime commitments.",
  "Renewal Alerts & Notifications":
    "Outcome: contract and warranty renewals surface before expiry—so coverage never lapses unnoticed.",
  "Maintenance History":
    "Outcome: open a complete service timeline on any asset for audits, claims, and replacement planning.",
  "Automated Reminders":
    "Outcome: PM windows, renewals, and open tickets get proactive reminders before they become failures.",
  "Centralized Live Monitoring & Playback":
    "Outcome: operators watch live and recorded video from every site in one console—without hopping between tools.",
  "Multi-Site Surveillance Management":
    "Outcome: campuses, plants, and branches run from a single operator view with consistent control across locations.",
  "Video Search & Incident Investigation":
    "Outcome: evidence is found in minutes, not hours—so investigations move from footage search to action faster.",
  "Secure Remote Access":
    "Outcome: authorized teams get secure remote live and playback access without exposing the camera estate.",
  "Event & Alarm Management":
    "Outcome: alarms are acknowledged, escalated, and cleared from one shared queue with clear operator ownership.",
  "Open Integration with IP Cameras & Third-Party Systems":
    "Outcome: keep your camera mix flexible as the estate grows, without locking into a closed hardware stack.",
  "Real-Time AI Video Analytics":
    "Outcome: continuous video becomes actionable detections—so operators respond to real events, not endless live walls.",
  "Instant Event Detection & Smart Alerts":
    "Outcome: the right team is notified the moment a threshold is crossed, with less noise and faster response.",
  "Intrusion, PPE & Safety Monitoring":
    "Outcome: unsafe conditions and compliance gaps are caught early—before they become incidents or audit failures.",
  "People, Vehicle & Occupancy Analytics":
    "Outcome: movement and occupancy patterns across sites become operational insight, not just recorded footage.",
  "Intrusion Detection":
    "Outcome: perimeter and unauthorized-entry events trigger response before incidents escalate on site.",
  "Restricted Area Monitoring":
    "Outcome: know the moment someone enters a restricted zone—and escalate while intervention is still possible.",
  "Real-Time Device Health Monitoring":
    "Outcome: continuous infrastructure health visibility—so teams act on device risk before operators lose live coverage.",
  "Camera, NVR & Server Status":
    "Outcome: one live status board for cameras, NVRs, and servers across every site in the estate.",
  "Recording & Storage Health Monitoring":
    "Outcome: catch recording gaps and storage pressure early—before evidence windows are lost.",
  "Network & Connectivity Monitoring":
    "Outcome: spot link and network failures that take cameras offline, with faster path to restore uptime.",
  "Instant Alerts & Notifications":
    "Outcome: the right team is notified the moment a device or service leaves healthy status.",
  "Uptime & Availability Reports":
    "Outcome: prove reliability with clear uptime trends and prioritize fixes where downtime risk is highest.",
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

            return (
              <Reveal key={feature.title} delay={0.04}>
                <div
                  id={featureAnchorId(feature.title)}
                  className={`scroll-mt-[calc(var(--header-h)+1.25rem)] grid items-center gap-6 lg:grid-cols-2 lg:gap-10 ${
                    mediaFirst ? "" : "lg:[&>*:first-child]:order-2"
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[22px] bg-[#0b1628] shadow-[0_24px_60px_-40px_rgba(15,61,120,0.5)]">
                    <Image
                      src={FEATURE_IMAGES[feature.title] ?? solution.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover opacity-90"
                      aria-hidden
                    />
                  </div>

                  <div className="max-w-xl">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-blue">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 font-display text-[clamp(1.3rem,2.2vw,1.7rem)] font-semibold leading-[1.2] tracking-[-0.02em] text-text">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-[14px] leading-relaxed text-muted-strong md:text-[15px]">
                      {feature.description}
                    </p>
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
