import os
import math
import numpy as np
from PIL import Image, ImageDraw, ImageFilter, ImageFont

# Canvas dimensions (exact 2x retina of 1410 x 521)
W, H = 2820, 1042

BG1_PATH = r'C:\Users\rudra\.gemini\antigravity-ide\brain\31ba9fd7-9214-4335-8cd0-ff5a1ce1eac0\hero_bg_tile_showroom_1792767544265.jpg'
BG2_PATH = r'C:\Users\rudra\.gemini\antigravity-ide\brain\31ba9fd7-9214-4335-8cd0-ff5a1ce1eac0\hero_bg_bathroom_waterproof_1792767565111.jpg'
BG3_PATH = r'C:\Users\rudra\.gemini\antigravity-ide\brain\31ba9fd7-9214-4335-8cd0-ff5a1ce1eac0\hero_bg_grout_tile_grid_1792767589810.jpg'

PROD_DIR = r'public\images\hybeq_products'
VURA_REF = r'public\images\vura_ref'

# Load reference mask from VURA Banner 01
vura_ref_im = Image.open(os.path.join(VURA_REF, 'Banner 01.png'))
vura_alpha = vura_ref_im.split()[3]
mask_2x = vura_alpha.resize((W, H), Image.Resampling.LANCZOS)

# Fonts
font_huge = ImageFont.truetype(r'public\Goldplay_SemiBold.ttf', 72)
font_large = ImageFont.truetype(r'public\Goldplay_SemiBold.ttf', 58)
font_bold = ImageFont.truetype(r'public\Goldplay_SemiBold.ttf', 42)
font_sub = ImageFont.truetype(r'public\Goldplay_Medium.ttf', 27)
font_tag = ImageFont.truetype(r'public\Goldplay_SemiBold.ttf', 26)

def add_clean_reflection_and_shadow(canvas, prod_img, pos_x, pos_y, target_h, reflection_alpha=0.30):
    orig_w, orig_h = prod_img.size
    aspect = orig_w / orig_h
    target_w = int(target_h * aspect)
    p_resized = prod_img.resize((target_w, target_h), Image.Resampling.LANCZOS)
    
    # 1. Soft contact shadow on floor
    shadow_w = int(target_w * 0.94)
    shadow_h = int(target_h * 0.11)
    shadow = Image.new('RGBA', (shadow_w, shadow_h), (0, 0, 0, 0))
    s_draw = ImageDraw.Draw(shadow)
    s_draw.ellipse([0, 0, shadow_w, shadow_h], fill=(7, 20, 45, 140))
    shadow = shadow.filter(ImageFilter.GaussianBlur(shadow_h * 0.40))
    canvas.paste(shadow, (pos_x + int(target_w * 0.03), pos_y + target_h - int(shadow_h * 0.50)), shadow)
    
    # 2. Pure reflection without un-premultiplied blur halo
    refl = p_resized.transpose(Image.Transpose.FLIP_TOP_BOTTOM)
    refl_arr = np.array(refl).astype(float)
    if refl_arr.shape[2] == 4:
        refl_arr[refl_arr[:, :, 3] < 15, :3] = 0
        grad = np.linspace(reflection_alpha, 0.0, target_h)[:, None]
        refl_arr[:, :, 3] = refl_arr[:, :, 3] * grad
        refl_clean = Image.fromarray(refl_arr.astype(np.uint8))
        refl_crop_h = min(target_h, int(target_h * 0.50))
        canvas.paste(refl_clean.crop((0, 0, target_w, refl_crop_h)), (pos_x, pos_y + target_h), refl_clean.crop((0, 0, target_w, refl_crop_h)))
    
    # 3. Paste product cleanly
    canvas.paste(p_resized, (pos_x, pos_y), p_resized)

def apply_frame_and_save(canvas, out_path):
    final = canvas.copy()
    # Apply exact anti-aliased mask cleanly without artificial jagged black borders
    final.putalpha(mask_2x)
    final.save(out_path, format='PNG', optimize=True)
    print(f'Successfully saved: {out_path}')

