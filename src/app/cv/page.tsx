'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Download, Calendar, Briefcase, GraduationCap, Award, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function CVPage() {
    return (
        <main className="bg-slate-50 dark:bg-slate-950 min-h-screen font-sans selection:bg-amber-100 selection:text-amber-900 pb-24">
            {/* Header / Profile Section */}
            <section className="relative bg-slate-900 text-white overflow-hidden py-24">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-900/20 via-slate-950 to-slate-950"></div>
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto text-center"
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">LE PHUC HAI</h1>
                        <p className="text-xl md:text-2xl text-amber-500 font-medium mb-8">National Business Development Manager - OTC Channel</p>

                        <div className="flex flex-wrap justify-center gap-6 text-slate-300 text-sm md:text-base mb-10">
                            <a href="mailto:phuchai.le@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Mail className="w-4 h-4" /> phuchai.le@gmail.com
                            </a>
                            <a href="tel:+84938300489" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Phone className="w-4 h-4" /> +84 938 300 489
                            </a>
                            <span className="flex items-center gap-2">
                                <MapPin className="w-4 h-4" /> Esto City, Cat Lai, Thu Duc City, HCMC
                            </span>
                            <a href="https://www.lehai.edu.vn" className="flex items-center gap-2 hover:text-white transition-colors">
                                <Linkedin className="w-4 h-4" /> www.lehai.edu.vn
                            </a>
                        </div>

                        <p className="text-slate-400 max-w-3xl mx-auto leading-relaxed text-lg">
                            Over 13 years of experience in business management, building distribution systems, and enhancing commercial capabilities, particularly in multinational FMCG corporations.
                            My background includes a strong focus on Management Information Systems (MIS) and developing innovative technological solutions to support economic growth.
                            I also work closely with FPT University and Ton Duc Thang University as a lecturer and program designer.
                        </p>
                    </motion.div>
                </div>
            </section>

            <div className="container mx-auto px-4 md:px-6 -mt-8 relative z-20">
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 md:p-12 mb-16">

                    {/* Experience Section */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-amber-100 dark:bg-amber-900/30 p-3 rounded-xl text-amber-600 dark:text-amber-500">
                                <Briefcase className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Professional Experience</h2>
                        </div>

                        <div className="space-y-12 relative border-l-2 border-slate-200 dark:border-slate-800 ml-5 md:ml-6 pl-8 md:pl-12">
                            {/* Current Role */}
                            <ExperienceItem
                                title="National Business Development Manager - OTC & Internal Channel"
                                company="An Minh Group"
                                period="Present"
                                current
                                description="Leading nationwide business development for OTC pharmacy channel and internal sales operations."
                            />

                            <ExperienceItem
                                title="Training and Capability Development Manager"
                                company="Mondelez Kinh Do"
                                description={[
                                    "Design and implement training programs to enhance employee skills and align with business goals.",
                                    "Assess performance and identify skill gaps, creating targeted solutions to improve productivity.",
                                    "Lead training delivery through workshops, e-learning, and on-the-job training.",
                                    "Support talent development and succession planning."
                                ]}
                            />

                            <ExperienceItem
                                title="Commercial Excellence Manager"
                                company="JAPFA COMFEED VIETNAM"
                                description={[
                                    "Manage and optimize business operations to achieve revenue and profit targets.",
                                    "Design and implement training programs to enhance sales skills and leadership.",
                                    "Lead the research and implementation of digital transformation solutions.",
                                    "Drive team engagement and collaboration."
                                ]}
                            />

                            <ExperienceItem
                                title="Sales Effectiveness Manager"
                                company="Nova Group"
                                description={[
                                    "Develop and implement sales KPIs to drive performance and align targets.",
                                    "Design and deliver training programs to enhance sales team capabilities.",
                                    "Monitor and control the quality of distribution channels.",
                                    "Foster team cohesion through coaching and feedback."
                                ]}
                            />

                            <ExperienceItem
                                title="Sales Trainer"
                                company="Coca-Cola Vietnam"
                                description={[
                                    "Develop and customize training programs based on sales managers’ requirements.",
                                    "Implement global training courses ensuring alignment with Coca-Cola's standards.",
                                    "Conduct field coaching sessions to improve practical skills.",
                                    "Evaluate training effectiveness to drive sales results."
                                ]}
                            />

                            <ExperienceItem
                                title="Distribution Management System (DMS) Specialist"
                                company="Ngoc Nghia Group (NNG)"
                                description={[
                                    "Build and implement a comprehensive DMS system nationwide.",
                                    "Develop reporting systems to assess DMS operations and business performance.",
                                    "Coordinate with internal teams and partners for system alignment."
                                ]}
                            />
                            <ExperienceItem
                                title="ERP Consultant"
                                company="FPT Software HCM"
                                description={[
                                    "Train and deploy DMS systems for key partners including Pepsico, Trung Nguyên Coffee, and Castrol BP.",
                                    "Lead and manage the DMS implementation team for the Castrol BP project.",
                                    "Report on project progress and performance to stakeholders."
                                ]}
                            />
                        </div>
                    </div>

                    {/* Education Section */}
                    <div className="mb-24">
                        <div className="flex items-center gap-4 mb-12">
                            <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-xl text-blue-600 dark:text-blue-500">
                                <GraduationCap className="w-8 h-8" />
                            </div>
                            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h2>
                        </div>

                        <div className="grid md:grid-cols-3 gap-8">
                            <EducationCard
                                degree="Doctor of Business Administration"
                                school="Sep 2024 - 2027 (Expected)"
                                thesis="Thesis: Impact of green marketing on consumer buying behavior"
                                highlight
                            />
                            <EducationCard
                                degree="Master of Business Administration"
                                school="Aug 2020"
                                thesis="Thesis: Driving the consumption of energy products in the FMCG industry."
                            />
                            <EducationCard
                                degree="Bachelor of Business Administration"
                                school="Nov 2015"
                                thesis="Major: Business General"
                            />
                        </div>
                    </div>

                    {/* Lecturing & Speaking */}
                    <div className="grid md:grid-cols-2 gap-16">
                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-xl text-green-600 dark:text-green-500">
                                    <Mic className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Lecturing Experience</h3>
                            </div>
                            <ul className="space-y-6">
                                <li className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
                                    <h4 className="font-bold text-lg mb-2">Ton Duc Thang University</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Faculty: Marketing</p>
                                    <p className="text-slate-700 dark:text-slate-300">Courses: B2B Marketing Strategy, Selling Skills, Retail Management. Supervised 13 students.</p>
                                </li>
                                <li className="bg-slate-50 dark:bg-slate-800 p-6 rounded-xl">
                                    <h4 className="font-bold text-lg mb-2">FPT University</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-2">Faculty: Business Administration</p>
                                    <p className="text-slate-700 dark:text-slate-300">Course: Entrepreneurship. Supported 30 teams. Judge for 2023 Startup Competition.</p>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <div className="flex items-center gap-4 mb-8">
                                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-xl text-purple-600 dark:text-purple-500">
                                    <Award className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Speaking & Community</h3>
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
        </main>
    );
}

