'use client';

import React from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 relative overflow-hidden">
            {/* Tech Background Grid - Subtle */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:2rem_2rem] pointer-events-none"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="grid md:grid-cols-4 gap-8 mb-12">
                    <div className="md:col-span-2">
                        <Link href="/" className="flex items-center gap-2 mb-4 group">
                            <div className="relative w-8 h-8 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all duration-300">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                                </svg>
                            </div>
                            <span className="font-bold text-xl text-white tracking-tight">Le Phuc Hai</span>
                        </Link>
                        <p className="max-w-xs text-sm leading-relaxed">
                            Bridging the gap between scientific rigor and enterprise strategy. Empowering the next generation of researchers and leaders.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Ecosystem</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a href="https://ncskit.org" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">NCSKIT.org</a></li>
                            <li><a href="https://ammedtech.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">AM Medtech</a></li>
                            <li><a href="#" className="hover:text-cyan-400 transition-colors">Anminh Group</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Connect</h4>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/in/hailp/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all hover:scale-110">
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a href="mailto:contact@lehai.edu.vn" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all hover:scale-110">
                                <Mail className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-slate-800 hover:text-white transition-all hover:scale-110">
                                <Github className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-xs gap-4">
                    <div className="flex items-center gap-2">
                        <span>&copy; {currentYear} Le Phuc Hai. All rights reserved.</span>
                    </div>
                    <div className="flex gap-6">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
