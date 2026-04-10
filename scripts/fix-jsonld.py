#!/usr/bin/env python3
"""Fix JSON-LD in boat detail pages: escape newlines in description, encode URL spaces."""
import re
from pathlib import Path

ROOT = Path(__file__).parent.parent
files = list((ROOT / 'es' / 'barcos').rglob('index.html')) + list((ROOT / 'en' / 'boats').rglob('index.html'))

fixed = 0
for f in files:
    content = f.read_text(encoding='utf-8')
    original = content

    pattern = re.compile(
        r'("description":\s*")(.*?)(",\s*\n\s*"image":\s*")([^"]*)(")',
        re.DOTALL
    )

    def fix(m):
        desc = m.group(2).replace('\r\n', '\n').replace('\n', '\\n')
        img = m.group(4).replace(' ', '%20')
        return m.group(1) + desc + m.group(3) + img + m.group(5)

    content = pattern.sub(fix, content)

    if content != original:
        f.write_text(content, encoding='utf-8')
        fixed += 1
        print(f"  fixed {f.relative_to(ROOT)}")

print(f"\nTotal files fixed: {fixed}")
