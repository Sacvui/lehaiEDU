import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { RECENT_POSTS_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import React from "react";

// MOCK_ARTICLES removed to ensure data integrity from Sanity

export async function LatestInsights() {
    let articles: any[] = [];
    try {
        const fetchedArticles = await sanityFetch<any[]>({ query: RECENT_POSTS_QUERY });
        if (fetchedArticles?.length > 0) {
            articles = fetchedArticles;
        }
    } catch (error) {
        console.error("Failed to fetch articles:", error);
    }

    if (articles.length === 0) {
        return (
            <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-slate-500">Đang tải dữ liệu bài viết...</p>
                </div>
            </section>
        )
    }

    if (!articles || articles.length === 0) {
        return null;
    }

    const featuredPost = articles[0];
    const gridPosts = articles.slice(1, 7);

    return (
        <section id="blog" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full mix-blend-screen" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="h-px w-10 bg-cyan-500"></span>
                            <span className="text-cyan-500 font-mono text-sm uppercase tracking-widest">Knowledge Hub</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                            Intelligence <span className="text-slate-600">&</span>{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Insights
                            </span>
                        </h2>
                    </div>
                    <Link
                        href="/blog"
                        className="hidden md:flex items-center px-6 py-3 rounded-full border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-white transition-all group bg-slate-900/50 backdrop-blur"
                    >
                        Khám phá tất cả <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 xl:gap-12">
                    {/* Featured Post - Main Column */}
                    <div className="lg:col-span-1">
                        <Link href={`/blog/${featuredPost.slug.current}`} className="group block h-full">
                            <article className="relative h-full flex flex-col bg-slate-900/50 rounded-3xl border border-slate-800 hover:border-cyan-500/50 overflow-hidden transition-all duration-300 shadow-2xl">
                                {/* Image Container - Aspect Ratio Responsive */}
                                <div className="relative w-full aspect-video lg:aspect-[4/3] overflow-hidden">
                                    {featuredPost.mainImage || (featuredPost as any).localImage ? (
                                        <Image
                                            src={featuredPost.mainImage ? urlForImage(featuredPost.mainImage).width(1200).height(900).url() : (featuredPost as any).localImage}
                                            alt={featuredPost.title}
                                            fill
                                            priority
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-slate-800" />
                                    )}
                                    {/* Overlay Gradient */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
                                </div>

                                {/* Content */}
                                <div className="flex-1 p-6 md:p-8 flex flex-col relative">
                                    <div className="mb-4 flex flex-wrap gap-3">
                                        {featuredPost.categories?.[0] && (
                                            <span className="px-3 py-1 rounded-full text-xs font-bold text-cyan-400 bg-cyan-950/50 border border-cyan-900">
                                                {featuredPost.categories[0]}
                                            </span>
                                        )}
                                        <span className="flex items-center text-xs text-slate-400">
                                            <Calendar className="w-3 h-3 mr-1" />
                                            {new Date(featuredPost.publishedAt).toLocaleDateString('vi-VN')}
                                        </span>
                                    </div>

                                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                                        {featuredPost.title}
                                    </h3>

                                    <p className="text-slate-400 text-base md:text-lg line-clamp-3 mb-6 flex-grow">
                                        {featuredPost.excerpt}
                                    </p>

                                    <div className="flex items-center text-cyan-500 font-semibold group-hover:translate-x-2 transition-transform mt-auto">
                                        Đọc tiếp <ArrowRight className="w-4 h-4 ml-2" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </div>

                    {/* Sub Posts - Grid */}
                    <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 content-start">
                        {gridPosts.map((post) => (
                            <Link key={post._id} href={`/blog/${post.slug.current}`} className="group block h-full">
                                <article className="h-full flex flex-col bg-slate-900/50 rounded-2xl border border-slate-800 hover:border-cyan-500/30 overflow-hidden transition-all duration-300 hover:bg-slate-800/50">
                                    {/* Image */}
                                    <div className="relative w-full aspect-[16/9] overflow-hidden">
                                        {post.mainImage || (post as any).localImage ? (
                                            <Image
                                                src={post.mainImage ? urlForImage(post.mainImage).width(600).height(400).url() : (post as any).localImage}
                                                alt={post.title}
                                                fill
                                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-slate-800" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="p-5 flex flex-col flex-1">
                                        <div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
                                            {post.categories?.[0] && (
                                                <span className="text-cyan-400 font-semibold">
                                                    {post.categories[0]}
                                                </span>
                                            )}
                                            <span>•</span>
                                            <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
                                        </div>

                                        <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                                            {post.title}
                                        </h4>

                                        <div className="mt-auto pt-4 flex items-center text-xs text-slate-400 group-hover:text-cyan-400 transition-colors">
                                            Xem chi tiết <ArrowRight className="w-3 h-3 ml-1" />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Mobile Button */}
                <div className="mt-12 text-center md:hidden">
                    <Link
                        href="/blog"
                        className="inline-flex items-center px-6 py-3 rounded-full bg-cyan-600 text-white font-semibold hover:bg-cyan-500 transition-colors"
                    >
                        Xem tất cả bài viết <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
