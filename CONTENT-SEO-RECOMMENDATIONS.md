# OrionAlerts — Content, SEO, AEO & GEO Recommendations

*Review date: 26 October 2026 · Scope: all 56 pages in the sitemap · Status: Week 1 fixes that needed no input from the team were applied on 26 October 2026 (see the status table below). Everything else is still open.*

### Week 1 status (26 Oct 2026)

| Week 1 item | Status |
|---|---|
| Remove internal and developer notes (industry score cards and leaked strings, privacy/cookies/security/terms notes, contact-form microcopy, cookie banner, blog "Section headings will appear here") | ✅ Done |
| Visible keyword H1s: homepage, 5 solution pages (with Book a demo / See how it works buttons), 30 industry pages, hubs, About, Partners, Blog, FAQs, Contact, Book a demo | ✅ Done |
| Standardise on "OrionAlerts" in all text; fix footer labels (FAQs, Partner program, Book a demo; duplicate Security link removed) | ✅ Done. The "ORION Alerts" logo wordmark was kept as a design element. |
| Title-clipping bug, plus new keyword titles and unique metas (home, hubs, 5 solutions, 30 industries, core pages, contact, book-demo) | ✅ Done. All 56 titles are ≤60 chars, with no duplicates. Titles over 46 chars ship without the " \| OrionAlerts" suffix instead of being cut. |
| Copy-paste bugs: Health outcomes copied from AMC, mismatched VMS outcomes, industry template strings, typos | ✅ Done |
| `/book-demo` as a real server-rendered page (no redirect to `/`) | ✅ Done. The popup still opens for in-site clicks. |
| Technical SEO | ✅ Done (details below) |
| Remove unverified certificate badges ⚠ | ⏳ Partly done. The unused FedRAMP/FIPS/NDAA/TAA/SAFETY Act list and its 10 badge files were deleted. The visible ISO 9001 / SOC 2 / ISO 27001 badges still need a decision from the team. |

Technical SEO details:
- real sitemap dates
- default homepage canonical removed
- `lang="en-IN"` and `og:locale` set to `en_IN`
- all structured data linked to one company entity (`/#organization`)
- `alternateName` added, `areaServed` changed to "India" and the street address fixed
- breadcrumbs on all static pages
- `ContactPage` structured data
- FAQ structured data on all 30 industry pages
- `VideoObject` removed from solution pages, with matching sitemap video entries
- `robots.txt` tidied

### Month 1 and Quarter status (26 Oct 2026)

Everything that needed no input from the team is now done. The site grew from 56 to 92 pages. A full audit of all 92 found:
- every page returns 200, with exactly one H1;
- titles are unique and 60 characters or fewer; meta descriptions are unique;
- every page has a self-referencing canonical, and all JSON-LD is valid;
- none of the 94 internal links is broken;
- `next build` and lint are clean.

| Area | Done |
|---|---|
| Entity and GEO | One official "What is OrionAlerts" statement (`site.entityStatement`), reused on the homepage, About, FAQ #1, `/company`, `llms.txt` and the fact sheet. New `/company` fact sheet. `llms.txt` rebuilt, and new `/llms-full.txt` (full-text site content). Organization schema now has `hasOfferCatalog`. |
| Solutions (§3) | "What is …?" definitions, 5 FAQs per page with FAQPage, a fact strip (protocols, deployment, alert channels), comparison tables, "How it works" steps, industry / blog / glossary links. Unsupported claims softened, unverified beacon/geofence data deleted. Hub: "Which solution do I need?" table, ItemList schema, mobile hero fixed. |
| Industries (§4) | Text shared across pages cut from 61.7% to 18.2% on average, with every page ≤25%. 2–3 positive Q&As per page. A "Built for" line, one "Limits" note per page, and the Vision Copilot answer now server-rendered. Related industries linked both ways (≥3 inbound links per page). Further-reading links. Service schema. 13 framework source URLs verified and added. Hub cards have visible, distinct taglines. |
| Core pages (§2) | Homepage: entity section, solutions section, industries strip, latest-insights strip, 4-question FAQ, use-case cards that deep-link. About: facts block with known facts only, plus FAQ and AboutPage schema. FAQ page: 32 answer-first answers of 46–57 words in 9 groups, with H3 questions. Pricing: "what affects your quote". Partners: jargon removed; the "Apply" link pre-selects Partnership on the contact form. Nebula OS: US spelling, heading levels fixed, duplicate DOM removed, links added. |
| Blog (§5.1–5.2, §5.9) | Engine: links, tables, heading detection, TOC anchors, calculated read times, absolute and updated dates, topic-based related posts, merged categories, Blog/ItemList schema. CP Plus post: new slug with 308 redirect, question headings, takeaways, 2 STQC source links. Alert Fatigue and Vision Intelligence posts expanded to ~1,300 words. No Unsplash images left. **5 new posts:** add AI to existing CCTV, CCTV health monitoring, AMC checklist, VMS vs NVR, AI PPE detection. Admin saves keep `seoTitle`, `imageAlt` and `tags`. |
| New content hubs (§6.7) | `/glossary` (12 terms, DefinedTerm schema), `/use-cases` (12 detections), `/compare` (3 comparisons), `/docs` rebuilt as a real documentation hub. |
| Technical (§6) | Mega-menu links server-rendered, with Escape and keyboard support. Nav tidied: "Home" removed, Resources → `/blogs`, "About". Footer: Industries and Resources columns. BlogPosting, VideoObject (real `uploadDate`/`duration`) and SoftwareApplication schema enriched. 35 share images at 1200×630 (`/Images/og/**`). Sitemap: 92 URLs with real dates. |

**Final pass (also 26 Oct 2026):**
- AI Video Analytics features restructured: Intrusion & Restricted-Zone, PPE & Safety Compliance, Fire & Smoke, and Loitering & Line-Crossing, each with use-case links.
- Health Monitoring features: duplicates merged, plus Recording Verification and Device Failure Alerts. Old feature anchors still work through aliases.
- 3 more posts: edge vs cloud video analytics, a surveillance asset register guide, and an AI video analytics buyer's guide. The blog now has 12 posts.
- Demo form: optional site-count and camera-count fields (checked on the server), a "Book my demo" button and a reCAPTCHA hint. Production shows a fallback message if the site key is missing.
- 404 page: recovery links and a proper H1.
- Industry copy: cement, airports/ports/railways (one section per mode), and education (schools and universities).
- VideoObject and sitemap video entries for the 11 use-case pages that embed video.
- Smaller VMS page payload.

The final audit covered all 95 pages:
- every page returns 200, with exactly one H1;
- no duplicate titles or meta descriptions;
- no broken internal links (97) and no missing anchors;
- every media path resolves to a file;
- `next build` (107 routes), tsc and lint are clean.

**Performance note:** I measured production page weight with `next start`.
- HTML is 16–32 KB gzipped, and CSS is 25 KB.
- About 275–300 KB of gzipped JavaScript loads on every page, even static ones like the glossary. That includes:
  - React DOM: ~71 KB
  - the Next.js runtime: ~80 KB
  - Framer Motion: ~43 KB
- Recommended follow-up: move Framer Motion to `LazyMotion` + `m` components, and lazy-load the "Ask Orion" assistant and the consent UI. This is a refactor across ~50 components.
- Real-device Core Web Vitals (LCP, CLS, INP) couldn't be measured in this environment. Run PageSpeed Insights on the live URL after deploying.

### Pre-push editorial review (26 Oct 2026)

Five reviewers proofread and fact-checked every new or rewritten page against the site's original copy (git `HEAD`). They fixed errors directly and added no new claims.

**What changed in the review:**
- **Technical corrections:**
  - ONVIF is now described as handling discovery and configuration, with RTSP carrying the video. ONVIF Profiles S/T/G/M are explained.
  - DVR vs hybrid XVR distinction added.
  - The VMS vs VSaaS cost and bandwidth rows are corrected.
  - The on-prem vs cloud row now says remote notifications need the internet link.
- **Overclaims removed or softened:**
  - ANPR is not claimed as a capability.
  - CP Plus: no NAS claims and no "central AI server".
  - No video clips attached to alerts, since video stays on site.
  - No ATM surveillance claim.
  - Partner co-selling and white-label wording reverted to the original scope.
  - The cement PPE detection and the automotive/manufacturing route alerts are now pilot-conditional, and data-centre access-log matching is integration-dependent.
  - Regulatory wording is neutral: RBI, NABH, Part 11, PESO/ATEX, STQC and Tier.
  - Fire & smoke now says everywhere that it supplements certified fire alarms.
- **Consistency:**
  - Alert channels are "dashboard, mobile app and email" across the site, including `/faqs`.
  - CTA buttons use Title Case.
  - "Video Surveillance as a Service" removed from Organization `knowsAbout`.
  - The privacy field list now includes the new demo-form fields.
  - Two Nebula OS comparison cells that overstated competitors' weaknesses are fixed.
- **Quality:**
  - Every FAQ answer site-wide is 40–60 words and answer-first.
  - Duplicate Q&As across pages are replaced.
  - Jargon is expanded on first use.
  - Repeated "cameras you already have" lines are trimmed.
- **Images:** three blog covers that showed baked-in claims were swapped: a "99.9% uptime" figure, a CP Plus "96%" SLA table, and third-party brand logos.

**Spelling:** industry pages use UK spelling (Indian English); the rest of the site uses US spelling. Each page is consistent. ⚠ Pick one site-wide standard. For `lang="en-IN"`, UK spelling is the natural choice.

**⚠ Consolidated list: claims and assets the team must confirm before launch**

*Capabilities*
1. **Alert channels:** SMS, WhatsApp, Microsoft Teams, "other integrated channels", configurable escalation. These were removed from the copy pending confirmation. Also: do mobile or email alerts include video clips?
2. **Detections listed on `/use-cases`:** fall, crowd density, abandoned object, camera tampering, and vehicle by type. Also: black-screen, frozen-stream and no-motion detection in the health engine.
3. **Remote live view and playback:** how they are delivered, for example relayed through Orion Cloud. This affects "video stays on site".
4. **Offline behavior:** does detection fully continue during WAN outages?
5. **Licensing:** can each module be licensed and deployed standalone?
6. **Health monitoring:**
   - Does a camera failure automatically raise a service request against the vendor and contract?
   - Do health alerts identify whether the camera, NVR, storage or network is at fault?
7. **Pilot-dependent detections:** PPE detection (cement, oil & gas), route and forklift-lane alerts (automotive, manufacturing, logistics, e-commerce), queue and occupancy estimates (retail, government, hotels, sports), and access-control integration (data centres).
8. **ANPR:** not offered on the site today. Confirm before adding it back.

*Partnerships, compliance and proof*
9. **CP Plus:**
   - Confirm "technology partner" status.
   - Confirm the API-engine integration.
   - Confirm OrionAlerts works with STQC-certified CP Plus cameras, DVRs and NVRs.
   - Approve naming CP Plus and Aditya Infotech.
10. **Compliance wording for counsel:** the RBI, NABH, Part 11 / Schedule M, PESO/IECEx/ATEX, STQC, Tier/ISO and EPR answers on industry pages.
11. **Homepage certificate badges:** ISO 9001, SOC 2, ISO 27001 and ONVIF. Confirm them or remove the section.
12. **Customer logos and partner program:**
    - Permission to show all 24 customer logos.
    - The partner program features already live: deal registration, a "2FA-ready" portal, certification, a certified-partner lookup, ERP/CMMS/ticketing integrations, and branded delivery.
13. **Bylines:** "Ayushi, Senior Finance Manager" (on a CCTV operations post) and "Kawaljeet, Head of Growth Marketing".

*Images with baked-in content (pixels, not text)*
14. **Solution diagrams that contradict the copy:**
    - AI: remote sites send video over VPN to a central AI core.
    - VMS: a central core with cloud backup.
    - Health: WhatsApp and Teams alert channels, and example device counts.
    - AMC: "Never miss a renewal".

    Re-export these diagrams, or hide them. Each one is a one-line change: set `diagram` to undefined in `src/app/solutions/solution-page-content.ts`.
15. **Feature images still used on solution pages:**
    - `multi-site-surveillance-management.webp` ("99.9% Platform Uptime")
    - `sla-compliance-tracking.webp` (CP Plus at "96%")
    - `open-integration-ip-cameras-third-party.webp` (Hikvision, Dahua, Axis and Bosch logos)
    - `instant-alerts-notifications.webp` (SMS)
16. **Homepage hero poster:** `visuals/solutions/ai-vision.webp` carries an AI-generator watermark.
17. **iso.org source links:** they block automated checks, so verify them in a browser.

**⚠ Needs a decision or review from the team before or after publishing:**
- **New content to read before it goes live:**
  - the 5 new blog posts;
  - the 2 expanded posts;
  - the 12 glossary terms, 12 use-case pages and 3 comparison pages;
  - the industry Q&As.

  All of it is written only from facts already on the site plus general industry knowledge, with no statistics.
- **Claims to confirm:**
  - **ANPR:** the ANPR glossary page relies on one passage in the CP Plus post.
  - **PPE detection:** cement and oil & gas Q&As now mention PPE detection, taken from the review drafts.
  - **Pilot-dependent alerts:** route alerts (automotive), forklift-lane alerts (logistics), access-log matching (data centres) and queue-threshold alerts (retail).
- **Alert channels:** `/faqs` still lists SMS and WhatsApp. The Health Monitoring diagram also shows WhatsApp and MS Teams, but the new pages say only "dashboard, mobile app and email". Confirm, then align.
- **Diagrams that contradict the copy:** the Health architecture image (WhatsApp/Teams) and the AI architecture image (video over VPN to a central AI core) disagree with the "video stays on site" copy. Re-export them.

**Still open after Week 1:** everything under Month 1 and Quarter, and every ⚠ item. Also:
- `src/components/landing/CustomerTrustSection.tsx` is unused but contains unverified claims (SOC 2, PCI DSS, HIPAA, 99.9% uptime, an invented quote). Delete it.
- Several industry hero images are off-topic or risky. For example, commercial buildings shows a kitchen scene, and sports events uses a real-looking footballer with Champions League branding. Retail and textile still hotlink Unsplash.
- Solution hero images have a headline baked in, which duplicates the new H1. Re-export them without the text.
- On mobile, the `/solutions` hub opens with an empty dark block above the H1.
- ⚠ `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` isn't set in `.env.production`. Without it the demo form can't be submitted, and visitors see a developer message.
- ⚠ Compliance should confirm the new banking FAQ sentence, "RBI does not run an approval or certification scheme for CCTV or video analytics vendors."

**How to read this document**

- **SEO** — ranking in Google and Bing search results.
- **AEO** (answer engine optimisation) — getting picked for featured snippets, "People also ask" and voice answers. This mostly means short, direct answers under question-style headings.
- **GEO** (generative engine optimisation) — getting cited by ChatGPT, Perplexity, Gemini, Claude and Google AI Overviews. This mostly means clear, consistent, quotable facts about who OrionAlerts is and what it does.
- **Priorities:** **P1** = high impact or quick, do first · **P2** = important · **P3** = polish.
- **⚠** = needs a real fact or a decision from the team. These were deliberately not made up.
- **Suggested copy** is shown in *italics* or quote blocks. File references (`file:line`) show where each change goes.

**Contents**

1. Executive summary, action plan and inputs needed
2. Core pages: Home, About, Nebula OS, Partners, Pricing, Careers, header/footer
3. Solutions pages
4. Industries pages
5. Blogs, FAQs, Docs, Contact, Book a demo, Legal
6. Site-wide technical SEO, AEO and GEO

---

## 1. Executive summary

