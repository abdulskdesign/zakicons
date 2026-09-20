"use client";

import React from "react";
import { IconDefinition } from "@/lib/icons";
import { IconCard } from "../icon-card/IconCard";

interface IconGridProps {
  icons: IconDefinition[];
  size?: number;
  strokeWidth?: number;
  viewMode?: "grid" | "list";
  onResetSearch?: () => void;
}

export function IconGrid({
  icons,
  size = 24,
  strokeWidth = 2,
  viewMode = "grid",
  onResetSearch
}: IconGridProps) {
  if (icons.length === 0) {
    return (
      <div className="py-16 text-center rounded-xl border border-dashed border-border bg-card/40 my-8">
        <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mx-auto mb-3 text-muted-foreground">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
        </div>
        <h3 className="text-base font-semibold text-foreground mb-1">No icons found</h3>
        <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-4">
          We couldn&apos;t find any icons matching your search criteria. Try another name, category, or keyword.
        </p>
        {onResetSearch && (
          <button
            type="button"
            onClick={onResetSearch}
            className="px-4 py-2 text-xs font-medium rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Clear Search & Filters
          </button>
        )}
      </div>
    );
  }

  if (viewMode === "list") {
    return (
      <div className="space-y-2">
        {icons.map(icon => (
          <IconCard
            key={icon.name}
            icon={icon}
            size={size}
            strokeWidth={strokeWidth}
            viewMode="list"
          />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3">
      {icons.map(icon => (
        <IconCard
          key={icon.name}
          icon={icon}
          size={size}
          strokeWidth={strokeWidth}
          viewMode="grid"
        />
      ))}
    </div>
  );
}
