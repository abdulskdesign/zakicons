import React from "react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="py-24 text-center max-w-md mx-auto space-y-5">
      <div className="w-16 h-16 rounded-2xl bg-muted flex items-center justify-center mx-auto text-muted-foreground border border-border">
        <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Page or Icon Not Found
        </h1>
        <p className="text-sm text-muted-foreground">
          The icon or documentation page you were looking for does not exist or may have been moved.
        </p>
      </div>

      <div className="flex items-center justify-center gap-3 pt-2">
        <Link
          href="/icons"
          className="px-4 py-2 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
        >
          Browse All Icons
        </Link>
        <Link
          href="/"
          className="px-4 py-2 rounded-lg border border-border bg-card text-foreground text-xs font-medium hover:bg-muted transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
