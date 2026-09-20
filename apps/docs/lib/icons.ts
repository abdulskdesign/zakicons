import { iconsData, iconMap, IconDefinition, getIcon as coreGetIcon } from "@zak-icons/core";

export type { IconDefinition };
export { iconsData, iconMap };

export function getAllIcons(): IconDefinition[] {
  return iconsData;
}

export function getIconByName(name: string): IconDefinition | undefined {
  return coreGetIcon(name);
}

export function getIconsByCategory(category: string): IconDefinition[] {
  return iconsData.filter(i => i.category.toLowerCase() === category.toLowerCase());
}

export function getRelatedIcons(icon: IconDefinition, limit: number = 8): IconDefinition[] {
  const currentTags = new Set(icon.tags);
  return iconsData
    .filter(i => i.name !== icon.name)
    .map(other => {
      let score = 0;
      if (other.category === icon.category) score += 3;
      for (const tag of other.tags) {
        if (currentTags.has(tag)) score += 1;
      }
      return { other, score };
    })
    .filter(item => item.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.other);
}
