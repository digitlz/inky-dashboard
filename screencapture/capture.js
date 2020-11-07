const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 212,
    height: 104,
    deviceScaleFactor: 1,
  });
  await page.goto('http://localhost:4200');
  await page.screenshot({
    path: 'screencapture/screen.png'
  });

  await browser.close();
})();