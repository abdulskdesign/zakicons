import fs from "node:fs";
import path from "node:path";
import { optimize, Config } from "svgo";

const iconsRoot = path.resolve(process.cwd(), "icons");

const svgoConfig: Config = {
  multipass: true,
  plugins: [
    {
      name: "preset-default",
      params: {
        overrides: {
          removeViewBox: false,
          cleanupIds: true
        }
      }
    },
    {
      name: "removeDimensions",
      active: false
    }
  ]
};

function getAllSvgFiles(dir: string): string[] {
  const results: string[] = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...getAllSvgFiles(fullPath));
    } else if (entry.isFile() && entry.name.endsWith(".svg")) {
      results.push(fullPath);
    }
  }

  return results;
}

export function runOptimization() {
  console.log("Optimizing SVG icons using SVGO pipeline...");
  const svgs = getAllSvgFiles(iconsRoot);
  let optimizedCount = 0;

  for (const file of svgs) {
    const original = fs.readFileSync(file, "utf-8");
    const result = optimize(original, { ...svgoConfig, path: file });
    
    // Ensure essential outer attributes remain standardized
    let optimizedData = result.data;
    if (!optimizedData.includes('stroke="currentColor"')) {
      optimizedData = optimizedData.replace('<svg ', '<svg stroke="currentColor" ');
    }
    if (!optimizedData.includes('fill="none"')) {
      optimizedData = optimizedData.replace('<svg ', '<svg fill="none" ');
    }

    fs.writeFileSync(file, optimizedData, "utf-8");
    optimizedCount++;
  }

  console.log(`Successfully optimized ${optimizedCount} SVG icons.`);
}

if (require.main === module) {
  runOptimization();
}
