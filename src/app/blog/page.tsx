import Image from "next/image";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_POSTS_QUERY } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";

export const dynamic = 'force-dynamic';

export default async function BlogIndexPage() {
    const posts = await sanityFetch<any[]>({ query: ALL_POSTS_QUERY });

    const featuredPosts = posts?.filter(post => post.featured) || [];
    const regularPosts = posts?.filter(post => !post.featured) || [];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">
                            Intelligence & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-700 to-orange-600 dark:from-amber-400 dark:to-orange-400">Insights</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                            Exploring the intersection of technology, research, and enterprise transformation
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            {featuredPosts.length > 0 && (
                <section className="py-12 px-4">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">Featured Articles</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {featuredPosts.map((post) => (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug.current}`}
                                    className="group block"
                                >
                                    <article className="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 transition-all shadow-lg hover:shadow-xl">
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
                                            <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400 mb-3">
                                                {post.categories?.[0] && (
                                                    <span
                                                        className="px-3 py-1 rounded-full text-xs font-semibold"
                                                        style={{
                                                            backgroundColor: post.categories[0].color ? `${post.categories[0].color}20` : '#f1f5f9',
                                                            color: post.categories[0].color || '#64748b'
                                                        }}
                                                    >
                                                        {post.categories[0].title}
                                                    </span>
                                                )}
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-4 h-4" />
                                                    {post.readingTime} min
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
                                                    {new Date(post.publishedAt).toLocaleDateString()}
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
            <section className="py-12 px-4 pb-24">
                <div className="container mx-auto max-w-6xl">
                    <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
                        {featuredPosts.length > 0 ? 'All Articles' : 'Latest Articles'}
                    </h2>
                    {regularPosts.length > 0 ? (
                        <div className="grid md:grid-cols-3 gap-8">
                            {regularPosts.map((post) => (
                                <Link
                                    key={post._id}
                                    href={`/blog/${post.slug.current}`}
                                    className="group block"
                                >
                                    <article className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 transition-all h-full flex flex-col">
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
                                            <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mb-3">
                                                {post.categories?.[0] && (
                                                    <span
                                                        className="px-2 py-1 rounded-full font-semibold"
                                                        style={{
                                                            backgroundColor: post.categories[0].color ? `${post.categories[0].color}20` : '#f1f5f9',
                                                            color: post.categories[0].color || '#64748b'
                                                        }}
                                                    >
                                                        {post.categories[0].title}
                                                    </span>
                                                )}
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readingTime} min
                                                </span>
                                            </div>
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-1">
                                                {post.excerpt}
                                            </p>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">
                                                {new Date(post.publishedAt).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-20 bg-white/50 dark:bg-slate-900/50 rounded-2xl border border-slate-200 dark:border-slate-800 border-dashed">
                            <p className="text-slate-600 dark:text-slate-400 text-lg">No articles published yet. Check back soon!</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
