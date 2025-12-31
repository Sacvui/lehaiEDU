'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, Tag } from 'lucide-react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { RECENT_POSTS_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

const MOCK_ARTICLES = [
    {
        _id: '1',
        title: "Tại sao RTM quan trọng hơn bao bì? (RTM Masterclass #1)",
        slug: { current: 'rtm-masterclass-1' },
        publishedAt: new Date().toISOString(),
        categories: ["RTM Strategy"],
        readingTime: 6,
        excerpt: "70% thành bại của FMCG nằm ở hệ thống phân phối. Tại sao Unilever và Vinamilk mất 20 năm để xây dựng 'hào lũy' này?",
        mainImage: null,
        localImage: "/blog/rtm-1.png"
    },
    {
        _id: '2',
        title: "Audit: Bắt mạch khám bệnh hệ thống phân phối",
        slug: { current: 'rtm-masterclass-2' },
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        categories: ["Audit"],
        readingTime: 8,
        excerpt: "Numeric vs Weighted Distribution. Tại sao phủ 5000 điểm bán vẫn chỉ chiếm 8% thị phần?",
        mainImage: null,
        localImage: "/blog/rtm-2.png"
    },
    {
        _id: '3',
        title: "Segmentation: Phân loại kênh 'Đo ni đóng giày'",
        slug: { current: 'rtm-masterclass-3' },
        publishedAt: new Date(Date.now() - 172800000).toISOString(),
        categories: ["Strategy"],
        readingTime: 7,
        excerpt: "Chiến lược 3 kênh chủ lực: GT (Tốc độ), MT (Trải nghiệm), KA (Quan hệ). Đừng dùng 1 chính sách cho tất cả.",
        mainImage: null,
        localImage: "/blog/rtm-3.png"
    },
    {
        _id: '4',
        title: "Distributor Strategy: Chọn NPP như chọn 'Vợ'",
        slug: { current: 'rtm-masterclass-4' },
        publishedAt: new Date(Date.now() - 259200000).toISOString(),
        categories: ["Management"],
        readingTime: 9,
        excerpt: "Tiêu chí 3C+1M: Vốn, Năng lực, Cam kết và Tư duy quản lý. Những Red Flags cần tránh khi tìm đối tác.",
        mainImage: null,
        localImage: "/blog/rtm-4.png"
    },
    {
        _id: '5',
        title: "Route Planning: Nghệ thuật vẽ tuyến (MCP)",
        slug: { current: 'rtm-masterclass-5' },
        publishedAt: new Date(Date.now() - 345600000).toISOString(),
        categories: ["Logistics"],
        readingTime: 7,
        excerpt: "Tối ưu hóa PJC (Permanent Journey Cycle) để Sales không chạy lòng vòng. Tăng 30% năng suất nhờ vẽ tuyến đúng.",
        mainImage: null,
        localImage: "/blog/rtm-5.png"
    },
    {
        _id: '6',
        title: "Sales Force: Hunter vs Farmer",
        slug: { current: 'rtm-masterclass-6' },
        publishedAt: new Date(Date.now() - 432000000).toISOString(),
        categories: ["HR"],
        readingTime: 6,
        excerpt: "Đừng bắt cá leo cây. Làm sao để xây dựng đội ngũ Hunter máu lửa đi mở thị trường và Farmer cần mẫn chăm sóc khách cũ?",
        mainImage: null,
        localImage: "/blog/rtm-6.png"
    },
    {
        _id: '7',
        title: "In-Store Execution: Cuộc chiến trên kệ hàng",
        slug: { current: 'rtm-masterclass-7' },
        publishedAt: new Date(Date.now() - 518400000).toISOString(),
        categories: ["Trade Marketing"],
        readingTime: 5,
        excerpt: "'Thấy là bán'. 7 bước bán hàng chuẩn và checklist chấm điểm Perfect Store.",
        mainImage: null,
        localImage: "/blog/rtm-7.png"
    }
];
// Force rebuild for image assets

export function LatestInsights() {
    const [articles, setArticles] = useState<any[]>(MOCK_ARTICLES);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const fetchedArticles = await sanityFetch<any[]>({ query: RECENT_POSTS_QUERY });
                if (fetchedArticles && fetchedArticles.length > 0) {
                    setArticles(fetchedArticles);
                } else {
                    setArticles(MOCK_ARTICLES);
                }
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

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
