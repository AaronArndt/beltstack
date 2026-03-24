/**
 * One-off bulk replacements for design refinement (section underlines + comparison tables).
 * Run: node scripts/apply-design-refinement.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

function walk(dir, out = []) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) {
      if (name === "node_modules" || name === ".next") continue;
      walk(p, out);
    } else if (name.endsWith(".tsx") || name.endsWith(".ts")) {
      out.push(p);
    }
  }
  return out;
}

const REPLACEMENTS = [
  ["mt-2 h-0.5 w-12 bg-stone-400", "mt-2 h-[2px] w-14 bg-[#10B981]"],
  [
    "mt-4 overflow-x-auto rounded-lg border border-stone-200 bg-white shadow-sm",
    "mt-4 overflow-x-auto rounded-md border border-slate-200 bg-white shadow-sm",
  ],
  [
    '<tr className="border-b border-stone-200 bg-stone-50">',
    '<tr className="border-b border-slate-200 bg-slate-50">',
  ],
  [
    'className="border-b border-stone-100 last:border-0 transition-colors hover:bg-stone-50/70"',
    'className="border-b border-slate-100 last:border-0 transition-colors hover:bg-slate-50/80"',
  ],
];

const files = walk(root);
let changed = 0;
for (const file of files) {
  let s = fs.readFileSync(file, "utf8");
  const orig = s;
  for (const [a, b] of REPLACEMENTS) {
    s = s.split(a).join(b);
  }
  if (s !== orig) {
    fs.writeFileSync(file, s, "utf8");
    changed++;
    console.log("updated:", path.relative(root, file));
  }
}
console.log("done, files changed:", changed);
