import { site } from "@/lib/site";

export const companyIntro = {
  title: "About OrionAlerts",
  headline: "AI video analytics, VMS and CCTV health monitoring, built in Mumbai, India",
  /** The canonical entity statement, verbatim, so every page describes OrionAlerts the same way. */
  subheading: site.entityStatement,
  valueLine:
    "We build for the security, operations and IT teams responsible for cameras at one site or across many branches, plants and warehouses.",
};

export const whoWeAre = {
  paragraphs: [
    "Instead of only recording incidents, OrionAlerts analyzes live video from your existing cameras to detect risks and operational events, and sends alerts to the dashboard, mobile app and email.",
  ],
  /** Followed by linked module names and "— on Nebula OS, our Linux-based operating system." */
  modulesLead: "OrionAlerts combines five modules —",
};

export const whyWeExist = {
  title: "Why we built OrionAlerts",
  paragraphs: [
    "Most CCTV systems are designed to record what happened. Organizations still rely on manual monitoring, delayed investigations, fragmented systems, and reactive decision-making.",
    "We created OrionAlerts to bridge that gap: one platform that raises real-time alerts, flags when a camera stops recording, and keeps assets and maintenance contracts in the same place.",
  ],
};

export const leadershipMessage =
  "We are building OrionAlerts to transform surveillance from passive recording into operational intelligence — giving security and operations teams the visibility, alerts, and insights they need to act with confidence.";

export const finalCta = {
  title: "See what OrionAlerts can do for your sites",
  description:
    "Book a demo and we will show live AI alerts, camera health and AMC tracking for a site like yours.",
};

/** Short Q&A shown on /about and emitted as FAQPage structured data. */
export const aboutFaqs = [
  {
    question: "Who makes OrionAlerts?",
    answer: `OrionAlerts is made by Global Ace Technology Pvt. Ltd., headquartered at K Raheja Platinum, Marol, Andheri East, Mumbai, Maharashtra 400059, India. The same team builds Nebula OS, the Linux-based operating system that the OrionAlerts modules run on. You can reach the team at ${site.email} or through the contact form.`,
  },
  {
    question: "Is OrionAlerts built in India?",
    answer:
      "Yes. OrionAlerts is built in Mumbai, India, by Global Ace Technology Pvt. Ltd. It is designed for Indian organizations with one site or many, such as banks, retail and QSR chains, plants and warehouses, and connects to their existing CCTV and IP cameras over ONVIF, RTSP and vendor SDKs.",
  },
  {
    question: "What is the difference between OrionAlerts and Nebula OS?",
    answer:
      "OrionAlerts is the product and brand; Nebula OS is the Linux-based operating system it runs on. Nebula OS hosts the five OrionAlerts modules, which are VMS, AI video analytics, camera health monitoring, asset tracking and AMC management, on one shared record of every camera, site and event.",
  },
];
