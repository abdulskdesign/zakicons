import React from "react";
import { CodeBlock } from "@/components/code-block/CodeBlock";

export const metadata = {
  title: "CSS Package (@zak-icons/css) — ZAK Icons Docs",
  description:
    "Use ZAK Icons in any HTML/CSS project via the @zak-icons/css package. Mask-image based icon classes with size utilities and fallback support."
};

export default function CssDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          CSS Package
        </h1>
        <p className="text-base text-muted-foreground mt-2 leading-relaxed">
          Use ZAK Icons in any plain HTML, Vue, Svelte, Angular, PHP, or server-rendered project
          with a single CSS file — no JavaScript runtime required.
        </p>
      </div>

      {/* Installation */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Installation</h2>
        <CodeBlock
          language="bash"
          code={`# npm\nnpm install @zak-icons/css\n\n# pnpm\npnpm add @zak-icons/css\n\n# yarn\nyarn add @zak-icons/css`}
        />
        <p className="text-sm text-muted-foreground">
          Or import the pre-built file directly via CDN:
        </p>
        <CodeBlock
          language="html"
          code={`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@zak-icons/css/dist/zak-icons.css" />`}
        />
      </section>

      {/* Import in project */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Import in your project</h2>
        <CodeBlock
          language="js"
          code={`import "@zak-icons/css/dist/zak-icons.css";`}
        />
      </section>

      {/* Basic usage */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Basic Usage</h2>
        <p className="text-sm text-muted-foreground">
          Add the class <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">.zak-icon-&#123;name&#125;</code> to
          any inline element. The icon is rendered via <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">mask-image</code> and
          inherits the text colour automatically.
        </p>
        <CodeBlock
          language="html"
          code={`<!-- Basic icon (inherits current text colour) -->
<i class="zak-icon-truck" aria-hidden="true"></i>

<!-- With a size utility -->
<i class="zak-icon-container zak-size-lg" aria-hidden="true"></i>

<!-- Custom colour via inline style -->
<i class="zak-icon-arrow-right zak-size-md" style="color: #0284c7;" aria-hidden="true"></i>`}
        />
      </section>

      {/* Size utilities */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Size Utility Classes</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border border-border">
            <thead className="bg-muted text-foreground uppercase tracking-wider font-semibold">
              <tr>
                <th className="p-3 border-b border-border">Class</th>
                <th className="p-3 border-b border-border">Size</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-muted-foreground font-mono">
              <tr><td className="p-3 text-foreground font-bold">.zak-size-sm</td><td className="p-3">0.75 rem (12 px)</td></tr>
              <tr><td className="p-3 text-foreground font-bold">.zak-size-md</td><td className="p-3">1 rem (16 px)</td></tr>
              <tr><td className="p-3 text-foreground font-bold">.zak-size-lg</td><td className="p-3">1.5 rem (24 px)</td></tr>
              <tr><td className="p-3 text-foreground font-bold">.zak-size-xl</td><td className="p-3">2 rem (32 px)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Colour */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Colour Control</h2>
        <p className="text-sm text-muted-foreground">
          Icons use <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">background-color: currentColor</code> combined
          with <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">mask-image</code>. Set the colour via the
          CSS <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">color</code> property or the custom property:
        </p>
        <CodeBlock
          language="css"
          code={`/* Via custom property (overrides currentColor) */
.my-icon {
  --zak-icon-color: #10b981;
}

/* Via text color */
.text-primary .zak-icon-truck {
  color: #0284c7;
}`}
        />
      </section>

      {/* Browser fallback */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Browser Compatibility & Fallback</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          The CSS package uses <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">mask-image</code> (supported in
          all modern browsers). A <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">background-image</code> data-URI
          fallback is included for environments that lack mask support, so icons still render as images in older browsers.
        </p>
        <CodeBlock
          language="css"
          code={`/* Generated output per icon (example) */
.zak-icon-truck {
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: var(--zak-icon-color, currentColor);
  -webkit-mask: url("data:image/svg+xml,...") no-repeat center / contain;
  mask: url("data:image/svg+xml,...") no-repeat center / contain;
  /* Fallback for browsers without mask support */
  background-image: url("data:image/svg+xml,...");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}`}
        />
      </section>

      {/* Accessibility */}
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Accessibility</h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Always add <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">aria-hidden="true"</code> to decorative icons.
          For semantic icons, use a visually-hidden label instead:
        </p>
        <CodeBlock
          language="html"
          code={`<!-- Decorative icon -->
<i class="zak-icon-truck zak-size-lg" aria-hidden="true"></i>

<!-- Semantic icon with accessible label -->
<button>
  <i class="zak-icon-truck zak-size-lg" aria-hidden="true"></i>
  <span class="sr-only">Track Shipment</span>
</button>`}
        />
      </section>
    </div>
  );
}
