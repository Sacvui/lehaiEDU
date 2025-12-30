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

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params
    const post = await sanityFetch<any>({
        query: POST_QUERY,
        params: { slug }
    })

    if (!post) {
        notFound()
    }

    // Get related posts (same category)
    const allPosts = await sanityFetch<any[]>({ query: ALL_POSTS_QUERY })
    const relatedPosts = allPosts
        ?.filter(p =>
            p._id !== post._id &&
            p.categories?.some((cat: any) =>
                post.categories?.some((postCat: any) => postCat._id === cat._id)
            )
        )
        .slice(0, 3) || []

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50/30 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            {/* Hero Section */}
            <article className="pt-32 pb-16">
                <div className="container mx-auto max-w-4xl px-4">
                    {/* Back Button */}
                    <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-amber-700 dark:hover:text-amber-400 transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>

                    {/* Categories */}
                    <div className="flex flex-wrap gap-2 mb-6">
                        {post.categories?.map((category: any, index: number) => (
                            <span
                                key={category.slug?.current || index}
                                className="px-3 py-1 rounded-full text-sm font-semibold"
                                style={{
                                    backgroundColor: category.color ? `${category.color}20` : '#f1f5f9',
                                    color: category.color || '#64748b'
                                }}
                            >
                                {category.title}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                        {post.title}
                    </h1>

                    {/* Excerpt */}
                    {post.excerpt && (
                        <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            {post.excerpt}
                        </p>
                    )}

                    {/* Meta Info */}
                    <div className="flex flex-wrap items-center gap-6 pb-8 border-b border-slate-200 dark:border-slate-800">
                        {/* Author */}
                        <div className="flex items-center gap-3">
                            {post.author?.image && (
                                <Image
                                    src={urlForImage(post.author.image).url()}
                                    alt={post.author.name}
                                    width={48}
                                    height={48}
                                    className="rounded-full"
                                />
                            )}
                            <div>
                                <p className="font-semibold text-slate-900 dark:text-white">
                                    {post.author?.name}
                                </p>
                                {post.author?.role && (
                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                        {post.author.role}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Date & Reading Time */}
                        <div className="flex items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
                            <span className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {new Date(post.publishedAt).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric'
                                })}
                            </span>
                            <span className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readingTime} min read
                            </span>
                        </div>

                        {/* Share Buttons */}
                        <div className="ml-auto flex items-center gap-2">
                            <Button variant="outline" size="sm" className="rounded-full">
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                            </Button>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {post.mainImage && (
                        <div className="my-12 rounded-2xl overflow-hidden">
                            <Image
                                src={urlForImage(post.mainImage).url()}
                                alt={post.mainImage.alt || post.title}
                                width={1200}
                                height={675}
                                className="w-full h-auto"
                                priority
                            />
                        </div>
                    )}

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
                                        url: 'https://lehai.edu.vn/logo.png',
                                    },
                                },
                                mainEntityOfPage: {
                                    '@type': 'WebPage',
                                    '@id': `https://lehai.edu.vn/blog/${slug}`,
                                },
                            }),
                        }}
                    />

                    {/* Content */}
                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <PortableText
                            value={post.body}
                            components={portableTextComponents}
                        />
                    </div>

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
