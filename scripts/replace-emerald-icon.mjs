import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const newBlock = `function TrustMark({ className }: { className?: string }) {
  return <span className={\`inline-block h-2 w-2 shrink-0 rounded-full bg-stone-500 \${className ?? ""}\`} aria-hidden />;
}`;

const emeraldFn = /function EmeraldIcon\(\{ className \}: \{ className\?: string \}\) \{[\s\S]*?\n\}/g;

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      if (ent.name === "node_modules" || ent.name === ".next") continue;
      walk(p, acc);
    } else if (ent.isFile() && ent.name.endsWith(".tsx")) acc.push(p);
  }
  return acc;
}

for (const file of walk(path.join(root, "app")).concat(walk(path.join(root, "components")))) {
  let s = fs.readFileSync(file, "utf8");
  if (!s.includes("function EmeraldIcon")) continue;
  const orig = s;
  s = s.replace(emeraldFn, newBlock);
  s = s.replace(/EmeraldIcon/g, "TrustMark");
  if (s !== orig) {
    fs.writeFileSync(file, s);
    console.log("Updated", file);
  }
}
