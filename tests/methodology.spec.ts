import { test, expect } from '@playwright/test';

test.describe('Methodology Section', () => {
  test.beforeEach(async ({ page }) => {
    // Start dev server on port 3000
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  });

  test('cards should be visible on page load', async ({ page }) => {
    // Scroll to methodology section
    await page.locator('#methodology').scrollIntoViewIfNeeded();
    
    // Wait for cards to be present
    const cards = page.locator('#methodology .service-card');
    const count = await cards.count();
    
    console.log(`Found ${count} cards`);
    expect(count).toBe(3);
    
    // Check first card is visible
    const firstCard = cards.nth(0);
    await expect(firstCard).toBeVisible();
    
    // Check opacity and transform
    const style = await firstCard.evaluate(el => {
      const computed = window.getComputedStyle(el);
      return {
        opacity: computed.opacity,
        transform: computed.transform,
        display: computed.display,
        visibility: computed.visibility
      };
    });
    
    console.log('First card styles:', style);
  });

  test('cards should remain visible after scroll', async ({ page }) => {
    // Scroll to methodology section
    await page.locator('#methodology').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1000);
    
    const firstCard = page.locator('#methodology .service-card').nth(0);
    
    // Take initial screenshot
    const beforeScroll = await firstCard.boundingBox();
    console.log('Before scroll - Visible:', beforeScroll !== null);
    
    // Scroll down
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(500);
    
    // Check if still visible
    const afterScroll = await firstCard.boundingBox();
    console.log('After scroll down - Visible:', afterScroll !== null);
    await expect(firstCard).toBeVisible();
    
    // Scroll back up
    await page.evaluate(() => window.scrollBy(0, -500));
    await page.waitForTimeout(500);
    
    // Check visibility on scroll back
    const afterScrollUp = await firstCard.boundingBox();
    console.log('After scroll up - Visible:', afterScrollUp !== null);
    await expect(firstCard).toBeVisible();
  });

  test('cards should have proper computed styles', async ({ page }) => {
    await page.locator('#methodology').scrollIntoViewIfNeeded();
    await page.waitForTimeout(1500); // Wait for animations
    
    const cards = page.locator('#methodology .service-card');
    
    for (let i = 0; i < 3; i++) {
      const card = cards.nth(i);
      const computed = await card.evaluate(el => {
        const rect = el.getBoundingClientRect();
        const style = window.getComputedStyle(el);
        return {
          opacity: style.opacity,
          visibility: style.visibility,
          display: style.display,
          top: rect.top,
          height: rect.height,
          inViewport: rect.top >= 0 && rect.top <= window.innerHeight
        };
      });
      
      console.log(`Card ${i + 1} computed:`, computed);
      
      // Verify card is not hidden by animation
      expect(computed.opacity).not.toBe('0');
      expect(computed.visibility).not.toBe('hidden');
      expect(computed.display).not.toBe('none');
    }
  });
});
