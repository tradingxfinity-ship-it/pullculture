import puppeteer from "puppeteer-core";
import os from "os";
import path from "path";

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const URL = "http://localhost:3000/";
const OUT = path.join(os.homedir(), "Desktop", "pullculture-fullpage.png");
const WIDTH = 1440;

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: "new",
  defaultViewport: { width: WIDTH, height: 900, deviceScaleFactor: 2 },
  args: ["--hide-scrollbars", "--force-color-profile=srgb"],
});

const page = await browser.newPage();
await page.goto(URL, { waitUntil: "networkidle0", timeout: 60000 });

const wait = (ms) => new Promise((r) => setTimeout(r, ms));

// Slowly scroll the whole page to trigger framer-motion `whileInView`
// reveals (once:true keeps them shown) and to load lazy images.
await page.evaluate(async () => {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const step = Math.round(window.innerHeight * 0.6);
  const max = document.documentElement.scrollHeight;
  for (let y = 0; y <= max; y += step) {
    window.scrollTo(0, y);
    await sleep(400);
  }
  window.scrollTo(0, 0);
});

// Let entrance animations settle.
await wait(1800);

// Pin the fixed navbar so it renders exactly once at the top in a full-page
// capture (otherwise it duplicates at the scroll offset).
await page.evaluate(() => {
  const header = document.querySelector("header");
  if (header) {
    header.style.position = "absolute";
    header.style.top = "0";
    header.style.left = "0";
    header.style.right = "0";
  }
});

await wait(300);

const fullHeight = await page.evaluate(
  () => document.documentElement.scrollHeight
);

await page.screenshot({
  path: OUT,
  fullPage: true,
  captureBeyondViewport: true,
  type: "png",
});

await browser.close();
console.log("SAVED:" + OUT + " (" + WIDTH + "x" + fullHeight + ")");
