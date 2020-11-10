const puppeteer = require('puppeteer');

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 212,
    height: 104,
    deviceScaleFactor: 1,
  });
  await page.goto('http://localhost:4200');
  await delay(4000);
  await page.screenshot({
    path: 'screencapture/screen.png'
  });

  await browser.close();
})();