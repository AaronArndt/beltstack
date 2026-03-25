/**
 * Internal link audit: compares sitemap URL universe to statically extractable
 * internal hrefs across app/, components/, lib/. Run: npx tsx scripts/internal-link-audit.ts
 */
import fs from "node:fs";
import path from "node:path";
import sitemap from "../app/sitemap";
import { SITE_URL } from "../lib/site";

const ROOT = path.join(__dirname, "..");
const SCAN_DIRS = ["app", "components", "lib"];

/** Regex: getFooUrl("literal") → expand to paths */
const HELPER_PATTERNS: { re: RegExp; fn: (m: RegExpExecArray) => string[] }[] = [
  { re: /getPayrollReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/payroll/review/${m[1]}`] },
  { re: /getPayrollCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/payroll/compare/${m[1]}`] },
  { re: /getPayrollCompareUrl\(\)/g, fn: () => ["/payroll/compare"] },
  { re: /getPayrollBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/payroll/best-for/${m[1]}`] },
  { re: /getPayrollAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/payroll/alternatives/${m[1]}`] },
  { re: /getAccountingReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/accounting/review/${m[1]}`] },
  { re: /getAccountingCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/accounting/compare/${m[1]}`] },
  { re: /getAccountingCompareUrl\(\)/g, fn: () => ["/accounting/compare"] },
  { re: /getAccountingBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/accounting/best-for/${m[1]}`] },
  { re: /getAccountingAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/accounting/alternatives/${m[1]}`] },

  { re: /getInvoicingReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/invoicing/review/${m[1]}`] },
  { re: /getInvoicingCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/invoicing/compare/${m[1]}`] },
  { re: /getInvoicingCompareUrl\(\)/g, fn: () => ["/invoicing/compare"] },
  { re: /getInvoicingBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/invoicing/best-for/${m[1]}`] },
  { re: /getInvoicingAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/invoicing/alternatives/${m[1]}`] },

  { re: /getTimeTrackingReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/time-tracking/review/${m[1]}`] },
  { re: /getTimeTrackingCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/time-tracking/compare/${m[1]}`] },
  { re: /getTimeTrackingCompareUrl\(\)/g, fn: () => ["/time-tracking/compare"] },
  { re: /getTimeTrackingBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/time-tracking/best-for/${m[1]}`] },
  { re: /getTimeTrackingAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/time-tracking/alternatives/${m[1]}`] },

  { re: /getCrmReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/crm/review/${m[1]}`] },
  { re: /getCrmCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/crm/compare/${m[1]}`] },
  { re: /getCrmCompareUrl\(\)/g, fn: () => ["/crm/compare"] },
  { re: /getCrmBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/crm/best-for/${m[1]}`] },
  { re: /getCrmAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/crm/alternatives/${m[1]}`] },

  { re: /getProjectManagementReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/project-management/review/${m[1]}`] },
  { re: /getProjectManagementCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/project-management/compare/${m[1]}`] },
  { re: /getProjectManagementCompareUrl\(\)/g, fn: () => ["/project-management/compare"] },
  { re: /getProjectManagementBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/project-management/best-for/${m[1]}`] },
  { re: /getProjectManagementAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/project-management/alternatives/${m[1]}`] },

  { re: /getFieldServiceReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/field-service/review/${m[1]}`] },
  { re: /getFieldServiceCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/field-service/compare/${m[1]}`] },
  { re: /getFieldServiceCompareUrl\(\)/g, fn: () => ["/field-service/compare"] },
  { re: /getFieldServiceBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/field-service/best-for/${m[1]}`] },
  { re: /getFieldServiceAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/field-service/alternatives/${m[1]}`] },

  { re: /getSchedulingReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/scheduling/review/${m[1]}`] },
  { re: /getSchedulingCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/scheduling/compare/${m[1]}`] },
  { re: /getSchedulingCompareUrl\(\)/g, fn: () => ["/scheduling/compare"] },
  { re: /getSchedulingBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/scheduling/best-for/${m[1]}`] },
  { re: /getSchedulingAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/scheduling/alternatives/${m[1]}`] },

  { re: /getHrReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/hr/review/${m[1]}`] },
  { re: /getHrCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/hr/compare/${m[1]}`] },
  { re: /getHrCompareUrl\(\)/g, fn: () => ["/hr/compare"] },
  { re: /getHrBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/hr/best-for/${m[1]}`] },
  { re: /getHrAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/hr/alternatives/${m[1]}`] },

  { re: /getPosReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/pos/review/${m[1]}`] },
  { re: /getPosCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/pos/compare/${m[1]}`] },
  { re: /getPosCompareUrl\(\)/g, fn: () => ["/pos/compare"] },
  { re: /getPosBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/pos/best-for/${m[1]}`] },
  { re: /getPosAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/pos/alternatives/${m[1]}`] },

  { re: /getInventoryReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/inventory/review/${m[1]}`] },
  { re: /getInventoryCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/inventory/compare/${m[1]}`] },
  { re: /getInventoryCompareUrl\(\)/g, fn: () => ["/inventory/compare"] },
  { re: /getInventoryBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/inventory/best-for/${m[1]}`] },
  { re: /getInventoryAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/inventory/alternatives/${m[1]}`] },

  { re: /getHelpdeskReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/helpdesk/review/${m[1]}`] },
  { re: /getHelpdeskCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/helpdesk/compare/${m[1]}`] },
  { re: /getHelpdeskCompareUrl\(\)/g, fn: () => ["/helpdesk/compare"] },
  { re: /getHelpdeskBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/helpdesk/best-for/${m[1]}`] },
  { re: /getHelpdeskAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/helpdesk/alternatives/${m[1]}`] },

  { re: /getWebsiteBuildersReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/website-builders/review/${m[1]}`] },
  { re: /getWebsiteBuildersCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/website-builders/compare/${m[1]}`] },
  { re: /getWebsiteBuildersCompareUrl\(\)/g, fn: () => ["/website-builders/compare"] },
  { re: /getWebsiteBuildersBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/website-builders/best-for/${m[1]}`] },
  { re: /getWebsiteBuildersAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/website-builders/alternatives/${m[1]}`] },

  { re: /getLeadGenerationReviewUrl\("([^"]+)"\)/g, fn: (m) => [`/lead-generation/review/${m[1]}`] },
  { re: /getLeadGenerationCompareUrl\("([^"]+)"\)/g, fn: (m) => [`/lead-generation/compare/${m[1]}`] },
  { re: /getLeadGenerationCompareUrl\(\)/g, fn: () => ["/lead-generation/compare"] },
  { re: /getLeadGenerationBestForUrl\("([^"]+)"\)/g, fn: (m) => [`/lead-generation/best-for/${m[1]}`] },
  { re: /getLeadGenerationAlternativeUrl\("([^"]+)"\)/g, fn: (m) => [`/lead-generation/alternatives/${m[1]}`] },
];

