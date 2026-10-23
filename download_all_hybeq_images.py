import urllib.request
import re
import os
import urllib.parse
from concurrent.futures import ThreadPoolExecutor

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}

dest_dir = os.path.join(os.getcwd(), 'public', 'images', 'hybeq_live')
os.makedirs(dest_dir, exist_ok=True)

# Directly known image URLs from home page and product categories
known_images = [
    # Products
    "https://hybeq.com/product/big_img/Hyultra-515901.png",
    "https://hybeq.com/product/big_img/hycera-505170.png",
    "https://hybeq.com/product/big_img/hyintra-507435.png",
    "https://hybeq.com/product/big_img/hymax-525147.png",
    
    # Client Logos
    "https://hybeq.com/client/big_img/Dilip_Buildcon_Limited_Logo708.png",
    "https://hybeq.com/client/big_img/Maruti-Suzuki-Logo-png632.png",
    "https://hybeq.com/client/big_img/Surat-Metro-Project-Cost-Construction-Update-Route-Everything-1838.jpeg",
    "https://hybeq.com/client/big_img/adani-power-share-price-target-at-rs-818-3-reasons-the-stock-is-up-9283.jpeg",
    "https://hybeq.com/client/big_img/ahmedabad-municipal-corporation-1200799.jpeg",
    "https://hybeq.com/client/big_img/ganesh-housing189.webp",
    "https://hybeq.com/client/big_img/gujarat-housing-board348.webp",
    "https://hybeq.com/client/big_img/kiran-hospital873.webp",
    "https://hybeq.com/client/big_img/npcil-latest-jobs-2025-apply523.jpeg",
    "https://hybeq.com/client/big_img/psp-project195.webp",
    "https://hybeq.com/client/big_img/raghuvir-builder-and-developer818.webp",
    "https://hybeq.com/client/big_img/shaligram-developers876.webp",
    "https://hybeq.com/client/big_img/smc603.webp",
    "https://hybeq.com/client/big_img/ind-about-3-1868.jpeg",
    "https://hybeq.com/client/big_img/250px-Gujarat_State_road_transport_corporation722.jpeg",

    # Corporate & Facility
    "https://hybeq.com/page/big_img/hybeq%20building642.jpeg",
    "https://hybeq.com/logo/big_img/logo686.png",
    "https://hybeq.com/logo/big_img/footer773.png",
    
    # Icons
    "https://hybeq.com/icon/big_img/atom.png",
    "https://hybeq.com/icon/big_img/computing.png",
    "https://hybeq.com/icon/big_img/formula.png",
    
    # Blog Images
    "https://hybeq.com/blog/big_img/b2692.jpeg",
    "https://hybeq.com/blog/big_img/b3370.jpeg",

    # Testimonials & Accreditations
    "https://hybeq.com/testimonial/big_img/testimonial109.png",
    "https://hybeq.com/testimonial/big_img/testimonial701.png",
    "https://hybeq.com/testimonial/big_img/testimonial864.png",
    "https://hybeq.com/testimonial/big_img/testimonial882.png"
]

def download_one(img_url):
    try:
        parsed = urllib.parse.urlparse(img_url)
        filename = os.path.basename(parsed.path)
        filename = re.sub(r'[^a-zA-Z0-9_\-\.]', '_', filename)
        if '/product/' in img_url:
            name = f"product_{filename}"
        elif '/client/' in img_url:
            name = f"client_{filename}"
        elif '/blog/' in img_url:
            name = f"blog_{filename}"
        elif '/logo/' in img_url:
            name = f"logo_{filename}"
        elif '/page/' in img_url:
            name = f"page_{filename}"
        elif '/icon/' in img_url:
            name = f"icon_{filename}"
        else:
            name = filename

        dest = os.path.join(dest_dir, name)
        req = urllib.request.Request(img_url, headers=headers)
        with urllib.request.urlopen(req, timeout=8) as r, open(dest, 'wb') as f:
            f.write(r.read())
        print(f"SUCCESS: {name} ({os.path.getsize(dest)} bytes)", flush=True)
        return (img_url, name)
    except Exception as e:
        print(f"ERROR {img_url}: {e}", flush=True)
        return None

print(f"Starting concurrent download of {len(known_images)} core assets...", flush=True)
with ThreadPoolExecutor(max_workers=8) as executor:
    results = list(executor.map(download_one, known_images))

successes = [r for r in results if r]
print(f"Downloaded {len(successes)} of {len(known_images)} assets into {dest_dir}", flush=True)
