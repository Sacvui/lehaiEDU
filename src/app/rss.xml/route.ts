import { sanityFetch } from '@/sanity/lib/fetch'
import { ALL_POSTS_QUERY } from '@/sanity/lib/queries'
import { urlForImage } from '@/sanity/lib/image'

export async function GET() {
    const posts = await sanityFetch<any[]>({ query: ALL_POSTS_QUERY })
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:9999'

    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Le Phuc Hai - Blog</title>
    <link>${baseUrl}/blog</link>
    <description>Insights on digital transformation, research, and enterprise strategy</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    ${posts?.map((post) => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <link>${baseUrl}/blog/${post.slug.current}</link>
      <description>${escapeXml(post.excerpt || '')}</description>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug.current}</guid>
      ${post.categories?.map((cat: any) => `<category>${escapeXml(cat.title)}</category>`).join('\n      ')}
      ${post.mainImage ? `<enclosure url="${urlForImage(post.mainImage).url()}" type="image/jpeg"/>` : ''}
    </item>
    `).join('')}
  </channel>
</rss>`

    return new Response(rss, {
        headers: {
            'Content-Type': 'application/xml',
            'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate',
        },
    })
}

function escapeXml(unsafe: string): string {
    return unsafe.replace(/[<>&'"]/g, (c) => {
        switch (c) {
            case '<': return '&lt;'
            case '>': return '&gt;'
            case '&': return '&amp;'
            case "'": return '&apos;'
            case '"': return '&quot;'
            default: return c
        }
    })
}
