import { Suspense } from 'react';
import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import BlogClient from "./BlogClient";

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Blog - Intelligence & Insights | Lê Phúc Hải',
    description: 'Khám phá các bài viết chuyên sâu về RTM, Digital Transformation, Research và Strategic Leadership',
    openGraph: {
        title: 'Blog - Intelligence & Insights | Lê Phúc Hải',
        description: 'Kho tri thức thực chiến về Quản trị, Công nghệ và Nghiên cứu khoa học. RTM, Logistics, AI & PhD Mindset.',
        images: ['/blog/blog_cover_og.png'], // Ensure you have a default OG image or use a specific one
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
