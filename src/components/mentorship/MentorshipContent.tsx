'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, ExternalLink, GraduationCap, Users, Microscope, BookOpen, MessageSquare, CheckCircle2, Star, Target, Lightbulb, TrendingUp, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const mentorshipAreas = [
    {
        icon: GraduationCap,
        title: 'PhD Research Guidance',
        description: 'Comprehensive support for doctoral candidates from proposal to defense. Expert guidance on research design, methodology, and statistical analysis.',
        topics: ['Research Proposal', 'Literature Review', 'Methodology Selection', 'Data Analysis', 'Thesis Structure', 'Defense Preparation'],
    },
    {
        icon: Microscope,
        title: 'Scientific Writing',
        description: 'Master the art of academic writing. Learn to craft compelling narratives that communicate complex ideas clearly and persuasively.',
        topics: ['Academic Writing', 'Paper Structure', 'Peer Review', 'Publication Strategy', 'Citation Management', 'Language Editing'],
    },
    {
        icon: BarChart3,
        title: 'Statistical Analysis',
        description: 'Deep dive into advanced statistical methods using R and Python. From basic descriptives to complex SEM/CFA modeling.',
        topics: ['R Programming', 'SEM/CFA Modeling', 'Hypothesis Testing', 'Data Visualization', 'Reproducible Research', 'ncsStat Platform'],
    },
    {
        icon: TrendingUp,
        title: 'Career Development',
        description: 'Navigate your academic or industry career path. From entry-level to leadership, strategic guidance for professional growth.',
        topics: ['Career Planning', 'Networking', 'Interview Skills', 'Leadership', 'Work-Life Balance', 'Industry Transition'],
    },
];

