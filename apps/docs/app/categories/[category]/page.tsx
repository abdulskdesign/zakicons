import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllCategories, getCategoryById } from "@/lib/categories";
import { getIconsByCategory } from "@/lib/icons";
import { IconCard } from "@/components/icon-card/IconCard";

interface PageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map(cat => ({
    category: cat.id
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category: catId } = await params;
  const category = getCategoryById(catId);

  if (!category) {
    return {
      title: "Category Not Found — ZAK Icons"
    };
  }

  return {
    title: `${category.title} Icons — ZAK Icons`,
    description: `Browse ${category.count} vector icons in the ${category.title} category. ${category.description}`
  };
}

export default async function CategoryDetailPage({ params }: PageProps) {
  const { category: catId } = await params;
  const category = getCategoryById(catId);

  if (!category) {
    notFound();
  }

  const icons = getIconsByCategory(category.id);

  return (
    <div className="space-y-8 py-4">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-muted-foreground">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/categories" className="hover:text-foreground transition-colors">
          Categories
        </Link>
        <span>/</span>
        <span className="font-semibold text-foreground">{category.title}</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
            {category.title} Icons
          </h1>
          <p className="text-sm text-muted-foreground mt-1 max-w-xl">
            {category.description}
          </p>
        </div>
        <div className="text-xs font-mono text-muted-foreground px-3 py-1.5 rounded-lg bg-muted self-start sm:self-auto">
          {icons.length} icons
        </div>
      </div>

      {/* Grid of Icons in this category */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {icons.map(icon => (
          <IconCard key={icon.name} icon={icon} size={24} strokeWidth={2} />
        ))}
      </div>
    </div>
  );
}
