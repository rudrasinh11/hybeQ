import os
from PIL import Image
import numpy as np

src_dir = 'public/images/hybeq_live'
out_dir = 'public/images/clients_transparent'
os.makedirs(out_dir, exist_ok=True)

files = [f for f in os.listdir(src_dir) if f.startswith('client_')]

for f in files:
    path = os.path.join(src_dir, f)
    try:
        img = Image.open(path).convert('RGBA')
        arr = np.array(img, dtype=np.float32)
        
        r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
        
        min_val = np.minimum(np.minimum(r, g), b)
        max_val = np.maximum(np.maximum(r, g), b)
        diff = max_val - min_val
        
        # White background pixels (high brightness and low saturation)
        is_bg = (min_val > 235) & (diff < 20)
        
        # Calculate new alpha with edge feathering
        alpha = np.where(is_bg, 0.0, a)
        edge_zone = (min_val >= 215) & (min_val <= 245) & (diff < 25)
        feather_alpha = (245 - min_val) / 30.0 * 255.0
        alpha = np.where(edge_zone & (alpha > 0), np.minimum(alpha, feather_alpha), alpha)
        alpha = np.clip(alpha, 0, 255).astype(np.uint8)
        
        # Preserve original brand colors!
        out_arr = np.zeros_like(arr, dtype=np.uint8)
        out_arr[:,:,0] = arr[:,:,0].astype(np.uint8)
        out_arr[:,:,1] = arr[:,:,1].astype(np.uint8)
        out_arr[:,:,2] = arr[:,:,2].astype(np.uint8)
        out_arr[:,:,3] = alpha
        
        out_img = Image.fromarray(out_arr, 'RGBA')
        bbox = out_img.getbbox()
        if bbox:
            out_img = out_img.crop(bbox)
            
        out_name = f.replace('.jpeg', '.png').replace('.webp', '.png')
        out_path = os.path.join(out_dir, out_name)
        out_img.save(out_path, 'PNG')
        print(f"Saved colored transparent logo: {out_name}")
    except Exception as e:
        print(f"Error {f}: {e}")
