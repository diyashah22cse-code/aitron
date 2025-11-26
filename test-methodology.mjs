import { chromium } from '@playwright/test';

async function testMethodologyCards() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Opening http://localhost:3000...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    console.log('Scrolling to methodology section...');
    await page.locator('#methodology').scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000); // Wait for animations
    
    console.log('\n--- CHECKING CARD VISIBILITY ---');
    
    // Get all cards
    const cardCount = await page.locator('#methodology .service-card').count();
    console.log(`Found ${cardCount} cards`);
    
    // Check each card
    for (let i = 0; i < cardCount; i++) {
      const card = page.locator('#methodology .service-card').nth(i);
      
      const isVisible = await card.isVisible();
      const boundingBox = await card.boundingBox();
      
      const computed = await card.evaluate(el => {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return {
          opacity: style.opacity,
          transform: style.transform,
          visibility: style.visibility,
          display: style.display,
          top: Math.round(rect.top),
          height: Math.round(rect.height),
          inViewport: rect.top >= 0 && rect.top <= window.innerHeight
        };
      });
      
      console.log(`\nCard ${i + 1}:`);
      console.log(`  isVisible(): ${isVisible}`);
      console.log(`  boundingBox: ${boundingBox ? 'exists' : 'null'}`);
      console.log(`  opacity: ${computed.opacity}`);
      console.log(`  transform: ${computed.transform}`);
      console.log(`  visibility: ${computed.visibility}`);
      console.log(`  display: ${computed.display}`);
      console.log(`  inViewport: ${computed.inViewport}`);
    }
    
    console.log('\n--- SCROLLING DOWN 500px ---');
    await page.evaluate(() => window.scrollBy(0, 500));
    await page.waitForTimeout(1000);
    
    const firstCard = page.locator('#methodology .service-card').nth(0);
    const visibleAfterScroll = await firstCard.isVisible();
    console.log(`First card visible after scroll: ${visibleAfterScroll}`);
    
    const computedAfter = await firstCard.evaluate(el => {
      const style = window.getComputedStyle(el);
      return {
        opacity: style.opacity,
        transform: style.transform
      };
    });
    console.log(`Opacity: ${computedAfter.opacity}, Transform: ${computedAfter.transform}`);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

testMethodologyCards();
