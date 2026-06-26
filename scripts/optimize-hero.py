"""
Regenerate the optimized hero images from the sources.

- source-photos/foreground.png  ->  public/images/foreground.webp  (transparent cut-out)
- source-photos/DSC00002.JPG     ->  public/images/hero-bg.jpg      (background, recompressed)

Run after editing the source cut-out:  python scripts/optimize-hero.py
"""
from PIL import Image, ImageOps
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


def main():
    fg_src = os.path.join(ROOT, 'source-photos', 'foreground.png')
    if os.path.exists(fg_src):
        fg = Image.open(fg_src).convert('RGBA')
        fg.save(os.path.join(ROOT, 'public', 'images', 'foreground.webp'), 'WEBP', quality=82, method=6)
        print('foreground.webp updated')

    bg_src = os.path.join(ROOT, 'source-photos', 'DSC00002.JPG')
    if os.path.exists(bg_src):
        bg = ImageOps.exif_transpose(Image.open(bg_src)).convert('RGB')
        bg.save(os.path.join(ROOT, 'public', 'images', 'hero-bg.jpg'), 'JPEG', quality=78, optimize=True, progressive=True)
        print('hero-bg.jpg updated')


if __name__ == '__main__':
    main()
