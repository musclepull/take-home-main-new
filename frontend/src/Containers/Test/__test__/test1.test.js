import ReactDom  from "react-dom"
import Test1 from "../test1"
import renderer from 'react-test-renderer'

const puppeteer = require("puppeteer");

(async function() {
    // headless: false
    // to see the result in the browser
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // let's do some navigation
    await page.goto("http://admin.zoomprospector.com")

    // create a new page and go back
    // important: the page created here does not share the history
    const backPage = await browser.newPage();

    // see results
    await page.screenshot({ path: "page.png" });

    // uncomment if you use headless chrome
    // await browser.close();
})();
