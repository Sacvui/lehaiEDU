'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, AlertCircle } from 'lucide-react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { RECENT_POSTS_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

// Mock Data for "Unconfigured" State
const MOCK_ARTICLES = [
    {
        _id: '1',
        title: "The Future of Pharmaceutical Supply Chains with Blockchain",
        slug: { current: 'blockchain-pharma' },
        publishedAt: new Date().toISOString(),
        "categories": ["Blockchain", "Supply Chain"],
        readTime: 5,
        mainImage: null
    },
    {
        _id: '2',
        title: "AI-Driven Decision Making in Developing Economies",
        slug: { current: 'ai-decision-making' },
        publishedAt: new Date().toISOString(),
        "categories": ["AI", "Strategy"],
        readTime: 8,
        mainImage: null
    },
    {
        _id: '3',
        title: "Digital Transformation Maturity: A 2025 Outlook",
        slug: { current: 'dt-maturity-2025' },
        publishedAt: new Date().toISOString(),
        "categories": ["Leadership", "Transformation"],
        readTime: 6,
        mainImage: null
    }
];

export function LatestInsights() {
    // Default to mock data to prevent empty state flicker
    const [articles, setArticles] = useState<any[]>(MOCK_ARTICLES);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const fetchedArticles = await sanityFetch<any[]>({ query: RECENT_POSTS_QUERY });
                if (fetchedArticles && fetchedArticles.length > 0) {
                    setArticles(fetchedArticles);
                } else {
                    // If no articles from Sanity, keep mock data or set to empty if preferred
                    setArticles(MOCK_ARTICLES); // Or setArticles([]) if you want an empty state
                }
            } catch (error) {
                console.error("Failed to fetch articles from Sanity:", error);
                setArticles(MOCK_ARTICLES); // Fallback to mock data on error
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, []);

    // Fallback if no articles found (render nothing or a message, or keep static as demo? Let's render empty state for now to encourage CMS usage)
    if (!articles || articles.length === 0) {
        return (
            <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-slate-500">No recent insights available. Please check back later.</p>
                </div>
            </section>
        )
    }

    return (
        <section id="blog" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Intelligence <span className="text-slate-500">&</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Insights</span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Decoding the future of Enterprise and Science.
                        </p>
                    </div>
                    <Link href="/blog" className="hidden md:flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors">
                        Read all transmissions <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {articles.map((article) => (
                        <Link href={`/blog/${article.slug.current}`} key={article._id} className="group relative flex flex-col h-full bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/10 transition-all duration-500">

                            {/* Image Area */}
                            <div className="h-56 w-full relative overflow-hidden bg-slate-800">
                                {article.mainImage ? (
                                    <Image
                                        src={urlForImage(article.mainImage).width(600).height(400).url()}
                                        alt={article.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                ) : (
                                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                        {articles.map((article, index) => (
                                            <motion.div
                                                key={article._id || index}
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: index * 0.1 }}
                                                className="group cursor-pointer flex flex-col h-full"
                                            >
                                                <div className="relative aspect-video overflow-hidden rounded-2xl mb-4 border border-slate-800 bg-slate-900">
                                                    {/* Placeholder Image Logic since we might not have real images yet */}
                                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-slate-700">
                                                        <span className="text-4xl">Insight</span>
                                                    </div>
                                                </div>

                                                <div className="flex items-center gap-4 text-xs text-slate-500 mb-3 font-mono">
                                                    <span className="text-cyan-400">{article.categories?.[0] || 'Uncategorized'}</span>
                                                    <span>•</span>
                                                    <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
                                                </div>

                                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                                    {article.title}
                                                </h3>
                                            </motion.div>
                                        ))}
                                    </div>
                                )}
                                <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors"></div>
                                {/* Tech overlay grid */}
                                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.1)_50%,transparent_75%,transparent_100%)] bg-[size:10px_10px] opacity-30"></div>

                                {article.categories && article.categories.length > 0 && (
                                    <div className="absolute top-4 left-4">
                                        <span className="px-3 py-1 rounded-full bg-slate-950/80 backdrop-blur border border-slate-700 text-xs font-bold text-cyan-400 uppercase tracking-wider">
                                            {article.categories[0]}
                                        </span>
                                    </div>
                                )}
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-500 mb-5 font-mono">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="w-3 h-3" />
                                        {new Date(article.publishedAt).toLocaleDateString()}
                                    </span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                                    {article.title}
                                </h3>
                                {article.excerpt && (
                                    <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                                        {article.excerpt}
                                    </p>
                                )}

                                <div className="mt-auto pt-6 border-t border-slate-800 flex items-center text-cyan-500 font-bold text-sm tracking-wide group-hover:translate-x-2 transition-transform">
                                    ACCESS DATA <ArrowRight className="w-4 h-4 ml-2" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
