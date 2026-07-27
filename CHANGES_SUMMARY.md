# Website Updates Summary

## Date: July 27, 2026

### Changes Made:

## 1. Team Page Reorganization

**Team member order updated:**
- Moved **Ledama Masidza** to the **last position** (#22)
- Moved **Chris Adede** to position **#11** (directly after Katana Ngala)

**New team order:**
1. Ali Kaka
2. Des Bowden
3. Tilda Bowden
4. Remmy Safari
5. Dickson Juma
6. John Dominic
7. Lionel D Murage
8. Sarah Sidi
9. Alice Mwakulilah
10. Katana Ngala
11. **Chris Adede** (moved here from #16)
12. Roseline Kibogo
13. Teddy Katono
14. Cameron Bowden
15. Patrick Kyengo
16. Julius Kitela
17. Joel Nyanje
18. Nancy Ogega
19. Shadrack
20. Eunice
21. Joseph Muturi
22. **Ledama Masidza** (moved here from #14)

---

## 2. Homepage - Strategic Objectives Section

**Replaced:** "5 Interlocking Programs" 
**With:** "4 Strategic Objectives"

### The 4 Strategic Objectives Cards:

#### 1. **Strengthen Coastal Environmental Education and Awareness**
- **Linked to:** Learning & Leadership programme
- **Description:** Using Kuruwitu as a living classroom, we provide hands-on ocean literacy to 10,000+ learners—students, interns, and communities—building the next generation of ocean stewards.
- **Tags:** Learning & Leadership, Living Classroom, Project REEL
- **Image:** kids.jpg
- **Color Theme:** Green gradient

#### 2. **Promote Long-term Integrity of Coastal/Marine Ecosystems and Community Livelihoods**
- **Linked to:** Ocean Recovery programme
- **Description:** Transforming fishers into reef stewards across 120 km² under co-management. With 25,000+ corals restored and 400% fish biomass increase, we're proving community-led conservation works.
- **Tags:** Ocean Recovery, Coral Restoration, BMU Network
- **Image:** divers.jpg
- **Color Theme:** Ocean midnight blue gradient

#### 3. **Promote Food Security and Diversification of Income**
- **Linked to:** Social Health Environment (SHE) programme
- **Description:** Integrating land-based prosperity with marine health. 735+ women lead livelihoods, 600+ households practice climate-smart permaculture, and circular economy programmes reduce fishing pressure.
- **Tags:** SHE Initiative, Trash4Cash, Kitchen Gardens
- **Image:** trashforcash.jpg
- **Color Theme:** Pink gradient

#### 4. **Strengthen OA Institutional Capacity**
- **Linked to:** Research & Innovation programme
- **Description:** As a professional, community-linked intermediary, we provide technical expertise, audit-ready metrics, and multi-fund coordination—delivering the evidence and infrastructure needed for scalable impact.
- **Tags:** Research & Innovation, M&E Systems, Strategic Partnerships
- **Image:** oceansmen.jpg
- **Color Theme:** Cyan gradient

---

## Design Improvements

### Strategic Objectives Cards:
- **Layout:** 2-column grid (responsive on mobile)
- **Card height:** Increased to 320px (from 220px) for better content display
- **Enhanced features:**
  - Category badge at top-left with backdrop blur
  - Large number badge (01-04) at top-right
  - Full strategic objective title (not shortened)
  - Detailed description with actual metrics
  - 3 programme tags per card
  - Improved hover effects with translation animation
  - Better gradient overlays for text readability
  - Rounded corners (rounded-2xl) with subtle borders

### Visual Enhancements:
- More professional, strategic presentation
- Clear connection between objectives and programmes
- Better use of vertical space
- Stronger visual hierarchy
- More informative content (includes actual impact metrics)

---

## Files Modified:

1. **oceans-alive/lib/constants.ts**
   - Reordered TEAM_MEMBERS array

2. **oceans-alive/app/page.tsx**
   - Changed section heading from "Interlocking Programs" to "Our Strategic Objectives"
   - Reduced from 5 cards to 4 cards
   - Completely redesigned card layout and content
   - Updated link text from "View all 5 programs" to "Explore our programmes"

3. **Generated HTML files:**
   - about/team/index.html (team order updated)
   - index.html (strategic objectives updated)
   - All related static assets and build files

---

## Strategic Mapping:

The 4 strategic objectives map to Oceans Alive's core programmes as follows:

1. **Education & Awareness** → Learning & Leadership + Ocean Education + Project REEL
2. **Marine Ecosystem Integrity** → Ocean Recovery + Coral Restoration + Governance & Fisheries + BMU Network
3. **Food Security & Income** → SHE Initiative + Trash4Cash + Kitchen Gardens + LIFT Network
4. **Institutional Capacity** → Research & Innovation + M&E + Strategic Communications

The 5th programme (Governance & Fisheries) is integrated into Strategic Objective #2, as it directly supports marine ecosystem integrity through community-led co-management structures.

---

## Deployment Status:

✅ Team order updated
✅ Strategic objectives section created with 4 cards
✅ Content is creative, detailed, and metric-driven
✅ Design is professional and engaging
✅ Production build completed with `/OA_website` basePath
✅ Ready for GoDaddy upload

## How to Upload to GoDaddy:

### Option 1: Using the godaddy-upload directory
1. Navigate to: `c:\Users\chris\Desktop\godaddy-upload`
2. Delete all old files in that directory
3. Copy all files from `c:\Users\chris\Desktop\oa_website\` (root directory) to `c:\Users\chris\Desktop\godaddy-upload\`
4. Use FileZilla to upload from godaddy-upload to your GoDaddy server

### Option 2: Direct upload
1. All production files are in the root: `c:\Users\chris\Desktop\oa_website\`
2. Upload the following to your GoDaddy `/public_html/OA_website/` folder:
   - All `.html` files
   - `_next/` folder
   - `images/` folder  
   - All other assets

### Verification:
After upload, visit your live site and verify:
- Homepage shows "Our Strategic Objectives" (not "Interlocking Programs")
- Team page has Ledama as last member (#22)
- Team page has Chris Adede at position #11 (after Katana)
- All 4 strategic objective cards display with proper content and metrics

### Files Ready for Upload:
All files in `c:\Users\chris\Desktop\oa_website\` (excluding the `oceans-alive/` source folder)
