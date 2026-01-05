import { BookLandingPage } from '@/components/book/BookLandingPage'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { sanityFetch } from '@/sanity/lib/fetch'
import { POST_QUERY, ALL_POSTS_QUERY } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'
import { portableTextComponents } from '@/components/PortableTextComponents'
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params
    const post = await sanityFetch<any>({
        query: POST_QUERY,
        params: { slug }
    })

    if (!post) {
        return {
            title: 'Post Not Found',
        }
    }

    return {
        title: post.seo?.metaTitle || post.title,
        description: post.seo?.metaDescription || post.excerpt,
        keywords: post.seo?.keywords?.join(', '),
        openGraph: {
            title: post.seo?.metaTitle || post.title,
            description: post.seo?.metaDescription || post.excerpt,
            images: post.mainImage ? [urlForImage(post.mainImage).url()] : [],
        },
    }
}

import { SeriesNavigator } from '@/components/blog/SeriesNavigator'
import { SeriesControls } from '@/components/blog/SeriesControls'

// Tags that shouldn't be treated as a Series Identifier
const IGNORED_SERIES_TAGS = ['Góc nhìn HaiLP', 'Featured', 'Hot', 'Tips', 'Knowledge', 'Deep Dive', 'New']

import { TableOfContents } from '@/components/blog/TableOfContents'

