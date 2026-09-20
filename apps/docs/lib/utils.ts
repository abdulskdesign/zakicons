export function copyToClipboard(text: string): Promise<boolean> {
  if (typeof navigator === "undefined" || !navigator.clipboard) {
    return Promise.resolve(false);
  }
  return navigator.clipboard.writeText(text).then(
    () => true,
    () => false
  );
}

export function downloadSvg(svgContent: string, filename: string) {
  if (typeof document === "undefined") return;
  const blob = new Blob([svgContent], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename.endsWith(".svg") ? filename : `${filename}.svg`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

export function toPascalCase(str: string): string {
  const clean = str.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  let result = clean.charAt(0).toUpperCase() + clean.slice(1);
  if (/^[0-9]/.test(result)) {
    result = `Icon${result}`;
  }
  return result;
}

export function toCamelCase(str: string): string {
  const clean = str.replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());
  let result = clean.charAt(0).toLowerCase() + clean.slice(1);
  if (/^[0-9]/.test(result)) {
    result = `icon${result}`;
  }
  const reserved = new Set(["default", "switch", "case", "new", "class", "void", "null"]);
  if (reserved.has(result)) {
    result = `${result}Icon`;
  }
  return result;
}
