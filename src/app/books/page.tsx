
import { sanityFetch } from "@/sanity/lib/fetch";
import { groq } from "next-sanity";
import Link from "next/link";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";

const ITEMS_PER_PAGE = 9;

const BOOK_POSTS_QUERY = groq`{
  "posts": *[_type == "post" && "book-intern-to-ceo" in categories[]->slug.current] | order(publishedAt desc) [$start...$end] {
    _id,
    title,
    slug,
    excerpt,
    publishedAt,
    mainImage,
    "categories": categories[]->title,
    "author": author->name,
    "authorSlug": author->slug.current
  },
  "total": count(*[_type == "post" && "book-intern-to-ceo" in categories[]->slug.current])
}`;

export default async function BooksPage({
    searchParams,
}: {
    searchParams: { page?: string };
}) {
    const currentPage = Number(searchParams.page) || 1;
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;

    const { posts, total } = await sanityFetch<{ posts: any[]; total: number }>({
        query: BOOK_POSTS_QUERY,
        params: { start, end },
    });

    const totalPages = Math.ceil(total / ITEMS_PER_PAGE);

    return (
        <div className="container mx-auto px-4 py-24 min-h-screen">
            <div className="max-w-4xl mx-auto text-center mb-16">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">
                    The Book Shelf
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400">
                    "300 Bài Hát Thiếu Nhi" & Other Publications
                </p>
            </div>

            {/* Featured Book / Intro */}
            <div className="mb-20">
                <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row">
                    <div className="md:w-1/3 relative h-[400px] md:h-auto bg-slate-100 dark:bg-slate-800">
                        {/* Hardcoded featured cover for now, or fetch from first post */}
                        <Image
                            src="/blog/book_mockup_stack_ncskit_final.png"
                            alt="300 Nursery Rhymes"
                            fill
                            className="object-cover md:object-contain p-4"
                        />
                    </div>
                    <div className="md:w-2/3 p-8 md:p-12 flex flex-col justify-center">
                        <div className="uppercase tracking-wide text-sm text-teal-500 font-bold mb-2">Build Your Legacy</div>
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">300 Nursery Rhymes: Executive Edition</h2>
                        <h3 className="text-xl text-slate-500 dark:text-slate-400 mb-4 font-light">From Intern to CEO: A Strategic Blueprint</h3>
                        <p className="text-slate-600 dark:text-slate-300 mb-6 text-lg leading-relaxed">
                            A synthesis of practical wisdom and strategic frameworks. Bridging the gap between academic theory and the raw reality of business execution in Vietnam.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/blog/book-project-intro" className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors">
                                Read Introduction
                            </Link>
                            <button className="px-6 py-3 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-medium rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                                Join Waitlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chapter List / Drafts */}
            <h3 className="text-2xl font-bold mb-8 pl-4 border-l-4 border-amber-500">Drafts & Chapters</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                    <Link key={post._id} href={`/blog/${post.slug.current}`} className="group">
                        <article className="bg-white dark:bg-slate-900 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-slate-200 dark:border-slate-800 h-full flex flex-col">
                            <div className="relative h-48 bg-slate-100 dark:bg-slate-800">
                                {post.mainImage && (
                                    <Image
                                        src={urlForImage(post.mainImage).url()}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                )}
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="font-bold text-lg mb-2 group-hover:text-amber-600 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-4 flex-grow">
                                    {post.excerpt}
                                </p>
                                <div className="text-xs text-slate-500 mt-auto">
                                    {new Date(post.publishedAt).toLocaleDateString('vi-VN')}
                                </div>
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
}
