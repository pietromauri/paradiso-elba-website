import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check dimensions of the hero image
const imagePath = path.join(__dirname, 'images', 'apartment', 'PXL_20241124_104229648.MP-EFFECTS-2048x1152.jpg');

sharp(imagePath)
  .metadata()
  .then(metadata => {
    console.log(`Image: ${path.basename(imagePath)}`);
    console.log(`Dimensions: ${metadata.width} x ${metadata.height}`);
  })
  .catch(err => {
    console.error('Error reading image:', err);
  });