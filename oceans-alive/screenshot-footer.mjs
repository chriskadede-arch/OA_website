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
    await page.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  } catch (e) {
    console.log('Warning:', e.message);
  }

  await page.waitForTimeout(3000);

  // Scroll to absolute bottom
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.waitForTimeout(1000);

  // Take screenshot of footer area
  const footerElement = await page.$('footer');
  if (footerElement) {
    await footerElement.screenshot({
      path: join(scratchpad, 'footer-only.png')
    });
    console.log('✓ Saved: footer-only.png');
  }

  // Take viewport screenshot at bottom
  await page.screenshot({
    path: join(scratchpad, 'bottom-viewport.png')
  });
  console.log('✓ Saved: bottom-viewport.png');

  await browser.close();
  console.log('Done!');
})();
