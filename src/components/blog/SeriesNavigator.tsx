
import Link from 'next/link'
import { BookOpen, CheckCircle, Circle } from 'lucide-react'

interface Post {
    _id: string
    title: string
    slug: { current: string }
    publishedAt: string
}

interface SeriesNavigatorProps {
    currentPostId: string
    seriesTag: string
    posts: Post[]
}

export function SeriesNavigator({ currentPostId, seriesTag, posts }: SeriesNavigatorProps) {
    if (!posts || posts.length < 2) return null

    // Sort by Title Number (Bài 1, Bài 2...) if available, otherwise PublishedAt
    const sortedPosts = [...posts].sort((a, b) => {
        const getEpisode = (title: string) => {
            const match = title.match(/Bài (\d+)/);
            return match ? parseInt(match[1]) : 999;
        };
        const epA = getEpisode(a.title);
        const epB = getEpisode(b.title);

        if (epA !== 999 && epB !== 999) {
            return epA - epB;
        }

        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    })

    return (
        <div className="my-10 p-6 bg-amber-50/50 dark:bg-amber-900/10 rounded-2xl border border-amber-100 dark:border-amber-900/30">
            <div className="flex items-center gap-3 mb-4 text-amber-800 dark:text-amber-400">
                <BookOpen className="w-5 h-5" />
                <h3 className="font-bold text-lg uppercase tracking-wide">
                    Series: {seriesTag}
                </h3>
            </div>

            <div className="flex flex-col gap-3">
                {sortedPosts.map((post, index) => {
                    const isCurrent = post._id === currentPostId
                    return (
                        <Link
                            key={post._id}
                            href={`/blog/${post.slug.current}`}
                            className={`group flex items-start gap-3 p-3 rounded-lg transition-colors ${isCurrent
                                ? 'bg-amber-100 dark:bg-amber-900/30 cursor-default'
                                : 'hover:bg-white dark:hover:bg-slate-800'
                                }`}
                        >
                            <div className="mt-1 flex-shrink-0">
                                {isCurrent ? (
                                    <CheckCircle className="w-4 h-4 text-amber-600 dark:text-amber-400" />
                                ) : (
                                    <Circle className="w-4 h-4 text-slate-300 dark:text-slate-600 group-hover:text-amber-500 transition-colors" />
                                )}
                            </div>
                            <div className={`text-sm ${isCurrent
                                ? 'font-bold text-amber-900 dark:text-amber-300'
                                : 'text-slate-600 dark:text-slate-400 group-hover:text-amber-700 dark:group-hover:text-amber-400'
                                }`}>
                                {post.title}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}
