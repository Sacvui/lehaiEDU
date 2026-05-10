'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, BrainCircuit, FlaskConical, BarChart3, Globe, Zap, ArrowRight, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceGroups = [
    {
        title: "Niềm tin & Nguồn gốc",
        brand: "fwd LIFEchain",
        description: "Farm Worth Driven (fwd) - Tương lai của niềm tin trong nông nghiệp bền vững thông qua Blockchain.",
        items: [
            { icon: Zap, label: "Xác thực Nguồn gốc", desc: "Chứng thực nguồn gốc thời gian thực bằng mật mã học tiên tiến." },
            { icon: Network, label: "Network Pulse", desc: "Hệ sinh thái phi tập trung với 1100+ nodes đảm bảo tính toàn vẹn." },
            { icon: Globe, label: "Tiêu chuẩn Toàn cầu", desc: "Kết nối chuỗi cung ứng công nghiệp với xác thực học thuật nghiêm ngặt." },
            { icon: Layers, label: "Camera Verification", desc: "Kiểm tra chất lượng và nguồn gốc tức thì qua giao diện di động." }
        ],
        color: "from-emerald-500 to-teal-500",
        bg: "bg-emerald-950/20",
        border: "border-emerald-500/20"
    },
    {
        title: "Advanced Statistics",
        brand: "ncsStat",
        description: "Scientific Standard for Researchers. Professional data analysis platform powered by R-Engine and AI Assistant. Absolute accuracy, maximum security, zero installation.",
        items: [
            { icon: BrainCircuit, label: "Trợ lý Nghiên cứu AI", desc: "Tối ưu hóa tổng quan tài liệu và xây dựng giả thuyết bằng AI." },
            { icon: Database, label: "Phân tích R-Engine", desc: "Độ chính xác tuyệt đối trong thống kê nâng cao, không cần cài đặt." },
            { icon: FlaskConical, label: "Tính Nghiêm túc Khoa học", desc: "Công cụ mô hình hóa SEM/CFA và làm sạch dữ liệu chuẩn quốc tế." },
            { icon: BarChart3, label: "Phòng Lab Bảo mật", desc: "Bảo mật và quyền riêng tư tối đa cho các nghiên cứu học thuật quan trọng." }
        ],
        color: "from-amber-500 to-orange-500",
        bg: "bg-amber-950/20",
        border: "border-amber-500/20"
    }
];

export function Services() {
    return (
        <section id="solutions" className="py-24 bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/20 dark:bg-slate-950 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-amber-400/10 dark:bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-400/10 dark:bg-purple-600/10 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
                        Giải Pháp <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 dark:from-amber-400 dark:to-orange-400">Chiến Lược & Nghiên Cứu</span>
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
                        Connecting enterprise strategy with advanced academic research tools.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                    {serviceGroups.map((group, groupIndex) => (
                        <motion.div
                            key={group.title}
                            initial={{ opacity: 0, x: groupIndex === 0 ? -20 : 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className={`rounded-3xl p-8 border ${group.border} ${group.bg} backdrop-blur-sm relative overflow-hidden group hover:bg-slate-900/50 transition-colors`}
                        >
                            {/* Glow effect on hover */}
                            <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${group.color} blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity`}></div>

                            <div className="relative z-10">
                                <div className="flex items-center justify-between mb-8">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{group.title}</h3>
                                        <span className={`text-transparent bg-clip-text bg-gradient-to-r ${group.color} font-bold tracking-wider text-sm`}>
                                            POWERED BY {group.brand}
                                        </span>
                                    </div>
                                    <Button variant="outline" className="border-slate-700 hover:bg-white hover:text-slate-900 text-slate-300 hidden sm:flex">
                                        Explore <ArrowRight className="w-4 h-4 ml-2" />
                                    </Button>
                                </div>

                                <p className="text-slate-400 mb-8">{group.description}</p>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    {group.items.map((item) => (
                                        <div key={item.label} className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-slate-600 transition-colors">
                                            <item.icon className={`w-8 h-8 mb-3 bg-gradient-to-br ${group.color} text-white p-1.5 rounded-lg`} />
                                            <h4 className="font-semibold text-white mb-1">{item.label}</h4>
                                            <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Project Detail - ncsStat */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="mt-16 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl"
                >
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="md:w-1/4">
                            <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">About ncsStat Project</h4>
                            <div className="h-1 w-12 bg-amber-500 rounded-full"></div>
                        </div>
                        <div className="md:w-3/4">
                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed italic">
                                "ncsStat is a specialized platform supporting data processing for Doctoral candidates. We focus on the accuracy of R algorithms and user interface convenience. The system is currently in Beta and is continuously improved based on feedback from the scientific community. Our goal is to accompany you on the path to conquering international publications."
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
