import { RawIconDefinition } from "./types";

export const systemIcons: RawIconDefinition[] = [
  {
    name: "menu",
    category: "system",
    title: "Menu",
    tags: ["hamburger", "navigation", "drawer", "bars"],
    aliases: ["hamburger menu", "drawer toggle"],
    elements: '<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>'
  },
  {
    name: "more-horizontal",
    category: "system",
    title: "More Horizontal",
    tags: ["dots", "options", "actions", "ellipsis"],
    aliases: ["horizontal dots", "three dots"],
    elements: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>'
  },
  {
    name: "more-vertical",
    category: "system",
    title: "More Vertical",
    tags: ["dots", "options", "actions", "kebab"],
    aliases: ["vertical dots", "kebab menu"],
    elements: '<circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/>'
  },
  {
    name: "grid",
    category: "system",
    title: "Grid View",
    tags: ["layout", "cards", "blocks", "matrix"],
    aliases: ["card layout", "matrix view"],
    elements: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/>'
  },
  {
    name: "list",
    category: "system",
    title: "List View",
    tags: ["rows", "lines", "order", "bullet"],
    aliases: ["row view", "bulleted list"],
    elements: '<line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/>'
  },
  {
    name: "power",
    category: "system",
    title: "Power",
    tags: ["on", "off", "shutdown", "switch", "reboot"],
    aliases: ["power button", "turn off"],
    elements: '<path d="M18.36 6.64a9 9 0 1 1-12.73 0"/><line x1="12" y1="2" x2="12" y2="12"/>'
  },
  {
    name: "power-off",
    category: "system",
    title: "Power Off",
    tags: ["disconnected", "offline", "deactivated"],
    aliases: ["power disabled", "kill switch"],
    elements: '<path d="M18.36 6.64A9 9 0 0 1 20.77 15M6.16 6.16a9 9 0 1 0 12.68 12.68"/><line x1="12" y1="2" x2="12" y2="12"/><line x1="1" y1="1" x2="23" y2="23"/>'
  },
  {
    name: "log-in",
    category: "system",
    title: "Log In",
    tags: ["sign in", "enter", "portal", "access"],
    aliases: ["sign in", "authenticate"],
    elements: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/>'
  },
  {
    name: "log-out",
    category: "system",
    title: "Log Out",
    tags: ["sign out", "leave", "exit", "disconnect"],
    aliases: ["sign out", "session terminate"],
    elements: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/>'
  },
  {
    name: "toggle-left",
    category: "system",
    title: "Toggle Inactive",
    tags: ["switch off", "disabled", "state", "boolean"],
    aliases: ["switch off", "toggle false"],
    elements: '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="8" cy="12" r="3"/>'
  },
  {
    name: "toggle-right",
    category: "system",
    title: "Toggle Active",
    tags: ["switch on", "enabled", "state", "boolean"],
    aliases: ["switch on", "toggle true"],
    elements: '<rect x="1" y="5" width="22" height="14" rx="7" ry="7"/><circle cx="16" cy="12" r="3"/>'
  },
  {
    name: "check-square",
    category: "system",
    title: "Checkbox Checked",
    tags: ["checkbox", "tick", "form", "select"],
    aliases: ["checked box", "form check"],
    elements: '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>'
  },
  {
    name: "square",
    category: "system",
    title: "Checkbox Empty",
    tags: ["box", "uncheck", "empty", "form"],
    aliases: ["empty checkbox", "blank box"],
    elements: '<rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>'
  },
  {
    name: "loader",
    category: "system",
    title: "Loader",
    tags: ["spinner", "loading", "progress", "waiting"],
    aliases: ["activity spinner", "busy indicator"],
    elements: '<line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>'
  },
  {
    name: "sun-theme",
    category: "system",
    title: "Light Theme",
    tags: ["mode", "brightness", "day", "theme"],
    aliases: ["light mode", "day toggle"],
    elements: '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>'
  },
  {
    name: "moon-theme",
    category: "system",
    title: "Dark Theme",
    tags: ["mode", "night", "dark", "theme"],
    aliases: ["dark mode", "night toggle"],
    elements: '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
  },
  {
    name: "tool",
    category: "system",
    title: "Tool",
    tags: ["wrench", "spanner", "fix", "repair", "service"],
    aliases: ["wrench tool", "repair utility"],
    elements: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>'
  },
  {
    name: "layers-system",
    category: "system",
    title: "Stack Layers",
    tags: ["depth", "arrangement", "z-index", "components"],
    aliases: ["component layers", "depth stack"],
    elements: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'
  }
];
