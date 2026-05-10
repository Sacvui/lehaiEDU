import React from 'react';

export default function TermsPage() {
    return (
        <div className="min-h-screen pt-32 pb-16 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Điều khoản Sử dụng</h1>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>Khi truy cập và sử dụng website lehai.edu.vn, bạn đồng ý tuân thủ các điều khoản sau đây.</p>
                    <h2>1. Sở hữu trí tuệ</h2>
                    <p>Toàn bộ nội dung, bài viết (bao gồm chuỗi NCS101) và các công cụ trên ncsStat thuộc sở hữu của NCS Lê Phúc Hải, trừ khi có quy định khác.</p>
                    <h2>2. Mục đích sử dụng</h2>
                    <p>Website được cung cấp cho mục đích chia sẻ kiến thức nghiên cứu khoa học, chuyển đổi số và tư vấn chiến lược.</p>
                    <h2>3. Miễn trừ trách nhiệm</h2>
                    <p>Các kiến thức chia sẻ dựa trên kinh nghiệm cá nhân và nghiên cứu học thuật. Người dùng nên cân nhắc áp dụng phù hợp với bối cảnh cụ thể của mình.</p>
                </div>
            </div>
        </div>
    );
}
