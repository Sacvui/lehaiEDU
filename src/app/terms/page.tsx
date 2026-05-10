import React from 'react';
import { Scale, Book, ShieldCheck, AlertCircle, Info } from 'lucide-react';

export default function TermsPage() {
    const lastUpdated = "10/05/2026";

    return (
        <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-bold uppercase tracking-widest mb-6">
                        <Scale className="w-4 h-4" />
                        Legal Framework
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Điều khoản Sử dụng</h1>
                    <p className="text-slate-500 dark:text-slate-400">Cập nhật lần cuối: {lastUpdated}</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800 space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
                    
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <Info className="w-6 h-6 text-amber-500" />
                            <h2 className="text-2xl font-bold">1. Chấp thuận điều khoản</h2>
                        </div>
                        <p>
                            Khi truy cập và sử dụng website <strong>lehai.edu.vn</strong>, bạn đồng ý tuân thủ các điều khoản và điều kiện được nêu tại đây. Nếu bạn không đồng ý với bất kỳ phần nào của các điều khoản này, vui lòng ngừng sử dụng dịch vụ ngay lập tức.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <Book className="w-6 h-6 text-blue-500" />
                            <h2 className="text-2xl font-bold">2. Sở hữu trí tuệ</h2>
                        </div>
                        <p>
                            Toàn bộ nội dung trên trang web này, bao gồm nhưng không giới hạn ở: các bài viết chuyên sâu (Chuỗi NCS101), cấu trúc phương pháp luận, mã nguồn hệ thống <strong>ncsStat</strong>, và các ấn phẩm được trình bày, đều thuộc quyền sở hữu trí tuệ của <strong>NCS Lê Phúc Hải</strong>.
                        </p>
                        <p className="italic bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border-l-4 border-blue-500">
                            Việc trích dẫn nội dung phải được thực hiện theo đúng quy chuẩn học thuật quốc tế (APA/Harvard) và phải dẫn nguồn trực tiếp từ website này.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <ShieldCheck className="w-6 h-6 text-emerald-500" />
                            <h2 className="text-2xl font-bold">3. Trách nhiệm người dùng</h2>
                        </div>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Không sử dụng website cho các mục đích bất hợp pháp hoặc vi phạm đạo đức nghiên cứu khoa học.</li>
                            <li>Không cố gắng can thiệp vào hoạt động của hệ thống ncsStat hoặc truy cập trái phép dữ liệu của người dùng khác.</li>
                            <li>Sử dụng các công cụ AI và hỗ trợ nghiên cứu trên nền tảng này một cách có trách nhiệm.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <AlertCircle className="w-6 h-6 text-rose-500" />
                            <h2 className="text-2xl font-bold">4. Miễn trừ trách nhiệm</h2>
                        </div>
                        <p>
                            Các thông tin và công cụ được cung cấp trên website này phục vụ cho mục đích tham khảo học thuật và tư vấn chiến lược. Mặc dù chúng tôi luôn nỗ lực đảm bảo độ chính xác (đặc biệt là các thuật toán R trên ncsStat), người dùng hoàn toàn chịu trách nhiệm về kết quả cuối cùng khi áp dụng vào thực tế nghiên cứu hoặc kinh doanh của mình.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 text-center">
                        <p>Mọi thắc mắc về điều khoản sử dụng, vui lòng liên hệ Telegram: <strong>@ncskit</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
