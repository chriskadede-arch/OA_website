# 💻 OPTION 2: INSTALL NODE.JS & RUN LOCALLY

## Run Your Website on Your Computer

### What You'll Need
- 5 minutes
- About 500MB disk space
- Your computer

---

## Step 1: Install Node.js

### Windows Installation (Easy!)

1. Go to **https://nodejs.org/**
2. Click the big green button: **"Download LTS"** (LTS = Long Term Support)
   - This downloads Node.js 20.x
3. Click the downloaded file to install
4. Click through the installation:
   - ✅ "I accept the agreement"
   - **Next** → **Next** → **Next** → **Finish**
5. **Done!** Node.js is installed

### Verify Installation

1. Open **Command Prompt** or **PowerShell**
   - Press `Windows Key + R`
   - Type `cmd` and press Enter
2. Type this command:
   ```bash
   node --version
   ```
3. You should see: `v20.x.x` or similar
4. Also check npm:
   ```bash
   npm --version
   ```
5. You should see: `10.x.x` or similar

✅ **If both show version numbers, you're ready!**

---

## Step 2: Navigate to Your Website Folder

1. Open **Command Prompt** or **PowerShell**
2. Type this command:
   ```bash
   cd "C:\Users\joel\OA APP\oceans-alive"
   ```
3. Press Enter
4. You should see: `C:\Users\joel\OA APP\oceans-alive>`

✅ **You're in the right folder!**

---

## Step 3: Install Dependencies

1. Type this command:
   ```bash
   npm install
   ```
2. Wait... this will take 2-3 minutes
3. You'll see lots of packages being installed
4. When done, you should see: **"added XXX packages"**

✅ **Dependencies installed!**

---

## Step 4: Create Environment File

1. In the same folder, create a file called `.env.local`
   - Right-click in folder
   - Select "New" → "Text Document"
   - Name it `.env.local`

2. Open it with Notepad and paste:
   ```
   NEXT_PUBLIC_SUPABASE_URL=http://demo
   NEXT_PUBLIC_SUPABASE_ANON_KEY=demo
   SUPABASE_SERVICE_KEY=demo
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_demo
   STRIPE_SECRET_KEY=sk_test_demo
   STRIPE_WEBHOOK_SECRET=whsec_demo
   MAILCHIMP_API_KEY=demo
   MAILCHIMP_SERVER_PREFIX=us1
   MAILCHIMP_LIST_ID=demo
   NEXT_PUBLIC_GA_MEASUREMENT_ID=G-DEMO
   ```

3. Save the file
4. This allows the website to run with dummy data

✅ **Environment configured!**

---

## Step 5: Start the Website

1. In Command Prompt, type:
   ```bash
   npm run dev
   ```

2. Wait a few seconds...

3. You should see:
   ```
   ▲ Next.js 14.0.0
   - Local:        http://localhost:3000
   - Environments: .env.local
   ```

✅ **Your website is running!**

---

## Step 6: View in Browser

1. Open your web browser
2. Go to: **http://localhost:3000**
3. 🎉 **You're looking at your website!**

---

## What You'll See

### Homepage Features:
✅ Ocean blue navigation bar with animate "Donate" button
✅ Hero section: "Community-Led Marine Conservation"
✅ Impact statistics (500+ hectares, 2,500+ students, 1,200+ community members, 40% fish biomass growth)
✅ Featured resources section with 3 cards:
  - Impact Stories (Blog)
  - Resources & Toolkits
  - Photo & Video Gallery
✅ Newsletter signup section
✅ Get Involved section with 3 cards (Learn, Support, Engage)
✅ Beautiful footer with social links

### Navigation Menu:
- Home
- About Us
- Blog
- Resources
- Gallery
- Donate
- Contact

### Fully Functional Pages:
- ✅ `/about` - About OAF
- ✅ `/blog` - Blog listing (empty, ready for content)
- ✅ `/resources` - Resources library (empty, ready)
- ✅ `/gallery` - Gallery (empty, ready)
- ✅ `/donate` - Donation page with Stripe button
- ✅ `/contact` - Contact form
- ✅ `/admin` - Admin dashboard (shows stats)

### Design:
- Brand colors: Midnight Blue, Turquoise, Seafoam Green
- Professional layout
- Mobile responsive
- Smooth animations

---

## Explore the Website

Try clicking on:
- **Navbar links** - Navigate to different pages
- **"Explore Our Work"** button - Goes to blog
- **"Learn More"** button - Goes to about
- **Cards in featured section** - Navigate to resources
- **"Get In Touch"** button - Contact form
- **"Donate Now"** button - Donation page
- **Social links in footer** - External links

---

## Make Changes & See Them Live

Want to edit something?

1. Open any `.tsx` file in `app/` folder
2. Edit the text
3. Save the file
4. Website automatically updates in browser! (Hot reload)

Try editing `app/page.tsx` line 20 to see it refresh instantly.

---

## Stop the Website

When done, in Command Prompt:
1. Press `Ctrl + C`
2. Type `Y` and press Enter
3. Website stops

To restart: Type `npm run dev` again

---

## Troubleshooting

**"npm is not recognized"**
- Node.js wasn't installed properly
- Try restarting your computer
- Reinstall Node.js from nodejs.org

**"Port 3000 is already in use"**
- Another app is using port 3000
- Close the other app
- Or run: `npm run dev -- -p 3001`

**"Website won't load"**
- Check Command Prompt for errors
- Make sure `.env.local` file exists
- Try: `npm run dev` again

**"Ctrl+C doesn't stop it"**
- Click the X button on Command Prompt window
- Or open new Command Prompt

---

## What's Running?

When you run `npm run dev`:
- **Next.js server** starts on http://localhost:3000
- **Auto-reload** enabled (edits refresh instantly)
- **API routes** available at http://localhost:3000/api/*
- **Database** not connected yet (that's for Step 3 in setup)

---

## Next Steps

1. **Explore the website** - Click around, see the pages
2. **Edit some text** - Make changes and see them update
3. **Look at the code** - Open files in VS Code to understand the structure
4. **Set up Supabase** - When you're ready (see SETUP.md)
5. **Deploy to Vercel** - When you want it live (see OPTION_1)

---

**Status**: ✅ Website running locally at http://localhost:3000!

### Tips:
- Press `Ctrl + Shift + I` in browser to see page structure
- Press `F12` for Developer Tools
- Keep Command Prompt window visible to see any errors
- Website updates instantly when you save file changes
