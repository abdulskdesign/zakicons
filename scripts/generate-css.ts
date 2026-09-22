import fs from "node:fs";
import path from "node:path";

// Resolve paths relative to scripts/ location rather than process.cwd()
const rootDir = path.resolve(import.meta.dirname, "..");
const cssDir = path.resolve(rootDir, "packages/css");
const iconsDir = path.resolve(rootDir, "icons");
const metadataDir = path.resolve(rootDir, "metadata");

export function runGenerateCss() {
  console.log("Generating @zak-icons/css package...");

  // Ensure packages/css/dist exists
  const distDir = path.join(cssDir, "dist");
  if (!fs.existsSync(distDir)) {
    fs.mkdirSync(distDir, { recursive: true });
  }

  // Load icon metadata
  const metadataPath = path.join(metadataDir, "icons.json");
  if (!fs.existsSync(metadataPath)) {
    console.error(`Metadata file not found at ${metadataPath}`);
    process.exit(1);
  }

  const iconsJson = JSON.parse(fs.readFileSync(metadataPath, "utf-8"));

  // Base CSS styles for mask-based icons
  let cssContent = `/* @zak-icons/css - SVG Mask Based Icons */
.zi {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: currentColor;
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
}
\n`;

  // Generate CSS rules for each icon
  let count = 0;
  for (const item of iconsJson) {
    const filePath = path.join(iconsDir, item.category, `${item.name}.svg`);
    if (!fs.existsSync(filePath)) {
      console.warn(`Warning: Icon file not found -> ${filePath}`);
      continue;
    }

    const svg = fs.readFileSync(filePath, "utf-8");
    const encodedSvg = encodeURIComponent(svg)
      .replace(/'/g, "%27")
      .replace(/"/g, "%22");

    const dataUri = `data:image/svg+xml,${encodedSvg}`;

    cssContent += `.zi-${item.name} {\n  mask-image: url("${dataUri}");\n  -webkit-mask-image: url("${dataUri}");\n}\n\n`;
    count++;
  }

  // Write packages/css/dist/zak-icons.css
  const outputPath = path.join(distDir, "zak-icons.css");
  fs.writeFileSync(outputPath, cssContent, "utf-8");

  console.log(`Successfully generated ${count} icon classes into ${outputPath}`);
}

// Execute directly
runGenerateCss();