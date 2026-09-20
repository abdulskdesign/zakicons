import React from "react";
import { CodeBlock } from "@/components/code-block/CodeBlock";

export const metadata = {
  title: "Raw SVG Usage — ZAK Icons Docs",
  description: "Using raw vector SVGs from ZAK Icons directly in HTML, CSS, SVG sprites, and assets."
};

export default function SvgDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Raw Vector SVG
        </h1>
        <p className="text-base text-muted-foreground mt-2 leading-relaxed">
          ZAK Icons are authored as canonical SVG files on a 24×24 grid. You can copy raw SVG code directly or embed SVG files in any frontend asset pipeline.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Standard SVG Anatomy</h2>
        <p className="text-sm text-muted-foreground">
          Every ZAK icon adheres strictly to this structure:
        </p>
        <CodeBlock
          language="html"
          code={`<svg
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <!-- Vector path data -->
</svg>`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Inline SVG with Tailwind CSS</h2>
        <p className="text-sm text-muted-foreground">
          Because icons use <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">stroke=&quot;currentColor&quot;</code>, you can style color and sizing directly via Tailwind utilities:
        </p>
        <CodeBlock
          language="html"
          code={`<svg class="w-6 h-6 text-blue-600 hover:text-blue-800 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2" y="5" width="20" height="14" rx="2"/>
  <path d="M7 5v14M12 5v14M17 5v14"/>
</svg>`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Using as CSS Background / Mask</h2>
        <CodeBlock
          language="css"
          code={`.truck-icon {
  width: 24px;
  height: 24px;
  background-color: currentColor;
  mask: url("/icons/logistics/truck.svg") no-repeat center / contain;
  -webkit-mask: url("/icons/logistics/truck.svg") no-repeat center / contain;
}`}
        />
      </section>
    </div>
  );
}
