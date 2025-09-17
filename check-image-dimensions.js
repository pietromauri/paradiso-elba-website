import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';

// Get __dirname equivalent for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Check dimensions of home-page.png
const imagePath = path.join(__dirname, 'images', 'apartment', 'home-page.png');

sharp(imagePath)
  .metadata()
  .then(metadata => {
    console.log(`Image: ${path.basename(imagePath)}`);
    console.log(`Dimensions: ${metadata.width} x ${metadata.height}`);
  })
  .catch(err => {
    console.error('Error reading image:', err);
  });