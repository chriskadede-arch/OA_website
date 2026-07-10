# Partner Logo Management System

## Overview
This system automatically fetches and displays partner logos using multiple fallback strategies.

## Logo Sources (Priority Order)

### 1. **Local Uploads** (Highest Priority)
- Store logos in: `/public/images/partners/`
- Supported formats: PNG, JPG, SVG
- Recommended size: 400x200px (2:1 ratio)
- Usage: Add `logoPath: '/images/partners/partner-name.png'` to partner data

### 2. **Clearbit Logo API** (Automatic)
- **Service**: https://logo.clearbit.com/
- **Cost**: FREE - No API key required
- **Usage**: Add `domain: 'example.com'` to partner data
- **Example**: `domain: 'coral guardian.org'` → Auto-fetches logo
- **Quality**: High-quality, up-to-date brand logos
- **Coverage**: Excellent for:
  - Tech companies
  - Well-known brands
  - Companies with websites
  - International organizations

### 3. **Initials Fallback** (Automatic)
- Automatically generated if no logo found
- Uses first 2 letters of organization name
- Styled with gradient background matching category color

## How to Add Partner Logos

### Method 1: Use Clearbit (Easiest)
```typescript
{
  name: 'Coral Guardian',
  domain: 'coralguardian.org', // Just add this!
  category: 'donor',
}
```

### Method 2: Upload Local Logo
1. Save logo to `/public/images/partners/coral-guardian.png`
2. Add path to partner data:
```typescript
{
  name: 'Coral Guardian',
  logoPath: '/images/partners/coral-guardian.png',
  category: 'donor',
}
```

### Method 3: Let It Fallback to Initials
- No action needed
- System automatically shows "CG" for "Coral Guardian"

## Logo Optimization Tips

### For Local Logos:
- **Format**: PNG with transparent background (preferred)
- **Size**: 400x200px @ 72dpi
- **File size**: < 50KB (use TinyPNG.com to compress)
- **Color**: Full color (component handles grayscale filter)

### Finding Organization Domains:
Most organizations have official websites:
- Coral Guardian → coralguardian.org
- Blue Ventures → blueventures.org
- Canon → canon.com
- UNDP → undp.org

## Component Usage

```tsx
import PartnerLogo from '@/components/common/PartnerLogo';

<PartnerLogo
  name="Coral Guardian"
  domain="coralguardian.org"
  size="md" // 'sm' | 'md' | 'lg'
/>
```

## Current Implementation Status

### ✅ Logos Available (via Clearbit):
- Coral Guardian (coralguardian.org)
- Blue Ventures (blueventures.org)
- Canon (canon.com)
- Coral Reef Care (coralreefcare.com)
- Pelorus (pelorus.com)
- Vipingo Ridge (vipingoridge.com)

### 🔄 Needs Local Upload:
- County Government of Kilifi
- County Government of Mombasa
- Kenya Fisheries Service
- Government logos (not available via Clearbit)

### ⚡ Using Initials Fallback:
- Kuruwitu Beach Management Unit
- Community-based organizations
- Local supporters without websites

## Alternative Logo APIs (Future)

If Clearbit doesn't work for specific partners:

1. **Brandfetch API**: https://brandfetch.com/api
   - More comprehensive
   - Requires free API key
   - 1,000 requests/month free

2. **Logo.dev**: https://logo.dev
   - Alternative to Clearbit
   - Similar free tier

3. **Google Favicon Service**: 
   ```
   https://www.google.com/s2/favicons?domain=example.com&sz=128
   ```
   - Lower quality
   - Good fallback

## Troubleshooting

**Logo not showing?**
1. Check browser console for errors
2. Verify domain is correct (try in browser: https://logo.clearbit.com/yourHYPERLINK)
3. Try alternative domain (www. vs non-www)
4. Upload local logo as fallback

**Logo too small/blurry?**
- Upload higher resolution local logo
- Clearbit provides 128x128px by default
- For print quality, use local uploads

## Examples

```typescript
// Government partner (local logo)
{ 
  name: 'Kenya Fisheries Service',
  logoPath: '/images/partners/kefs.png',
  category: 'government'
}

// International donor (Clearbit)
{
  name: 'Blue Ventures',
  domain: 'blueventures.org',
  category: 'donor'
}

// Community partner (initials fallback)
{
  name: 'Kuruwitu Beach Management Unit',
  category: 'community'
}
```
