import fs from "node:fs";
import path from "node:path";

const flutterDir = path.resolve(process.cwd(), "packages/flutter");
const iconsDir = path.resolve(process.cwd(), "icons");
const metadataDir = path.resolve(process.cwd(), "metadata");

function toCamelCase(str: string): string {
  const clean = str.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  let result = clean.charAt(0).toLowerCase() + clean.slice(1);
  if (/^[0-9]/.test(result)) {
    result = `icon${result}`;
  }
  // Reserved words in Dart
  const reserved = new Set(["default", "switch", "case", "new", "class", "void", "null"]);
  if (reserved.has(result)) {
    result = `${result}Icon`;
  }
  return result;
}

export function runGenerateFlutter() {
  console.log("Generating zak_icons Flutter package...");

  const libDir = path.join(flutterDir, "lib");
  const srcDir = path.join(libDir, "src");

  if (!fs.existsSync(srcDir)) {
    fs.mkdirSync(srcDir, { recursive: true });
  }

  const iconsJson = JSON.parse(fs.readFileSync(path.join(metadataDir, "icons.json"), "utf-8"));

  // pubspec.yaml
  const pubspecContent = `name: zak_icons
description: A clean, modern open-source icon ecosystem for Flutter applications with 300+ vector icons.
version: 1.0.0
homepage: https://zakicons.dev
repository: https://github.com/zak-icons/zak-icons

environment:
  sdk: ">=3.0.0 <4.0.0"
  flutter: ">=3.10.0"

dependencies:
  flutter:
    sdk: flutter

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^3.0.0
`;
  fs.writeFileSync(path.join(flutterDir, "pubspec.yaml"), pubspecContent, "utf-8");

  // Generate icon constants in lib/src/zak_icon_data.dart
  const iconDeclarations: string[] = [];

  for (const item of iconsJson) {
    const filePath = path.join(iconsDir, item.category, `${item.name}.svg`);
    if (!fs.existsSync(filePath)) continue;

    const svg = fs.readFileSync(filePath, "utf-8");
    const match = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
    const innerHtml = match ? match[1].trim() : "";
    const escaped = innerHtml.replace(/'/g, "\\'").replace(/\n/g, " ");

    const camel = toCamelCase(item.name);
    iconDeclarations.push(`  /// ${item.title} icon in [${item.category}] category.
  static const ZakIconData ${camel} = ZakIconData(
    name: '${item.name}',
    category: '${item.category}',
    svgData: '${escaped}',
  );`);
  }

  // lib/src/zak_icon_data.dart
  const dataContent = `/// Holds raw metadata and vector data for a ZAK icon.
class ZakIconData {
  final String name;
  final String category;
  final String svgData;

  const ZakIconData({
    required this.name,
    required this.category,
    required this.svgData,
  });
}

/// Catalog of all 300+ ZAK icons for Flutter.
class ZakIcons {
${iconDeclarations.join("\n\n")}
}
`;
  fs.writeFileSync(path.join(srcDir, "zak_icon_data.dart"), dataContent, "utf-8");

  // lib/src/zak_icon_widget.dart
  const widgetContent = `import 'package:flutter/widgets.dart';
import 'zak_icon_data.dart';

/// A widget that displays a ZAK icon with customizable size, color, and opacity.
class ZakIcon extends StatelessWidget {
  final ZakIconData icon;
  final double? size;
  final Color? color;
  final double opacity;
  final String? semanticLabel;

  const ZakIcon(
    this.icon, {
    super.key,
    this.size = 24.0,
    this.color,
    this.opacity = 1.0,
    this.semanticLabel,
  });

  @override
  Widget build(BuildContext context) {
    final IconThemeData iconTheme = IconTheme.of(context);
    final double iconSize = size ?? iconTheme.size ?? 24.0;
    final Color iconColor = color ?? iconTheme.color ?? const Color(0xFF000000);

    return Semantics(
      label: semanticLabel,
      image: true,
      child: Opacity(
        opacity: opacity,
        child: SizedBox(
          width: iconSize,
          height: iconSize,
          child: CustomPaint(
            painter: _ZakIconPainter(icon: icon, color: iconColor),
          ),
        ),
      ),
    );
  }
}

class _ZakIconPainter extends CustomPainter {
  final ZakIconData icon;
  final Color color;

  _ZakIconPainter({required this.icon, required this.color});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.0 * (size.width / 24.0)
      ..strokeCap = StrokeCap.round
      ..strokeJoin = StrokeJoin.round;

    // Draw baseline icon canvas frame
    final rect = Rect.fromLTWH(0, 0, size.width, size.height);
    canvas.drawRect(rect, paint..strokeWidth = 0.5);
  }

  @override
  bool shouldRepaint(covariant _ZakIconPainter oldDelegate) =>
      oldDelegate.icon != icon || oldDelegate.color != color;
}
`;
  fs.writeFileSync(path.join(srcDir, "zak_icon_widget.dart"), widgetContent, "utf-8");

  // lib/zak_icons.dart
  const libContent = `library zak_icons;

export 'src/zak_icon_data.dart';
export 'src/zak_icon_widget.dart';
`;
  fs.writeFileSync(path.join(libDir, "zak_icons.dart"), libContent, "utf-8");

  // README.md
  const readmeContent = `# zak_icons (Flutter)

A clean, modern open-source icon ecosystem for Flutter with 300+ vector icons.

## Installation

Add to your \`pubspec.yaml\`:

\`\`\`yaml
dependencies:
  zak_icons: ^1.0.0
\`\`\`

## Usage

\`\`\`dart
import 'package:flutter/material.dart';
import 'package:zak_icons/zak_icons.dart';

Widget build(BuildContext context) {
  return Column(
    children: [
      ZakIcon(
        ZakIcons.truck,
        size: 32,
        color: Colors.blue,
      ),
      ZakIcon(
        ZakIcons.arrowLeft,
        size: 24,
      ),
      ZakIcon(
        ZakIcons.container,
        size: 28,
        color: Colors.green,
      ),
    ],
  );
}
\`\`\`

## License

MIT
`;
  fs.writeFileSync(path.join(flutterDir, "README.md"), readmeContent, "utf-8");

  console.log("Successfully generated zak_icons Flutter package!");
}

if (require.main === module) {
  runGenerateFlutter();
}
