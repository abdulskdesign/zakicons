import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getIconByName, getAllIcons, getRelatedIcons } from "@/lib/icons";
import { IconDetailCustomizer } from "@/components/icon-detail/IconDetailCustomizer";
import { IconCard } from "@/components/icon-card/IconCard";

interface PageProps {
  params: Promise<{ icon: string }>;
}

export async function generateStaticParams() {
  const icons = getAllIcons();
  return icons.map(icon => ({
    icon: icon.name
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { icon: iconName } = await params;
  const icon = getIconByName(iconName);

  if (!icon) {
    return {
      title: "Icon Not Found — ZAK Icons"
    };
  }

  return {
    title: `${icon.title} Icon — ZAK Icons`,
    description: `${icon.title} SVG icon from ZAK Icons. Download and use it in React, Blazor, Flutter, and web applications.`,
    keywords: [...icon.tags, icon.category, "svg", "zak icons"]
  };
}

export default async function IconDetailPage({ params }: PageProps) {
  const { icon: iconName } = await params;
  const icon = getIconByName(iconName);

  if (!icon) {
    notFound();
  }

  const related = getRelatedIcons(icon, 6);

  return (
    <div className="space-y-8 py-4">
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/icons" className="hover:text-foreground transition-colors">
          Icons
        </Link>
        <span>/</span>
        <Link
          href={`/categories/${icon.category}`}
          className="capitalize hover:text-foreground transition-colors"
        >
          {icon.category}
        </Link>
        <span>/</span>
        <span className="font-semibold text-foreground">{icon.title}</span>
      </nav>

      {/* Header Info */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
              {icon.title}
            </h1>
            <span className="text-xs uppercase font-semibold tracking-wider text-muted-foreground px-2 py-0.5 rounded bg-muted border border-border">
              {icon.category}
            </span>
          </div>
          <p className="text-xs text-muted-foreground font-mono mt-1">
            {icon.name} • 24×24 Canvas • Outline Style
          </p>
        </div>

        {/* Tags badges */}
        <div className="flex flex-wrap items-center gap-1.5">
          {icon.tags.slice(0, 5).map(tag => (
            <span
              key={tag}
              className="text-[11px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground border border-border"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      {/* Interactive Customizer Studio */}
      <IconDetailCustomizer icon={icon} />

      {/* Related Icons Section */}
      {related.length > 0 && (
        <section className="space-y-4 pt-10 border-t border-border">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-foreground">Related Icons</h2>
              <p className="text-xs text-muted-foreground">Icons in similar categories or with related tags.</p>
            </div>
            <Link
              href={`/categories/${icon.category}`}
              className="text-xs font-semibold text-primary hover:underline"
            >
              More in {icon.category} →
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {related.map(rel => (
              <IconCard key={rel.name} icon={rel} size={24} strokeWidth={2} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
