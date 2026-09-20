import fs from "node:fs";
import path from "node:path";
import { allIcons } from "./icons-data";

const iconsDir = path.resolve(process.cwd(), "icons");

if (!fs.existsSync(iconsDir)) {
  fs.mkdirSync(iconsDir, { recursive: true });
}

console.log(`Starting generation of ${allIcons.length} SVG icon files...`);

const seenNames = new Set<string>();
let count = 0;

for (const icon of allIcons) {
  if (seenNames.has(icon.name)) {
    console.warn(`WARNING: Duplicate icon name detected: "${icon.name}"! Skipping duplicate.`);
    continue;
  }
  seenNames.add(icon.name);

  const catDir = path.join(iconsDir, icon.category);
  if (!fs.existsSync(catDir)) {
    fs.mkdirSync(catDir, { recursive: true });
  }

  const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  ${icon.elements}
</svg>
`;

  const filePath = path.join(catDir, `${icon.name}.svg`);
  fs.writeFileSync(filePath, svgContent, "utf-8");
  count++;
}

console.log(`Successfully generated ${count} unique SVG icons in ${iconsDir}!`);
