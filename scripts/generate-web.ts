import fs from "node:fs";
import path from "node:path";

const webDir = path.resolve(process.cwd(), "packages/web");
const iconsDir = path.resolve(process.cwd(), "icons");
const metadataDir = path.resolve(process.cwd(), "metadata");

export function runGenerateWeb() {
  console.log("Generating @zak-icons/web package...");

  const srcDir = path.join(webDir, "src");
  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  const iconsJson = JSON.parse(fs.readFileSync(path.join(metadataDir, "icons.json"), "utf-8"));

  // package.json
  const pkgJson = {
    name: "@zak-icons/web",
    version: "1.0.0",
    description: "Custom Elements web components for ZAK Icons with 300+ vector icons",
    author: "ZAK Icons Team",
    license: "MIT",
    main: "./src/index.ts",
    module: "./src/index.ts",
    types: "./src/index.ts",
    sideEffects: false
  };
  fs.writeFileSync(path.join(webDir, "package.json"), JSON.stringify(pkgJson, null, 2), "utf-8");

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
  fs.writeFileSync(path.join(webDir, "tsconfig.json"), JSON.stringify(tsConfig, null, 2), "utf-8");

  // Extract inner elements map
  const innerElementsMap: Record<string, string> = {};
  for (const item of iconsJson) {
    const filePath = path.join(iconsDir, item.category, `${item.name}.svg`);
    if (!fs.existsSync(filePath)) continue;

    const svg = fs.readFileSync(filePath, "utf-8");
    const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    innerElementsMap[item.name] = match ? match[1].trim() : "";
  }

  // src/index.ts
  const indexContent = `const iconRegistry: Record<string, string> = ${JSON.stringify(innerElementsMap, null, 2)};

export class ZakIconElement extends HTMLElement {
  static get observedAttributes() {
    return ["name", "size", "stroke-width", "color"];
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name") || "";
    const size = this.getAttribute("size") || "24";
    const strokeWidth = this.getAttribute("stroke-width") || "2";
    const color = this.getAttribute("color") || "currentColor";

    const elements = iconRegistry[name];

    if (!elements) {
      this.innerHTML = "";
      return;
    }

    this.innerHTML = \`<svg xmlns="http://www.w3.org/2000/svg" width="\${size}" height="\${size}" viewBox="0 0 24 24" fill="none" stroke="\${color}" stroke-width="\${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">\${elements}</svg>\`;
  }
}

export function registerZakIcons() {
  if (typeof window !== "undefined" && !customElements.get("zak-icon")) {
    customElements.define("zak-icon", ZakIconElement);
  }
}

// Auto-register in browser environment
if (typeof window !== "undefined") {
  registerZakIcons();
}
`;
  fs.writeFileSync(path.join(srcDir, "index.ts"), indexContent, "utf-8");

  // README.md
  const readmeContent = `# @zak-icons/web

Custom Elements web component (\`<zak-icon>\`) for the ZAK Icons ecosystem.

## Installation

\`\`\`bash
npm install @zak-icons/web
\`\`\`

## Usage

In your HTML or JavaScript bundle:

\`\`\`html
<script type="module" src="node_modules/@zak-icons/web/dist/index.js"></script>

<!-- Use anywhere in standard HTML or any framework -->
<zak-icon name="truck" size="32" color="#0284c7" stroke-width="1.5"></zak-icon>
<zak-icon name="arrow-left" size="24"></zak-icon>
<zak-icon name="container" size="28"></zak-icon>
\`\`\`

## Attributes

| Attribute | Default | Description |
|-----------|---------|-------------|
| \`name\` | required | Icon name in kebab-case |
| \`size\` | \`"24"\` | Width and height in px |
| \`stroke-width\` | \`"2"\` | Stroke width |
| \`color\` | \`"currentColor"\` | Stroke color |

## License

MIT
`;
  fs.writeFileSync(path.join(webDir, "README.md"), readmeContent, "utf-8");

  console.log("Successfully generated @zak-icons/web!");
}

if (require.main === module) {
  runGenerateWeb();
}