function walkFiles(dir: string, acc: string[] = []): string[] {
  if (!fs.existsSync(dir)) return acc;
  for (const name of fs.readdirSync(dir)) {
    if (name === "node_modules" || name === ".next") continue;
    const full = path.join(dir, name);
    const st = fs.statSync(full);
    if (st.isDirectory()) walkFiles(full, acc);
    else if (/\.(tsx?|mdx)$/.test(name)) acc.push(full);
  }
  return acc;
}

function normalizePathname(p: string): string | null {
  if (!p.startsWith("/")) return null;
  let u = p.split("#")[0].split("?")[0];
  if (u.length > 1 && u.endsWith("/")) u = u.slice(0, -1);
  return u;
}

function extractLinksFromText(text: string): string[] {
  const out: string[] = [];

  const hrefQuoted = /href=["'](\/[^"'#?]*)["']/g;
  let m: RegExpExecArray | null;
  while ((m = hrefQuoted.exec(text)) !== null) {
    const n = normalizePathname(m[1]);
    if (n) out.push(n);
  }

  const hrefObj = /href:\s*["'](\/[^"'#?]+)["']/g;
  while ((m = hrefObj.exec(text)) !== null) {
    const n = normalizePathname(m[1]);
    if (n) out.push(n);
  }

  const hrefTpl = /href=\{\s*`(\/[^`${}]+)`\s*\}/g;
  while ((m = hrefTpl.exec(text)) !== null) {
    const n = normalizePathname(m[1]);
    if (n) out.push(n);
  }

  for (const { re, fn } of HELPER_PATTERNS) {
    re.lastIndex = 0;
    while ((m = re.exec(text)) !== null) {
      out.push(...fn(m));
    }
  }

  return out;
}

function clusterForPath(url: string): string {
  const parts = url.split("/").filter(Boolean);
  if (parts.length === 0) return "(home)";
  const first = parts[0];
  const clusters = new Set([
    "payroll",
    "accounting",
    "invoicing",
    "time-tracking",
    "crm",
    "project-management",
    "field-service",
    "scheduling",
    "hr",
    "pos",
    "inventory",
    "helpdesk",
    "lead-generation",
    "website-builders",
  ]);
  if (clusters.has(first)) return first;
  if (first === "software" || first === "methodology") return first;
  return "(trade-or-other)";
}

function main() {
  const sitemapEntries = sitemap();
  const known = new Set<string>();
  for (const e of sitemapEntries) {
    const pathname = new URL(e.url).pathname;
    known.add(pathname);
  }

  const files = SCAN_DIRS.flatMap((d) => walkFiles(path.join(ROOT, d)));
  const inbound = new Map<string, Set<string>>();

  for (const file of files) {
    const text = fs.readFileSync(file, "utf8");
    const links = extractLinksFromText(text);
    const rel = path.relative(ROOT, file).replace(/\\/g, "/");
    for (const p of links) {
      if (!inbound.has(p)) inbound.set(p, new Set());
      inbound.get(p)!.add(rel);
    }
  }

  const knownList = [...known].sort();
  let zero = 0;
  let one = 0;
  const zeroList: string[] = [];
  const oneList: string[] = [];

  for (const u of knownList) {
    const sources = inbound.get(u);
    const count = sources?.size ?? 0;
    if (count === 0) {
      zero++;
      zeroList.push(u);
    } else if (count === 1) {
      one++;
      oneList.push(`${u}  ←  ${[...sources!][0]}`);
    }
  }

  const unknownTargets = new Map<string, number>();
  for (const [target, set] of inbound) {
    if (!known.has(target) && target !== "" && !target.startsWith("//")) {
      unknownTargets.set(target, set.size);
    }
  }

  console.log("=== BeltStack internal link audit (static / literal helpers only) ===\n");
  console.log(`Sitemap universe: ${known.size} URLs`);
  console.log(`Source files scanned: ${files.length}`);
  console.log(`\nZero inbound (in sitemap, no static extractable link): ${zero}`);
  console.log(`One inbound: ${one}`);
  console.log(`\n--- Zero inbound ---\n${zeroList.join("\n")}\n`);
  console.log(`\n--- One inbound (sample up to 80) ---\n${oneList.slice(0, 80).join("\n")}\n`);

  const unk = [...unknownTargets.entries()]
    .filter(([t]) => t.startsWith("/") && !t.startsWith("/_"))
    .sort((a, b) => b[1] - a[1])
    .slice(0, 40);
  if (unk.length) {
    console.log("\n--- Frequent link targets NOT in sitemap (possible typos or extras) ---\n");
    for (const [t, c] of unk) console.log(`${c}\t${t}`);
  }

  console.log("\n=== Notes ===");
  console.log(
    "- Dynamic links (getXUrl(slug) with variable slug) are NOT counted; Navbar/software directory may add many edges.",
  );
  console.log("- ReviewTemplate props from data still require literal hrefs inside lib/data to count.");
}

main();
