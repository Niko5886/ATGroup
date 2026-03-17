import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const imagesRoot = path.join(projectRoot, "src", "assets", "images");
const supported = new Set([".jpg", ".jpeg", ".png"]);

async function collectImageFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        return collectImageFiles(fullPath);
      }

      const ext = path.extname(entry.name).toLowerCase();
      if (!supported.has(ext)) {
        return [];
      }

      return [fullPath];
    })
  );

  return files.flat();
}

async function optimizeFile(filePath) {
  const extension = path.extname(filePath).toLowerCase();
  const originalBuffer = await fs.readFile(filePath);
  const pipeline = sharp(originalBuffer)
    .rotate()
    .resize({
      width: 1920,
      withoutEnlargement: true,
      fit: "inside"
    });

  let optimizedBuffer;

  if (extension === ".png") {
    optimizedBuffer = await pipeline
      .png({ compressionLevel: 9, effort: 10, palette: true })
      .toBuffer();
  } else {
    optimizedBuffer = await pipeline
      .jpeg({ quality: 66, mozjpeg: true, progressive: true, chromaSubsampling: "4:2:0" })
      .toBuffer();
  }

  if (optimizedBuffer.length >= originalBuffer.length) {
    return {
      changed: false,
      before: originalBuffer.length,
      after: originalBuffer.length
    };
  }

  await fs.writeFile(filePath, optimizedBuffer);

  return {
    changed: true,
    before: originalBuffer.length,
    after: optimizedBuffer.length
  };
}

function formatKB(bytes) {
  return `${(bytes / 1024).toFixed(1)} KB`;
}

async function main() {
  const hasImagesRoot = await fs
    .stat(imagesRoot)
    .then((stats) => stats.isDirectory())
    .catch(() => false);

  if (!hasImagesRoot) {
    console.log("No images directory found. Skipping optimization.");
    return;
  }

  const imageFiles = await collectImageFiles(imagesRoot);
  if (!imageFiles.length) {
    console.log("No JPG/PNG files found. Skipping optimization.");
    return;
  }

  let changedCount = 0;
  let totalBefore = 0;
  let totalAfter = 0;

  for (const filePath of imageFiles) {
    const result = await optimizeFile(filePath);
    totalBefore += result.before;
    totalAfter += result.after;

    if (result.changed) {
      changedCount += 1;
      const relative = path.relative(projectRoot, filePath);
      const saved = result.before - result.after;
      console.log(`optimized ${relative} (-${formatKB(saved)})`);
    }
  }

  const totalSaved = totalBefore - totalAfter;
  console.log(`optimized files: ${changedCount}/${imageFiles.length}`);
  console.log(`total before: ${formatKB(totalBefore)}`);
  console.log(`total after:  ${formatKB(totalAfter)}`);
  console.log(`saved:        ${formatKB(totalSaved)}`);
}

main().catch((error) => {
  console.error("Image optimization failed:", error);
  process.exitCode = 1;
});
