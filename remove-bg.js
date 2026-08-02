import { Jimp } from 'jimp';
import path from 'path';

async function removeBackground() {
  const inputPath = "c:\\Users\\FENIL LIMBACHIYA\\Downloads\\trade 360\\WhatsApp Image 2026-07-31 at 3.15.20 PM (1).jpeg";
  const outputPath = "c:\\Users\\FENIL LIMBACHIYA\\Downloads\\trade 360\\OneTrade360-website\\artifacts\\onetrade360\\public\\logo-transparent.png";

  try {
    console.log("Reading image...");
    const image = await Jimp.read(inputPath);
    
    // Iterate through pixels and replace near-white background with transparent
    image.scan(0, 0, image.bitmap.width, image.bitmap.height, (x, y, idx) => {
      const red = image.bitmap.data[idx + 0];
      const green = image.bitmap.data[idx + 1];
      const blue = image.bitmap.data[idx + 2];

      // If pixel is near white (threshold > 220 for all RGB channels)
      if (red > 215 && green > 215 && blue > 215) {
        image.bitmap.data[idx + 3] = 0; // Make transparent
      }
    });

    await image.write(outputPath);
    console.log("Successfully created logo-transparent.png!");
  } catch (err) {
    console.error("Error processing logo:", err);
  }
}

removeBackground();
