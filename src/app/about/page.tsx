import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BookOpen, Brain, Briefcase, GraduationCap, Award, Network } from 'lucide-react';

export const dynamic = 'force-dynamic';

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-slate-950 text-white selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">

            {/* 1. HERO SECTION */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                {/* Background Tech Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        {/* Profile Image & Visuals */}
                        <div className="w-full md:w-1/2 relative group">
                            <div className="relative w-full aspect-[4/5] md:aspect-square max-w-md mx-auto rounded-3xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl shadow-cyan-500/10">
                                <Image
                                    src="/uploads/profile-founder.jpg"
                                    alt="Le Phuc Hai - PhD Researcher"
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-80"></div>

                                {/* Overlay Card */}
                                <div className="absolute bottom-6 left-6 right-6 p-6 bg-slate-950/80 backdrop-blur-xl border border-slate-800 rounded-2xl transform transition-transform duration-500 group-hover:-translate-y-2">
                                    <div className="flex items-center gap-4 mb-2">
                                        <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                                            <Brain className="w-5 h-5" />
                                        </div>
                                        <span className="font-mono text-cyan-400 text-sm font-bold tracking-wider">SCHOLAR-PRACTITIONER</span>
                                    </div>
                                    <p className="text-slate-300 text-sm italic">
                                        "Bridging the chasm between academic rigor and enterprise velocity."
                                    </p>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -z-10 top-10 -left-10 w-24 h-24 border-2 border-dashed border-slate-800 rounded-full animate-spin-slow"></div>
                            <div className="absolute -z-10 bottom-10 -right-10 w-32 h-32 border border-slate-800 rounded-full"></div>
                        </div>

                        {/* Bio Content */}
                        <div className="w-full md:w-1/2">
                            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                                Le Phuc Hai <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 text-3xl md:text-5xl">PhD Researcher</span>
                            </h1>

                            <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                                <p>
                                    I am a <strong className="text-white">Scholar-Practitioner</strong> focused on Digital Transformation in Pharma, FMCG, and Agriculture.
                                </p>
                                <p>
                                    With over a decade of executive leadership at <span className="text-cyan-400">Anminh Group</span> and as the founder of <span className="text-cyan-400">NCSKIT</span> and <span className="text-cyan-400">AM Medtech</span>, I don't just study innovation—I architect it.
                                </p>
                                <p>
                                    My research investigates how <strong>Blockchain, AI, and Data Analytics</strong> can restructure organizational DNA, making enterprises not just efficient, but antifragile.
                                </p>
                            </div>

                            <div className="mt-10 flex flex-wrap gap-4">
                                <Link href="#research" className="px-8 py-3 rounded-full bg-cyan-500 text-slate-950 font-bold hover:bg-cyan-400 transition-colors flex items-center gap-2">
                                    <BookOpen className="w-4 h-4" /> View Research
                                </Link>
                                <Link href="#experience" className="px-8 py-3 rounded-full bg-slate-900 border border-slate-700 text-white hover:bg-slate-800 transition-colors flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" /> Career Timeline
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. STATS / HIGHLIGHTS */}
            <section className="py-12 border-y border-slate-900 bg-slate-950/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="text-center group">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">12+</div>
                            <div className="text-sm text-slate-500 font-mono uppercase tracking-wider">Years Experience</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">3</div>
                            <div className="text-sm text-slate-500 font-mono uppercase tracking-wider">Ventures Founded</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">15+</div>
                            <div className="text-sm text-slate-500 font-mono uppercase tracking-wider">Research Papers</div>
                        </div>
                        <div className="text-center group">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">100+</div>
                            <div className="text-sm text-slate-500 font-mono uppercase tracking-wider">Enterprises Advised</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. EXPERIENCE TIMELINE */}
            <section id="experience" className="py-24 relative">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <div className="text-center mb-16">
                        <span className="text-cyan-500 font-mono text-sm tracking-wider uppercase mb-2 block">Career Trajectory</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Professional & Academic Journey</h2>
                    </div>

                    <div className="relative border-l border-slate-800 ml-4 md:ml-0 space-y-16">
                        {/* Item 1: NCSKIT */}
                        <div className="relative md:pl-16">
                            <div className="absolute -left-[5px] md:-left-[9px] top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-[0_0_15px_rgba(6,182,212,0.5)]"></div>
                            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-white">NCSKIT.org</h3>
                                    <span className="text-cyan-400 font-mono text-sm bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">2023 - Present</span>
                                </div>
                                <h4 className="text-slate-300 font-medium mb-4 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" /> Founder & Lead Researcher
                                </h4>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    Founded the "Research Operating System" to accelerate the PhD journey. Developing tools leveraging RAG (Retrieval Augmented Generation) to automate literature reviews and methodology mapping.
                                </p>
                                <ul className="space-y-2 text-sm text-slate-500">
                                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-cyan-500 mt-0.5" /> Built AI agents for academic writing support.</li>
                                    <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 text-cyan-500 mt-0.5" /> Created framework for systematic literature reviews.</li>
                                </ul>
                            </div>
                        </div>

                        {/* Item 2: AM MEDTECH */}
                        <div className="relative md:pl-16">
                            <div className="absolute -left-[5px] md:-left-[9px] top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-slate-700 border-4 border-slate-950"></div>
                            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-white">AM Medtech</h3>
                                    <span className="text-slate-500 font-mono text-sm bg-slate-800 px-3 py-1 rounded-full border border-slate-700">2021 - Present</span>
                                </div>
                                <h4 className="text-slate-300 font-medium mb-4 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" /> Founder & CEO
                                </h4>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    Leading a specialized Digital Transformation agency for the Pharmaceutical sector. Delivering CRM, DMS (Distribution Management Systems), and AI-driven analytics to top pharma tiers in Vietnam.
                                </p>
                            </div>
                        </div>

                        {/* Item 3: PHD Research */}
                        <div className="relative md:pl-16">
                            <div className="absolute -left-[5px] md:-left-[9px] top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-purple-500 border-4 border-slate-950 shadow-[0_0_15px_rgba(168,85,247,0.5)]"></div>
                            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-white">PhD Research</h3>
                                    <span className="text-purple-400 font-mono text-sm bg-purple-500/10 px-3 py-1 rounded-full border border-purple-500/20">2020 - Present</span>
                                </div>
                                <h4 className="text-slate-300 font-medium mb-4 flex items-center gap-2">
                                    <GraduationCap className="w-4 h-4" /> Doctoral Candidate
                                </h4>
                                <p className="text-slate-400 leading-relaxed mb-4">
                                    Focusing on "Digital Transformation Maturity Models in Developing Economies". Combining quantitative surveys with qualitative case studies to build a roadmap for Vietnamese enterprises.
                                </p>
                            </div>
                        </div>

                        {/* Item 4: Anminh Group */}
                        <div className="relative md:pl-16">
                            <div className="absolute -left-[5px] md:-left-[9px] top-2 w-4 h-4 md:w-5 md:h-5 rounded-full bg-slate-700 border-4 border-slate-950"></div>
                            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 hover:border-cyan-500/30 transition-all duration-300">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                                    <h3 className="text-2xl font-bold text-white">Anminh Group</h3>
                                    <span className="text-slate-500 font-mono text-sm bg-slate-800 px-3 py-1 rounded-full border border-slate-700">2012 - 2021</span>
                                </div>
                                <h4 className="text-slate-300 font-medium mb-4 flex items-center gap-2">
                                    <Briefcase className="w-4 h-4" /> Managing Director
                                </h4>
                                <p className="text-slate-400 leading-relaxed">
                                    Scaled the organization from a local distributor to a national logistics powerhouse. Implemented early ERP systems and automated supply chain workflows.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. ACADEMIC HIGHLIGHTS */}
            <section id="research" className="py-24 bg-slate-900/30 border-y border-slate-900">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                        <div>
                            <span className="text-cyan-500 font-mono text-sm tracking-wider uppercase mb-2 block">Academic Output</span>
                            <h2 className="text-3xl md:text-5xl font-bold text-white">Selected Research</h2>
                        </div>
                        <Link href="https://scholar.google.com" target="_blank" className="hidden md:flex items-center text-slate-400 hover:text-white transition-colors mt-4 md:mt-0">
                            View Google Scholar <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Paper 1 */}
                        <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl group hover:border-cyan-500/40 transition-all cursor-default">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-bold rounded uppercase">Journal Article</span>
                                <span className="text-slate-500 text-sm font-mono">2024</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                "Blockchain-Enabled Traceability in Pharmaceutical Supply Chains: A Developing Country Perspective"
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Analyzing the impact of distributed ledger technology on counterfeit drug prevention and cold-chain integrity in Vietnam.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs text-slate-600 bg-slate-900 px-2 py-1 rounded">Blockchain</span>
                                <span className="text-xs text-slate-600 bg-slate-900 px-2 py-1 rounded">Supply Chain</span>
                            </div>
                        </div>

                        {/* Paper 2 */}
                        <div className="p-8 bg-slate-950 border border-slate-800 rounded-2xl group hover:border-cyan-500/40 transition-all cursor-default">
                            <div className="flex justify-between items-start mb-4">
                                <span className="px-3 py-1 bg-green-500/10 text-green-400 text-xs font-bold rounded uppercase">Conference Paper</span>
                                <span className="text-slate-500 text-sm font-mono">2023</span>
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                                "The Role of AI in Optimizing Agricultural Distributors"
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                A case study on using predictive analytics for inventory management in the Mekong Delta region.
                            </p>
                            <div className="flex gap-2">
                                <span className="text-xs text-slate-600 bg-slate-900 px-2 py-1 rounded">AI</span>
                                <span className="text-xs text-slate-600 bg-slate-900 px-2 py-1 rounded">Agriculture</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. CTA Area */}
            <section className="py-24 relative overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/20 to-slate-950"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Transform Your Organization?</h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                        Whether you need scientific research consultancy or enterprise digital architecture, let's connect.
                    </p>
                    <Link href="mailto:contact@lehai.edu.vn" className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 text-sm font-medium text-slate-950 shadow transition-colors hover:bg-cyan-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 disabled:pointer-events-none disabled:opacity-50">
                        Get in Touch
                    </Link>
                </div>
            </section>
        </div>
    );
}
