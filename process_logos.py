import os
from PIL import Image, ImageOps
import numpy as np

src_dir = 'public/images/hybeq_live'
out_dir = 'public/images/clients_transparent'
os.makedirs(out_dir, exist_ok=True)

files = [f for f in os.listdir(src_dir) if f.startswith('client_')]

for f in files:
    path = os.path.join(src_dir, f)
    try:
        img = Image.open(path).convert('RGBA')
        
        # Get data
        arr = np.array(img)
        r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
        
        # Find white / near-white background pixels
        # If pixels are very bright (> 230 in r, g, b) or already transparent
        is_white_bg = (r > 225) & (g > 225) & (b > 225)
        
        # For non-white pixels, compute luminance/ink intensity
        # Luminance from 0 (black ink) to 255 (white)
        lum = 0.299 * r + 0.587 * g + 0.114 * b
        
        # New alpha: dark pixels become opaque white, white pixels become transparent
        # Inverted luminance gives ink opacity
        new_a = np.where(is_white_bg | (a < 50), 0, np.clip((255 - lum) * 1.5, 0, 255)).astype(np.uint8)
        
        # Make all non-transparent pixels pure white (255, 255, 255)
        new_arr = np.zeros_like(arr)
        new_arr[:,:,0] = 255
        new_arr[:,:,1] = 255
        new_arr[:,:,2] = 255
        new_arr[:,:,3] = new_a
        
        out_img = Image.fromarray(new_arr, 'RGBA')
        
        # Trim transparent borders
        bbox = out_img.getbbox()
        if bbox:
            out_img = out_img.crop(bbox)
            
        out_name = f.replace('.jpeg', '.png').replace('.webp', '.png')
        out_path = os.path.join(out_dir, out_name)
        out_img.save(out_path, 'PNG')
        print(f"Processed: {out_name} (size: {out_img.size})")
    except Exception as e:
        print(f"Error {f}: {e}")
