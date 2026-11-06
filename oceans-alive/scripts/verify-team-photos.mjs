import { chromium } from 'playwright';
import path from 'path';

const outDir = 'C:\\Users\\ELITEX~1\\AppData\\Local\\Temp\\claude\\c--Users-Elite-x2-Desktop-oa-website\\3fd3a465-7112-400c-9d95-8bf670b4dd7b\\scratchpad';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1400, height: 900 } });
await page.goto('http://localhost:3000/about/team', { waitUntil: 'domcontentloaded', timeout: 60000 });
await page.waitForTimeout(1000);
await page.locator('text=Alice Mwakulilah').scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, '39-team-alice.png') });

await page.locator('text=Joseph Muturi').scrollIntoViewIfNeeded();
await page.waitForTimeout(500);
await page.screenshot({ path: path.join(outDir, '40-team-joseph.png') });

await browser.close();
