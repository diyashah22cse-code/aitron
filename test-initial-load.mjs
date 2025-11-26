import { chromium } from '@playwright/test';

async function testInitialLoad() {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();

  try {
    console.log('Opening http://localhost:3000 without scrolling...');
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
    
    // Wait for page to fully load
    await page.waitForTimeout(3000);
    
    console.log('\n--- CHECKING CARDS ON INITIAL LOAD (WITHOUT SCROLLING) ---');
    
    const cardCount = await page.locator('#methodology .service-card').count();
    console.log(`Found ${cardCount} cards`);
    
    if (cardCount > 0) {
      // Cards exist in DOM but might not be in viewport
      for (let i = 0; i < cardCount; i++) {
        const card = page.locator('#methodology .service-card').nth(i);
        const computed = await card.evaluate(el => {
          const style = window.getComputedStyle(el);
          const rect = el.getBoundingClientRect();
          return {
            opacity: style.opacity,
            transform: style.transform,
            visibility: style.visibility,
            inViewport: rect.top >= 0 && rect.top <= window.innerHeight,
            top: Math.round(rect.top)
          };
        });
        
        console.log(`Card ${i + 1}: inViewport=${computed.inViewport}, opacity=${computed.opacity}, transform=${computed.transform}`);
      }
    }
    
    console.log('\n--- NOW SCROLLING TO METHODOLOGY SECTION ---');
    await page.locator('#methodology').scrollIntoViewIfNeeded();
    await page.waitForTimeout(2000);
    
    console.log('\n--- CHECKING CARDS AFTER SCROLL INTO VIEW ---');
    for (let i = 0; i < cardCount; i++) {
      const card = page.locator('#methodology .service-card').nth(i);
      const computed = await card.evaluate(el => {
        const style = window.getComputedStyle(el);
        const rect = el.getBoundingClientRect();
        return {
          opacity: style.opacity,
          transform: style.transform,
          visibility: style.visibility,
          inViewport: rect.top >= 0 && rect.top <= window.innerHeight,
          top: Math.round(rect.top),
          isVisible: style.visibility !== 'hidden' && style.opacity !== '0' && style.display !== 'none'
        };
      });
      
      console.log(`Card ${i + 1}: visible=${computed.isVisible}, opacity=${computed.opacity}`);
    }
    
    // Take screenshot
    await page.screenshot({ path: 'methodology-screenshot.png' });
    console.log('\nScreenshot saved: methodology-screenshot.png');
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await browser.close();
  }
}

testInitialLoad();
