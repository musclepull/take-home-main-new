const puppeteer = require('puppeteer')
let browser
const timeout = 5000;

describe(
  "/ (Home Page)",
  () => {
    let page;
    beforeAll(async () => {
      console.log("beforeAll: launching browser") // --> gets printed
      browser = await puppeteer.launch()
      console.log("beforeAll: browser launched") // --> doesn't get printed
      page = await global.__BROWSER__.newPage();
      await page.goto("https://google.com");
    }, timeout);

    it("should load without error", async () => {
      const text = await page.evaluate(() => document.body.textContent);
      expect(text).toContain("google");
    });
  },
  timeout
);