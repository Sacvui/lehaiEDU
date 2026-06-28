'use client';

import React, { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { Mail, Send, MapPin, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormData {
    name: string;
    email: string;
    subject: string;
    message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [status, setStatus] = useState<FormStatus>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!formRef.current) return;

        setStatus('loading');
        setErrorMessage('');

        try {
            // EmailJS configuration - Replace with your actual EmailJS credentials
            // Get these from: https://www.emailjs.com/docs/tutorial/creating-your-first-form/
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';

            // Check if EmailJS is configured
            if (serviceId === 'YOUR_SERVICE_ID' || !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID) {
                // Demo mode - simulate success
                await new Promise(resolve => setTimeout(resolve, 1500));
                setStatus('success');
                formRef.current.reset();
                return;
            }

            await emailjs.sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            );

            setStatus('success');
            formRef.current.reset();
        } catch (error) {
            console.error('Email send failed:', error);
            setStatus('error');
            setErrorMessage('Failed to send message. Please try again or contact directly via email.');
        }
    };

    const handleReset = () => {
        setStatus('idle');
        setErrorMessage('');
    };

    return (
        <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-950 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-amber-400/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-400/5 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                            Contact & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 dark:from-amber-400 dark:to-orange-400">Consultation</span>
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Ready to partner with you on scientific research projects and digital transformation strategies.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <div className="space-y-8">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-400 shrink-0">
                                    <Mail className="w-6 h-6" aria-hidden="true" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">Email</h4>
                                    <a href="mailto:hailp@ncskit.org" className="text-slate-600 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors">
                                        haily@ncskit.org
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 shrink-0">
                                    <Send className="w-6 h-6" aria-hidden="true" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">Telegram</h4>
                                    <a href="https://t.me/ncskit" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        @ncskit
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 shrink-0">
                                    <MapPin className="w-6 h-6" aria-hidden="true" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900 dark:text-white text-lg">Office</h4>
                                    <p className="text-slate-600 dark:text-slate-400">Ho Chi Minh City, Vietnam</p>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xl">
                            {status === 'success' ? (
                                <div className="text-center py-12 space-y-4">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                                        <CheckCircle className="w-8 h-8" aria-hidden="true" />
                                    </div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">Message Sent!</h3>
                                    <p className="text-slate-600 dark:text-slate-400">
                                        Thank you for reaching out. I'll get back to you within 24-48 hours.
                                    </p>
                                    <Button 
                                        onClick={handleReset}
                                        variant="outline" 
                                        className="mt-4"
                                    >
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div className="space-y-2">
                                            <label htmlFor="name" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                Full Name <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="text" 
                                                id="name"
                                                name="from_name"
                                                required
                                                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" 
                                                placeholder="John Doe" 
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label htmlFor="email" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                                Email <span className="text-red-500">*</span>
                                            </label>
                                            <input 
                                                type="email" 
                                                id="email"
                                                name="from_email"
                                                required
                                                className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" 
                                                placeholder="email@example.com" 
                                            />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="subject" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Subject
                                        </label>
                                        <input 
                                            type="text" 
                                            id="subject"
                                            name="subject"
                                            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all" 
                                            placeholder="Consultation Inquiry" 
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                            Message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea 
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            className="w-full px-4 py-2 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none transition-all resize-none" 
                                            placeholder="How can I help you?"
                                        ></textarea>
                                    </div>

                                    {status === 'error' && (
                                        <div className="flex items-start gap-2 p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-400 text-sm">
                                            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" aria-hidden="true" />
                                            <span>{errorMessage}</span>
                                        </div>
                                    )}

                                    <Button 
                                        type="submit" 
                                        disabled={status === 'loading'}
                                        className="w-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-200 py-6 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {status === 'loading' ? (
                                            <>
                                                <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                                                Send Request
                                            </>
                                        )}
                                    </Button>

                                    <p className="text-xs text-slate-500 dark:text-slate-500 text-center">
                                        I typically respond within 24-48 hours.
                                    </p>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
