const puppeteer = require('puppeteer-core');

(async () => {
  const browser = await puppeteer.launch({executablePath: '/usr/bin/chromium-browser'});
  const page = await browser.newPage();
  await page.setViewport({
    width: 212,
    height: 104,
    deviceScaleFactor: 1,
  });
  await page.goto('http://localhost:8123');
  await page.screenshot({path: 'screencapture/screen.png'});

  await browser.close();
})();