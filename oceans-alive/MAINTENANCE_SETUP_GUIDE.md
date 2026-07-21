# 🌊 GoDaddy Maintenance Page Setup Guide

## Step-by-Step Instructions

### Option 1: Using .htaccess (RECOMMENDED - Easy to enable/disable)

#### Step 1: Upload the maintenance.html file
1. Log into your **GoDaddy cPanel**
2. Click on **File Manager**
3. Navigate to **public_html** (or your website's root directory)
4. Click **Upload** button
5. Upload the `maintenance.html` file from your computer
6. Make sure it's in the root directory (same level as index.html)

#### Step 2: Create or Edit .htaccess file
1. In File Manager, check if you have a `.htaccess` file in your root directory
2. If you DON'T have one:
   - Click **+ File** button
   - Name it `.htaccess` (with the dot)
   - Click **Create New File**
3. If you DO have one:
   - Right-click on `.htaccess`
   - Select **Edit**

#### Step 3: Add this code to .htaccess

```apache
# MAINTENANCE MODE - ENABLE/DISABLE HERE
# To ENABLE maintenance: Remove the # before RewriteEngine and RewriteCond lines
# To DISABLE maintenance: Add # before those lines again

RewriteEngine On
RewriteCond %{REQUEST_URI} !^/maintenance\.html$
RewriteCond %{REMOTE_ADDR} !^123\.456\.789\.012$
RewriteRule ^(.*)$ /maintenance.html [R=302,L]

# Replace 123.456.789.012 with YOUR IP address to access the site during maintenance
# Find your IP at: https://whatismyipaddress.com/
```

#### Step 4: Save the file
- Click **Save Changes**
- Close the editor

#### Step 5: Test it
- Open your website in a browser (use incognito mode)
- You should see the maintenance page!

---

### Option 2: Using index.html Replacement (SIMPLE but requires renaming)

#### Step 1: Backup your current index.html
1. In **File Manager**, find your current `index.html`
2. Right-click → **Rename**
3. Rename it to `index_backup.html`

#### Step 2: Upload maintenance.html
1. Upload `maintenance.html` to the root directory
2. Right-click on `maintenance.html`
3. Select **Rename**
4. Rename it to `index.html`

#### Step 3: Test
- Visit your website - you should see the maintenance page

#### To Restore Your Site:
1. Delete or rename the maintenance `index.html`
2. Rename `index_backup.html` back to `index.html`

---

### Option 3: Using PHP (If you have PHP hosting)

#### Step 1: Create maintenance.php
1. Upload `maintenance.html` to root directory
2. Create a new file called `maintenance_check.php` with this code:

```php
<?php
// Set to TRUE to enable maintenance mode
$maintenance_mode = true;

// Your IP address - you can access site during maintenance
$allowed_ips = array('123.456.789.012'); // Replace with your IP

if ($maintenance_mode && !in_array($_SERVER['REMOTE_ADDR'], $allowed_ips)) {
    include('maintenance.html');
    exit();
}
?>
```

#### Step 2: Add to your index.php (or index.html if renamed to .php)
Add this line at the very top:
```php
<?php include('maintenance_check.php'); ?>
```

---

## 🎨 Customizing the Maintenance Page

### Add Your Actual Logo
Replace the SVG logo placeholder in `maintenance.html` with your real logo:

```html
<!-- Find this line around line 232 -->
<img src="https://yourdomain.com/path/to/logo.png" alt="Oceans Alive Foundation" class="logo">
```

### Change Colors
The main color is defined as `#2EBFD1` (ocean turquoise)
- Search for `#2EBFD1` in the file and replace with your brand color

### Update Social Media Links
Around line 260-270, update these links:
```html
<a href="https://www.facebook.com/YOUR_PAGE" target="_blank" title="Facebook">
<a href="https://twitter.com/YOUR_HANDLE" target="_blank" title="Twitter">
<a href="https://www.instagram.com/YOUR_HANDLE" target="_blank" title="Instagram">
```

---

## ⚡ Quick Enable/Disable (Using .htaccess method)

### To ENABLE Maintenance Mode:
1. Open `.htaccess` in File Manager
2. Make sure these lines are ACTIVE (no # at the start):
```apache
RewriteEngine On
RewriteCond %{REQUEST_URI} !^/maintenance\.html$
RewriteRule ^(.*)$ /maintenance.html [R=302,L]
```

### To DISABLE Maintenance Mode:
1. Open `.htaccess`
2. Add `#` at the start of those lines:
```apache
# RewriteEngine On
# RewriteCond %{REQUEST_URI} !^/maintenance\.html$
# RewriteRule ^(.*)$ /maintenance.html [R=302,L]
```

---

## 🔧 Troubleshooting

### Problem: Can't see .htaccess file
**Solution:** In File Manager, click **Settings** (top right) → Check "Show Hidden Files (dotfiles)"

### Problem: .htaccess changes don't work
**Solution:** Clear your browser cache or use Incognito/Private mode

### Problem: 500 Internal Server Error
**Solution:** Check your .htaccess syntax - remove the maintenance code and try again

### Problem: Want to access site during maintenance
**Solution:** 
1. Find your IP address at https://whatismyipaddress.com/
2. In .htaccess, change this line:
   ```apache
   RewriteCond %{REMOTE_ADDR} !^123\.456\.789\.012$
   ```
   Replace `123.456.789.012` with your actual IP (use backslashes before dots)

---

## 📍 File Locations

```
public_html/
├── .htaccess                    ← Add maintenance redirect here
├── maintenance.html             ← The maintenance page
├── index.html                   ← Your main site (leave as is)
└── (all your other files)
```

---

## ✅ Recommended Method

**Use Option 1 (.htaccess method)** because:
- ✅ Easy to enable/disable by editing one file
- ✅ Keeps your original site intact
- ✅ You can allow your IP to bypass maintenance
- ✅ Professional and clean
- ✅ Uses 302 redirect (temporary) - good for SEO

---

## 🎯 Final Checklist

- [ ] Upload `maintenance.html` to public_html
- [ ] Create/edit `.htaccess` file
- [ ] Add maintenance redirect code
- [ ] Replace placeholder logo with your real logo
- [ ] Update contact email and phone number
- [ ] Update social media links
- [ ] Test in incognito browser
- [ ] Save original .htaccess as backup

---

**Need Help?** Contact your hosting support or reach out to your developer!
