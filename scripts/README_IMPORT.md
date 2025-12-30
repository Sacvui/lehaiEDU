# Hướng Dẫn Import Blog Content

## Bước 1: Lấy Write Token từ Sanity

1. Vào: https://www.sanity.io/manage/personal/tokens
2. Click "Add API token"
3. Name: "Blog Import"
4. Permissions: **Editor**
5. Copy token (dạng: `sk...`)

## Bước 2: Thêm Token vào Environment

Tạo file `.env.local` (nếu chưa có) và thêm:
```env
SANITY_WRITE_TOKEN=sk_your_token_here
```

## Bước 3: Chạy Script

```bash
# Install dependencies (nếu chưa)
npm install @sanity/client tsx

# Run import script
npx tsx scripts/import-blog-content.ts
```

## Kết Quả

Script sẽ tạo:
- ✅ 5 Categories (Digital Transformation, Research & Innovation, Enterprise Strategy, AI & Technology, Case Studies)
- ✅ 3 Authors (Le Phuc Hai, HaiLP, Lê Phúc Hải)
- ✅ 20 Blog Posts (nội dung tiếng Việt, giọng văn vui vẻ, insight chất lượng)

## Kiểm Tra

Sau khi chạy xong:
1. Vào `http://localhost:9999/studio` → Xem categories, authors, posts
2. Vào `http://localhost:9999/blog` → Xem blog listing
3. Click vào bài viết → Xem chi tiết

## Lưu Ý

- Script sẽ tạo mới tất cả content (không update existing)
- Nếu muốn chạy lại, xóa content cũ trong Studio trước
- Có thể edit nội dung sau khi import trong Studio
