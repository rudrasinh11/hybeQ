import urllib.request
import re
import os
from urllib.parse import urljoin, urlparse

url = 'https://hybeq.com/'
headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
req = urllib.request.Request(url, headers=headers)

try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
except Exception as e:
    print(f"Error fetching {url}: {e}")
    exit(1)

# Find all image URLs from <img> tags, background-images, etc.
img_srcs = re.findall(r'<img[^>]+src=["\']([^"\']+)["\']', html, re.IGNORECASE)
data_srcs = re.findall(r'data-src=["\']([^"\']+)["\']', html, re.IGNORECASE)
bg_srcs = re.findall(r'url\(["\']?([^"\'\)]+)["\']?\)', html, re.IGNORECASE)

all_links = set(img_srcs + data_srcs + bg_srcs)
full_urls = []

for link in all_links:
    clean_link = link.strip()
    if clean_link.startswith('data:'):
        continue
    full_url = urljoin(url, clean_link)
    # Check if looks like image
    ext = os.path.splitext(urlparse(full_url).path)[1].lower()
    if ext in ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif']:
        full_urls.append(full_url)

print(f"Found {len(full_urls)} total unique image files on https://hybeq.com/ homepage:")
for u in sorted(full_urls):
    print(u)

# Also let's check product pages or other subpages if present
page_links = re.findall(r'href=["\']([^"\']+)["\']', html, re.IGNORECASE)
subpages = set()
for pl in page_links:
    full_pl = urljoin(url, pl)
    if 'hybeq.com' in full_pl and not any(full_pl.endswith(ext) for ext in ['.jpg', '.png', '.css', '.js', '.pdf']):
        subpages.add(full_pl)

print(f"\nFound {len(subpages)} subpages on hybeq.com:")
for sp in sorted(list(subpages))[:25]:
    print(sp)
