import { RawIconDefinition } from "./types";

export const actionsIcons: RawIconDefinition[] = [
  {
    name: "plus",
    category: "actions",
    title: "Plus",
    tags: ["add", "create", "new", "more"],
    aliases: ["add symbol", "plus sign"],
    elements: '<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>'
  },
  {
    name: "minus",
    category: "actions",
    title: "Minus",
    tags: ["remove", "delete", "subtract", "less"],
    aliases: ["dash", "subtract sign"],
    elements: '<line x1="5" y1="12" x2="19" y2="12"/>'
  },
  {
    name: "x",
    category: "actions",
    title: "Close",
    tags: ["cancel", "dismiss", "exit", "cross"],
    aliases: ["cross", "dismiss"],
    elements: '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
  },
  {
    name: "check",
    category: "actions",
    title: "Check",
    tags: ["tick", "confirm", "done", "ok", "success"],
    aliases: ["checkmark", "tick"],
    elements: '<polyline points="20 6 9 17 4 12"/>'
  },
  {
    name: "check-circle",
    category: "actions",
    title: "Check Circle",
    tags: ["success", "approved", "completed", "verified"],
    aliases: ["verified circle", "success badge"],
    elements: '<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>'
  },
  {
    name: "x-circle",
    category: "actions",
    title: "Cross Circle",
    tags: ["error", "rejected", "cancel", "failed", "stop"],
    aliases: ["error icon", "cancel badge"],
    elements: '<circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/>'
  },
  {
    name: "alert-circle",
    category: "actions",
    title: "Alert Circle",
    tags: ["warning", "caution", "danger", "exclamation"],
    aliases: ["warning circle", "exclamation round"],
    elements: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
  },
  {
    name: "alert-triangle",
    category: "actions",
    title: "Alert Triangle",
    tags: ["warning", "hazard", "danger", "caution"],
    aliases: ["hazard triangle", "caution warning"],
    elements: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
  },
  {
    name: "info",
    category: "actions",
    title: "Info",
    tags: ["information", "help", "details", "about"],
    aliases: ["info icon", "information circle"],
    elements: '<circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>'
  },
  {
    name: "help-circle",
    category: "actions",
    title: "Help Circle",
    tags: ["question", "support", "faq", "assistance"],
    aliases: ["question mark", "faq support"],
    elements: '<circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/>'
  },
  {
    name: "edit",
    category: "actions",
    title: "Edit",
    tags: ["pencil", "modify", "write", "update", "draft"],
    aliases: ["pencil edit", "modify button"],
    elements: '<path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>'
  },
  {
    name: "trash-2",
    category: "actions",
    title: "Trash",
    tags: ["delete", "remove", "bin", "garbage", "discard"],
    aliases: ["garbage can", "delete bin"],
    elements: '<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/>'
  },
  {
    name: "copy",
    category: "actions",
    title: "Copy",
    tags: ["duplicate", "clone", "clipboard", "replicate"],
    aliases: ["duplicate", "clipboard copy"],
    elements: '<rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>'
  },
  {
    name: "download",
    category: "actions",
    title: "Download",
    tags: ["save", "export", "receive", "fetch"],
    aliases: ["save file", "fetch download"],
    elements: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'
  },
  {
    name: "upload",
    category: "actions",
    title: "Upload",
    tags: ["send", "import", "publish", "cloud upload"],
    aliases: ["import file", "publish upload"],
    elements: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>'
  },
  {
    name: "share-2",
    category: "actions",
    title: "Share",
    tags: ["network", "distribute", "social", "connect"],
    aliases: ["share nodes", "distribute link"],
    elements: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>'
  },
  {
    name: "external-link",
    category: "actions",
    title: "External Link",
    tags: ["open", "new tab", "outbound", "redirect"],
    aliases: ["new window", "open outside"],
    elements: '<path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>'
  },
  {
    name: "link",
    category: "actions",
    title: "Link",
    tags: ["chain", "url", "hyperlink", "attach"],
    aliases: ["chain link", "url anchor"],
    elements: '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
  },
  {
    name: "search",
    category: "actions",
    title: "Search",
    tags: ["find", "magnifier", "lookup", "explore", "query"],
    aliases: ["magnifying glass", "lookup query"],
    elements: '<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>'
  },
  {
    name: "filter",
    category: "actions",
    title: "Filter",
    tags: ["funnel", "refine", "sort", "parameters"],
    aliases: ["funnel sort", "refine query"],
    elements: '<polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>'
  },
  {
    name: "sliders",
    category: "actions",
    title: "Sliders",
    tags: ["adjust", "tuning", "controls", "levels", "equalizer"],
    aliases: ["adjust knobs", "controls slider"],
    elements: '<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>'
  },
  {
    name: "settings",
    category: "actions",
    title: "Settings",
    tags: ["gear", "cog", "preferences", "configuration", "options"],
    aliases: ["gear settings", "cog config"],
    elements: '<circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>'
  },
  {
    name: "eye",
    category: "actions",
    title: "Eye",
    tags: ["view", "see", "show", "preview", "visible"],
    aliases: ["visibility on", "show preview"],
    elements: '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>'
  },
  {
    name: "eye-off",
    category: "actions",
    title: "Eye Off",
    tags: ["hide", "hidden", "private", "invisible", "conceal"],
    aliases: ["visibility off", "hide content"],
    elements: '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/><line x1="1" y1="1" x2="23" y2="23"/>'
  },
  {
    name: "lock",
    category: "actions",
    title: "Lock",
    tags: ["security", "protect", "private", "password", "closed"],
    aliases: ["padlock closed", "secure lock"],
    elements: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
  },
  {
    name: "unlock",
    category: "actions",
    title: "Unlock",
    tags: ["open", "access", "permit", "insecure", "unlocked"],
    aliases: ["padlock open", "unrestricted access"],
    elements: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>'
  },
  {
    name: "star",
    category: "actions",
    title: "Star",
    tags: ["favorite", "bookmark", "rating", "like", "feature"],
    aliases: ["star favorite", "rating star"],
    elements: '<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>'
  },
  {
    name: "heart",
    category: "actions",
    title: "Heart",
    tags: ["love", "favorite", "like", "health", "wishlist"],
    aliases: ["love like", "favorite heart"],
    elements: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>'
  },
  {
    name: "bookmark",
    category: "actions",
    title: "Bookmark",
    tags: ["save", "read later", "favorite", "marker"],
    aliases: ["ribbon bookmark", "save marker"],
    elements: '<path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/>'
  },
  {
    name: "zap",
    category: "actions",
    title: "Zap",
    tags: ["lightning", "electricity", "flash", "fast", "power", "instant"],
    aliases: ["lightning bolt", "energy flash"],
    elements: '<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>'
  }
];
