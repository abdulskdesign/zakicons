import React from "react";
import { CodeBlock } from "@/components/code-block/CodeBlock";

export const metadata = {
  title: "Blazor Package (ZakIcons.Blazor) — ZAK Icons Docs",
  description: "Documentation for ZakIcons.Blazor with parameter guides and Razor syntax examples."
};

export default function BlazorDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Blazor Package (ZakIcons.Blazor)
        </h1>
        <p className="text-base text-muted-foreground mt-2 leading-relaxed">
          Native Razor components for Blazor Server, Blazor WebAssembly, and .NET MAUI / Blazor Hybrid applications on .NET 8 and .NET 9.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Installation</h2>
        <CodeBlock
          language="bash"
          code={`dotnet add package ZakIcons.Blazor`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Setup Imports</h2>
        <p className="text-sm text-muted-foreground">
          Add the namespace to your global <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">_Imports.razor</code>:
        </p>
        <CodeBlock
          language="razor"
          code={`@using ZakIcons.Blazor`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Usage in Razor Components</h2>
        <CodeBlock
          language="razor"
          code={`@* Basic Usage *@
<ZakIcon Name="Truck" />

@* Customizing size, stroke width, and color *@
<ZakIcon
    Name="Truck"
    Size="32"
    StrokeWidth="1.5"
    Color="#0284c7" />

@* Using CSS classes (e.g. Tailwind CSS) *@
<ZakIcon
    Name="Container"
    Size="24"
    Class="text-emerald-500 hover:text-emerald-700" />`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Parameters Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-border">
            <thead className="bg-muted text-foreground uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-3 border-b border-border">Parameter</th>
                <th className="p-3 border-b border-border">Type</th>
                <th className="p-3 border-b border-border">Default</th>
                <th className="p-3 border-b border-border">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground font-mono">
              <tr>
                <td className="p-3 text-foreground font-bold">Name</td>
                <td className="p-3">string</td>
                <td className="p-3">required</td>
                <td className="p-3 font-sans">Icon name (supports PascalCase or kebab-case)</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">Size</td>
                <td className="p-3">int</td>
                <td className="p-3">24</td>
                <td className="p-3 font-sans">Width and height in pixels</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">StrokeWidth</td>
                <td className="p-3">double</td>
                <td className="p-3">2.0</td>
                <td className="p-3 font-sans">SVG stroke thickness</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">Color</td>
                <td className="p-3">string</td>
                <td className="p-3">&quot;currentColor&quot;</td>
                <td className="p-3 font-sans">Stroke color</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">Class</td>
                <td className="p-3">string?</td>
                <td className="p-3">null</td>
                <td className="p-3 font-sans">CSS class names</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">Style</td>
                <td className="p-3">string?</td>
                <td className="p-3">null</td>
                <td className="p-3 font-sans">Inline CSS style</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
