import React from "react";
import Link from "next/link";

export const metadata = {
  title: "About & Design System — ZAK Icons",
  description: "Learn about the design philosophy, mathematical 24x24 grid, and open-source architecture behind ZAK Icons."
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-12 py-6">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          About ZAK Icons
        </h1>
        <p className="text-base text-muted-foreground mt-3 leading-relaxed">
          ZAK Icons was conceived as an independent, enterprise-grade icon ecosystem built to address gaps in modern icon libraries—specifically for complex enterprise dashboards, freight logistics, supply chain, and cross-platform UI engineering.
        </p>
      </div>

      {/* Grid Philosophy */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          The 24×24 Mathematical Grid
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Every icon in the ZAK library is drawn on a strict 24×24 pixel canvas. By anchoring vectors to whole pixels, icons maintain razor-sharp clarity when scaled to standard UI increments: 16px, 20px, 24px, 32px, 48px, and 64px.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 not-prose my-6">
          <div className="p-4 rounded-xl border border-border bg-card space-y-1">
            <span className="text-xs font-mono text-muted-foreground">Stroke Thickness</span>
            <p className="font-bold text-lg text-foreground">2px Default</p>
            <p className="text-xs text-muted-foreground">Scales cleanly to 1.5px and 1px variants.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card space-y-1">
            <span className="text-xs font-mono text-muted-foreground">Caps & Joins</span>
            <p className="font-bold text-lg text-foreground">Round / Round</p>
            <p className="text-xs text-muted-foreground">Provides a friendly, cohesive geometry.</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-card space-y-1">
            <span className="text-xs font-mono text-muted-foreground">Canvas Frame</span>
            <p className="font-bold text-lg text-foreground">24 × 24 Canvas</p>
            <p className="text-xs text-muted-foreground">2px padding protects optical visual weight.</p>
          </div>
        </div>
      </section>

      {/* Single Source of Truth */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          Single Source of Truth Architecture
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Unlike icon sets that maintain duplicated component code across different languages, ZAK Icons treats the raw SVG files in <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">/icons</code> as the single source of truth. Automated compilation pipelines validate, optimize, and generate native packages for:
        </p>
        <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground leading-relaxed">
          <li><strong>@zak-icons/core</strong> — Central metadata and raw SVG definitions</li>
          <li><strong>@zak-icons/react</strong> — Tree-shakeable React 18 & 19 components with TypeScript</li>
          <li><strong>ZakIcons.Blazor</strong> — Razor components for .NET Blazor Server and WebAssembly</li>
          <li><strong>zak_icons</strong> — Pure Dart Flutter widgets and constants</li>
          <li><strong>@zak-icons/web</strong> — W3C Custom Elements for any HTML or web framework</li>
        </ul>
      </section>

      {/* Open Source License */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold tracking-tight text-foreground">
          MIT License
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          ZAK Icons is completely free and open-source under the MIT license. You can use it freely in personal projects, commercial software, enterprise applications, and open-source libraries without attribution required.
        </p>
        <div className="pt-2">
          <Link
            href="/icons"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
          >
            Explore 320+ Icons Now →
          </Link>
        </div>
      </section>
    </div>
  );
}
