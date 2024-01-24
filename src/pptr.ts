import puppeteer from 'puppeteer'

export async function getPrice (url: string) {
  const browser = await puppeteer.launch({ headless: 'new' })
  const page = await browser.newPage()
  await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 16_6 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/16.6 Mobile/15E148 Safari/604.1')
  await page.setViewport({ width: 414, height: 896 })
  await page.goto(url)
  // await new Promise(r => setTimeout(r, 10 * 1000))
  await page.screenshot({ 'path': 'screenshot.png' })
  const selector = await page.waitForSelector('div[data-widget="webPrice"] span span', { visible: true, timeout: 10 * 1000 })
  const value = await selector?.evaluate(el => el.textContent)
  await browser.close()
  return value
}
