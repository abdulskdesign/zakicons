"use client";

import React from "react";
import { CategoryDefinition } from "@/lib/categories";

interface IconFiltersProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  categories: CategoryDefinition[];
  strokeWidth: number;
  onStrokeWidthChange: (w: number) => void;
  iconSize: number;
  onIconSizeChange: (s: number) => void;
  viewMode: "grid" | "list";
  onViewModeChange: (m: "grid" | "list") => void;
  totalCount: number;
  filteredCount: number;
}

export function IconFilters({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  categories,
  strokeWidth,
  onStrokeWidthChange,
  iconSize,
  onIconSizeChange,
  viewMode,
  onViewModeChange,
  totalCount,
  filteredCount
}: IconFiltersProps) {
  return (
    <div className="space-y-4 mb-8">
      {/* Top Bar: Search Input + View Mode */}
      <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between">
        <div className="relative flex-1">
          <svg
            className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            id="icon-search-input"
            type="text"
            value={searchQuery}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="Search icons by name, tag, or category... (Press / to focus)"
            className="w-full pl-10 pr-10 py-2.5 rounded-lg border border-border bg-card text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => onSearchChange("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-muted-foreground hover:text-foreground"
              aria-label="Clear search"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>

        {/* Category Select Dropdown on Mobile / Compact */}
        <div className="flex items-center gap-2">
          <select
            value={selectedCategory}
            onChange={e => onCategoryChange(e.target.value)}
            className="px-3 py-2 text-xs rounded-lg border border-border bg-card text-foreground focus:outline-none focus:ring-1 focus:ring-primary shadow-sm"
          >
            <option value="all">All Categories ({totalCount})</option>
            {categories.map(c => (
              <option key={c.id} value={c.id}>
                {c.title} ({c.count})
              </option>
            ))}
          </select>

          {/* Grid / List Switcher */}
          <div className="flex items-center border border-border rounded-lg bg-card p-0.5 shadow-sm">
            <button
              type="button"
              onClick={() => onViewModeChange("grid")}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === "grid" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="Grid view"
              title="Grid view"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" /><rect x="14" y="14" width="7" height="7" /><rect x="3" y="14" width="7" height="7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => onViewModeChange("list")}
              className={`p-1.5 rounded-md transition-colors ${
                viewMode === "list" ? "bg-muted text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
              aria-label="List view"
              title="List view"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="8" y1="6" x2="21" y2="6" /><line x1="8" y1="12" x2="21" y2="12" /><line x1="8" y1="18" x2="21" y2="18" /><line x1="3" y1="6" x2="3.01" y2="6" /><line x1="3" y1="12" x2="3.01" y2="12" /><line x1="3" y1="18" x2="3.01" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Control Bar: Stroke Width, Size preview, Counter */}
      <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-muted-foreground border-y border-border py-2.5">
        <div className="flex items-center gap-6">
          {/* Stroke Width Toggle */}
          <div className="flex items-center gap-2">
            <span className="font-medium text-foreground">Stroke:</span>
            <div className="flex items-center gap-1 bg-muted/60 p-0.5 rounded-md border border-border">
              {[1, 1.5, 2, 2.5, 3].map(w => (
                <button
                  key={w}
                  type="button"
                  onClick={() => onStrokeWidthChange(w)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                    strokeWidth === w ? "bg-card text-foreground font-bold shadow-xs" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {w}px
                </button>
              ))}
            </div>
          </div>

          {/* Size Preview Toggle */}
          <div className="hidden sm:flex items-center gap-2">
            <span className="font-medium text-foreground">Size:</span>
            <div className="flex items-center gap-1 bg-muted/60 p-0.5 rounded-md border border-border">
              {[20, 24, 28, 32].map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => onIconSizeChange(s)}
                  className={`px-2 py-0.5 rounded text-[11px] font-mono transition-colors ${
                    iconSize === s ? "bg-card text-foreground font-bold shadow-xs" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {s}px
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Count */}
        <div className="text-xs font-mono">
          Showing <span className="font-semibold text-foreground">{filteredCount}</span> of {totalCount} icons
        </div>
      </div>
    </div>
  );
}
