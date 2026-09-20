import fs from "node:fs";
import path from "node:path";

const reactDir = path.resolve(process.cwd(), "packages/react");
const iconsDir = path.resolve(process.cwd(), "icons");
const metadataDir = path.resolve(process.cwd(), "metadata");

function toPascalCase(str: string): string {
  const clean = str.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  let result = clean.charAt(0).toUpperCase() + clean.slice(1);
  if (/^[0-9]/.test(result)) {
    result = `Icon${result}`;
  }
  return result;
}

export function runGenerateReact() {
  console.log("Generating @zak-icons/react package...");

  const srcDir = path.join(reactDir, "src");
  const compDir = path.join(srcDir, "icons");

  if (!fs.existsSync(compDir)) {
    fs.mkdirSync(compDir, { recursive: true });
  }

  const iconsJson = JSON.parse(fs.readFileSync(path.join(metadataDir, "icons.json"), "utf-8"));

  // package.json
  const pkgJson = {
    name: "@zak-icons/react",
    version: "1.0.0",
    description: "React components for ZAK Icons with full TypeScript support and tree-shaking",
    author: "ZAK Icons Team",
    license: "MIT",
    main: "./src/index.ts",
    module: "./src/index.ts",
    types: "./src/index.ts",
    peerDependencies: {
      "react": ">=18.0.0",
      "react-dom": ">=18.0.0"
    },
    sideEffects: false
  };
  fs.writeFileSync(path.join(reactDir, "package.json"), JSON.stringify(pkgJson, null, 2), "utf-8");

  // tsconfig.json
  const tsConfig = {
    compilerOptions: {
      target: "ES2022",
      module: "esnext",
      moduleResolution: "bundler",
      jsx: "react-jsx",
      declaration: true,
      strict: true,
      skipLibCheck: true
    },
    include: ["src/**/*"]
  };
  fs.writeFileSync(path.join(reactDir, "tsconfig.json"), JSON.stringify(tsConfig, null, 2), "utf-8");

  // src/types.ts
  const typesContent = `import * as React from "react";

export interface ZakIconProps extends React.SVGAttributes<SVGSVGElement> {
  size?: number | string;
  strokeWidth?: number | string;
  color?: string;
  className?: string;
}

export type IconComponent = React.ForwardRefExoticComponent<
  ZakIconProps & React.RefAttributes<SVGSVGElement>
>;
`;
  fs.writeFileSync(path.join(srcDir, "types.ts"), typesContent, "utf-8");

  // Generate each icon component
  const componentExports: string[] = [];
  const iconRegistryEntries: string[] = [];

  for (const item of iconsJson) {
    const filePath = path.join(iconsDir, item.category, `${item.name}.svg`);
    if (!fs.existsSync(filePath)) continue;

    const svg = fs.readFileSync(filePath, "utf-8");
    const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    const innerHtml = match ? match[1].trim() : "";

    const componentName = toPascalCase(item.name);
    componentExports.push(`export { ${componentName} } from "./icons/${componentName}";`);
    iconRegistryEntries.push(`  "${item.name}": ${componentName},`);

    // Convert SVG inner HTML attributes for React (stroke-width -> strokeWidth, etc.)
    const reactInnerHtml = innerHtml
      .replace(/stroke-width/g, "strokeWidth")
      .replace(/stroke-linecap/g, "strokeLinecap")
      .replace(/stroke-linejoin/g, "strokeLinejoin")
      .replace(/stroke-miterlimit/g, "strokeMiterlimit")
      .replace(/fill-rule/g, "fillRule")
      .replace(/clip-rule/g, "clipRule");

    const compContent = `import * as React from "react";
import { ZakIconProps } from "../types";

export const ${componentName} = React.forwardRef<SVGSVGElement, ZakIconProps>(
  ({ size = 24, strokeWidth = 2, color = "currentColor", className = "", children, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
        aria-hidden="true"
        {...props}
      >
        ${reactInnerHtml}
        {children}
      </svg>
    );
  }
);

${componentName}.displayName = "${componentName}";
`;

    fs.writeFileSync(path.join(compDir, `${componentName}.tsx`), compContent, "utf-8");
  }

  // src/ZakIcon.tsx (Generic component)
  const genericContent = `import * as React from "react";
import { ZakIconProps, IconComponent } from "./types";
${iconsJson.map((i: any) => `import { ${toPascalCase(i.name)} } from "./icons/${toPascalCase(i.name)}";`).join("\n")}

const iconMap: Record<string, IconComponent> = {
${iconRegistryEntries.join("\n")}
};

export interface GenericZakIconProps extends ZakIconProps {
  name: string;
}

export const ZakIcon = React.forwardRef<SVGSVGElement, GenericZakIconProps>(
  ({ name, ...props }, ref) => {
    const Component = iconMap[name];
    if (!Component) {
      console.warn(\`[ZAK Icons] Icon "\${name}" not found.\`);
      return null;
    }
    return <Component ref={ref} {...props} />;
  }
);

ZakIcon.displayName = "ZakIcon";
`;
  fs.writeFileSync(path.join(srcDir, "ZakIcon.tsx"), genericContent, "utf-8");

  // src/index.ts
  const indexContent = `export * from "./types";
export * from "./ZakIcon";
${componentExports.join("\n")}
`;
  fs.writeFileSync(path.join(srcDir, "index.ts"), indexContent, "utf-8");

  // README.md
  const readmeContent = `# @zak-icons/react

React components for the ZAK Icons ecosystem.

## Installation

\`\`\`bash
npm install @zak-icons/react
# or
pnpm add @zak-icons/react
\`\`\`

## Usage

### Individual Component (Tree-shakeable)

\`\`\`tsx
import { Truck, ArrowLeft, Container } from "@zak-icons/react";

export function Dashboard() {
  return (
    <div>
      <Truck size={32} color="#0284c7" strokeWidth={1.5} />
      <ArrowLeft size={24} />
      <Container size={28} className="text-emerald-500" />
    </div>
  );
}
\`\`\`

### Generic ZakIcon Component

\`\`\`tsx
import { ZakIcon } from "@zak-icons/react";

<ZakIcon name="truck" size={24} strokeWidth={2} />
\`\`\`

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| \`size\` | \`number \| string\` | \`24\` | Icon width and height in px |
| \`strokeWidth\` | \`number \| string\` | \`2\` | SVG stroke width |
| \`color\` | \`string\` | \`"currentColor"\` | SVG stroke color |
| \`className\` | \`string\` | \`""\` | CSS classes |
| Standard SVG props | \`SVGAttributes\` | - | All standard SVG element attributes |

## License

MIT
`;
  fs.writeFileSync(path.join(reactDir, "README.md"), readmeContent, "utf-8");

  console.log(`Successfully generated @zak-icons/react with ${iconsJson.length} components!`);
}

if (require.main === module) {
  runGenerateReact();
}
