'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { GraduationCap, Users, ArrowRight, ExternalLink } from 'lucide-react';

export function Mentorship() {
    return (
        <section id="mentorship" className="py-24 bg-white dark:bg-slate-900 relative">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Left Column: Content */}
                    <div className="lg:w-1/3 flex flex-col justify-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
                                <GraduationCap className="w-4 h-4" />
                                For Students & Academics
                            </span>

                            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-6 text-slate-900 dark:text-white">
                                Empowering the Next <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                    Generation
                                </span>
                            </h2>

                            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Beyond enterprise consulting, I am deeply committed to nurturing young researchers and students. My goal is to bridge the gap between academic theory and practical application.
                            </p>

                            <div className="flex flex-col gap-4">
                                <a href="mailto:contact@lehai.edu.vn?subject=Research%20Collaboration" className="w-full sm:w-auto">
                                    <Button size="lg" className="w-full sm:w-auto gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200">
                                        <Users className="w-5 h-5" />
                                        Join My Research Team
                                    </Button>
                                </a>

                                <a href="https://ncskit.org" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                                    <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
                                        <ExternalLink className="w-5 h-5" />
                                        Explore NCSKIT
                                    </Button>
                                    <p className="mt-2 text-xs text-slate-500 dark:text-slate-500 pl-1">
                                        * Free AI tools for Literature Review & Stats
                                    </p>
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Column: Gallery */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-center">
                            <motion.div
                                className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4] relative group"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                            >
                                <img
                                    src="/uploads/teaching-workshop.jpg"
                                    alt="University Workshop"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <span className="text-white font-medium">Career Orientation Workshop</span>
                                </div>
                            </motion.div>

                            <motion.div
                                className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4] relative group md:mt-12"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                            >
                                <img
                                    src="/uploads/teaching-class.png"
                                    alt="Classroom Discussion"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                                    <span className="text-white font-medium">Classroom Interactions</span>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
