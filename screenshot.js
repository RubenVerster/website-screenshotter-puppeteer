const puppeteer = require('puppeteer');
const url = process.argv[2];

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(`https://${url}`);
  await page.screenshot({ path: `screenshots/SS-${url}.png` });

  await browser.close();
})();
