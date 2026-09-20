import { runValidation } from "./validate-icons";
import { runOptimization } from "./optimize-svg";
import { runGenerateMetadata } from "./generate-metadata";
import { runGenerateCore } from "./generate-core";
import { runGenerateReact } from "./generate-react";
import { runGenerateBlazor } from "./generate-blazor";
import { runGenerateFlutter } from "./generate-flutter";
// import { runGenerateWeb } from "./generate-web"; // Web Components generation removed

async function main() {
  console.log("==================================================");
  console.log("🚀 Starting ZAK Icons Full Generation Pipeline...");
  console.log("==================================================\n");

  const start = Date.now();

  try {
    console.log("--- Step 1: Validating Raw SVGs ---");
    runValidation();

    console.log("\n--- Step 2: Optimizing SVGs via SVGO ---");
    runOptimization();

    console.log("\n--- Step 3: Generating Metadata (icons, categories, aliases, tags) ---");
    runGenerateMetadata();

    console.log("\n--- Step 4: Generating @zak-icons/core ---");
    runGenerateCore();

    console.log("\n--- Step 5: Generating @zak-icons/react ---");
    runGenerateReact();

    console.log("\n--- Step 6: Generating ZakIcons.Blazor ---");
    runGenerateBlazor();

    console.log("\n--- Step 7: Generating zak_icons (Flutter) ---");
    runGenerateFlutter();

    // Web Components generation step removed (CSS package replaces it)

    const elapsed = ((Date.now() - start) / 1000).toFixed(2);
    console.log("\n==================================================");
    console.log(`✅ ZAK Icons build pipeline completed in ${elapsed}s!`);
    console.log("==================================================");
  } catch (err) {
    console.error("\n❌ Pipeline failed with error:", err);
    process.exit(1);
  }
}

main();