function ExperienceItem({ title, company, period, description, current }: { title: string, company: string, period?: string, description: string | string[], current?: boolean }) {
    return (
        <div className="relative group">
            <span className={`absolute -left-[45px] md:-left-[61px] w-6 h-6 rounded-full border-4 ${current ? 'bg-amber-500 border-amber-100 dark:border-amber-900' : 'bg-slate-200 dark:bg-slate-700 border-white dark:border-slate-900'} transition-colors`}></span>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{title}</h3>
            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-sm text-slate-500 mb-3">
                <span className="font-semibold text-amber-600 dark:text-amber-500">{company}</span>
                {period && <span>• {period}</span>}
            </div>
            <div className="text-slate-600 dark:text-slate-400 leading-relaxed">
                {Array.isArray(description) ? (
                    <ul className="list-disc ml-5 space-y-1">
                        {description.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                ) : (
                    <p>{description}</p>
                )}
            </div>
        </div>
    );
}

function EducationCard({ degree, school, thesis, highlight }: { degree: string, school: string, thesis: string, highlight?: boolean }) {
    return (
        <div className={`p-6 rounded-xl border ${highlight ? 'bg-slate-900 text-white border-slate-900' : 'bg-slate-50 dark:bg-slate-800 border-slate-100 dark:border-slate-700'}`}>
            <h4 className="font-bold text-lg mb-2">{degree}</h4>
            <p className={`text-sm mb-4 ${highlight ? 'text-slate-300' : 'text-slate-500 dark:text-slate-400'}`}>{school}</p>
            <p className="text-sm leading-relaxed opacity-90">{thesis}</p>
        </div>
    );
}

function SpeakingItem({ title }: { title: string }) {
    return (
        <li className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5 shrink-0"></div>
            <span className="text-slate-700 dark:text-slate-300 leading-relaxed">{title}</span>
        </li>
    );
}
