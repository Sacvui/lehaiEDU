import React from 'react';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen pt-32 pb-16 bg-white dark:bg-slate-950">
            <div className="container mx-auto px-4 max-w-4xl">
                <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-8">Chính sách Bảo mật</h1>
                <div className="prose prose-lg dark:prose-invert max-w-none">
                    <p>Chào mừng bạn đến với website của NCS Lê Phúc Hải. Chúng tôi cam kết bảo vệ quyền riêng tư và dữ liệu cá nhân của bạn.</p>
                    <h2>1. Thu thập thông tin</h2>
                    <p>Chúng tôi thu thập thông tin khi bạn đăng ký tư vấn hoặc liên hệ với chúng tôi thông qua các biểu mẫu trên trang web.</p>
                    <h2>2. Sử dụng thông tin</h2>
                    <p>Thông tin của bạn được sử dụng để cung cấp dịch vụ tư vấn, cải thiện trải nghiệm người dùng và gửi các thông tin học thuật liên quan.</p>
                    <h2>3. Bảo mật dữ liệu</h2>
                    <p>Chúng tôi áp dụng các biện pháp bảo mật nghiêm ngặt để đảm bảo an toàn cho dữ liệu của bạn trên hệ thống ncsStat và các nền tảng liên quan.</p>
                </div>
            </div>
        </div>
    );
}
