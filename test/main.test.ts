import fs from "fs";
import path from "path";

import playwright from "playwright-chromium";

let browser: playwright.Browser;
let page: playwright.Page;

beforeAll(async () => {
  browser = await playwright.chromium.launch();
});

beforeEach(async () => {
  page = await browser.newPage();
});

afterAll(async () => {
  await browser.close();
});

it("should run and return number", async () => {
  const lib = fs
    .readFileSync(path.join(__dirname, "../dist/index.js"))
    .toString();

  await page.evaluate(() => (exports = {}));

  await page.evaluate(lib);

  const resolvesTo = await page.evaluate(() => exports.default());

  expect(typeof resolvesTo).toBe("number");
});
