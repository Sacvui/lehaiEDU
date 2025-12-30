'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Award, Briefcase, GraduationCap, ArrowUpRight } from 'lucide-react';

export function About() {
    return (
        <section id="about" className="py-24 bg-slate-950 relative overflow-hidden text-white">
            {/* Tech Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f1a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f1a_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left: Visual Identity */}
                    <div className="w-full lg:w-1/2 relative group">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shadow-2xl group-hover:shadow-cyan-500/10 transition-shadow duration-500">
                            {/* Tech Frames */}
                            <div className="absolute inset-0 border-[0.5px] border-cyan-500/20 m-2 rounded-xl"></div>
                            <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-cyan-400"></div>
                            <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-blue-400"></div>

                            {/* Profile Image */}
                            <img
                                src="/uploads/profile-founder.jpg"
                                alt="Dr. Le Phuc Hai"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60"></div>

                            {/* Content Overlay */}
                            <div className="absolute bottom-32 left-0 right-0 text-center z-20">
                                <span className="block text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Le Phuc Hai</span>
                                <span className="text-sm text-slate-300 font-mono bg-slate-900/50 px-2 py-1 rounded">ID: SCHOLAR_PRACTITIONER_01</span>
                            </div>

                            {/* Floating Stats Card - Glassmorphism */}
                            <div className="absolute bottom-8 left-8 right-8 bg-slate-900/80 backdrop-blur-md p-6 rounded-xl border border-slate-700/50">
                                <div className="flex justify-between items-center text-center">
                                    <div>
                                        <div className="text-2xl font-bold text-white">15+</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wider">Years</div>
                                    </div>
                                    <div className="w-px h-8 bg-slate-700"></div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">3</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wider">Startups</div>
                                    </div>
                                    <div className="w-px h-8 bg-slate-700"></div>
                                    <div>
                                        <div className="text-2xl font-bold text-white">10+</div>
                                        <div className="text-xs text-slate-400 uppercase tracking-wider">Publications</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Narrative */}
                    <div className="w-full lg:w-1/2 space-y-8">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
                                <Award className="w-3 h-3" />
                                About The Founder
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                                Bridging the Void Between <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Science & Commerce</span>
                            </h3>
                            <p className="text-lg text-slate-400 leading-relaxed">
                                I operate at the intersection of rigorous academia and high-stakes enterprise. My methodology applies the precision of scientific research (via <span className="text-white hover:text-cyan-400 cursor-pointer transition-colors">NCSKIT</span>) to solve complex business inefficiencies (via <span className="text-white hover:text-blue-400 cursor-pointer transition-colors">AM Medtech</span>).
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-5">
                            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500/50 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <Briefcase className="w-5 h-5 text-cyan-400" />
                                    <h4 className="font-bold text-white text-lg">Global Leadership</h4>
                                </div>
                                <ul className="space-y-3">
                                    {['Japfa Comfeed', 'Coca-Cola', 'Mondelez Kinh Do', 'Nova Group'].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500/50 transition-colors">
                                <div className="flex items-center gap-3 mb-4">
                                    <GraduationCap className="w-5 h-5 text-purple-400" />
                                    <h4 className="font-bold text-white text-lg">Academic Impact</h4>
                                </div>
                                <ul className="space-y-3">
                                    {['PhD Researcher (Czech)', 'Lecturer @ TDTU', 'Founder NCSKIT.ORG', 'Intl. Publications'].map(item => (
                                        <li key={item} className="flex items-center gap-2 text-slate-400 text-sm">
                                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="flex gap-4 pt-4">
                            <Button className="bg-white text-slate-950 hover:bg-slate-200">
                                See Full Curriculum Vitae
                            </Button>
                            <Button variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800">
                                Visit LinkedIn Profile <ArrowUpRight className="ml-2 w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
