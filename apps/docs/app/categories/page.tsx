import React from "react";
import Link from "next/link";
import { getAllCategories } from "@/lib/categories";
import { getIconsByCategory } from "@/lib/icons";

export const metadata = {
  title: "Categories — ZAK Icons",
  description: "Browse ZAK Icons organized into 26 distinct categories for web, enterprise, and mobile."
};

export default function CategoriesPage() {
  const categories = getAllCategories();

  return (
    <div className="space-y-8 py-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Icon Categories
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Explore all {categories.length} organized categories across our library.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(cat => {
          const sampleIcons = getIconsByCategory(cat.id).slice(0, 4);
          return (
            <Link
              key={cat.id}
              href={`/categories/${cat.id}`}
              className="group rounded-xl border border-border bg-card p-5 hover:border-foreground/40 hover:shadow-sm transition-all flex flex-col justify-between space-y-4"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <h2 className="font-bold text-base text-foreground group-hover:text-primary transition-colors">
                    {cat.title}
                  </h2>
                  <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded bg-muted">
                    {cat.count} icons
                  </span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {cat.description}
                </p>
              </div>

              {/* Sample icon previews in card */}
              <div className="flex items-center gap-2 pt-2 border-t border-border">
                {sampleIcons.map(icon => (
                  <div
                    key={icon.name}
                    className="w-8 h-8 rounded bg-muted/60 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors"
                    title={icon.title}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      dangerouslySetInnerHTML={{ __html: icon.elements }}
                    />
                  </div>
                ))}
                <span className="text-[11px] text-muted-foreground font-medium ml-auto group-hover:translate-x-0.5 transition-transform">
                  View category →
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
