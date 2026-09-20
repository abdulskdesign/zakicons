export interface RawIconDefinition {
  name: string;
  category: string;
  title: string;
  tags: string[];
  aliases: string[];
  elements: string; // inner SVG elements (path, circle, rect, etc.)
}