# ==============================================================================
# SLIDE 1: TILE & STONE ADHESIVE
# ==============================================================================
def create_slide_1():
    print('Building Slide 1...')
    bg = Image.open(BG1_PATH).convert('RGBA')
    bg_w, bg_h = bg.size
    scale = max(W / bg_w, H / bg_h)
    new_w, new_h = int(bg_w * scale), int(bg_h * scale)
    bg = bg.resize((new_w, new_h), Image.Resampling.LANCZOS)
    top = new_h - H
    bg = bg.crop((0, top, W, top + H))
    
    panel = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(panel)
    for x in range(1250):
        a = int(140 * math.cos((x / 1250.0) * (math.pi / 2.0)))
        pdraw.line([(x, 0), (x, H)], fill=(255, 255, 255, a))
    bg.alpha_composite(panel)
    
    draw = ImageDraw.Draw(bg)
    
    tag_text = "TILE & STONE ADHESIVE"
    tag_bbox = draw.textbbox((140, 160), tag_text, font=font_tag)
    draw.rounded_rectangle([tag_bbox[0] - 12, tag_bbox[1] - 4, tag_bbox[2] + 12, tag_bbox[3] + 6], radius=6, fill=(48, 183, 116, 40), outline=(48, 183, 116, 220), width=2)
    draw.text((140, 160), tag_text, fill=(7, 26, 69), font=font_tag)
    
    draw.text((140, 235), "FORMULATED WITH", fill=(48, 183, 116), font=font_bold)
    draw.text((140, 305), "WORLD-CLASS GERMAN", fill=(7, 26, 69), font=font_huge)
    draw.text((140, 395), "POLYMERS & TECHNOLOGY", fill=(7, 26, 69), font=font_huge)
    
    draw.text((140, 520), "EXTREME BOND STRENGTH  •  ZERO TILE SLIPPAGE  •  C2TES1 COMPLIANT", fill=(15, 23, 42), font=font_sub)
    draw.text((140, 565), "Engineered for vitrified, ceramic, granite, natural stone & large slim slabs.", fill=(51, 65, 85), font=font_sub)
    
    prods = [
        ('hycera-505.png', 1280, 480, 430),
        ('hyintra-507.png', 1490, 475, 435),
        ('hyultra-515.png', 1700, 470, 440),
        ('hymax-525.png', 1920, 475, 435),
        ('hyflex-535.png', 2130, 480, 430),
        ('hy-stonegrip-511.png', 2340, 535, 375),
        ('hy-stoneseal.png', 2530, 570, 335),
    ]
    
    for fname, px, py, ph in prods:
        p_path = os.path.join(PROD_DIR, fname)
        if os.path.exists(p_path):
            p_im = Image.open(p_path).convert('RGBA')
            add_clean_reflection_and_shadow(bg, p_im, px, py, ph, reflection_alpha=0.30)
            
    apply_frame_and_save(bg, 'public/images/hero_banner_01.png')

# ==============================================================================
# SLIDE 2: WATERPROOFING SOLUTIONS
# ==============================================================================
def create_slide_2():
    print('Building Slide 2...')
    bg = Image.open(BG2_PATH).convert('RGBA')
    bg_w, bg_h = bg.size
    scale = max(W / bg_w, H / bg_h)
    new_w, new_h = int(bg_w * scale), int(bg_h * scale)
    bg = bg.resize((new_w, new_h), Image.Resampling.LANCZOS)
    top = new_h - H
    bg = bg.crop((0, top, W, top + H))
    
    panel = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(panel)
    for x in range(1250):
        a = int(140 * math.cos((x / 1250.0) * (math.pi / 2.0)))
        pdraw.line([(x, 0), (x, H)], fill=(255, 255, 255, a))
    bg.alpha_composite(panel)
    
    draw = ImageDraw.Draw(bg)
    
    tag_text = "WATERPROOFING SOLUTIONS"
    tag_bbox = draw.textbbox((140, 160), tag_text, font=font_tag)
    draw.rounded_rectangle([tag_bbox[0] - 12, tag_bbox[1] - 4, tag_bbox[2] + 12, tag_bbox[3] + 6], radius=6, fill=(10, 88, 202, 40), outline=(10, 88, 202, 220), width=2)
    draw.text((140, 160), tag_text, fill=(7, 26, 69), font=font_tag)
    
    draw.text((140, 235), "PROTECT WHAT MATTERS MOST", fill=(10, 88, 202), font=font_bold)
    draw.text((140, 305), "ADVANCED WATERPROOFING", fill=(7, 26, 69), font=font_huge)
    draw.text((140, 395), "BARRIERS & MEMBRANES", fill=(7, 26, 69), font=font_huge)
    
    draw.text((140, 520), "100% WATER PENETRATION BARRIER  •  CRACK-BRIDGING", fill=(15, 23, 42), font=font_sub)
    draw.text((140, 565), "Elastomeric & crystalline coatings for bathrooms, podiums & terraces.", fill=(51, 65, 85), font=font_sub)
    
    sign_w, sign_h = 310, 390
    sign = Image.new('RGBA', (sign_w, sign_h), (0, 0, 0, 0))
    sdraw = ImageDraw.Draw(sign)
    sdraw.rounded_rectangle([10, 10, sign_w - 10, sign_h - 10], radius=16, fill=(225, 29, 72), outline=(159, 18, 57), width=3)
    sdraw.rounded_rectangle([24, 24, sign_w - 24, sign_h - 24], radius=10, fill=(255, 255, 255))
    sdraw.rounded_rectangle([34, 34, sign_w - 34, 86], radius=6, fill=(225, 29, 72))
    
    font_sign_h = ImageFont.truetype(r'public\Goldplay_SemiBold.ttf', 30)
    font_sign_m = ImageFont.truetype(r'public\Goldplay_SemiBold.ttf', 19)
    font_sign_b = ImageFont.truetype(r'public\Goldplay_SemiBold.ttf', 24)
    
    sdraw.text((85, 42), "WARNING!", fill=(255, 255, 255), font=font_sign_h)
    sdraw.text((54, 106), "TO STOP WATER LEAKS", fill=(15, 23, 42), font=font_sign_m)
    sdraw.text((75, 138), "USE HYBEQ", fill=(225, 29, 72), font=font_sign_b)
    sdraw.text((36, 180), "WATERPROOFING SOLUTIONS", fill=(15, 23, 42), font=font_sign_m)
    
    cx, cy, r = sign_w // 2, 275, 52
    sdraw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(254, 242, 242), outline=(225, 29, 72), width=4)
    sdraw.polygon([(cx, cy - 32), (cx + 22, cy + 12), (cx, cy + 30), (cx - 22, cy + 12)], fill=(10, 88, 202))
    sdraw.line([(cx - 36, cy + 36), (cx + 36, cy - 36)], fill=(225, 29, 72), width=5)
    
    add_clean_reflection_and_shadow(bg, sign, 1080, 510, sign_h, reflection_alpha=0.25)
    
    prods = [
        ('hy-dampproof-ultra.png', 1420, 480, 440),
        ('hy-masterflex-pu.png', 1710, 490, 430),
        ('hy-superconcrete-ls.png', 1990, 500, 420),
        ('hy-coat-h111.png', 2270, 490, 430),
    ]
    for fname, px, py, ph in prods:
        p_path = os.path.join(PROD_DIR, fname)
        if os.path.exists(p_path):
            p_im = Image.open(p_path).convert('RGBA')
            add_clean_reflection_and_shadow(bg, p_im, px, py, ph, reflection_alpha=0.30)
            
    apply_frame_and_save(bg, 'public/images/hero_banner_02.png')

