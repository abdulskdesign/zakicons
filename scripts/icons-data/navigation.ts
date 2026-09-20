import { RawIconDefinition } from "./types";

export const navigationIcons: RawIconDefinition[] = [
  {
    name: "compass",
    category: "navigation",
    title: "Compass",
    tags: ["direction", "orientation", "north", "safari", "explore"],
    aliases: ["magnetic compass", "explorer direction"],
    elements: '<circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>'
  },
  {
    name: "map-pin",
    category: "navigation",
    title: "Map Pin",
    tags: ["location", "marker", "place", "geo", "gps"],
    aliases: ["location pin", "geo marker"],
    elements: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>'
  },
  {
    name: "navigation-arrow",
    category: "navigation",
    title: "Navigation Arrow",
    tags: ["gps", "route", "heading", "guide", "compass needle"],
    aliases: ["compass arrow", "heading indicator"],
    elements: '<polygon points="3 11 22 2 13 21 11 13 3 11"/>'
  },
  {
    name: "route",
    category: "navigation",
    title: "Route",
    tags: ["path", "itinerary", "waypoints", "journey", "transit"],
    aliases: ["pathway", "journey route"],
    elements: '<circle cx="6" cy="19" r="3"/><circle cx="18" cy="5" r="3"/><path d="M12 19h4.5a3.5 3.5 0 0 0 0-7h-9a3.5 3.5 0 0 1 0-7H12"/>'
  },
  {
    name: "anchor",
    category: "navigation",
    title: "Anchor",
    tags: ["marine", "harbor", "berth", "nautical", "security"],
    aliases: ["ship anchor", "nautical moor"],
    elements: '<circle cx="12" cy="5" r="3"/><line x1="12" y1="8" x2="12" y2="21"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>'
  },
  {
    name: "flag",
    category: "navigation",
    title: "Flag",
    tags: ["checkpoint", "marker", "milestone", "goal", "country"],
    aliases: ["waypoint flag", "banner"],
    elements: '<path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/>'
  },
  {
    name: "crosshair",
    category: "navigation",
    title: "Crosshair",
    tags: ["target", "aim", "focus", "precise", "locate"],
    aliases: ["target aim", "precision reticle"],
    elements: '<circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>'
  },
  {
    name: "locate",
    category: "navigation",
    title: "Locate",
    tags: ["current location", "gps", "find me", "position"],
    aliases: ["my location", "geolocate"],
    elements: '<line x1="2" y1="12" x2="5" y2="12"/><line x1="19" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/><circle cx="12" cy="12" r="7"/><circle cx="12" cy="12" r="3"/>'
  },
  {
    name: "globe",
    category: "navigation",
    title: "Globe",
    tags: ["earth", "world", "international", "planet", "web"],
    aliases: ["worldwide", "earth sphere"],
    elements: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>'
  },
  {
    name: "signpost",
    category: "navigation",
    title: "Signpost",
    tags: ["directions", "intersection", "guide", "crossroad"],
    aliases: ["street sign", "wayfinding pole"],
    elements: '<path d="M12 3v18"/><path d="M6 5h8l3 3-3 3H6z"/><path d="M18 13H10l-3 3 3 3h8z"/>'
  },
  {
    name: "map",
    category: "navigation",
    title: "Map",
    tags: ["cartography", "geography", "plan", "territory", "streets"],
    aliases: ["folded map", "atlas"],
    elements: '<polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/>'
  },
  {
    name: "layers",
    category: "navigation",
    title: "Map Layers",
    tags: ["gis", "stack", "levels", "overlay", "terrain"],
    aliases: ["gis layers", "stack overlay"],
    elements: '<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>'
  },
  {
    name: "milestone",
    category: "navigation",
    title: "Milestone",
    tags: ["progress", "marker", "distance", "kilometer", "target"],
    aliases: ["distance marker", "checkpoint stone"],
    elements: '<path d="M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l3-3.5L18 6z"/><line x1="12" y1="13" x2="12" y2="21"/>'
  }
];
