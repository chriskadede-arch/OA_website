# 🌊 Oceans Alive - Website Maintenance Mode Guide

**Complete copy-paste codes for putting your website under maintenance**

---

## 📋 Quick Start Checklist

- [ ] Copy **maintenance.html** code below
- [ ] Copy **logo.png** to GoDaddy
- [ ] Copy **.htaccess** code below
- [ ] Test in incognito browser
- [ ] When done, disable maintenance mode

---

## 📄 FILE 1: maintenance.html

**Copy this ENTIRE code and save as `maintenance.html`**

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Under Maintenance - Oceans Alive Foundation</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background: linear-gradient(135deg, #0a2540 0%, #0e4a63 50%, #1a6b5a 100%);
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;
        }

        .bubble {
            position: absolute;
            bottom: -100px;
            width: 40px;
            height: 40px;
            background: rgba(46, 191, 209, 0.1);
            border-radius: 50%;
            opacity: 0.5;
            animation: rise 15s infinite ease-in;
        }

        .bubble:nth-child(1) {
            width: 40px;
            height: 40px;
            left: 10%;
            animation-duration: 8s;
        }

        .bubble:nth-child(2) {
            width: 20px;
            height: 20px;
            left: 20%;
            animation-duration: 5s;
            animation-delay: 1s;
        }

        .bubble:nth-child(3) {
            width: 50px;
            height: 50px;
            left: 35%;
            animation-duration: 7s;
            animation-delay: 2s;
        }

        .bubble:nth-child(4) {
            width: 80px;
            height: 80px;
            left: 50%;
            animation-duration: 11s;
            animation-delay: 0s;
        }

        .bubble:nth-child(5) {
            width: 35px;
            height: 35px;
            left: 65%;
            animation-duration: 6s;
            animation-delay: 1s;
        }

        .bubble:nth-child(6) {
            width: 45px;
            height: 45px;
            left: 80%;
            animation-duration: 12s;
            animation-delay: 3s;
        }

        .bubble:nth-child(7) {
            width: 25px;
            height: 25px;
            left: 90%;
            animation-duration: 9s;
            animation-delay: 2s;
        }

        @keyframes rise {
            0% {
                bottom: -100px;
                transform: translateX(0);
            }
            50% {
                transform: translate(100px);
            }
            100% {
                bottom: 110vh;
                transform: translateX(-200px);
            }
        }

        .wave {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100px;
            background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'%3E%3Cpath d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z' fill='rgba(46,191,209,0.1)'/%3E%3C/svg%3E");
            background-size: cover;
            animation: wave 10s linear infinite;
        }

        .wave:nth-child(2) {
            bottom: 10px;
            opacity: 0.5;
            animation: wave 15s linear infinite;
        }

        @keyframes wave {
            0% {
                background-position-x: 0;
            }
            100% {
                background-position-x: 1200px;
            }
        }

        .container {
            text-align: center;
            padding: 20px;
            z-index: 10;
            max-width: 700px;
            margin: 0 auto;
        }

        .logo {
            width: 280px;
            height: auto;
            margin-bottom: 40px;
            filter: drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3));
            animation: float 3s ease-in-out infinite;
        }

        @keyframes float {
            0%, 100% {
                transform: translateY(0px);
            }
            50% {
                transform: translateY(-20px);
            }
        }

        h1 {
            color: #2EBFD1;
            font-size: 3rem;
            font-weight: 700;
            margin-bottom: 20px;
            letter-spacing: -0.02em;
            text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
        }

        .subtitle {
            color: rgba(255, 255, 255, 0.9);
            font-size: 1.5rem;
            font-weight: 600;
            margin-bottom: 30px;
        }

        p {
            color: rgba(255, 255, 255, 0.7);
            font-size: 1.1rem;
            line-height: 1.6;
            margin-bottom: 40px;
        }

        .spinner {
            display: inline-block;
            width: 50px;
            height: 50px;
            border: 4px solid rgba(46, 191, 209, 0.2);
            border-top-color: #2EBFD1;
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin-bottom: 30px;
        }

        @keyframes spin {
            to {
                transform: rotate(360deg);
            }
        }

        .contact-info {
            margin-top: 50px;
            padding-top: 30px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-info a {
            color: #2EBFD1;
            text-decoration: none;
            font-weight: 600;
            transition: color 0.3s ease;
        }

        .contact-info a:hover {
            color: #ffffff;
        }

        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
        }

        .social-links a {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 45px;
            height: 45px;
            background: rgba(46, 191, 209, 0.1);
            border-radius: 50%;
            border: 2px solid rgba(46, 191, 209, 0.3);
            transition: all 0.3s ease;
        }

        .social-links a:hover {
            background: #2EBFD1;
            border-color: #2EBFD1;
            transform: translateY(-5px);
        }

        @media (max-width: 768px) {
            .logo {
                width: 200px;
                margin-bottom: 30px;
            }

            h1 {
                font-size: 2rem;
            }

            .subtitle {
                font-size: 1.2rem;
            }

            p {
                font-size: 1rem;
            }
        }
    </style>
