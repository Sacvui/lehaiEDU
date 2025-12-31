'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
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
        <section id="blog" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden border-t border-slate-800">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Intelligence <span className="text-slate-500">&</span>{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Insights
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Khám phá những góc nhìn sâu sắc về doanh nghiệp và nghiên cứu khoa học.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="hidden md:flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group"
                    >
                        Xem tất cả <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Featured + Grid Layout */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Featured Post - Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <Link
                            href={`/blog/${featuredPost.slug.current}`}
                            className="block h-full group"
                        >
                            <article className="relative h-full min-h-[600px] bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
                                {/* Background Image */}
                                <div className="absolute inset-0">
                                    {featuredPost.mainImage || (featuredPost as any).localImage ? (
                                        <Image
                                            src={featuredPost.mainImage ? urlForImage(featuredPost.mainImage).width(800).height(1000).url() : (featuredPost as any).localImage}
                                            alt={featuredPost.title}
                                            fill
                                            className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900"></div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                                </div>

                                {/* Content */}
                                <div className="relative h-full flex flex-col justify-end p-8">
                                    {/* Featured Badge */}
                                    <div className="absolute top-8 left-8">
                                        <span className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold uppercase tracking-wider shadow-lg">
                                            ⭐ Nổi bật
                                        </span>
                                    </div>

                                    {/* Category */}
                                    {featuredPost.categories && featuredPost.categories.length > 0 && (
                                        <div className="mb-4">
                                            <span className="inline-block px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur border border-cyan-500/50 text-sm font-bold text-cyan-400 uppercase tracking-wider">
                                                {featuredPost.categories[0]}
                                            </span>
                                        </div>
                                    )}

                                    {/* Title */}
                                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight">
                                        {featuredPost.title}
                                    </h3>

                                    {/* Excerpt */}
                                    {featuredPost.excerpt && (
                                        <p className="text-slate-300 text-lg leading-relaxed mb-6 line-clamp-3">
                                            {featuredPost.excerpt}
                                        </p>
                                    )}

                                    {/* Meta */}
                                    <div className="flex items-center gap-6 text-sm text-slate-400 mb-6">
                                        <span className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {new Date(featuredPost.publishedAt).toLocaleDateString('vi-VN')}
                                        </span>
                                        {featuredPost.readingTime && (
                                            <span className="flex items-center gap-2">
                                                <Clock className="w-4 h-4" />
                                                {featuredPost.readingTime} phút
                                            </span>
                                        )}
                                    </div>

                                    {/* CTA */}
                                    <div className="inline-flex items-center text-cyan-400 font-bold text-lg group-hover:translate-x-2 transition-transform">
                                        Đọc ngay <ArrowRight className="w-5 h-5 ml-2" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    </motion.div>

                    {/* Grid Posts - Right Side */}
                    <div className="grid md:grid-cols-2 gap-6">
                        {gridPosts.map((post, index) => (
                            <motion.div
                                key={post._id}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <Link
                                    href={`/blog/${post.slug.current}`}
                                    className="block group"
                                >
                                    <article className="bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 h-full">
                                        <div className="flex gap-4 p-6">
                                            {/* Thumbnail */}
                                            <div className="relative w-32 h-32 flex-shrink-0 rounded-xl overflow-hidden bg-slate-800">
                                                {post.mainImage || (post as any).localImage ? (
                                                    <Image
                                                        src={post.mainImage ? urlForImage(post.mainImage).width(200).height(200).url() : (post as any).localImage}
                                                        alt={post.title}
                                                        fill
                                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                                                        <span className="text-slate-600 text-2xl font-bold opacity-30">📝</span>
                                                    </div>
                                                )}
                                            </div>

                                            {/* Content */}
                                            <div className="flex-1 flex flex-col">
                                                {/* Category */}
                                                {post.categories && post.categories.length > 0 && (
                                                    <span className="inline-block w-fit px-2 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-400 uppercase tracking-wider mb-2">
                                                        {post.categories[0]}
                                                    </span>
                                                )}

                                                {/* Title */}
                                                <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2 leading-tight">
                                                    {post.title}
                                                </h4>

                                                {/* Excerpt */}
                                                {post.excerpt && (
                                                    <p className="text-sm text-slate-400 mb-3 line-clamp-2 flex-1">
                                                        {post.excerpt}
                                                    </p>
                                                )}

                                                {/* Meta */}
                                                <div className="flex items-center gap-4 text-xs text-slate-500">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-3 h-3" />
                                                        {new Date(post.publishedAt).toLocaleDateString('vi-VN', { day: 'numeric', month: 'short' })}
                                                    </span>
                                                    {post.readingTime && (
                                                        <span className="flex items-center gap-1">
                                                            <Clock className="w-3 h-3" />
                                                            {post.readingTime}p
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile CTA */}
                <div className="md:hidden mt-8 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                    >
                        Xem tất cả bài viết <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
