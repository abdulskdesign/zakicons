"use client";

import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { searchIcons } from "@/lib/search";
import { IconDefinition } from "@/lib/icons";

interface IconSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function IconSearchModal({ isOpen, onClose }: IconSearchModalProps) {
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [results, setResults] = useState<IconDefinition[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  // Search when query changes
  useEffect(() => {
    const res = searchIcons(query).slice(0, 12);
    setResults(res);
    setSelectedIndex(0);
  }, [query]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery("");
    }
  }, [isOpen]);

  // Keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex(prev => (prev < results.length - 1 ? prev + 1 : prev));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex(prev => (prev > 0 ? prev - 1 : 0));
      } else if (e.key === "Enter") {
        if (results[selectedIndex]) {
          e.preventDefault();
          onClose();
          router.push(`/icons/${results[selectedIndex].name}`);
        }
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, results, selectedIndex, router, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-background/80 backdrop-blur-sm transition-all">
      <div
        className="fixed inset-0"
        onClick={onClose}
        aria-hidden="true"
      />

      <div className="relative w-full max-w-xl rounded-xl border border-border bg-card text-card-foreground shadow-2xl overflow-hidden z-10 animate-in fade-in zoom-in-95 duration-100">
        {/* Search header */}
        <div className="flex items-center gap-3 px-4 py-3 border-b border-border bg-muted/40">
          <svg className="w-5 h-5 text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search icons (e.g. truck, cargo, arrow, cloud)..."
            className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground text-sm focus:outline-none"
          />
          <kbd className="px-2 py-0.5 text-[10px] font-mono bg-background border border-border rounded text-muted-foreground">
            ESC
          </kbd>
        </div>

        {/* Results list */}
        <div className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No matching icons found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            <div className="space-y-1">
              {results.map((icon, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={icon.name}
                    type="button"
                    onClick={() => {
                      onClose();
                      router.push(`/icons/${icon.name}`);
                    }}
                    onMouseEnter={() => setSelectedIndex(idx)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-left transition-colors ${
                      isSelected ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded bg-background border border-border flex items-center justify-center text-foreground flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={20}
                          height={20}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          dangerouslySetInnerHTML={{ __html: icon.elements }}
                        />
                      </div>
                      <div className="truncate">
                        <p className="font-medium text-sm text-foreground truncate">{icon.title}</p>
                        <p className="text-xs text-muted-foreground font-mono">{icon.name}</p>
                      </div>
                    </div>
                    <span className="text-[10px] uppercase font-semibold tracking-wider text-muted-foreground/80 px-2 py-0.5 rounded bg-muted/80">
                      {icon.category}
                    </span>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer shortcuts helper */}
        <div className="px-4 py-2 border-t border-border bg-muted/20 flex items-center justify-between text-[11px] text-muted-foreground">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">↑</kbd>{" "}
              <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">↓</kbd> Navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 bg-muted rounded border border-border">↵</kbd> Select
            </span>
          </div>
          <span>320+ vector icons</span>
        </div>
      </div>
    </div>
  );
}
