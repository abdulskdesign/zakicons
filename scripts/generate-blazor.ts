import fs from "node:fs";
import path from "node:path";

const blazorDir = path.resolve(process.cwd(), "packages/blazor");
const iconsDir = path.resolve(process.cwd(), "icons");
const metadataDir = path.resolve(process.cwd(), "metadata");

function toPascalCase(str: string): string {
  const clean = str.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  let result = clean.charAt(0).toUpperCase() + clean.slice(1);
  if (/^[0-9]/.test(result)) {
    result = `Icon${result}`;
  }
  return result;
}

export function runGenerateBlazor() {
  console.log("Generating ZakIcons.Blazor package...");

  if (!fs.existsSync(blazorDir)) {
    fs.mkdirSync(blazorDir, { recursive: true });
  }

  const iconsJson = JSON.parse(fs.readFileSync(path.join(metadataDir, "icons.json"), "utf-8"));

  // .csproj
  const csprojContent = `<Project Sdk="Microsoft.NET.Sdk.Razor">
  <PropertyGroup>
    <TargetFrameworks>net8.0;net9.0</TargetFrameworks>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <PackageId>ZakIcons.Blazor</PackageId>
    <Version>1.0.0</Version>
    <Authors>ZAK Icons Team</Authors>
    <Description>Blazor component library for ZAK Icons with 300+ pixel-perfect vector icons.</Description>
    <PackageLicenseExpression>MIT</PackageLicenseExpression>
  </PropertyGroup>

  <ItemGroup>
    <SupportedPlatform Include="browser" />
  </ItemGroup>

  <ItemGroup>
    <PackageReference Include="Microsoft.AspNetCore.Components.Web" Version="8.0.0" />
  </ItemGroup>
</Project>
`;
  fs.writeFileSync(path.join(blazorDir, "ZakIcons.Blazor.csproj"), csprojContent, "utf-8");

  // Read inner SVG elements for all icons
  const iconMarkupEntries: string[] = [];

  for (const item of iconsJson) {
    const filePath = path.join(iconsDir, item.category, `${item.name}.svg`);
    if (!fs.existsSync(filePath)) continue;

    const svg = fs.readFileSync(filePath, "utf-8");
    const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    const innerHtml = match ? match[1].trim() : "";
    const escaped = innerHtml.replace(/"/g, '""');

    const pascal = toPascalCase(item.name);
    iconMarkupEntries.push(`        ["${item.name}"] = @"${escaped}",`);
    iconMarkupEntries.push(`        ["${pascal}"] = @"${escaped}",`);
  }

  // ZakIcons.cs
  const csContent = `using System.Collections.Generic;

namespace ZakIcons.Blazor
{
    public static class ZakIconRegistry
    {
        private static readonly Dictionary<string, string> Icons = new(System.StringComparer.OrdinalIgnoreCase)
        {
${iconMarkupEntries.join("\n")}
        };

        public static string? GetSvgElements(string name)
        {
            return Icons.TryGetValue(name, out var markup) ? markup : null;
        }

        public static bool Contains(string name) => Icons.ContainsKey(name);
    }
}
`;
  fs.writeFileSync(path.join(blazorDir, "ZakIcons.cs"), csContent, "utf-8");

  // ZakIcon.razor
  const razorContent = `@namespace ZakIcons.Blazor

@if (!string.IsNullOrEmpty(SvgContent))
{
    <svg xmlns="http://www.w3.org/2000/svg"
         width="@Size"
         height="@Size"
         viewBox="0 0 24 24"
         fill="none"
         stroke="@Color"
         stroke-width="@StrokeWidth"
         stroke-linecap="round"
         stroke-linejoin="round"
         class="@Class"
         style="@Style"
         aria-hidden="true"
         @attributes="AdditionalAttributes">
        @((MarkupString)SvgContent)
    </svg>
}

@code {
    [Parameter, EditorRequired]
    public string Name { get; set; } = string.Empty;

    [Parameter]
    public int Size { get; set; } = 24;

    [Parameter]
    public double StrokeWidth { get; set; } = 2.0;

    [Parameter]
    public string Color { get; set; } = "currentColor";

    [Parameter]
    public string? Class { get; set; }

    [Parameter]
    public string? Style { get; set; }

    [Parameter(CaptureUnmatchedValues = true)]
    public Dictionary<string, object>? AdditionalAttributes { get; set; }

    private string? SvgContent => ZakIconRegistry.GetSvgElements(Name);
}
`;
  fs.writeFileSync(path.join(blazorDir, "ZakIcon.razor"), razorContent, "utf-8");

  // README.md
  const readmeContent = `# ZakIcons.Blazor

Blazor component library for ZAK Icons ecosystem.

## Installation

\`\`\`bash
dotnet add package ZakIcons.Blazor
\`\`\`

## Usage

In \`_Imports.razor\`:

\`\`\`razor
@using ZakIcons.Blazor
\`\`\`

In any Razor component:

\`\`\`razor
<ZakIcon Name="Truck" Size="32" Color="#0284c7" StrokeWidth="1.5" />
<ZakIcon Name="ArrowLeft" Size="24" />
<ZakIcon Name="container" Size="28" Class="text-emerald-500" />
\`\`\`

## Parameters

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| \`Name\` | \`string\` | required | Icon name (kebab-case or PascalCase) |
| \`Size\` | \`int\` | \`24\` | Width and height in px |
| \`StrokeWidth\` | \`double\` | \`2.0\` | SVG stroke width |
| \`Color\` | \`string\` | \`"currentColor"\` | Stroke color |
| \`Class\` | \`string?\` | \`null\` | CSS class names |
| \`Style\` | \`string?\` | \`null\` | Inline styles |

## License

MIT
`;
  fs.writeFileSync(path.join(blazorDir, "README.md"), readmeContent, "utf-8");

  console.log("Successfully generated ZakIcons.Blazor!");
}

if (require.main === module) {
  runGenerateBlazor();
}
