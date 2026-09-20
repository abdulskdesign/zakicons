"use client";

import React, { useState } from "react";
import { IconDefinition } from "@/lib/icons";
import { copyToClipboard, downloadSvg, toPascalCase, toCamelCase } from "@/lib/utils";
import { CodeBlock } from "../code-block/CodeBlock";

interface IconDetailCustomizerProps {
  icon: IconDefinition;
}

export function IconDetailCustomizer({ icon }: IconDetailCustomizerProps) {
  const [size, setSize] = useState<number>(48);
  const [strokeWidth, setStrokeWidth] = useState<number>(2);
  const [rotation, setRotation] = useState<number>(0);
  const [color, setColor] = useState<string>("#09090b");
  const [bgMode, setBgMode] = useState<"transparent" | "white" | "dark" | "grid">("transparent");
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const pascalName = toPascalCase(icon.name);
  const camelName = toCamelCase(icon.name);

  // Generate dynamic custom SVG
  const customSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round"${
    rotation > 0 ? ` transform="rotate(${rotation} 12 12)"` : ""
  }>
  ${icon.elements}
</svg>`;

  const handleCopy = async (type: string, text: string) => {
    const ok = await copyToClipboard(text);
    if (ok) {
      setCopiedType(type);
      setTimeout(() => setCopiedType(null), 2000);
    }
  };

  // Background style calculation
  const getBgStyle = () => {
    switch (bgMode) {
      case "white":
        return "bg-white text-zinc-900 border-zinc-200";
      case "dark":
        return "bg-zinc-950 text-white border-zinc-800";
      case "grid":
        return "bg-muted/40 text-foreground bg-[radial-gradient(#8882_1px,transparent_1px)] [background-size:12px_12px]";
      default:
        return "bg-card text-foreground";
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
      {/* Left Column: Interactive Visual Preview Canvas */}
      <div className="lg:col-span-6 space-y-6">
        <div
          className={`h-96 rounded-2xl border border-border flex items-center justify-center relative overflow-hidden transition-colors shadow-sm ${getBgStyle()}`}
        >
          {/* Background switcher mini pills */}
          <div className="absolute top-4 right-4 flex items-center gap-1 bg-background/80 backdrop-blur-md p-1 rounded-lg border border-border text-xs z-10">
            {(["transparent", "white", "dark", "grid"] as const).map(mode => (
              <button
                key={mode}
                type="button"
                onClick={() => setBgMode(mode)}
                className={`px-2 py-0.5 rounded capitalize text-[11px] font-medium transition-colors ${
                  bgMode === mode ? "bg-primary text-primary-foreground font-bold" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {mode}
              </button>
            ))}
          </div>

          {/* Rendered Icon */}
          <div
            style={{
              transform: `rotate(${rotation}deg)`,
              color: color === "#09090b" ? "currentColor" : color,
              transition: "transform 0.15s ease-out"
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill="none"
              stroke={color === "#09090b" ? "currentColor" : color}
              strokeWidth={strokeWidth}
              strokeLinecap="round"
              strokeLinejoin="round"
              dangerouslySetInnerHTML={{ __html: icon.elements }}
            />
          </div>
        </div>

        {/* Quick action buttons */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleCopy("svg", customSvg)}
            className="flex-1 py-2.5 px-4 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
            <span>{copiedType === "svg" ? "SVG Copied to Clipboard!" : "Copy SVG"}</span>
          </button>
          <button
            type="button"
            onClick={() => downloadSvg(customSvg, icon.name)}
            className="py-2.5 px-4 rounded-lg border border-border bg-card hover:bg-muted text-foreground font-medium text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Download SVG</span>
          </button>
        </div>
      </div>

      {/* Right Column: Customization Controls */}
      <div className="lg:col-span-6 space-y-6">
        <div className="rounded-xl border border-border bg-card p-6 space-y-6 shadow-sm">
          <h2 className="text-base font-semibold text-foreground border-b border-border pb-3">
            Customization Studio
          </h2>

          {/* Size */}
          <div>
            <div className="flex justify-between text-xs font-medium text-foreground mb-2">
              <span>Size:</span>
              <span className="font-mono">{size}px</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[16, 20, 24, 32, 48, 64, 80].map(s => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono border transition-colors ${
                    size === s
                      ? "bg-primary text-primary-foreground font-bold border-primary"
                      : "bg-muted/50 border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {s}px
                </button>
              ))}
            </div>
          </div>

          {/* Stroke Width */}
          <div>
            <div className="flex justify-between text-xs font-medium text-foreground mb-2">
              <span>Stroke Width:</span>
              <span className="font-mono">{strokeWidth}px</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[1, 1.5, 2, 2.5, 3].map(w => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setStrokeWidth(w)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono border transition-colors ${
                    strokeWidth === w
                      ? "bg-primary text-primary-foreground font-bold border-primary"
                      : "bg-muted/50 border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {w}px
                </button>
              ))}
            </div>
          </div>

          {/* Rotation */}
          <div>
            <div className="flex justify-between text-xs font-medium text-foreground mb-2">
              <span>Rotation:</span>
              <span className="font-mono">{rotation}°</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[0, 90, 180, 270].map(r => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRotation(r)}
                  className={`px-3 py-1.5 rounded-md text-xs font-mono border transition-colors ${
                    rotation === r
                      ? "bg-primary text-primary-foreground font-bold border-primary"
                      : "bg-muted/50 border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {r}°
                </button>
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <div className="flex justify-between text-xs font-medium text-foreground mb-2">
              <span>Stroke Color:</span>
              <span className="font-mono uppercase">{color}</span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={color === "currentColor" ? "#09090b" : color}
                onChange={e => setColor(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer border border-border p-0.5 bg-card"
              />
              <div className="flex flex-wrap gap-1.5">
                {["#09090b", "#2563eb", "#059669", "#dc2626", "#d97706", "#7c3aed"].map(c => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className="w-7 h-7 rounded-full border border-border transition-transform hover:scale-110"
                    style={{ backgroundColor: c }}
                    aria-label={`Select color ${c}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full Width Framework Integration Snippets */}
      <div className="lg:col-span-12 space-y-6 mt-4">
        <h3 className="text-lg font-bold text-foreground">
          Framework Usage & Code Snippets
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* React */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-foreground flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-500" />
                React (@zak-icons/react)
              </span>
              <button
                type="button"
                onClick={() => handleCopy("react", `import { ${pascalName} } from "@zak-icons/react";\n\n<${pascalName} size={${size}} strokeWidth={${strokeWidth}} />`)}
                className="text-xs px-2 py-1 rounded bg-muted hover:bg-foreground hover:text-background text-muted-foreground transition-colors"
              >
                {copiedType === "react" ? "Copied!" : "Copy"}
              </button>
            </div>
            <CodeBlock
              language="tsx"
              code={`import { ${pascalName} } from "@zak-icons/react";\n\n<${pascalName} size={${size}} strokeWidth={${strokeWidth}} />`}
            />
          </div>

          {/* Blazor */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-foreground flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                Blazor (ZakIcons.Blazor)
              </span>
              <button
                type="button"
                onClick={() => handleCopy("blazor", `<ZakIcon Name="${pascalName}" Size="${size}" StrokeWidth="${strokeWidth}" />`)}
                className="text-xs px-2 py-1 rounded bg-muted hover:bg-foreground hover:text-background text-muted-foreground transition-colors"
              >
                {copiedType === "blazor" ? "Copied!" : "Copy"}
              </button>
            </div>
            <CodeBlock
              language="razor"
              code={`<ZakIcon Name="${pascalName}" Size="${size}" StrokeWidth="${strokeWidth}" />`}
            />
          </div>

          {/* Flutter */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-foreground flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
                Flutter (zak_icons)
              </span>
              <button
                type="button"
                onClick={() => handleCopy("flutter", `ZakIcon(ZakIcons.${camelName}, size: ${size}.0)`)}
                className="text-xs px-2 py-1 rounded bg-muted hover:bg-foreground hover:text-background text-muted-foreground transition-colors"
              >
                {copiedType === "flutter" ? "Copied!" : "Copy"}
              </button>
            </div>
            <CodeBlock
              language="dart"
              code={`ZakIcon(ZakIcons.${camelName}, size: ${size}.0)`}
            />
          </div>

          {/* CSS */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-2 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-foreground flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500" />
                CSS (@zak-icons/css)
              </span>
              <button
                type="button"
                onClick={() => handleCopy("css", `<i class="zak-icon-${icon.name} zak-size-lg" aria-hidden="true"></i>`)}
                className="text-xs px-2 py-1 rounded bg-muted hover:bg-foreground hover:text-background text-muted-foreground transition-colors"
              >
                {copiedType === "css" ? "Copied!" : "Copy"}
              </button>
            </div>
            <CodeBlock
              language="html"
              code={`<i class="zak-icon-${icon.name} zak-size-lg" aria-hidden="true"></i>`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
