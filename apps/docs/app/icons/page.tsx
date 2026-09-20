"use client";

import React, { useState, useMemo, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { iconsData } from "@/lib/icons";
import { getAllCategories } from "@/lib/categories";
import { searchIcons } from "@/lib/search";
import { IconFilters } from "@/components/icon-filters/IconFilters";
import { IconGrid } from "@/components/icon-grid/IconGrid";

function IconsBrowserContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [strokeWidth, setStrokeWidth] = useState(2);
  const [iconSize, setIconSize] = useState(24);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const categories = useMemo(() => getAllCategories(), []);

  // Sync category with URL if param changes
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [searchParams]);

  // Compute filtered icons using Fuse search
  const filteredIcons = useMemo(() => {
    return searchIcons(searchQuery, selectedCategory);
  }, [searchQuery, selectedCategory]);

  return (
    <div className="space-y-6 py-4">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Browse Icons
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Explore all {iconsData.length} vector icons. Click any card to inspect, customize, or download.
        </p>
      </div>

      {/* Interactive Controls & Filters */}
      <IconFilters
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        categories={categories}
        strokeWidth={strokeWidth}
        onStrokeWidthChange={setStrokeWidth}
        iconSize={iconSize}
        onIconSizeChange={setIconSize}
        viewMode={viewMode}
        onViewModeChange={setViewMode}
        totalCount={iconsData.length}
        filteredCount={filteredIcons.length}
      />

      {/* Icon Grid */}
      <IconGrid
        icons={filteredIcons}
        size={iconSize}
        strokeWidth={strokeWidth}
        viewMode={viewMode}
        onResetSearch={() => {
          setSearchQuery("");
          setSelectedCategory("all");
        }}
      />
    </div>
  );
}

export default function IconsBrowserPage() {
  return (
    <Suspense fallback={<div className="py-12 text-center text-sm text-muted-foreground">Loading icons...</div>}>
      <IconsBrowserContent />
    </Suspense>
  );
}
