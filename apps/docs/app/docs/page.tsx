import React from "react";
import Link from "next/link";
import { CodeBlock } from "@/components/code-block/CodeBlock";

export const metadata = {
  title: "Getting Started — ZAK Icons Docs",
  description: "Introduction to the ZAK Icons ecosystem, design principles, and supported framework integrations."
};

export default function GettingStartedDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Getting Started with ZAK Icons
        </h1>
        <p className="text-base text-muted-foreground mt-2 leading-relaxed">
          ZAK Icons is an independent, production-grade icon ecosystem engineered from the ground up for modern web, enterprise SaaS, and mobile applications.
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Why ZAK Icons?</h2>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li><strong>Single Source of Truth:</strong> 320+ canonical SVG vector files in <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">/icons</code> automatically generate typed packages for all targets.</li>
          <li><strong>Enterprise & Logistics First:</strong> Dedicated industry coverage for shipping, ports, trucking, warehousing, and inventory tracking.</li>
          <li><strong>24×24 Grid System:</strong> Mathematically balanced 24×24 canvas with standard 2px stroke and round linecaps/joins.</li>
          <li><strong>Zero Dependency Bloat:</strong> Lightweight packages with full tree-shaking support for every target platform.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Quickstart by Platform</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
          <Link
            href="/docs/react"
            className="p-4 rounded-xl border border-border bg-card hover:border-foreground/30 transition-all space-y-2"
          >
            <span className="font-bold text-sm text-foreground">React Package →</span>
            <p className="text-xs text-muted-foreground">Tree-shakeable React components with full TypeScript props.</p>
          </Link>
          <Link
            href="/docs/blazor"
            className="p-4 rounded-xl border border-border bg-card hover:border-foreground/30 transition-all space-y-2"
          >
            <span className="font-bold text-sm text-foreground">Blazor Library →</span>
            <p className="text-xs text-muted-foreground">Native Razor components for Blazor Server and WebAssembly.</p>
          </Link>
          <Link
            href="/docs/flutter"
            className="p-4 rounded-xl border border-border bg-card hover:border-foreground/30 transition-all space-y-2"
          >
            <span className="font-bold text-sm text-foreground">Flutter Package →</span>
            <p className="text-xs text-muted-foreground">Vector widgets and icon data for iOS, Android, and Desktop.</p>
          </Link>
          <Link
            href="/docs/css"
            className="p-4 rounded-xl border border-border bg-card hover:border-foreground/30 transition-all space-y-2"
          >
            <span className="font-bold text-sm text-foreground">CSS Package →</span>
            <p className="text-xs text-muted-foreground">Pure CSS icon classes via mask-image — works in any HTML, Vue, Svelte, or PHP project.</p>
          </Link>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Basic React Example</h2>
        <CodeBlock
          language="tsx"
          code={`import { Truck, Container, ArrowRight } from "@zak-icons/react";

export function LogisticsDashboard() {
  return (
    <div className="flex items-center gap-4">
      <Truck size={32} color="#0284c7" strokeWidth={1.5} />
      <ArrowRight size={20} />
      <Container size={32} color="#10b981" />
    </div>
  );
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-bold text-foreground">Accessibility Best Practice</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          By default, all ZAK Icons render with <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">aria-hidden=&quot;true&quot;</code> to prevent screen readers from announcing decorative graphics. If an icon communicates semantic meaning, specify an <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">aria-label</code>:
        </p>
        <CodeBlock
          language="tsx"
          code={`{/* Decorative icon (default) */}
<Truck size={24} />

{/* Interactive semantic button with icon */}
<button aria-label="Dispatch Freight Delivery">
  <Truck size={24} />
</button>`}
        />
      </div>
    </div>
  );
}
