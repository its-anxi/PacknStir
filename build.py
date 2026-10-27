#!/usr/bin/env python3
"""
Bundle generator for EcoPack Studio.
Produces dist/app.bundle.js which runs flawlessly both locally and over HTTP.
"""

import os
import re

FILES_IN_ORDER = [
  'src/data/categories.js',
  'src/data/packagingSvgs.js',
  'src/data/products.js',
  'src/data/story.js',
  'src/state/cartState.js',
  'src/utils/animations.js',
  'src/components/InteractiveBoxVisualizer.js',
  'src/components/CartDrawer.js',
  'src/components/CheckoutModal.js',
  'src/components/QuickViewModal.js',
  'src/components/Navbar.js',
  'src/components/Footer.js',
  'src/views/HomeView.js',
  'src/views/ProductsView.js',
  'src/views/ProductDetailView.js',
  'src/views/AboutView.js',
  'src/views/StoryView.js',
  'src/views/ContactQuoteView.js',
  'src/router.js',
  'src/main.js'
]

def bundle():
    output_parts = [
        "// EcoPack Studio - Standalone Application Bundle",
        "// Generated automatically for seamless file:// and http:// execution\n",
        "(() => {\n"
    ]

    for fpath in FILES_IN_ORDER:
        with open(fpath, 'r', encoding='utf-8') as f:
            code = f.read()

        # Remove import statements
        code = re.sub(r'import\s+[^;]+from\s+[\'"][^\'"]+[\'"];?\n?', '', code)
        code = re.sub(r'import\s+[\'"][^\'"]+[\'"];?\n?', '', code)

        # Handle dynamic import in HomeView.js
        # import('../data/products.js').then(...) -> replaced with direct call
        code = code.replace("import('../data/products.js').then(({ getProductById }) => {", "(() => {")

        # Strip export statements:
        # 'export const' -> 'const'
        # 'export function' -> 'function'
        # 'export class' -> 'class'
        # 'export default ...' -> ''
        code = re.sub(r'export\s+const\s+', 'const ', code)
        code = re.sub(r'export\s+function\s+', 'function ', code)
        code = re.sub(r'export\s+class\s+', 'class ', code)
        code = re.sub(r'export\s+default\s+[^;]+;', '', code)
        code = re.sub(r'export\s*\{[^}]+\};?', '', code)

        output_parts.append(f"// === Module: {fpath} ===")
        output_parts.append(code.strip())
        output_parts.append("\n")

    output_parts.append("})();\n")

    bundled_code = "\n".join(output_parts)
    os.makedirs('dist', exist_ok=True)
    with open('dist/app.bundle.js', 'w', encoding='utf-8') as out:
        out.write(bundled_code)

    print(f"✅ Successfully generated dist/app.bundle.js ({len(bundled_code):,} bytes)")

if __name__ == '__main__':
    bundle()
