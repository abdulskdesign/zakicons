import { RawIconDefinition } from "./types";

export const logisticsIcons: RawIconDefinition[] = [
  {
    name: "container",
    category: "logistics",
    title: "Container",
    tags: ["shipping", "freight", "cargo", "intermodal", "box", "steel"],
    aliases: ["shipping container", "freight box"],
    elements: '<rect x="2" y="5" width="20" height="14" rx="2"/><path d="M7 5v14"/><path d="M12 5v14"/><path d="M17 5v14"/>'
  },
  {
    name: "cargo",
    category: "logistics",
    title: "Cargo",
    tags: ["freight", "boxes", "goods", "shipment", "inventory"],
    aliases: ["freight goods", "cargo load"],
    elements: '<path d="m2 9 10-5 10 5-10 5L2 9z"/><path d="m2 15 10 5 10-5"/><path d="M2 9v6l10 5 10-5V9"/>'
  },
  {
    name: "ship",
    category: "logistics",
    title: "Cargo Ship",
    tags: ["vessel", "maritime", "ocean", "sea", "boat", "freighter"],
    aliases: ["container ship", "freight vessel"],
    elements: '<path d="M2 19c3-1 6-1 10 0s7 1 10 0l-2-7H4l-2 7z"/><path d="M6 12V6h12v6"/><path d="M10 6V3h4v3"/><path d="M4 22c3-1 6-1 10 0s7 1 10 0"/>'
  },
  {
    name: "port",
    category: "logistics",
    title: "Port",
    tags: ["harbor", "dock", "terminal", "maritime", "quay"],
    aliases: ["sea port", "shipping terminal"],
    elements: '<path d="M2 20h20"/><path d="M6 20V8l6-4 6 4v12"/><path d="M10 12h4"/><path d="M12 12v8"/><path d="M4 14l2-1"/><path d="M20 14l-2-1"/>'
  },
  {
    name: "truck",
    category: "logistics",
    title: "Truck",
    tags: ["delivery", "vehicle", "transport", "freight", "lorry"],
    aliases: ["delivery truck", "semi truck"],
    elements: '<path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>'
  },
  {
    name: "warehouse",
    category: "logistics",
    title: "Warehouse",
    tags: ["storage", "depot", "facility", "fulfillment", "distribution"],
    aliases: ["storage depot", "fulfillment center"],
    elements: '<path d="M3 21V9l9-6 9 6v12H3z"/><path d="M9 21v-8a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8"/><path d="M9 8h6"/>'
  },
  {
    name: "gate",
    category: "logistics",
    title: "Gate",
    tags: ["security", "barrier", "entry", "checkpoint", "access", "toll"],
    aliases: ["entry gate", "toll barrier"],
    elements: '<path d="M4 21V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v16"/><path d="M4 11h16"/><path d="M9 4v7"/><path d="M15 4v7"/><circle cx="9" cy="16" r="1"/><circle cx="15" cy="16" r="1"/>'
  },
  {
    name: "customs",
    category: "logistics",
    title: "Customs",
    tags: ["border", "clearance", "inspection", "declaration", "duty"],
    aliases: ["customs clearance", "border control"],
    elements: '<path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/><circle cx="12" cy="12" r="10"/>'
  },
  {
    name: "inspection",
    category: "logistics",
    title: "Inspection",
    tags: ["audit", "verify", "quality", "check", "assessment"],
    aliases: ["quality check", "cargo inspection"],
    elements: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><circle cx="11" cy="14" r="3"/><path d="m13.5 16.5 3 3"/>'
  },
  {
    name: "package",
    category: "logistics",
    title: "Package",
    tags: ["box", "parcel", "delivery", "shipping", "goods"],
    aliases: ["delivery parcel", "carton box"],
    elements: '<path d="m16.5 9.4-9-5.19M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.29 7 12 12.01 20.71 7"/><line x1="12" y1="22.08" x2="12" y2="12"/>'
  },
  {
    name: "pallet",
    category: "logistics",
    title: "Pallet",
    tags: ["storage", "skid", "handling", "forklift", "rack"],
    aliases: ["wooden pallet", "skid"],
    elements: '<rect x="2" y="14" width="20" height="3" rx="1"/><path d="M4 17v4"/><path d="M12 17v4"/><path d="M20 17v4"/><path d="M5 14V6a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8"/>'
  },
  {
    name: "crane",
    category: "logistics",
    title: "Port Crane",
    tags: ["hoist", "lifting", "heavy", "container crane", "docks"],
    aliases: ["gantry crane", "container lift"],
    elements: '<path d="M4 21h16"/><path d="M6 21V7l14-4v4L9 10v11"/><path d="M17 5v8"/><path d="M15 13h4"/>'
  },
  {
    name: "forklift",
    category: "logistics",
    title: "Forklift",
    tags: ["warehouse", "equipment", "lifting", "loader", "pallet jack"],
    aliases: ["fork truck", "warehouse loader"],
    elements: '<circle cx="7" cy="18" r="2"/><circle cx="15" cy="18" r="2"/><path d="M9 18h4"/><path d="M5 18H3v-5l4-3h4v8"/><path d="M11 7h3v11"/><path d="M17 5v13h4"/>'
  },
  {
    name: "rail",
    category: "logistics",
    title: "Freight Rail",
    tags: ["train", "tracks", "railway", "intermodal", "transport"],
    aliases: ["rail transport", "freight tracks"],
    elements: '<path d="M5 3 2 21"/><path d="M19 3l3 18"/><path d="M4 8h16"/><path d="M3 14h18"/><path d="M2 20h20"/>'
  },
  {
    name: "train",
    category: "logistics",
    title: "Freight Train",
    tags: ["locomotive", "railroad", "bulk", "cargo train"],
    aliases: ["freight engine", "rail car"],
    elements: '<rect x="4" y="3" width="16" height="15" rx="3"/><path d="M4 11h16"/><circle cx="8" cy="15" r="1.5"/><circle cx="16" cy="15" r="1.5"/><path d="m6 21 2-3"/><path d="m18 21-2-3"/>'
  },
  {
    name: "route-logistics",
    category: "logistics",
    title: "Supply Route",
    tags: ["navigation", "path", "dispatch", "waypoints", "journey"],
    aliases: ["dispatch route", "delivery route"],
    elements: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M6 16v-4a4 4 0 0 1 4-4h4a4 4 0 0 0 4-4V5"/><polyline points="15 7 18 5 15 3"/>'
  },
  {
    name: "shipment",
    category: "logistics",
    title: "Shipment",
    tags: ["freight", "consignment", "package", "dispatch", "order"],
    aliases: ["consignment", "cargo shipment"],
    elements: '<rect x="3" y="8" width="18" height="13" rx="2"/><path d="M8 8V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v3"/><path d="M12 12v5"/><path d="M9 14.5l3-2.5 3 2.5"/>'
  },
  {
    name: "invoice",
    category: "logistics",
    title: "Logistics Invoice",
    tags: ["billing", "waybill", "bill of lading", "payment", "customs doc"],
    aliases: ["bill of lading", "waybill"],
    elements: '<path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1z"/><path d="M8 7h8"/><path d="M8 11h8"/><path d="M8 15h4"/>'
  },
  {
    name: "vendor",
    category: "logistics",
    title: "Vendor",
    tags: ["supplier", "distributor", "merchant", "b2b", "partner"],
    aliases: ["supplier", "distributor"],
    elements: '<path d="M3 9l9-6 9 6v11a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z"/><path d="M9 21V12h6v9"/><path d="M2 9h20"/>'
  },
  {
    name: "operations",
    category: "logistics",
    title: "Operations Hub",
    tags: ["management", "control", "monitoring", "dispatch", "workflow"],
    aliases: ["command center", "dispatch hub"],
    elements: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>'
  },
  {
    name: "equipment",
    category: "logistics",
    title: "Industrial Equipment",
    tags: ["machinery", "tools", "rig", "maintenance", "gear"],
    aliases: ["machinery", "heavy equipment"],
    elements: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
  },
  {
    name: "delivery",
    category: "logistics",
    title: "Express Delivery",
    tags: ["fast shipping", "courier", "express", "rush", "dispatch"],
    aliases: ["express courier", "rush delivery"],
    elements: '<path d="M2 17h10M5 14h4M3 11h8"/><path d="M14 17h2.5a2.5 2.5 0 0 0 2.5-2.5V8a1 1 0 0 0-1-1h-4"/><circle cx="18" cy="18" r="2"/><path d="M16 7l2-4h4"/>'
  },
  {
    name: "tracking",
    category: "logistics",
    title: "Package Tracking",
    tags: ["gps", "location", "status", "shipment tracker", "scan"],
    aliases: ["shipment tracking", "cargo radar"],
    elements: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/><path d="M3 12h2"/><path d="M19 12h2"/><path d="M12 3v2"/><path d="M12 19v2"/>'
  },
  {
    name: "freight",
    category: "logistics",
    title: "Freight Transport",
    tags: ["bulk", "cargo", "commercial", "logistics"],
    aliases: ["heavy freight", "bulk shipment"],
    elements: '<rect x="1" y="6" width="15" height="11" rx="1"/><path d="M16 10h4l3 3v4h-7"/><circle cx="5" cy="17" r="2"/><circle cx="12" cy="17" r="2"/><circle cx="19" cy="17" r="2"/>'
  },
  {
    name: "conveyor",
    category: "logistics",
    title: "Conveyor Belt",
    tags: ["assembly", "sorting", "automation", "facility", "line"],
    aliases: ["sorting line", "assembly conveyor"],
    elements: '<rect x="2" y="13" width="20" height="5" rx="2.5"/><circle cx="6" cy="15.5" r="1"/><circle cx="12" cy="15.5" r="1"/><circle cx="18" cy="15.5" r="1"/><rect x="8" y="6" width="8" height="7" rx="1"/>'
  },
  {
    name: "weight",
    category: "logistics",
    title: "Cargo Weight",
    tags: ["scale", "payload", "tonnage", "measurement", "heavy"],
    aliases: ["cargo scale", "payload weight"],
    elements: '<path d="M8 6h8l3 13a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L8 6z"/><circle cx="12" cy="4" r="2"/>'
  },
  {
    name: "dolly",
    category: "logistics",
    title: "Hand Truck Dolly",
    tags: ["hand truck", "porter", "moving", "cart", "warehouse"],
    aliases: ["hand truck", "sack barrow"],
    elements: '<circle cx="7" cy="19" r="2"/><path d="M7 17l4-12h2"/><path d="M9 13h9a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H9"/><path d="M5 19h2"/>'
  },
  {
    name: "barcode-scanner",
    category: "logistics",
    title: "Barcode Scanner",
    tags: ["pda", "terminal", "scan", "inventory", "rfid"],
    aliases: ["rfid reader", "inventory gun"],
    elements: '<path d="M4 4h5v4H4zM15 4h5v4h-5zM4 16h5v4H4z"/><path d="M15 16h2v4h-2zM19 16h1v4h-1z"/><path d="M2 12h20"/>'
  },
  {
    name: "seal-check",
    category: "logistics",
    title: "Container Seal Check",
    tags: ["security seal", "tamper proof", "verified", "passed", "secure"],
    aliases: ["security seal", "tamper verification"],
    elements: '<path d="M12 2l7 4v6c0 5.5-3.5 10-7 12-3.5-2-7-6.5-7-12V6l7-4z"/><path d="m9 12 2 2 4-4"/>'
  },
  {
    name: "dispatch",
    category: "logistics",
    title: "Dispatch",
    tags: ["fleet", "send", "outbound", "transit", "courier"],
    aliases: ["outbound dispatch", "fleet control"],
    elements: '<path d="M22 2 11 13"/><path d="m22 2-7 20-4-9-9-4 20-7z"/>'
  }
];
