import sharp from "sharp";
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512">
  <rect width="512" height="512" rx="96" fill="#050505"/>
  <rect x="8" y="8" width="496" height="496" rx="90" fill="none" stroke="rgba(255,255,255,0.14)" stroke-width="4"/>
  <text x="50%" y="50%" dy="0.04em" text-anchor="middle" dominant-baseline="central"
    font-family="Helvetica, Arial, sans-serif" font-weight="900" font-size="300"
    letter-spacing="-12" fill="#ffffff">P</text>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile("app/icon.png");
console.log("icon written");
