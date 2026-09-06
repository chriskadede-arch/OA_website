"""
Targeted logo scraper - looks specifically in header/nav for logo images.
Avoids og:image and hero photos. Filters by aspect ratio and keywords.
"""
import os, re, requests
from PIL import Image
from io import BytesIO
from urllib.parse import urljoin
from html.parser import HTMLParser

FOLDER = r"C:\Users\chris\OneDrive\Documents\Inspiration\OA Logo Variations\Partner Logos"
MIN_SIZE = 500

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                  "(KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,image/*,*/*;q=0.9",
    "Accept-Language": "en-US,en;q=0.9",
}

SITES = {
    "The Conscious Travel Foundation": "https://www.theconscioustravelfoundation.com",
    "Coral Guardian":                  "https://www.coralguardian.org",
    "Coral Reef Care CRC":             "https://www.crc.world",
    "The Ocean Decade UN":             "https://oceandecade.org",
    "Oceans 5":                        "https://www.oceans5.org",
    "Seas4Life":                       "https://www.seas4life.com",
    "Ocean Sole Kenya":                "https://oceansole.com",
    "The Habitats Trust Kenya":        "https://www.thehabitatstrust.org",
    "Blue Ventures":                   "https://blueventures.org",
    "Saruni Basecamp":                 "https://www.saruni.com",
    "IFAW International Fund for Animal Welfare": "https://www.ifaw.org",
    "The Ocean Conservation Trust":    "https://oceanconservationtrust.org",
    "Fauna and Flora International":   "https://www.fauna-flora.org",
    "WCS Wildlife Conservation Society": "https://www.wcs.org",
    "IUCN":                            "https://www.iucn.org",
    "National Geographic":             "https://www.nationalgeographic.com",
    "DSTV":                            "https://www.dstv.com",
    "Aga Khan Academy":                "https://www.agakhanacademies.org",
    "Vipingo Ridge":                   "https://www.vipingoridge.com",
    "The Leap Gap Year":               "https://www.theleap.co.uk",
    "Downe House School":              "https://www.downehouse.net",
    "AFEW Giraffe Centre Kenya":       "https://www.giraffecenter.org",
    "Wildlife Direct":                 "https://wildlifedirect.org",
    "CORDIO East Africa":              "https://www.cordioea.net",
    "UNDP":                            "https://www.undp.org",
    "USAID":                           "https://www.usaid.gov",
    "Kenya Wildlife Service KWS":      "https://www.kws.go.ke",
    "Defra":                           "https://www.gov.uk/government/organisations/department-for-environment-food-rural-affairs",
}

def fetch_html(url):
    try:
        r = requests.get(url, headers=HEADERS, timeout=15, allow_redirects=True)
        return r.text if r.status_code == 200 else None
    except:
        return None

def is_logo_url(url):
    """True if URL path strongly suggests it's a logo file."""
    u = url.lower()
    logo_keywords = ["logo", "brand", "identity", "mark", "emblem", "icon", "crest", "badge"]
    bad_keywords  = ["banner", "hero", "header-bg", "background", "slider", "cover",
                     "photo", "image-", "img-", "stock", "unsplash", "pexels",
                     "avatar", "thumbnail", "thumb", "featured", "og-", "og_",
                     "social", "twitter", "facebook", "open-graph", "opengraph",
                     "wildlife", "elephant", "giraffe", "ocean-", "reef-", "coral-",
                     "safari", "landscape", "nature", "animal"]
    has_logo = any(k in u for k in logo_keywords)
    has_bad  = any(k in u for k in bad_keywords)
    return has_logo and not has_bad

def is_reasonable_logo_ratio(w, h):
    """Logos are rarely taller than wide by >2:1, or wider than >8:1."""
    if w == 0 or h == 0:
        return False
    ratio = w / h
    return 0.25 <= ratio <= 8.0

def is_reasonable_logo_size(w, h):
    """Reject clearly-too-large images (photos) and clearly-too-small (icons)."""
    return 40 <= w <= 3000 and 40 <= h <= 3000

