import React from "react";
import { iconsData, IconDefinition } from "@/lib/icons";
import { IconCard } from "@/components/icon-card/IconCard";

export const metadata = {
  title: "Collections — ZAK Icons",
  description: "Curated icon collections designed for specific domains, from logistics and supply chain to AI and essential UI."
};

interface CollectionDef {
  id: string;
  title: string;
  description: string;
  iconNames: string[];
}

const collectionsList: CollectionDef[] = [
  {
    id: "essential-ui",
    title: "Essential UI & Controls",
    description: "Fundamental building blocks for navigation, form states, notifications, modal closures, and app menus.",
    iconNames: ["menu", "x", "plus", "minus", "check", "check-circle", "alert-circle", "info", "settings", "search", "filter", "sliders", "eye", "eye-off", "lock", "unlock", "star", "heart", "copy", "download", "upload", "share-2", "external-link", "trash-2"]
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    description: "Enterprise operations suite covering maritime freight, intermodal containers, trucking fleets, customs, and warehousing.",
    iconNames: ["container", "cargo", "ship", "port", "truck", "warehouse", "gate", "customs", "inspection", "package", "pallet", "crane", "forklift", "rail", "train", "route-logistics", "shipment", "invoice", "vendor", "operations", "equipment", "delivery", "tracking", "freight", "conveyor", "weight", "dolly", "barcode-scanner", "seal-check", "dispatch", "fleet", "hub"]
  },
  {
    id: "developer",
    title: "Cloud & Developer Tooling",
    description: "Engineered for technical documentation, CLI terminals, git version control workflows, databases, and DevOps.",
    iconNames: ["code", "terminal", "git-branch", "git-commit", "git-merge", "git-pull-request", "bug", "database", "webhook", "cloud", "cloud-upload", "cloud-download", "cloud-cog", "server", "server-cog", "network", "variable", "code-xml"]
  },
  {
    id: "ai",
    title: "AI & Machine Learning",
    description: "Designed for generative AI applications, intelligent assistants, neural agents, and smart workflows.",
    iconNames: ["sparkles", "bot", "brain", "circuit-board", "atom", "lightbulb", "cpu", "scan", "activity-square"]
  },
  {
    id: "finance",
    title: "Finance & Banking",
    description: "Curated for fintech products, merchant payments, ledgers, wallets, currency exchanges, and security vaults.",
    iconNames: ["wallet", "banknote", "coins", "credit-card", "receipt", "landmark", "scale", "dollar-sign", "percent", "piggy-bank", "vault", "calculator", "badge-percent"]
  },
  {
    id: "communication",
    title: "Communication & Media",
    description: "Channels for team collaboration, chat messengers, telephony, voice audio, and video playback.",
    iconNames: ["mail", "message-square", "message-circle", "phone", "phone-call", "inbox", "send", "bell", "bell-off", "play", "pause", "volume-2", "volume-x", "video", "camera", "image", "music", "mic", "rss"]
  }
];

export default function CollectionsPage() {
  return (
    <div className="space-y-16 py-4">
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground">
          Curated Collections
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Specialized icon sets hand-picked for industry-specific platforms and workflows.
        </p>
      </div>

      <div className="space-y-16">
        {collectionsList.map(col => {
          const colIcons = col.iconNames
            .map(name => iconsData.find(i => i.name === name))
            .filter((i): i is IconDefinition => Boolean(i));

          return (
            <section key={col.id} id={col.id} className="space-y-4 scroll-mt-20">
              <div className="border-b border-border pb-3 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground">
                    {col.title}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5 max-w-2xl">
                    {col.description}
                  </p>
                </div>
                <span className="text-xs font-mono text-muted-foreground px-2.5 py-1 rounded bg-muted">
                  {colIcons.length} icons
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
                {colIcons.map(icon => (
                  <IconCard key={icon.name} icon={icon} size={24} strokeWidth={2} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
