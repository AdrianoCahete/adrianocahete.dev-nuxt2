const { webkit } = require('playwright');

(async () => {
  const browser = await webkit.launch()
  const page = await browser.newPage()
  await page.goto('http://localhost:3002/')
  await page.screenshot({ path: 'images/example.png' })
  await browser.close()
})()
