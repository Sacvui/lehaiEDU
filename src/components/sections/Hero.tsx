'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Building2, Microscope, ArrowRight, User } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center pt-24 md:pt-32 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white selection:bg-amber-200 dark:selection:bg-amber-500/30 selection:text-amber-900 dark:selection:text-amber-200">

            {/* Subtle Texture Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#d4a57420_1px,transparent_1px),linear-gradient(to_bottom,#d4a57420_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

            {/* Warm Ambient Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-amber-400/10 dark:bg-amber-500/10 rounded-[100%] blur-[120px] opacity-40 dark:opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-400/10 dark:bg-orange-500/10 rounded-[100%] blur-[140px] opacity-30 dark:opacity-15"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">

                    {/* Left Column - Text Content */}
                    <div className="flex flex-col space-y-8 text-center lg:text-left">

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-amber-700/30 bg-amber-50/80 dark:bg-amber-950/30 dark:border-amber-600/30 text-amber-900 dark:text-amber-400 text-sm font-medium backdrop-blur-sm self-center lg:self-start"
                        >
                            <Sparkles className="w-4 h-4" />
                            <span>PhD Research • Speaker • Mentor</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight"
                        >
                            <span className="block text-slate-800 dark:text-slate-200">
                                Le Phuc Hai
                            </span>
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 dark:from-amber-500 dark:to-orange-400">
                                Speaker. Researcher.
                            </span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed"
                        >
                            With over 10 years of experience in business management, digital transformation, and distribution system development. I specialize in helping enterprises restructure efficiently, enhance operational effectiveness, and optimize commercial performance.
                        </motion.p>

                        <motion.blockquote
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="text-base md:text-lg italic text-slate-500 dark:text-slate-500 leading-relaxed border-l-4 border-amber-600 pl-4"
                        >
                            "Technology should not be a gatekeeper, but a pathfinder – helping our thinking soar freely and reach new heights."
                        </motion.blockquote>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="flex flex-col sm:flex-row items-center lg:items-start gap-5 pt-4"
                        >
                            <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-gradient-to-r from-amber-700 to-orange-600 hover:from-amber-600 hover:to-orange-500 text-white shadow-lg border-0">
                                <Building2 className="mr-2 h-5 w-5" />
                                Consulting Strategy
                                <ArrowRight className="ml-2 w-4 h-4 opacity-50" />
                            </Button>

                            <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white backdrop-blur-sm bg-white/50 dark:bg-slate-900/50">
                                <Microscope className="mr-2 h-5 w-5" />
                                NCSKIT Ecosystem
                            </Button>
                        </motion.div>

                        {/* Social Proof */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="pt-8 flex flex-col items-center lg:items-start gap-4"
                        >
                            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500 font-semibold">Founding Ecosystem</p>
                            <div className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-6">
                                <a href="#" className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                    <span className="font-bold text-slate-700 dark:text-white tracking-wider group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors text-sm">ANMINH GROUP</span>
                                </a>
                                <a href="https://ncskit.org" target="_blank" className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                    <span className="font-bold text-slate-700 dark:text-white tracking-wider group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors text-sm">NCSKIT.ORG</span>
                                </a>
                                <a href="https://ammedtech.com" target="_blank" className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 hover:bg-slate-50 dark:hover:bg-slate-800 transition-all">
                                    <span className="font-bold text-slate-700 dark:text-white tracking-wider group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors text-sm">AMMEDTECH</span>
                                </a>
                            </div>
                        </motion.div>

                    </div>

                    {/* Right Column - Portrait Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="relative hidden lg:block"
                    >
                        <div className="relative aspect-[3/4] max-w-md mx-auto">
                            {/* Decorative background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 to-orange-500/20 dark:from-amber-500/10 dark:to-orange-600/10 rounded-3xl rotate-3"></div>

                            {/* Portrait Image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-slate-800">
                                <img
                                    src="/uploads/profile-street.jpg"
                                    alt="Le Phuc Hai - PhD Researcher and Speaker"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Accent decoration */}
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full blur-3xl opacity-30"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
