import Fuse from "fuse.js";
import { IconDefinition, iconsData } from "./icons";

let fuseInstance: Fuse<IconDefinition> | null = null;

export function getFuseInstance(): Fuse<IconDefinition> {
  if (!fuseInstance) {
    fuseInstance = new Fuse(iconsData, {
      keys: [
        { name: "name", weight: 3 },
        { name: "title", weight: 2.5 },
        { name: "aliases", weight: 2 },
        { name: "tags", weight: 1.5 },
        { name: "category", weight: 1 }
      ],
      threshold: 0.35,
      ignoreLocation: true,
      minMatchCharLength: 1
    });
  }
  return fuseInstance;
}

export function searchIcons(query: string, categoryFilter?: string): IconDefinition[] {
  let list = iconsData;

  if (categoryFilter && categoryFilter !== "all") {
    list = list.filter(i => i.category.toLowerCase() === categoryFilter.toLowerCase());
  }

  const trimmed = query.trim();
  if (!trimmed) {
    return list;
  }

  const fuse = new Fuse(list, {
    keys: [
      { name: "name", weight: 3 },
      { name: "title", weight: 2.5 },
      { name: "aliases", weight: 2 },
      { name: "tags", weight: 1.5 },
      { name: "category", weight: 1 }
    ],
    threshold: 0.35,
    ignoreLocation: true,
    minMatchCharLength: 1
  });

  return fuse.search(trimmed).map(result => result.item);
}