# ==============================================================================
# SLIDE 3: PRECISION TILE FIXING & EPOXY GROUTS
# ==============================================================================
def create_slide_3():
    print('Building Slide 3...')
    bg = Image.open(BG3_PATH).convert('RGBA')
    bg_w, bg_h = bg.size
    scale = max(W / bg_w, H / bg_h)
    new_w, new_h = int(bg_w * scale), int(bg_h * scale)
    bg = bg.resize((new_w, new_h), Image.Resampling.LANCZOS)
    top = new_h - H
    bg = bg.crop((0, top, W, top + H))
    
    panel = Image.new('RGBA', (W, H), (0, 0, 0, 0))
    pdraw = ImageDraw.Draw(panel)
    for x in range(1300):
        a = int(160 * math.cos((x / 1300.0) * (math.pi / 2.0)))
        pdraw.line([(x, 0), (x, H)], fill=(255, 255, 255, a))
    bg.alpha_composite(panel)
    
    draw = ImageDraw.Draw(bg)
    
    tag_text = "PRECISION TILE FIXING & EPOXY GROUTS"
    tag_bbox = draw.textbbox((140, 160), tag_text, font=font_tag)
    draw.rounded_rectangle([tag_bbox[0] - 12, tag_bbox[1] - 4, tag_bbox[2] + 12, tag_bbox[3] + 6], radius=6, fill=(48, 183, 116, 40), outline=(48, 183, 116, 220), width=2)
    draw.text((140, 160), tag_text, fill=(7, 26, 69), font=font_tag)
    
    draw.text((140, 235), "LET THE WORLD KNOW", fill=(7, 26, 69), font=font_large)
    
    draw.text((140, 315), "YOUR ", fill=(7, 26, 69), font=font_huge)
    draw.text((370, 315), "COLORFUL ", fill=(48, 183, 116), font=font_huge)
    draw.text((820, 315), "PERSONALITY!", fill=(7, 26, 69), font=font_huge)
    
    draw.text((140, 440), "STAIN-PROOF EPOXY GROUTS  •  UNYIELDING BOND  •  CHEMICAL RESISTANT", fill=(15, 23, 42), font=font_sub)
    draw.text((140, 490), "Precision-engineered epoxy grouts, spot-bonding systems & surface sealants.", fill=(51, 65, 85), font=font_sub)
    
    prods = [
        ('hy-spot-bond-ep510.png', 1380, 520, 400),
        ('hy-stoneseal.png', 1650, 510, 410),
        ('hy-stonegrip-511.png', 1930, 480, 440),
        ('hyflex-535.png', 2220, 485, 435),
        ('hybeq-superclean.png', 2490, 500, 420),
    ]
    for fname, px, py, ph in prods:
        p_path = os.path.join(PROD_DIR, fname)
        if os.path.exists(p_path):
            p_im = Image.open(p_path).convert('RGBA')
            add_clean_reflection_and_shadow(bg, p_im, px, py, ph, reflection_alpha=0.35)
            
    apply_frame_and_save(bg, 'public/images/hero_banner_03.png')

if __name__ == '__main__':
    create_slide_1()
    create_slide_2()
    create_slide_3()
    print('Finished building hero banners without artificial border!')
