import React from "react";
import { IconPlayground } from "@/components/playground/IconPlayground";

export const metadata = {
  title: "Icon Playground — ZAK Icons",
  description: "Live interactive icon customizer and code generator. Tune size, stroke, color, background, and generate code for React, Blazor, Flutter, CSS, and SVG."
};

export default function PlaygroundPage() {
  return (
    <div className="space-y-6 py-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Icon Studio & Playground
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Select any icon, interactively tweak its geometry and styling parameters, and inspect generated code in real time.
        </p>
      </div>

      <IconPlayground />
    </div>
  );
}
