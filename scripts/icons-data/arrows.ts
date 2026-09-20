import { RawIconDefinition } from "./types";

export const arrowsIcons: RawIconDefinition[] = [
  {
    name: "arrow-left",
    category: "arrows",
    title: "Arrow Left",
    tags: ["back", "west", "previous", "direction"],
    aliases: ["back arrow", "leftward"],
    elements: '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>'
  },
  {
    name: "arrow-right",
    category: "arrows",
    title: "Arrow Right",
    tags: ["forward", "east", "next", "direction"],
    aliases: ["forward arrow", "rightward"],
    elements: '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>'
  },
  {
    name: "arrow-up",
    category: "arrows",
    title: "Arrow Up",
    tags: ["north", "top", "higher", "direction"],
    aliases: ["up arrow", "upward"],
    elements: '<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>'
  },
  {
    name: "arrow-down",
    category: "arrows",
    title: "Arrow Down",
    tags: ["south", "bottom", "lower", "direction"],
    aliases: ["down arrow", "downward"],
    elements: '<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>'
  },
  {
    name: "arrow-up-right",
    category: "arrows",
    title: "Arrow Up Right",
    tags: ["northeast", "diagonal", "external", "export"],
    aliases: ["diagonal up right"],
    elements: '<line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/>'
  },
  {
    name: "arrow-up-left",
    category: "arrows",
    title: "Arrow Up Left",
    tags: ["northwest", "diagonal", "direction"],
    aliases: ["diagonal up left"],
    elements: '<line x1="17" y1="17" x2="7" y2="7"/><polyline points="17 7 7 7 7 17"/>'
  },
  {
    name: "arrow-down-right",
    category: "arrows",
    title: "Arrow Down Right",
    tags: ["southeast", "diagonal", "direction"],
    aliases: ["diagonal down right"],
    elements: '<line x1="7" y1="7" x2="17" y2="17"/><polyline points="17 7 17 17 7 17"/>'
  },
  {
    name: "arrow-down-left",
    category: "arrows",
    title: "Arrow Down Left",
    tags: ["southwest", "diagonal", "direction"],
    aliases: ["diagonal down left"],
    elements: '<line x1="17" y1="7" x2="7" y2="17"/><polyline points="7 7 7 17 17 17"/>'
  },
  {
    name: "chevron-left",
    category: "arrows",
    title: "Chevron Left",
    tags: ["back", "left", "expand", "navigation"],
    aliases: ["angle left", "caret left"],
    elements: '<polyline points="15 18 9 12 15 6"/>'
  },
  {
    name: "chevron-right",
    category: "arrows",
    title: "Chevron Right",
    tags: ["forward", "right", "expand", "navigation"],
    aliases: ["angle right", "caret right"],
    elements: '<polyline points="9 18 15 12 9 6"/>'
  },
  {
    name: "chevron-up",
    category: "arrows",
    title: "Chevron Up",
    tags: ["top", "up", "collapse", "navigation"],
    aliases: ["angle up", "caret up"],
    elements: '<polyline points="18 15 12 9 6 15"/>'
  },
  {
    name: "chevron-down",
    category: "arrows",
    title: "Chevron Down",
    tags: ["bottom", "down", "dropdown", "navigation"],
    aliases: ["angle down", "caret down"],
    elements: '<polyline points="6 9 12 15 18 9"/>'
  },
  {
    name: "chevrons-left",
    category: "arrows",
    title: "Chevrons Left",
    tags: ["rewind", "first", "double arrow"],
    aliases: ["double chevron left"],
    elements: '<polyline points="11 17 6 12 11 7"/><polyline points="18 17 13 12 18 7"/>'
  },
  {
    name: "chevrons-right",
    category: "arrows",
    title: "Chevrons Right",
    tags: ["fast forward", "last", "double arrow"],
    aliases: ["double chevron right"],
    elements: '<polyline points="13 17 18 12 13 7"/><polyline points="6 17 11 12 6 7"/>'
  },
  {
    name: "chevrons-up",
    category: "arrows",
    title: "Chevrons Up",
    tags: ["scroll to top", "double arrow"],
    aliases: ["double chevron up"],
    elements: '<polyline points="17 11 12 6 7 11"/><polyline points="17 18 12 13 7 18"/>'
  },
  {
    name: "chevrons-down",
    category: "arrows",
    title: "Chevrons Down",
    tags: ["scroll to bottom", "double arrow"],
    aliases: ["double chevron down"],
    elements: '<polyline points="7 13 12 18 17 13"/><polyline points="7 6 12 11 17 6"/>'
  },
  {
    name: "refresh-cw",
    category: "arrows",
    title: "Refresh Clockwise",
    tags: ["reload", "sync", "cycle", "rotate"],
    aliases: ["reload", "sync cw"],
    elements: '<polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>'
  },
  {
    name: "refresh-ccw",
    category: "arrows",
    title: "Refresh Counter-Clockwise",
    tags: ["reload", "undo", "cycle", "reverse"],
    aliases: ["undo reload", "sync ccw"],
    elements: '<polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>'
  },
  {
    name: "corner-up-left",
    category: "arrows",
    title: "Corner Up Left",
    tags: ["reply", "turn", "return", "direction"],
    aliases: ["turn left", "reply arrow"],
    elements: '<polyline points="9 14 4 9 9 4"/><path d="M20 20v-7a4 4 0 0 0-4-4H4"/>'
  },
  {
    name: "corner-up-right",
    category: "arrows",
    title: "Corner Up Right",
    tags: ["forward", "turn", "direction"],
    aliases: ["turn right", "forward arrow"],
    elements: '<polyline points="15 14 20 9 15 4"/><path d="M4 20v-7a4 4 0 0 1 4-4h12"/>'
  },
  {
    name: "maximize-2",
    category: "arrows",
    title: "Maximize",
    tags: ["fullscreen", "expand", "grow", "enlarge"],
    aliases: ["fullscreen", "expand window"],
    elements: '<polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>'
  },
  {
    name: "minimize-2",
    category: "arrows",
    title: "Minimize",
    tags: ["exit fullscreen", "shrink", "reduce"],
    aliases: ["exit fullscreen", "contract"],
    elements: '<polyline points="4 14 10 14 10 20"/><polyline points="20 10 14 10 14 4"/><line x1="14" y1="10" x2="21" y2="3"/><line x1="3" y1="21" x2="10" y2="14"/>'
  },
  {
    name: "move",
    category: "arrows",
    title: "Move Directional",
    tags: ["drag", "position", "pan", "arrows"],
    aliases: ["drag handle", "crosshair move"],
    elements: '<polyline points="5 9 2 12 5 15"/><polyline points="9 5 12 2 15 5"/><polyline points="15 19 12 22 9 19"/><polyline points="19 9 22 12 19 15"/><line x1="2" y1="12" x2="22" y2="12"/><line x1="12" y1="2" x2="12" y2="22"/>'
  }
];
