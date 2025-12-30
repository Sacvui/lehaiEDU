'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, Zap, Layers, BarChart3, Target, Search, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ConsultingPage() {
    return (
        <main className="bg-slate-950 min-h-screen text-white selection:bg-amber-500/30 selection:text-amber-200">
            {/* Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950"></div>
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="inline-block py-1 px-3 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-medium tracking-wider mb-6">
                            ENTERPRISE TRANSFORMATION
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
                            Strategic Vision.<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                Precision Execution.
                            </span>
                        </h1>
                        <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-10">
                            We don't just advise; we architect the future of your distribution channels.
                            Bridging the gap between high-level board strategy and ground-level operational reality.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a href="mailto:contact@lehai.edu.vn">
                                <Button size="lg" className="h-14 px-8 rounded-full bg-amber-600 hover:bg-amber-700 text-white text-lg">
                                    Schedule a Discovery Call <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Abstract decorative shapes */}
                <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-amber-600/20 rounded-full blur-[128px]"></div>
                <div className="absolute top-1/2 -right-32 w-96 h-96 bg-orange-600/10 rounded-full blur-[128px]"></div>
            </section>

            {/* The Methodology */}
            <section className="py-24 bg-slate-900/50 relative">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">The <span className="text-amber-500">AM Medtech</span> Methodology</h2>
                        <p className="text-slate-400">A rigorous, data-driven approach to solving complex business problems.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            { icon: Search, title: "Diagnosis", desc: "Deep-dive auditing of current DMS, sales processes, and data sufficiency." },
                            { icon: Target, title: "Strategy", desc: "Designing the Route-to-Market (RTM) model, KPI frameworks, and tech stack." },
                            { icon: Zap, title: "Deployment", desc: "Agile implementation, team training, and real-time performance monitoring." }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.2 }}
                                className="p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-amber-500/50 transition-colors group"
                            >
                                <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                    <item.icon className="w-7 h-7 text-amber-500" />
                                </div>
                                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Core Services */}
            <section className="py-24 relative overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                                End-to-End <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">
                                    Value Creation
                                </span>
                            </h2>
                            <p className="text-lg text-slate-400 mb-8">
                                Specializing in the Pharmaceutical and FMCG sectors, we deliver solutions that directly impact the bottom line.
                            </p>

                            <div className="space-y-6">
                                {[
                                    "Distribution Management System (DMS) Optimization",
                                    "Sales Force Automation & Efficiency",
                                    "Big Data Analytics & Forecasting",
                                    "Omnichannel Customer Experience Design"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-6 h-6 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500">
                                            <CheckCircle2 className="w-4 h-4" />
                                        </div>
                                        <span className="text-lg font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-amber-500 to-orange-600 rounded-2xl rotate-3 blur opacity-20"></div>
                            <div className="relative bg-slate-900 border border-slate-800 rounded-2xl p-8 grid gap-6">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                                        <Network className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                                        <div className="font-bold">DMS Core</div>
                                    </div>
                                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                                        <Database className="w-8 h-8 text-purple-500 mx-auto mb-2" />
                                        <div className="font-bold">Big Data</div>
                                    </div>
                                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                                        <Layers className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                        <div className="font-bold">Platform</div>
                                    </div>
                                    <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-center">
                                        <BarChart3 className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                                        <div className="font-bold">KPIs</div>
                                    </div>
                                </div>
                                <div className="text-center pt-4 border-t border-slate-800">
                                    <p className="text-sm text-slate-500">Integrated Technology Stack</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
