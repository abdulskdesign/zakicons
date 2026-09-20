import { categoriesData, categoryMap, CategoryDefinition, getCategory as coreGetCategory } from "@zak-icons/core";

export type { CategoryDefinition };
export { categoriesData, categoryMap };

export function getAllCategories(): CategoryDefinition[] {
  return categoriesData;
}

export function getCategoryById(id: string): CategoryDefinition | undefined {
  return coreGetCategory(id);
}
