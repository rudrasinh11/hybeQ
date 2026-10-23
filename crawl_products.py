import urllib.request
import re
import os
from urllib.parse import urljoin, urlparse
from concurrent.futures import ThreadPoolExecutor

headers = {'User-Agent': 'Mozilla/5.0'}
dest_dir = os.path.join(os.getcwd(), 'public', 'images', 'hybeq_live')

try:
    html = urllib.request.urlopen(urllib.request.Request('https://hybeq.com/Product_Category/', headers=headers), timeout=10).read().decode('utf-8', errors='ignore')
except Exception as e:
    print("Error:", e)
    html = ""

matches = re.findall(r'href=["\']([^"\']+)["\']', html)
product_links = set([urljoin('https://hybeq.com/Product_Category/', m) for m in matches if 'Product_Details' in m])

print(f"Discovered {len(product_links)} product detail pages.")

product_img_urls = set()

def inspect_product_page(url):
    try:
        p_html = urllib.request.urlopen(urllib.request.Request(url, headers=headers), timeout=6).read().decode('utf-8', errors='ignore')
        imgs = re.findall(r'src=["\']([^"\']+)["\']', p_html)
        for i in imgs:
            if 'product/big_img' in i:
                full_img = urljoin(url, i)
                product_img_urls.add(full_img)
    except Exception as e:
        pass

with ThreadPoolExecutor(max_workers=10) as ex:
    ex.map(inspect_product_page, product_links)

print(f"Found {len(product_img_urls)} product images across all product pages:")
for u in sorted(product_img_urls):
    print(u)
    # Download
    fn = os.path.basename(urlparse(u).path)
    dest = os.path.join(dest_dir, f"product_{fn}")
    try:
        with urllib.request.urlopen(urllib.request.Request(u, headers=headers), timeout=8) as r, open(dest, 'wb') as f:
            f.write(r.read())
        print(f"Saved: {dest}")
    except Exception as err:
        print(f"Failed {u}: {err}")