The site's foundations are solid:
- Every page loads fast and is server-rendered.
- Canonicals and redirects are correct.
- Structured data exists, `llms.txt` exists, and all AI crawlers are allowed.
- **Nebula OS** is a genuinely strong page: it has a definition, a comparison table and an 8-question FAQ. It's the model for the rest of the site.

The main problems are in the **content**: what the pages say, and how consistently they say it.

### The 10 biggest issues

1. **Internal working notes are visible to visitors.** All 30 industry pages show "Not assessed / proposal-3.2" score cards and notes such as *"never invent a flattering percentage"*. The banking page says *"No such approval is established by this research."* Similar notes appear on the privacy, cookies and security pages and in the contact form ("CRM/ERP store is not connected yet", "HTTPS… once TLS is correctly configured"). **This is the most urgent fix: it damages credibility with every buyer who reads it.** §4.1, §5.5, §5.7
2. **The homepage and solution pages don't say what OrionAlerts is in readable text.**
   - The homepage H1 is just "Orion Alerts", and it fades away.
   - The solution-page H1s are hidden, with the headline baked into an image.
   - Nowhere does the visible text say "OrionAlerts is…".
   - The homepage has only ~186 words that search engines can read. §2.1, §3.1
3. **The brand is written three ways** ("OrionAlerts", "Orion Alerts", "ORION Alerts"), and the AI product has **five names** ("AI Vision", "AI Vision & Real-Time Alerts", "Vision AI", "AI Video Analytics", "OrionAlerts Vision"). Search engines and AI assistants may treat these as different things. §6.7
4. **The 30 industry pages are mostly templated.** About half of each page is copied word-for-word across pages, the "use cases" are the same five product features everywhere, and the tone is mostly disclaimers about what the product *can't* do. §4
5. **No citable facts or proof anywhere.** There's no customer count, camera count, founding year, case study or named leadership. The testimonials section is empty. The certificate badges carry an "orientation only" disclaimer. §2, §6.7
6. **`/book-demo` is an empty page to Google**, then redirects visitors to the homepage. It's the most-linked conversion URL on the site (81 links). §5.6
7. **Answer-ready content is missing where it matters most.**
   - No FAQs on any solution page.
   - FAQ structured data is on 0 of the 30 industry pages.
   - FAQ answers are only 19–37 words (40–60 is ideal).
   - The pricing page doesn't explain how pricing works. §3, §4, §5.3
8. **Pages don't link to each other across sections.** Solution pages link to no industries or blogs, blogs link to nothing, and industry pages link to no blogs. §6.4
9. **Technical SEO gaps.**
   - A title-clipping bug lets titles reach 74 characters.
   - 52 of 56 sitemap dates are set to "now".
   - The company appears as several separate entities in structured data.
   - 11 pages have no breadcrumbs.
   - A layout-level canonical points to the homepage. §6
10. **Blogs are thin and lack credibility.** Three of the four posts are 196–312 words but claim 4–6 minute read times. A finance manager is the author of a CCTV operations article. Articles can't contain links. Nothing has been published in 12 weeks. §5.2

---

## Action plan

### Week 1 — credibility and quick technical fixes (mostly copy and config; little design work)

| # | Action | Where | Section |
|---|---|---|---|
| 1 | Remove all internal and developer notes from public pages (industry score cards, leaked strings, legal-page notes, contact-form microcopy) | `MigratedIndustryPage.tsx`, `shared.ts`, `content/*.ts`, privacy/cookies/security pages, `LeadForm.tsx` | 4.1, 5.5, 5.7 |
| 2 | Make the homepage and solution H1s visible and keyword-led; add a "Book a demo" button to solution heroes | `Hero.tsx`, `SolutionHero.tsx` | 2.1, 3.1 |
| 3 | Standardise on **"OrionAlerts"** and one name per module; fix the misleading footer labels | `faqs.ts`, `about.ts`, `site.ts`, `blogs.json`, `Footer.tsx` | 2.7, 6.7 |
| 4 | Fix the title-clipping bug; set new keyword-led titles and metas for home, the hubs, the 5 solutions and the 30 industries | `seo.ts`, page metadata, `content/*.ts` | 6.1, 3, 4 |
| 5 | Make `/book-demo` a real page, or remove it from the sitemap | `book-demo/page.tsx`, `BookDemoModal.tsx` | 5.6 |
| 6 | Fix the copy-paste bugs: Health outcomes copied from AMC, mismatched VMS outcomes, broken industry template strings | `solution-outcomes.ts`, `shared.ts`, content files | 3.7, 4.2 |
| 7 | Real sitemap dates; remove the default canonical; set `lang="en-IN"`; link all structured data to one company; breadcrumbs on 11 pages | `sitemap.ts`, `layout.tsx`, `jsonld.tsx` | 6.3, 6.5 |
| 8 | Remove unverified certificate badges and the unused FedRAMP/FIPS/NDAA list ⚠ | `CertificateMarquee.tsx`, `homepage.ts`, `/security` | 2.1, 5.7 |

### Month 1 — answer-ready content and linking

- Write the official **"What is OrionAlerts"** paragraph, and use it in all 6 places (§6.7).
- Add a **definition paragraph plus 4–6 FAQs with structured data** to each solution page. Add **FAQ structured data plus 2–3 positive Q&As** to each industry page (§3, §4).
- Overhaul the **FAQ page**: 40–60-word answers, the missing buyer questions, new groups (§5.3).
- Rewrite **Pricing** ("what affects your quote") and **About** (facts block, leadership) (§2.4, §2.2).
- Add a **fact strip** to solution pages: ONVIF/RTSP/SDKs, deployment models, alert channels (§3.8).
- Fix the **blog engine**: in-article links, question headings, calculated read times. Repair the CP Plus article and fix authors (§5.2).
- **Cross-linking**:
  - footer Industries column
  - mega menu in the server HTML
  - solution↔industry↔blog links
  - Asset Tracking and AMC on industry pages

  (§6.4)
- Rebuild **`llms.txt`** and add **`/llms-full.txt`** (§6.6).
- Set up a **Google Business Profile** ⚠ and add **social profiles** ⚠ (§6.10).

### Quarter — depth and authority

- **"OrionAlerts at a glance"** fact-sheet page.
- **Glossary hub** (VMS, VSaaS, NVR, ONVIF, AMC, STQC…).
- **12 use-case pages** and **3 comparison pages**.
- **Rewrite the industry pages:** real industry use cases ⚠, less than 25% shared copy, India regulations, hubs for manufacturing and logistics.
- Expand thin blog posts into pillars, and publish the **11 proposed posts** (§5.9).
- **Case studies** ⚠ and **author pages**.
- Wikidata and Crunchbase entries; a production Core Web Vitals audit.

---

## Information needed from the team (⚠)

These recommendations can't be finished without real facts. Making them up would harm trust and could create legal risk.

| Needed | Used for |
|---|---|
| Founding year, customer count, cameras monitored, number of sites | Homepage proof line, About facts block, GEO |
| Leadership names, roles and short bios | About page, author pages |
| Certificates actually held (standard, number, certifying body, scope) | Homepage badges, `/security`, FAQ |
| Pricing model (per channel? subscription or perpetual? hardware included? pilot?) and estimate turnaround | Pricing page, pricing FAQ |
| Supported camera, NVR and VMS brands; ONVIF profiles; maximum cameras per node; hardware/GPU; typical rollout time | Nebula OS specs, solution fact strips, FAQs |
| Alert channels actually supported (is SMS/WhatsApp real?) | FAQ, AI Analytics page (currently contradictory) |
| Where AI runs (on-site GPU vs "edge or cloud") and Orion Cloud hosting region; DPDP position | AI page, data-residency FAQ, security page |
| How assets are tracked (QR/barcode only, or RFID/BLE/GPS?) | Asset Tracking page (unused beacon/geofence data) |
| Is AMC Management for CCTV only, or all facility assets? Does a camera failure auto-create a service ticket? | AMC page scope and key differentiator |
| Which detections are supported per industry | Rewriting the 30 industry use-case sections |
| Support hours and SLAs, onboarding time, reply-time promise | FAQ, contact page, book-demo page |
| Partner program: what exists today (portal, certification, white-label?) | Partners page (it currently promises unbuilt features) |
| Case studies or named outcomes approved for publishing | Homepage, solution pages, GEO |
| Social profile URLs (LinkedIn, YouTube, …), phone number, CIN | Structured data, footer, Google Business Profile |
| Is "official technology partner for CP Plus" sourced? | CP Plus article |
| Legal review of privacy, terms and cookies wording | Legal pages |

---

## Naming standard (proposed)

| Use | Instead of |
|---|---|
| **OrionAlerts** (text everywhere; "Orion Alerts" only as `alternateName` in structured data) | Orion Alerts, ORION Alerts |
| **Video Management System (VMS)** | — |
| **AI Video Analytics** (one name; slug stays `ai-analytics`) | AI Vision, AI Vision & Real-Time Alerts, Vision AI, OrionAlerts Vision |
| **Camera Health Monitoring** | Health Monitoring, Surveillance Health Monitoring |
| **Asset Tracking** | — |
| **AMC Management** (spell out "annual maintenance contract" on first use) | — |
| **Nebula OS** — the operating system | Vision AI operating system |
| **Vision Copilot** — natural-language video search (a feature, not a page headline) | Smart Search |
| **Orion Cloud** — central multi-site management (define it once) | — |
| CTA labels: **Book a demo** · **Contact us** · **Talk to an expert** | Book a Demo, Request a Demo, Live Demo, Request demo, Talk to Our Expert, Connect With Us |

*⚠ Confirm the module names with the product owner before rolling them out.*

---

## 2. Core pages: Home, About, Nebula OS, Partners, Pricing, Careers, header and footer

Visible body word counts (excluding nav and footer): Home ~226, About ~241, Nebula OS ~1,900 unique, Partners ~211, Pricing ~72, Careers ~67. Nebula OS is the strongest page and the model for the rest.

### 2.1 `/` — Home

**Current state:** A video hero, client-logo marquee, Nebula OS teaser, certificate marks, a carousel of 12 AI use cases and a final CTA. The testimonials section renders nothing because `testimonials` is empty (`src/lib/homepage.ts:339`). No visible sentence says what OrionAlerts is, the five products aren't listed, and there's no FAQ. It reads like a brand reel, not an answer to "what do you sell, and to whom?"

**Content & clarity**
- **P1 — The H1 is only the brand name, and it fades away.** `src/components/landing/Hero.tsx:153-180` renders `<h1>Orion Alerts</h1>` and animates it to invisible after 6 s. The real value proposition is in two `<p>` tags (`Hero.tsx:252-257`).
  - Make the persistent line the H1, and turn the animated wordmark into a decorative element.
  - Suggested H1: *"AI video analytics, VMS and CCTV health monitoring for multi-site enterprises"*.
  - Suggested sub-line: *"OrionAlerts turns the cameras you already own into real-time alerts — and tells you the moment a camera stops recording — across every branch, plant and warehouse."*
- **P1 — Generic value proposition.** "Intelligent alerts for smarter, safer operations." (`Hero.tsx:253`) could belong to any vendor. Use the H1 above.
- **P1 — No "what is OrionAlerts" statement in the visible page.** It exists only in meta tags and structured data. Add a ~50-word paragraph below the hero:
  > OrionAlerts is an enterprise video intelligence platform from Global Ace Technology Pvt. Ltd., Mumbai. It combines a video management system (VMS), AI video analytics, CCTV health monitoring, asset tracking and AMC management on one Linux-based operating system, Nebula OS, and works with existing ONVIF/RTSP cameras.
- **P1 — The five products are invisible on the homepage.** They are only reachable through the menu. `HomepageSolutionsSection` already exists but isn't used; add it to `src/app/page.tsx` after `<LogoMarquee />`.
- **P1 — Logo section copy is buzzwords.**
  - "Trusted technology for smarter, faster, and more connected security operations." (`LogoMarquee.tsx:55-56`) → *"Banks, retail and QSR chains, media houses and public bodies use OrionAlerts to monitor [N] cameras across [N] sites."* The counts need real figures from the team.
  - Heading → *"Trusted by India's leading banks, retailers and public institutions"*.
  - The "Police" logo alt text (`homepage.ts:121`) is vague; name the force or remove the logo.
- **P1 — Certification block is a trust risk.**
  - The ISO 9001, SOC 2 and ISO 27001 logos sit under the caption "Framework marks shown for orientation…" (`CertificateMarquee.tsx:6-50`). To a security buyer, a SOC 2 logo with a disclaimer reads as an unearned claim.
  - Show only certificates actually held, with number, certifying body and scope; remove the rest.
  - "ONVIF-aligned" → *"Works with ONVIF and RTSP cameras"*, unless an official ONVIF conformance declaration exists.
- **P2 — Risky unused data.** The `certificates` array (`homepage.ts:126-193`) lists FedRAMP, NDAA, TAA, FIPS 140-2 and SOC 2 Type II. Delete it so nobody wires it in by accident.
- **P2 — The Nebula teaser is abstract.** "One OS to Run Your Entire AI Ecosystem." (`nebula-os.ts:107`).
  - New heading: *"Nebula OS: one system for video, AI alerts, camera health and maintenance"*.
  - Supporting line: *"…so an alert, an outage and a service ticket all point to the same camera."*
- **P2 — Product named three different ways.** "OrionAlerts Vision" (`UseCasesSection.tsx:142`), "AI Vision" (footer) and "AI Vision & Real-Time Alerts" (solution page). Rewrite the heading as *"12 AI video analytics detections that run on your existing CCTV"*.
- **P2 — Use-case cards show only a title.** The 12 one-line descriptions in `homepage.ts:243-331` are never rendered. Render them, which adds ~120 useful words. Also, 11 of the 12 cards link to the same page; deep-link each to its matching section.
- **P2 — Final CTA is a buzzword triple.**
  - "…transform traditional monitoring into an intelligent, proactive, and automated operation." (`FinalCta.tsx:24-25`) → *"See OrionAlerts on your own camera feeds. We'll show live AI alerts, camera health and AMC tracking for a site like yours."*
  - "Talk to Our Expert" → *"Talk to an expert"*.
- **P3** — A bare countdown "0" appears right after the H1 in the page text search engines read (`Hero.tsx:233-235`).
- **P3** — Heading case is mixed: Title Case on home, sentence case on Nebula. Pick sentence case.

**SEO**
- **P1 — Title** (`src/lib/seo.ts:11-12`): *"AI Video Analytics & VMS Platform in India | OrionAlerts"* (56 chars). The current title is 63 chars, and "video intelligence" has little search demand.
- **P1 — Meta description** (`seo.ts:14-15`): *"OrionAlerts turns existing CCTV into real-time AI alerts and unifies VMS, camera health, asset tracking and AMC for multi-site enterprises in India."* (148 chars)
- **P2 — Missing keywords.** "CCTV", "video management system", "camera health monitoring" and "India" appear nowhere in the body.
- **P2** — Use descriptive alt text on the Nebula images.
- **P2** — Add in-text links to the 5 solutions, `/industries`, `/security` and `/faqs`.

