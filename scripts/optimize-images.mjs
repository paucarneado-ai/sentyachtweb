/**
 * SentYacht — Image Optimization Pipeline
 * Generates responsive WebP images with blur-up placeholders.
 * Run: node scripts/optimize-images.mjs
 *
 * Input:  assets/imagenes web/[boat]/*.{jpeg,jpg,png}
 *         assets/hero-home.jpeg
 *         assets/stock/*.{jpeg,jpg,png}
 * Output: assets/opt/[boat]/[hash]-[width]w.webp
 *         assets/opt/manifest.json (maps originals → optimized variants)
 */
import sharp from 'sharp';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, readdirSync } from 'fs';
import { join, dirname, basename, extname, relative } from 'path';
import { fileURLToPath } from 'url';
import { createHash } from 'crypto';

const __filename = fileURLToPath(import.meta.url);
const ROOT = join(dirname(__filename), '..');
const ASSETS_DIR = join(ROOT, 'assets');
const OUTPUT_DIR = join(ROOT, 'assets', 'opt');
const MANIFEST_PATH = join(OUTPUT_DIR, 'manifest.json');

// Responsive widths to generate
const WIDTHS = [400, 800, 1200, 1600];
const WEBP_QUALITY = 80;
const BLUR_WIDTH = 20; // tiny blur-up placeholder

// Track stats
let processed = 0;
let skipped = 0;
let totalSavedBytes = 0;

function ensureDir(dir) {
  mkdirSync(dir, { recursive: true });
}

function hashFile(filePath) {
  const content = readFileSync(filePath);
  return createHash('md5').update(content).digest('hex').slice(0, 8);
}

function findImages(dir) {
  const images = [];
  if (!existsSync(dir)) return images;

  const entries = readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      images.push(...findImages(fullPath));
    } else if (/\.(jpe?g|png|webp)$/i.test(entry.name)) {
      images.push(fullPath);
    }
  }
  return images;
}

async function processImage(srcPath, manifest) {
  const relPath = relative(ASSETS_DIR, srcPath);
  const srcStat = statSync(srcPath);

  // Check if already processed (skip if output exists and source unchanged)
  if (manifest[relPath] && manifest[relPath].srcMtime === srcStat.mtimeMs) {
    skipped++;
    return;
  }

  const srcDir = dirname(relPath);
  const srcName = basename(relPath, extname(relPath));
  const outDir = join(OUTPUT_DIR, srcDir);
  ensureDir(outDir);

  try {
    const img = sharp(srcPath);
    const metadata = await img.metadata();
    const srcWidth = metadata.width;
    const srcHeight = metadata.height;
    const originalSize = srcStat.size;

    const variants = {};
    let savedBytes = 0;

    // Generate WebP at each width (only if source is larger)
    for (const w of WIDTHS) {
      if (w > srcWidth) continue; // Don't upscale

      const h = Math.round((w / srcWidth) * srcHeight);
      const outName = `${srcName}-${w}w.webp`;
      const outPath = join(outDir, outName);

      await sharp(srcPath)
        .resize(w, h, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outPath);

      const outStat = statSync(outPath);
      variants[w] = {
        path: relative(ASSETS_DIR, outPath),
        width: w,
        height: h,
        size: outStat.size,
      };
      savedBytes += originalSize - outStat.size;
    }

    // If source is smaller than smallest width, generate at original size
    if (!variants[400] && srcWidth > 0) {
      const smallestWidth = Math.min(srcWidth, 400);
      const h = Math.round((smallestWidth / srcWidth) * srcHeight);
      const outName = `${srcName}-${smallestWidth}w.webp`;
      const outPath = join(outDir, outName);

      await sharp(srcPath)
        .resize(smallestWidth, h, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: WEBP_QUALITY })
        .toFile(outPath);

      const outStat = statSync(outPath);
      variants[smallestWidth] = {
        path: relative(ASSETS_DIR, outPath),
        width: smallestWidth,
        height: h,
        size: outStat.size,
      };
    }

    // Generate blur-up placeholder (tiny WebP, base64-encoded)
    const blurBuffer = await sharp(srcPath)
      .resize(BLUR_WIDTH, Math.round((BLUR_WIDTH / srcWidth) * srcHeight), { fit: 'inside' })
      .webp({ quality: 20 })
      .toBuffer();

    const blurBase64 = `data:image/webp;base64,${blurBuffer.toString('base64')}`;

    manifest[relPath] = {
      srcMtime: srcStat.mtimeMs,
      originalSize,
      width: srcWidth,
      height: srcHeight,
      blur: blurBase64,
      variants,
    };

    totalSavedBytes += savedBytes;
    processed++;

    // Progress indicator
    if (processed % 10 === 0) {
      process.stdout.write(`  Processed ${processed} images...\r`);
    }
  } catch (err) {
    console.error(`  ✗ Error processing ${relPath}: ${err.message}`);
  }
}

async function main() {
  console.log('\nSentYacht Image Optimization\n' + '='.repeat(40));

  ensureDir(OUTPUT_DIR);

  // Load existing manifest for incremental builds
  let manifest = {};
  if (existsSync(MANIFEST_PATH)) {
    try {
      manifest = JSON.parse(readFileSync(MANIFEST_PATH, 'utf-8'));
    } catch (e) {
      manifest = {};
    }
  }

  // Find all source images
  const imageDirs = [
    join(ASSETS_DIR, 'imagenes web'),
    join(ASSETS_DIR, 'stock'),
  ];

  let allImages = [];
  for (const dir of imageDirs) {
    allImages.push(...findImages(dir));
  }

  // Also process hero image
  const heroPath = join(ASSETS_DIR, 'hero-home.jpeg');
  if (existsSync(heroPath)) {
    allImages.push(heroPath);
  }

  console.log(`  Found ${allImages.length} source images`);

  // Process all images
  for (const imgPath of allImages) {
    await processImage(imgPath, manifest);
  }

  // Save manifest
  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2), 'utf-8');

  // Calculate total optimized size
  let totalOptSize = 0;
  for (const entry of Object.values(manifest)) {
    for (const v of Object.values(entry.variants)) {
      totalOptSize += v.size;
    }
  }

  console.log(`\n  ✓ Processed: ${processed} images`);
  console.log(`  ✓ Skipped (unchanged): ${skipped} images`);
  console.log(`  ✓ Total optimized size: ${(totalOptSize / 1024 / 1024).toFixed(1)} MB`);
  console.log(`  ✓ Manifest: ${Object.keys(manifest).length} entries`);
  console.log(`  ✓ Saved to: assets/opt/\n`);
}

main().catch(err => {
  console.error('Build failed:', err);
  process.exit(1);
});
