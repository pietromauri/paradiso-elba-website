import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Define paths
const inputPath = path.join(__dirname, 'images', 'apartment', 'PXL_20241124_104229648.MP-EFFECTS-2048x1152.jpg');
const outputPath = path.join(__dirname, 'images', 'apartment', 'PXL_20241124_104229648.MP-EFFECTS-3840x2160.jpg');

// Resize to 3840px width while maintaining aspect ratio
sharp(inputPath)
  .resize(3840, null, {  // null height means auto based on aspect ratio
    kernel: sharp.kernel.lanczos3,
    withoutEnlargement: false
  })
  .toFile(outputPath)
  .then(info => {
    console.log('Image resized successfully!');
    console.log(`New dimensions: ${info.width} x ${info.height}`);
    console.log(`Output file: ${outputPath}`);
  })
  .catch(err => {
    console.error('Error resizing image:', err);
  });