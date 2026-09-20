import React from "react";
import { CodeBlock } from "@/components/code-block/CodeBlock";

export const metadata = {
  title: "Flutter Package (zak_icons) — ZAK Icons Docs",
  description: "Documentation for zak_icons Flutter package with widget usage and parameters."
};

export default function FlutterDocsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Flutter Package (zak_icons)
        </h1>
        <p className="text-base text-muted-foreground mt-2 leading-relaxed">
          Vector icon widget and constant catalog for cross-platform Flutter applications on iOS, Android, Web, and Desktop.
        </p>
      </div>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Installation</h2>
        <CodeBlock
          language="bash"
          code={`flutter pub add zak_icons`}
        />
        <p className="text-xs text-muted-foreground">Or add directly to your <code className="text-foreground bg-muted px-1.5 py-0.5 rounded">pubspec.yaml</code>:</p>
        <CodeBlock
          language="yaml"
          code={`dependencies:\n  flutter:\n    sdk: flutter\n  zak_icons: ^1.0.0`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Usage in Flutter Widgets</h2>
        <CodeBlock
          language="dart"
          code={`import 'package:flutter/material.dart';
import 'package:zak_icons/zak_icons.dart';

class OrderStatusCard extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        ZakIcon(
          ZakIcons.truck,
          size: 32.0,
          color: Colors.blueAccent,
        ),
        SizedBox(width: 12.0),
        ZakIcon(
          ZakIcons.arrowRight,
          size: 20.0,
        ),
        SizedBox(width: 12.0),
        ZakIcon(
          ZakIcons.container,
          size: 28.0,
          color: Colors.green,
        ),
      ],
    );
  }
}`}
        />
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-foreground">Widget Parameters</h2>
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
                <td className="p-3 text-foreground font-bold">icon</td>
                <td className="p-3">ZakIconData</td>
                <td className="p-3">required</td>
                <td className="p-3 font-sans">The icon constant (e.g. ZakIcons.truck)</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">size</td>
                <td className="p-3">double?</td>
                <td className="p-3">24.0</td>
                <td className="p-3 font-sans">Width and height of the icon</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">color</td>
                <td className="p-3">Color?</td>
                <td className="p-3">Theme color</td>
                <td className="p-3 font-sans">Vector stroke color</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">opacity</td>
                <td className="p-3">double</td>
                <td className="p-3">1.0</td>
                <td className="p-3 font-sans">Opacity of the icon widget (0.0 - 1.0)</td>
              </tr>
              <tr>
                <td className="p-3 text-foreground font-bold">semanticLabel</td>
                <td className="p-3">String?</td>
                <td className="p-3">null</td>
                <td className="p-3 font-sans">Accessibility label for screen readers</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
