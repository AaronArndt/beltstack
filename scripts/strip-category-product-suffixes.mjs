/**
 * One-off: strip redundant category suffixes from display names (not URLs/slugs).
 * Order matters. Does not touch "Shopify POS" or "Zoho CRM" (official product names).
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const PATTERNS = [
  ["Vend POS (Lightspeed Retail)", "Vend (Lightspeed Retail)"],
  ["Vend POS", "Vend"],
  ["Square POS", "Square"],
  ["Clover POS", "Clover"],
  ["Lightspeed POS", "Lightspeed"],
  ["Toast POS", "Toast"],
  ["Sage Accounting", "Sage"],
  ["Odoo Accounting", "Odoo"],
  ["Monday CRM", "Monday"],
];

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === "node_modules" || ent.name === ".next" || ent.name === ".git") continue;
      walk(p, files);
    } else if (/\.(ts|tsx)$/.test(ent.name)) files.push(p);
  }
  return files;
}

const dirs = ["lib", "app", "components"].map((d) => path.join(root, d));
const allFiles = [...new Set(dirs.flatMap((d) => walk(d)))];
let changed = 0;

for (const file of allFiles) {
  let c = fs.readFileSync(file, "utf8");
  const orig = c;
  for (const [from, to] of PATTERNS) {
    c = c.split(from).join(to);
  }
  if (c !== orig) {
    fs.writeFileSync(file, c);
    changed++;
    console.log(path.relative(root, file));
  }
}

console.error(`Updated ${changed} files.`);