</head>
<body>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>

    <div class="wave"></div>
    <div class="wave"></div>

    <div class="container">
        <img src="logo.png" alt="Oceans Alive Foundation" class="logo" onerror="this.style.display='none'; this.nextElementSibling.style.display='block';">
        <div style="display:none; color: #2EBFD1; font-size: 2.5rem; font-weight: 700; letter-spacing: 0.3rem; margin-bottom: 40px;">OCEANS ALIVE</div>

        <div class="spinner"></div>

        <h1>Under Maintenance</h1>

        <p class="subtitle">We're Making Waves of Improvement</p>

        <p>
            Our website is currently undergoing scheduled maintenance to bring you an enhanced experience.
            We're working hard to restore ocean conservation, protect marine ecosystems,
            and keep our digital presence as vibrant as Kenya's coastal waters.
        </p>

        <p style="font-size: 0.95rem; color: rgba(255,255,255,0.6);">
            Expected to be back online soon<br>
            Thank you for your patience
        </p>

        <div class="contact-info">
            <p style="margin-bottom: 15px;">For urgent inquiries, please contact us:</p>
            <p>
                Email: <a href="mailto:info@oceansalivekenya.org">info@oceansalivekenya.org</a><br>
                Phone: <a href="tel:+254732807935">+254 732 807 935</a>
            </p>

            <div class="social-links">
                <a href="https://www.facebook.com/oceansalivekenya" target="_blank" title="Facebook">
                    <svg width="20" height="20" fill="currentColor" style="color: #2EBFD1;">
                        <path d="M18 2h-3c-1.7 0-3 1.3-3 3v3H9v4h3v8h4v-8h3l1-4h-4V5c0-.6.4-1 1-1h3V2z"/>
                    </svg>
                </a>
                <a href="https://twitter.com/oceansaliveken" target="_blank" title="Twitter">
                    <svg width="20" height="20" fill="currentColor" style="color: #2EBFD1;">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                </a>
                <a href="https://www.instagram.com/oceansalivekenya" target="_blank" title="Instagram">
                    <svg width="20" height="20" fill="currentColor" style="color: #2EBFD1;">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
                    </svg>
                </a>
            </div>
        </div>
    </div>
</body>
</html>
```

---

## 📄 FILE 2: .htaccess (ENABLE MAINTENANCE MODE)

**Copy this code and add to your .htaccess file on GoDaddy**

```apache
# =====================================================
# MAINTENANCE MODE - OCEANS ALIVE
# =====================================================
# TO ENABLE: Keep these lines as they are (no # at start)
# TO DISABLE: Add # before each line below
# =====================================================

RewriteEngine On
RewriteCond %{REQUEST_URI} !^/maintenance\.html$
RewriteRule ^(.*)$ /maintenance.html [R=302,L]

# =====================================================
# Optional: Allow your IP to bypass maintenance
# Replace 123.456.789.012 with your actual IP address
# Find your IP at: https://whatismyipaddress.com/
# =====================================================
# RewriteCond %{REMOTE_ADDR} !^123\.456\.789\.012$
```

---

## 📄 FILE 3: .htaccess (DISABLE MAINTENANCE MODE)

**When you're done with maintenance, replace .htaccess content with this:**

```apache
# =====================================================
# MAINTENANCE MODE DISABLED
# =====================================================
# To re-enable maintenance, remove the # from lines below
# =====================================================

