import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, ExternalLink, Zap, Network, Globe, Layers, BrainCircuit, Database, FlaskConical, BarChart3, CheckCircle2, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
    title: 'Services & Solutions | Le Phuc Hai - PhD Researcher & Digital Strategist',
    description: 'Explore strategic consulting services: fwd LIFEchain for supply chain transparency, ncsStat for academic research, and digital transformation solutions for enterprises.',
    keywords: ['consulting', 'digital transformation', 'supply chain', 'blockchain', 'statistics', 'research'],
}

const services = [
    {
        id: 'lifechain',
        brand: 'fwd LIFEchain',
        title: 'Trust & Provenance Solutions',
        subtitle: 'Blockchain-Powered Supply Chain',
        description: 'Our ambition is to transparently unlock the value of Vietnamese agricultural products by bridging blockchain technology with digital trust. We connect industrial supply chains with rigorous academic validation.',
        icon: Network,
        color: 'from-emerald-500 to-teal-500',
        bgColor: 'bg-emerald-500/10',
        borderColor: 'border-emerald-500/30',
        features: [
            { icon: Zap, title: 'Origin Verification', desc: 'Real-time authentication of product origin using advanced cryptography and blockchain technology.' },
            { icon: Network, title: 'Network Pulse', desc: 'Decentralized ecosystem with 1100+ nodes ensuring complete data integrity and transparency.' },
            { icon: Globe, title: 'Global Standards', desc: 'Connecting industrial supply chains with rigorous academic validation for international markets.' },
            { icon: Layers, title: 'Mobile Verification', desc: 'Instant quality and origin checks via intuitive mobile interfaces for consumers.' },
        ],
        stats: [
            { value: '1100+', label: 'Network Nodes' },
            { value: '50+', label: 'Enterprise Partners' },
            { value: '99.9%', label: 'Data Integrity' },
        ],
        link: 'https://lifchain.io',
    },
    {
        id: 'ncstat',
        brand: 'ncsStat',
        title: 'Advanced Statistics Platform',
        subtitle: 'Scientific Research Tools',
        description: 'Scientific Standard for Researchers. Professional data analysis platform powered by R-Engine and AI Assistant. Absolute accuracy, maximum security, zero installation required.',
        icon: BrainCircuit,
        color: 'from-amber-500 to-orange-500',
        bgColor: 'bg-amber-500/10',
        borderColor: 'border-amber-500/30',
        features: [
            { icon: BrainCircuit, title: 'AI Research Assistant', desc: 'Optimize literature reviews and hypothesis building using advanced AI technology.' },
            { icon: Database, title: 'R-Engine Analytics', desc: 'Absolute precision in advanced statistics, SEM/CFA modeling with zero installation.' },
            { icon: FlaskConical, title: 'Scientific Rigor', desc: 'Full support for SEM/CFA modeling tools and international standard data cleaning.' },
            { icon: BarChart3, title: 'Secure Lab', desc: 'Maximum security and privacy for critical academic research and thesis data.' },
        ],
        stats: [
            { value: '500+', label: 'PhD Researchers' },
            { value: '10K+', label: 'Analyses Run' },
            { value: '50+', label: 'Universities' },
        ],
        link: 'https://ncskit.org',
    },
]

const additionalServices = [
    {
        title: 'Digital Transformation Consulting',
        desc: 'Strategic guidance for enterprise digitalization, process automation, and technology adoption.',
        icon: Globe,
    },
    {
        title: 'Academic Mentorship',
        desc: 'One-on-one guidance for PhD candidates, thesis writing, and research methodology.',
        icon: Database,
    },
    {
        title: 'Strategic Leadership Training',
        desc: 'Executive coaching for management teams, distribution networks, and sales organizations.',
        icon: BrainCircuit,
    },
    {
        title: 'Supply Chain Optimization',
        desc: 'End-to-end supply chain analysis, RTM distribution strategy, and logistics efficiency.',
        icon: Layers,
    },
]

