// Script để optimize images trong public/uploads
// Chạy: node scripts/optimize-images.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const UPLOADS_DIR = path.join(process.cwd(), 'public', 'uploads');
const QUALITY = 85; // Chất lượng ảnh (0-100)
const MAX_WIDTH = 1920;

async function optimizeImage(inputPath, outputPath) {
    const metadata = await sharp(inputPath).metadata();

    // Chỉ resize nếu ảnh lớn hơn MAX_WIDTH
    let pipeline = sharp(inputPath);
    if (metadata.width && metadata.width > MAX_WIDTH) {
        pipeline = pipeline.resize(MAX_WIDTH, null, { withoutEnlargement: true });
    }

    // Convert sang WebP
    await pipeline
        .webp({ quality: QUALITY })
        .toFile(outputPath.replace(/\.(jpg|jpeg|png)$/i, '.webp'));

    console.log(`✓ Optimized: ${path.basename(inputPath)} -> ${path.basename(inputPath).replace(/\.(jpg|jpeg|png)$/i, '.webp')}`);
}

async function optimizeImages() {
    // Tạo thư mục uploads nếu chưa có
    if (!fs.existsSync(UPLOADS_DIR)) {
        fs.mkdirSync(UPLOADS_DIR, { recursive: true });
        console.log('Created uploads directory. Add your images and run again.');
        return;
    }

    const files = fs.readdirSync(UPLOADS_DIR);
    const imageFiles = files.filter(f => f.match(/\.(jpg|jpeg|png)$/i));

    if (imageFiles.length === 0) {
        console.log('No JPG/PNG images found in public/uploads/');
        return;
    }

    console.log(`\nOptimizing ${imageFiles.length} images...\n`);

    for (const file of imageFiles) {
        const inputPath = path.join(UPLOADS_DIR, file);
        const outputPath = path.join(UPLOADS_DIR, file);
        await optimizeImage(inputPath, outputPath);
    }

    console.log('\n✅ Optimization complete!');
    console.log('Original files are kept. New .webp files were created.');
    console.log('\nTo use WebP in your code:');
    console.log('  <img src="/uploads/photo.webp" />');
}

optimizeImages().catch(console.error);
