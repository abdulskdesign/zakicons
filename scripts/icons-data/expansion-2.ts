import { RawIconDefinition } from "./types";

export const expansion2Icons: RawIconDefinition[] = [
  // More Logistics & Enterprise
  {
    name: "conveyor-box",
    category: "logistics",
    title: "Conveyor Moving Box",
    tags: ["sorting", "assembly", "automation line", "packaging"],
    aliases: ["moving parcel", "conveyor line"],
    elements: '<rect x="7" y="4" width="10" height="8" rx="1"/><path d="M2 18h20"/><circle cx="5" cy="18" r="2"/><circle cx="12" cy="18" r="2"/><circle cx="19" cy="18" r="2"/>'
  },
  {
    name: "cargo-hold",
    category: "logistics",
    title: "Cargo Hold Bay",
    tags: ["vessel hold", "bulk cargo", "stowage", "maritime"],
    aliases: ["stowage hold", "ship bay"],
    elements: '<path d="M4 4h16v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4z"/><path d="M4 10h16M12 4v16"/>'
  },
  {
    name: "crane-arm",
    category: "logistics",
    title: "Crane Jib Arm",
    tags: ["heavy lift", "boom crane", "rigging"],
    aliases: ["crane boom", "lifting jib"],
    elements: '<path d="M3 21h18M5 21V5l16 8H5M15 13v6M13 19h4"/>'
  },
  {
    name: "parcel-fast",
    category: "logistics",
    title: "Same Day Parcel",
    tags: ["rush delivery", "express box", "speed shipment"],
    aliases: ["express parcel", "fast box"],
    elements: '<path d="m14 3-8 9h6l-2 9 10-11h-6l2-7z"/>'
  },
  {
    name: "pallet-truck",
    category: "logistics",
    title: "Pallet Jack",
    tags: ["pump truck", "warehouse jack", "manual lift"],
    aliases: ["pump truck", "hand pallet"],
    elements: '<circle cx="6" cy="19" r="2"/><circle cx="18" cy="19" r="2"/><path d="M6 17V6h4M10 6l3 7h7v4H6"/>'
  },
  {
    name: "customs-stamp",
    category: "logistics",
    title: "Customs Clearance Stamp",
    tags: ["border stamp", "duty approved", "customs entry"],
    aliases: ["official stamp", "duty seal"],
    elements: '<path d="M5 22h14M5 18h14l-2-6a4 4 0 0 0-4-3V5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4a4 4 0 0 0-4 3l-2 6z"/>'
  },
  {
    name: "container-refrigerated",
    category: "logistics",
    title: "Reefer Cold Container",
    tags: ["cold chain", "perishable", "temperature controlled", "ice"],
    aliases: ["reefer unit", "cold container"],
    elements: '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="7" y1="5" x2="7" y2="19"/><path d="M12 9v6M9 12h6M10.5 10.5l3 3M13.5 10.5l-3 3"/>'
  },
  {
    name: "seal-lock",
    category: "logistics",
    title: "High Security Bolt Seal",
    tags: ["iso 17712", "bolt seal", "container security", "tamper"],
    aliases: ["bolt seal", "tamper lock"],
    elements: '<rect x="8" y="10" width="8" height="11" rx="2"/><path d="M9 10V6a3 3 0 0 1 6 0v4M12 14v3"/>'
  },
  // Finance & Commerce Expansion
  {
    name: "piggy-bank",
    category: "finance",
    title: "Piggy Bank",
    tags: ["savings", "deposit", "money box", "interest"],
    aliases: ["savings pig", "money box"],
    elements: '<path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5zM16 11h.01M9 6v3"/>'
  },
  {
    name: "vault",
    category: "finance",
    title: "Safe Vault",
    tags: ["security safe", "bank deposit", "lockbox", "strongroom"],
    aliases: ["strongroom safe", "money vault"],
    elements: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="12" cy="12" r="4"/><path d="M12 8v2M12 14v2M8 12h2M14 12h2M18 10h1M18 14h1"/>'
  },
  {
    name: "calculator",
    category: "finance",
    title: "Calculator",
    tags: ["accounting", "math", "computation", "tax", "estimate"],
    aliases: ["accounting calc", "number pad"],
    elements: '<rect width="16" height="20" x="4" y="2" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="16" y1="14" x2="16" y2="18"/><path d="M16 10h.01M12 10h.01M8 10h.01M12 14h.01M8 14h.01M12 18h.01M8 18h.01"/>'
  },
  {
    name: "shopping-basket",
    category: "commerce",
    title: "Shopping Basket",
    tags: ["market", "groceries", "supermarket", "cart"],
    aliases: ["market basket", "grocery tote"],
    elements: '<path d="m5 10 4-7M19 10l-4-7M2 10h20v2a8 8 0 0 1-8 8H10a8 8 0 0 1-8-8v-2z"/>'
  },
  // Dev & Cloud Expansion
  {
    name: "code-xml",
    category: "development",
    title: "Code XML / JSX",
    tags: ["tags", "jsx", "components", "markup"],
    aliases: ["xml tags", "jsx component"],
    elements: '<path d="m18 16 4-4-4-4M6 8l-4 4 4 4M14.5 4l-5 16"/>'
  },
  {
    name: "variable",
    category: "development",
    title: "Variable Math",
    tags: ["math", "declaration", "constant", "function"],
    aliases: ["variable token", "code value"],
    elements: '<path d="M8 21s-4-3-4-9 4-9 4-9M16 3s4 3 4 9-4 9-4 9M15 9l-6 6M9 9l6 6"/>'
  },
  {
    name: "network",
    category: "cloud",
    title: "Network Tree",
    tags: ["lan", "wan", "nodes", "topology", "mesh"],
    aliases: ["network topology", "lan tree"],
    elements: '<rect x="16" y="16" width="6" height="6" rx="1"/><rect x="2" y="16" width="6" height="6" rx="1"/><rect x="9" y="2" width="6" height="6" rx="1"/><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3M12 12V8"/>'
  },
  {
    name: "server-crash",
    category: "cloud",
    title: "Server Error Incident",
    tags: ["outage", "downtime", "500 error", "crash"],
    aliases: ["server down", "outage crash"],
    elements: '<path d="M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2"/><path d="M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><path d="m14 6-4 12"/>'
  },
  // Analytics & UI
  {
    name: "table",
    category: "analytics",
    title: "Data Table",
    tags: ["grid", "cells", "rows", "columns", "spreadsheet"],
    aliases: ["grid table", "matrix data"],
    elements: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/>'
  },
  {
    name: "pie-chart-slice",
    category: "analytics",
    title: "Pie Segment",
    tags: ["analytics", "percentage", "slice", "portion"],
    aliases: ["pie slice", "stat wedge"],
    elements: '<path d="M12 2a10 10 0 0 1 10 10h-10V2zM12 12 4.93 4.93A10 10 0 1 0 22 12H12z"/>'
  },
  // Arrows
  {
    name: "arrow-down-to-dot",
    category: "arrows",
    title: "Arrow Down To Dot",
    tags: ["drop point", "destination", "pin down"],
    aliases: ["drop to dot", "point down"],
    elements: '<path d="M12 2v14M19 9l-7 7-7-7"/><circle cx="12" cy="21" r="1"/>'
  },
  {
    name: "arrow-up-from-dot",
    category: "arrows",
    title: "Arrow Up From Dot",
    tags: ["origin point", "launch", "source"],
    aliases: ["launch from dot", "point up"],
    elements: '<path d="m5 9 7-7 7 7M12 2v14"/><circle cx="12" cy="21" r="1"/>'
  },
  // Media & Devices
  {
    name: "speaker",
    category: "media",
    title: "Audio Speaker",
    tags: ["subwoofer", "hifi", "stereo", "boombox"],
    aliases: ["stereo speaker", "hifi box"],
    elements: '<rect width="16" height="20" x="4" y="2" rx="2"/><circle cx="12" cy="14" r="4"/><line x1="12" y1="6" x2="12.01" y2="6"/>'
  },
  {
    name: "cast",
    category: "media",
    title: "Screen Cast",
    tags: ["chromecast", "airplay", "stream", "broadcast display"],
    aliases: ["chromecast", "wireless display"],
    elements: '<path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"/><line x1="2" y1="20" x2="2.01" y2="20"/>'
  },
  {
    name: "router",
    category: "devices",
    title: "Wi-Fi Router",
    tags: ["modem", "gateway", "access point", "switch"],
    aliases: ["gateway router", "wlan modem"],
    elements: '<rect width="20" height="8" x="2" y="14" rx="2"/><path d="M6.01 18H6M10.01 18H10M15 10v4M17.84 7.17a4 4 0 0 0-5.66 0M20.66 4.34a8 8 0 0 0-11.32 0"/>'
  },
  // Health & Weather
  {
    name: "activity-square",
    category: "health",
    title: "Vitality Monitor",
    tags: ["telemetry", "cardiac tracker", "health widget"],
    aliases: ["cardiac widget", "ecg box"],
    elements: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M17 12h-2l-2 5-2-10-2 5H7"/>'
  },
  {
    name: "thermometer-sun",
    category: "weather",
    title: "High Heat Temperature",
    tags: ["hot", "summer", "warm", "heatwave"],
    aliases: ["heatwave", "summer temp"],
    elements: '<path d="M12 9a4 4 0 0 0-2 7.5v1.5a2 2 0 0 0 4 0v-1.5A4 4 0 0 0 12 9z"/><path d="M12 3v2M6.6 6.6l1.4 1.4M20 4l-2 2M4 12h2M20 12h-2M6.6 17.4l1.4-1.4M4 20l2-2"/>'
  },
  {
    name: "cloud-fog",
    category: "weather",
    title: "Misty Fog",
    tags: ["haze", "mist", "smog", "visibility low"],
    aliases: ["fog cloud", "mist haze"],
    elements: '<path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/><line x1="4" y1="18" x2="20" y2="18"/><line x1="7" y1="21" x2="17" y2="21"/>'
  },
  // Transportation
  {
    name: "plane-takeoff",
    category: "transportation",
    title: "Flight Departure",
    tags: ["takeoff", "depart", "ascend", "flight start"],
    aliases: ["flight takeoff", "departure plane"],
    elements: '<path d="M2 22h20M6.36 17.4 4 17l-2-4 1.1-.55 3.42 1.57L11 8.5l-3.5-3.5 1.5-1.5L14 7l4-2a2 2 0 0 1 2.6 2.6l-2 4 3.5 5 1.5-1.5-3.5-3.5 5.5-4.5 1.57 3.42-.55 1.1-4-2-.4 2.36"/>'
  },
  {
    name: "plane-landing",
    category: "transportation",
    title: "Flight Arrival",
    tags: ["landing", "arrive", "descend", "touchdown"],
    aliases: ["flight landing", "arrival plane"],
    elements: '<path d="M2 22h20M3.77 10.77 2 9l2-4 1.1.55 1.57 3.42L11 7.5l-1-4.5 1.5-1.5 3.5 3.5 4-2a2 2 0 0 1 2.6 2.6l-2 4 4.5 1-1.5 1.5-4.5-1-1.5 4.5 3.42 1.57.55 1.1-4 2-1.77-1.77"/>'
  },
  {
    name: "ship-boat",
    category: "transportation",
    title: "Passenger Ferry",
    tags: ["ferry", "boat", "yacht", "cruise", "water taxi"],
    aliases: ["ferry boat", "water taxi"],
    elements: '<path d="M2 21c3-1 6-1 10 0s7 1 10 0l-2-6H4l-2 6zM5 15V8l7-4 7 4v7M10 8h4"/>'
  },
  // Users & Accessibility
  {
    name: "blind",
    category: "accessibility",
    title: "Visual Assist",
    tags: ["vision impaired", "braille", "blind cane", "assistive"],
    aliases: ["vision assist", "walking cane"],
    elements: '<circle cx="8" cy="4" r="1.5"/><path d="m10 8.5-3 5 4 1.5 2 7M7 11l-3 4M14 17l4 4"/>'
  }
];
