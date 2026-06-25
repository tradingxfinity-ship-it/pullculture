import sharp from "sharp";
import path from "path";
import fs from "fs";

const PUB = path.resolve("public");

// [source, output, maxWidth, quality, hasAlpha]
const JOBS = [
  ["cards/image6.png", "cards/card6.webp", 760, 82, false],
  ["cards/image12.png", "cards/card12.webp", 900, 85, false],
  ["hero-bg.png", "hero-bg.webp", 1920, 72, false],
  ["shirt.png", "shirt.webp", 1000, 86, true],
];

let before = 0;
let after = 0;

for (const [src, out, maxW, quality, alpha] of JOBS) {
  const srcPath = path.join(PUB, src);
  const outPath = path.join(PUB, out);
  const srcSize = fs.statSync(srcPath).size;

  await sharp(srcPath)
    .resize({ width: maxW, withoutEnlargement: true })
    .webp({ quality, alphaQuality: alpha ? 90 : 100, effort: 6 })
    .toFile(outPath);

  const outSize = fs.statSync(outPath).size;
  before += srcSize;
  after += outSize;
  const kb = (n) => (n / 1024).toFixed(0) + "KB";
  console.log(
    `${src} ${kb(srcSize)}  ->  ${out} ${kb(outSize)}  (-${(
      (1 - outSize / srcSize) *
      100
    ).toFixed(0)}%)`
  );
}

console.log(
  `\nTOTAL: ${(before / 1024 / 1024).toFixed(2)}MB -> ${(
    after /
    1024 /
    1024
  ).toFixed(2)}MB`
);
