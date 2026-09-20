"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const docLinks = [
  {
    group: "Overview",
    items: [
      { href: "/docs", label: "Getting Started" },
      { href: "/docs/installation", label: "Installation" }
    ]
  },
  {
    group: "Framework Packages",
    items: [
      { href: "/docs/react", label: "React (@zak-icons/react)" },
      { href: "/docs/blazor", label: "Blazor (ZakIcons.Blazor)" },
      { href: "/docs/flutter", label: "Flutter (zak_icons)" },
      { href: "/docs/css", label: "CSS" },
      { href: "/docs/svg", label: "Raw SVG Sprites & Files" }
    ]
  },
  {
    group: "Design & Guidelines",
    items: [
      { href: "/about", label: "Design System & Grid" }
    ]
  }
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-full lg:w-64 flex-shrink-0 space-y-6">
      {docLinks.map(section => (
        <div key={section.group} className="space-y-2">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-3">
            {section.group}
          </h4>
          <ul className="space-y-1 text-sm">
            {section.items.map(item => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block px-3 py-1.5 rounded-md transition-colors ${
                      isActive
                        ? "bg-muted text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
