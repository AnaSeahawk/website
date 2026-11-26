import assert from 'node:assert/strict';
import { test } from 'node:test';

const { chromium } = await import(process.env.ANA_PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.ANA_TEST_BASE_URL || 'http://127.0.0.1:18770';
const workedPath = '/The-Living-Year/phoenix/';
const position = page => page.locator('[data-position]').textContent();

test('one wheel supports the worked example and a personal longitude', async () => {
  const browser = await chromium.launch({
    executablePath: process.env.ANA_TEST_CHROME || undefined,
    args: ['--no-sandbox']
  });
  try {
    const view = { width: 390, height: 844 };
    const page = await browser.newPage({ viewport: view });
    await page.route('**/*', route =>
      new URL(route.request().url()).origin === new URL(base).origin ? route.continue() : route.abort());
    await page.goto(base + workedPath);
    const wheel = page.locator('#phoenix-visual-study');
    await wheel.waitFor();
    assert.equal(await page.locator('svg.personal-wheel').count(), 1);
    assert.equal(await position(page), 'Passage 0 · 10º Scorpio');
    assert.equal(await wheel.locator('[data-detail]').textContent(), 'November 2, 1974');
    assert.equal(await wheel.locator('#phoenix-study-step').inputValue(), '0');
    await wheel.getByRole('button', { name: 'December 19' }).click();
    assert.equal(await position(page), 'Passage 136 · 28º Sagittarius');
    assert.match(await page.locator('[data-detail]').textContent(), /12:42 p.m. Oaxaca/);
    const requests = [];
    page.on('request', request => requests.push(request.url()));
    await wheel.getByText('Use your own natal Sun', { exact: true }).click();
    await page.getByLabel('Zodiac sign').selectOption({ label: 'Taurus' });
    await page.getByLabel('Degrees', { exact: true }).fill('12');
    await page.getByLabel('Minutes', { exact: true }).fill('34');
    await page.getByLabel('Seconds', { exact: true }).fill('56');
    await page.getByRole('button', { name: 'Set natal Sun' }).click();
    assert.equal(await position(page), 'Passage 0 · 13º Taurus');
    assert.equal(await wheel.locator('[data-detail]').textContent(), '');
    assert.equal(await page.locator('[data-natal]').textContent(), 'Your natal Sun · 12°34′56″ Taurus');

    await page.getByRole('button', { name: 'Next', exact: true }).press('Enter');
    assert.equal(await position(page), 'Passage 1 · 1º Libra');
    assert.equal(await page.locator('.wheel-arc').count(), 1);
    await page.getByRole('button', { name: 'Previous' }).click();
    assert.equal(await position(page), 'Passage 0 · 13º Taurus');

    const input = page.getByLabel('Passage number');
    await input.fill('136');
    await input.press('Enter');
    assert.equal(await position(page), 'Passage 136 · 1º Cancer');
    assert.equal(await page.locator('[data-measured]').textContent(), '0°34′56″ Cancer');
    assert.equal(await page.locator('[data-total]').textContent(), '18,768°');
    assert.equal(await page.locator('[data-revolutions]').textContent(), '52');
    assert.equal(await page.locator('[data-cycle]').textContent(), '16 of 60');
    assert.equal(await page.locator('[data-wheel-path] line').count(), 60);
    assert.equal(await wheel.getByRole('button', { name: 'December 19' }).count(), 0);
    assert.equal(await wheel.locator('[data-detail]').textContent(), '');

    await page.locator('#phoenix-study-step').press('Home');
    assert.equal(await position(page), 'Passage 0 · 13º Taurus');
    await page.locator('#phoenix-study-step').press('End');
    assert.equal(await position(page), 'Passage 60 · 13º Taurus');
    assert.equal(await page.locator('[data-revolutions]').textContent(), '23');
    await input.fill('-1');
    await page.getByRole('button', { name: 'Go', exact: true }).click();
    assert.equal(await input.evaluate(el => el.validity.rangeUnderflow), true);
    assert.equal(await position(page), 'Passage 60 · 13º Taurus');
    await page.getByLabel('Degrees', { exact: true }).fill('30');
    await page.getByRole('button', { name: 'Set natal Sun' }).click();
    assert.equal(await page.locator('#sun-degree').evaluate(el => el.validity.rangeOverflow), true);
    assert.equal(await position(page), 'Passage 60 · 13º Taurus');
    await page.getByRole('button', { name: 'Restore example' }).click();
    assert.equal(await position(page), 'Passage 0 · 10º Scorpio');
    assert.equal(await wheel.locator('[data-detail]').textContent(), 'November 2, 1974');
    assert.equal(await wheel.locator('#phoenix-study-step').inputValue(), '0');
    await wheel.getByRole('button', { name: 'December 19' }).click();
    assert.equal(await position(page), 'Passage 136 · 28º Sagittarius');
    assert.match(await wheel.locator('[data-detail]').textContent(), /12:42 p.m. Oaxaca/);
    assert.deepEqual(requests, []);
    assert.equal(page.url(), base + workedPath);

    const theme = await page.locator('html').getAttribute('data-theme');
    await page.getByRole('button', { name: /Switch to .* theme/ }).click();
    assert.notEqual(await page.locator('html').getAttribute('data-theme'), theme);
    for (const width of [320, 390, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), 'overflow at ' + width);
    }
    const fallback = await browser.newPage({ viewport: view, javaScriptEnabled: false });
    await fallback.goto(base + workedPath);
    assert.match(await fallback.locator('noscript p').textContent(), /Enable JavaScript to use the Phoenix wheel/);
    assert.equal(await fallback.locator('#phoenix-visual-study').isVisible(), false);
    assert.ok(await fallback.getByRole('heading', { name: 'The Phoenix, step by step' }).isVisible());
  } finally {
    await browser.close();
  }
});