export default function ServicesPage() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-amber-50/30 to-orange-50/20 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Hero Section */}
            <section className="pt-32 pb-16 md:pt-40 md:pb-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Home
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6">
                            Strategic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 dark:from-amber-400 dark:to-orange-400">Solutions</span>
                        </h1>

                        <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            Connecting enterprise strategy with advanced academic research tools. 
                            From blockchain-powered supply chains to AI-assisted statistical analysis.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Services */}
            <section className="py-16">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="space-y-24">
                        {services.map((service, index) => (
                            <div key={service.id} id={service.id} className="scroll-mt-24">
                                <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                                    {/* Content */}
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6 }}
                                        className={index % 2 === 1 ? 'lg:order-2' : ''}
                                    >
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 text-sm font-medium mb-4">
                                            <service.icon className="w-4 h-4" />
                                            Powered by {service.brand}
                                        </div>

                                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                                            {service.title}
                                        </h2>

                                        <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                            {service.description}
                                        </p>

                                        {/* Features Grid */}
                                        <div className="grid sm:grid-cols-2 gap-4 mb-8">
                                            {service.features.map((feature) => (
                                                <div
                                                    key={feature.title}
                                                    className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800"
                                                >
                                                    <feature.icon className={`w-8 h-8 mb-3 bg-gradient-to-br ${service.color} text-white p-1.5 rounded-lg`} />
                                                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">{feature.title}</h4>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400">{feature.desc}</p>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Stats */}
                                        <div className="flex flex-wrap gap-6 mb-8">
                                            {service.stats.map((stat) => (
                                                <div key={stat.label} className="text-center">
                                                    <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400">
                                                        {stat.value}
                                                    </div>
                                                    <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                                                        {stat.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        <a href={service.link} target="_blank" rel="noopener noreferrer">
                                            <Button className={`gap-2 bg-gradient-to-r ${service.color} text-white hover:opacity-90`}>
                                                Explore {service.brand}
                                                <ExternalLink className="w-4 h-4" />
                                            </Button>
                                        </a>
                                    </motion.div>

                                    {/* Visual */}
                                    <motion.div
                                        initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 }}
                                        className={index % 2 === 1 ? 'lg:order-1' : ''}
                                    >
                                        <div className={`relative rounded-3xl overflow-hidden ${service.bgColor} border ${service.borderColor} p-12 aspect-square flex items-center justify-center`}>
                                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent opacity-50"></div>
                                            <div className="relative z-10">
                                                <service.icon className={`w-32 h-32 text-transparent bg-clip-text bg-gradient-to-br ${service.color}`} />
                                            </div>
                                            <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${service.color} blur-[80px] opacity-30`}></div>
                                            <div className={`absolute -bottom-12 -left-12 w-32 h-32 bg-gradient-to-br ${service.color} blur-[80px] opacity-20`}></div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Services */}
            <section className="py-16 bg-white dark:bg-slate-900/50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                            More Services
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Additional consulting and mentorship offerings for enterprises and academics.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {additionalServices.map((service) => (
                            <div
                                key={service.title}
                                className="p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 hover:border-amber-500/50 transition-colors"
                            >
                                <service.icon className="w-10 h-10 text-amber-600 dark:text-amber-400 mb-4" />
                                <h3 className="font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400">{service.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-3xl mx-auto text-center bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-800 dark:to-slate-900 rounded-3xl p-12 border border-slate-700">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Ready to Transform Your Business?
                        </h2>
                        <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                            Let&apos;s discuss how these solutions can accelerate your organization&apos;s growth and digital maturity.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link href="#contact">
                                <Button size="lg" className="gap-2 bg-white text-slate-900 hover:bg-slate-100">
                                    Book Consultation
                                    <ArrowRight className="w-4 h-4" />
                                </Button>
                            </Link>
                            <a href="mailto:hailp@ncskit.org">
                                <Button size="lg" variant="outline" className="border-slate-600 text-white hover:bg-slate-800">
                                    Email Directly
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
