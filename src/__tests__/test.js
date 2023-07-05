const puppeteer = require("puppeteer");
const { before } = require('mocha');

describe("Popover Tests", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto(`file://${__dirname}/../../dist/index.html`);
  });

  afterEach(async () => {
    await browser.close();
  });

  it("should toggle popover visibility", async () => {
    // Check initial popover visibility
    let popover = await page.$(".popover");
    expect(popover).toBeNull();

    // Click the button to show the popover
    await page.click("#toggleButton");

    // Check popover visibility
    popover = await page.waitForSelector(".popover");
    expect(popover).toBeDefined();

    // Click the button again to hide the popover
    await page.click("#toggleButton");

    // Check popover visibility
    popover = await page.$(".popover");
    expect(popover).toBeNull();
  });
});
