import { test, expect } from '@playwright/test';

const ARTICLE_ID = 'article1-engineeringbinary';

// ─── 1. Homepage ────────────────────────────────────────────────────────────

test('homepage: logo and hero are visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('.logo')).toContainText('The Sean Thesis');
  await expect(page.locator('.hero h1')).toBeVisible();
  await expect(page.locator('.hero h1')).toContainText('Logic');
});

test('homepage: article cards are listed', async ({ page }) => {
  await page.goto('/');
  const cards = page.locator('.article-card');
  await expect(cards.first()).toBeVisible();
  expect(await cards.count()).toBeGreaterThan(0);
});

// ─── 2. Hero snap scroll ────────────────────────────────────────────────────

test('hero: wheel-down snaps instantly to article list', async ({ page }) => {
  await page.goto('/');

  // Confirm we start at top
  const heroBefore = await page.locator('.hero').boundingBox();
  expect(heroBefore).not.toBeNull();

  // Simulate wheel down on hero
  await page.locator('.hero').hover();
  await page.mouse.wheel(0, 300);

  // After snap, hero should be above viewport (scrollY > heroBottom)
  const scrollY = await page.evaluate(() => window.scrollY);
  const heroBottom = heroBefore!.y + heroBefore!.height;
  // Account for nav height offset
  expect(scrollY).toBeGreaterThan(heroBottom - 200);
});

// ─── 3. Article navigation ──────────────────────────────────────────────────

test('article: clicking card opens article view', async ({ page }) => {
  await page.goto('/');
  await page.locator('.article-card').first().click();
  await expect(page.locator('.article-view')).toBeVisible();
  await expect(page.locator('.toc-sidebar')).toBeVisible();
});

test('article: back link returns to homepage', async ({ page }) => {
  await page.goto(`/#${ARTICLE_ID}`);
  await expect(page.locator('.article-view')).toBeVisible();
  await page.locator('.back-link').click();
  await expect(page.locator('.hero')).toBeVisible();
  await expect(page.locator('.article-view')).not.toBeVisible();
});

// ─── 4. TOC click: instant navigation ──────────────────────────────────────

test('TOC: clicking item scrolls to correct heading instantly', async ({ page }) => {
  await page.goto(`/#${ARTICLE_ID}`);
  await expect(page.locator('.toc-sidebar')).toBeVisible();

  // Get the second TOC item (skip first, which is near top)
  const tocItems = page.locator('.toc-item a');
  const count = await tocItems.count();
  if (count < 2) return; // not enough headings

  const targetText = await tocItems.nth(1).textContent();
  await tocItems.nth(1).click();

  // The heading should now be near the top of the viewport
  const headings = page.locator('.md-content h2, .md-content h3');
  const matchingHeading = headings.filter({ hasText: targetText! });
  const box = await matchingHeading.first().boundingBox();
  expect(box).not.toBeNull();
  // Heading top should be within viewport upper region (accounting for nav ~132px)
  expect(box!.y).toBeLessThan(200);
});

// ─── 5. TOC active highlight ────────────────────────────────────────────────

test('TOC: active item updates as user scrolls', async ({ page }) => {
  await page.goto(`/#${ARTICLE_ID}`);
  await expect(page.locator('.toc-sidebar')).toBeVisible();

  // Scroll to the second heading
  const headings = page.locator('.md-content h2, .md-content h3');
  const count = await headings.count();
  if (count < 2) return;

  const secondHeadingId = await headings.nth(1).getAttribute('id');
  await page.evaluate((id) => {
    const heading = document.getElementById(id);
    if (!heading) return;
    const top = heading.getBoundingClientRect().top + window.scrollY - 112;
    window.scrollTo({ top, behavior: 'auto' });
  }, secondHeadingId);

  // Wait briefly for scroll listener to fire
  await page.waitForTimeout(200);

  // The TOC item linking to that heading should be active
  const activeItem = page.locator(`.toc-item.active a[href="#${secondHeadingId}"]`);
  await expect(activeItem).toBeVisible();
});

// ─── 6. TOC click does NOT navigate away ────────────────────────────────────

test('TOC: clicking item does not leave article view', async ({ page }) => {
  await page.goto(`/#${ARTICLE_ID}`);
  await expect(page.locator('.article-view')).toBeVisible();

  const firstTocLink = page.locator('.toc-item a').first();
  await firstTocLink.click();

  // Should still be in article view
  await expect(page.locator('.article-view')).toBeVisible();
});
