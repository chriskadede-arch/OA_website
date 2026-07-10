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

  // Test localhost:3000 (dev server)
  console.log('\nTesting DEV server (localhost:3000)...');
  const page3000 = await context.newPage();

  try {
    await page3000.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page3000.waitForTimeout(3000);

    await page3000.screenshot({
      path: join(scratchpad, 'dev-port-3000-hero.png')
    });
    console.log('✓ Saved: dev-port-3000-hero.png');

    // Scroll to footer
    await page3000.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page3000.waitForTimeout(1000);

    const footer3000 = await page3000.$('footer');
    if (footer3000) {
      await footer3000.screenshot({
        path: join(scratchpad, 'dev-port-3000-footer.png')
      });
      console.log('✓ Saved: dev-port-3000-footer.png');
    }

    console.log('✅ DEV server (port 3000) is working!');
  } catch (e) {
    console.log('❌ DEV server (port 3000) ERROR:', e.message);
  }

  await page3000.close();

  // Test localhost:8080 (static server)
  console.log('\nTesting STATIC server (localhost:8080)...');
  const page8080 = await context.newPage();

  try {
    await page8080.goto('http://localhost:8080', { waitUntil: 'domcontentloaded', timeout: 15000 });
    await page8080.waitForTimeout(3000);

    await page8080.screenshot({
      path: join(scratchpad, 'static-port-8080-hero.png')
    });
    console.log('✓ Saved: static-port-8080-hero.png');

    // Scroll to footer
    await page8080.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page8080.waitForTimeout(1000);

    const footer8080 = await page8080.$('footer');
    if (footer8080) {
      await footer8080.screenshot({
        path: join(scratchpad, 'static-port-8080-footer.png')
      });
      console.log('✓ Saved: static-port-8080-footer.png');
    }

    console.log('✅ STATIC server (port 8080) is working!');
  } catch (e) {
    console.log('❌ STATIC server (port 8080) ERROR:', e.message);
  }

  await page8080.close();

  await browser.close();
  console.log('\n✅ Both servers tested successfully!');
})();