# RewriteEngine On
# RewriteCond %{REQUEST_URI} !^/maintenance\.html$
# RewriteRule ^(.*)$ /maintenance.html [R=302,L]
```

---

## 🎯 GODADDY UPLOAD INSTRUCTIONS

### Step 1: Login to GoDaddy
1. Go to **GoDaddy.com**
2. Click **Sign In**
3. Go to **My Products**
4. Click **Manage** next to your Web Hosting

### Step 2: Access File Manager
1. Click **cPanel Admin**
2. Under **Files** section, click **File Manager**
3. Navigate to **public_html** folder (this is your website root)

### Step 3: Upload Files
1. Click **Upload** button (top menu bar)
2. Upload these 2 files:
   - `maintenance.html` (copy the code from FILE 1 above)
   - `logo.png` (from your computer: Partners Logos/logo.png)
3. Both files should be in **public_html** root directory

### Step 4: Edit .htaccess File

**If .htaccess EXISTS:**
1. Right-click on `.htaccess` → **Edit**
2. **Paste the code from FILE 2** at the TOP of the file
3. Click **Save Changes**

**If .htaccess DOES NOT exist:**
1. Click **Settings** (top right) → Check "Show Hidden Files (dotfiles)" → **Save**
2. Click **+ File** button
3. Name it: `.htaccess`
4. Click **Create New File**
5. Right-click on `.htaccess` → **Edit**
6. **Paste the code from FILE 2**
7. Click **Save Changes**

### Step 5: Test Maintenance Mode
1. Open your website in **Incognito/Private browser**
2. You should see the ocean-themed maintenance page! 🌊

---

## ⚡ QUICK ENABLE/DISABLE

### ✅ TO ENABLE MAINTENANCE MODE:
Open `.htaccess` and make sure these lines have **NO #** at the start:
```apache
RewriteEngine On
RewriteCond %{REQUEST_URI} !^/maintenance\.html$
RewriteRule ^(.*)$ /maintenance.html [R=302,L]
```

### ❌ TO DISABLE MAINTENANCE MODE:
Open `.htaccess` and add **#** before each line:
```apache
# RewriteEngine On
# RewriteCond %{REQUEST_URI} !^/maintenance\.html$
# RewriteRule ^(.*)$ /maintenance.html [R=302,L]
```

**OR** just delete those 3 lines completely.

---

## 🔧 TROUBLESHOOTING

### Problem: Can't see .htaccess file
**Solution:** 
1. In File Manager, click **Settings** (top right)
2. Check "Show Hidden Files (dotfiles)"
3. Click **Save**

### Problem: Changes don't show
**Solution:** 
1. Clear browser cache
2. Use Incognito/Private mode
3. Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)

### Problem: 500 Internal Server Error
**Solution:** 
1. There's a syntax error in .htaccess
2. Delete the maintenance lines
3. Try pasting the code again carefully

### Problem: Logo doesn't show
**Solution:** 
1. Make sure `logo.png` is uploaded to **public_html** (same folder as maintenance.html)
2. Check the filename is exactly `logo.png` (lowercase)

### Problem: Want to access site during maintenance
**Solution:** 
1. Find your IP: https://whatismyipaddress.com/
2. In .htaccess, add this line after `RewriteEngine On`:
```apache
RewriteCond %{REMOTE_ADDR} !^123\.456\.789\.012$
```
Replace `123.456.789.012` with your IP (keep the backslashes before dots)

---

## 📁 FILE STRUCTURE ON GODADDY

```
public_html/
├── .htaccess              ← Maintenance redirect code here
├── maintenance.html       ← The maintenance page
├── logo.png              ← Oceans Alive logo
├── index.html            ← Your main website (untouched)
└── (all other files)
```

---

## ✅ CHECKLIST BEFORE GOING LIVE

- [ ] Uploaded `maintenance.html` to public_html
- [ ] Uploaded `logo.png` to public_html
- [ ] Created/edited `.htaccess` with maintenance code
- [ ] Tested in incognito browser
- [ ] Maintenance page displays correctly
- [ ] Logo shows properly
- [ ] Contact info is correct
- [ ] Know how to disable maintenance mode

---

## 💡 PRO TIPS

1. **Always test first** - Use incognito mode to see what visitors see
2. **Keep backups** - Save a copy of your .htaccess file before editing
3. **Short maintenance** - Don't leave maintenance mode on longer than needed
4. **Communicate** - Post on social media that you're doing maintenance
5. **Schedule wisely** - Do maintenance during low-traffic hours

---

## 📞 NEED HELP?

**Email:** info@oceansalivekenya.org  
**Phone:** +254 732 807 935

---

**Last Updated:** July 2026  
**Version:** 1.0  
**Maintained by:** Oceans Alive Foundation Web Team

---

## 🌊 End of Guide
