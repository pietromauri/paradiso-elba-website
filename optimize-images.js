import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const TARGET_WIDTH = 1200; // max width for general images, fine for grid/gallery

async function optimizeFolder(folderPath) {
  try {
    const files = await fs.readdir(folderPath);
    console.log(`Analyzing folder: ${folderPath}`);

    for (const file of files) {
      const ext = path.extname(file).toLowerCase();
      // only standard raster images
      if (!['.jpg', '.jpeg', '.png'].includes(ext)) {
        continue;
      }

      const inputPath = path.join(folderPath, file);
      const parsedPath = path.parse(inputPath);
      const outputPath = path.join(folderPath, `${parsedPath.name}.webp`);

      // Skip if output webp already exists
      try {
        await fs.access(outputPath);
        console.log(`Skipping ${file}, .webp already exists.`);
        continue;
      } catch (e) {
        // file doesn't exist, proceed
      }

      console.log(`Optimizing ${file}...`);

      const image = sharp(inputPath);
      const metadata = await image.metadata();

      let pipeline = image;

      // Resize if too big
      if (metadata.width > TARGET_WIDTH) {
        pipeline = pipeline.resize(TARGET_WIDTH, null, { withoutEnlargement: true });
      }

      // Convert to webp and save
      await pipeline
        .webp({ quality: 80 }) // 80 is a good standard optimization
        .toFile(outputPath);

      console.log(`-> Saved as ${path.basename(outputPath)}`);
    }

    console.log('Optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// Run if called directly
const targetDir = process.argv[2];
if (!targetDir) {
  console.log('Please provide a target directory. Example: node optimize-images.js ./images/attivita/trekking/la-cala');
  process.exit(1);
}

optimizeFolder(targetDir);
