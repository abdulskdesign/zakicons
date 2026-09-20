import fs from "node:fs";
import path from "node:path";

const coreDir = path.resolve(process.cwd(), "packages/core");
const iconsDir = path.resolve(process.cwd(), "icons");
const metadataDir = path.resolve(process.cwd(), "metadata");

export function runGenerateCore() {
  console.log("Generating @zak-icons/core package...");

  if (!fs.existsSync(path.join(coreDir, "src"))) {
    fs.mkdirSync(path.join(coreDir, "src"), { recursive: true });
  }

  const iconsJson = JSON.parse(fs.readFileSync(path.join(metadataDir, "icons.json"), "utf-8"));
  const categoriesJson = JSON.parse(fs.readFileSync(path.join(metadataDir, "categories.json"), "utf-8"));

  // Read raw SVGs to build svg map
  const svgMap: Record<string, string> = {};
  const innerElementsMap: Record<string, string> = {};

  for (const item of iconsJson) {
    const filePath = path.join(iconsDir, item.category, `${item.name}.svg`);
    if (fs.existsSync(filePath)) {
      const svg = fs.readFileSync(filePath, "utf-8");
      svgMap[item.name] = svg.trim();
      const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
      innerElementsMap[item.name] = match ? match[1].trim() : "";
    }
  }

  // package.json
  const pkgJson = {
    name: "@zak-icons/core",
    version: "1.0.0",
    description: "Core icon definitions, metadata, and SVG data for ZAK Icons ecosystem",
    author: "ZAK Icons Team",
    license: "MIT",
    main: "./src/index.ts",
    module: "./src/index.ts",
    types: "./src/index.ts",
    sideEffects: false
  };
  fs.writeFileSync(path.join(coreDir, "package.json"), JSON.stringify(pkgJson, null, 2), "utf-8");

  // tsconfig.json
  const tsConfig = {
    compilerOptions: {
      target: "ES2022",
      module: "esnext",
      moduleResolution: "bundler",
      declaration: true,
      strict: true,
      skipLibCheck: true
    },
    include: ["src/**/*"]
  };
  fs.writeFileSync(path.join(coreDir, "tsconfig.json"), JSON.stringify(tsConfig, null, 2), "utf-8");

  // src/types.ts
  const typesContent = `export interface IconDefinition {
  name: string;
  title: string;
  category: string;
  tags: string[];
  aliases: string[];
  style: "outline";
  viewBox: string;
  elements: string;
  svg: string;
}

export interface CategoryDefinition {
  id: string;
  title: string;
  description: string;
  count: number;
  icons: string[];
}
`;
  fs.writeFileSync(path.join(coreDir, "src/types.ts"), typesContent, "utf-8");

  // src/icons.ts
  const iconsData = iconsJson.map((i: any) => ({
    ...i,
    elements: innerElementsMap[i.name] || "",
    svg: svgMap[i.name] || ""
  }));

  const iconsContent = `import { IconDefinition } from "./types";

export const iconsData: IconDefinition[] = ${JSON.stringify(iconsData, null, 2)};

export const iconMap: Record<string, IconDefinition> = iconsData.reduce((acc, icon) => {
  acc[icon.name] = icon;
  return acc;
}, {} as Record<string, IconDefinition>);

export function getIcon(name: string): IconDefinition | undefined {
  return iconMap[name];
}
`;
  fs.writeFileSync(path.join(coreDir, "src/icons.ts"), iconsContent, "utf-8");

  // src/categories.ts
  const categoriesContent = `import { CategoryDefinition } from "./types";

export const categoriesData: CategoryDefinition[] = ${JSON.stringify(categoriesJson, null, 2)};

export const categoryMap: Record<string, CategoryDefinition> = categoriesData.reduce((acc, cat) => {
  acc[cat.id] = cat;
  return acc;
}, {} as Record<string, CategoryDefinition>);

export function getCategory(id: string): CategoryDefinition | undefined {
  return categoryMap[id];
}
`;
  fs.writeFileSync(path.join(coreDir, "src/categories.ts"), categoriesContent, "utf-8");

  // src/index.ts
  const indexContent = `export * from "./types";
export * from "./icons";
export * from "./categories";
`;
  fs.writeFileSync(path.join(coreDir, "src/index.ts"), indexContent, "utf-8");

  // README.md
  const readmeContent = `# @zak-icons/core

Core metadata, SVG elements, and shared types for the ZAK Icons ecosystem.

## Installation

\`\`\`bash
npm install @zak-icons/core
# or
pnpm add @zak-icons/core
\`\`\`

## Usage

\`\`\`ts
import { getIcon, iconsData, categoriesData } from "@zak-icons/core";

const truckIcon = getIcon("truck");
console.log(truckIcon?.svg);
\`\`\`

## License

MIT
`;
  fs.writeFileSync(path.join(coreDir, "README.md"), readmeContent, "utf-8");

  console.log("Successfully generated @zak-icons/core!");
}

if (require.main === module) {
  runGenerateCore();
}
