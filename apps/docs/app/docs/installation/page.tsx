import React from "react";
import { CodeBlock } from "@/components/code-block/CodeBlock";

export const metadata = {
  title: "Installation — ZAK Icons Docs",
  description: "Complete installation commands and package setup for React, Blazor, Flutter, CSS, and Core."
};

export default function InstallationDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Installation
        </h1>
        <p className="text-base text-muted-foreground mt-2 leading-relaxed">
          Install the appropriate ZAK Icons package for your framework or development stack.
        </p>
      </div>

      {/* React */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">React / Next.js / Vite</h2>
        <p className="text-sm text-muted-foreground">
          Includes 320+ tree-shakeable components with full TypeScript declarations.
        </p>
        <CodeBlock
          language="bash"
          code={`# npm
npm install @zak-icons/react

# pnpm
pnpm add @zak-icons/react

# yarn
yarn add @zak-icons/react`}
        />
      </section>

      {/* Blazor */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Blazor (.NET 8 & 9)</h2>
        <p className="text-sm text-muted-foreground">
          Native Razor component library for Blazor Server, WebAssembly, and Hybrid.
        </p>
        <CodeBlock
          language="bash"
          code={`# .NET CLI
dotnet add package ZakIcons.Blazor

# Package Manager Console
Install-Package ZakIcons.Blazor`}
        />
      </section>

      {/* Flutter */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Flutter (iOS, Android, Web, Desktop)</h2>
        <p className="text-sm text-muted-foreground">
          Vector icon data and responsive widget for Flutter applications.
        </p>
        <CodeBlock
          language="bash"
          code={`flutter pub add zak_icons`}
        />
      </section>

      {/* CSS Package */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">CSS Package (Plain HTML / Any Framework)</h2>
        <p className="text-sm text-muted-foreground">
          A single compiled CSS file with one class per icon. Works in any HTML page, Vue, Svelte, Angular, or PHP project — no JavaScript required.
        </p>
        <CodeBlock
          language="bash"
          code={`npm install @zak-icons/css\n\n# or pnpm\npnpm add @zak-icons/css`}
        />
        <CodeBlock
          language="html"
          code={`<!-- Or load from CDN -->\n<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zak-icons/css/dist/zak-icons.css" />`}
        />
      </section>

      {/* Core Package */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Core Package (Data & Metadata)</h2>
        <p className="text-sm text-muted-foreground">
          Access raw SVG strings, AST nodes, and category metadata directly.
        </p>
        <CodeBlock
          language="bash"
          code={`npm install @zak-icons/core`}
        />
      </section>
    </div>
  );
}
