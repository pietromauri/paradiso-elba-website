import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

async function rotateImage(imagePath, degrees) {
  try {
    const inputBuffer = await fs.readFile(imagePath);
    console.log(`Rotating ${imagePath} by ${degrees} degrees...`);
    
    const outputBuffer = await sharp(inputBuffer)
      .rotate(degrees)
      .toBuffer();
      
    await fs.writeFile(imagePath, outputBuffer);
    console.log(`Successfully rotated ${path.basename(imagePath)}`);
  } catch (err) {
    console.error(`Error rotating image:`, err);
  }
}

const file = process.argv[2];
const deg = parseInt(process.argv[3]) || 90;
if (!file) {
  console.log('Provide file to rotate.');
  process.exit(1);
}

rotateImage(file, deg);