**AEO** — add 4–5 Q&As with FAQ structured data (`ResourcesPreview.tsx` already fetches featured FAQs but isn't used):
- **What is OrionAlerts?** An enterprise video intelligence platform from Global Ace Technology Pvt. Ltd., Mumbai. It turns existing CCTV and IP cameras into real-time AI alerts, and combines a VMS, camera health monitoring, asset tracking and AMC management for multi-site organisations.
- **Does it work with my existing CCTV cameras?** Yes. It connects to supported IP cameras and recorders over ONVIF, RTSP and vendor SDKs, so you add AI alerts and health monitoring without replacing cameras. *[Add a supported-brand list once confirmed.]*
- **Can it monitor many branches or plants?** Yes. Each site runs a Nebula OS node; Orion Cloud gives one central view of alerts, camera health, assets and maintenance.
- **Does my video leave the premises?** Not in the standard deployment. Video and AI processing stay on the on-site node; only health status, alerts and configuration sync to Orion Cloud.

**GEO**
- **P1 — Customer proof is image-only.** AI assistants can't read logos. Add one sentence with real counts (customers, cameras, sites, years in market) and 1–2 approved case outcomes.
- **P2 — Strengthen the company's structured data.**
  - Add `foundingDate`, and make the OrionAlerts ↔ Global Ace relationship explicit (`brand`/`parentOrganization`).
  - Add a `SoftwareApplication` entry on `/`.
  - `knowsAbout` lists "Video Surveillance as a Service", which no page mentions. Remove it or add content that covers it.

### 2.2 `/about` — company identity and trust

**Current state:** A vague H1, two short paragraphs and a CTA. No founding year, team, leadership, customer count, certifications or milestones. It uses "Orion Alerts" (spaced) throughout. A leadership message exists in `about.ts:22-23` but is never shown.

- **P1 — H1.** "Building the future of intelligent video operations" (`about.ts:2`) → *"About OrionAlerts"*.
- **P1 — New lede** (`about.ts:3-4`):
  > OrionAlerts is an AI video analytics and video management platform built by Global Ace Technology Pvt. Ltd. in Mumbai, India. We help enterprises get more from the CCTV they already own: real-time alerts, cameras that are always recording, and maintenance that runs on schedule.
- **P1 — Add a facts block.** Founded [year] · HQ: K Raheja Platinum, Andheri East, Mumbai · Legal entity: Global Ace Technology Pvt. Ltd. · Customers [N] · Cameras monitored [N] · Sites [N] · Industries served · Certifications (verified only). *Needs real figures from the team.*
- **P1 — The module list omits VMS and invents "intelligent reporting"** (`about.ts:10`). Rewrite: *"OrionAlerts combines five modules — video management (VMS), AI video analytics, camera health monitoring, asset tracking and AMC management — on Nebula OS, our Linux-based operating system."*
- **P2** — Cut "…operate more safely, efficiently, and intelligently".
- **P2 — Final CTA** → *"See what OrionAlerts can do with the cameras you already have."*
- **P2** — Show a named leadership section (founder name, role, two-line background). It's a strong trust signal for search engines.
- **P3** — "Need us directly?" → *"Prefer email?"*. Use descriptive alt text on the dashboard image.
- **SEO**
  - **P1 — Title:** *"About Us: AI Video Analytics Company, Mumbai"*.
  - **P2 — Meta:** *"OrionAlerts is an AI video analytics and VMS platform by Global Ace Technology Pvt. Ltd., Mumbai. See who we are, who we serve and how we work."*
  - **P2** — Add `AboutPage` structured data pointing to the organization, and add breadcrumbs.
- **AEO**
  - **Who makes OrionAlerts?** Global Ace Technology Pvt. Ltd., headquartered in Andheri East, Mumbai. *[Add founding year.]*
  - **Is OrionAlerts an Indian company?** Yes. It is built and supported from Mumbai.
  - **What's the difference between OrionAlerts and Nebula OS?** OrionAlerts is the product and brand; Nebula OS is the Linux-based OS it runs on.
- **GEO**
  - **P1** — This is the page AI assistants use to answer "who is OrionAlerts". Put who/what/where/when facts in plain sentences.
  - **P2** — Add a dated milestone timeline.

### 2.3 `/nebula-os` — platform page (the strongest page)

**Current state:** Long-form and well structured: a "What is Nebula OS?" definition, problem, 5 module sections, deployment models, a comparison table, audiences, and an 8-question FAQ with structured data. The gaps are hard numbers, duplicated content, mixed UK/US spelling and coined jargon.

- **P1 — Add a "Specifications" table.**
  - Channels per node by hardware tier; supported GPU/CPU; supported camera brands and ONVIF profiles.
  - Linux base; codecs (H.264/H.265); retention options; appliance models.
  - Typical deployment time; API type (REST/webhooks).
  - *Needs real figures from the team.*
- **P2 — "Camera estate" appears 10+ times.** Indian buyers say "CCTV network" or "cameras across branches". New H1: *"Nebula OS: the operating system that runs your CCTV, VMS and AI video analytics as one"*.
- **P2 — Mixed UK/US spelling.** "licence", "favours", "synchronises" and "Organisations" (`nebula-os.ts:172, 466, 318, 526, 546`) vs "Synchronize" and "initializes". Standardise on US spelling, which most of the site uses.
- **P2 — Audience list omits banking, retail and QSR**, which make up most of the homepage logos (`nebula-os.ts:546`).
- **P3** — Eyebrow → *"OPERATING SYSTEM FOR CCTV & VISION AI"*.
- **SEO**
  - **P2 — Title:** *"Nebula OS: Unified VMS & AI Video Analytics OS"* ("Vision AI operating system" has little search demand).
  - **P3 — Meta:** *"Nebula OS is the Linux-based operating system behind OrionAlerts. It runs VMS, AI video analytics, CCTV health, asset tracking and AMC on one on-prem node."*
- **P2 — Duplicate content.** The architecture block and the comparison render twice, once for desktop and once for mobile (`NebulaArchitecture.tsx:26/75`, `NebulaComparison.tsx:24/77`). That's ~600 duplicated words and 12 repeated headings. Use one responsive layout.
- **P2 — Internal links.** Link "Partner-managed" → `/partners` and "Video never leaves the site" → `/security`, and use descriptive alt text.
- **AEO (P2, need real numbers)**
  - **How many cameras can one Nebula OS node handle?**
  - **What hardware does it run on?**
  - **Does it work if the internet goes down?** Recording, AI detection and local alerts run on site, and sync resumes later. *Confirm this behaviour.*
  - **Is Nebula OS cloud or on-premise?** On-premise first, with optional Orion Cloud.
- **GEO**
  - **P2** — Keep the comparison as a real `<table>`; it's highly citable.
  - **P2** — Add `featureList`, `softwareVersion` and `brand` to the structured data.
  - **P2** — Define "Orion Cloud" and "Vision Copilot" in one sentence each; they're named products with no definition.

### 2.4 `/partners` — partner recruitment

**Current state:** ~211 words of generic bullets, several promising things the FAQ says don't exist yet. The CTA goes to the generic contact form, and there's no eligibility, process or partner FAQ.

- **P1 — Promises not yet delivered.** "Training & certification", "Partner portal… (2FA-ready)" and "Partner lookup by region" (`partners/page.tsx:34-45`) clash with `faqs.ts:101` ("as program rules finalize"). Remove them or label them "Coming soon".
- **P1 — Jargon.**
  - "clear commercial rails" → *"clear margins and deal registration"*
  - "with commercial upside" → *"with recurring service revenue"*
  - "Joint pursuit models" → *"We sell alongside you on large enterprise and government deals"*
  - "Deliver branded experiences where partner rules and packaging allow" → *"Offer OrionAlerts under your own brand (subject to agreement)"*, only if white-label is actually offered
- **P1 — Lead with the real partner value:** *"Deploy OrionAlerts for your clients and run their CCTV maintenance from one console — camera health, asset records and AMC SLAs across every client site."*
- **P2** — Add "How to join" (apply → qualification call → onboarding) and "Who qualifies" (CCTV integrators, AMC/facility-management firms, camera/NVR makers).
- **P2** — Link "Apply to partner" to `/contact?topic=partner` so the "Partnership" option is pre-selected.
- **SEO**
  - **P1 — Title:** *"Partner Program for System Integrators"*.
  - **P1 — Meta:** *"Join the OrionAlerts partner program. System integrators and AMC providers deploy AI video analytics, VMS and CCTV health monitoring for their clients."*
  - **P2 — H1:** *"OrionAlerts partner program for system integrators and AMC providers"*.
- **AEO** — add a partner FAQ: Who can become a partner? · What do partners get? · Can partners manage multiple client sites? · How do I apply? *Confirm the criteria and response time.*

### 2.5 `/pricing` — how pricing works

**Current state:** ~72 words saying there's no public price list. It leaves "How much does OrionAlerts cost?" unanswered, which is the main question this page will rank or be cited for. The eyebrow reads "Company".

- **P1 — Explain the pricing model.**
  - Add a "What affects your quote" list: cameras/channels, sites, modules, AI channels, hardware (bring-your-own vs appliance), deployment (on-prem vs cloud), support tier.
  - State the licensing basis (per channel per year? subscription vs perpetual? hardware separate? pilot available?). *Needs confirmation from the team.*
- **P1** — Add a "what to send us" checklist and the reply time: *"We reply with an estimate within [N] business days."*
- **P2 — New lede:** *"OrionAlerts is quoted per deployment. Your price depends on how many cameras and sites you have, which modules you need, and the support level you choose."*
- **P3** — Eyebrow → *"Pricing"*.
- **SEO**
  - **P1 — Title:** *"Pricing for AI Video Analytics & VMS"*.
  - **P1 — Meta** (the current one reads as negative): *"How OrionAlerts pricing works: quotes are based on camera count, number of sites, modules and support scope. Share your setup for a tailored estimate."*
- **AEO** — add FAQ structured data for: How much does OrionAlerts cost? · Is there a free trial or pilot? · Is hardware included? · Do I pay extra for AI analytics? *Each needs a real answer from the business.*
- **GEO (P2)** — Even a "starting from" figure, or a structured pricing-factors table, gives AI assistants something accurate to quote instead of guessing.

### 2.6 `/careers`

- **P1 — Wrong mailbox.** Applicants are sent to **sales@orionalerts.com** (`careers/page.tsx:32-34`). Use a careers address, or add a "Careers" topic to the contact form (`LeadForm.tsx:133-138`).
- **P2** — Either hide the page from search until roles exist, or enrich it: what the team builds (computer vision, embedded Linux, video engineering, field deployment), the Mumbai office, and how hiring works. Showing a real engineering team also builds trust.
- **P2 — Title:** *"Careers at Global Ace Technology, Mumbai"*.
- **P3** — Add `JobPosting` structured data once roles are listed.

### 2.7 Header and footer

- **P1 — Misleading footer labels** (`Footer.tsx`):
  - "Support" goes to `/faqs` → *"FAQs"*
  - "Find Partners" goes to a recruitment page with no directory → *"Partner program"*
  - "Live Demo" goes to the booking form → *"Book a demo"*
  - "Trust & Security" and "Security" link to the same page; keep one
- **P2 — Footer tagline repeats "intelligence"** (`site.ts:3`). Rewrite: *"AI video analytics, VMS, CCTV health monitoring and AMC management for multi-site enterprises. Built in Mumbai, India."* This also puts a readable company description on every page.
- **P2 — Header.**
  - "Home" is redundant, since the logo links home.
  - "About Us" (header) vs "About" (footer): pick one.
  - "Resources" has `href: "#"` (`Header.tsx:30`); give it a real page, e.g. `/blogs`.
- **P2 — Product name drift.** "AI Vision" / "AI Vision & Real-Time Alerts" / slug `ai-analytics` / "OrionAlerts Vision". Pick one public name, e.g. **"AI Video Analytics"**.
- **P3** — Add `aria-label="OrionAlerts"` on the "ORION Alerts" logo link, so the name screen readers and search engines get matches the company name.

### 2.8 Core pages: quick wins

1. Fix the homepage H1, title and meta (`Hero.tsx:153-257`, `seo.ts:11-15`). About 15 minutes.
2. Add the "OrionAlerts is…" paragraph and the existing `HomepageSolutionsSection` to the homepage.
3. Clean up trust claims: unverified certificate logos, the unused certificates array, and partner features that don't exist yet.
4. Standardise on "OrionAlerts", and fix the misleading footer labels.
5. Rewrite Pricing and About for answer engines: pricing factors, a facts block and FAQs. Move the careers email off sales@.

---

## 3. Solutions pages

### 3.1 Problems shared by all 5 solution pages (one template: `src/app/solutions/[slug]/page.tsx`)

Fix these first; each fix applies to all five pages at once.

1. **P1 — The headline is inside the hero image, so search engines can't read it, and there's no button.**
   - All five pages use the image-only hero branch (`SolutionHero.tsx:38-66`). The H1 is screen-reader-only (`sr-only`; verified in the browser on `/solutions/health-monitoring`).
   - The `tagline`, `headline` and `summary` already written in `site.ts` never appear on the page.
   - Add a visible H1, the existing headline, one sentence, and "Book a demo" plus "See how it works" buttons.
2. **P1 — Structured data describes a video that isn't on the page.**
   - `VideoObject` is emitted for VMS, AI Analytics and Health Monitoring (`page.tsx:84-95`, `videos.ts:28-56`), but no `<video>` renders (verified: 0 videos on the page).
   - Either embed `solution.introVideo`, which exists for all five (`site.ts:58,123,188,260,339`), or remove the `VideoObject`.
3. **P2 — "How it works" steps don't show on 3 pages.** The `workflowSteps` for VMS, AI and AMC (`page.tsx:109-180`) never render, because `SolutionVideoSection` returns early (~`:733-899`). Only Asset Tracking shows its steps.
4. **P2 — Architecture diagrams are images only**, with no heading or caption. The text versions in `site.ts` (95-100, 160-165, 376-381) are never shown.
5. **P1 — The same headings on every page:** "Trusted by Leading Organizations", "What this solution delivers", "What operators notice first", "Ready to Make Your Operations Smarter and Safer?". The pages feel copy-pasted, and the headings waste keyword space. Make them page-specific and phrased as questions.

### 3.2 `/solutions` — overview of the 5 modules

**Current state:** H1 "One platform. Critical capabilities.", logos, one paragraph, then 5 image cards showing only each module's name. The taglines only appear on hover (`SolutionGrid.tsx:255`), so phone users never see them.

- **P1 — H1** (`SolutionGrid.tsx:113`) → *"Video surveillance software for multi-site operations"*. Subhead: *"VMS, AI video analytics, camera health monitoring, asset tracking and AMC management on one platform."*
- **P1 —** Show one line per card saying who it's for and the problem it solves, e.g. *"AMC Management: track maintenance contracts, SLAs and renewals."*
- **P2 —** "…run from a single command layer" → *"…so security, IT and facilities teams work from one system."*
- **P2 —** The "Assets & uptime" filter → *"Maintenance & uptime"*.
- **SEO**
  - **P1 — Title:** *"Video Surveillance Software Solutions"*.
  - **P1 — Meta:** *"Compare OrionAlerts VMS, AI video analytics, CCTV health monitoring, asset tracking and AMC management: one platform for multi-site camera estates."*
  - **P2 —** The hero image has no alt text. Change the H2 → *"Five modules, one surveillance platform"*.
- **AEO**
  - **P1 — Add a "Which solution do I need?" table:**

    | Problem | Module | Who uses it |
    |---|---|---|
    | Cameras across many sites, no single view | VMS | Control room |
    | Need alerts, not footage | AI Video Analytics | Security / safety (EHS) |
    | Cameras silently offline | Health Monitoring | IT / security |
    | Don't know what we own or who has it | Asset Tracking | IT / admin |
    | Missed AMC renewals, slow vendors | AMC Management | Facilities / procurement |

  - **Q&A:** "Can I buy one module on its own?" (the page already says each works "alone or as one connected platform"; ⚠ licensing detail) · "What's the difference between Asset Tracking and AMC Management?"
- **GEO**
  - **P2 —** Add `ItemList` structured data for the 5 services.
  - **P2 —** Reuse the stronger one-liners already in `llms.txt`, which say far more than the live page does.

### 3.3 `/solutions/vms` — Video Management System

**Current state:** Hidden H1 "Video Management System (VMS)", a 70-word overview, 4 outcomes, 6 features and an architecture image. ~440 words. No protocols, camera brands, deployment model or scale figures.

- **P1 — Buzzword overview** (`site.ts:62`: "…enhances situational awareness… future-ready foundation"). Rewrite:
  > OrionAlerts VMS is video management software that brings every camera, recorder and site into one console. Operators watch live video, play back recordings, handle alarms and export evidence without logging in to separate NVRs. It connects existing IP cameras over ONVIF and RTSP, and the same platform runs AI alerts and camera health monitoring.
- **P1 — Outcome titles don't match their descriptions** (`solution-outcomes.ts:69-85`).
  - "Lower operational complexity vs fragmented NVRs" sits on "AI-prioritized alert with live video context" → use *"Replace NVR-by-NVR logins with one console"*.
  - "Foundation for AI analytics overlays" → rename *"Ready for AI alerts"*, described as *"Add AI Video Analytics to the same cameras later"*.
- **P2 — Unsupported claim.** "evidence is found in minutes, not hours" (`SolutionFeatureMediaRows.tsx:134`). ⚠ Real figure, or soften it to *"evidence search without scrubbing footage"*.
- **P2 —** Several "Outcome:" lines just repeat the description above them (Secure Remote Access, Event & Alarm).
- **P2 — "Open Integration…" never names a protocol.** Rewrite: *"Connect ONVIF and RTSP IP cameras and supported recorders through vendor SDKs, so you keep the cameras you have."* ⚠ Named brands.
- **SEO** (target: *video management system software*, *enterprise VMS*, *CCTV VMS*)
  - **P1 — Title:** *"Video Management System (VMS) Software"*. Add a `seoTitle` field to the `Solution` type.
  - **P2 — Meta:** *"OrionAlerts VMS puts live view, playback, alarms and evidence export for every site in one console. Works with existing ONVIF and RTSP IP cameras."*
  - **P2 —** H2 → *"Enterprise video management system features"*.
  - **P2 —** Hero alt → *"OrionAlerts VMS console with live multi-site camera wall, playback timeline and camera health panel"*. Feature screenshots have empty alt text (`alt=""`).
  - **P2 — Overlap with AI Analytics.** VMS outcomes include "AI-prioritized alert". Keep VMS about live view, playback and recording, and link to the AI page instead.
- **AEO**
  - **P1 —** Replace "What this solution delivers" with the H2 *"What is a video management system (VMS)?"* and this answer:
    > A video management system (VMS) is software that connects IP cameras and recorders so operators can watch live video, play back recordings, manage alarms and export evidence from one interface. OrionAlerts VMS runs as a native service of Nebula OS, so multi-site live view and playback sit on the same platform as AI alerts and camera health.
  - **P1 — Add FAQs with structured data** (the helper exists at `jsonld.tsx:82`):
    - **Do I need to replace my cameras?** No; ONVIF/RTSP/SDKs.
    - **What's the difference between a VMS and an NVR?** *"An NVR records cameras at one location. A VMS manages many cameras and recorders across sites from one console, with shared user roles, alarm handling, search and evidence export."*
    - **Does video leave my site?** No; only metadata syncs.
    - **How many cameras and sites can it handle?** ⚠
  - **P2 —** Add a "VMS vs NVR" comparison table and numbered workflow steps.
- **GEO**
  - **P1 — Add a "Works with · Deploys as · Alerts via" fact strip:** ONVIF, RTSP, vendor SDKs · on-site node / multi-site with Orion Cloud / partner-managed (from `nebula-os.ts:380-420`).
  - **P2 — Enrich the Service structured data** (`jsonld.tsx:258-281`):
    - Add `alternateName`, `category`, `audience` and an `@id`.
    - Change `areaServed` from "IN" to "India".
    - Consider `SoftwareApplication` with a `featureList`.

### 3.4 `/solutions/ai-analytics` — real-time AI alerts from existing CCTV

**Current state:** H1 "AI Vision & Real-Time Alerts", a 72-word overview and 6 features, 3 of which overlap on intrusion. The full detection list (`faqs.ts:51`: fire & smoke, loitering, line crossing, crowd, vehicle, process compliance) and the alert channels (`faqs.ts:56`) never appear on this page.

- **P1 — Buzzword overview** (`site.ts:127`: "…passive monitoring to proactive intelligence… actionable insights", with the brand written "ORION Alerts"). Rewrite:
  > OrionAlerts AI video analytics watches live CCTV streams and raises an alert when a defined event happens: an intrusion, a missing helmet or vest, smoke, loitering, or a vehicle in the wrong zone. Alerts arrive with the video clip on the dashboard, mobile app or email, so the right team can respond straight away.

  *(Confirm SMS and WhatsApp before listing them; see the FAQ contradiction in §5.3.)*
- **P1 — Overlapping features.**
  - "Intrusion, PPE & Safety Monitoring", "Intrusion Detection" and "Restricted Area Monitoring" → merge into *"Intrusion & Restricted-Zone Detection"*.
  - Split *PPE Detection* out as its own feature.
  - Add *Fire & Smoke Detection* and *Loitering & Line Crossing*.
- **P2 — Jargon and claims.**
  - "Higher signal-to-noise for security teams" → *"Fewer false alarms for security teams"*.
  - "24/7 coverage without proportional staffing" → *"Every camera watched 24/7, not just the ones on screen"*.
  - "Consistent policy enforcement multi-site" (ungrammatical) → *"The same safety rules at every site"*.
- **SEO** (target: *AI video analytics*, *AI CCTV analytics software*, *PPE detection*)
  - **P1 — Title and visible H1:** *"AI Video Analytics & Real-Time CCTV Alerts"*.
  - **P2 — Meta:** *"AI video analytics that turn existing CCTV into real-time alerts for intrusion, PPE, fire, smoke and loitering, sent to your dashboard, mobile or email."*
  - **P2 —** Make each detection type an H3, so the page can rank for "PPE detection camera", "intrusion detection CCTV" and so on.
  - **P2 —** The architecture image alt says "Vision AI", a fifth name for the same product.
- **AEO**
  - **P1 — H2 "How does AI video analytics work?"**
    > AI video analytics software runs computer-vision models on live camera streams to detect defined events, such as a person entering a restricted zone or a worker without a helmet. When a rule is met, the system raises an alert with the video clip. In OrionAlerts, the AI runtime reads frames from the same video engine that records the cameras.
  - **Q&A:** What can OrionAlerts AI detect? · How are alerts delivered? · Do I need new cameras? · How accurate is it, and how are false alarms handled? ⚠
  - **P2 —** Add a "Motion detection vs AI video analytics" table.
- **GEO**
  - **P1 — Name "Vision Copilot"** (natural-language video search, defined in `faqs.ts:44-46`) on this page. It's a distinctive, quotable feature that's currently missing.
  - **P2 —** State plainly where the AI runs. `site.ts:162` says "edge or cloud", while Nebula OS says on-site GPU. ⚠ Confirm which is accurate.

### 3.5 `/solutions/asset-tracking`

**Current state:** The most complete page: ~540 words, 7 features, a visible 6-step process and benefits. But its scope varies ("surveillance and IT assets" / "IT, surveillance, and operational assets" / "physical assets"), and unused data hints at real-time location tracking ("Tag / beacon layer", "Geofence alerts") that the page never backs up.

- **P1 —** ⚠ **Clarify how assets are tracked.** The page says serial number, QR and barcode. Does it also use RFID, BLE or GPS? If beacon and geofence tracking isn't real, delete that data.
- **P2 —** Workflow step "Asset Procurement": confirm the product actually handles procurement; otherwise use *"Purchase recorded"*.
- **P2 —** "Dashboard • Reports • Analytics" → *"Report and audit"*.
- **P2 —** Benefits heading "What changes for operators" → *"What changes for IT and facilities teams"*; the buyers here aren't control-room operators.
- **P2 —** "locate the exact device in seconds" is an unsupported number.
- **P3 —** "Know where every asset is — and why it matters." → *"Know what you own, where it is and who has it."*
- **Overview rewrite:**
  > OrionAlerts Asset Tracking is one register for every camera, recorder, IT device and piece of operational equipment across your sites. Each record holds the serial number, location, custodian, warranty and documents, and logs every transfer from purchase to retirement. Teams find any asset by serial, QR code or barcode and export a complete audit trail on demand.
- **SEO** (target: *IT asset tracking software*, *asset management software for CCTV*)
  - **P1 — Title:** *"IT & Surveillance Asset Tracking Software"*.
  - **P2 — Meta:** *"Track IT and surveillance assets by serial, QR or barcode: location, custodian, warranty and lifecycle history in one register, with audit-ready exports."*
  - **P1 — Overlap with AMC.** Both pages claim warranty management. Asset Tracking should own *warranty documents*; AMC should own *warranty and contract renewals and claims*. Cross-link the two.
  - **P2 —** This page gets fewer inbound links, because industry pages default to the other three solutions (`site.ts:430`).
- **AEO**
  - **P1 —** H2 *"What is asset tracking software?"*, answered with the overview above.
  - **Q&A:**
    - **How is Asset Tracking different from AMC Management?** *"Asset Tracking answers what you own, where it is and who is responsible for it. AMC Management answers who maintains it, under which contract and SLA, and when coverage renews. Both share the same asset records."*
    - **Does the register stay in sync with the cameras?** Yes; every connected device is also an asset record.
    - **Can I import spreadsheets or sync with ERP?** ⚠
  - **P2 —** Add one line of description under each workflow step.
- **GEO — P1:** The register syncing automatically with live devices is a real differentiator. It's in `llms.txt` but not on the page; make it the lead claim.

### 3.6 `/solutions/amc-management`

**Current state:** ~490 words, 8 features. "AMC" is spelled out only once, deep in the feature copy. The scope is unclear: the meta says "camera estates", the overview says "equipment".

- **P1 —** Spell out the acronym in the H1: *"AMC Management Software for Annual Maintenance Contracts"*.
- **P1 —** "Renewal Alerts & Notifications" and "Automated Reminders" overlap → merge into *"Renewal & PM Reminders"*.
- **P2 —** "Executive-ready estate health view" borrows Health Monitoring's language → *"Contract and SLA status for every site in one report"*.
- **P2 —** "Keep every contract alive — before downtime finds you." → *"Every contract, warranty and service ticket in one place."*
- **P2 —** ⚠ **Decide the scope:** surveillance equipment only, or any facility asset (HVAC, DG sets)?
- **P3 —** The H2 "AMC Management Architecture" shows a process, not an architecture → *"How AMC Management works"*. Render the 6 steps as text.
- **Overview rewrite:**
  > OrionAlerts AMC Management tracks annual maintenance contracts (AMCs) and warranties against each asset. It schedules preventive maintenance, logs service requests, measures vendors against their SLAs and alerts you before any contract or warranty expires. Facilities, procurement and security teams see exactly what is covered, who services it and when it renews.
- **SEO** (target: *AMC management software*, *annual maintenance contract software*)
  - **P1 — Title:** *"AMC & Warranty Management Software"*.
  - **P2 — Meta:** *"AMC management software for annual maintenance contracts, warranties, preventive maintenance, service tickets, vendor SLAs and renewal alerts across sites."*
- **AEO**
  - **P1 —** H2 *"What is AMC management software?"*
  - **Q&A:**
    - **What is an AMC?** *"An annual maintenance contract (AMC) is a yearly service agreement in which a vendor maintains equipment for a fixed fee, usually covering preventive visits, repairs and response-time commitments. It typically starts after the manufacturer's warranty ends."*
    - **Can a camera failure raise a service ticket automatically?** ⚠ `llms.txt` says yes; confirm, then publish.
    - **Can AMC partners and integrators use it?** Yes; the partner-managed deployment.
  - **P2 —** Add a "Spreadsheet AMC tracking vs OrionAlerts" table.
- **GEO — P1:** A camera failure automatically creating a service ticket with the right vendor is the strongest citable differentiator, and it's missing from this page.

### 3.7 `/solutions/health-monitoring`

**Current state:** H1 and title are just "Health Monitoring", which could be read as medical. ~420 words, 6 features. **Two outcome cards were copied from AMC**, and describe vendor and SLA features this module doesn't have.

- **P1 — Copy-paste bug** (`solution-outcomes.ts:115-139`). "Clear partner accountability", "Predictable maintenance spend" and "Executive-ready estate health view" are identical to the AMC outcomes. Replace them with:
  - *"Recording gaps caught early — know when a camera stops recording, not just when it goes offline"*
  - *"Faster fault isolation — see whether the camera, NVR, storage or network failed"*
  - *"Uptime proof for audits — availability reports per site and device"*
- **P1 — Overview** (`site.ts:343`, says "Ensure" twice). Rewrite:
  > OrionAlerts Health Monitoring checks every camera, NVR, server, storage volume and network link around the clock. When a device goes offline, recording stops or storage runs low, it alerts the responsible team before footage is lost. Because the health engine runs inside the platform, it also catches cameras that respond to a ping but have stopped recording.
- **P2 —** Features 01 and 02 overlap → merge them, and add *"Recording verification"*.
- **P2 —** "Reliable, continuously operational camera estate" → *"every camera across all sites"*.
- **SEO** (target: *CCTV health monitoring*, *camera health monitoring software*, *NVR monitoring*)
  - **P1 — Title and H1:** *"CCTV Camera Health Monitoring Software"*.
  - **P2 — Meta:** *"CCTV health monitoring for cameras, NVRs, storage and network links. Get alerts when a camera goes offline or stops recording, before coverage is lost."*
  - **P2 —** "Instant Alerts & Notifications" competes with the AI page → *"Device Failure Alerts"*.
- **AEO**
  - **P1 —** H2 *"What is CCTV health monitoring?"*
  - **Q&A:**
    - **What does it check?** Cameras, NVRs, servers, storage and recording, network links.
    - **How is this different from ping monitoring?** *"Network monitoring only tells you a device responds. OrionAlerts checks from inside the video platform, so it also flags a camera that is online but not recording, a full disk or a broken retention policy."*
    - **How often are devices checked?** ⚠
  - **P2 —** Add a "Ping/network monitoring vs CCTV health monitoring" table.
- **GEO — P1:** *"Pings but stopped recording"* is the most quotable fact the company has, and it currently exists only in `llms.txt`. Put it in the first paragraph.

### 3.8 Solutions: cross-page issues and quick wins

- **P1 — The AI module has five names:** "AI Vision", "AI Vision & Real-Time Alerts", "Vision AI", "AI Video Analytics", plus "OrionAlerts Vision" on the homepage. Choose one name and one keyword description per module.
- **P1 — No FAQs or comparison tables on any solution page.** Add a `faqs` field to the `Solution` type and render it before the testimonials section (`page.tsx:251`).
- **P1 — Hard facts exist elsewhere on the site but not here.** Protocols (`nebula-os.ts:141,299-300,521`), deployment models (`nebula-os.ts:380-420`), alert channels and detection list (`faqs.ts:51,56`).
  - Add a reusable fact strip.
  - ⚠ Still needed from the team: supported brands, maximum cameras per node, typical rollout time, integrations (access control, ITSM/ERP).
- **P2 — Formulaic copy.** All 32 feature descriptions follow the pattern "X—so Y…" and are followed by an "Outcome:" line that often repeats them. Lots of jargon ("estate", "signal-to-noise", "command layer", "overlays", "rule packs").
- **P2 — Unsupported claims:** "minutes, not hours", "in seconds", "24/7 coverage without proportional staffing", "reduce maintenance costs". The testimonials section is empty, so the only proof on these pages is logos. One case study per module would help both conversion and GEO.
- **P2 — Internal linking.** Solution pages link only to each other, in one plain-text line. None of the 4 blog posts links to any solution. Pairs to add:
  - AI ↔ "Alert Fatigue"
  - VMS ↔ the CP Plus post
  - Health Monitoring ↔ "Traditional CCTV"
  - Overview/VMS ↔ "Vision Intelligence Platform"
  - Also link each solution to 3–4 relevant industries.
- **P2 — Two CTA bands** linking to `/contact` with different labels. Keep one, and put a CTA in the hero.
- **P2 — The same image appears 2–3 times per page** (hero, outcome card 1, feature row 1).
- **P2 — Unused data.** Render `summary`, `headline`, `tagline`, `architecture` and `workflowSteps`, or delete them, so stale claims like beacons and geofencing don't resurface.

**Quick wins:**
1. Visible hero headline, sentence and "Book a demo" button (`SolutionHero.tsx:45-66`). All the copy already exists in `site.ts`.
2. Keyword-led titles and metas via a new `seoTitle` field (titles above).
3. Replace "What this solution delivers" with *"What is …?"* plus the ~55-word overviews above, and 3–4 FAQs with structured data per page.
4. Fix the Health outcomes copied from AMC and the mismatched VMS outcome descriptions (`solution-outcomes.ts`).
5. Add the fact strip and the `llms.txt` differentiators (recording verification, automatic service tickets, register auto-sync) to each page. Embed the intro video, or remove the `VideoObject`.

---

## 4. Industries pages (`/industries` and all 30 industry pages)

All 30 pages use one template (`src/components/industries/MigratedIndustryPage.tsx`) filled from `src/lib/industries/content/*.ts`.

**Headline finding: the pages are templated, and parts of them are internal working notes.**
- Each page renders ~2,000 words, but about half of those words are sentences that appear word-for-word on other pages. 62 sentences appear on 25+ of the 30 pages, and most of the rest are fill-in-the-blank templates.
- Genuinely industry-specific copy is only ~400–600 words per page.
- The target keyword "video analytics" appears 0–2 times per page. "Vision Copilot" appears ~18 times and "observation(s)" 30–41 times. Each page carries ~16–22 negations ("not / cannot / never").
- Search engines may treat this as thin, duplicate content. AI assistants will summarise OrionAlerts mainly by what it *can't* do.

### 4.1 ⚠ P1 — Internal notes visible on the live pages (verified on cement, metals-mining and banking)

- **Score-method note on all 30 pages** (`shared.ts:35-36`, shown at `MigratedIndustryPage.tsx:491`): *"…never invent a flattering percentage."* This is an instruction to the content team, shown to buyers.
- **Placeholder score cards on every page.**
  - "Not assessed" and "Proposed dimension · proposal-3.2" are hard-coded (`MigratedIndustryPage.tsx:500-502`).
  - The panel shows "Evaluated checks: Not assessed — awaiting approved product dataset" (`:519-539`).
  - Remove the whole section until real values exist, or replace it with one labelled product screenshot.
- **Hero disclaimer.** "Illustrative photograph — not a verified customer deployment" (`:258-262`) appears on 28 pages. Remove it.
- **The 5th use case on every page** ends with *"use the approved product methodology when demonstrating actual values."*
- **Leaked strings in content files.** Delete or rewrite each:

  | File:line | Text shown to visitors |
  |---|---|
  | `banking.ts:227` | "No such approval is established by this research." *(verified live)* |
  | `banking.ts:232` | "do not assume a universal duration from this content" |
  | `quick-commerce.ts:232` | "Do not substitute restaurant content on this route." |
  | `data-centres.ts:232` | "this specification does not assert an unverified hosting option" |
  | `dark-stores.ts:229, 234` | "This specification does not propose…", "Dark-store content concerns… Quick-commerce content addresses…" |
  | `logistics.ts:234` | "This page focuses on… The fulfilment page focuses on…" |
  | `education-campuses.ts:222`, `textile.ts:223` | "This blueprint…" |
  | `residential.ts:180, 232` | "no universal society-specific AI certificate established here", "outside this blueprint" |
  | `pharma.ts:171` | "do not assume the website's wording proves these controls" |
  | `government.ts:170` | "Do not expose sensitive operational maps in public marketing." |
  | `ecommerce-fulfilment.ts:170, 175` | "public demonstration", "public identifier demonstrations" |
  | `commercial-buildings.ts:229`, `pulp-paper.ts:227`, `healthcare.ts:222` | "not assumed in this scope", "not assumed here", "Not under this scope." |

### 4.2 Template-level problems

- **P1 — Building language on non-building industries.** "Ask your building what needs attention." (`shared.ts:18`) appears on mines, solar farms and telecom towers. The kicker "Building intelligence" (`:320`) and the shared FAQ "Can recommendations guide **property** improvements?" (`shared.ts:63`) have the same problem.
- **P1 — The "use cases" are product features, not industry use cases.**
  - All 30 pages show the same five titles: "Bring the right location into the decision", "Search visual observations in everyday language", "Identify recurring conditions across scenes", "Turn analysis into an improvement decision", "Use scores to structure the next review".
  - All 150 cards carry a "Core capability" label.
  - `claims.ts` already holds real capabilities (PPE exceptions, restricted-zone entry, route conflicts, process interruptions, surveillance health), but none of them shows up as an industry use case.
  - Replace these with 4–6 real use cases per industry. ⚠ Needs product-owner sign-off on which detections are supported per industry.
- **P1 — Section order buries the use cases.** There are 13 H2 sections, and buyers get through three platform explanations before any industry use case. Recommended order:
  1. Hero with a keyword H1
  2. Industry challenges (3–4, India context)
  3. Use cases (what it flags, who's alerted, what it needs)
  4. How it works (Map → Detect → Alert → Review, with Vision Copilot as one step)
  5. Outcomes and pilot metrics (real figures)
  6. Example deployment or case snapshot ⚠
  7. Short, positively framed compliance context
  8. Solutions and related blogs
  9. Industry FAQ with structured data
  10. Related industries and CTA
- **P2 — The Vision Copilot panel** gives the same answer to all three example questions (`VisionCopilotPanel.tsx:92`). The answer only appears after you scroll to it in the browser, so search engines and AI assistants see the questions but no answers. "Illustrative example — not a live product result." is printed twice.
- **P2 — The standards section repeats itself.** E.g. cement prints "Camera monitoring does not certify product quality." twice. The positive `publicSummary` text in `frameworks.ts` is never shown. 13 of 21 frameworks have no source link, and the NDMA source is a press release rather than the guideline.
- **P2 — Good data that's never shown:** `context.buyers` ("Plant heads; EHS managers…") would make a good "Built for" line.
- **P2 — Broken final CTA template.**
  - "Ask Vision Copilot about your {name}." produces "your education and campuses", "your mining and metals" and "your hotels and hospitality".
  - The body copy is identical on all 30 pages.
  - "Talk to Our Expert" → *"Talk to an expert"*.
  - "Explore Vision Copilot" only scrolls down the same page.
- **P2 — The solutions block is identical on all 30 pages** (AI Analytics, VMS, Health Monitoring). Asset Tracking and AMC are never linked, even where they fit (bank branches, hospitals, telecom). ⚠ Confirm. "AI Vision + Vision Copilot" is yet another product name.
- **P2 — Missing from the template:**
  - Industry pain points with India specifics.
  - Outcome numbers ⚠ and a case example ⚠.
  - Customer logos (the migrated pages show none).
  - Integrations and supported cameras.
  - A one-line "OrionAlerts by Global Ace Technology Pvt. Ltd., Mumbai" statement. "India" appears 0–1 times per page.
- **P2 — Indian regulations to mention where genuinely relevant** (after compliance review):
  - Factories Act 1948 / OSH Code 2020 (manufacturing, textile, polymers, paper, automotive, cement)
  - BOCW Act (construction)
  - OISD alongside PESO (oil and gas)
  - Mines Act and DGMS (mining)
  - RBI/IBA CCTV guidance (banking)
  - BCAS (aviation)
  - GDP (pharma cold chain)
- **P1 — Structured data.**
  - FAQ structured data is on **0 of 30 pages**, even though each page shows 9 FAQs.
  - 6 of those 9 FAQs are identical on every page (`shared.ts:46-77`); include only the industry-specific ones.
  - Add `Service` structured data (e.g. `serviceType` "AI video analytics for cement plants", provider = the company, areaServed India).
  - The `WebPage` entry isn't linked to the company.
- **P2 — Pages went live before sign-off.** `registry.ts:77-83` publishes any record marked "reviewed", but `ledger.ts` still shows `claimReview: "pending"` for all 30. Industry capability claims in `claims.ts` are also `ownerReview: "pending"`.
- **P2 — Images.**
  - Retail and textile hotlink Unsplash photos for the hero and share image, which is a licensing and brand risk.
  - Hero alt text is meta-commentary ("…photograph used for industry context"). Describe the scene instead, e.g. *"Trucks queuing at a cement plant loading bay"*.

### 4.3 `/industries` overview page

- **Title:** "Industries | OrionAlerts" → *"AI Video Analytics by Industry | OrionAlerts"*.
- **Meta:** it mentions "playbooks" and "energy", but there's no energy page.
- **H1:** "Modern protection for any space." (`IndustryGrid.tsx:183`) → *"AI video analytics for 30 industries"*.
- **Cards:**
  - Names are `<span>`s, not headings.
  - The tagline only shows on hover (`:324`), so phone users never see it.
  - All 30 taglines are "Use Vision Copilot to connect mapped camera observations with decisions about…".
  - Taglines live in two places (`site.ts:459-762` and each content file's `cardSummary`).
- Add an intro paragraph and `ItemList` structured data.

### 4.4 Detailed reviews of the 12 most important pages

Unless a page says otherwise, the title pattern is **"AI Video Analytics for {Industry} | OrionAlerts"**, with a matching H1.

**Manufacturing (P1, flagship)**
- H1 "Vision Copilot for Manufacturing Operations" → *"AI Video Analytics for Manufacturing Plants"*.
- Lede → *"Get alerts when PPE is missing at production entries, someone enters a machine or maintenance zone, or material piles up at a transfer point — using compatible CCTV cameras you already have. Ask Vision Copilot what happened last shift and see the clip, the location and who should act."*
- Split the 34-word context sentence: *"Send PPE and flow alerts to the production supervisor and EHS, not a general security desk."*
- FAQ "Can AI Vision calculate OEE from CCTV?" → *"Not on its own. Video shows visible stoppages and material build-up; OEE also needs availability, performance and quality data from your MES or PLCs."*
- Meta → *"AI video analytics for factories: PPE and restricted-zone alerts, forklift–pedestrian crossings and material build-up, using compatible existing IP cameras."*
- Make this the hub for automotive, polymers, textile and paper.
- **AEO**
  - **What can AI video analytics detect on a factory floor?** *"Typical starting points are missing helmets or hi-vis vests at production entries, people entering configured machine or maintenance zones, pedestrians in vehicle lanes, and material piling up at a transfer point. Alerts reach the production supervisor or EHS with the clip and location. Machine OEE and product quality need production-system data, not CCTV alone."*
  - **Can AI CCTV help with Factories Act or OSH Code compliance?** *"It can provide time-stamped evidence for internal safety audits, such as PPE exceptions and unauthorised entry into machine zones. It does not certify compliance; statutory duties stay with the occupier."*

**Cement (P1)**
- Grammar: "across loading zones across comparable dispatch periods" (`cement.ts:90,158`) → *"across loading zones and comparable dispatch periods"*.
- "A useful system needs realistic detection boundaries…" → *"Dust will limit some views. Plan lens cleaning, and expect the system to flag low-visibility periods rather than guess."*
- The standards section leads with BIS/QCO product certification, which isn't relevant to a safety buyer. Lead with the Factories Act/OSH Code, and note DGMS for captive mines.
- Missing use cases: PPE at packing and conveyor entries; truck waiting time at loading bays and weighbridge; conveyor-zone entry; spillage; camera health in dust.
- Meta → *"AI CCTV for cement plants: PPE alerts at packing and conveyor areas, truck queues at loading bays, transfer-point zone entry and camera health in dusty conditions."*
- **AEO**
  - **How can AI CCTV improve safety in a cement plant?** *"AI video analytics watches existing CCTV views for events a shift team can act on: missing helmets or hi-vis vests at packing-plant and conveyor-area entries, people entering configured conveyor or transfer-point zones, and trucks queuing at loading bays. Each alert carries the camera, location and clip. Dust and lighting affect accuracy, so every view is validated in a pilot."*
  - **Does video analytics work in dusty conditions?** *"It can, but visibility drops in heavy dust, so results depend on camera placement, cleaning access and exposure settings. Camera health monitoring flags views that have become unusable."*

**Pharma (P1)**
- "…network segment scoped and documented to the standard the facility applies to GxP-adjacent systems" → *"…a documented network segment that QA has approved for systems near GMP areas."*
- Delete "do not assume the website's wording proves these controls" (`:171`) and use *"Ask us for the documentation your validation team needs."* ⚠ Confirm what documentation exists.
- Part 11 FAQ → *"No software is Part 11 compliant on its own. It depends on how your site uses and controls the records. We can share our access-control, audit-trail and export features for your validation team to assess."* ⚠
- Meta → *"Flag gowning exceptions and controlled-area entry in pharma plants, retrieve clips fast for QA investigations and confirm CCTV is recording. Built for GMP-aware teams."*
- **AEO**
  - **Can AI check gowning compliance?** It flags visible gowning exceptions at defined checkpoints for QA review. It can't confirm sterility or full GMP compliance.
  - **Is CCTV footage a GMP record?** Only if QA relies on it for a regulated decision.
- Add the CDSCO source link for Schedule M.

**Banking (P1)**
- "Is OrionAlerts RBI approved? No such approval is established by this research." → *"RBI does not run an approval or certification scheme for CCTV or video analytics vendors. Banks apply RBI directions to their own controls. OrionAlerts supports those controls with role-based access, audit logs and retention settings."* ⚠ Confirm the features.
- Retention → *"Retention follows your bank's policy and applicable RBI/IBA guidance; set it per branch in the platform."* ⚠
- Heading "Review a physical event without inferring financial wrongdoing." is defensive → *"See every branch camera, alert and recording from one place."*
- The real buying case is underplayed: DVRs going offline across hundreds of branches (Health Monitoring), after-hours entry, ATM and e-lobby coverage, CCTV AMC.
- Title → *"Bank Branch CCTV Monitoring & AI Alerts"*.
- Meta → *"Monitor CCTV across every bank branch: after-hours entry alerts, offline camera and recording-gap detection, and fast clip retrieval for regional security teams."*
- **AEO — How can banks monitor CCTV across hundreds of branches?** *"A central team needs two things: alerts for after-hours activity at branch entrances, and proof that every branch camera and recorder is actually recording. OrionAlerts combines AI video alerts with camera health monitoring, so regional security sees offline cameras, recording gaps and flagged events by branch instead of checking each DVR."*

**Oil & Gas (P1)**
- The "Hazardous-area classification" requirement appears twice (`oil-gas.ts:175,177`).
- Heading → *"Verify access, tanker-bay and perimeter events before you escalate."*
- PESO FAQ → *"Software isn't PESO-approved; cameras and enclosures are. Any camera in a classified hazardous area must carry the approval required for that zone. We check classification before choosing hardware."*
- Add OISD.
- Title → *"AI Video Analytics for Oil & Gas Terminals"*.
- **AEO — How is AI CCTV used at petroleum terminals?** Controlled-zone entry, PPE exceptions, tanker approach lanes and after-hours perimeter events, verified by an operator before escalation. Hazardous-area cameras need approved hardware.

**Logistics (P1, hub)**
- Replace the meta-commentary FAQ (`:232-234`) with *"Which warehouse areas should we cover first?"*: docks, cross-aisles where forklifts meet pedestrians, and staging lanes.
- Delete the unsourced filler "Material-handling and powered-vehicle hazards are documented warehouse concerns."
- H1 → *"AI Video Analytics for Warehouses and Logistics"*.
- **Keyword map, to stop these pages competing with each other:**

  | Page | Primary keyword |
  |---|---|
  | logistics | warehouse CCTV / video analytics |
  | ecommerce-fulfilment | fulfilment centre / sortation CCTV |
  | dark-stores | dark store CCTV |
  | quick-commerce | multi-site q-commerce monitoring |
  | cold-storage | cold storage CCTV |

- **AEO — Can AI cameras reduce forklift–pedestrian incidents?** It flags pedestrians in forklift lanes, blocked cross-aisles and dock congestion. It doesn't replace segregation, speed controls or training. Start with 2–3 crossings.

**Quick Commerce (P1)**
- Delete "Is this the same as QSR monitoring? … Do not substitute restaurant content on this route." Note that `/qsr` and `/quick-service-restaurants` redirect *to* this page, which then tells QSR visitors it isn't about QSR. Fix one or the other.
- "Can video prove a ten-minute delivery promise?" → *"Can video explain a delayed order?"* It shows what happened at pickup; delivery times come from your order system.
- Position this page around network-level oversight, separate from dark stores.
- Title → *"Multi-Site Video Monitoring for Quick Commerce"*.

**Dark Stores (P1)**
- `:229` → *"No. OrionAlerts looks at aisles, handoff areas and stockrooms, not individual pickers' speed."*
- `:234` → a link: *"Running many dark stores? See Quick commerce for network-level monitoring."*
- Delete "The immediate need is practical site visibility rather than broad network performance claims."
- **AEO — What should CCTV cover in a dark store?** The dispatch handoff point, the busiest aisles and high-value stock areas, with alerts to the store manager.

**Retail & Shopping (P1)**
- "queues and service-area decisions" produces "decisions about queues and service-area decisions" → *"checkout queues and stockroom access"*.
- Replace the hotlinked Unsplash hero.
- Shoplifting FAQ → *"It doesn't label people as shoplifters. It flags specific events, such as after-hours stockroom entry, for staff to review alongside POS records."*
- Title → *"AI Video Analytics for Retail Stores & Malls"*.
- **AEO — How can AI shorten checkout queues?** It estimates queue length at checkout approaches and alerts the floor manager when a threshold is passed.

**Textile & Garments (P1)**
- No other industry page links to it. Add it to the related lists on manufacturing, paper and polymers.
- Replace the hotlinked Unsplash hero.
- `:223` → *"No. OrionAlerts looks at where material piles up and why, not at individual workers."*
- "…should not reduce a worker's contribution to time spent moving in view" → *"We measure process conditions, not how long a worker is on camera."*
- GOTS and OEKO-TEX are product certifications; demote them and add the Factories Act/OSH Code.
- Title → *"Textile & Garment Factory AI CCTV"*.

**Data Centres (P2)**
- ⚠ The "Will footage remain on premises?" answer needs a real deployment answer.
- "The useful buying case is quicker physical-event review…" → *"Find the right access-lobby clip fast and confirm every security camera is recording."*
- Remove the standards text printed twice.
- **AEO — How do data centres match CCTV to access-control logs?** Each badge or door event pulls the clip from the mapped entrance camera at that moment.

**Education & Campuses (P2)**
- `:222` → *"Not in this scope. Campus deployments here focus on safety events, not biometric attendance."*
- CTA "your education and campuses" → *"…about your campus"*.
- Split the school and university examples.
- Title → *"AI CCTV for Schools & College Campuses"*.
- **AEO — How can schools use AI CCTV safely?** Start with entrances and boundaries for a documented safety purpose, exclude toilets and changing rooms, limit access, and review CBSE safety provisions.

### 4.5 The other 18 pages

| Page | Main issue | Suggested fix | Priority |
|---|---|---|---|
| automotive | Score dimension names and groups are swapped; hero label inconsistent; competes with manufacturing | Fix dimensions; lead with line-side buffers, robot-cell entry, AGV/forklift crossings | P2 |
| commercial-buildings | Card label "Commercial" is vague; tenant FAQ is a non-answer; leak at `:229` | State the permission model ⚠; add parking and lift-lobby use cases | P2 |
| ecommerce-fulfilment | "public demonstration" leaks; "FC" jargon; overlaps logistics | Remove leaks; target "fulfilment centre / sortation CCTV" | P1 |
| cold-storage | One thin context paragraph; strongest angle buried | Lead with the door-activity vs temperature-excursion Q&A; add GDP | P2 |
| airports-ports-railways | Three sectors on one page; the card omits railways | One H2 per transport mode; add BCAS | P2 |
| healthcare | Entirely defensive; odd FAQ "Does NABH require OrionAlerts?"; only 1 page links to it | Q: "How can hospitals use CCTV analytics without monitoring patients?" | P2 |
| hotels-hospitality | Broken CTA; non-answer FAQ; thin | Add back-of-house and loading-dock use cases | P3 |
| utilities | "Utility Infrastructure" is vague | Name the asset types ⚠; *"Substation & Utility Site CCTV Analytics"* | P2 |
| construction | Unsourced filler; no BOCW Act | PPE at the gate; crane and lifting-zone entry | P2 |
| pulp-paper | FSC and fibre-traceability jargon; title doesn't match the name | Lead with roll handling and forklift crossings | P3 |
| polymers-plastics | EPR isn't relevant to the buyer | Use hazardous-process and PESO context | P3 |
| residential | Leaks at `:180` and `:232` | Target "CCTV for housing societies / gated communities" | P1 |
| government | Leak at `:170`; H1 "Public Facilities" vs title "Public Infrastructure" | Align title and H1 | P1 |
| solar-renewable | All three FAQs answer "No"; "O&M" unexplained | Add a positive Q&A on remote intrusion and theft verification | P2 |
| food-fmcg | Typo "Prioritise priority camera availability" (`:217`); "fmcg" casing (fixed earlier today); vague "clothing observations" | Fix the typo; name hairnet/apron detection only if supported ⚠ | P1 |
| metals-mining | Broken CTA; unsourced filler | Add the Mines Act and DGMS | P2 |
| sports-events | "passenger guidance" in a stadium; NDMA source is a press release | → "spectator guidance"; link the NDMA guideline | P2 |
| telecom-remote | Best content of the 30, but still templated | Lead with the planned-visit Q&A below | P3 |

**Extra answer drafts**
- **Telecom — How do tower companies verify an intrusion without sending a technician?** *"An entry alert at the shelter or compound is checked against the day's planned maintenance visits. If no visit is scheduled, the operations centre reviews the clip before dispatching anyone. Camera and link health are shown with the alert, so a dropped connection is not mistaken for a quiet, secure site."*
- **Cold storage — Can CCTV help investigate a temperature excursion?** *"Yes, as context. Video can show when a chamber door stayed open, how long loading took and who entered the cold zone around the time a sensor logged an excursion. It cannot measure product temperature, so pair the footage with calibrated sensor records."*

### 4.6 Industries: cross-page issues and quick wins

- **Inconsistent titles and names.** Each page uses up to four different names for itself. Cement, for example, is "Cement Plant AI Video Analytics" (title), "Vision Copilot for Cement Plants" (H1), "Cement & Building Materials" (breadcrumb) and "Cement" (card). Every H1 leads with "Vision Copilot", which nobody searches for. Use one pattern: **"AI Video Analytics for {Industry}"**.
- **Groups of pages competing for the same searches:**
  - logistics / fulfilment / dark stores / quick commerce / cold storage
  - manufacturing / automotive / polymers / textile / paper
  - commercial buildings / residential / hotels
  - utilities / solar / telecom

  Give each page a distinct target search. Make manufacturing and logistics the hubs.
- **Tone.** The pages read as compliance disclaimers. Keep one short "Limits" note per page and lead with capabilities.
- **Sources.** Add official URLs for CDSCO, FSSAI, MeitY (DPDP), RBI, NABH, CEA, CPCB, STQC and CBSE.
- **Internal links.**
  - Solution pages and blogs link to zero industry pages, and industry pages link to no blogs.
  - Few pages link to textile (0), healthcare (1) and banking (1).

**Quick wins:**
1. Remove the leaked internal text listed in §4.1 (1–2 hours, no design change).
2. Rewrite all 30 titles, metas and H1s to the keyword pattern, each with a unique ~150-character meta. Fix the CTA heading generator.
3. Add FAQ structured data (industry-specific FAQs only) and `Service` structured data. Add 2–3 positive Q&As per page, and render the Copilot example answers in the server HTML.
4. Fix the template strings: "Ask your building…", "Building intelligence", "property improvements", "across X across", "Prioritise priority", "service-area decisions", "passenger guidance", the duplicate oil & gas requirement, "Talk to Our Expert".
5. Internal links:
   - An "Industries we serve" block on each solution page.
   - 1–2 blog links per industry page.
   - More pages linking to textile, healthcare and banking.
   - Render the unused "Built for" field.

**The bigger P1 after the quick wins:** replace the five identical feature cards with 4–6 real industry use cases, built from the capabilities in `claims.ts`. ⚠ Needs product-owner sign-off.

---

## 5. Blogs, FAQs, Docs, Contact, Book a demo and Legal pages

### 5.1 `/blogs` — blog index

**Current state:** 4 posts (`data/blogs.json`). The newest is dated 4 Aug 2026, so nothing has been published for ~12 weeks. H1: "Insights for operators who can't afford noise." Cards show only relative dates ("Posted 2 mos ago").

- **P1 —** "{n} articles · Updated regularly" (`BlogsExperience.tsx:74`) isn't true. Show *"4 articles · Last published 4 Aug 2026"*, calculated from the newest post, or drop the claim.
- **P2 —** The lede mentions "Smart Search", which has no page (`BlogsExperience.tsx:70-71`). Rewrite: *"Practical guidance on AI video analytics, multi-site VMS, camera health monitoring and AMC operations for enterprise and industrial sites."*
- **P2 —** The categories "Video Intelligence" and "Vision Intelligence" (`blogs.ts:27-34`) are near-duplicates. Map categories to the product areas instead: AI Video Analytics · VMS · Camera Health · Asset & AMC · Industry Guides.
- **P3 —** Show absolute dates on cards ("4 Aug 2026 · 9 min read").
- **P3 —** "Connect With Us" doesn't match the "Contact Us" used elsewhere.
- **SEO P2:**
  - Title → *"AI Video Analytics & CCTV Operations Blog | OrionAlerts"*.
  - Meta → *"Guides on AI video analytics, enterprise VMS, CCTV camera health and AMC management for multi-site operations in India, from the OrionAlerts team."*
  - H1 → *"OrionAlerts Blog: AI video analytics, VMS and CCTV operations"*, keeping the current line as a subheading.
  - Add `Blog` structured data with the list of posts.
- **GEO —** `llms.txt` lists every post with its excerpt, so a weak excerpt flows straight into AI answers. Fix the excerpts first.

### 5.2 Blog article template (affects all posts)

- **P1 — Articles can't contain links.** The text renderer supports only bold, italic and code (`BlogArticleContent.tsx:3-5`). No post can link to a solution, industry or Nebula OS page. Add `[text](/path)` support; every internal-linking recommendation depends on it.
- **P1 — Headings are silently dropped.** `parseBlogBody` (`blogs.ts:240-249`) only turns 18–70-character lines without ending punctuation into headings, and makes them H3.
  - "Fall Detection" (too short) becomes a paragraph.
  - Every question-style heading ("Why Use a Central AI Server…?", all 7 FAQ questions) becomes a paragraph.
  - Question headings are exactly what answer engines look for.
- **P1 — Empty contents box.** The table of contents only uses H2s (`BlogArticleContent.tsx:173-176`). The CP Plus article has none, so readers see the placeholder *"Section headings will appear here."* That text is live now.
- **P1 — Read times are inflated and hard-coded.** Alert Fatigue is 196 words but says "4 min"; Vision Intelligence is 247 words, "5 min"; Traditional CCTV is 312 words, "6 min". Use the existing `estimateReadTime()` (`blogs.ts:139`).
- **P2 — Authors have no credibility.**
  - "Ayushi — Senior Finance Manager" wrote the CCTV operations piece.
  - "Kawaljeet — Head of Growth Marketing" has no surname.
  - Two posts are by "OrionAlerts Team".
  - Use full names, a relevant role, a one-line bio and a LinkedIn link. Add "Reviewed by [product/solutions expert]" on technical posts.
- **P2 — Update dates aren't used.** "Updated on" is never shown, and the sitemap uses `date` instead of `updatedAt` (`sitemap.ts:80`).
- **P2 — Share titles are cut off twice.** `clipTitle` runs at 60 and then 70 characters (`seo.ts:72-77`), giving "Transforming CP Plus Surveillance into Intelligent Video… |…".
- **P2 — Article structured data** (`jsonld.tsx:122-149`):
  - Use `Organization` as the author for "OrionAlerts Team".
  - Link the publisher to the company.
  - Use `BlogPosting` and add `inLanguage`, `wordCount` and `about`.
- **P2 — "Related posts" are the same two everywhere** (`blogs.ts:272-284`).
- **P3 —** Three hero images are Unsplash stock photos, and their alt text just repeats the title. Use product screenshots or diagrams.
- **P3 —** Three CTA labels on one page: "Request a Demo", "Book a demo", "Book a Demo".

#### CP Plus article — the strongest post (~1,840 words)

- **P1 — The URL is cut off.** It ends in "-ori". Change it to `/blogs/cp-plus-ai-video-analytics-integration` with a permanent redirect from the old URL.
- **P1 — The 92-character title is cut off in search results.**
  - H1: *"CP Plus AI Video Analytics: Add Real-Time Alerts to Existing CP Plus Cameras"*.
  - SEO title: *"CP Plus AI Video Analytics Integration | OrionAlerts"*.
- **P1 — Generic excerpt.** Rewrite: *"How OrionAlerts adds real-time AI video analytics to existing and STQC-certified CP Plus cameras and NVRs: compatibility checks, use cases and a phased rollout."*
- **P1 — Add takeaways** (the facts are already in the post):
  1. Connects compatible CP Plus cameras, DVR/NVRs and STQC models through the API engine.
  2. The NVR keeps recording while a central AI server handles detection.
  3. Compatibility is confirmed model by model.
  4. A phased rollout path.
- **P1 — Rebuild as question H2s:**
  - "Can OrionAlerts work with existing CP Plus cameras?"
  - "How does the API engine connect CP Plus devices?"
  - "What about STQC-certified cameras?"
  - "Which AI use cases can run on CP Plus streams?"
  - "Why use a central AI server instead of only an NVR?"
  - "How do alerts reach the right team?"
  - "FAQs"
- **P1 — Unsourced high-stakes claims.**
  - Add links to the official STQC listing and CP Plus's announcement for the STQC statements (`blogs.json:134-142`).
  - "Official technology partner for CP Plus" (`:26`) needs a source, or should drop "official". Lines 401-403 already say just "technology partner".
- **P2 —** "Orion Alerts" appears 37× in `blogs.json`; change to "OrionAlerts".
- **P2 — Add links:**
  - "real-time alerts" → AI analytics
  - "Camera Tampering and Health Alerts" → health monitoring
  - "multi-location" → VMS
  - "API engine" → Nebula OS
  - schools, hospitals and factories → their industry pages
- **P3 —** Trim the 8–11-bullet marketing lists to 5 or fewer. Keep "Your cameras are already watching. Orion Alerts helps them understand." (with "OrionAlerts" spelled as one word).

#### Other posts

- **Alert Fatigue (196 words).**
  - P1: expand to 1,200–1,500 words.
  - Retitle: *"Alert Fatigue in CCTV Control Rooms: Causes, Costs and How to Fix It"*.
  - Question H2s: What is alert fatigue in video surveillance? · Why do more alerts make sites less safe? · How does AI prioritisation reduce false alarms? · Which metrics show it's improving?
  - Add anonymised real data or an operator quote. *Needs team input; don't invent numbers.*
- **What Is a Vision Intelligence Platform? (247 words).**
  - P1: expand into a 1,500+ word pillar. Retitle: *"…Definition, Components and How to Evaluate One"*.
  - Add a comparison table: NVR vs VMS vs video analytics vs vision intelligence platform.
  - Add an evaluation checklist.
  - Replace the "Smart Search" mention, which has no page.
  - Ready-made answer: *"A vision intelligence platform is software that sits above CCTV and IP cameras, applies computer vision and policy rules to live video, and turns events into prioritised alerts, searchable evidence and maintenance actions across sites. Unlike an NVR, which records, or a VMS, which views and manages video, it is built to drive decisions."*
- **Why Traditional CCTV Monitoring Is No Longer Enough (312 words, by a Senior Finance Manager).**
  - P1: reassign it to a product or operations author, or lean into the finance angle with *"The Hidden Cost of Passive CCTV Monitoring"* and a simple cost model.
  - Add question H2s and a TL;DR.
- **GEO for all posts:**
  - Name the company once: *"OrionAlerts, built by Global Ace Technology Pvt. Ltd., Mumbai"*.
  - Cite a source for every statistic.
  - Put a quotable one-sentence answer directly under each heading.

### 5.3 `/faqs` — buyer FAQ (19 Q&As, with FAQ structured data)

**Current state:** Answers are present in the server HTML and match the structured data, which is good. Answers run only 19–37 words, while 40–60 is ideal. "Orion Alerts" appears 22× and "OrionAlerts" once.

- **P1 —** Every answer is under 40 words, and several don't start with the answer.
- **P1 —** Standardise on "OrionAlerts" throughout `faqs.ts:15-96`.
- **P1 — Answers that contradict other pages:**
  - Industries (`faqs.ts:31`) lists 13 industries, including "Smart Infrastructure", which has no page. The site has 30. Rewrite: *"OrionAlerts serves 30+ industries, including manufacturing, logistics, pharma, cement, oil and gas, data centres, healthcare, banking and commercial buildings."* Link to `/industries`.
  - Alerts "by SMS, WhatsApp" (`:56`). The CP Plus post lists only dashboard, mobile and email. *Confirm with the team.*
  - Cameras: "most IP cameras and RTSP" (`:25-26`) vs Nebula OS's "ONVIF, RTSP and vendor SDKs". Both pages publish FAQ structured data, so two different answers compete. Align them.
- **P2 — Regroup the questions:**
  - About OrionAlerts · Cameras & Integrations · Deployment & Data
  - AI Detections & Alerts · Health, Assets & AMC · Pricing, Onboarding & Support
  - Security & Compliance · Industries · Partners
- **P2 —** "…as program rules finalize" (`:101`) reads as unfinished.
- **P2 —** "Are Book a Demo and Contact the same?" is site housekeeping, not a buyer question. Replace it with "How do I get a demo?"
- **P2 —** The hero chip "Human backup · Talk anytime" promises 24/7 contact that isn't published. Use *"Talk to an expert"*.
- **P3 —** "Absolutely." → "Yes."
- **Rewritten answers (facts already on the site):**
  - **What is OrionAlerts?** *"OrionAlerts is an enterprise video intelligence platform from Global Ace Technology Pvt. Ltd., Mumbai. It adds real-time AI video analytics to existing CCTV and IP cameras and combines it with a video management system (VMS), camera health monitoring, asset tracking and AMC management in one platform, running on the Nebula OS operating system across single or multiple sites."*
  - **Do I need to replace my existing cameras?** *"No. OrionAlerts connects to most existing IP cameras and recorders through ONVIF, RTSP and vendor SDKs, so you can add AI analytics without replacing working hardware. Compatibility is confirmed model by model during solution design. Older analog cameras may need an encoder or a recorder-level stream."*
- **Missing buyer questions** (drafts below are based on facts already on the site; ⚠ = needs team input):
  - **How much does it cost?** Scoped per deployment, by camera count, sites, modules and support scope. ⚠ Licence model.
  - **On-premise or cloud?** *"Both. In the standard deployment an on-site Nebula OS node runs video, recording and AI inside your network; only health, alert and configuration metadata sync to Orion Cloud."*
  - **Does our video leave our site or India?** By default, no; only metadata syncs. ⚠ Orion Cloud hosting region, whether a no-cloud mode exists, and the DPDP Act position.
  - **Which cameras and brands are supported?** ONVIF/RTSP cameras and recorders plus supported SDKs, including compatible CP Plus models. ⚠ List of tested brands.
  - **Does it need a GPU?** The site node uses GPU-accelerated decoding and inference, sized per deployment.
  - **Does it work on weak internet?** Yes. Detection runs on site; only lightweight metadata syncs.
  - **How accurate are detections?** It depends on placement, lighting, resolution and use case; each view is assessed during design. ⚠ Pilot process.
  - **How long does onboarding take?** ⚠
  - **What support and SLAs do you offer?** ⚠ Hours (IST), channels, response times.
  - **Which certifications do you hold?** ⚠ List held certificates with scope.
  - **Who makes OrionAlerts and where are you based?** Global Ace Technology Pvt. Ltd., K Raheja Platinum, Marol, Andheri East, Mumbai 400059.
- **SEO P2:**
  - Title → *"OrionAlerts FAQ: AI Video Analytics, VMS & Deployment"*.
  - H1 → *"OrionAlerts FAQs"*, keeping the current line as a subheading.
  - Wrap each question in an `<h3>`; today they're `<span>`s inside buttons (`FaqsExperience.tsx:314`).
  - Add breadcrumbs.
  - Allow one link per answer.
- **GEO —** Google now shows FAQ rich results mainly for government and health sites. Treat FAQ structured data as machine-readable Q&A for AI answers; the real lever is self-contained 40–60-word answers that name "OrionAlerts".

### 5.4 `/docs` — documentation placeholder

- **P2 — Thin page with a negative search snippet:** "Public product documentation is not hosted on this site yet." Two options:
  - (a) hide it from search, remove it from the sitemap and rename the footer link; or
  - (b) build a real hub from facts that already exist: deployment models, protocols (ONVIF/RTSP/SDKs), hardware sizing, updates, CP Plus integration notes and links to the FAQs.
- **P3 — Copy if kept:** *"Product documentation is shared with customers during onboarding. For deployment models, camera compatibility and integrations, start with the FAQs and Nebula OS overview, or book a technical walkthrough."*

### 5.5 `/contact`

- **P1 — Internal status shown to visitors.** "…a separate CRM/ERP store is not connected yet." (`LeadForm.tsx:169-183`). Replace with: *"We use these details only to respond to your request. See our Privacy Policy for how long we keep them and your rights, or email privacy@orionalerts.com to request access or deletion."* Have whoever owns legal copy review it.
- **P2 —** Remove "Submissions are rate-limited by IP." (`:164-166`), or replace it with a reply-time promise (⚠ e.g. "We reply within one business day").
- **P2 —** Drop the eyebrow "Contact request · processed by OrionAlerts" (`:89-91`), which reads like system text.
- **P2 —** Label "Phone (optional)" and mark required fields with *.
- **P2 — H1 and lede.**
  - "Meet the team behind the reply" → *"Contact OrionAlerts"*.
  - The lede "Prefer a human path over a demo form?" implies the demo isn't human. Rewrite: *"Questions about sales, support, partnerships or privacy? Send a message and the right OrionAlerts team will reply. For a product walkthrough, book a demo."*
- **P2 —** Add office hours (IST), a map link and the separate security@ and privacy@ addresses.
- **P2 —** Add `ContactPage` structured data, plus contact points for sales, support and privacy.
- **P3 —** Topic labels: "Support / ticket" → "Customer support"; "Sales conversation" → "Sales enquiry".

### 5.6 `/book-demo` — ⚠ P1 SEO problem

**Current state:** The page returns nothing on the server (`book-demo/page.tsx:12-14`). Search engines get an empty page with only the header and footer. In the browser, a popup opens and the URL is replaced with `/` (`BookDemoModal.tsx:75-80`). A full-page version of the form (`BookDemoPanel.tsx`) exists but isn't used.

- **Consequences:**
  - The most-linked conversion URL on the site has no content Google can index, and may be treated as a "soft 404".
  - Visitors from ads, emails, LinkedIn or AI citations get bounced to the homepage, so the URL and campaign tracking are lost.
- **Fix:**
  - Render `BookDemoPanel` on `/book-demo` with an H1 and a short "what to expect" block (⚠ duration, who should attend, what to bring).
  - Stop the redirect, and keep the popup only for clicks from within the site.
  - Interim option: hide the page from search and remove it from the sitemap.
- **P2 —** Add "Number of sites" and "Approximate camera count" fields.
- **P2 —** Add a commitment, e.g. "30-minute session; we reply within one business day". ⚠
- **P3 —** Submit label "Request demo" → *"Book my demo"*.
- **P3 —** The submit button is disabled until the CAPTCHA is solved, and nothing tells the user why. Add a hint.

### 5.7 Legal and trust pages

- **`/security`**
  - **P1:** "HTTPS for production traffic once TLS is correctly configured…" (`security/page.tsx:40`) → *"All production traffic is served over HTTPS."*
  - **P1:** "OrionAlerts is building enterprise video and operations software." (`:35`) sounds pre-launch → *"OrionAlerts provides enterprise video intelligence software. This page summarises how we protect this website and the data you submit through it."*
  - **P1:** "ISO 9001, ISO 27001, SOC 2, ONVIF and similar marks may appear in marketing for orientation." (`:84-86`) undercuts the homepage badges. ⚠ List the certificates actually held, or remove the badges.
  - **P2:** Remove "durable CRM/ERP storage not yet connected" (`:43`).
  - **P2:** The responsible-disclosure text repeats itself (`:68-69` and `:73-74`).
  - **P2:** The processor list calls the website host "planned" (`legal.ts:85-91`).
  - **P2:** Add what security buyers look for:
    - Video stays on site.
    - Managed, rollback-ready updates.
    - ⚠ Encryption, roles and single sign-on, audit logs, data residency, penetration-testing schedule.
- **`/privacy`**
  - **P1:** *"Do not assert ERP/CRM storage until that integration exists."* (`privacy/page.tsx:150-153`) is an internal instruction shown to visitors. Delete it.
  - **P2:** "…should be minimized… should be redacted" (`:171-174`) reads as aspiration; state what is actually done.
  - **P2:** Ask counsel to confirm the DPDP Act wording.
  - **P3:** No grievance officer is named (flag for counsel).
  - **P3:** Use one date format.
- **`/cookies`**
  - **P1 — Contradiction.** The page says there's no localStorage tracking (`cookies/page.tsx:40-43`), but its own table lists the localStorage entry `oa_cookie_consent_v1`. Rewrite: *"…does not use advertising pixels or behavioural analytics. We use one admin sign-in cookie, Google reCAPTCHA on the demo form, and a localStorage entry that remembers your cookie choice."*
  - **P1 — Developer instructions shown to visitors** (`:95-103`, `:152-153`): "Ship only essential functionality by default", "Do not add analytics… loadConsentedScript / ConsentProvider", "Re-scan production on each release…". Replace with visitor-facing statements, e.g. *"Optional cookies stay off until you allow them."*
- **`/terms`**
  - **P2:** The IP clause has a double "except" (`terms/page.tsx:51-53`). Rewrite: *"You may not copy, scrape, reverse engineer or reuse these materials without prior written permission, other than for personal evaluation or brief quotations with attribution."*
  - **P3:** Limitation of liability, third-party links, changes to these terms and severability are missing (flag for counsel).
  - **P3:** Confirm the `*Draft` copy in `legal.ts` has legal sign-off.

### 5.8 404 and error pages

- **P3 —** The 404 page has no H1. Add more ways back: Solutions, Industries, FAQs, Contact. Lede: *"This page may have moved. Try one of these instead, or contact us if you followed a broken link."*
- **P3 —** `global-error.tsx` shows "ORION Alerts", one more name variant.

### 5.9 Proposed new blog posts

| # | Title | Target keyword | Intent | Priority |
|---|---|---|---|---|
| 1 | How to Add AI to Existing CCTV Cameras Without Replacing Them (ONVIF, RTSP, Edge Servers) | add AI to existing CCTV cameras | Commercial investigation | P1 |
| 2 | CCTV Camera Health Monitoring: Detect Offline Cameras and Recording Gaps Before an Incident | CCTV health monitoring | Informational → commercial | P1 |
| 3 | CCTV AMC Management Checklist: SLAs, Preventive Maintenance and Vendor Scorecards | CCTV AMC management | Informational (India) | P1 |
| 4 | VMS vs NVR: When Does a Multi-Site Enterprise Need a Video Management System? | VMS vs NVR | Commercial investigation | P1 |
| 5 | AI PPE Detection for Indian Factories: How It Works, Accuracy Factors, Rollout Steps | AI PPE detection | Commercial | P1 |
| 6 | STQC-Certified CCTV Cameras: What Indian Buyers and Government Tenders Need to Know | STQC certified CCTV camera | Informational (India) | P1 (needs sourced facts) |
| 7 | Edge vs Cloud Video Analytics: Where Should AI Inference Run? | edge vs cloud video analytics | Informational | P2 |
| 8 | DPDP Act and CCTV: Privacy Considerations for Video Analytics in India | DPDP Act CCTV | Informational (needs legal review) | P2 |
| 9 | Surveillance Asset Management: Building a Live Camera and NVR Register Across Sites | surveillance asset management | Informational → commercial | P2 |
| 10 | AI Video Analytics in India: Buyer's Guide and Vendor Evaluation Checklist | AI video analytics India | Commercial investigation | P2 |
| 11 | ANPR for Factories and Warehouses: Automating Gates, Boom Barriers and Visitor Entry | ANPR gate automation | Commercial | P3 |

Also refresh two existing posts: expand "Alert Fatigue" toward *how to reduce false alarms in CCTV*, and turn "Vision Intelligence Platform" into a pillar page. Link topics 1, 4 and 10 from them.

### 5.10 Quick wins for this group

1. **Remove internal and developer notes from public pages (under 1 hour):** privacy, cookies, security, and the contact form microcopy.
2. **Make `/book-demo` a real page:** render `BookDemoPanel` and drop the redirect to `/`.
3. **Repair the CP Plus article:** clean URL with redirect, title, excerpt, takeaways, question headings and sources.
4. **Overhaul the FAQ from existing facts:** "OrionAlerts" naming, 40–60-word answers, the missing buyer questions, fixed contradictions and new groups.
5. **Blog trust signals:**
   - Calculated read times.
   - Real authors with bios.
   - The "Last published" date.
   - Link support inside articles.

---

## 6. Site-wide technical SEO, AEO and GEO

**Method:** all 56 sitemap URLs were fetched and parsed, and the server HTML was compared with the rendered page on `/`, `/solutions/vms`, `/industries/manufacturing` and `/book-demo`. Performance numbers come from the dev server; re-measure on a production build.

**Already working:**
- Every page has a self-referencing canonical, no page is accidentally hidden from search, and the 404 page is.
- Old URLs and trailing slashes redirect cleanly in one hop.
- The company's structured data is on every page.
- All key copy except `/book-demo` is in the server HTML, so crawlers that don't run JavaScript see the full text.

### 6.1 Page titles and descriptions

**Title clipping bug (P1).** `buildPageMetadata` clips titles to 60 characters *before* " | OrionAlerts" (14 characters) is added, so real titles reach 74 characters. Fix `src/lib/seo.ts:72` to clip at 46 when the suffix will be added, and apply the same to share titles. No two pages share a title.

| URL | Problem |
|---|---|
| `/` | Title 63 chars; meta 109 chars (aim for 120–155); H1 is the brand name only, invisible in the server HTML, and fades out after 6 s |
| `/solutions`, `/industries` | Titles "Solutions" / "Industries" carry no keyword; slogan H1s |
| `/book-demo` | **No H1 and 0 words in the server HTML**; redirects to `/` in the browser; still in the sitemap |
| `/about`, `/blogs`, `/faqs`, `/contact` | One-word titles ("About Us", "Blog", "FAQs"); slogan H1s; `/faqs` questions are buttons, not headings |
| `/careers`, `/docs`, `/pricing` | Thin pages (67–86 words) that say "not yet", yet are indexable and in the sitemap |
| `/solutions/asset-tracking`, `/amc-management`, `/health-monitoring` | Titles too short and generic |
| `/solutions/ai-analytics` | Title doesn't contain "AI video analytics", the main search term |
| `/solutions/*` (all 5) | The H1 is screen-reader-only (`SolutionHero.tsx:51`) |
| `/industries/*` (all 30) | Titles are fine, but all 30 meta descriptions use one template, and H1s say "Vision Copilot for X" |
| `/industries/retail-shopping`, `/textile` | Share image is a hotlinked Unsplash photo |
| CP Plus blog | Title 71 chars and cut off with "…"; URL cut off at 80 characters |
| `why-traditional-cctv…`, `what-is-a-vision…` blogs | Title over 60 chars; meta cut off with "…" |

Suggested titles for the solution pages are in §3.

### 6.2 Heading structure

- **P1 —** Home H1 (`Hero.tsx:152`) and solution H1s (`SolutionHero.tsx:51`): make the visible, keyword-led line the real H1.
- **P2 — Skipped heading levels.**
  - `/nebula-os` jumps from H1 to H3 (`CapabilityCard.tsx:83`).
  - The CP Plus post jumps from H1 to 18 H3s with no H2. Fix the post, or promote H3 to H2 when a post has none (`BlogArticleContent.tsx:73-93`).
- **P2 — Repeated headings.**
  - "Trusted by Leading Organizations" is an H2 on 38 pages (`LogoMarquee.tsx:44`); make it a small label instead.
  - The final CTA heading repeats on every page.
  - The 30 industry pages share 12 identical H2s; put the industry name in them.
- **P2 —** `/faqs`: wrap each question in an `<h3>` and group them under H2 categories.

### 6.3 Structured data (JSON-LD)

| Page group | What's there now |
|---|---|
| All pages | Organization |
| `/` | WebSite, VideoObject |
| `/solutions`, `/industries`, `/blogs` | BreadcrumbList |
| `/nebula-os` | BreadcrumbList, SoftwareApplication, FAQPage (8) |
| `/faqs` | FAQPage (19) |
| `/solutions/*` | BreadcrumbList, Service, plus a VideoObject on 3 pages that have no video |
| `/industries/*` | BreadcrumbList, WebPage — **no FAQPage**, despite 9 FAQs per page |
| `/blogs/*` | Article, BreadcrumbList |
| About, Partners, Contact, Careers, Docs, Pricing, legal pages, Book a demo | Organization only |

- **P1 — The company appears as several separate entities.** Article, VideoObject and SoftwareApplication each define their own anonymous publisher (`jsonld.tsx:135, 184, 220`). Point each at the one company (`/#organization`). Add IDs to Service, SoftwareApplication and WebPage, and link them together; better still, emit one combined graph per page.
- **P1 —** Add breadcrumbs to the 11 pages that lack them. The `breadcrumbJsonLd` helper already exists.
- **P1 —** Industry pages: add FAQPage (industry-specific FAQs only) and link the WebPage to the company.
- **P1 —** `sameAs` (social profiles) is empty (`site.ts:18`). ⚠ Supply real LinkedIn, YouTube and Crunchbase URLs, and add footer icons.
- **P2 — Company details.**
  - Add `alternateName: ["Orion Alerts"]`.
  - Change `areaServed` "IN" → "India".
  - `streetAddress` repeats the city, state and PIN; keep only the street part.
  - Add `foundingDate` and CIN only once provided.
  - List the 5 services.
- **P2 — Video structured data.**
  - Every video uses the same hard-coded `uploadDate` "2026-07-28" with no timezone.
  - Add `duration`: intro PT17S, live-wall PT19S, ai-analytics PT10S, health-monitoring PT10S.
  - The homepage video loads after the page is idle and isn't in the server HTML; consider dropping it.
  - The solution-page videos aren't on the page at all (see §3.1).
- **P2 — Article structured data.**
  - Make "OrionAlerts Team" an Organization.
  - Give authors a page URL.
  - Use real `dateModified` values.
  - Host your own images rather than Unsplash.
- **P2 — Page-type structured data:**
  - `/about` → AboutPage
  - `/contact` → ContactPage
  - `/blogs` → Blog with a list of posts
  - `/industries` and `/solutions` → CollectionPage with a list of items
- **Note:** since 2023 Google shows FAQ rich results only for government and health sites. FAQ structured data won't add search-result features here, but Bing, Copilot and AI engines still read it. Skip `speakable`, which is news-only.

### 6.4 Internal linking

- **Depth:** every page is at most 2 clicks from home, and nothing is orphaned.
- **Weakly linked pages:** textile is linked from 1 page (the overview), healthcare and banking from 2 each, and the "Traditional CCTV" blog from 1. The industries mega menu only exists in the HTML after it's opened (`Header.tsx:243-263`), so crawlers don't see those links.
- **Links in main content between page types:**

  | From → To | Industries | Solutions | Blogs |
  |---|---|---|---|
  | **Industries** | 90 | 90 | **0** |
  | **Solutions** | **0** | 20 | **0** |
  | **Blogs** | **0** | **0** | 8 |

  The homepage links to no industry or blog.
- **P1 — Fixes.**
  - Add an "Industries" column to the footer (8–10 sectors plus "All industries").
  - Render the mega-menu links in the server HTML.
  - Add "Used in" (industries) and "Further reading" (blogs) blocks to the solution pages.
  - Add in-body links in blogs; this needs the renderer fix in §5.2.
  - Add Asset Tracking and AMC to industry pages where they fit.
- **P2 —** Make "Related industries" links two-way. Add an Industries strip and a "Latest insights" strip to the homepage. Deep-link the 12 use-case cards.
- **P3 — Anchor text.** "View all industries" appears ×30, along with "More articles" and "View all →". The footer links `/faqs` with the anchor "Support".

### 6.5 Crawling and indexing

- **`robots.txt` (`src/app/robots.ts`):** all AI crawlers are allowed, and `/admin` and `/api` are blocked. Recommended policy:
  - Keep answer and search bots allowed (OAI-SearchBot, ChatGPT-User, Claude-SearchBot, Claude-User, PerplexityBot, Perplexity-User, DuckAssistBot, Bingbot).
  - For an early B2B brand, also keep training bots allowed (GPTBot, ClaudeBot, Google-Extended, Applebot-Extended, CCBot). Being in AI models helps them recognise the company.
  - Google-Extended does **not** control AI Overviews (that's Googlebot).
  - Consider blocking Bytespider: it's aggressive and gives no relevant answer surface.
  - P3 tidy-ups: remove the obsolete `Host:` line, the duplicate `/admin/` and `/api/` rules, and the legacy `anthropic-ai` entry.
- **P1 — Sitemap dates are fake.** 52 of 56 `lastmod` values are set to "now" (`sitemap.ts:55,63,71`), so Google ignores them. Use real dates:
  - Industry content already has `reviewedAt`.
  - Add `updatedAt` to solutions.
  - Use a fixed date per static page.
  - Use `updatedAt ?? date` for blogs (`:80`).
- **P1 — `/book-demo`** (see §5.6): empty server HTML, a client-side redirect to `/`, and a canonical that still says `/book-demo`. 81 internal links point to it. Render a real page, or remove it from the sitemap.
- **P2 —** Remove `/careers`, `/docs` and `/pricing` from the sitemap or hide them from search until they have content. Better: enrich `/pricing`.
- **P2 — Default canonical pointing to the homepage** (`layout.tsx:31`). Any page without its own metadata inherits a homepage canonical. Remove the default.
- **P2 — Language and region.** The site targets India:
  - set `<html lang="en-IN">` (`layout.tsx:66`);
  - set the share locale to `en_IN`;
  - set `inLanguage` to `en-IN`.

  Don't add hreflang tags until there are other language or region versions.
- **P1 — Homepage text.** The homepage has only ~186 indexable words. Render the 12 use-case descriptions that already exist in `homepage.ts`.
- ⚠ **Hosting check:** confirm `www` → apex domain and `http` → `https` redirects at the host; this couldn't be checked locally.

### 6.6 `llms.txt` (the summary file for AI assistants)

**Good:** it follows the llms.txt proposal, is generated from source, and includes the Nebula OS FAQs.

**Gaps (P2), in `src/app/llms.txt/route.ts`:**
- The 5 solutions are listed twice under different names (`:36-41` and `:44-50`). Keep one list with the official names.
- The 30 industries have no descriptions (`:55-58`).
- **No company fact block.** Add:
  - the legal entity;
  - "Mumbai, India" (it currently says only "India");
  - the contact email;
  - deployment models;
  - integrations (ONVIF, RTSP, vendor SDKs, CP Plus API);
  - what it isn't (not a camera manufacturer, not cloud-recording-only).
- Add the top 8 questions from `/faqs`.
- **Add `/llms-full.txt`:** a full-text version for AI assistants. It should contain the "What is OrionAlerts" paragraph, all solution overviews, the Nebula OS content, all FAQs, industry summaries and blog bodies. It doesn't exist yet (404).

### 6.7 GEO: being found and quoted by AI assistants

- **P1 — One name.**
  - "OrionAlerts" is the main form.
  - "Orion Alerts" appears on ~20 pages (About, FAQs, blogs, `/solutions`, `mega-menu.ts:63`, `site.ts` summaries).
  - "ORION Alerts" is the logo text.
  - Use **OrionAlerts** in all text, and keep "Orion Alerts" only as an alternate name in structured data.
  - The category is also described five ways: "video intelligence platform", "Vision AI operating system", "vision intelligence platform", "Vision Copilot" and "AI video analytics". Pick one primary category phrase.
- **P1 — One official "What is OrionAlerts" paragraph (40–60 words)** covering the category, the 5 modules, Nebula OS, existing cameras and Mumbai/Global Ace. Reuse it word-for-word in six places:
  - `site.description`
  - `SITE_DEFAULT_DESCRIPTION`
  - the `llms.txt` summary
  - the About intro
  - FAQ #1
  - the homepage
- **P1 — Trust signals.**
  - About has no leadership, founding year or case studies.
  - The certificate badges are shown "for orientation". FedRAMP, FIPS 140-2, NDAA, TAA and SAFETY Act badge files are still in `public/Images/certificates`, referenced by the unused array in `homepage.ts`.
  - Publish certificate scope on `/security`, or remove the badges and those files.
- **P2 —** Client logos are images only. Add a text line and 2–3 case studies (with permission).
- **P2 —** Author pages with expertise.
- **"VSaaS"** appears only in the structured data (`knowsAbout`). Add content about it or remove it.

**GEO playbook**
1. **P1** — The official "What is OrionAlerts" paragraph, used everywhere.
2. **P1** — An "OrionAlerts at a glance" fact-sheet page (`/company`): legal entity, HQ, modules, deployment models, protocols, data residency ("video stays on site; the cloud syncs metadata"), GPU requirement, multi-site model, certifications with scope, contact.
3. **P2** — A glossary hub (`/glossary/*`), with 40–80-word definitions plus "How OrionAlerts handles it":
   - VMS, VSaaS, NVR vs DVR vs VMS
   - camera/NVR health monitoring
   - ONVIF, RTSP, edge AI video analytics
   - ANPR, camera tampering detection
   - AMC, STQC certification
4. **P2** — 12 use-case pages (`/use-cases/fire-smoke-detection` and so on), built from the homepage cards. Each covers the definition, how detection works, requirements, industries and FAQs.
5. **P2** — Comparison pages: "VMS vs VSaaS", "On-prem vs cloud video analytics", "Nebula OS vs NVR + separate analytics".
6. **P3** — Once social profiles exist, a Wikidata item and a Crunchbase profile.

### 6.8 AEO: direct answers

- **Q&A today:**
  - `/faqs` (19, structured; questions aren't headings)
  - `/nebula-os` (8, good)
  - industry pages (9 each, not structured)
  - CP Plus post (not structured)
  - solution pages (none)
- **P1 —** Add 4–6 Q&As with structured data, plus a 40–60-word definition under the H1, to every solution page.
- **P1 —** Add FAQ structured data to the industry pages.
- **P2 —** Rework `/pricing` around "How OrionAlerts pricing works". "How much does X cost" is a top AI query.
- **P2 —** Add a "Short answer" box under the H1 of question-titled blog posts.

### 6.9 Performance

Dev-build figures; confirm on a production build.

| Page | HTML | Main image (LCP) |
|---|---|---|
| Home | 92 KB (15 KB gzipped) | `ai-vision.webp` poster, 75 KB, preloaded ✓ |
| `/solutions/vms` | 115 KB | Hero image, 163 KB, preloaded ✓ |
| `/industries/manufacturing` | 101 KB | Hero image, 162 KB, preloaded ✓ |

The Outfit font is self-hosted and preloaded ✓.

- **P2 —** The home H1 is server-rendered invisible, so it can become a late "largest paint". The H1 fix in §6.2 solves it.
- **P2 —** The VMS page sends a 51 KB data payload, because the whole solution object goes to client components. Pass only the fields needed.
- **P3 —** `images.unoptimized: true` means phones download 1920 px hero images. The files are already compressed; responsive sizes would cut this further.
- **P3 —** Solution and industry share images are 1920×1080 WebP. LinkedIn and some WhatsApp versions handle WebP poorly; generate 1200×630 JPGs, like the default share image added today.

### 6.10 Local and India SEO

- **P1 — Consistent name, address and phone.** The address is identical in the footer, on `/contact` and in the structured data ✓, but no phone number is published anywhere.
- **P1 — Google Business Profile.** ⚠ Decide which name to list ("OrionAlerts" or "Global Ace Technology Pvt. Ltd."). Create and verify a profile for the Andheri East office (category "Software company"), using the same name, address and phone as the site.
- **P2 —** "India" is nearly absent from page copy. Add an explicit market line to home, About and the fact sheet.
- **P2 — India-specific keyword opportunities** (no claims invented):
  - "CCTV AMC management software India"
  - "video analytics company in Mumbai / India"
  - "VMS software India"
  - "STQC certified CCTV"
  - "DPDP Act CCTV video data"
  - "AI CCTV for bank branches"
  - "CP Plus / Hikvision / Dahua integration" — only for brands actually supported ⚠
  - "GeM" — only if listed ⚠
