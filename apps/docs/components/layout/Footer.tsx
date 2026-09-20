import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card text-card-foreground transition-colors mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand Col */}
          <div className="col-span-2 md:col-span-1 space-y-3">
            <div className="flex items-center gap-2 font-bold text-base">
              <div className="w-6 h-6 p-1 rounded bg-primary text-primary-foreground flex items-center justify-center font-black text-xs">
                <img className="w-full h-full object-contain dark:hidden" src="/logo-light.svg" alt="ZAK Icons Logo" />
                <img className="w-full h-full object-contain hidden dark:block" src="/logo.svg" alt="ZAK Icons Logo" />
              </div>
              <span>ZAK Icons</span>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">
              An independent, modern open-source icon ecosystem built on a mathematically precise 24×24 outline design system for web, mobile, and enterprise platforms.
            </p>
            <p className="text-xs text-muted-foreground">
              Licensed under MIT. Open to all developers and organizations worldwide.
            </p>
          </div>

          {/* Platform Packages */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Packages
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/docs/react" className="hover:text-foreground transition-colors">
                  React (@zak-icons/react)
                </Link>
              </li>
              <li>
                <Link href="/docs/blazor" className="hover:text-foreground transition-colors">
                  Blazor (ZakIcons.Blazor)
                </Link>
              </li>
              <li>
                <Link href="/docs/flutter" className="hover:text-foreground transition-colors">
                  Flutter (zak_icons)
                </Link>
              </li>
              <li>
                <Link href="/docs/css" className="hover:text-foreground transition-colors">CSS</Link>
              </li>

              <li>
                <Link href="/docs/svg" className="hover:text-foreground transition-colors">
                  Raw Vector SVGs
                </Link>
              </li>
            </ul>
          </div>

          {/* Library & Tools */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Ecosystem
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/icons" className="hover:text-foreground transition-colors">
                  Browse All 320+ Icons
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-foreground transition-colors">
                  Categories Index
                </Link>
              </li>
              <li>
                <Link href="/collections" className="hover:text-foreground transition-colors">
                  Curated Collections
                </Link>
              </li>
              <li>
                <Link href="/playground" className="hover:text-foreground transition-colors">
                  Live Icon Playground
                </Link>
              </li>
              <li>
                <Link href="/categories/logistics" className="hover:text-foreground transition-colors">
                  Logistics & Supply Chain Suite
                </Link>
              </li>
            </ul>
          </div>

          {/* Documentation & Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-foreground mb-3">
              Documentation
            </h3>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/docs/installation" className="hover:text-foreground transition-colors">
                  Installation Guide
                </Link>
              </li>
              <li>
                <Link href="/docs" className="hover:text-foreground transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  24×24 Grid Philosophy
                </Link>
              </li>
              <li>
                <a
                  href="https://github.com/zak-icons/zak-icons"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  GitHub Repository
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <div>
            © {new Date().getFullYear()} ZAK Icons Contributors. Crafted for high-performance applications.
          </div>
          <div className="flex items-center gap-4">
            <span>24×24 Grid</span>
            <span>•</span>
            <span>2px Stroke</span>
            <span>•</span>
            <span>Round Caps</span>
            <span>•</span>
            <span>Pure Vector</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
