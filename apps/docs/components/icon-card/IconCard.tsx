"use client";

import React, { useState } from "react";
import Link from "next/link";
import { IconDefinition } from "@/lib/icons";
import { copyToClipboard, toPascalCase } from "@/lib/utils";

interface IconCardProps {
  icon: IconDefinition;
  size?: number;
  strokeWidth?: number;
  viewMode?: "grid" | "list";
}

export function IconCard({ icon, size = 24, strokeWidth = 2, viewMode = "grid" }: IconCardProps) {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const handleCopySvg = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const success = await copyToClipboard(icon.svg);
    if (success) {
      setCopiedType("svg");
      setTimeout(() => setCopiedType(null), 1800);
    }
  };

  const handleCopyJsx = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const pascal = toPascalCase(icon.name);
    const jsx = `<${pascal} size={${size}} strokeWidth={${strokeWidth}} />`;
    const success = await copyToClipboard(jsx);
    if (success) {
      setCopiedType("jsx");
      setTimeout(() => setCopiedType(null), 1800);
    }
  };

  if (viewMode === "list") {
    return (
      <Link
        href={`/icons/${icon.name}`}
        className="group flex items-center justify-between p-3 rounded-lg border border-border bg-card hover:border-foreground/30 hover:shadow-sm transition-all"
      >
        <div className="flex items-center gap-4 min-w-0">
          <div className="w-10 h-10 rounded-md bg-muted/60 flex items-center justify-center text-foreground group-hover:scale-105 transition-transform flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              dangerouslySetInnerHTML={{ __html: icon.elements }}
            />
          </div>
          <div className="min-w-0">
            <h3 className="font-medium text-sm text-foreground truncate group-hover:text-primary transition-colors">
              {icon.title}
            </h3>
            <p className="text-xs text-muted-foreground font-mono truncate">
              {icon.name} • <span className="capitalize">{icon.category}</span>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={handleCopySvg}
            className="px-2.5 py-1 text-xs font-medium rounded bg-muted hover:bg-foreground hover:text-background text-muted-foreground transition-colors"
            title="Copy SVG"
          >
            {copiedType === "svg" ? "Copied SVG!" : "SVG"}
          </button>
          <button
            type="button"
            onClick={handleCopyJsx}
            className="px-2.5 py-1 text-xs font-medium rounded bg-muted hover:bg-foreground hover:text-background text-muted-foreground transition-colors"
            title="Copy JSX"
          >
            {copiedType === "jsx" ? "Copied JSX!" : "JSX"}
          </button>
        </div>
      </Link>
    );
  }

  return (
    <Link
      href={`/icons/${icon.name}`}
      className="group relative flex flex-col items-center justify-between p-4 rounded-xl border border-border bg-card hover:border-foreground/30 hover:shadow-sm transition-all text-center aspect-[1/1.08]"
    >
      {/* Top category chip */}
      <div className="w-full flex justify-end">
        <span className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground/60 px-1.5 py-0.5 rounded bg-muted/40">
          {icon.category}
        </span>
      </div>

      {/* SVG Icon Display */}
      <div className="my-auto py-2 text-foreground group-hover:scale-110 transition-transform duration-150">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeLinejoin="round"
          dangerouslySetInnerHTML={{ __html: icon.elements }}
        />
      </div>

      {/* Icon Name & Title */}
      <div className="w-full mt-2">
        <p className="font-medium text-xs text-foreground truncate group-hover:text-primary transition-colors">
          {icon.title}
        </p>
        <p className="text-[11px] text-muted-foreground font-mono truncate">
          {icon.name}
        </p>
      </div>

      {/* Hover action bar */}
      <div className="absolute inset-x-2 bottom-2 pt-1 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity bg-card/95 backdrop-blur-sm rounded-lg">
        <button
          type="button"
          onClick={handleCopySvg}
          className="flex-1 py-1 text-[11px] font-medium rounded bg-muted hover:bg-primary hover:text-primary-foreground text-foreground transition-colors border border-border"
          title="Copy SVG"
        >
          {copiedType === "svg" ? "Copied!" : "SVG"}
        </button>
        <button
          type="button"
          onClick={handleCopyJsx}
          className="flex-1 py-1 text-[11px] font-medium rounded bg-muted hover:bg-primary hover:text-primary-foreground text-foreground transition-colors border border-border"
          title="Copy React JSX"
        >
          {copiedType === "jsx" ? "Copied!" : "JSX"}
        </button>
      </div>
    </Link>
  );
}
