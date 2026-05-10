import React from 'react';
import { Scale, Book, ShieldCheck, AlertCircle, Info } from 'lucide-react';

export default function TermsPage() {
    const lastUpdated = "10/05/2026";

    return (
        <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 text-sm font-bold uppercase tracking-widest mb-6">
                        <Scale className="w-4 h-4" />
                        Legal Framework
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Terms of Use</h1>
                    <p className="text-slate-500 dark:text-slate-400">Last updated: {lastUpdated}</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800 space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
                    
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <Info className="w-6 h-6 text-amber-500" />
                            <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
                        </div>
                        <p>
                            By accessing and using the website <strong>lephuchai.com</strong>, you agree to comply with the terms and conditions outlined herein. If you do not agree with any part of these terms, please discontinue use of the services immediately.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <Book className="w-6 h-6 text-blue-500" />
                            <h2 className="text-2xl font-bold">2. Intellectual Property</h2>
                        </div>
                        <p>
                            All content on this website, including but not limited to: specialized articles (NCS101 Series), methodological structures, <strong>ncsStat</strong> system source code, and published works, are the intellectual property of <strong>Dr. Le Phuc Hai</strong>.
                        </p>
                        <p className="italic bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border-l-4 border-blue-500">
                            Citations must follow international academic standards (APA/Harvard) and must link directly to this website.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <ShieldCheck className="w-6 h-6 text-emerald-500" />
                            <h2 className="text-2xl font-bold">3. User Responsibility</h2>
                        </div>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Do not use the website for illegal purposes or in violation of scientific research ethics.</li>
                            <li>Do not attempt to interfere with the operation of the ncsStat system or gain unauthorized access to other users' data.</li>
                            <li>Use AI tools and research support on this platform responsibly.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <AlertCircle className="w-6 h-6 text-rose-500" />
                            <h2 className="text-2xl font-bold">4. Disclaimer of Liability</h2>
                        </div>
                        <p>
                            The information and tools provided on this website are for academic reference and strategic consulting purposes. While we strive for accuracy (particularly with R algorithms on ncsStat), users are solely responsible for the final results when applied to their research or business practice.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500 text-center">
                        <p>For inquiries regarding terms of use, please contact via Telegram: <strong>@ncskit</strong></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