def extract_logo_candidates(html, base_url):
    """
    Strategy (in priority order):
    1. img tags inside <header>, <nav>, with class/id containing 'logo'
    2. img tags anywhere with 'logo' in class, id, or alt
    3. img tags with 'logo' in their src URL
    4. SVG/PNG href inside <a class=...logo...> or <div class=...logo...>
    """
    candidates = []

    # --- Strategy 1 & 2: parse img tags with context ---
    # Find all img tags and score them
    img_pattern = re.compile(
        r'<img\b([^>]*?)>',
        re.I | re.S
    )

    def attr(tag_attrs, name):
        m = re.search(rf'{name}=["\']([^"\']*)["\']', tag_attrs, re.I)
        return m.group(1) if m else ""

    # Check if we're inside header/nav (simplified: look for context window)
    # Grab header/nav sections
    header_sections = re.findall(
        r'<(?:header|nav)\b[^>]*>(.*?)</(?:header|nav)>',
        html, re.I | re.S
    )
    header_html = " ".join(header_sections)

    for attrs_str in re.findall(r'<img\b([^>]*?)/?>', header_html, re.I | re.S):
        src = attr(attrs_str, "src")
        alt = attr(attrs_str, "alt")
        cls = attr(attrs_str, "class")
        iid = attr(attrs_str, "id")
        if src:
            score = 10  # in header = high priority
            if any(k in (cls+iid+alt+src).lower() for k in ["logo","brand","crest","mark"]):
                score += 5
            candidates.append((urljoin(base_url, src), score))

    # img tags anywhere with logo in class/id/alt
    for attrs_str in re.findall(r'<img\b([^>]*?)/?>', html, re.I | re.S):
        src = attr(attrs_str, "src")
        alt = attr(attrs_str, "alt")
        cls = attr(attrs_str, "class")
        iid = attr(attrs_str, "id")
        if not src:
            continue
        combined = (cls + iid + alt + src).lower()
        if any(k in combined for k in ["logo","brand-mark","brandmark","emblem","crest"]):
            score = 8 if is_logo_url(src) else 5
            candidates.append((urljoin(base_url, src), score))

    # Deduplicate keeping highest score
    seen = {}
    for url, score in candidates:
        if url not in seen or seen[url] < score:
            seen[url] = score

    return sorted(seen.items(), key=lambda x: -x[1])

def download_image(url):
    try:
        r = requests.get(url, headers=HEADERS, timeout=15, allow_redirects=True)
        if r.status_code != 200:
            return None
        ct = r.headers.get("Content-Type", "")
        if "svg" in ct or url.lower().split("?")[0].endswith(".svg"):
            return None
        if len(r.content) < 2000:
            return None
        img = Image.open(BytesIO(r.content))
        return img
    except:
        return None

def upscale(img):
    w, h = img.size
    longest = max(w, h)
    if longest < MIN_SIZE:
        scale = MIN_SIZE / longest
        img = img.resize((int(w*scale), int(h*scale)), Image.LANCZOS)
    return img

def current_pixels(name):
    path = os.path.join(FOLDER, f"{name}.png")
    if not os.path.exists(path):
        return 0
    try:
        img = Image.open(path)
        return img.width * img.height
    except:
        return 0

# ── MAIN ─────────────────────────────────────────────────────
print(f"\n{'='*65}")
print(f"  TARGETED LOGO SCRAPER")
print(f"{'='*65}\n")

improved = []
unchanged = []
failed = []

for name, site in SITES.items():
    print(f"-> {name}")
    out_path = os.path.join(FOLDER, f"{name}.png")
    cur_px = current_pixels(name)

    html = fetch_html(site)
    if not html:
        print(f"   [--] Could not reach site")
        failed.append(name)
        continue

    candidates = extract_logo_candidates(html, site)
    if not candidates:
        print(f"   [--] No logo candidates found")
        unchanged.append(name)
        continue

    best_img = None
    best_url = None
    best_px  = cur_px

    for url, score in candidates[:20]:
        img = download_image(url)
        if img is None:
            continue
        w, h = img.size
        if not is_reasonable_logo_ratio(w, h):
            continue
        if not is_reasonable_logo_size(w, h):
            continue
        px = w * h
        if px > best_px:
            best_img = img
            best_url = url
            best_px  = px

    if best_img is None:
        print(f"   [--] No better image found")
        unchanged.append(name)
        continue

    best_img = upscale(best_img)
    best_img.save(out_path, "PNG")
    w, h = best_img.size
    print(f"   [OK] {w}x{h}  {best_url}")
    improved.append(name)

print(f"\n{'='*65}")
print(f"  IMPROVED : {len(improved)}")
print(f"  UNCHANGED: {len(unchanged)}")
print(f"  FAILED   : {len(failed)}")
print(f"{'='*65}\n")
if improved:
    for n in improved: print(f"  + {n}")
