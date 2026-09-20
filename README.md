# ZAK Icons

<p align="center">
  <strong>An independent, enterprise-ready open-source vector icon ecosystem for web, mobile, and desktop applications.</strong>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#packages">Packages</a> •
  <a href="#installation">Installation</a> •
  <a href="#development">Development</a> •
  <a href="#license">License</a>
</p>

---

## Features

* **320+ Precision Vector Icons**: Designed on a mathematically aligned 24×24 pixel canvas with a consistent 2px stroke, round caps, and round joins.
* **Specialized Logistics & Enterprise Suite**: Comprehensive coverage for container shipping, freight logistics, supply chain, customs clearance, warehousing, and dispatch operations.
* **Single Source of Truth**: Canonical SVG files in `/icons` compile automatically into typed packages across platforms.
* **Multi-Target Ecosystem**:
  * `@zak-icons/core`: Shared metadata, types, and raw icon data.
  * `@zak-icons/react`: Tree-shakeable React 18 & 19 components with full TypeScript support.
  * `ZakIcons.Blazor`: Native Razor components for .NET 8 & 9.
  * `zak_icons`: Flutter Dart package supporting customizable sizes, colors, and opacity.
  * `@zak-icons/web`: W3C Custom Element `<zak-icon>` for standard HTML and any web framework.
* **Interactive Showcase & Documentation**: Instant Fuse.js search, real-time playground, live size/stroke/rotation customizer, and framework code generator.

---

## Packages

| Package | Platform | Language | Description |
|---|---|---|---|
| [`@zak-icons/core`](./packages/core) | Core | TypeScript | Central metadata, SVG data, and types |
| [`@zak-icons/react`](./packages/react) | React | TypeScript / JSX | 320+ React components with tree-shaking |
| [`ZakIcons.Blazor`](./packages/blazor) | .NET Blazor | C# / Razor | Native Razor components for .NET 8/9 |
| [`zak_icons`](./packages/flutter) | Flutter | Dart | Flutter vector icon widget & constants |
| [`@zak-icons/web`](./packages/web) | Web Components | TypeScript / JS | Custom Elements `<zak-icon>` |

---

## Installation & Usage

### 1. React

```bash
npm install @zak-icons/react
# or
pnpm add @zak-icons/react
```

```tsx
import { Truck, Container, ArrowRight } from "@zak-icons/react";

export function App() {
  return (
    <div className="flex items-center gap-4">
      <Truck size={32} color="#0284c7" strokeWidth={1.5} />
      <ArrowRight size={20} />
      <Container size={28} className="text-emerald-500" />
    </div>
  );
}
```

### 2. Blazor (.NET)

```bash
dotnet add package ZakIcons.Blazor
```

In `_Imports.razor`:
```razor
@using ZakIcons.Blazor
```

In Razor view:
```razor
<ZakIcon Name="Truck" Size="32" StrokeWidth="1.5" Color="#0284c7" />
<ZakIcon Name="Container" Size="24" />
```

### 3. Flutter

```bash
flutter pub add zak_icons
```

```dart
import 'package:flutter/material.dart';
import 'package:zak_icons/zak_icons.dart';

Widget build(BuildContext context) {
  return ZakIcon(
    ZakIcons.truck,
    size: 32.0,
    color: Colors.blue,
  );
}
```

### 4. Web Components

```bash
npm install @zak-icons/web
```

```html
<script type="module" src="./node_modules/@zak-icons/web/dist/index.js"></script>

<zak-icon name="truck" size="32" color="#0284c7" stroke-width="1.5"></zak-icon>
<zak-icon name="container" size="24"></zak-icon>
```

### 5. Raw SVG

Every SVG icon is located in `/icons/<category>/<name>.svg` and adheres to:

```xml
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <!-- path data -->
</svg>
```

---

## Development Workflow

### Prerequisites

* Node.js >= 18
* pnpm >= 9

### Build & Generation Scripts

```bash
# Validate SVG geometry, viewBox, and design rules
pnpm icons:validate

# Optimize SVGs using the SVGO pipeline
pnpm icons:optimize

# Generate metadata (metadata/icons.json, categories.json, etc.)
pnpm icons:metadata

# Run the complete generator pipeline (Core, React, Blazor, Flutter, Web)
pnpm icons:generate

# Start the showcase website locally
pnpm dev

# Build the complete monorepo
pnpm build
```

---

## Design Principles

1. **24×24 Canvas**: All icons are drawn on a 24×24 unit grid.
2. **2px Base Stroke**: Ensures optimal contrast and clarity across screens.
3. **Round Terminals**: `stroke-linecap="round"` and `stroke-linejoin="round"`.
4. **currentColor Inheritance**: Icons inherit text color automatically.
5. **Accessibility by Default**: Rendered with `aria-hidden="true"` unless an `aria-label` is provided.

---

## Contributing

Contributions are welcome! To add or propose new icons:
1. Ensure the icon adheres to the 24×24 grid rules in `config/icon-rules.json`.
2. Add the SVG file into the appropriate category under `/icons/<category>/`.
3. Run `pnpm icons:validate` to check for compliance.
4. Run `pnpm icons:generate` to regenerate all target packages.

---

## License

MIT © [ZAK Icons Contributors](LICENSE)
