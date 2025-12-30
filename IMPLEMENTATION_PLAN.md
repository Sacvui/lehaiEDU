# Kế hoạch Rebuild LeHai.edu.vn bằng Next.js

Mục tiêu quan trọng: **Đẹp hơn, Xịn hơn, SEO tốt hơn**.
Phong cách thiết kế: Hiện đại, Premium (Glassmorphism, Typography chuẩn, Animation mượt mà), lấy cảm hứng từ `ncskit.org` nhưng cá nhân hóa cho thương hiệu Le Phuc Hai.

## 1. Công nghệ & Kiến trúc (Tech Stack)
*   **Framework**: Next.js 14+ (App Router) - Chuẩn mới nhất, tối ưu SEO tuyệt đối.
*   **Language**: TypeScript - Đảm bảo code sạch, dễ bảo trì.
*   **Styling**: Tailwind CSS - Linh hoạt, dễ tùy biến giao diện "xịn".
*   **UI Library**: Shadcn/ui (dựa trên Radix UI) + Framer Motion (Animation).
*   **Icons**: Lucide React - Bộ icon hiện đại, tinh tế.
*   **Fonts**: Inter (Google Fonts) hoặc Geist Sans (Font mới của Vercel) cho vẻ đẹp hiện đại, sạch sẽ.

## 2. Cấu trúc trang web (Sitemap)
Dựa trên nội dung hiện tại và nâng cấp:
1.  **Trang chủ (Homework)**:
    *   **Hero Section**: Ấn tượng mạnh, ảnh chân dung chuyên nghiệp (đã tách nền hoặc blend màu), slogan động (Typewriter effect).
    *   **About Brief**: Giới thiệu ngắn gọn (TS. Lê Phúc Hải - Chuyên gia...).
    *   **Featured Courses/Books**: Slider các khóa học/sách nổi bật 3D carousel.
    *   **Podcast/Media Showcase**: Tích hợp player nghe thử trực tiếp (Spotify/Apple Podcast API demo).
    *   **Community/Testimonials**: Hiệu ứng Marquee (chạy ngang) logo đối tác hoặc feedback học viên.
    *   **Newsletter Signup**: Form đăng ký nhận tin thiết kế tối giản, sang trọng.
2.  **About (Về tôi)**: Timeline sự nghiệp, thành tựu, gallery ảnh hoạt động.
3.  **Blog/Knowledge Hub**:
    *   Giao diện Grid Masonry (xếp gạch) hiện đại.
    *   Category filter (Research, Tech, Life).
    *   Tối ưu SEO: Table of Contents tự động, Related Posts.
4.  **Courses/Training**: Landing page riêng cho từng khóa học.
5.  **Contact**: Form liên hệ AJAX, tích hợp bản đồ style tối (Dark mode map).

## 3. Chiến lược SEO (SEO Strategy)
*   **Technical SEO**:
    *   Server-Side Rendering (SSR) cho nội dung động.
    *   Semantic HTML (H1, H2, Article tags).
    *   Sitemap.xml & Robots.txt tự động tạo.
*   **On-page SEO**:
    *   Dynamic Metadata (Title, Description, Open Graph Images) cho từng bài viết/trang.
    *   Structured Data (Schema.org): Person, Course, BlogPosting.
*   **Performance**:
    *   Điểm Lighthouse 95-100 (Performance, Accessibility, Best Practices, SEO).
    *   Tối ưu ảnh (Next/Image), lazy loading.

## 4. Lộ trình triển khai (Roadmap)
### Giai đoạn 1: Khởi tạo & Giao diện cốt lõi (Core UI)
- [ ] Khởi tạo Next.js project tại `d:/lehaiEDU`.
- [ ] Thiết lập Tailwind Config (Màu sắc thương hiệu: Deep Blue, Slate, White).
- [ ] Xây dựng Header (Sticky, Glassmorphism) & Footer.
- [ ] Xây dựng Hero Section (Animation chào mừng).

### Giai đoạn 2: Phát triển các trang chính
- [ ] Trang chủ (Home) với các section giới thiệu.
- [ ] Trang Blog (Danh sách & Chi tiết bài viết - Dùng Mock data trước).
- [ ] Trang About & Contact.

### Giai đoạn 3: Tính năng & Tối ưu
- [ ] Tích hợp Dark/Light mode.
- [ ] Responsive Mobile (Menu hamburger xịn).
- [ ] Tối ưu SEO technical.

### Giai đoạn 4: Content Migration (Nếu cần)
- [ ] Chuyển đổi bài viết từ WordPress sang (sẽ bàn phương án: Headless WP hoặc chuyển hẳn sang Markdown/Sanity).

---
**Bạn có đồng ý với kế hoạch này không? Nếu đồng ý, tôi sẽ bắt đầu Giai đoạn 1 ngay lập tức.**
