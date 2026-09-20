import { RawIconDefinition } from "./types";

export const techDevicesIcons: RawIconDefinition[] = [
  // Devices
  {
    name: "laptop",
    category: "devices",
    title: "Laptop",
    tags: ["computer", "notebook", "portable", "screen", "macbook"],
    aliases: ["notebook computer", "laptop screen"],
    elements: '<path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"/>'
  },
  {
    name: "smartphone",
    category: "devices",
    title: "Smartphone",
    tags: ["mobile", "cellphone", "iphone", "android", "touchscreen"],
    aliases: ["cell phone", "mobile device"],
    elements: '<rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>'
  },
  {
    name: "tablet",
    category: "devices",
    title: "Tablet",
    tags: ["ipad", "slate", "touchscreen", "portable"],
    aliases: ["tablet screen", "ipad device"],
    elements: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>'
  },
  {
    name: "monitor",
    category: "devices",
    title: "Monitor Screen",
    tags: ["desktop", "display", "tv", "workstation"],
    aliases: ["desktop display", "computer screen"],
    elements: '<rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>'
  },
  {
    name: "server",
    category: "devices",
    title: "Server Rack",
    tags: ["datacenter", "hosting", "hardware", "storage", "cloud host"],
    aliases: ["server rack", "hosting node"],
    elements: '<rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>'
  },
  {
    name: "hard-drive",
    category: "devices",
    title: "Hard Drive",
    tags: ["hdd", "ssd", "disk", "storage unit"],
    aliases: ["disk storage", "external hdd"],
    elements: '<line x1="22" y1="12" x2="2" y2="12"/><path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/><line x1="6" y1="16" x2="6.01" y2="16"/><line x1="10" y1="16" x2="10.01" y2="16"/>'
  },
  {
    name: "cpu",
    category: "devices",
    title: "Processor CPU",
    tags: ["chip", "microprocessor", "silicon", "hardware", "soc"],
    aliases: ["microchip", "silicon cpu"],
    elements: '<rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/>'
  },
  {
    name: "wifi",
    category: "devices",
    title: "Wi-Fi",
    tags: ["wireless", "internet", "connection", "wlan", "network"],
    aliases: ["wireless signal", "wlan broadcast"],
    elements: '<path d="M5 12.55a11 11 0 0 1 14.08 0M1.42 9a16 16 0 0 1 21.16 0M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>'
  },
  // Development
  {
    name: "code",
    category: "development",
    title: "Code",
    tags: ["brackets", "html", "syntax", "source", "programming"],
    aliases: ["code tags", "angle brackets"],
    elements: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>'
  },
  {
    name: "terminal",
    category: "development",
    title: "Terminal",
    tags: ["cli", "console", "command line", "bash", "shell"],
    aliases: ["command prompt", "shell window"],
    elements: '<polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/><rect x="2" y="3" width="20" height="18" rx="2" ry="2"/>'
  },
  {
    name: "git-branch",
    category: "development",
    title: "Git Branch",
    tags: ["vcs", "fork", "version control", "merge line"],
    aliases: ["version branch", "fork tree"],
    elements: '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>'
  },
  {
    name: "git-commit",
    category: "development",
    title: "Git Commit",
    tags: ["snapshot", "revision", "hash", "git node"],
    aliases: ["git revision", "commit node"],
    elements: '<circle cx="12" cy="12" r="4"/><line x1="1.05" y1="12" x2="7" y2="12"/><line x1="17.01" y1="12" x2="22.96" y2="12"/>'
  },
  {
    name: "git-pull-request",
    category: "development",
    title: "Git Pull Request",
    tags: ["pr", "merge", "review", "github", "vcs"],
    aliases: ["pull request", "merge request"],
    elements: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M13 6h3a2 2 0 0 1 2 2v7"/><line x1="6" y1="9" x2="6" y2="21"/>'
  },
  {
    name: "bug",
    category: "development",
    title: "Bug",
    tags: ["defect", "issue", "debugger", "glitch", "error"],
    aliases: ["software bug", "glitch insect"],
    elements: '<rect width="8" height="14" x="8" y="6" rx="4"/><path d="m19 7-3 2"/><path d="m5 7 3 2"/><path d="m19 19-3-2"/><path d="m5 19 3-2"/><path d="M20 13h-4"/><path d="M4 13h4"/><path d="m10 4 1 2"/><path d="m14 4-1 2"/>'
  },
  {
    name: "database",
    category: "development",
    title: "Database",
    tags: ["sql", "storage", "table", "postgres", "data warehouse"],
    aliases: ["database cylinder", "sql store"],
    elements: '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>'
  },
  // Cloud
  {
    name: "cloud",
    category: "cloud",
    title: "Cloud",
    tags: ["serverless", "storage", "hosting", "aws", "azure"],
    aliases: ["cloud network", "hosted cloud"],
    elements: '<path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/>'
  },
  {
    name: "cloud-upload",
    category: "cloud",
    title: "Cloud Upload",
    tags: ["backup", "sync to cloud", "push to host"],
    aliases: ["backup cloud", "push online"],
    elements: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><polyline points="16 16 12 12 8 16"/><line x1="12" y1="12" x2="12" y2="21"/>'
  },
  {
    name: "cloud-download",
    category: "cloud",
    title: "Cloud Download",
    tags: ["restore", "sync from cloud", "pull files"],
    aliases: ["fetch cloud", "cloud restore"],
    elements: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><polyline points="8 17 12 21 16 17"/><line x1="12" y1="12" x2="12" y2="21"/>'
  },
  // AI
  {
    name: "sparkles",
    category: "ai",
    title: "Sparkles AI",
    tags: ["magic", "generative", "intelligence", "enhancement", "stars"],
    aliases: ["generative sparkles", "ai magic"],
    elements: '<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>'
  },
  {
    name: "bot",
    category: "ai",
    title: "AI Bot",
    tags: ["robot", "agent", "assistant", "automation", "android"],
    aliases: ["robot agent", "ai assistant"],
    elements: '<rect width="18" height="12" x="3" y="6" rx="2"/><path d="M9 13v-2"/><path d="M15 13v-2"/><path d="M12 6V2"/><circle cx="12" cy="2" r="1"/><path d="M2 12h1"/><path d="M21 12h1"/>'
  },
  {
    name: "brain",
    category: "ai",
    title: "Neural Brain",
    tags: ["deep learning", "cognition", "llm", "neural network", "mind"],
    aliases: ["neural network", "llm cognition"],
    elements: '<path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-2.04Z"/>'
  }
];
