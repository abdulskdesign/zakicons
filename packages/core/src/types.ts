export interface IconDefinition {
  name: string;
  title: string;
  category: string;
  tags: string[];
  aliases: string[];
  style: "outline";
  viewBox: string;
  elements: string;
  svg: string;
}

export interface CategoryDefinition {
  id: string;
  title: string;
  description: string;
  count: number;
  icons: string[];
}
