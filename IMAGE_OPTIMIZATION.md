# Image Optimization Guide

## Current Setup
- Next.js đã được cấu hình dùng **AVIF + WebP** format
- **30 ngày cache** cho optimized images

## Để tối ưu images:

### 1. Sử dụng Next.js Image Component
```tsx
import Image from 'next/image'

// Thay thế <img> bằng Next.js Image
<Image
  src="/uploads/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..." // base64 của ảnh thumbnail
/>
```

### 2. Chuyển đổi sang WebP/AVIF
Dùng công cụ như:
- **Squoosh.app** (online, miễn phí)
- **Sharp** (Node.js library)
- **ImageMagick** (command line)

### 3. Compress trước khi upload
- Target: **< 200KB** cho mỗi ảnh
- Max width: **1920px** (đủ cho desktop)

### 4. Tạo multiple sizes
```tsx
// Responsive images
<Image
  src="/uploads/photo.jpg"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
/>
```

## Batch Convert Script (Node.js)
```bash
npm install sharp
```

```javascript
// optimize-images.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImages(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    if (file.match(/\.(jpg|jpeg|png)$/i)) {
      const inputPath = path.join(dir, file);
      const outputPath = path.join(dir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
      
      await sharp(inputPath)
        .resize(1920, null, { withoutEnlargement: true })
        .webp({ quality: 80 })
        .toFile(outputPath);
      
      console.log(`Optimized: ${file} -> ${file.replace(/\.(jpg|jpeg|png)$/i, '.webp')}`);
    }
  }
}

optimizeImages('./public/uploads');
```
