'use client';

import { useState, useMemo } from 'react';
import Image from "next/image";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import { Calendar, Clock, ArrowRight, Search, Filter, X } from "lucide-react";

interface BlogClientProps {
    posts: any[];
    categories: any[];
}

export default function BlogClient({ posts, categories }: BlogClientProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [showFilters, setShowFilters] = useState(false);

    // Filter posts based on search and category
    const filteredPosts = useMemo(() => {
        let filtered = posts;

        // Filter by category
        if (selectedCategory) {
            filtered = filtered.filter(post =>
                post.categories?.some((cat: any) => cat.slug.current === selectedCategory)
            );
        }

        // Filter by search query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.excerpt?.toLowerCase().includes(query) ||
                post.tags?.some((tag: string) => tag.toLowerCase().includes(query))
            );
        }

        return filtered;
    }, [posts, selectedCategory, searchQuery]);

    const featuredPosts = filteredPosts.filter(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Hero Section */}
            <section className="pt-32 pb-12 px-4">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center space-y-6 mb-12">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">
                            Intelligence & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 dark:from-amber-400 dark:to-orange-400">Insights</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Khám phá giao điểm giữa công nghệ, nghiên cứu và chuyển đổi doanh nghiệp
                        </p>
                    </div>

                    {/* Search & Filter Bar */}
                    <div className="max-w-4xl mx-auto space-y-4">
                        {/* Search Input */}
                        <div className="relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm bài viết theo tiêu đề, nội dung hoặc tag..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-amber-500 dark:focus:border-amber-500 focus:outline-none transition-colors"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-full transition-colors"
                                >
                                    <X className="w-4 h-4 text-slate-400" />
                                </button>
                            )}
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            <button
                                onClick={() => setSelectedCategory(null)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${selectedCategory === null
                                        ? 'bg-amber-600 text-white shadow-lg'
                                        : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-500'
                                    }`}
                            >
                                Tất cả ({posts.length})
                            </button>
                            {categories.map((category) => {
                                const count = posts.filter(post =>
                                    post.categories?.some((cat: any) => cat.slug.current === category.slug.current)
                                ).length;

                                return (
                                    <button
                                        key={category._id}
                                        onClick={() => setSelectedCategory(category.slug.current)}
                                        className={`px-4 py-2 rounded-full text-sm font-semibold whitespace-nowrap transition-all ${selectedCategory === category.slug.current
                                                ? 'text-white shadow-lg'
                                                : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-500'
                                            }`}
                                        style={{
                                            backgroundColor: selectedCategory === category.slug.current ? category.color : undefined,
                                        }}
                                    >
                                        {category.title} ({count})
                                    </button>
                                );
                            })}
                        </div>

                        {/* Results Count */}
                        <div className="text-center text-sm text-slate-600 dark:text-slate-400">
                            {searchQuery || selectedCategory ? (
                                <span>Tìm thấy <strong className="text-amber-600 dark:text-amber-400">{filteredPosts.length}</strong> bài viết</span>
                            ) : (
                                <span>Tổng cộng <strong className="text-amber-600 dark:text-amber-400">{posts.length}</strong> bài viết</span>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
                <section className="py-8 px-4">
                    <div className="container mx-auto max-w-7xl">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <span className="w-1 h-6 bg-amber-600 rounded-full"></span>
                            Bài viết nổi bật
                        </h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            {featuredPosts.map((post) => (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug.current}`}
                                    className="group block"
                                >
                                    <article className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                                        {post.mainImage && (
                                            <div className="relative aspect-[16/9] overflow-hidden">
                                                <Image
                                                    src={urlForImage(post.mainImage)?.url() || ''}
                                                    alt={post.mainImage.alt || post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <div className="flex items-center gap-3 text-sm mb-3">
                                                {post.categories?.[0] && (
                                                    <span
                                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                                        style={{
                                                            backgroundColor: `${post.categories[0].color}20`,
                                                            color: post.categories[0].color
                                                        }}
                                                    >
                                                        {post.categories[0].title}
                                                    </span>
                                                )}
                                                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                                                    <Clock className="w-4 h-4" />
                                                    {post.readingTime} phút
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 mb-4 line-clamp-2">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center justify-between">
                                                <div className="text-sm text-slate-500 dark:text-slate-400">
                                                    {new Date(post.publishedAt).toLocaleDateString('vi-VN')}
                                                </div>
                                                <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-2 transition-transform" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* Regular Posts Grid */}
            <section className="py-8 px-4 pb-24">
                <div className="container mx-auto max-w-7xl">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <span className="w-1 h-6 bg-amber-600 rounded-full"></span>
                        {featuredPosts.length > 0 ? 'Tất cả bài viết' : 'Bài viết mới nhất'}
                    </h2>
                    {regularPosts.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {regularPosts.map((post) => (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug.current}`}
                                    className="group block"
                                >
                                    <article className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 transition-all h-full flex flex-col hover:shadow-lg hover:-translate-y-1">
                                        {post.mainImage && (
                                            <div className="relative aspect-[16/9] overflow-hidden">
                                                <Image
                                                    src={urlForImage(post.mainImage)?.url() || ''}
                                                    alt={post.mainImage.alt || post.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                        <div className="p-5 flex-1 flex flex-col">
                                            <div className="flex items-center gap-2 text-xs mb-3">
                                                {post.categories?.[0] && (
                                                    <span
                                                        className="px-2 py-1 rounded-full font-semibold"
                                                        style={{
                                                            backgroundColor: `${post.categories[0].color}20`,
                                                            color: post.categories[0].color
                                                        }}
                                                    >
                                                        {post.categories[0].title}
                                                    </span>
                                                )}
                                                <span className="flex items-center gap-1 text-slate-500 dark:text-slate-400">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readingTime}p
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-1">
                                                {post.excerpt}
                                            </p>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">
                                                {new Date(post.publishedAt).toLocaleDateString('vi-VN')}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 border-dashed">
                            <p className="text-slate-600 dark:text-slate-400 text-lg">
                                {searchQuery || selectedCategory
                                    ? 'Không tìm thấy bài viết nào phù hợp. Thử tìm kiếm khác nhé!'
                                    : 'Chưa có bài viết nào. Quay lại sau nhé!'}
                            </p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
