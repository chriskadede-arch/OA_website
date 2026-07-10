import { execSync } from 'child_process';
import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = join(root, 'out');
const uploadDir = join(root, 'godaddy-upload');

console.log('Building static site for GoDaddy (root domain, no subpath)...');

execSync('npx next build', {
  cwd: root,
  env: {
    ...process.env,
    NEXT_STATIC_EXPORT: '1',
    LOCAL_BUILD: '1',
    NEXT_PUBLIC_USE_PHP_FORMS: '1',
  },
  stdio: 'inherit',
});

if (!existsSync(outDir)) {
  console.error('Build failed: out/ folder was not created.');
  process.exit(1);
}

if (existsSync(uploadDir)) {
  rmSync(uploadDir, { recursive: true, force: true });
}

mkdirSync(uploadDir, { recursive: true });
cpSync(outDir, uploadDir, { recursive: true });

writeFileSync(
  join(uploadDir, 'UPLOAD-INSTRUCTIONS.txt'),
  `OCEANS ALIVE — GODADDY UPLOAD INSTRUCTIONS
============================================

Upload EVERYTHING in this folder to your GoDaddy public_html directory.

Steps:
1. Log in to GoDaddy → My Products → Web Hosting → Manage
2. Open File Manager (or connect with FTP/SFTP)
3. Open the public_html folder (or your domain's web root)
4. Delete old website files if replacing an existing site
   (keep cgi-bin and any email folders)
5. Upload ALL files and folders from this godaddy-upload folder
   including: index.html, .htaccess, _next/, images/, about/, blog/, etc.
6. Wait a few minutes, then visit your domain in a browser

Important:
- Upload the CONTENTS of this folder, not the folder itself
- Do not skip hidden files — .htaccess is required for routing
- Upload the api/ folder too — contact, donate, and newsletter forms use PHP mail
- Form submissions are emailed to info@oceansalivekenya.org and des@oceansalivekenya.org

To rebuild after changes, run from the oceans-alive folder:
  npm run build:godaddy
`,
  'utf8',
);

console.log('');
console.log('GoDaddy upload package ready: oceans-alive/godaddy-upload/');
console.log('Upload everything inside that folder to public_html on GoDaddy.');
