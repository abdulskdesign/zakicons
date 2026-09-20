import { RawIconDefinition } from "./types";

export const expansionIcons: RawIconDefinition[] = [
  // Logistics & Enterprise expansion (critical requirement!)
  {
    name: "fleet",
    category: "logistics",
    title: "Fleet Dispatch",
    tags: ["vehicles", "trucks", "convoy", "fleet tracking", "dispatch"],
    aliases: ["fleet convoy", "truck fleet"],
    elements: '<path d="M4 14V6h10v8M14 9h4l2 2v3h-6M2 18h2M12 18h2M20 18h2"/><circle cx="6" cy="18" r="2"/><circle cx="16" cy="18" r="2"/>'
  },
  {
    name: "hub",
    category: "logistics",
    title: "Distribution Hub",
    tags: ["central", "node", "network", "transfer", "nexus"],
    aliases: ["transfer hub", "central depot"],
    elements: '<circle cx="12" cy="12" r="4"/><circle cx="4" cy="4" r="2"/><circle cx="20" cy="4" r="2"/><circle cx="4" cy="20" r="2"/><circle cx="20" cy="20" r="2"/><line x1="5.5" y1="5.5" x2="9.5" y2="9.5"/><line x1="18.5" y1="5.5" x2="14.5" y2="9.5"/><line x1="5.5" y1="18.5" x2="9.5" y2="14.5"/><line x1="18.5" y1="18.5" x2="14.5" y2="14.5"/>'
  },
  {
    name: "box-check",
    category: "logistics",
    title: "Delivered Box",
    tags: ["order fulfilled", "delivered", "package done"],
    aliases: ["order verified", "box delivered"],
    elements: '<path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0"/><polyline points="3.29 7 12 12.01 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/><polyline points="16 16 18 18 22 13"/>'
  },
  {
    name: "box-alert",
    category: "logistics",
    title: "Damaged Cargo",
    tags: ["cargo exception", "incident", "fragile issue", "warning"],
    aliases: ["package exception", "cargo alert"],
    elements: '<path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0"/><polyline points="3.29 7 12 12.01 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/><line x1="18" y1="13" x2="18" y2="17"/><line x1="18" y1="20" x2="18.01" y2="20"/>'
  },
  {
    name: "anchor-dock",
    category: "logistics",
    title: "Berth Moor",
    tags: ["docking", "berth", "mooring", "pier", "seaport"],
    aliases: ["ship moor", "pier berth"],
    elements: '<circle cx="12" cy="7" r="3"/><line x1="12" y1="10" x2="12" y2="22"/><path d="M5 14H2a10 10 0 0 0 20 0h-3"/><line x1="2" y1="22" x2="22" y2="22"/>'
  },
  {
    name: "container-stacked",
    category: "logistics",
    title: "Stacked Containers",
    tags: ["yard", "terminal", "storage stack", "teu"],
    aliases: ["container yard", "teu stack"],
    elements: '<rect x="2" y="13" width="20" height="8" rx="1"/><rect x="4" y="3" width="16" height="8" rx="1"/><line x1="7" y1="3" x2="7" y2="11"/><line x1="12" y1="3" x2="12" y2="11"/><line x1="17" y1="3" x2="17" y2="11"/><line x1="7" y1="13" x2="7" y2="21"/><line x1="12" y1="13" x2="12" y2="21"/><line x1="17" y1="13" x2="17" y2="21"/>'
  },
  {
    name: "gauge-speed",
    category: "logistics",
    title: "Transit Speed",
    tags: ["velocity", "odometer", "speedometer", "kpi", "dispatch rate"],
    aliases: ["speedometer", "transit gauge"],
    elements: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>'
  },
  {
    name: "package-search",
    category: "logistics",
    title: "Package Search",
    tags: ["track and trace", "find package", "locate shipment"],
    aliases: ["shipment finder", "parcel lookup"],
    elements: '<path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0"/><polyline points="3.29 7 12 12.01 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/><circle cx="18" cy="18" r="3"/><line x1="20.5" y1="20.5" x2="22" y2="22"/>'
  },
  // Business & Enterprise
  {
    name: "briefcase",
    category: "business",
    title: "Briefcase",
    tags: ["work", "career", "job", "portfolio", "corporate"],
    aliases: ["attache case", "business bag"],
    elements: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>'
  },
  {
    name: "building",
    category: "business",
    title: "Corporate Building",
    tags: ["headquarters", "office", "company", "firm", "skyline"],
    aliases: ["office building", "headquarters"],
    elements: '<rect x="4" y="2" width="16" height="20" rx="2" ry="2"/><line x1="9" y1="6" x2="9.01" y2="6"/><line x1="15" y1="6" x2="15.01" y2="6"/><line x1="9" y1="10" x2="9.01" y2="10"/><line x1="15" y1="10" x2="15.01" y2="10"/><line x1="9" y1="14" x2="9.01" y2="14"/><line x1="15" y1="14" x2="15.01" y2="14"/><line x1="9" y1="18" x2="15" y2="18"/>'
  },
  {
    name: "presentation",
    category: "business",
    title: "Presentation Board",
    tags: ["pitch", "deck", "meeting", "briefing", "slides"],
    aliases: ["whiteboard", "presentation chart"],
    elements: '<rect width="18" height="12" x="3" y="3" rx="2"/><path d="M8 21h8"/><path d="M12 15v6"/><path d="M8 9h8"/><path d="M8 12h4"/>'
  },
  {
    name: "target",
    category: "business",
    title: "Business Target",
    tags: ["objective", "goal", "kpi", "okr", "accuracy", "bullseye"],
    aliases: ["bullseye", "okr target"],
    elements: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>'
  },
  {
    name: "badge-percent",
    category: "business",
    title: "Discount Badge",
    tags: ["promotion", "coupon", "offer", "deal"],
    aliases: ["deal badge", "promo badge"],
    elements: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><line x1="15" y1="9" x2="9" y2="15"/><circle cx="9.5" cy="9.5" r=".5" fill="currentColor"/><circle cx="14.5" cy="14.5" r=".5" fill="currentColor"/>'
  },
  {
    name: "award",
    category: "business",
    title: "Award Ribbon",
    tags: ["trophy", "medal", "achievement", "first place", "winner"],
    aliases: ["medal ribbon", "achievement badge"],
    elements: '<circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>'
  },
  // Arrows Expansion
  {
    name: "rotate-cw",
    category: "arrows",
    title: "Rotate Clockwise",
    tags: ["turn", "clockwise", "orientation", "spin"],
    aliases: ["turn clockwise", "rotate right"],
    elements: '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>'
  },
  {
    name: "rotate-ccw",
    category: "arrows",
    title: "Rotate Counter-Clockwise",
    tags: ["turn", "counter-clockwise", "spin left"],
    aliases: ["turn counter-clockwise", "rotate left"],
    elements: '<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>'
  },
  {
    name: "arrow-left-right",
    category: "arrows",
    title: "Arrow Left Right",
    tags: ["horizontal", "bidirectional", "swap", "exchange"],
    aliases: ["bidirectional arrow", "horizontal exchange"],
    elements: '<polyline points="8 3 4 7 8 11"/><polyline points="16 21 20 17 16 13"/><line x1="4" y1="7" x2="20" y2="7"/><line x1="20" y1="17" x2="4" y2="17"/>'
  },
  {
    name: "arrow-up-down",
    category: "arrows",
    title: "Arrow Up Down",
    tags: ["vertical", "bidirectional", "height", "sort vertical"],
    aliases: ["vertical exchange", "up down arrow"],
    elements: '<polyline points="3 8 7 4 11 8"/><polyline points="21 16 17 20 13 16"/><line x1="7" y1="4" x2="7" y2="20"/><line x1="17" y1="20" x2="17" y2="4"/>'
  },
  {
    name: "expand",
    category: "arrows",
    title: "Expand Diagonal",
    tags: ["outward", "spread", "enlarge"],
    aliases: ["expand diagonal", "spread out"],
    elements: '<polyline points="15 3 21 3 21 9"/><line x1="21" y1="3" x2="14" y2="10"/><polyline points="9 21 3 21 3 15"/><line x1="3" y1="21" x2="10" y2="14"/>'
  },
  {
    name: "shrink",
    category: "arrows",
    title: "Shrink Diagonal",
    tags: ["inward", "compress", "reduce"],
    aliases: ["shrink diagonal", "inward compress"],
    elements: '<polyline points="4 14 10 14 10 20"/><line x1="14" y1="10" x2="21" y2="3"/><polyline points="20 10 14 10 14 4"/><line x1="3" y1="21" x2="10" y2="14"/>'
  },
  // Actions & Controls Expansion
  {
    name: "thumbs-up",
    category: "actions",
    title: "Thumbs Up",
    tags: ["like", "approve", "positive", "agree"],
    aliases: ["like gesture", "approve thumbs"],
    elements: '<path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>'
  },
  {
    name: "thumbs-down",
    category: "actions",
    title: "Thumbs Down",
    tags: ["dislike", "disapprove", "negative"],
    aliases: ["dislike gesture", "disapprove thumbs"],
    elements: '<path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"/>'
  },
  {
    name: "shield-x",
    category: "security",
    title: "Shield Rejected",
    tags: ["blocked", "denied", "firewall drop"],
    aliases: ["shield blocked", "firewall rejected"],
    elements: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
  },
  {
    name: "shield-off",
    category: "security",
    title: "Shield Disabled",
    tags: ["insecure", "unprotected", "firewall down"],
    aliases: ["disabled protection", "security off"],
    elements: '<path d="M19.69 14a6.9 6.9 0 0 0 .31-2V5l-8-3-3.11 1.17"/><path d="M4.73 4.73 4 5v7c0 6 8 10 8 10a20.29 20.29 0 0 0 5.62-4.38"/><line x1="1" y1="1" x2="23" y2="23"/>'
  },
  {
    name: "passkey",
    category: "security",
    title: "Passkey Security",
    tags: ["fido", "webauthn", "passwordless", "credential"],
    aliases: ["fido key", "webauthn passkey"],
    elements: '<circle cx="8" cy="8" r="5"/><path d="m11.5 11.5 7 7M16 16l2.5-2.5M17.5 17.5l2 2"/>'
  },
  // Communication Expansion
  {
    name: "at-sign",
    category: "communication",
    title: "At Sign Mention",
    tags: ["mention", "email symbol", "user tag"],
    aliases: ["mention sign", "email symbol"],
    elements: '<circle cx="12" cy="12" r="4"/><path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>'
  },
  {
    name: "rss",
    category: "communication",
    title: "RSS Feed",
    tags: ["syndication", "blog", "feed", "broadcast"],
    aliases: ["feed stream", "web syndication"],
    elements: '<path d="M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16"/><circle cx="5" cy="19" r="1"/>'
  },
  {
    name: "share",
    category: "communication",
    title: "Share Export",
    tags: ["send to", "publish", "outbox", "export"],
    aliases: ["share export", "outward share"],
    elements: '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/><line x1="12" y1="2" x2="12" y2="15"/>'
  },
  // Files & Media Expansion
  {
    name: "file-spreadsheet",
    category: "files",
    title: "Spreadsheet File",
    tags: ["excel", "csv", "sheets", "data table", "calc"],
    aliases: ["excel sheet", "csv data"],
    elements: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 13h8M8 17h8M12 13v8"/>'
  },
  {
    name: "file-archive",
    category: "files",
    title: "Zip Archive File",
    tags: ["compressed", "zip", "tar", "gzip", "bundle"],
    aliases: ["zip file", "compressed archive"],
    elements: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><circle cx="10" cy="12" r="1"/><circle cx="10" cy="16" r="1"/><circle cx="10" cy="8" r="1"/><path d="M10 7v1M10 11v1M10 15v1"/>'
  },
  {
    name: "file-signature",
    category: "files",
    title: "Signed Document",
    tags: ["esign", "contract", "legal", "docusign", "approval"],
    aliases: ["contract signature", "legal doc"],
    elements: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><path d="M8 18c2-2 4-2 6 0M8 15h4"/>'
  },
  {
    name: "film",
    category: "media",
    title: "Film Strip",
    tags: ["cinema", "motion picture", "reel", "production"],
    aliases: ["movie film", "cinema strip"],
    elements: '<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"/><line x1="7" y1="2" x2="7" y2="22"/><line x1="17" y1="2" x2="17" y2="22"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="2" y1="7" x2="7" y2="7"/><line x1="2" y1="17" x2="7" y2="17"/><line x1="17" y1="17" x2="22" y2="17"/><line x1="17" y1="7" x2="22" y2="7"/>'
  },
  {
    name: "disc",
    category: "media",
    title: "Audio Disc",
    tags: ["cd", "dvd", "vinyl", "album", "record"],
    aliases: ["compact disc", "vinyl album"],
    elements: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>'
  },
  {
    name: "fast-forward",
    category: "media",
    title: "Fast Forward",
    tags: ["speed up", "advance", "audio skip"],
    aliases: ["media fast forward", "double play"],
    elements: '<polygon points="13 19 22 12 13 5 13 19"/><polygon points="2 19 11 12 2 5 2 19"/>'
  },
  {
    name: "rewind",
    category: "media",
    title: "Rewind",
    tags: ["reverse", "playback back", "audio rewind"],
    aliases: ["media rewind", "backward play"],
    elements: '<polygon points="11 19 2 12 11 5 11 19"/><polygon points="22 19 13 12 22 5 22 19"/>'
  },
  // Devices & Hardware Expansion
  {
    name: "battery-charging",
    category: "devices",
    title: "Battery Charging",
    tags: ["power", "energy", "recharge", "electricity", "level"],
    aliases: ["charging battery", "energy cell"],
    elements: '<path d="M5 18H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3.19M15 6h2a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3.19M23 13v-2"/><polyline points="11 6 7 12 13 12 9 18"/>'
  },
  {
    name: "mouse",
    category: "devices",
    title: "Computer Mouse",
    tags: ["pointer", "click", "peripheral", "hardware"],
    aliases: ["optical mouse", "cursor clicker"],
    elements: '<rect x="6" y="3" width="12" height="18" rx="6"/><line x1="12" y1="7" x2="12" y2="11"/>'
  },
  {
    name: "keyboard",
    category: "devices",
    title: "Keyboard",
    tags: ["type", "input", "keys", "hardware", "qwerty"],
    aliases: ["typing keyboard", "input board"],
    elements: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="6" y1="9" x2="6.01" y2="9"/><line x1="10" y1="9" x2="10.01" y2="9"/><line x1="14" y1="9" x2="14.01" y2="9"/><line x1="18" y1="9" x2="18.01" y2="9"/><line x1="6" y1="13" x2="6.01" y2="13"/><line x1="18" y1="13" x2="18.01" y2="13"/><line x1="10" y1="13" x2="14" y2="13"/>'
  },
  {
    name: "printer",
    category: "devices",
    title: "Printer",
    tags: ["paper", "print", "document output", "fax"],
    aliases: ["paper printer", "office print"],
    elements: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>'
  },
  {
    name: "headphones",
    category: "devices",
    title: "Headphones",
    tags: ["audio", "headset", "listen", "earphones", "music"],
    aliases: ["sound headset", "earphones"],
    elements: '<path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>'
  },
  {
    name: "bluetooth",
    category: "devices",
    title: "Bluetooth",
    tags: ["wireless", "pairing", "connect", "rf"],
    aliases: ["bluetooth pair", "wireless connection"],
    elements: '<polyline points="6.5 6.5 17.5 17.5 12 23 12 1 17.5 6.5 6.5 17.5"/>'
  },
  // Cloud & DevOps Expansion
  {
    name: "cloud-cog",
    category: "cloud",
    title: "Cloud Configuration",
    tags: ["devops", "cloud ops", "infrastructure", "iac"],
    aliases: ["cloud settings", "iac ops"],
    elements: '<path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.79A7 7 0 1 0 4 14.9"/><circle cx="12" cy="17" r="3"/><path d="M12 12v2M12 20v2M7 17h2M15 17h2"/>'
  },
  {
    name: "server-cog",
    category: "cloud",
    title: "Server Operations",
    tags: ["sysadmin", "server maintenance", "devops node"],
    aliases: ["admin server", "configured node"],
    elements: '<rect width="20" height="8" x="2" y="2" rx="2"/><rect width="20" height="8" x="2" y="14" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/><circle cx="17" cy="18" r="1.5"/><path d="M17 14v1M17 21v1M14 18h1M19 18h1"/>'
  },
  {
    name: "git-merge",
    category: "development",
    title: "Git Merge",
    tags: ["rebase", "integration", "branch join", "vcs"],
    aliases: ["branch merge", "code integration"],
    elements: '<circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/>'
  },
  {
    name: "webhook",
    category: "development",
    title: "Webhook Hook",
    tags: ["event", "callback", "api", "trigger", "listener"],
    aliases: ["api webhook", "event callback"],
    elements: '<path d="M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2"/><circle cx="12" cy="6" r="4"/><path d="M12 10v4"/><circle cx="18" cy="18" r="3"/>'
  },
  // AI & Analytics Expansion
  {
    name: "circuit-board",
    category: "ai",
    title: "AI Circuit",
    tags: ["electronics", "silicon", "hardware logic", "pcb"],
    aliases: ["pcb circuit", "chip trace"],
    elements: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M11 9h4a2 2 0 0 0 2-2V3"/><circle cx="9" cy="9" r="2"/><path d="M7 21v-4a2 2 0 0 1 2-2h4"/><circle cx="15" cy="15" r="2"/>'
  },
  {
    name: "atom",
    category: "ai",
    title: "Quantum Atom",
    tags: ["physics", "science", "core", "orbit", "quantum"],
    aliases: ["science atom", "quantum orbit"],
    elements: '<circle cx="12" cy="12" r="2"/><path d="M20.2 20.2c2.4-2.4 2.4-6.3 0-8.7L12 3.3 3.8 11.5c-2.4 2.4-2.4 6.3 0 8.7 2.4 2.4 6.3 2.4 8.7 0l8.2-8.2"/><path d="M3.8 3.8c-2.4 2.4-2.4 6.3 0 8.7L12 20.7l8.2-8.2c2.4-2.4 2.4-6.3 0-8.7-2.4-2.4-6.3-2.4-8.7 0L3.8 12"/>'
  },
  {
    name: "lightbulb",
    category: "ai",
    title: "Insight Idea",
    tags: ["creativity", "solution", "inspiration", "concept", "bright"],
    aliases: ["idea bulb", "smart insight"],
    elements: '<path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5.76.76 1.23 1.52 1.41 2.5"/>'
  },
  {
    name: "funnel",
    category: "analytics",
    title: "Conversion Funnel",
    tags: ["conversion", "pipeline", "stages", "drop-off"],
    aliases: ["marketing funnel", "sales pipeline"],
    elements: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/><line x1="6" y1="7" x2="18" y2="7"/><line x1="8" y1="10" x2="16" y2="10"/>'
  },
  {
    name: "gauge",
    category: "analytics",
    title: "Metric Gauge",
    tags: ["dashboard meter", "speed", "pressure", "dial"],
    aliases: ["dashboard meter", "dial gauge"],
    elements: '<path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>'
  },
  // Health & Nature Expansion
  {
    name: "droplet",
    category: "health",
    title: "Liquid Droplet",
    tags: ["water", "blood", "fluid", "hydration", "moisture"],
    aliases: ["water drop", "fluid bead"],
    elements: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>'
  },
  {
    name: "thermometer",
    category: "health",
    title: "Thermometer",
    tags: ["temperature", "fever", "celsius", "fahrenheit", "heat"],
    aliases: ["temperature sensor", "fever gauge"],
    elements: '<path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>'
  },
  {
    name: "dna",
    category: "health",
    title: "DNA Double Helix",
    tags: ["genetics", "biology", "genome", "medical science"],
    aliases: ["double helix", "genetic code"],
    elements: '<path d="M2 15c6.667-6 13.333 0 20-6M2 9c6.667 6 13.333 0 20 6M12 6v12M7 8.5v7M17 8.5v7"/>'
  },
  {
    name: "syringe",
    category: "health",
    title: "Syringe Vaccine",
    tags: ["injection", "immunization", "treatment", "needle"],
    aliases: ["vaccine needle", "injection dose"],
    elements: '<path d="m18 2 4 4"/><path d="m17 7 3-3"/><path d="M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5"/><path d="m9 11 4 4"/><path d="m5 19-3 3"/><path d="m14 4 6 6"/>'
  },
  // Transportation & Travel Expansion
  {
    name: "bike",
    category: "transportation",
    title: "Bicycle",
    tags: ["cycling", "eco", "commute", "pedal", "two wheels"],
    aliases: ["commuter bike", "cycling vehicle"],
    elements: '<circle cx="18.5" cy="17.5" r="3.5"/><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="15" cy="5" r="1"/><path d="M12 17.5V14l-3-3 4-3 2 3h2"/>'
  },
  {
    name: "fuel",
    category: "transportation",
    title: "Fuel Pump",
    tags: ["gas", "petrol", "diesel", "station", "charge"],
    aliases: ["gas pump", "fuel station"],
    elements: '<line x1="3" y1="22" x2="15" y2="22"/><path d="M4 9h10"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/>'
  },
  {
    name: "tent",
    category: "travel",
    title: "Camping Tent",
    tags: ["outdoors", "camp", "adventure", "nature", "shelter"],
    aliases: ["camp shelter", "outdoor tent"],
    elements: '<path d="M19 21 12 4 5 21"/><path d="M12 4v17"/><path d="m2 21 3-3"/><path d="m22 21-3-3"/><path d="M9 21h6"/>'
  },
  {
    name: "mountain",
    category: "travel",
    title: "Mountain Range",
    tags: ["summit", "peak", "alpine", "hike", "nature"],
    aliases: ["alpine peak", "summit crest"],
    elements: '<path d="m8 3 4 8 5-5 5 15H2L8 3z"/>'
  },
  {
    name: "sun-beach",
    category: "travel",
    title: "Beach Island",
    tags: ["vacation", "holiday", "tropical", "coast", "resort"],
    aliases: ["tropical beach", "island resort"],
    elements: '<path d="M2 20c4-1 8 1 12 0s6-1 8 0"/><path d="M16 16c-2-2-4-5-3-9 2 0 4 1 5 3"/><path d="M14 8c1-3 4-4 7-3-1 2-2 4-4 5"/><circle cx="6" cy="7" r="3"/>'
  },
  // Food & Beverage Expansion
  {
    name: "cup-soda",
    category: "food",
    title: "Cold Beverage",
    tags: ["drink", "juice", "straw", "refreshment", "soda"],
    aliases: ["cold drink", "soda cup"],
    elements: '<path d="m6 8 1.75 12.28A2 2 0 0 0 9.73 22h4.54a2 2 0 0 0 1.98-1.72L18 8"/><path d="M5 8h14"/><path d="M7 15h10"/><path d="m12 8 1-6h2"/>'
  },
  {
    name: "pizza",
    category: "food",
    title: "Pizza Slice",
    tags: ["fast food", "snack", "cheese", "italian", "meal"],
    aliases: ["pizza slice", "cheese pizza"],
    elements: '<path d="m2 2 20 7-7 13L2 2z"/><circle cx="10" cy="8" r="1"/><circle cx="14" cy="13" r="1"/><circle cx="9" cy="13" r="1"/>'
  },
  {
    name: "cake",
    category: "food",
    title: "Birthday Cake",
    tags: ["celebration", "dessert", "party", "candles", "sweet"],
    aliases: ["party cake", "dessert candles"],
    elements: '<path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8"/><path d="M4 16s2-1 4-1 4 1 4 1 2-1 4-1 4 1 4 1"/><line x1="2" y1="21" x2="22" y2="21"/><line x1="7" y1="7" x2="7" y2="11"/><line x1="12" y1="7" x2="12" y2="11"/><line x1="17" y1="7" x2="17" y2="11"/><circle cx="7" cy="4" r=".5" fill="currentColor"/><circle cx="12" cy="4" r=".5" fill="currentColor"/><circle cx="17" cy="4" r=".5" fill="currentColor"/>'
  },
  // System & Interface Expansion
  {
    name: "shield-user",
    category: "users",
    title: "User Protection",
    tags: ["identity assurance", "kyc verified", "secure profile"],
    aliases: ["secure user", "shield profile"],
    elements: '<circle cx="10" cy="8" r="4"/><path d="M2 20v-1a6 6 0 0 1 12 0v1"/><path d="M18 11s3 1.5 3 4c0 3-3 5-3 5s-3-2-3-5c0-2.5 3-4 3-4z"/>'
  },
  {
    name: "contact",
    category: "users",
    title: "Address Book Contact",
    tags: ["rolodex", "directory", "vcard", "identity"],
    aliases: ["rolodex contact", "address card"],
    elements: '<path d="M16 2v2M7 2v2M21 8.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2.5"/><circle cx="12" cy="11" r="3"/><path d="M17 18.5a5 5 0 0 0-10 0"/>'
  },
  {
    name: "id-card",
    category: "users",
    title: "ID Card Badge",
    tags: ["credential", "license", "badge", "identification", "pass"],
    aliases: ["identity pass", "employee badge"],
    elements: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="11" r="2"/><line x1="15" y1="9" x2="17" y2="9"/><line x1="15" y1="13" x2="17" y2="13"/><line x1="7" y1="17" x2="17" y2="17"/>'
  },
  {
    name: "crown",
    category: "users",
    title: "Crown Royalty",
    tags: ["vip", "premium", "admin", "owner", "tier", "pro"],
    aliases: ["vip crown", "king tier"],
    elements: '<path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"/>'
  },
  {
    name: "layout",
    category: "system",
    title: "Layout Panels",
    tags: ["wireframe", "dashboard layout", "ui sections"],
    aliases: ["page layout", "split panels"],
    elements: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>'
  },
  {
    name: "sliders-horizontal",
    category: "system",
    title: "Horizontal Sliders",
    tags: ["controls", "filter bars", "equalizer horizontal"],
    aliases: ["horizontal equalizer", "tuning bars"],
    elements: '<line x1="21" y1="4" x2="14" y2="4"/><line x1="10" y1="4" x2="3" y2="4"/><line x1="21" y1="12" x2="12" y2="12"/><line x1="8" y1="12" x2="3" y2="12"/><line x1="21" y1="20" x2="16" y2="20"/><line x1="12" y1="20" x2="3" y2="20"/><line x1="14" y1="2" x2="14" y2="6"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="16" y1="18" x2="16" y2="22"/>'
  },
  {
    name: "radio-button",
    category: "system",
    title: "Radio Selected",
    tags: ["form radio", "choice", "single select"],
    aliases: ["radio choice", "selected dot"],
    elements: '<circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>'
  }
];
