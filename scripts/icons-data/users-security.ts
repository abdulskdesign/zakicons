import { RawIconDefinition } from "./types";

export const usersSecurityIcons: RawIconDefinition[] = [
  // Users
  {
    name: "user",
    category: "users",
    title: "User",
    tags: ["person", "profile", "account", "individual", "human"],
    aliases: ["profile person", "single user"],
    elements: '<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>'
  },
  {
    name: "users",
    category: "users",
    title: "Users",
    tags: ["group", "team", "people", "organization", "community"],
    aliases: ["team group", "multiple users"],
    elements: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>'
  },
  {
    name: "user-plus",
    category: "users",
    title: "User Add",
    tags: ["invite", "new member", "register", "join"],
    aliases: ["invite user", "add contact"],
    elements: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/>'
  },
  {
    name: "user-minus",
    category: "users",
    title: "User Remove",
    tags: ["remove member", "delete account", "kick"],
    aliases: ["delete user", "remove contact"],
    elements: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/>'
  },
  {
    name: "user-check",
    category: "users",
    title: "User Verified",
    tags: ["confirmed member", "approved profile", "kyc passed"],
    aliases: ["verified user", "approved profile"],
    elements: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/>'
  },
  {
    name: "user-x",
    category: "users",
    title: "User Blocked",
    tags: ["banned", "suspended", "rejected account"],
    aliases: ["blocked user", "banned profile"],
    elements: '<path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="18" y1="8" x2="22" y2="12"/><line x1="22" y1="8" x2="18" y2="12"/>'
  },
  {
    name: "badge-check",
    category: "users",
    title: "Verified Badge",
    tags: ["official", "rosette", "certified", "trusted"],
    aliases: ["trust badge", "verification ribbon"],
    elements: '<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><polyline points="9 12 11 14 15 10"/>'
  },
  // Security
  {
    name: "shield",
    category: "security",
    title: "Shield",
    tags: ["protection", "defense", "secure", "firewall", "safety"],
    aliases: ["defense shield", "armor"],
    elements: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>'
  },
  {
    name: "shield-check",
    category: "security",
    title: "Shield Verified",
    tags: ["safe", "protected", "antivirus", "passed", "secure"],
    aliases: ["safe shield", "protected badge"],
    elements: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/>'
  },
  {
    name: "shield-alert",
    category: "security",
    title: "Shield Warning",
    tags: ["breach", "threat detected", "vulnerability"],
    aliases: ["security threat", "firewall warning"],
    elements: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
  },
  {
    name: "key",
    category: "security",
    title: "Access Key",
    tags: ["credential", "token", "auth", "secret", "unlock"],
    aliases: ["auth key", "secret token"],
    elements: '<path d="m21 2-2 2m-1.5 1.5L14 9l-2-2-4 4 4 4 1-1 3.5 3.5M7 13a4 4 0 1 1-5.66-5.66A4 4 0 0 1 7 13Z"/>'
  },
  {
    name: "fingerprint",
    category: "security",
    title: "Fingerprint",
    tags: ["biometrics", "identity", "touch id", "authentication"],
    aliases: ["biometric scan", "touch id"],
    elements: '<path d="M2 12C2 6.5 6.5 2 12 2a10 10 0 0 1 8 4M5 19.5C5.5 18 6 15 6 12c0-.7.12-1.37.34-2M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4M8.65 22A8 8 0 0 1 8 12c0-2.2 1.8-4 4-4s4 1.8 4 4c0 1.5-.5 3.5-1 5M14 13.1a3 3 0 0 0-1.82-2.6M2 16h.01M21.8 16c.2-1.3.2-2.6.2-4 0-4.4-3.6-8-8-8"/>'
  },
  {
    name: "scan",
    category: "security",
    title: "Bio Scan",
    tags: ["facial recognition", "frame", "detector", "sensor"],
    aliases: ["scan frame", "target detector"],
    elements: '<path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2"/>'
  }
];
