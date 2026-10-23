import urllib.request
import re
import os
import urllib.parse

url = 'https://hybeq.com/Clients/'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})

os.makedirs('public/images/clients', exist_ok=True)

try:
    with urllib.request.urlopen(req) as resp:
        html = resp.read().decode('utf-8', errors='ignore')
        
    print(f"HTML retrieved: {len(html)} bytes")
    # Find all img tags
    img_matches = re.findall(r'<img\s+[^>]*src=[\'"]([^\'"]+)[\'"][^>]*>', html, re.IGNORECASE)
    print(f"Total img tags found: {len(img_matches)}")
    
    downloaded = []
    for src in img_matches:
        full_url = urllib.parse.urljoin(url, src)
        filename = os.path.basename(urllib.parse.urlparse(full_url).path)
        if not filename or filename.endswith('.svg') and 'logo' not in filename.lower():
            continue
        print(f"Candidate: {full_url}")
        target_path = os.path.join('public/images/clients', filename)
        try:
            img_req = urllib.request.Request(full_url, headers={'User-Agent': 'Mozilla/5.0'})
            with urllib.request.urlopen(img_req) as img_resp, open(target_path, 'wb') as f:
                f.write(img_resp.read())
            downloaded.append((filename, full_url))
            print(f"Downloaded: {filename} ({os.path.getsize(target_path)} bytes)")
        except Exception as err:
            print(f"Failed to download {full_url}: {err}")
            
    print(f"\nSuccessfully downloaded {len(downloaded)} images.")
except Exception as e:
    print(f"Error fetching page: {e}")
