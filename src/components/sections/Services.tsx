'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Network, Database, BrainCircuit, FlaskConical, BarChart3, Globe, Zap, ArrowRight, Layers } from 'lucide-react';
import { Button } from '@/components/ui/button';

const serviceGroups = [
    {
        title: "Trust & Provenance",
        brand: "fwd LIFEchain",
        description: "Farm Worth Driven (fwd) - The Future of Trust in sustainable agriculture through blockchain.",
        items: [
            { icon: Zap, label: "Verify Origin", desc: "Real-time provenance certification using advanced cryptography." },
            { icon: Network, label: "Network Pulse", desc: "Decentralized ecosystem with 1100+ active nodes for maximum integrity." },
            { icon: Globe, label: "Global Standards", desc: "Aligning industrial supply chains with rigorous academic verification." },
            { icon: Layers, label: "Camera Verification", desc: "Instant product quality and origin check via mobile-first interface." }
        ],
        color: "from-emerald-500 to-teal-500",
        bg: "bg-emerald-950/20",
        border: "border-emerald-500/20"
    },
    {
        title: "Scientific Research OS",
        brand: "NCSKIT.ORG",
        description: "The Scientific Standard for Researchers - Professional data analysis powered by R-Engine.",
        items: [
            { icon: BrainCircuit, label: "AI Research Assistant", desc: "Streamlining literature review and hypothesis generation with AI." },
            { icon: Database, label: "R-Engine Analysis", desc: "Absolute accuracy in advanced statistics with zero installation required." },
            { icon: FlaskConical, label: "Scientific Rigor", desc: "Professional-grade SEM/CFA modeling and data cleaning tools." },
            { icon: BarChart3, label: "Secure Data Lab", desc: "Maximum security and privacy for high-stakes academic research." }
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
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white">
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
            </div>
        </section>
    );
}
