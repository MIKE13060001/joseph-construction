const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  page.on('console', msg => console.log('PAGE LOG:', msg.text()));
  page.on('pageerror', exception => console.log('PAGE ERROR:', exception.message));
  await page.goto('http://localhost:7008/');
  await page.waitForTimeout(5000);
  console.log("Done");
  await browser.close();
})();
