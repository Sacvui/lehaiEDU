import { MetadataRoute } from 'next'
import { sanityFetch } from '@/sanity/lib/fetch'
import { ALL_POSTS_QUERY } from '@/sanity/lib/queries'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const posts = await sanityFetch<any[]>({ query: ALL_POSTS_QUERY })

    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9999'

    const blogPosts = posts?.map((post) => ({
        url: `${baseUrl}/blog/${post.slug.current}`,
        lastModified: new Date(post.publishedAt),
        changeFrequency: 'weekly' as const,
        priority: post.featured ? 0.9 : 0.7,
    })) || []

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.8,
        },
        ...blogPosts,
    ]
}
