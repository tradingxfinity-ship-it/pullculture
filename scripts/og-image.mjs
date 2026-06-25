import puppeteer from "puppeteer-core";
import sharp from "sharp";
import path from "path";
import fs from "fs";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const OUT = path.resolve("public/og.png");
const TMP = path.resolve("public/.og-2x.png");

const html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet" />
<style>
  * { margin:0; padding:0; box-sizing:border-box; }
  body { width:1200px; height:630px; background:#050505; font-family:'Inter',sans-serif; color:#fff; overflow:hidden; }
  .frame { position:absolute; inset:28px; border:1px solid rgba(255,255,255,0.12); border-radius:18px; }
  .grid { position:absolute; inset:0;
    background-image:linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px);
    background-size:64px 64px; }
  .glow { position:absolute; width:700px; height:700px; right:-200px; top:-200px; border-radius:50%;
    background:radial-gradient(circle, rgba(255,255,255,0.10) 0%, transparent 60%); filter:blur(40px); }
  .wrap { position:relative; height:100%; display:flex; flex-direction:column; justify-content:center; padding:0 86px; }
  .eyebrow { font-family:'JetBrains Mono',monospace; font-size:18px; letter-spacing:0.32em; color:rgba(255,255,255,0.55); margin-bottom:30px; }
  .logo { font-weight:900; font-size:118px; letter-spacing:-0.055em; line-height:0.9; display:flex; align-items:flex-start; }
  .logo sup { font-size:26px; font-weight:300; color:rgba(255,255,255,0.5); margin-left:8px; margin-top:14px; }
  .tag { font-weight:800; font-size:40px; letter-spacing:-0.03em; margin-top:24px;
    background:linear-gradient(135deg,#ffffff 0%, #9a9a9a 70%, #5a5a5a 100%); -webkit-background-clip:text; -webkit-text-fill-color:transparent; }
  .foot { position:absolute; left:86px; right:86px; bottom:64px; display:flex; align-items:center; justify-content:space-between;
    font-family:'JetBrains Mono',monospace; font-size:17px; letter-spacing:0.12em; color:rgba(255,255,255,0.6); }
  .foot .cats { color:rgba(255,255,255,0.4); }
  .dot { display:inline-block; width:8px; height:8px; border-radius:50%; background:#fff; margin-right:12px; vertical-align:middle; }
</style>
</head>
<body>
  <div class="grid"></div>
  <div class="glow"></div>
  <div class="frame"></div>
  <div class="wrap">
    <div class="eyebrow">COLLECTOR CULTURE · EST. 2026</div>
    <div class="logo">PULLCULTURE<sup>™</sup></div>
    <div class="tag">CULTURE THROUGH COLLECTING</div>
  </div>
  <div class="foot">
    <div><span class="dot"></span>pullculture.io</div>
    <div class="cats">SPORTS CARDS · POKÉMON · ONE PIECE · TCG</div>
  </div>
</body>
</html>`;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  defaultViewport: { width: 1200, height: 630, deviceScaleFactor: 2 },
  args: ["--force-color-profile=srgb"],
});
const page = await browser.newPage();
await page.setContent(html, { waitUntil: "networkidle0", timeout: 30000 });
await new Promise((r) => setTimeout(r, 400));
await page.screenshot({ path: TMP, type: "png" });
await browser.close();

// Downsample the 2x capture to a crisp exact 1200x630.
await sharp(TMP).resize(1200, 630).png({ quality: 90 }).toFile(OUT);
fs.unlinkSync(TMP);

console.log("OG image saved:", OUT, (fs.statSync(OUT).size / 1024).toFixed(0) + "KB");
