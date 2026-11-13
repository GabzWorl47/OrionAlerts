import { NextResponse } from "next/server";
import { site } from "@/lib/site";
import { faqs } from "@/lib/faqs";

const SYSTEM_PROMPT = `
You are "Ask Orion", the official AI assistant on the OrionAlerts website (orionalerts.com).
OrionAlerts is an enterprise video intelligence platform from Global Ace Technology Pvt. Ltd., based in Mumbai, India.

Core Platform Knowledge:
- OrionAlerts combines 5 core modules running on Nebula OS (a hardened, Linux-based edge operating system):
  1. Video Management System (VMS): Unified camera feeds, high-performance recording, multi-site wall views.
  2. AI Video Analytics: Real-time computer vision alerts for intrusion, PPE compliance, restricted area breaches, smoke/fire detection, and crowd/line congestion. Detections process locally on edge nodes.
  3. Camera Health Monitoring: Continuous uptime monitoring of IP cameras, NVRs, network switches, and storage drives.
  4. Asset Tracking: QR/barcode/serial hardware registry, lifecycle tracking, custodian tracking across facilities.
  5. AMC & Warranty Management: SLA tracking, preventive maintenance ticketing, vendor management, renewal alerts.
- Vision Copilot: Natural language query engine allowing security and operations staff to search video events and observations without scrubbing footage.
- Hardware & Deployment: Works with existing IP cameras (RTSP/ONVIF), NVRs, and surveillance infrastructure. Compatible with CP Plus, Hikvision, Dahua, Axis, Hanwha, Uniview.
- Partnership Program: Dedicated channel tracks for System Integrators (SIs), Technology Partners, Distributors/VARs, and White-Label programs. Direct link: /partners/apply
- Contact & Demos: Book a demo link is /book-demo. General sales email is sales@orionalerts.com. Partner team is partner@orionalerts.com.

Behavior & Style:
- Be concise, helpful, and professional.
- Answer user questions directly in 2-4 sentences where possible.
- Provide direct markdown links to relevant website pages when helpful (e.g. [Apply to Partner](/partners/apply), [Book a Demo](/book-demo), [Contact Us](/contact), [Explore Solutions](/solutions)).
- If a user wants pricing, a custom proposal, or to talk to sales, encourage them to [Book a Demo](/book-demo) or leave their contact details.
`.trim();

function getRuleBasedFallback(input: string): string {
  const q = input.toLowerCase();
  if (q.includes("demo") || q.includes("trial") || q.includes("pricing") || q.includes("cost") || q.includes("quote")) {
    return "I can help you schedule a demo and get custom pricing for your sites. Please share your details or [Book a Demo directly here](/book-demo).";
  }
  if (q.includes("partner") || q.includes("resell") || q.includes("distributor") || q.includes("integrator") || q.includes("var")) {
    return "We welcome System Integrators, VARs, and Technology Partners with wholesale margins and deal registration. You can submit an application on our [Partner Application Page](/partners/apply).";
  }
  if (q.includes("detection") || q.includes("ai") || q.includes("copilot") || q.includes("vision") || q.includes("analytic")) {
    return "OrionAlerts AI Vision turns existing CCTV feeds into real-time alerts — including perimeter intrusion, PPE compliance, unauthorized entry, and smoke detection, processed at the edge on Nebula OS.";
  }
  if (q.includes("search") || q.includes("investigat") || q.includes("footage") || q.includes("clip")) {
    return "Investigations use our Vision Copilot engine: search events by natural language, site, and time window without scrubbing through hours of video.";
  }
  if (q.includes("health") || q.includes("offline") || q.includes("uptime") || q.includes("downtime")) {
    return "Health Monitoring tracks camera connectivity, recording status, NVR storage, and network packet loss in real time to prevent blind spots.";
  }
  if (q.includes("support") || q.includes("ticket") || q.includes("contact") || q.includes("email") || q.includes("phone")) {
    return "You can reach our team at sales@orionalerts.com, partner@orionalerts.com, or send a message through our [Contact Page](/contact).";
  }
  return "OrionAlerts provides enterprise VMS, AI video analytics, CCTV health monitoring, asset tracking, and AMC management on Nebula OS. How can I help you today?";
}

export async function POST(req: Request) {
  let userText = "";
  let history: { role: string; text: string }[] = [];

  try {
    const body = await req.json();
    userText = (body.message || "").trim();
    history = Array.isArray(body.history) ? body.history : [];
  } catch {
    return NextResponse.json({ reply: getRuleBasedFallback("") });
  }

  if (!userText) {
    return NextResponse.json({ reply: "How can I help you with OrionAlerts today?" });
  }

  const apiKey = (process.env.GEMINI_API_KEY || "").trim();

  // If no API key is set, immediately return high-quality rule-based fallback
  if (!apiKey) {
    return NextResponse.json({ reply: getRuleBasedFallback(userText), mode: "fallback" });
  }

  try {
    // Format conversation history for Gemini
    const contents = [
      {
        role: "user",
        parts: [{ text: `${SYSTEM_PROMPT}\n\nPlease greet the visitor and acknowledge this context.` }],
      },
      {
        role: "model",
        parts: [{ text: "Understood. I am Ask Orion, ready to assist visitors with OrionAlerts products, architecture, and inquiries." }],
      },
    ];

    for (const msg of history.slice(-6)) {
      if (!msg.text) continue;
      contents.push({
        role: msg.role === "assistant" ? "model" : "user",
        parts: [{ text: msg.text }],
      });
    }

    contents.push({
      role: "user",
      parts: [{ text: userText }],
    });

    const modelsToTry = [
      "gemini-3.1-flash-lite",
      "gemini-flash-latest",
      "gemini-3.8-flash"
    ];

    let answer: string | null = null;

    for (const modelName of modelsToTry) {
      try {
        const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${apiKey}`;
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8000);

        const response = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents,
            generationConfig: {
              temperature: 0.2,
              maxOutputTokens: 350,
            },
          }),
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (response.ok) {
          const data = await response.json();
          const text = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (text && typeof text === "string") {
            answer = text.trim();
            break;
          }
        }
      } catch {
        // try next model
      }
    }

    if (!answer) {
      return NextResponse.json({ reply: getRuleBasedFallback(userText), mode: "fallback" });
    }

    return NextResponse.json({ reply: answer, mode: "ai" });
  } catch (err) {
    console.warn("[chat] Exception during AI generation, falling back:", err);
    return NextResponse.json({ reply: getRuleBasedFallback(userText), mode: "fallback" });
  }
}
