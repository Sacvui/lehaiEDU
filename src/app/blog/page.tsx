import { sanityFetch } from "@/sanity/lib/fetch";
import { ALL_POSTS_QUERY, CATEGORIES_QUERY } from "@/sanity/lib/queries";
import BlogClient from "./BlogClient";

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Blog - Intelligence & Insights | Lê Phúc Hải',
    description: 'Khám phá các bài viết chuyên sâu về RTM, Digital Transformation, Research và Strategic Leadership',
};

export default async function BlogIndexPage() {
    const [posts, categories] = await Promise.all([
        sanityFetch<any[]>({ query: ALL_POSTS_QUERY }),
        sanityFetch<any[]>({ query: CATEGORIES_QUERY })
    ]);

    return <BlogClient posts={posts || []} categories={categories || []} />;
}
