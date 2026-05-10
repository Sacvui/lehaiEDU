import React from 'react';
import { Shield, Lock, Eye, FileText, Bell } from 'lucide-react';

export default function PrivacyPage() {
    const lastUpdated = "10/05/2026";

    return (
        <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
                        <Shield className="w-4 h-4" />
                        Trust & Privacy
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Chính sách Bảo mật</h1>
                    <p className="text-slate-500 dark:text-slate-400">Cập nhật lần cuối: {lastUpdated}</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800 space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
                    
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <Eye className="w-6 h-6 text-blue-500" />
                            <h2 className="text-2xl font-bold">1. Tổng quan</h2>
                        </div>
                        <p>
                            Chào mừng bạn đến với nền tảng học thuật của <strong>NCS Lê Phúc Hải</strong>. Chúng tôi tôn trọng quyền riêng tư của bạn và cam kết bảo vệ dữ liệu cá nhân mà bạn chia sẻ. Chính sách này giải thích cách chúng tôi thu thập, sử dụng và bảo vệ thông tin khi bạn sử dụng hệ thống <strong>ncsStat</strong> và các dịch vụ liên quan.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <FileText className="w-6 h-6 text-amber-500" />
                            <h2 className="text-2xl font-bold">2. Thông tin thu thập</h2>
                        </div>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Thông tin cá nhân:</strong> Họ tên, email, và thông tin liên lạc khi bạn đăng ký tư vấn hoặc bản tin.</li>
                            <li><strong>Dữ liệu nghiên cứu:</strong> Các tham số phân tích được xử lý qua hệ thống ncsStat (chúng tôi cam kết không lưu trữ dữ liệu thô của người dùng trừ khi có sự đồng ý bằng văn bản).</li>
                            <li><strong>Dữ liệu kỹ thuật:</strong> Địa chỉ IP, loại trình duyệt và hành vi sử dụng trang web để tối ưu hóa trải nghiệm.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <Lock className="w-6 h-6 text-emerald-500" />
                            <h2 className="text-2xl font-bold">3. Bảo mật dữ liệu</h2>
                        </div>
                        <p>
                            Chúng tôi sử dụng các tiêu chuẩn mã hóa SSL/TLS tiên tiến để bảo vệ dữ liệu truyền tải. Hệ thống <strong>ncsStat</strong> được vận hành trên môi trường cô lập, đảm bảo tính toàn vẹn và bảo mật tuyệt đối cho các kết quả nghiên cứu khoa học của bạn.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <Bell className="w-6 h-6 text-purple-500" />
                            <h2 className="text-2xl font-bold">4. Quyền của người dùng</h2>
                        </div>
                        <p>
                            Bạn có quyền yêu cầu truy cập, chỉnh sửa hoặc xóa thông tin cá nhân của mình bất kỳ lúc nào. Mọi yêu cầu vui lòng gửi về email chính thức: <a href="mailto:hailp@ncskit.org" className="text-blue-500 hover:underline">hailp@ncskit.org</a>.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500">
                        <p>Bằng việc tiếp tục sử dụng dịch vụ của chúng tôi, bạn đồng ý với các điều khoản trong Chính sách Bảo mật này.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
