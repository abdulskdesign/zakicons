# ZakIcons.Blazor

Blazor component library for ZAK Icons ecosystem.

## Installation

```bash
dotnet add package ZakIcons.Blazor
```

## Usage

In `_Imports.razor`:

```razor
@using ZakIcons.Blazor
```

In any Razor component:

```razor
<ZakIcon Name="Truck" Size="32" Color="#0284c7" StrokeWidth="1.5" />
<ZakIcon Name="ArrowLeft" Size="24" />
<ZakIcon Name="container" Size="28" Class="text-emerald-500" />
```

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `Name` | `string` | required | Icon name (kebab-case or PascalCase) |
| `Size` | `int` | `24` | Width and height in px |
| `StrokeWidth` | `double` | `2.0` | SVG stroke width |
| `Color` | `string` | `"currentColor"` | Stroke color |
| `Class` | `string?` | `null` | CSS class names |
| `Style` | `string?` | `null` | Inline styles |

## License

MIT