// Helper to extract headings from PortableText
// Duplicate slugify logic to ensure server-side match
const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await sanityFetch<any>({
        query: POST_QUERY,
        params: { slug }
    })

    if (!post) {
        notFound()
    }

    // Extract Headings for TOC
    const headings = post.body
        ?.filter((block: any) => block._type === 'block' && ['h2', 'h3'].includes(block.style))
        .map((block: any) => ({
            id: slugify(block.children?.[0]?.text || ''),
            text: block.children?.[0]?.text || '',
            level: block.style === 'h2' ? 2 : 3
        })) || []


    // Get all posts for related & series logic
    const allPosts = await sanityFetch<any[]>({ query: ALL_POSTS_QUERY })

    // 1. Series Logic
    // Find the first tag that looks like a series (not in ignore list)
    // Priority: Tags ending in numbers (e.g. NCS101) or specific known series
    const seriesTag = post.tags?.find((t: string) =>
        !IGNORED_SERIES_TAGS.includes(t) &&
        (t.match(/\d+$/) || t.includes('Series')) // Heuristic: "101", "Series" usually means series
    ) || post.tags?.find((t: string) => !IGNORED_SERIES_TAGS.includes(t)) // Fallback to first non-ignored tag

    const seriesPosts = seriesTag
        ? allPosts.filter(p => p.tags?.includes(seriesTag))
        : []

    // 2. Related Posts (Same category, excluding current series posts to avoid duplication)
    const relatedPosts = allPosts
        ?.filter(p =>
            p._id !== post._id &&
            !seriesPosts.some(sp => sp._id === p._id) && // Don't show series posts in "Related"
            p.categories?.some((cat: any) =>
                post.categories?.some((postCat: any) => postCat._id === cat._id)
            )
        )
        .slice(0, 3) || []

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Hero Section */}
            <article className="pt-32 pb-16">
                <div className="container mx-auto max-w-7xl px-4">
                    {/* Back Button */}
                    <div className="max-w-4xl mx-auto">
                        <Link
                            href="/blog"
                            className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors mb-8"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back to Blog
                        </Link>
                    </div>

                    {/* Blog Header (Centered) */}
                    <div className="max-w-4xl mx-auto">
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2 mb-6">
                            {post.categories?.map((category: any, index: number) => (
                                <span
                                    key={index}
                                    className="px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-300 rounded-full text-xs font-semibold tracking-wide uppercase"
                                >
                                    {category.title}
                                </span>
                            ))}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
                            {post.title}
                        </h1>

                        {/* Excerpt */}
                        {post.excerpt && (
                            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                                {post.excerpt}
                            </p>
                        )}

                        {/* Meta */}
                        <div className="flex flex-wrap items-center gap-6 text-slate-500 dark:text-slate-400 text-sm mb-12 border-b border-slate-200 dark:border-slate-800 pb-8">
                            <div className="flex items-center gap-2">
                                <Calendar className="w-4 h-4" />
                                <time dateTime={post.publishedAt}>
                                    {new Date(post.publishedAt).toLocaleDateString('vi-VN', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </time>
                            </div>
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4" />
                                <span>{post.readingTime} min read</span>
                            </div>
                        </div>

                        {/* Feature Image */}
                        {post.mainImage && (
                            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl mb-16 group">
                                <Image
                                    src={urlForImage(post.mainImage).url()}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    priority
                                />
                            </div>
                        )}
                    </div>

                    {/* JSON-LD Schema for SEO */}
                    <script
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{
                            __html: JSON.stringify({
                                '@context': 'https://schema.org',
                                '@type': 'Article',
                                headline: post.title,
                                description: post.excerpt,
                                image: post.mainImage ? urlForImage(post.mainImage).url() : undefined,
                                datePublished: post.publishedAt,
                                dateModified: post.publishedAt,
                                author: {
                                    '@type': 'Person',
                                    name: post.author?.name,
                                    url: `https://lehai.edu.vn`,
                                },
                                publisher: {
                                    '@type': 'Organization',
                                    name: 'Le Phuc Hai',
                                    logo: {
                                        '@type': 'ImageObject',
                                        url: 'https://lehai.edu.vn/uploads/profile-founder.jpg',
                                    },
                                },
                                mainEntityOfPage: {
                                    '@type': 'WebPage',
                                    '@id': `https://lehai.edu.vn/blog/${slug}`,
                                },
                            }),
                        }}
                    />

                    {/* Main Content Grid */}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 pt-8">
                        {/* Sidebar: Table of Contents (Desktop) */}
                        <aside className="hidden lg:block lg:col-span-3">
                            <div className="sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-slate-800">
                                <TableOfContents headings={headings} />
                            </div>
                        </aside>

                        {/* Article Body */}
                        <div className="lg:col-span-8 lg:col-start-5">
                            <div className="prose prose-lg md:prose-xl dark:prose-invert prose-headings:font-bold prose-headings:text-slate-900 dark:prose-headings:text-white prose-p:text-slate-700 dark:prose-p:text-slate-300 prose-a:text-amber-600 dark:prose-a:text-amber-400 prose-img:rounded-xl max-w-none">
                                <PortableText
                                    value={post.body}
                                    components={portableTextComponents}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Series Controls (Next/Prev) */}
                    {seriesTag && seriesPosts.length > 1 && (
                        <SeriesControls
                            currentPostId={post._id}
                            seriesTag={seriesTag}
                            posts={seriesPosts}
                        />
                    )}

                    {/* Tags */}
                    {post.tags && post.tags.length > 0 && (
                        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800">
                            <h3 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-4">
                                Tags
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {post.tags.map((tag: string) => (
                                    <span
                                        key={tag}
                                        className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-sm text-slate-700 dark:text-slate-300"
                                    >
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Author Bio */}
                    {post.author?.bio && (
                        <div className="mt-12 p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <div className="flex items-start gap-6">
                                {post.author.image && (
                                    <Image
                                        src={urlForImage(post.author.image).url()}
                                        alt={post.author.name}
                                        width={80}
                                        height={80}
                                        className="rounded-full"
                                    />
                                )}
                                <div className="flex-1">
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                                        About {post.author.name}
                                    </h3>
                                    <div className="text-slate-600 dark:text-slate-400 mb-4">
                                        <PortableText value={post.author.bio} />
                                    </div>
                                    {post.author.social && (
                                        <div className="flex gap-3">
                                            {post.author.social.linkedin && (
                                                <a
                                                    href={post.author.social.linkedin}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-500 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                                                >
                                                    <Linkedin className="w-5 h-5" />
                                                </a>
                                            )}
                                            {post.author.social.twitter && (
                                                <a
                                                    href={post.author.social.twitter}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-slate-500 hover:text-amber-700 dark:hover:text-amber-400 transition-colors"
                                                >
                                                    <Twitter className="w-5 h-5" />
                                                </a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </article>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 px-4 bg-slate-100/50 dark:bg-slate-900/50">
                    <div className="container mx-auto max-w-6xl">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
                            Related Articles
                        </h2>
                        <div className="grid md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost: any) => (
                                <Link
                                    key={relatedPost._id}
                                    href={`/blog/${relatedPost.slug.current}`}
                                    className="group block"
                                >
                                    <article className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 transition-all h-full flex flex-col">
                                        {relatedPost.mainImage && (
                                            <div className="relative aspect-[16/9] overflow-hidden">
                                                <Image
                                                    src={urlForImage(relatedPost.mainImage).url()}
                                                    alt={relatedPost.mainImage.alt || relatedPost.title}
                                                    fill
                                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                />
                                            </div>
                                        )}
                                        <div className="p-5 flex-1 flex flex-col">
                                            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-amber-700 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                                                {relatedPost.title}
                                            </h3>
                                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 line-clamp-2 flex-1">
                                                {relatedPost.excerpt}
                                            </p>
                                            <div className="text-xs text-slate-500 dark:text-slate-400">
                                                {new Date(relatedPost.publishedAt).toLocaleDateString()}
                                            </div>
                                        </div>
                                    </article>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </div>
    )
}
