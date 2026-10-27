import nodemailer from "nodemailer";

export type LeadEmailData = {
  kind: "demo" | "contact" | "partner";
  name: string;
  email: string;
  company: string;
  phone?: string | null;
  message: string;
  interest?: string | null;
  topic?: string | null;
  /** Partner form specific fields */
  partnerTrack?: string | null;
  website?: string | null;
  region?: string | null;
  annualDeployments?: string | null;
  /** Demo form only; optional ranges such as "2-5" or "under-50". */
  siteCount?: string | null;
  cameraCount?: string | null;
  ip?: string;
  submittedAt?: string;
};

const TOPIC_LABELS: Record<string, string> = {
  sales: "Sales Conversation",
  support: "Support / Ticket",
  partner: "Partnership / Channel Partner",
  press: "Press / Investor",
  privacy: "Privacy Request",
  other: "Other Inquiry",
};

const PARTNER_TRACK_LABELS: Record<string, string> = {
  "system-integrator": "System Integrator (SI) / CCTV Installer",
  "technology-partner": "Technology / Hardware Partner (Camera / VMS / Sensor)",
  "distributor-var": "Value Added Reseller (VAR) / Distributor",
  "white-label": "White-Label / OEM Solution",
  other: "Other Partnership",
};

const INTEREST_LABELS: Record<string, string> = {
  vms: "Video Management System (VMS)",
  "ai-analytics": "AI Vision & Real-Time Alerts",
  "asset-tracking": "Asset Tracking",
  "amc-management": "AMC Management",
  "health-monitoring": "Health Monitoring",
  platform: "Full Platform",
};

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function sendLeadEmail(data: LeadEmailData): Promise<{
  ok: boolean;
  recipient?: string;
  error?: string;
  simulated?: boolean;
}> {
  const isPartner =
    data.kind === "partner" ||
    data.topic?.toLowerCase() === "partner";

  const partnerRecipient = process.env.PARTNER_EMAIL?.trim() || "partner@orionalerts.com";
  const generalRecipient = process.env.WEBSITE_LEAD_EMAIL?.trim() || "websitelead@orionalerts.com";
  const recipient = isPartner ? partnerRecipient : generalRecipient;

  const host = process.env.SMTP_HOST?.trim();
  const user = process.env.SMTP_USER?.trim();
  const pass = process.env.SMTP_PASS?.trim();
  const port = parseInt(process.env.SMTP_PORT || "465", 10);
  const secure = process.env.SMTP_SECURE !== undefined ? process.env.SMTP_SECURE === "true" : port === 465;
  const from =
    process.env.SMTP_FROM?.trim() ||
    `"OrionAlerts Lead Engine" <${user || "websitelead@orionalerts.com"}>`;

  // Determine subject and title
  let subject: string;
  let categoryLabel: string;

  if (isPartner) {
    const trackLabel = data.partnerTrack ? (PARTNER_TRACK_LABELS[data.partnerTrack] || data.partnerTrack) : "Partner Application";
    categoryLabel = `Partner Application (${trackLabel})`;
    subject = `[Partner Application] ${data.company} - ${data.name}`;
  } else if (data.kind === "demo") {
    const interestLabel = data.interest ? (INTEREST_LABELS[data.interest] || data.interest) : "Full Platform";
    categoryLabel = `Demo Request (${interestLabel})`;
    subject = `[Demo Request] ${data.company} - ${data.name}`;
  } else {
    const topicLabel = data.topic ? (TOPIC_LABELS[data.topic] || data.topic) : "General Inquiry";
    categoryLabel = `Contact Inquiry (${topicLabel})`;
    subject = `[Website Lead - ${topicLabel}] ${data.company} - ${data.name}`;
  }

  // If SMTP is not yet configured, log and return graceful simulated status
  if (!host || !user || !pass) {
    console.warn(
      `[email] SMTP is not configured (missing SMTP_HOST, SMTP_USER, or SMTP_PASS). ` +
      `Routing to ${recipient} was simulated. Lead details preserved in application logs.`
    );
    return { ok: false, recipient, simulated: true, error: "SMTP not configured" };
  }

  const extraRows: string[] = [];
  if (data.website) {
    extraRows.push(`<tr><th>Website</th><td><a href="${escapeHtml(data.website)}" target="_blank" rel="noreferrer" style="color: #2563eb;">${escapeHtml(data.website)}</a></td></tr>`);
  }
  if (data.partnerTrack) {
    const trackLabel = PARTNER_TRACK_LABELS[data.partnerTrack] || data.partnerTrack;
    extraRows.push(`<tr><th>Partner Track</th><td><strong>${escapeHtml(trackLabel)}</strong></td></tr>`);
  }
  if (data.region) {
    extraRows.push(`<tr><th>Territory / Region</th><td>${escapeHtml(data.region)}</td></tr>`);
  }
  if (data.annualDeployments) {
    extraRows.push(`<tr><th>Est. Deployments / Yr</th><td>${escapeHtml(data.annualDeployments)}</td></tr>`);
  }
  if (data.siteCount) {
    extraRows.push(`<tr><th>Number of Sites</th><td>${escapeHtml(data.siteCount)}</td></tr>`);
  }
  if (data.cameraCount) {
    extraRows.push(`<tr><th>Approx. Cameras</th><td>${escapeHtml(data.cameraCount)}</td></tr>`);
  }

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #1e293b; background: #f8fafc; margin: 0; padding: 24px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
    .header { background: #0f172a; padding: 24px; text-align: left; }
    .header h1 { margin: 0; color: #ffffff; font-size: 20px; font-weight: 600; letter-spacing: -0.02em; }
    .header .tag { display: inline-block; margin-top: 8px; background: #2563eb; color: #ffffff; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; padding: 4px 10px; border-radius: 9999px; }
    .body { padding: 24px; }
    table { width: 100%; border-collapse: collapse; margin-top: 8px; }
    th, td { text-align: left; padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
    th { width: 34%; color: #64748b; font-weight: 600; background: #f8fafc; }
    td { color: #0f172a; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 14px; white-space: pre-wrap; font-family: inherit; font-size: 14px; color: #334155; margin-top: 6px; }
    .footer { padding: 16px 24px; background: #f8fafc; border-top: 1px solid #e2e8f0; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>OrionAlerts · ${isPartner ? "Partner Application" : "New Lead Notification"}</h1>
      <div class="tag">${escapeHtml(categoryLabel)}</div>
    </div>
    <div class="body">
      <table>
        <tr>
          <th>Full Name</th>
          <td><strong>${escapeHtml(data.name)}</strong></td>
        </tr>
        <tr>
          <th>Work Email</th>
          <td><a href="mailto:${escapeHtml(data.email)}" style="color: #2563eb; text-decoration: none; font-weight: 500;">${escapeHtml(data.email)}</a></td>
        </tr>
        <tr>
          <th>Company</th>
          <td>${escapeHtml(data.company)}</td>
        </tr>
        ${extraRows.join("\n        ")}
        <tr>
          <th>Phone</th>
          <td>${data.phone ? `<a href="tel:${escapeHtml(data.phone)}" style="color: #2563eb; text-decoration: none;">${escapeHtml(data.phone)}</a>` : '<span style="color: #94a3b8;">Not provided</span>'}</td>
        </tr>
        <tr>
          <th>${isPartner ? "Partnership Proposal" : "Message"}</th>
          <td><div class="message-box">${escapeHtml(data.message)}</div></td>
        </tr>
        <tr>
          <th>Client IP</th>
          <td style="font-family: monospace; font-size: 13px; color: #64748b;">${escapeHtml(data.ip || "unknown")}</td>
        </tr>
        <tr>
          <th>Received At</th>
          <td style="color: #64748b;">${escapeHtml(data.submittedAt || new Date().toISOString())}</td>
        </tr>
      </table>
    </div>
    <div class="footer">
      This notification was sent by OrionAlerts Website (orionalerts.com) to <strong>${escapeHtml(recipient)}</strong>.<br/>
      You can directly reply to this email to contact <strong>${escapeHtml(data.name)}</strong>.
    </div>
  </div>
</body>
</html>
  `.trim();

  const textLines: string[] = [
    `[OrionAlerts] ${isPartner ? "Partner Application" : "New Lead Notification"}: ${categoryLabel}`,
    `=====================================================`,
    ``,
    `Full Name:    ${data.name}`,
    `Work Email:   ${data.email}`,
    `Company:      ${data.company}`,
  ];
  if (data.website) textLines.push(`Website:      ${data.website}`);
  if (data.partnerTrack) textLines.push(`Track:        ${PARTNER_TRACK_LABELS[data.partnerTrack] || data.partnerTrack}`);
  if (data.region) textLines.push(`Territory:    ${data.region}`);
  if (data.annualDeployments) textLines.push(`Deployments:  ${data.annualDeployments}`);
  textLines.push(
    `Phone:        ${data.phone || "Not provided"}`,
    `IP Address:   ${data.ip || "unknown"}`,
    `Submitted At: ${data.submittedAt || new Date().toISOString()}`,
    ``,
    `${isPartner ? "Partnership Proposal" : "Message"}:`,
    `--------`,
    data.message,
    ``,
    `--`,
    `Routed to: ${recipient}`,
    `Direct reply to this email reaches ${data.name} <${data.email}>.`
  );

  const textContent = textLines.join("\n");

  try {
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
      tls: {
        rejectUnauthorized: process.env.SMTP_REJECT_UNAUTHORIZED === "true",
      },
    });

    const info = await transporter.sendMail({
      from,
      to: recipient,
      replyTo: `"${data.name}" <${data.email}>`,
      subject,
      text: textContent,
      html: htmlContent,
    });

    console.info(`[email] Lead email successfully dispatched to ${recipient}. MessageId: ${info.messageId}`);
    return { ok: true, recipient };
  } catch (err: unknown) {
    const errorMessage = err instanceof Error ? err.message : String(err);
    console.error(`[email] Failed to send email via SMTP to ${recipient}:`, errorMessage);
    return { ok: false, recipient, error: errorMessage };
  }
}
