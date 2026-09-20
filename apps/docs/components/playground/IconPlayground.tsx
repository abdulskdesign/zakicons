"use client";

import React, { useState } from "react";
import { IconDefinition, iconsData } from "@/lib/icons";
import { copyToClipboard, downloadSvg, toPascalCase, toCamelCase } from "@/lib/utils";
import { CodeBlock } from "../code-block/CodeBlock";

export function IconPlayground() {
  const [selectedIcon, setSelectedIcon] = useState<IconDefinition>(
    () => iconsData.find(i => i.name === "truck") || iconsData[0]
  );
  const [searchFilter, setSearchFilter] = useState("");
  const [size, setSize] = useState<number>(56);
  const [strokeWidth, setStrokeWidth] = useState<number>(2);
  const [rotation, setRotation] = useState<number>(0);
  const [opacity, setOpacity] = useState<number>(1);
  const [color, setColor] = useState<string>("#09090b");
  const [bgMode, setBgMode] = useState<"transparent" | "white" | "dark" | "grid">("transparent");
  const [activeTab, setActiveTab] = useState<"react" | "svg" | "blazor" | "flutter" | "css">("react");

  const pascalName = toPascalCase(selectedIcon.name);
  const camelName = toCamelCase(selectedIcon.name);

  // Filter icons list for the picker
  const filteredList = iconsData.filter(i =>
    i.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
    i.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
    i.category.toLowerCase().includes(searchFilter.toLowerCase())
  ).slice(0, 60);

  // Code generation
  const getGeneratedCode = () => {
    switch (activeTab) {
      case "react":
        return `import { ${pascalName} } from "@zak-icons/react";

export function App() {
  return (
    <${pascalName}
      size={${size}}
      strokeWidth={${strokeWidth}}
      color="${color}"
      className="${opacity < 1 ? `opacity-[${opacity}]` : ""}"
    />
  );
}`;
      case "svg":
        return `<svg
  xmlns="http://www.w3.org/2000/svg"
  width="${size}"
  height="${size}"
  viewBox="0 0 24 24"
  fill="none"
  stroke="${color}"
  stroke-width="${strokeWidth}"
  stroke-linecap="round"
  stroke-linejoin="round"
  opacity="${opacity}"${rotation > 0 ? `\n  transform="rotate(${rotation} 12 12)"` : ""}
>
  ${selectedIcon.elements}
</svg>`;
      case "blazor":
        return `<ZakIcon
    Name="${pascalName}"
    Size="${size}"
    StrokeWidth="${strokeWidth}"
    Color="${color}" />`;
      case "flutter":
        return `ZakIcon(
  ZakIcons.${camelName},
  size: ${size}.0,
  color: const Color(0x${color.replace("#", "FF")}),
  opacity: ${opacity},
)`;
      case "css":
        return `<i class="zak-icon-${selectedIcon.name} zak-size-lg" style="color: ${color};" aria-hidden="true"></i>`;
    }
  };

  const getBgClass = () => {
    switch (bgMode) {
      case "white":
        return "bg-white text-zinc-950 border-zinc-200";
      case "dark":
        return "bg-zinc-950 text-white border-zinc-800";
      case "grid":
        return "bg-muted/40 text-foreground bg-[radial-gradient(#8882_1px,transparent_1px)] [background-size:12px_12px]";
      default:
        return "bg-card text-foreground";
    }
  };

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Icon Picker Drawer/List */}
        <div className="lg:col-span-4 rounded-xl border border-border bg-card p-4 space-y-3 shadow-sm h-[600px] flex flex-col">
          <div className="flex items-center justify-between pb-2 border-b border-border">
            <h3 className="font-semibold text-sm text-foreground">Select Icon</h3>
            <span className="text-xs text-muted-foreground font-mono">{filteredList.length} shown</span>
          </div>

          <div className="relative">
            <input
              type="text"
              value={searchFilter}
              onChange={e => setSearchFilter(e.target.value)}
              placeholder="Filter icons..."
              className="w-full px-3 py-1.5 text-xs rounded-md border border-border bg-muted/40 text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>

          <div className="flex-1 overflow-y-auto grid grid-cols-4 gap-2 p-1">
            {filteredList.map(icon => {
              const isSelected = icon.name === selectedIcon.name;
              return (
                <button
                  key={icon.name}
                  type="button"
                  onClick={() => setSelectedIcon(icon)}
                  className={`p-2 rounded-lg border flex flex-col items-center justify-center gap-1 transition-all ${
                    isSelected
                      ? "border-primary bg-muted font-bold text-foreground ring-1 ring-primary"
                      : "border-border bg-background hover:bg-muted/50 text-muted-foreground hover:text-foreground"
                  }`}
                  title={icon.title}
                >
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
                  <span className="text-[9px] truncate max-w-full font-mono">{icon.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Center/Right Column: Live Visual Canvas + Controls */}
        <div className="lg:col-span-8 space-y-6">
          {/* Canvas */}
          <div
            className={`h-80 rounded-2xl border border-border flex items-center justify-center relative overflow-hidden transition-colors shadow-sm ${getBgClass()}`}
          >
            {/* Background switcher */}
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

            {/* Rendered Live Icon */}
            <div
              style={{
                transform: `rotate(${rotation}deg)`,
                opacity,
                color: color === "#09090b" ? "currentColor" : color,
                transition: "all 0.1s ease-out"
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
                dangerouslySetInnerHTML={{ __html: selectedIcon.elements }}
              />
            </div>

            <div className="absolute bottom-4 left-4 text-xs font-mono text-muted-foreground bg-background/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-border">
              {selectedIcon.title} ({selectedIcon.name})
            </div>
          </div>

          {/* Quick Tuning Controls Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 rounded-xl border border-border bg-card">
            {/* Size */}
            <div>
              <label className="text-xs font-medium text-foreground block mb-1.5">
                Size: <span className="font-mono">{size}px</span>
              </label>
              <input
                type="range"
                min="16"
                max="96"
                step="4"
                value={size}
                onChange={e => setSize(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Stroke Width */}
            <div>
              <label className="text-xs font-medium text-foreground block mb-1.5">
                Stroke: <span className="font-mono">{strokeWidth}px</span>
              </label>
              <input
                type="range"
                min="1"
                max="3"
                step="0.5"
                value={strokeWidth}
                onChange={e => setStrokeWidth(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Rotation */}
            <div>
              <label className="text-xs font-medium text-foreground block mb-1.5">
                Rotate: <span className="font-mono">{rotation}°</span>
              </label>
              <input
                type="range"
                min="0"
                max="360"
                step="45"
                value={rotation}
                onChange={e => setRotation(Number(e.target.value))}
                className="w-full"
              />
            </div>

            {/* Opacity */}
            <div>
              <label className="text-xs font-medium text-foreground block mb-1.5">
                Opacity: <span className="font-mono">{opacity}</span>
              </label>
              <input
                type="range"
                min="0.1"
                max="1"
                step="0.1"
                value={opacity}
                onChange={e => setOpacity(Number(e.target.value))}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Code Generation Section */}
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border pb-4">
          <div>
            <h3 className="text-base font-semibold text-foreground">Generated Code</h3>
            <p className="text-xs text-muted-foreground">Real-time dynamic code for selected framework</p>
          </div>

          {/* Framework Tabs */}
          <div className="flex items-center gap-1 bg-muted p-1 rounded-lg border border-border text-xs">
            {(["react", "svg", "blazor", "flutter", "css"] as const).map(tab => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-md uppercase text-[11px] font-bold tracking-wider transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <CodeBlock
          language={activeTab === "svg" ? "html" : activeTab === "react" ? "tsx" : activeTab === "flutter" ? "dart" : activeTab === "blazor" ? "razor" : "html"}
          code={getGeneratedCode()}
        />
      </div>
    </div>
  );
}
