
import Link from 'next/link'
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'

interface Post {
    _id: string
    title: string
    slug: { current: string }
    publishedAt: string
}

interface SeriesControlsProps {
    currentPostId: string
    seriesTag: string
    posts: Post[]
}

export function SeriesControls({ currentPostId, seriesTag, posts }: SeriesControlsProps) {
    if (!posts || posts.length < 2) return null

    // Helper: Extract lesson number
    const getEpisode = (title: string) => {
        const match = title.match(/Bài (\d+)/);
        return match ? parseInt(match[1]) : 999;
    };

    // Sort valid posts
    const sortedPosts = [...posts].sort((a, b) => {
        const epA = getEpisode(a.title);
        const epB = getEpisode(b.title);
        if (epA !== 999 && epB !== 999) return epA - epB;
        return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    })

    const currentIndex = sortedPosts.findIndex(p => p._id === currentPostId)
    if (currentIndex === -1) return null

    const prevPost = currentIndex > 0 ? sortedPosts[currentIndex - 1] : null
    const nextPost = currentIndex < sortedPosts.length - 1 ? sortedPosts[currentIndex + 1] : null

    // Calculate progress
    const progress = Math.round(((currentIndex + 1) / sortedPosts.length) * 100)

    return (
        <div className="my-10 border-t border-slate-200 dark:border-slate-800 pt-8">
            <div className="flex flex-col gap-6">

                {/* Header with Progress */}
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-2 font-medium uppercase tracking-wide">
                        <BookOpen className="w-4 h-4" />
                        Series: {seriesTag}
                    </span>
                    <span>Lesson {currentIndex + 1} of {sortedPosts.length}</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-gradient-to-r from-amber-400 to-amber-600 transition-all duration-500"
                        style={{ width: `${progress}%` }}
                    />
                </div>

                {/* Navigation Buttons */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* PREVIOUS */}
                    {prevPost ? (
                        <Link
                            href={`/blog/${prevPost.slug.current}`}
                            className="group flex flex-col items-start gap-1 p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-amber-500 dark:hover:border-amber-500 hover:bg-amber-50/50 dark:hover:bg-amber-900/10 transition-all"
                        >
                            <span className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider group-hover:text-amber-600 dark:group-hover:text-amber-400">
                                <ChevronLeft className="w-3 h-3 mr-1" /> Previous Lesson
                            </span>
                            <span className="font-semibold text-slate-700 dark:text-slate-300 group-hover:text-amber-900 dark:group-hover:text-amber-500 line-clamp-1">
                                {prevPost.title}
                            </span>
                        </Link>
                    ) : (
                        <div /> /* Spacer if no prev */
                    )}

                    {/* NEXT */}
                    {nextPost ? (
                        <Link
                            href={`/blog/${nextPost.slug.current}`}
                            className="group flex flex-col items-end gap-1 p-4 rounded-xl bg-slate-900 dark:bg-white border border-transparent hover:bg-amber-600 dark:hover:bg-amber-500 transition-all text-right shadow-lg shadow-slate-900/10"
                        >
                            <span className="flex items-center text-xs font-bold text-slate-400 dark:text-slate-600 uppercase tracking-wider group-hover:text-white/90">
                                Next Lesson <ChevronRight className="w-3 h-3 ml-1" />
                            </span>
                            <span className="font-bold text-white dark:text-slate-900 group-hover:text-white line-clamp-1">
                                {nextPost.title}
                            </span>
                        </Link>
                    ) : (
                        <div className="flex flex-col items-end gap-1 p-4 rounded-xl border border-dashed border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50 opacity-60">
                            <span className="flex items-center text-xs font-bold text-slate-400 uppercase tracking-wider">
                                Series Completed
                            </span>
                            <span className="font-semibold text-slate-500 dark:text-slate-400">
                                You've reached the end!
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
