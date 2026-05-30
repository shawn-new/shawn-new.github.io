import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { after, before, test } from 'node:test';
import { Builder, By, until } from 'selenium-webdriver';
import chrome from 'selenium-webdriver/chrome.js';

const BASE_URL = 'http://127.0.0.1:5173/ai-native-blog/';
const ARTICLE_ID = 'article1-engineeringbinary';
const TARGET_HEADING_ID = 'the-same-problem-across-five-eras';

let server;
let driver;

const waitForServer = async () => {
  const deadline = Date.now() + 30_000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(BASE_URL);
      if (response.ok) return;
    } catch {
      await new Promise((resolve) => setTimeout(resolve, 250));
    }
  }
  throw new Error(`Vite server did not become ready at ${BASE_URL}`);
};

before(async () => {
  server = spawn(
    process.execPath,
    ['node_modules/vite/bin/vite.js', '--host', '127.0.0.1'],
    { stdio: ['ignore', 'pipe', 'pipe'] },
  );

  await waitForServer();

  const options = new chrome.Options()
    .addArguments('--headless=new')
    .addArguments('--disable-gpu')
    .addArguments('--window-size=1365,900');

  driver = await new Builder()
    .forBrowser('chrome')
    .setChromeOptions(options)
    .build();
});

after(async () => {
  if (driver) await driver.quit();
  if (server) server.kill();
});

test('Selenium: article cards open articles and browser back syncs URL and view', async () => {
  await driver.get(BASE_URL);
  const targetCard = await driver.wait(
    until.elementLocated(By.xpath('//div[contains(@class, "article-card")][.//h2[contains(., "The Engineering Binary")]]')),
    10_000,
  );
  await targetCard.click();
  await driver.wait(until.urlContains(`#${ARTICLE_ID}`), 10_000);
  await driver.wait(until.elementLocated(By.css('.article-view')), 10_000);
  assert.equal(await driver.getCurrentUrl(), `${BASE_URL}#${ARTICLE_ID}`);

  await driver.navigate().back();
  await driver.wait(until.elementLocated(By.css('.hero')), 10_000);
  assert.equal(await driver.getCurrentUrl(), BASE_URL);
  assert.equal(await driver.findElements(By.css('.article-view')).then((items) => items.length), 0);
});

test('Selenium: TOC click keeps URL on article and syncs active TOC with visible heading', async () => {
  await driver.get(`${BASE_URL}#${ARTICLE_ID}`);
  await driver.wait(until.elementLocated(By.css('.toc-sidebar')), 10_000);

  const targetLink = await driver.findElement(By.css(`.toc-item a[href="#${TARGET_HEADING_ID}"]`));
  await targetLink.click();

  await driver.wait(async () => {
    const active = await driver.findElement(By.css('.toc-item.active a')).getAttribute('href');
    return active.endsWith(`#${TARGET_HEADING_ID}`);
  }, 10_000);

  const headingTop = await driver.executeScript(
    `return document.getElementById(arguments[0]).getBoundingClientRect().top;`,
    TARGET_HEADING_ID,
  );
  assert.equal(await driver.getCurrentUrl(), `${BASE_URL}#${ARTICLE_ID}`);
  assert.ok(headingTop >= 100 && headingTop <= 180, `expected heading near nav offset, got ${headingTop}`);
});

test('Selenium: English and Chinese locale rendering are clean and separated', async () => {
  await driver.get(`${BASE_URL}#${ARTICLE_ID}`);
  await driver.wait(until.elementLocated(By.css('.md-content')), 10_000);
  const englishText = await driver.findElement(By.css('.md-content')).getText();
  assert.match(englishText, /For years, engineers were sorted by stack/);
  assert.doesNotMatch(englishText, /过去很多年/);
  assert.doesNotMatch(englishText, /\\n/);

  await driver.get(`${BASE_URL}?locale=cn#${ARTICLE_ID}`);
  await driver.wait(until.elementLocated(By.css('.md-content')), 10_000);
  const chineseText = await driver.findElement(By.css('.md-content')).getText();
  assert.match(chineseText, /过去很多年，工程师按技术栈分类/);
  assert.doesNotMatch(chineseText, /For years, engineers were sorted by stack/);
  assert.doesNotMatch(chineseText, /\\n/);
});
