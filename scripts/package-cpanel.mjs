#!/usr/bin/env node
/**
 * Packages Next.js standalone output into ./dist for cPanel Node.js App.
 * Run after `next build` (or via `npm run build:cpanel`).
 */
import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const root = process.cwd();
const standalone = join(root, ".next", "standalone");
const dist = join(root, "dist");

if (!existsSync(standalone)) {
  console.error("Missing .next/standalone. Run `next build` with output: 'standalone' first.");
  process.exit(1);
}

rmSync(dist, { recursive: true, force: true });
mkdirSync(dist, { recursive: true });

function findServerJsDir(dir) {
  if (existsSync(join(dir, "server.js"))) return dir;
  try {
    for (const item of readdirSync(dir, { withFileTypes: true })) {
      if (item.isDirectory()) {
        const found = findServerJsDir(join(dir, item.name));
        if (found) return found;
      }
    }
  } catch {}
  return null;
}

const serverDir = findServerJsDir(standalone) || standalone;
cpSync(serverDir, dist, { recursive: true });

const staticSrc = join(root, ".next", "static");
const staticDest = join(dist, ".next", "static");
if (!existsSync(staticSrc)) {
  console.error("Missing .next/static after build.");
  process.exit(1);
}
mkdirSync(join(dist, ".next"), { recursive: true });
cpSync(staticSrc, staticDest, { recursive: true });

const publicSrc = join(root, "public");
if (existsSync(publicSrc)) {
  cpSync(publicSrc, join(dist, "public"), { recursive: true });
}

const dataSrc = join(root, "data");
if (existsSync(dataSrc)) {
  cpSync(dataSrc, join(dist, "data"), { recursive: true });
}

writeFileSync(
  join(dist, "CPANEL.txt"),
  `OrionAlerts — cPanel Node.js deploy package
==========================================

1. In cPanel → Setup Node.js App:
   - Node.js version: 20.9 or newer (required by Next.js 16)
   - Application root: folder where you upload these files (this dist/)
   - Application URL: your domain or subdomain
   - Application startup file: server.js
   - Application mode: Production

2. Upload the ENTIRE contents of this dist/ folder to the application root
   (include server.js, .next/, node_modules/, public/, data/).
   Careful: data/blogs.json replaces the server's copy. If posts were added
   or edited through /admin on the live site, download the server's
   data/blogs.json first and keep it, or merge it into this one.

3. Environment variables (cPanel → Node.js App → Environment):
   NODE_ENV=production
   PORT=<port assigned by cPanel>
   HOSTNAME=0.0.0.0
   NEXT_PUBLIC_SITE_URL=https://orionalerts.com
   ADMIN_PASSWORD=<strong password>
   ADMIN_SESSION_SECRET=<long random string>
   # Google reCAPTCHA (required for the Book a Demo form). The site key is
   # read at runtime, so set it here; no rebuild needed.
   RECAPTCHA_SITE_KEY=<reCAPTCHA v2 site key>
   RECAPTCHA_SECRET_KEY=<reCAPTCHA v2 secret key>

   # SMTP Configuration (cPanel Email Accounts)
   SMTP_HOST=mail.orionalerts.com
   SMTP_PORT=465
   SMTP_SECURE=true
   SMTP_USER=websitelead@orionalerts.com
   SMTP_PASS=<cpanel email password>
   SMTP_FROM="OrionAlerts" <websitelead@orionalerts.com>
   SMTP_REJECT_UNAUTHORIZED=false

   # Lead routing targets
   WEBSITE_LEAD_EMAIL=websitelead@orionalerts.com
   PARTNER_EMAIL=partner@orionalerts.com

4. Start / Restart the Node.js application in cPanel.

5. Point the domain document root to the Node app (or use the app URL
   cPanel provides). Do NOT treat this as static HTML-only hosting —
   lead forms, admin, and blogs need the Node server.

Local smoke test from this folder:
  PORT=3000 HOSTNAME=0.0.0.0 node server.js
`,
  "utf8",
);

writeFileSync(
  join(dist, "package.json"),
  JSON.stringify(
    {
      name: "orionalerts-cpanel",
      private: true,
      version: "0.1.0",
      scripts: {
        start: "node server.js",
      },
    },
    null,
    2,
  ) + "\n",
  "utf8",
);

console.log("cPanel package ready → dist/");
console.log("Startup file: dist/server.js");
console.log("See dist/CPANEL.txt for upload steps.");

writeFileSync(
  join(dist, ".env"),
  [
    "NEXT_PUBLIC_SITE_URL=https://orionalerts.com",
    "NODE_ENV=production",
    "HOSTNAME=0.0.0.0",
    "",
  ].join("\n"),
  "utf8",
);
