import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const scratchpad = 'C:\\Users\\chris\\AppData\\Local\\Temp\\claude\\c--Users-chris-Desktop-oa-website\\efd8c9a7-e387-4137-bab4-e3a21c4b3105\\scratchpad';

(async () => {
  console.log('Launching browser...');
  const browser = await chromium.launch({ headless: true });

  // Desktop screenshots
  const desktopContext = await browser.newContext({
    viewport: { width: 1920, height: 1080 }
  });
  const desktopPage = await desktopContext.newPage();

  console.log('Taking desktop screenshots...');
  await desktopPage.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await desktopPage.waitForTimeout(2000);

  // Search expanded
  await desktopPage.click('button:has-text("Search")');
  await desktopPage.waitForTimeout(500);
  await desktopPage.screenshot({
    path: join(scratchpad, 'navbar-search-expanded.png'),
    clip: { x: 0, y: 0, width: 1920, height: 250 }
  });
  console.log('✓ Saved: navbar-search-expanded.png');

  await desktopContext.close();

  // Mobile screenshots
  const mobileContext = await browser.newContext({
    viewport: { width: 375, height: 812 }
  });
  const mobilePage = await mobileContext.newPage();

  console.log('Taking mobile screenshots...');
  await mobilePage.goto('http://localhost:3000', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await mobilePage.waitForTimeout(2000);

  // Mobile menu closed
  await mobilePage.screenshot({
    path: join(scratchpad, 'navbar-mobile-closed.png'),
    clip: { x: 0, y: 0, width: 375, height: 400 }
  });
  console.log('✓ Saved: navbar-mobile-closed.png');

  // Mobile menu open with expanded logo
  await mobilePage.click('button[aria-label="Toggle menu"]');
  await mobilePage.waitForTimeout(500);
  await mobilePage.screenshot({
    path: join(scratchpad, 'navbar-mobile-open.png'),
    clip: { x: 0, y: 0, width: 375, height: 600 }
  });
  console.log('✓ Saved: navbar-mobile-open.png');

  await mobileContext.close();
  await browser.close();
  console.log('Done!');
})();
