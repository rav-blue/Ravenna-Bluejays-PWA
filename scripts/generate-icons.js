import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

async function generateIcons() {
  console.log('Generating compliant 8-bit sRGB PWA icons...');
  
  // Use the high-resolution transparent emblem or Podium Block R as the icon source
  const sourceImage = 'public/Podium Block R (Royal Blue).png';
  const emblemImage = 'public/Podium Emblem Logos 3 Colors.png';
  
  // Brand colors
  const bgColor = { r: 17, g: 45, b: 130, alpha: 1 }; // #112d82
  
  // 1. Standard Icons (purpose: "any") - Transparent background, high quality 8-bit sRGB
  await sharp(sourceImage)
    .resize(192, 192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toColorspace('srgb')
    .png({ bitdepth: 8, compressionLevel: 9 })
    .toFile('public/icon-192.png');
  console.log('Created public/icon-192.png');

  await sharp(sourceImage)
    .resize(512, 512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toColorspace('srgb')
    .png({ bitdepth: 8, compressionLevel: 9 })
    .toFile('public/icon-512.png');
  console.log('Created public/icon-512.png');

  // 2. Apple Touch Icon (180x180) - with subtle rounded dark blue background
  const innerSize180 = Math.round(180 * 0.85); // 153px
  const resizedForApple = await sharp(sourceImage)
    .resize(innerSize180, innerSize180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 180,
      height: 180,
      channels: 4,
      background: bgColor
    }
  })
  .composite([{ input: resizedForApple, gravity: 'center' }])
  .toColorspace('srgb')
  .png({ bitdepth: 8, compressionLevel: 9 })
  .toFile('public/apple-touch-icon.png');
  console.log('Created public/apple-touch-icon.png');

  // 3. Maskable Icons (purpose: "maskable") - 80% safe zone on solid brand background (#112d82)
  // 192x192 maskable
  const innerSize192 = Math.round(192 * 0.76); // ~146px inside safe zone
  const resized192 = await sharp(sourceImage)
    .resize(innerSize192, innerSize192, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 192,
      height: 192,
      channels: 4,
      background: bgColor
    }
  })
  .composite([{ input: resized192, gravity: 'center' }])
  .toColorspace('srgb')
  .png({ bitdepth: 8, compressionLevel: 9 })
  .toFile('public/icon-maskable-192.png');
  console.log('Created public/icon-maskable-192.png');

  // 512x512 maskable
  const innerSize512 = Math.round(512 * 0.76); // ~389px inside safe zone
  const resized512 = await sharp(sourceImage)
    .resize(innerSize512, innerSize512, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toBuffer();

  await sharp({
    create: {
      width: 512,
      height: 512,
      channels: 4,
      background: bgColor
    }
  })
  .composite([{ input: resized512, gravity: 'center' }])
  .toColorspace('srgb')
  .png({ bitdepth: 8, compressionLevel: 9 })
  .toFile('public/icon-maskable-512.png');
  console.log('Created public/icon-maskable-512.png');

  console.log('All icons generated successfully!');
}

generateIcons().catch(err => {
  console.error(err);
  process.exit(1);
});
