import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <defs>
    <linearGradient id="boundTealGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#70c487" />
      <stop offset="40%" stop-color="#2bb68d" />
      <stop offset="70%" stop-color="#198285" />
      <stop offset="100%" stop-color="#0b5468" />
    </linearGradient>
  </defs>

  <!-- Left Green Arrow / Pentagon Shape -->
  <path
    d="M 12 72
       L 156 72
       C 166 72, 175 76, 182 83
       L 316 238
       C 328 250, 328 262, 316 274
       L 182 429
       C 175 436, 166 440, 156 440
       L 12 440
       C 6 440, 0 434, 0 428
       L 0 84
       C 0 78, 6 72, 12 72 Z"
    fill="url(#boundTealGrad)"
  />

  <!-- Right Navy B-Shape with Chevron Cutout -->
  <path
    d="M 218 72
       L 404 72
       C 462 72, 508 116, 508 174
       C 508 214, 484 246, 452 256
       C 490 268, 512 302, 512 344
       C 512 400, 466 440, 408 440
       L 218 440
       C 210 440, 204 435, 200 428
       L 348 266
       C 354 260, 354 252, 348 246
       L 200 84
       C 204 77, 210 72, 218 72 Z"
    fill="#0c1f38"
  />
</svg>`;

async function run() {
  fs.writeFileSync(path.resolve('public/bound-logo.svg'), svg);
  await sharp(Buffer.from(svg))
    .resize(512, 512)
    .png()
    .toFile(path.resolve('public/bound_icon.png'));
  console.log('Successfully generated public/bound-logo.svg and public/bound_icon.png');
}

run().catch(console.error);
