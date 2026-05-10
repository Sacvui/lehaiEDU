import React from 'react';
import { Shield, Lock, Eye, FileText, Bell } from 'lucide-react';

export default function PrivacyPage() {
    const lastUpdated = "10/05/2026";

    return (
        <div className="min-h-screen pt-32 pb-24 bg-slate-50 dark:bg-slate-950">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-500/5 to-transparent pointer-events-none" />

            <div className="container mx-auto px-4 max-w-4xl relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-bold uppercase tracking-widest mb-6">
                        <Shield className="w-4 h-4" />
                        Trust & Privacy
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Privacy Policy</h1>
                    <p className="text-slate-500 dark:text-slate-400">Last updated: {lastUpdated}</p>
                </div>

                <div className="bg-white dark:bg-slate-900 rounded-3xl p-8 md:p-12 shadow-xl border border-slate-200 dark:border-slate-800 space-y-12 text-slate-700 dark:text-slate-300 leading-relaxed">
                    
                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <Eye className="w-6 h-6 text-blue-500" />
                            <h2 className="text-2xl font-bold">1. Overview</h2>
                        </div>
                        <p>
                            Welcome to the academic platform of <strong>Dr. Le Phuc Hai</strong>. We respect your privacy and are committed to protecting the personal data you share. This policy explains how we collect, use, and safeguard information when you use the <strong>ncsStat</strong> system and related services.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <FileText className="w-6 h-6 text-amber-500" />
                            <h2 className="text-2xl font-bold">2. Data Collection</h2>
                        </div>
                        <ul className="list-disc pl-6 space-y-2">
                            <li><strong>Personal Information:</strong> Name, email, and contact details provided when requesting consultation or newsletters.</li>
                            <li><strong>Research Data:</strong> Analytical parameters processed via ncsStat (we commit to NOT storing raw user data unless explicitly agreed upon in writing).</li>
                            <li><strong>Technical Data:</strong> IP address, browser type, and usage behavior to optimize the website experience.</li>
                        </ul>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <Lock className="w-6 h-6 text-emerald-500" />
                            <h2 className="text-2xl font-bold">3. Data Security</h2>
                        </div>
                        <p>
                            We utilize advanced SSL/TLS encryption standards to protect transmitted data. The <strong>ncsStat</strong> system operates within an isolated environment, ensuring absolute integrity and security for your scientific research results.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <div className="flex items-center gap-3 text-slate-900 dark:text-white">
                            <Bell className="w-6 h-6 text-purple-500" />
                            <h2 className="text-2xl font-bold">4. User Rights</h2>
                        </div>
                        <p>
                            You have the right to request access to, correction, or deletion of your personal information at any time. For any inquiries, please contact our official email: <a href="mailto:hailp@ncskit.org" className="text-blue-500 hover:underline">hailp@ncskit.org</a>.
                        </p>
                    </section>

                    <div className="pt-8 border-t border-slate-200 dark:border-slate-800 text-sm text-slate-500">
                        <p>By continuing to use our services, you agree to the terms outlined in this Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
