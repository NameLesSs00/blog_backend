import puppeteer from 'puppeteer';
import path from 'path';

const URL = 'http://localhost:3000';
//test
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(URL, { waitUntil: 'networkidle0' });

  const screenshotPath = path.resolve(__dirname, '../public/screenshot.png') as `${string}.png`;
  await page.screenshot({ path: screenshotPath, fullPage: true });

  console.log(`📸 Screenshot saved to ${screenshotPath}`);
  await browser.close();
})();
