'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Download, Calendar, Briefcase, GraduationCap, Award, Mic, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CVPageContent() {
    return (
        <main className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-amber-100 selection:text-amber-900 pb-24">

            <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

                    {/* LEFT SIDEBAR (4 Columns) - Sticky on Desktop */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="sticky top-8">
                            {/* Profile Card */}
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800 text-center"
                            >
                                <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-slate-50 dark:border-slate-800 shadow-2xl">
                                    <img
                                        src="/uploads/profile-founder.jpg"
                                        alt="Le Phuc Hai"
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Le+Phuc+Hai&background=0f172a&color=fff&size=256`;
                                        }}
                                    />
                                </div>
                                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">LE PHUC HAI</h1>
                                <p className="text-amber-600 dark:text-amber-500 font-medium mb-6">Director</p>

                                <div className="space-y-4 text-left text-sm text-slate-600 dark:text-slate-400">
                                    <a href="mailto:phuchai.le@gmail.com" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600"><Mail className="w-4 h-4" /></div>
                                        <span className="truncate">phuchai.le@gmail.com</span>
                                    </a>
                                    <a href="tel:+84938300489" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-600"><Phone className="w-4 h-4" /></div>
                                        <span>+84 938 300 489</span>
                                    </a>
                                    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <div className="bg-purple-100 dark:bg-purple-900/30 p-2 rounded-lg text-purple-600 mt-1"><MapPin className="w-4 h-4" /></div>
                                        <span>Esto City, Cat Lai, Thu Duc City, HCMC</span>
                                    </div>
                                    <a href="https://www.lehai.edu.vn" className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                        <div className="bg-sky-100 dark:bg-sky-900/30 p-2 rounded-lg text-sky-600"><Globe className="w-4 h-4" /></div>
                                        <span className="truncate">www.lehai.edu.vn</span>
                                    </a>
                                </div>

                                <div className="mt-8 pt-8 border-t border-slate-100 dark:border-slate-800">
                                    <Button className="w-full gap-2 rounded-full bg-slate-900 text-white hover:bg-slate-800" disabled>
                                        <Download className="w-4 h-4" /> Download Resume PDF
                                    </Button>
                                </div>
                            </motion.div>

                            {/* Skills / Education Summary (Sidebar) */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="mt-8 bg-white dark:bg-slate-900 rounded-3xl p-8 shadow-xl border border-slate-100 dark:border-slate-800"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-amber-100 dark:bg-amber-900/30 p-2 rounded-lg text-amber-600"><GraduationCap className="w-5 h-5" /></div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Education</h3>
                                </div>
                                <div className="space-y-6 relative border-l-2 border-slate-200 dark:border-slate-800 ml-3 pl-6">
                                    <EducationItem
                                        degree="Doctor of Business Administration"
                                        year="2024 - 2027"
                                        school="Current"
                                    />
                                    <EducationItem
                                        degree="Master of Business Administration"
                                        year="2020"
                                        school="Graduated"
                                    />
                                    <EducationItem
                                        degree="Bachelor of Business Administration"
                                        year="2015"
                                        school="Graduated"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RIGHT CONTENT (8 Columns) */}
                    <div className="lg:col-span-8 space-y-12">

                        {/* Summary */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="text-5xl font-bold text-slate-900 dark:text-white mb-2">National Business</h2>
                            <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 mb-6">Development Director</h2>
                            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-8">
                                Over 13 years of experience in business management, building distribution systems, and enhancing commercial capabilities, particularly in multinational FMCG corporations.
                                My background includes a strong focus on Management Information Systems (MIS) and developing innovative technological solutions to support economic growth.
                            </p>
                        </motion.div>

                        {/* Experience Timeline */}
                        <div className="space-y-8">
                            <div className="flex items-center gap-3 mb-2">
                                <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-600"><Briefcase className="w-6 h-6" /></div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Work Experience</h3>
                            </div>

                            <div className="space-y-6">
                                <ExperienceCard
                                    title="National Business Development Director - OTC & Internal Channel"
                                    company="An Minh Group"
                                    period="Present"
                                    logo="/logos/anminh.png"
                                    logoFallback="AM"
                                    logoColor="bg-sky-100 text-sky-700"
                                    current
                                    description="Leading nationwide business development for OTC pharmacy channel and internal sales operations."
                                />
                                <ExperienceCard
                                    title="Training and Capability Development Manager"
                                    company="Mondelez Kinh Do"
                                    logo="/logos/mondelez.png"
                                    logoFallback="MZ"
                                    logoColor="bg-purple-100 text-purple-700"
                                    description={[
                                        "Design and implement training programs to enhance employee skills and align with business goals.",
                                        "Assess performance and identify skill gaps, creating targeted solutions to improve productivity.",
                                        "Lead training delivery through workshops, e-learning, and on-the-job training."
                                    ]}
                                />
                                <ExperienceCard
                                    title="Commercial Excellence Manager"
                                    company="JAPFA COMFEED VIETNAM"
                                    logo="/logos/japfa.png"
                                    logoFallback="JP"
                                    logoColor="bg-red-100 text-red-700"
                                    description={[
                                        "Manage and optimize business operations to achieve revenue and profit targets.",
                                        "Design and implement training programs to enhance sales skills and leadership.",
                                        "Lead the research and implementation of digital transformation solutions."
                                    ]}
                                />
                                <ExperienceCard
                                    title="Sales Effectiveness Manager"
                                    company="Nova Group"
                                    logo="/logos/nova.png"
                                    logoFallback="NV"
                                    logoColor="bg-green-100 text-green-700"
                                    description={[
                                        "Develop and implement sales KPIs to drive performance and align targets.",
                                        "Design and deliver training programs to enhance sales team capabilities.",
                                        "Monitor and control the quality of distribution channels."
                                    ]}
                                />
                                <ExperienceCard
                                    title="Sales Trainer"
                                    company="Coca-Cola Vietnam"
                                    logo="https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg"
                                    logoFallback="KO"
                                    logoColor="bg-red-50 text-red-600"
                                    description={[
                                        "Develop and customize training programs based on sales managers’ requirements.",
                                        "Implement global training courses ensuring alignment with Coca-Cola's standards.",
                                        "Conduct field coaching sessions to improve practical skills."
                                    ]}
                                />
                                <ExperienceCard
                                    title="DMS Specialist - Project Lead"
                                    company="Ngoc Nghia Group (NNG)"
                                    logo="/logos/nng.png"
                                    logoFallback="NN"
                                    logoColor="bg-blue-100 text-blue-700"
                                    description={[
                                        "Build and implement a comprehensive DMS system nationwide.",
                                        "Develop reporting systems to assess DMS operations and business performance."
                                    ]}
                                />
                                <ExperienceCard
                                    title="ERP Consultant"
                                    company="FPT Software HCM"
                                    logo="https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo_2010.svg"
                                    logoFallback="FP"
                                    logoColor="bg-orange-100 text-orange-700"
                                    description={[
                                        "Train and deploy DMS systems for key partners including Pepsico, Trung Nguyên Coffee, and Castrol BP.",
                                        "Lead and manage the DMS implementation team for the Castrol BP project."
                                    ]}
                                />
                            </div>
                        </div>

                        {/* Lecturing & Speaking Grid */}
                        <div className="grid md:grid-cols-2 gap-8 pt-8">
                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-lime-100 dark:bg-lime-900/30 p-2 rounded-lg text-lime-600"><Mic className="w-5 h-5" /></div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Lecturing Experience</h3>
                                </div>
                                <ul className="space-y-6">
                                    <li className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                                        <h4 className="font-bold text-sm">Ton Duc Thang University</h4>
                                        <p className="text-xs text-slate-500 mb-1">Marketing Faculty</p>
                                        <p className="text-sm text-slate-700 dark:text-slate-300">B2B Marketing Strategy, Selling Skills, Retail Management.</p>
                                    </li>
                                    <li className="relative pl-4 border-l-2 border-slate-200 dark:border-slate-700">
                                        <h4 className="font-bold text-sm">FPT University</h4>
                                        <p className="text-xs text-slate-500 mb-1">Business Admin Faculty</p>
                                        <p className="text-sm text-slate-700 dark:text-slate-300">Entrepreneurship Course. Judge for Startup Competition 2023.</p>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="bg-pink-100 dark:bg-pink-900/30 p-2 rounded-lg text-pink-600"><Award className="w-5 h-5" /></div>
                                    <h3 className="font-bold text-slate-900 dark:text-white">Key Speaking</h3>
                                </div>
                                <ul className="space-y-4">
                                    <SpeakingItem title="CV Training for 100% STEM Scholarship Students (Asia Foundation)" />
                                    <SpeakingItem title="Digital Transformation Trends in Blockchain & AI (Can Tho University)" />
                                    <SpeakingItem title="Career Orientation for Healthcare Students (Dong Thap Medical College)" />
                                    <SpeakingItem title="Career Orientation for Kien Giang University Students" />
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}

function EducationItem({ degree, year, school }: { degree: string, year: string, school: string }) {
    return (
        <div className="relative group">
            <span className="absolute -left-[31px] w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 bg-amber-500"></span>
            <h4 className="font-bold text-sm text-slate-900 dark:text-white leading-tight">{degree}</h4>
            <div className="flex justify-between items-center mt-1">
                <span className="text-xs text-slate-500">{year}</span>
                <span className="text-xs font-medium text-amber-600 dark:text-amber-500">{school}</span>
            </div>
        </div>
    );
}

function ExperienceCard({ title, company, period, description, current, logo, logoFallback, logoColor }: any) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`group flex flex-col md:flex-row gap-6 p-6 rounded-3xl border transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-lg ${current ? 'bg-white dark:bg-slate-900 border-amber-200 dark:border-amber-900/50 shadow-lg ring-1 ring-amber-100 dark:ring-amber-900/30' : 'bg-slate-50/50 dark:bg-slate-900/50 border-transparent hover:border-slate-100 dark:hover:border-slate-800'}`}
        >
            {/* Logo Column */}
            <div className="shrink-0">
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold shadow-sm ${logoColor || 'bg-slate-200 text-slate-600'}`}>
                    {logo && logo.startsWith('http') ? (
                        <img src={logo} alt={company} className="w-10 h-10 object-contain" />
                    ) : (
                        <span>{logoFallback}</span>
                    )}
                </div>
            </div>

            {/* Content Column */}
            <div className="flex-1">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                        <h3 className={`text-xl font-bold ${current ? 'text-slate-900 dark:text-white' : 'text-slate-800 dark:text-slate-200'}`}>{title}</h3>
                        <div className="text-amber-600 dark:text-amber-500 font-semibold text-sm mb-1">{company}</div>
                    </div>
                    {period && <span className="inline-block px-3 py-1 bg-slate-100 dark:bg-slate-800 rounded-full text-xs font-semibold text-slate-600 dark:text-slate-400 whitespace-nowrap">{period}</span>}
                </div>

                <div className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                    {Array.isArray(description) ? (
                        <ul className="list-disc ml-5 space-y-1 marker:text-slate-400">
                            {description.map((item: string, i: number) => <li key={i}>{item}</li>)}
                        </ul>
                    ) : (
                        <p>{description}</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

function SpeakingItem({ title }: { title: string }) {
    return (
        <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-pink-500 mt-2 shrink-0"></div>
            <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">{title}</span>
        </li>
    );
}
