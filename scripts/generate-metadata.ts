import fs from "node:fs";
import path from "node:path";
import { allIcons } from "./icons-data";

const metadataDir = path.resolve(process.cwd(), "metadata");
const iconsDir = path.resolve(process.cwd(), "icons");

if (!fs.existsSync(metadataDir)) {
  fs.mkdirSync(metadataDir, { recursive: true });
}

export interface IconMetadata {
  name: string;
  title: string;
  category: string;
  tags: string[];
  aliases: string[];
  style: "outline";
  viewBox: "0 0 24 24";
  svgPath?: string;
}

export interface CategoryMetadata {
  id: string;
  title: string;
  description: string;
  count: number;
  icons: string[];
}

const categoryDescriptions: Record<string, string> = {
  logistics: "Industrial supply chain, freight, maritime, container handling, and warehousing operations.",
  arrows: "Directional indicators, navigation chevrons, pointers, and spatial transformation controls.",
  navigation: "Wayfinding, geolocation, maps, markers, routes, and geographic orientation.",
  actions: "Core interactive controls, editing operations, state toggles, and user actions.",
  system: "Window frames, layout arrangements, power states, menus, and operating system controls.",
  commerce: "E-commerce stores, shopping carts, transactions, checkout flows, and retail tags.",
  finance: "Banking institutions, currencies, ledgers, assets, payments, and accounting.",
  analytics: "Performance metrics, time series graphs, conversion funnels, and data visualizations.",
  files: "Document types, contracts, spreadsheets, archives, and digital media records.",
  folders: "Directories, project workspaces, collections, and file system management.",
  communication: "Messaging, voice calls, emails, feedback channels, and notification alerts.",
  media: "Audio and video playback, studio recording, photography, and stream controls.",
  users: "Identity profiles, user management, permissions, teams, and member credentials.",
  security: "Encryption locks, shields, biometric verification, and authentication keys.",
  devices: "Hardware workstations, mobile devices, displays, peripherals, and connectivity.",
  development: "Code brackets, version control commits, pull requests, terminals, and debugging.",
  cloud: "Infrastructure nodes, serverless deployments, backups, and network topologies.",
  ai: "Artificial intelligence models, neural networks, automation bots, and smart agents.",
  health: "Medical monitoring, vitality metrics, pharmaceuticals, and healthcare equipment.",
  food: "Culinary dining, beverages, produce, meal services, and cafe lifestyle.",
  weather: "Meteorological forecasts, atmospheric conditions, temperature, and climate.",
  system: "Layout controls, theme toggles, status loaders, and configuration utilities.",
  transportation: "Ground, rail, sea, and aviation transit vehicles and infrastructure.",
  travel: "Hospitality, luggage packing, vacations, outdoor expeditions, and tourism.",
  accessibility: "Universal design, assistive technology, and sensory accessibility indicators."
};

export function runGenerateMetadata() {
  console.log("Generating metadata index files...");

  // Build icon dictionary from disk and icons-data
  const iconDataMap = new Map<string, (typeof allIcons)[0]>();
  for (const item of allIcons) {
    iconDataMap.set(item.name, item);
  }

  const iconsMetadata: IconMetadata[] = [];
  const categoriesMap = new Map<string, string[]>();
  const aliasesMap: Record<string, string> = {};
  const tagsMap: Record<string, string[]> = {};

  // Scan physical icons directory
  const catDirs = fs.readdirSync(iconsDir, { withFileTypes: true });

  for (const cDir of catDirs) {
    if (!cDir.isDirectory()) continue;
    const catName = cDir.name;
    const catPath = path.join(iconsDir, catName);
    const files = fs.readdirSync(catPath).filter(f => f.endsWith(".svg"));

    for (const file of files) {
      const name = path.basename(file, ".svg");
      const data = iconDataMap.get(name);

      const title = data?.title || name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
      const tags = Array.from(new Set([...(data?.tags || []), catName, ...name.split("-")]));
      const aliases = data?.aliases || [name.replace(/-/g, " ")];

      const meta: IconMetadata = {
        name,
        title,
        category: catName,
        tags,
        aliases,
        style: "outline",
        viewBox: "0 0 24 24"
      };

      iconsMetadata.push(meta);

      // Add to category
      if (!categoriesMap.has(catName)) {
        categoriesMap.set(catName, []);
      }
      categoriesMap.get(catName)!.push(name);

      // Add to aliases map
      for (const alias of aliases) {
        aliasesMap[alias.toLowerCase()] = name;
      }
      aliasesMap[name.toLowerCase()] = name;

      // Add to tags map
      for (const tag of tags) {
        const lower = tag.toLowerCase();
        if (!tagsMap[lower]) {
          tagsMap[lower] = [];
        }
        if (!tagsMap[lower].includes(name)) {
          tagsMap[lower].push(name);
        }
      }
    }
  }

  // Sort icons alphabetically by name
  iconsMetadata.sort((a, b) => a.name.localeCompare(b.name));

  // Build categories list
  const categoriesMetadata: CategoryMetadata[] = Array.from(categoriesMap.entries()).map(([id, iconList]) => ({
    id,
    title: id.charAt(0).toUpperCase() + id.slice(1).replace("-", " "),
    description: categoryDescriptions[id] || `Comprehensive collection of ${id} icons.`,
    count: iconList.length,
    icons: iconList.sort()
  })).sort((a, b) => a.title.localeCompare(b.title));

  // Write files
  fs.writeFileSync(path.join(metadataDir, "icons.json"), JSON.stringify(iconsMetadata, null, 2), "utf-8");
  fs.writeFileSync(path.join(metadataDir, "categories.json"), JSON.stringify(categoriesMetadata, null, 2), "utf-8");
  fs.writeFileSync(path.join(metadataDir, "aliases.json"), JSON.stringify(aliasesMap, null, 2), "utf-8");
  fs.writeFileSync(path.join(metadataDir, "tags.json"), JSON.stringify(tagsMap, null, 2), "utf-8");

  console.log(`Metadata generation complete!
  - ${iconsMetadata.length} icons in icons.json
  - ${categoriesMetadata.length} categories in categories.json
  - ${Object.keys(aliasesMap).length} aliases in aliases.json
  - ${Object.keys(tagsMap).length} tags in tags.json`);
}

if (require.main === module) {
  runGenerateMetadata();
}
