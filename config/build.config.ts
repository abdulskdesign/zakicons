export const buildConfig = {
  name: "ZAK Icons",
  version: "1.0.0",
  description: "An independent, modern open-source icon ecosystem for web, mobile, and enterprise applications",
  canvasSize: 24,
  defaultStrokeWidth: 2,
  packages: {
    core: {
      name: "@zak-icons/core",
      outDir: "packages/core/dist"
    },
    react: {
      name: "@zak-icons/react",
      outDir: "packages/react/dist"
    },
    blazor: {
      name: "ZakIcons.Blazor",
      outDir: "packages/blazor"
    },
    flutter: {
      name: "zak_icons",
      outDir: "packages/flutter"
    },
    web: {
      name: "@zak-icons/web",
      outDir: "packages/web/dist"
    }
  }
};
