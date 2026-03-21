import fs from "fs";
import path from "path";

const root = path.resolve(import.meta.dirname, "..");

const registryFiles = {
  accounting: "lib/data/accountingBestAccountingSoftware.ts",
  payroll: "lib/data/payrollBestPayrollSoftware.ts",
  invoicing: "lib/data/invoicingBestInvoicingSoftware.ts",
  crm: "lib/data/crmBestSoftware.ts",
  helpdesk: "lib/data/helpdeskBestSoftware.ts",
  "field-service": "lib/data/fieldServiceBestSoftware.ts",
  inventory: "lib/data/inventoryBestSoftware.ts",
  "project-management": "lib/data/projectManagementBestSoftware.ts",
  scheduling: "lib/data/schedulingBestSoftware.ts",
  pos: "lib/data/posBestSoftware.ts",
  "time-tracking": "lib/data/timeTrackingBestTimeTrackingSoftware.ts",
  hr: "lib/data/hrBestSoftware.ts",
};

function getTopPicksSlugs(filepath) {
  const src = fs.readFileSync(filepath, "utf8");
  const start = src.indexOf("export const TOP_PICKS");
  if (start === -1) return [];
  const sub = src.slice(start);
  // After `TOP_PICKS: Type[] =` — first `[` of the array (not `Type[]`)
  const eq = sub.indexOf("=");
  if (eq === -1) return [];
  const afterEq = sub.slice(eq + 1);
  const open = afterEq.indexOf("[");
  if (open === -1) return [];
  const fromOpen = afterEq.slice(open);
  let depth = 0;
  for (let i = 0; i < fromOpen.length; i++) {
    const c = fromOpen[i];
    if (c === "[") depth++;
    else if (c === "]") {
      depth--;
      if (depth === 0) {
        const block = fromOpen.slice(0, i + 1);
        const slugs = [];
        const re = /slug:\s*"([^"]+)"/g;
        let x;
        while ((x = re.exec(block))) slugs.push(x[1]);
        return [...new Set(slugs)];
      }
    }
  }
  return [];
}

/** Every slug: in file (includes productSlug, table rows, etc.) — superset of topAlternatives slugs */
function getAllSlugsInAlternativesFile(filepath) {
  const src = fs.readFileSync(filepath, "utf8");
  const slugs = [];
  const re = /slug:\s*"([^"]+)"/g;
  let x;
  while ((x = re.exec(src))) slugs.push(x[1]);
  return [...new Set(slugs)];
}

/**
 * Extract slug lists only from `const X_ALTERNATIVES: AlternativesTopPick[] = [ ... ];`
 * blocks (top alternatives for each page).
 */
function getTopAlternativesArraySlugs(filepath) {
  const src = fs.readFileSync(filepath, "utf8");
  const re = /AlternativesTopPick\[\]\s*=\s*\[([\s\S]*?)\];/g;
  const out = new Set();
  let m;
  while ((m = re.exec(src))) {
    const block = m[1];
    const sr = /slug:\s*"([^"]+)"/g;
    let s;
    while ((s = sr.exec(block))) out.add(s[1]);
  }
  return [...out];
}

const altFiles = {
  accounting: "lib/data/accountingAlternatives.ts",
  payroll: "lib/data/payrollAlternatives.ts",
  invoicing: "lib/data/invoicingAlternatives.ts",
  crm: "lib/data/crmAlternatives.ts",
  helpdesk: "lib/data/helpdeskAlternatives.ts",
  "field-service": "lib/data/fieldServiceAlternatives.ts",
  inventory: "lib/data/inventoryAlternatives.ts",
  "project-management": "lib/data/projectManagementAlternatives.ts",
  scheduling: "lib/data/schedulingAlternatives.ts",
  pos: "lib/data/posAlternatives.ts",
  "time-tracking": "lib/data/timeTrackingAlternatives.ts",
  hr: "lib/data/hrAlternatives.ts",
};

const report = [];

for (const [vert, rel] of Object.entries(altFiles)) {
  const reg = getTopPicksSlugs(path.join(root, registryFiles[vert]));
  const altOnly = getTopAlternativesArraySlugs(path.join(root, rel));
  const fallback = altOnly.filter((s) => !reg.includes(s)).sort();
  report.push({
    vertical: vert,
    topPicksSlugs: reg.sort(),
    topAlternativesUniqueSlugs: altOnly.sort(),
    fallbackSlugs: fallback,
  });
}

console.log(JSON.stringify(report, null, 2));
