import { Suspense } from 'react';
import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import BlogClient from "./BlogClient";

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Intelligence & Insights | Le Phuc Hai',
    description: 'Explore in-depth articles on RTM, Digital Transformation, Research Methodology, and Strategic Leadership.',
    openGraph: {
        title: 'Intelligence & Insights | Le Phuc Hai',
        description: 'A knowledge hub for Management, Technology, and Scientific Research. RTM, Logistics, AI, and PhD Mindset.',
        images: ['/blog/blog_cover_og.png'],
        type: 'website',
    },
};

export default async function BlogIndexPage() {
    const [posts, categories] = await Promise.all([
        sanityFetch<any[]>({ query: ALL_POSTS_QUERY }),
        sanityFetch<any[]>({ query: CATEGORIES_QUERY })
    ]);

    return (
        <Suspense fallback={<div className="min-h-screen pt-32 text-center">Loading...</div>}>
            <BlogClient posts={posts || []} categories={categories || []} />
        </Suspense>
    );
}
