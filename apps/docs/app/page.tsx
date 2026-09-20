import React from "react";
import Link from "next/link";
import { iconsData, IconDefinition } from "@/lib/icons";
import { getAllCategories } from "@/lib/categories";
import { IconCard } from "@/components/icon-card/IconCard";
import { CodeBlock } from "@/components/code-block/CodeBlock";

export default function HomePage() {
  const categories = getAllCategories();

  // Selected popular icons
  const popularIconNames = ["truck", "container", "cargo", "arrow-right", "shield-check", "shopping-cart", "bot", "database", "refresh-cw", "cloud", "server", "code"];
  const popularIcons: IconDefinition[] = popularIconNames
    .map(name => iconsData.find(i => i.name === name))
    .filter((i): i is IconDefinition => Boolean(i));

  // Logistics spotlight icons
  const logisticsIcons = iconsData.filter(i => i.category === "logistics").slice(0, 12);

  return (
    <div className="space-y-16 py-6">
      {/* Hero Section */}
      <section className="text-center max-w-3xl mx-auto space-y-6 pt-4 sm:pt-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-muted/50 text-xs font-medium text-foreground">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Release 1.0 — 320+ Production-Ready Vector Icons</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1]">
          Beautiful icons for modern applications.
        </h1>

        <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          A consistent, open-source icon ecosystem built on an original 24×24 outline design system. Tailored for web, mobile, and enterprise platforms.
        </p>

        {/* Hero Search Input Action */}
        <div className="max-w-xl mx-auto pt-2">
          <Link
            href="/icons"
            className="flex items-center justify-between px-4 py-3.5 rounded-xl border border-border bg-card hover:border-foreground/40 text-muted-foreground text-sm shadow-sm transition-all group"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
              <span>Search 300+ vector icons...</span>
            </div>
            <kbd className="px-2 py-1 text-xs font-mono bg-muted rounded border border-border text-foreground font-semibold">
              /
            </kbd>
          </Link>
        </div>

        {/* Quick framework install chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono text-muted-foreground">
          <span className="px-2.5 py-1 rounded bg-muted border border-border">npm i @zak-icons/react</span>
          <span className="px-2.5 py-1 rounded bg-muted border border-border">dotnet add package ZakIcons.Blazor</span>
          <span className="px-2.5 py-1 rounded bg-muted border border-border">zak_icons (Flutter)</span>
          <span className="px-2.5 py-1 rounded bg-muted border border-border">@zak-icons/css (CSS)</span>
        </div>
      </section>

      {/* Popular Icons Showcase */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">Popular Icons</h2>
            <p className="text-xs text-muted-foreground mt-1">Frequently used icons for web, dashboard, and mobile applications.</p>
          </div>
          <Link href="/icons" className="text-xs font-semibold text-primary hover:underline flex items-center gap-1">
            Browse all 320+ →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {popularIcons.map(icon => (
            <IconCard key={icon.name} icon={icon} size={28} strokeWidth={2} />
          ))}
        </div>
      </section>

      {/* Logistics & Enterprise Spotlight */}
      <section className="space-y-6 rounded-2xl border border-border bg-card/60 p-6 sm:p-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-border pb-4">
          <div>
            <div className="inline-block text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-1">
              Enterprise & Logistics Suite
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Purpose-built for Supply Chain & Operations
            </h2>
            <p className="text-sm text-muted-foreground mt-1 max-w-2xl">
              High-precision icons designed specifically for maritime shipping, container tracking, freight forwarding, customs clearance, and warehouse management.
            </p>
          </div>
          <Link
            href="/categories/logistics"
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity self-start sm:self-auto"
          >
            Explore Logistics Suite
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {logisticsIcons.map(icon => (
            <IconCard key={icon.name} icon={icon} size={28} strokeWidth={2} />
          ))}
        </div>
      </section>

      {/* Featured Collections Showcase */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">Featured Collections</h2>
            <p className="text-xs text-muted-foreground mt-1">Curated icon sets organized for domain-specific interfaces.</p>
          </div>
          <Link href="/collections" className="text-xs font-semibold text-primary hover:underline">
            View all collections →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/collections#essential-ui"
            className="group rounded-xl border border-border bg-card p-6 hover:border-foreground/40 hover:shadow-sm transition-all space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
              Essential UI
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Standard navigation, state indicators, action buttons, menus, and layout controls.
            </p>
            <span className="text-xs font-medium text-foreground underline underline-offset-4">Browse Collection →</span>
          </Link>

          <Link
            href="/collections#logistics"
            className="group rounded-xl border border-border bg-card p-6 hover:border-foreground/40 hover:shadow-sm transition-all space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M1 3h15v13H1z" /><path d="M16 8h4l3 3v5h-7V8z" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" />
              </svg>
            </div>
            <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
              Logistics & Supply Chain
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Containers, cargo ships, forklifts, ports, customs, freight trains, and tracking seals.
            </p>
            <span className="text-xs font-medium text-foreground underline underline-offset-4">Browse Collection →</span>
          </Link>

          <Link
            href="/collections#developer"
            className="group rounded-xl border border-border bg-card p-6 hover:border-foreground/40 hover:shadow-sm transition-all space-y-3"
          >
            <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center text-foreground group-hover:scale-105 transition-transform">
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
              Cloud & Developer
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Terminals, Git branches, pull requests, databases, servers, APIs, and AI models.
            </p>
            <span className="text-xs font-medium text-foreground underline underline-offset-4">Browse Collection →</span>
          </Link>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="space-y-6">
        <div className="flex items-end justify-between border-b border-border pb-4">
          <div>
            <h2 className="text-xl font-bold tracking-tight text-foreground">Explore Categories</h2>
            <p className="text-xs text-muted-foreground mt-1">26 distinct categories covering all enterprise and consumer scenarios.</p>
          </div>
          <Link href="/categories" className="text-xs font-semibold text-primary hover:underline">
            All categories ({categories.length}) →
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
          {categories.map(cat => (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              className="group p-4 rounded-xl border border-border bg-card hover:border-foreground/40 transition-all flex flex-col justify-between"
            >
              <span className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                {cat.title}
              </span>
              <span className="text-xs text-muted-foreground mt-2 font-mono">
                {cat.count} icons
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Developer Quickstart Showcase */}
      <section className="rounded-2xl border border-border bg-card p-6 sm:p-8 space-y-6">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-bold tracking-tight text-foreground">Developer First</h2>
          <p className="text-sm text-muted-foreground mt-1">
            Install and import icons in seconds with first-class TypeScript types and automatic tree-shaking.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">React Quickstart</div>
            <CodeBlock
              language="bash"
              code={`pnpm add @zak-icons/react\n# or\nnpm install @zak-icons/react`}
            />
            <CodeBlock
              language="tsx"
              code={`import { Truck, Container } from "@zak-icons/react";\n\nexport function ShippingCard() {\n  return (\n    <div>\n      <Truck size={32} strokeWidth={1.5} color="#0284c7" />\n      <Container size={24} />\n    </div>\n  );\n}`}
            />
          </div>

          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">Multi-Platform Ecosystem</div>
            <CodeBlock
              language="bash"
              code={`# Blazor\ndotnet add package ZakIcons.Blazor\n\n# CSS\npnpm add @zak-icons/css\n\n# Flutter\nflutter pub add zak_icons`}
            />
            <CodeBlock
              language="razor"
              code={`@* Blazor Server or WebAssembly *@\n<ZakIcon Name="Truck" Size="32" StrokeWidth="1.5" />\n<ZakIcon Name="Container" Size="24" />`}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
