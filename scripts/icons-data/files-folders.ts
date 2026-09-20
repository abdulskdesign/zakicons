import { RawIconDefinition } from "./types";

export const filesFoldersIcons: RawIconDefinition[] = [
  // Files
  {
    name: "file",
    category: "files",
    title: "File",
    tags: ["document", "sheet", "page", "blank"],
    aliases: ["document", "blank file"],
    elements: '<path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/>'
  },
  {
    name: "file-text",
    category: "files",
    title: "File Text",
    tags: ["document", "article", "report", "notes", "contract"],
    aliases: ["text document", "article sheet"],
    elements: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>'
  },
  {
    name: "file-plus",
    category: "files",
    title: "File Add",
    tags: ["create document", "new sheet", "draft"],
    aliases: ["new file", "add document"],
    elements: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>'
  },
  {
    name: "file-minus",
    category: "files",
    title: "File Remove",
    tags: ["delete document", "exclude", "drop sheet"],
    aliases: ["remove document", "subtract file"],
    elements: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="15" x2="15" y2="15"/>'
  },
  {
    name: "file-check",
    category: "files",
    title: "File Verified",
    tags: ["approved document", "signed", "certified", "compliance"],
    aliases: ["verified file", "signed doc"],
    elements: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="9 15 11 17 15 13"/>'
  },
  {
    name: "file-code",
    category: "files",
    title: "File Code",
    tags: ["source code", "script", "program", "developer", "html"],
    aliases: ["code file", "source script"],
    elements: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><polyline points="10 13 8 15 10 17"/><polyline points="14 13 16 15 14 17"/>'
  },
  {
    name: "clipboard",
    category: "files",
    title: "Clipboard",
    tags: ["task", "checklist", "survey", "inspection", "board"],
    aliases: ["task clipboard", "holding board"],
    elements: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>'
  },
  {
    name: "clipboard-check",
    category: "files",
    title: "Clipboard Check",
    tags: ["completed tasks", "audit done", "verified checklist"],
    aliases: ["audit clipboard", "done checklist"],
    elements: '<path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><polyline points="9 14 11 16 15 12"/>'
  },
  // Folders
  {
    name: "folder",
    category: "folders",
    title: "Folder",
    tags: ["directory", "archive", "storage", "group"],
    aliases: ["directory", "folder container"],
    elements: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>'
  },
  {
    name: "folder-plus",
    category: "folders",
    title: "Folder Add",
    tags: ["new folder", "create directory", "organize"],
    aliases: ["create folder", "add directory"],
    elements: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="12" y1="11" x2="12" y2="17"/><line x1="9" y1="14" x2="15" y2="14"/>'
  },
  {
    name: "folder-minus",
    category: "folders",
    title: "Folder Remove",
    tags: ["delete folder", "remove directory"],
    aliases: ["remove folder", "delete directory"],
    elements: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><line x1="9" y1="14" x2="15" y2="14"/>'
  },
  {
    name: "folder-check",
    category: "folders",
    title: "Folder Verified",
    tags: ["approved folder", "synchronized", "ready"],
    aliases: ["verified directory", "synced folder"],
    elements: '<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/><polyline points="9 14 11 16 15 12"/>'
  },
  {
    name: "folder-open",
    category: "folders",
    title: "Folder Open",
    tags: ["expanded", "active directory", "browse"],
    aliases: ["open folder", "browse directory"],
    elements: '<path d="M2 11h20M2 11l3 9h14l3-9M2 11V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v3"/>'
  },
  {
    name: "folder-lock",
    category: "folders",
    title: "Folder Secured",
    tags: ["encrypted directory", "confidential", "private folder"],
    aliases: ["protected folder", "encrypted directory"],
    elements: '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z"/><rect x="9" y="13" width="6" height="5" rx="1"/><path d="M10 13v-1.5a2 2 0 0 1 4 0V13"/>'
  }
];
