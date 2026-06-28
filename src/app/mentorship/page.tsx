import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, GraduationCap, Users, Microscope, BookOpen, MessageSquare, CheckCircle2, Star, Target, Lightbulb, TrendingUp } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Mentorship & Academic Guidance | Le Phuc Hai - PhD Researcher',
    description: 'Join my research mentorship program for PhD candidates and students. Get expert guidance on thesis writing, research methodology, statistical analysis, and academic publishing.',
    keywords: ['mentorship', 'PhD', 'thesis', 'research', 'academic', 'ncsStat'],
}

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
]

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
        role: "TDTU",
        avatar: "/uploads/mentor-2.jpg",
    },
]

const process = [
    { step: 1, title: 'Initial Consultation', desc: 'Discuss your goals, challenges, and expectations' },
    { step: 2, title: 'Custom Plan', desc: 'Receive a tailored learning and research roadmap' },
    { step: 3, title: 'Active Mentorship', desc: 'Regular sessions with hands-on guidance and feedback' },
    { step: 4, title: 'Achieve Goals', desc: 'Reach your academic or professional milestones' },
]

export default function MentorshipPage() {
    return (
        <div className="min-h-screen bg-white dark:bg-slate-950">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-blue-50 via-indigo-50/30 to-purple-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-8"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                Back to Home
                            </Link>

                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
                                <GraduationCap className="w-4 h-4" />
                                Academic Mentorship
                            </div>

                            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                                Empowering the Next <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                                    Generation
                                </span>
                            </h1>

                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                Beyond enterprise consulting, I am deeply committed to nurturing young researchers and students. 
                                My goal is to bridge the gap between academic theory and practical application.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="#contact">
                                    <Button size="lg" className="gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100">
                                        <Users className="w-5 h-5" />
                                        Apply for Mentorship
                                    </Button>
                                </Link>
                                <a href="https://ncskit.org" target="_blank" rel="noopener noreferrer">
                                    <Button size="lg" variant="outline" className="gap-2 border-slate-300 dark:border-slate-700 hover:bg-blue-50 dark:hover:bg-slate-800">
                                        <ExternalLink className="w-5 h-5" />
                                        Explore ncsStat
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Hero Image Grid */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4] relative"
                                >
                                    <Image
                                        src="/uploads/tdtu-class.jpg"
                                        alt="TDTU Classroom Session"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: -20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                    className="rounded-2xl overflow-hidden shadow-xl aspect-[3/4] relative mt-12"
                                >
                                    <Image
                                        src="/uploads/student-interaction.jpg"
                                        alt="Student Mentorship Session"
                                        fill
                                        className="object-cover"
                                    />
                                </motion.div>
                            </div>
                            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 rounded-2xl p-4 shadow-xl border border-slate-200 dark:border-slate-700">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                        <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-slate-900 dark:text-white">500+</div>
                                        <div className="text-sm text-slate-500">Students Mentored</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mentorship Areas */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            What I Offer
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Comprehensive mentorship programs designed to accelerate your academic and professional growth.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {mentorshipAreas.map((area, index) => (
                            <motion.div
                                key={area.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-500/50 transition-colors"
                            >
                                <div className="flex items-start gap-4 mb-6">
                                    <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                                        <area.icon className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{area.title}</h3>
                                        <p className="text-slate-600 dark:text-slate-400">{area.description}</p>
                                    </div>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {area.topics.map((topic) => (
                                        <span
                                            key={topic}
                                            className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-400"
                                        >
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            How It Works
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            A structured approach to guide you from where you are to where you want to be.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-4 gap-8">
                        {process.map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="text-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                            Success Stories
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400">
                            Hear from those who have walked this path.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg"
                            >
                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 text-amber-500 fill-amber-500" />
                                    ))}
                                </div>
                                <p className="text-slate-600 dark:text-slate-300 mb-6 italic">
                                    &quot;{testimonial.quote}&quot;
                                </p>
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                                        <GraduationCap className="w-6 h-6 text-slate-500" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-slate-900 dark:text-white">{testimonial.author}</div>
                                        <div className="text-sm text-slate-500">{testimonial.role}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section id="contact" className="py-24 bg-gradient-to-br from-blue-600 to-indigo-700">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Start Your Journey?
                        </h2>
                        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                            Whether you&apos;re starting your PhD, struggling with statistics, or looking to advance your career, 
                            I&apos;m here to help you succeed.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <a href="mailto:hailp@ncskit.org?subject=Mentorship%20Inquiry">
                                <Button size="lg" className="gap-2 bg-white text-blue-600 hover:bg-blue-50">
                                    <MessageSquare className="w-5 h-5" />
                                    Apply for Mentorship
                                </Button>
                            </a>
                            <a href="https://ncskit.org" target="_blank" rel="noopener noreferrer">
                                <Button size="lg" variant="outline" className="gap-2 border-white text-white hover:bg-white/10">
                                    Learn About ncsStat
                                    <ExternalLink className="w-4 h-4" />
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
