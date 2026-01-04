'use client';

import { useState, useMemo, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';
import { urlForImage } from "@/sanity/lib/image";
import { Calendar, Clock, ArrowRight, Search, Filter, X, Zap, GraduationCap, TrendingUp, BookOpen } from "lucide-react";

interface BlogClientProps {
    posts: any[];
    categories: any[];
}

const CATEGORY_GROUPS: Record<string, string[]> = {
    'business': ['enterprise-strategy', 'digital-transformation', 'logistics-supply-chain', 'strategic-leadership', 'case-studies', 'ai-technology', 'rtm-distribution'],
    'career': ['mentorship-career', 'book-intern-to-ceo', 'academic-corner'], // Added academic-corner here for "General Research Life" fallback
    'research': ['research-innovation', 'academic-corner', 'data-analysis'], // Broad research group
    'tech': ['ai-technology', 'digital-transformation']
};

const GROUP_NAMES: Record<string, string> = {
    'business': 'Business Hub',
    'career': 'Career Growth',
    'research': 'Research Lab',
    'tech': 'Tech Trends'
};

const SERIES_CONFIG = [
    {
        id: 'ncs101',
        tag: 'NCS101',
        title: 'NCS101: PhD Mindset',
        desc: 'Tư duy làm nghiên cứu từ A-Z. Đừng để đời PhD là "bể khổ".',
        icon: GraduationCap,
        color: 'bg-indigo-600',
        gradient: 'from-indigo-600 to-violet-600'
    },
    {
        id: 'r101',
        tag: 'R101',
        title: 'R101: Data Analysis',
        desc: 'Phân tích dữ liệu cho dân kinh tế. Code R dễ như ăn kẹo (nếu biết cách).',
        icon: Filter,
        color: 'bg-blue-600',
        gradient: 'from-blue-600 to-cyan-500'
    },
    {
        id: 'python101',
        tag: 'Python101',
        title: 'Python101: Quant Research',
        desc: 'Vũ khí hạng nặng cho Marketer: Big Data, AI & Segmentation.',
        icon: Zap,
        color: 'bg-emerald-600',
        gradient: 'from-emerald-600 to-teal-500'
    },
    {
        id: 'book',
        category: 'book-intern-to-ceo',
        title: 'Book: Intern to CEO',
        desc: '300 bài học xương máu từ thực chiến. Đọc để bớt vấp ngã.',
        icon: BookOpen,
        color: 'bg-amber-600',
        gradient: 'from-amber-600 to-orange-500'
    }
];

export default function BlogClient({ posts, categories }: BlogClientProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    // Initialize from URL AND Sync on Change
    useEffect(() => {
        const categoryParam = searchParams.get('category');
        const tagParam = searchParams.get('tag');
        const groupParam = searchParams.get('group');

        // Always sync state with URL (including reset to null)
        if (groupParam) {
            setSelectedCategory(groupParam);
        } else if (categoryParam) {
            setSelectedCategory(categoryParam);
        } else {
            setSelectedCategory(null);
        }

        setSelectedTag(tagParam || null);

    }, [searchParams]);

    // Update URL when filtering (Optional but good for UX, but let's rely on Link from Header first).
    // The user issue is clicking 'Blog' (Link to /blog) doesn't reset. The above useEffect fix solves that.

    const updateFilterResult = (key: string | null, type: 'category' | 'tag' | 'group' = 'category') => {
        // Build new URL
        const params = new URLSearchParams(searchParams.toString());

        // Clear existing compatible filters
        if (type === 'group' || type === 'category') {
            params.delete('group');
            params.delete('category');
            if (key) params.set(type === 'group' ? 'group' : 'category', key);
        }

        if (type === 'tag') {
            if (key) params.set('tag', key);
            else params.delete('tag');
        }

        // Push to URL - this triggers useEffect above
        router.push(`/blog?${params.toString()}`, { scroll: false });
    };

    const clearFilters = () => {
        setSearchQuery('');
        router.push('/blog'); // Reset URL to clean /blog
    };

    // Filter posts
    const filteredPosts = useMemo(() => {
        let filtered = posts;

        // 1. Filter by Category OR Group
        if (selectedCategory) {
            if (CATEGORY_GROUPS[selectedCategory]) {
                // It's a group (e.g., 'business')
                const allowedSlugs = CATEGORY_GROUPS[selectedCategory];
                filtered = filtered.filter(post =>
                    post.categories?.some((cat: any) => allowedSlugs.includes(cat.slug.current))
                );
            } else {
                // It's a specific category slug
                filtered = filtered.filter(post =>
                    post.categories?.some((cat: any) => cat.slug.current === selectedCategory)
                );
            }
        }

        // 2. Filter by Tag (for Series)
        if (selectedTag) {
            filtered = filtered.filter(post =>
                post.tags?.includes(selectedTag)
            );
        }

        // 3. Filter by Search Query
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            filtered = filtered.filter(post =>
                post.title.toLowerCase().includes(query) ||
                post.excerpt?.toLowerCase().includes(query) ||
                post.tags?.some((tag: string) => tag.toLowerCase().includes(query))
            );
        }

        return filtered;
    }, [posts, selectedCategory, selectedTag, searchQuery]);

    const featuredPosts = filteredPosts.filter(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    const clearFilters = () => {
        setSearchQuery('');
        setSelectedCategory(null);
        setSelectedTag(null);
    };

    const isFiltering = searchQuery || selectedCategory || selectedTag;

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
            {/* Hero Section */}
            <div className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                <section className="pt-32 pb-12 px-4">
                    <div className="container mx-auto max-w-7xl">
                        <div className="text-center space-y-4 mb-8">
                            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white tracking-tight">
                                Learning <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Hub</span>
                            </h1>
                            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                                Kho tri thức thực chiến về Quản trị, Công nghệ và Nghiên cứu khoa học.
                            </p>
                        </div>

                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative mb-12">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                            <input
                                type="text"
                                placeholder="Tìm kiếm bài viết..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-12 py-3 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                            />
                            {searchQuery && (
                                <button
                                    onClick={() => setSearchQuery('')}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-full"
                                >
                                    <X className="w-4 h-4 text-slate-500" />
                                </button>
                            )}
                        </div>

                        {/* VISUAL SERIES INDEX - Only show when NOT searching/filtering deep */}
                        {!isFiltering && (
                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
                                {SERIES_CONFIG.map((series) => (
                                    <button
                                        key={series.id}
                                        onClick={() => {
                                            if (series.tag) setSelectedTag(series.tag);
                                            if (series.category) setSelectedCategory(series.category);
                                        }}
                                        className="group relative overflow-hidden rounded-2xl p-6 text-left transition-all hover:shadow-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 hover:-translate-y-1"
                                    >
                                        <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br ${series.gradient}`} />
                                        <div className={`w-12 h-12 rounded-lg mb-4 flex items-center justify-center text-white shadow-lg bg-gradient-to-br ${series.gradient}`}>
                                            <series.icon className="w-6 h-6" />
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                                            {series.title}
                                        </h3>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                                            {series.desc}
                                        </p>
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Topic Groups (Pills) */}
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <button
                                onClick={clearFilters}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${!isFiltering
                                    ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                                    }`}
                            >
                                Tất cả
                            </button>
                            {Object.keys(CATEGORY_GROUPS).map((groupKey) => (
                                <button
                                    key={groupKey}
                                    onClick={() => router.push(`/blog?group=${groupKey}`, { scroll: false })}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === groupKey
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                                        }`}
                                >
                                    {GROUP_NAMES[groupKey]}
                                </button>
                            ))}
                            {/* Specific "General Research" Quick Filter */}
                            <button
                                onClick={() => router.push('/blog?category=academic-corner', { scroll: false })}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === 'academic-corner'
                                    ? 'bg-indigo-600 text-white shadow-lg'
                                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 dark:bg-slate-800 dark:text-slate-300 dark:border-slate-700'
                                    }`}
                            >
                                Đời Research
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Content Area */}
            <div className="container mx-auto max-w-7xl px-4 py-12">

                {/* Active Filter Indicator */}
                {isFiltering && (
                    <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
                        <span>Đang xem:</span>
                        {selectedTag && <span className="font-bold text-slate-900 dark:text-white">Tag: {selectedTag}</span>}
                        {selectedCategory && <span className="font-bold text-slate-900 dark:text-white">Danh mục: {GROUP_NAMES[selectedCategory] || selectedCategory}</span>}
                        {searchQuery && <span className="font-bold text-slate-900 dark:text-white">Tìm kiếm: "{searchQuery}"</span>}

                        <button onClick={clearFilters} className="ml-auto text-red-500 hover:underline flex items-center gap-1">
                            <X className="w-3 h-3" /> Xóa bộ lọc
                        </button>
                    </div>
                )}

                {/* Featured Posts (Only show if filtering or on home) */}
                {featuredPosts.length > 0 && (
                    <section className="mb-16">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                            <TrendingUp className="w-6 h-6 text-amber-500" />
                            Tiêu điểm
                        </h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.slice(0, 4).map((post) => (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug.current}`}
                                    className="group block h-full"
                                >
                                    <article className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all hover:shadow-xl hover:-translate-y-1 h-full flex flex-col">
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
                                        <div className="p-6 flex-1 flex flex-col">
                                            <div className="flex items-center gap-3 text-xs mb-3">
                                                {post.categories?.[0] && (
                                                    <span className="px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">
                                                        {post.categories[0].title}
                                                    </span>
                                                )}
                                                <span className="text-slate-400 flex items-center gap-1">
                                                    <Clock className="w-3 h-3" /> {post.readingTime} phút
                                                </span>
                                            </div>
                                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-slate-600 dark:text-slate-400 line-clamp-2 mb-4 flex-1">
                                                {post.excerpt}
                                            </p>
                                            <div className="flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
                                                Đọc tiếp <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Regular Posts Grid */}
                <section>
                    <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                        {isFiltering ? `Danh sách bài viết (${filteredPosts.length})` : 'Mới cập nhật'}
                    </h2>

                    {filteredPosts.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {(isFiltering ? filteredPosts : regularPosts).map((post) => (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug.current}`}
                                    className="group block"
                                >
                                    <article className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 transition-all hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
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
                                            <div className="flex items-center gap-2 text-xs mb-3 text-slate-500">
                                                <span>{new Date(post.publishedAt).toLocaleDateString('vi-VN')}</span>
                                                <span>•</span>
                                                <span>{post.readingTime}p đọc</span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 line-clamp-2 flex-1">
                                                {post.excerpt}
                                            </p>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white dark:bg-slate-900 rounded-2xl border border-dashed border-slate-300 dark:border-slate-800">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 mb-4">
                                <Search className="w-8 h-8 text-slate-400" />
                            </div>
                            <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-2">Không tìm thấy bài viết</h3>
                            <p className="text-slate-500 max-w-sm mx-auto">
                                Thử thay đổi từ khóa tìm kiếm hoặc chọn danh mục khác bạn nhé.
                            </p>
                            <button
                                onClick={clearFilters}
                                className="mt-6 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
                            >
                                Xóa bộ lọc
                            </button>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