const testimonials = [
    {
        quote: "Dr. Hai's mentorship was instrumental in my PhD journey. His expertise in statistical methods and academic writing helped me publish in top-tier journals.",
        author: "PhD Candidate",
        role: "Vietnam National University",
        avatar: "/uploads/mentor-1.jpg",
    },
    {
        quote: "The ncsStat platform combined with Dr. Hai's guidance transformed my research capabilities. What used to take weeks now takes hours with scientific precision.",
        author: "Researcher",
        role: "International University",
        avatar: "/uploads/mentor-2.jpg",
    },
    {
        quote: "His patient approach and deep knowledge helped me overcome years of statistical anxiety. Now I confidently analyze complex datasets for my research.",
        author: "Master's Student",
        role: "University of Economics",
        avatar: "/uploads/mentor-3.jpg",
    },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

export function MentorshipContent() {
    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
                <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px]"></div>
                <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[120px]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-4xl mx-auto text-center space-y-8"
                    >
                        <motion.div variants={itemVariants}>
                            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-mono">
                                <Users className="w-4 h-4" />
                                Research Mentorship
                            </span>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                            Accelerate Your{' '}
                            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-400 bg-clip-text text-transparent">
                                Research Journey
                            </span>
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Personalized mentorship for PhD candidates and researchers. Expert guidance on research design, statistical analysis, and academic publishing.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="#programs">
                                <Button className="gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 font-semibold px-8 py-6 text-lg rounded-full">
                                    Explore Programs
                                    <ArrowRight className="w-5 h-5" />
                                </Button>
                            </Link>
                            <Link href="/contact">
                                <Button variant="outline" className="gap-2 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white px-8 py-6 text-lg rounded-full">
                                    <MessageSquare className="w-5 h-5" />
                                    Contact Me
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Mentorship Areas */}
            <section id="programs" className="py-20 lg:py-28 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                                Mentorship Programs
                            </h2>
                            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                                Choose the path that aligns with your research goals
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            {mentorshipAreas.map((area, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl hover:border-amber-200 transition-all duration-300"
                                >
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-amber-50 text-amber-600">
                                            <area.icon className="w-8 h-8" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-2">
                                                {area.title}
                                            </h3>
                                            <p className="text-slate-600 leading-relaxed">
                                                {area.description}
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {area.topics.map((topic, topicIndex) => (
                                            <span
                                                key={topicIndex}
                                                className="px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-sm"
                                            >
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 lg:py-28 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                                How It Works
                            </h2>
                            <p className="text-lg text-slate-600">
                                A structured approach to guide you through your research
                            </p>
                        </motion.div>

                        <div className="space-y-8">
                            {[
                                { step: '01', title: 'Initial Consultation', desc: 'We discuss your research goals, challenges, and timeline to understand your needs.' },
                                { step: '02', title: 'Customized Plan', desc: 'I create a personalized roadmap addressing your specific requirements and objectives.' },
                                { step: '03', title: 'Ongoing Support', desc: 'Regular sessions with email/chat support between meetings for questions and feedback.' },
                                { step: '04', title: 'Review & Refine', desc: 'Iterative feedback to polish your work to publication-ready quality.' },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="flex gap-6 items-start"
                                >
                                    <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                                        {item.step}
                                    </div>
                                    <div className="pt-2">
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                                            {item.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-20 lg:py-28 bg-slate-900">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="max-w-6xl mx-auto"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                                Success Stories
                            </h2>
                            <p className="text-lg text-slate-400">
                                Hear from those who&apos;ve transformed their research
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-3 gap-8">
                            {testimonials.map((testimonial, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700"
                                >
                                    <div className="flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                        ))}
                                    </div>
                                    <blockquote className="text-slate-300 mb-6 leading-relaxed">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </blockquote>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white font-bold">
                                            {testimonial.author[0]}
                                        </div>
                                        <div>
                                            <p className="font-semibold text-white">{testimonial.author}</p>
                                            <p className="text-sm text-slate-400">{testimonial.role}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Pricing Preview */}
            <section className="py-20 lg:py-28 bg-slate-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={containerVariants}
                        className="max-w-4xl mx-auto"
                    >
                        <motion.div variants={itemVariants} className="text-center mb-16">
                            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
                                Investment in Your Research
                            </h2>
                            <p className="text-lg text-slate-600">
                                Flexible packages designed for your needs
                            </p>
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <motion.div
                                variants={itemVariants}
                                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
                            >
                                <div className="flex items-center gap-3 mb-6">
                                    <Target className="w-8 h-8 text-slate-600" />
                                    <h3 className="text-xl font-bold text-slate-900">Consultation</h3>
                                </div>
                                <p className="text-slate-600 mb-6">
                                    One-time sessions for specific guidance on your research challenges.
                                </p>
                                <div className="space-y-3 mb-8">
                                    {['60-minute video call', 'Recording provided', 'Follow-up email support', 'Resource materials'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-700">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-slate-500">Starting from $150/session</p>
                            </motion.div>

                            <motion.div
                                variants={itemVariants}
                                className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 shadow-xl border border-amber-500/30 relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 bg-amber-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-bl-lg">
                                    RECOMMENDED
                                </div>
                                <div className="flex items-center gap-3 mb-6">
                                    <Lightbulb className="w-8 h-8 text-amber-400" />
                                    <h3 className="text-xl font-bold text-white">Mentorship</h3>
                                </div>
                                <p className="text-slate-300 mb-6">
                                    Ongoing support throughout your research journey with regular check-ins.
                                </p>
                                <div className="space-y-3 mb-8">
                                    {['Weekly/bi-weekly sessions', 'Unlimited email support', 'Draft review & feedback', 'Priority scheduling', 'Research methodology audit'].map((item, i) => (
                                        <div key={i} className="flex items-center gap-3 text-slate-300">
                                            <CheckCircle2 className="w-5 h-5 text-amber-400 flex-shrink-0" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                                <p className="text-sm text-slate-400">Customized pricing based on needs</p>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 lg:py-28 bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={containerVariants}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <motion.h2 variants={itemVariants} className="text-3xl lg:text-4xl font-bold text-white mb-6">
                            Ready to Elevate Your Research?
                        </motion.h2>
                        <motion.p variants={itemVariants} className="text-xl text-white/90 mb-8">
                            Let&apos;s discuss how we can work together to achieve your academic goals.
                        </motion.p>
                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="/contact">
                                <Button className="gap-2 bg-slate-900 hover:bg-slate-800 text-white font-semibold px-8 py-6 text-lg rounded-full">
                                    <MessageSquare className="w-5 h-5" />
                                    Schedule Consultation
                                </Button>
                            </Link>
                            <Link href="/">
                                <Button variant="outline" className="gap-2 border-white text-amber-600 hover:bg-white hover:text-amber-600 px-8 py-6 text-lg rounded-full">
                                    <ArrowLeft className="w-5 h-5" />
                                    Back to Home
                                </Button>
                            </Link>
                        </motion.div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
