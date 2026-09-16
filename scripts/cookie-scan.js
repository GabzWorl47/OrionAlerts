#!/usr/bin/env node
/**
 * Production cookie inventory checklist / lightweight scanner.
 *
 * This is NOT full browser automation. It documents the release process and
 * verifies first-party inventory constants still match the committed Cookie Notice.
 *
 * Usage:
 *   npm run cookie-scan
 *   npm run cookie-scan -- --base-url https://www.example.com
 *
 * Manual release steps (required each production cut):
 * 1. Open the production origin in a clean browser profile (no extensions).
 * 2. DevTools → Application → Cookies / Local Storage for the site origin.
 * 3. Load `/book-demo`, submit nothing, confirm reCAPTCHA cookies appear only on that path.
 * 4. Sign in to `/admin` in a separate session and confirm `oa_admin_session` only after login.
 * 5. Open Cookie Settings; Accept / Reject / Save; confirm `oa_cookie_consent_v1` in localStorage
 *    includes version, timestamp, region ("unspecified" without geo), and category flags.
 * 6. Diff observed names against `cookieInventory` in `src/lib/legal.ts` and update
 *    `legalMeta.lastReviewed` when the inventory changes.
 * 7. Optional: Chrome DevTools Protocol / Playwright can automate steps 2–5 later; not wired here.
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports -- CommonJS ops script (run via `node`, not bundled by Next.js)
const fs = require("fs");
// eslint-disable-next-line @typescript-eslint/no-require-imports -- CommonJS ops script (run via `node`, not bundled by Next.js)
const path = require("path");

const root = path.resolve(__dirname, "..");
const legalPath = path.join(root, "src/lib/legal.ts");
const consentPath = path.join(root, "src/lib/consent.ts");

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function extractInventoryNames(source) {
  const block = source.match(/export const cookieInventory[\s\S]*?=\s*\[([\s\S]*?)\];/);
  if (!block) return [];
  return [...block[1].matchAll(/name:\s*"([^"]+)"/g)].map((m) => m[1]);
}

function main() {
  const args = process.argv.slice(2);
  const baseIdx = args.indexOf("--base-url");
  const baseUrl = baseIdx >= 0 ? args[baseIdx + 1] : null;

  const legal = read(legalPath);
  const consent = read(consentPath);
  const names = extractInventoryNames(legal);
  const reviewed = legal.match(/lastReviewed:\s*"([^"]+)"/)?.[1] ?? "(missing)";
  const storageKey = consent.match(/CONSENT_STORAGE_KEY\s*=\s*"([^"]+)"/)?.[1];
  const regionDefault =
    consent.match(/CONSENT_REGION_UNSPECIFIED\s*=\s*"([^"]+)"/)?.[1] ?? "unspecified";

  console.log("OrionAlerts cookie-scan (checklist + static verification)");
  console.log("=======================================================");
  console.log(`Inventory lastReviewed: ${reviewed}`);
  console.log(`Consent storage key: ${storageKey ?? "(missing)"}`);
  console.log(`Consent region default: ${regionDefault}`);
  console.log(`Documented cookie/storage rows (${names.length}):`);
  for (const name of names) console.log(`  - ${name}`);

  if (!names.includes("oa_admin_session")) {
    console.error("ERROR: oa_admin_session missing from cookieInventory.");
    process.exitCode = 1;
  }
  if (!storageKey || !names.includes(storageKey)) {
    console.error("ERROR: consent storage key not listed in cookieInventory.");
    process.exitCode = 1;
  }
  if (regionDefault !== "unspecified") {
    console.warn(
      `WARN: region default is "${regionDefault}". Only change when real geo detection ships.`,
    );
  }

  if (baseUrl) {
    console.log("");
    console.log(`Manual live target: ${baseUrl.replace(/\/$/, "")}`);
    console.log("Open that origin and complete steps 1–6 in the header comment.");
    console.log("This script does not drive a browser; live cookie capture remains manual.");
  } else {
    console.log("");
    console.log("Tip: pass --base-url https://your-production-host to print the live checklist target.");
  }

  if (!process.exitCode) {
    console.log("");
    console.log("Static inventory checks passed. Complete the manual browser scan before release.");
  }
}

main();
