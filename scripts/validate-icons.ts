import fs from "node:fs";
import path from "node:path";
import iconRules from "../config/icon-rules.json";

const iconsRoot = path.resolve(process.cwd(), "icons");

interface ValidationResult {
  file: string;
  category: string;
  errors: string[];
  warnings: string[];
}

function getAllSvgFiles(dir: string): { file: string; category: string }[] {
  const results: { file: string; category: string }[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllSvgFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".svg")) {
      const category = path.basename(path.dirname(fullPath));
      results.push({ file: fullPath, category });
    }
  }

  return results;
}

function validateSvg(content: string, filePath: string, category: string): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check valid XML / SVG open and close tags
  if (!content.trim().startsWith("<svg") || !content.trim().endsWith("</svg>")) {
    errors.push("Missing valid outer <svg> root element");
  }

  // Check viewBox
  if (!content.includes(`viewBox="${iconRules.viewBox}"`)) {
    errors.push(`viewBox does not match required: "${iconRules.viewBox}"`);
  }

  // Check forbidden attributes
  for (const attr of iconRules.forbiddenAttributes) {
    const regex = new RegExp(`\\s${attr}=`, "i");
    if (regex.test(content)) {
      errors.push(`Contains forbidden attribute: "${attr}"`);
    }
  }

  // Check raster image tags
  if (/<image[\s>]/i.test(content)) {
    errors.push("Contains raster <image> tag! Raster images are strictly forbidden.");
  }

  // Check stroke attributes in svg tag
  if (!content.includes('stroke="currentColor"')) {
    warnings.push('Root svg should contain stroke="currentColor"');
  }

  return {
    file: path.relative(process.cwd(), filePath),
    category,
    errors,
    warnings
  };
}

export function runValidation() {
  console.log("Validating all SVG icons in /icons...");
  const svgs = getAllSvgFiles(iconsRoot);
  console.log(`Found ${svgs.length} SVG files to validate.`);

  let errorCount = 0;
  let warningCount = 0;
  const failedFiles: ValidationResult[] = [];

  for (const { file, category } of svgs) {
    const content = fs.readFileSync(file, "utf-8");
    const result = validateSvg(content, file, category);

    if (result.errors.length > 0) {
      errorCount += result.errors.length;
      failedFiles.push(result);
    }
    if (result.warnings.length > 0) {
      warningCount += result.warnings.length;
    }
  }

  if (errorCount > 0) {
    console.error(`Validation FAILED: ${errorCount} errors detected across ${failedFiles.length} files:`);
    for (const fail of failedFiles) {
      console.error(`  - ${fail.file}: ${fail.errors.join(", ")}`);
    }
    process.exit(1);
  }

  console.log(`Validation SUCCESS! All ${svgs.length} icons comply with 24x24 vector standards. (Warnings: ${warningCount})`);
}

if (require.main === module) {
  runValidation();
}
