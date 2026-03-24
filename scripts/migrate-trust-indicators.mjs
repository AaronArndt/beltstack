/**
 * Migrates best-*-software roundup pages to shared TrustIndicatorMark + trust row tokens.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const TRUST_FN = `function TrustMark({ className }: { className?: string }) {
  return <span className={\`inline-block h-2 w-2 shrink-0 rounded-full bg-stone-500 \${className ?? ""}\`} aria-hidden />;
}

`;

const IMPORTS = `import { TrustIndicatorMark } from "@/components/trust/TrustIndicatorMark";
import { trustIndicatorAffiliateButtonClass, trustIndicatorListClass } from "@/lib/design-tokens";
`;

const files = [
  "app/accounting/best-accounting-software/page.tsx",
  "app/crm/best-crm-software/page.tsx",
  "app/field-service/best-field-service-software/page.tsx",
  "app/helpdesk/best-helpdesk-software/page.tsx",
  "app/hr/best-hr-software/page.tsx",
  "app/inventory/best-inventory-software/page.tsx",
  "app/invoicing/best-invoicing-software/page.tsx",
  "app/payroll/best-payroll-software/page.tsx",
  "app/pos/best-pos-software/page.tsx",
  "app/project-management/best-project-management-software/page.tsx",
  "app/scheduling/best-scheduling-software/page.tsx",
  "app/time-tracking/best-time-tracking-software/page.tsx",
];

for (const rel of files) {
  const fp = path.join(root, rel);
  let s = fs.readFileSync(fp, "utf8");
  if (!s.includes("function TrustMark")) {
    console.warn("skip (no TrustMark):", rel);
    continue;
  }
  s = s.replace(TRUST_FN, "");
  if (!s.includes("TrustIndicatorMark")) {
    const lines = s.split("\n");
    let lastImport = -1;
    for (let i = 0; i < lines.length; i++) {
      if (lines[i].startsWith("import ")) lastImport = i;
    }
    if (lastImport >= 0) {
      lines.splice(lastImport + 1, 0, "", ...IMPORTS.trimEnd().split("\n"));
      s = lines.join("\n");
    }
  }
  s = s.replace(
    'className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-[#57534E]"',
    "className={`mt-4 ${trustIndicatorListClass}`}"
  );
  s = s.replace(
    'className="flex items-center gap-2 text-left text-[#57534E] hover:text-[#1A2D48] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#10B981] rounded"',
    "className={trustIndicatorAffiliateButtonClass}"
  );
  s = s.replaceAll('<TrustMark className="h-4 w-4 shrink-0" />', "<TrustIndicatorMark />");
  fs.writeFileSync(fp, s, "utf8");
  console.log("updated:", rel);
}
