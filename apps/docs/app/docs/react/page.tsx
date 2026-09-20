import React from "react";
import { CodeBlock } from "@/components/code-block/CodeBlock";

export const metadata = {
  title: "React Package (@zak-icons/react) — ZAK Icons Docs",
  description: "Documentation for @zak-icons/react with TypeScript props, tree-shaking, and styling examples."
};

export default function ReactDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          React Package (@zak-icons/react)
        </h1>
        <p className="text-base text-muted-foreground mt-2 leading-relaxed">
          High-performance, tree-shakeable React icon components designed for React 18 & 19, Next.js, Vite, and Remix.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Installation</h2>
        <CodeBlock
          language="bash"
          code={`pnpm add @zak-icons/react\n# or\nnpm install @zak-icons/react`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Named Component Imports</h2>
        <p className="text-sm text-muted-foreground">
          Every icon is exported as an individual PascalCase component, ensuring that your bundler only bundles the icons your app actually uses:
        </p>
        <CodeBlock
          language="tsx"
          code={`import { Truck, ArrowLeft, Container, ShieldCheck } from "@zak-icons/react";

export function Header() {
  return (
    <header className="flex items-center gap-4">
      <ArrowLeft size={20} />
      <Truck size={32} color="#2563eb" strokeWidth={1.5} />
      <Container size={28} className="text-emerald-500 hover:scale-110 transition-transform" />
      <ShieldCheck size={24} color="#10b981" />
    </header>
  );
}`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Dynamic ZakIcon Component</h2>
        <p className="text-sm text-muted-foreground">
          If your application renders icons dynamically from a string name (such as from a database or CMS):
        </p>
        <CodeBlock
          language="tsx"
          code={`import { ZakIcon } from "@zak-icons/react";

export function DynamicNav({ iconName }: { iconName: string }) {
  return <ZakIcon name={iconName} size={24} strokeWidth={2} />;
}`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Props Reference</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-border">
            <thead className="bg-muted text-foreground uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-3 border-b border-border">Prop</th>
                <th className="p-3 border-b border-border">Type</th>
                <th className="p-3 border-b border-border">Default</th>
                <th className="p-3 border-b border-border">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground font-mono">
              <tr>
                <td className="p-3 text-foreground font-bold">size</td>
                <td className="p-3">number | string</td>
                <td className="p-3">24</td>
                <td className="p-3 font-sans">Icon canvas width and height in px</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">strokeWidth</td>
                <td className="p-3">number | string</td>
                <td className="p-3">2</td>
                <td className="p-3 font-sans">Width of vector stroke line</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">color</td>
                <td className="p-3">string</td>
                <td className="p-3">&quot;currentColor&quot;</td>
                <td className="p-3 font-sans">Stroke color (inherits CSS color by default)</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">className</td>
                <td className="p-3">string</td>
                <td className="p-3">&quot;&quot;</td>
                <td className="p-3 font-sans">CSS class names (Tailwind, CSS Modules, etc.)</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">...svgProps</td>
                <td className="p-3">SVGProps</td>
                <td className="p-3">-</td>
                <td className="p-3 font-sans">All native SVGSVGElement HTML attributes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
