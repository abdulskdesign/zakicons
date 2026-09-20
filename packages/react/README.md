# @zak-icons/react

React components for the ZAK Icons ecosystem.

## Installation

```bash
npm install @zak-icons/react
# or
pnpm add @zak-icons/react
```

## Usage

### Individual Component (Tree-shakeable)

```tsx
import { Truck, ArrowLeft, Container } from "@zak-icons/react";

export function Dashboard() {
  return (
    <div>
      <Truck size={32} color="#0284c7" strokeWidth={1.5} />
      <ArrowLeft size={24} />
      <Container size={28} className="text-emerald-500" />
    </div>
  );
}
```

### Generic ZakIcon Component

```tsx
import { ZakIcon } from "@zak-icons/react";

<ZakIcon name="truck" size={24} strokeWidth={2} />
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number | string` | `24` | Icon width and height in px |
| `strokeWidth` | `number | string` | `2` | SVG stroke width |
| `color` | `string` | `"currentColor"` | SVG stroke color |
| `className` | `string` | `""` | CSS classes |
| Standard SVG props | `SVGAttributes` | - | All standard SVG element attributes |

## License

MIT
