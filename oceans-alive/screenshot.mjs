import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const scratchpad = 'C:\\Users\\chris\\AppData\\Local\\Temp\\claude\\c--Users-chris-Desktop-oa-website\\efd8c9a7-e387-4137-bab4-e3a21c4b3105\\scratchpad';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });

  const context = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });

  const page = await context.newPage();

  console.log('Navigating to localhost:3000...');
  try {
    await page.goto('http://localhost:3000', { waitUntil: 'networkidle', timeout: 30000 });
  } catch (e) {
    console.log('Warning:', e.message);
    await page.waitForTimeout(2000);
  }

  console.log('Taking screenshots...');

  // Full page screenshot
  await page.screenshot({
    path: join(scratchpad, 'homepage-full.png'),
    fullPage: true
  });
  console.log('✓ Saved: homepage-full.png');

  // Above-fold screenshot
  await page.screenshot({
    path: join(scratchpad, 'homepage-hero.png')
  });
  console.log('✓ Saved: homepage-hero.png');

  // Scroll to footer
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
  await page.waitForTimeout(500);

  await page.screenshot({
    path: join(scratchpad, 'homepage-footer.png')
  });
  console.log('✓ Saved: homepage-footer.png');

  await browser.close();
  console.log('Done! Screenshots saved to scratchpad directory');
})();
