'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, BookOpen, Menu, X, ArrowLeft, ChevronDown } from 'lucide-react';
import { PortableText } from '@portabletext/react';
import { urlForImage } from '@/sanity/lib/image';
import { cn } from '@/lib/utils';
// Re-use existing components
import { portableTextComponents } from '@/components/PortableTextComponents';

interface BookPost {
    _id: string;
    title: string;
    slug: { current: string };
    body: any[];
    mainImage?: any;
    excerpt?: string;
    readingTime?: number;
    chapterId?: string; // Client-side augmentation
}

interface BookChapter {
    id: string;
    title: string;
    posts: BookPost[];
}

interface BookReaderProps {
    chapters: BookChapter[];
    fontClass?: string;
}

export default function BookReader({ chapters, fontClass }: BookReaderProps) {
    const [isReading, setIsReading] = useState(false);
    const [activeChapterId, setActiveChapterId] = useState<string>(chapters[0]?.id || '');
    const [activePostId, setActivePostId] = useState<string>('');
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    // Flatten posts for "Next/Prev" logic (Simulating page turns)
    const allPosts = chapters.flatMap(c => c.posts.map(p => ({ ...p, chapterId: c.id })));
    const activePostIndex = allPosts.findIndex(p => p._id === activePostId);

    // Set initial active post
    useEffect(() => {
        if (chapters[0]?.posts[0]) {
            setActivePostId(chapters[0].posts[0]._id);
        }
    }, [chapters]);

    const handleStartReading = () => {
        setIsReading(true);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNextPage = () => {
        if (activePostIndex < allPosts.length - 1) {
            const nextPost = allPosts[activePostIndex + 1];
            setActivePostId(nextPost._id);
            setActiveChapterId(nextPost.chapterId || '');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const handlePrevPage = () => {
        if (activePostIndex > 0) {
            const prevPost = allPosts[activePostIndex - 1];
            setActivePostId(prevPost._id);
            setActiveChapterId(prevPost.chapterId || '');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const activePost = allPosts.find(p => p._id === activePostId);

    // COVER PAGE VIEW
    if (!isReading) {
        return (
            <div className="min-h-screen bg-[#fdfbf7] text-slate-900 font-serif relative overflow-hidden flex flex-col items-center justify-center p-4">
                {/* Background Decor */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-50 mix-blend-multiply pointer-events-none"></div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center z-10"
                >
                    {/* Cover Image */}
                    <div className="relative aspect-[2/3] md:h-[600px] w-full md:w-auto mx-auto shadow-2xl rounded-r-lg rounded-l-sm overflow-hidden border-r-4 border-slate-800 rotate-1 hover:rotate-0 transition-transform duration-500 bg-slate-900">
                        {/* Placeholder for actual cover if mainImage fails, or hardcoded specific cover */}
                        <Image
                            src="/blog/book_cover_intern_to_c_level.png"
                            alt="Book Cover"
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Shine effect */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent pointer-events-none"></div>
                        <div className="absolute left-0 top-0 bottom-0 w-2 bg-gradient-to-r from-black/40 to-transparent"></div>
                    </div>

                    {/* Intro Text */}
                    <div className="space-y-8 text-center md:text-left">
                        <div>
                            <p className="text-amber-700 font-sans tracking-[0.2em] text-sm font-bold uppercase mb-4">The Official Handbook</p>
                            <h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 mb-4 ">
                                Intern to <br />
                                <span className="italic font-light text-slate-600">Researcher</span>
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-500 font-light italic">
                                "Hành trình từ Trang giấy trắng đến Tư duy Học thuật"
                            </p>
                        </div>

                        <div className="w-24 h-1 bg-amber-600 mx-auto md:mx-0"></div>

                        <p className="text-lg leading-relaxed text-slate-800 max-w-lg font-serif">
                            Một lộ trình được biên tập bài bản, dẫn dắt bạn đi từ việc xây dựng <strong>Tư duy cốt lõi</strong> (Mindset), trang bị <strong>Công cụ phân tích</strong> (Toolset) đến khả năng <strong>Hoạch định chiến lược</strong> (Skillset).
                            <br /><br />
                            Đây không chỉ là sách, đây là tấm bản đồ cho sự nghiệp nghiên cứu của bạn.
                        </p>

                        <button
                            onClick={handleStartReading}
                            className="group relative px-8 py-4 bg-slate-900 text-white font-sans font-bold tracking-wider hover:bg-amber-700 transition-all rounded-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                BẮT ĐẦU ĐỌC <BookOpen className="w-5 h-5" />
                            </span>
                        </button>

                        <p className="text-xs text-slate-400 font-sans uppercase tracking-widest mt-12">
                            Lehai Education • Academic Edition 2026
                        </p>
                    </div>
                </motion.div>
            </div>
        );
    }

    // READER VIEW
    return (
        <div className={cn("min-h-screen bg-[#fdfbf7] flex relative", fontClass)}>
            {/* Mobile Sidebar Toggle */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-4 left-4 z-50 p-2 bg-slate-900 text-white rounded-md md:hidden shadow-lg"
            >
                {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Sidebar (TOC) */}
            <aside className={cn(
                "fixed inset-y-0 left-0 w-80 bg-[#f5f2eb] border-r border-[#e5e0d5] z-40 transform transition-transform duration-300 md:translate-x-0 overflow-hidden flex flex-col",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-6 border-b border-[#e5e0d5] bg-[#ece8df]">
                    <h2 className="font-bold text-slate-900 uppercase tracking-widest text-sm flex items-center gap-2">
                        <BookOpen size={16} /> Mục lục
                    </h2>
                    <p className="text-xs text-slate-500 mt-1">70+ Bài viết • 4 Phần</p>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-6 scrollbar-thin scrollbar-thumb-slate-300">
                    {chapters.map((chapter) => (
                        <div key={chapter.id}>
                            <div
                                onClick={() => setActiveChapterId(chapter.id === activeChapterId ? '' : chapter.id)}
                                className="flex items-center justify-between cursor-pointer group mb-2"
                            >
                                <h3 className="font-bold text-slate-800 text-lg group-hover:text-amber-700 transition-colors">
                                    {chapter.title}
                                </h3>
                                <ChevronDown
                                    size={16}
                                    className={cn("transition-transform text-slate-400", activeChapterId === chapter.id && "rotate-180")}
                                />
                            </div>

                            <AnimatePresence>
                                {(activeChapterId === chapter.id || true) && (
                                    <motion.ul
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="space-y-1 pl-4 border-l-2 border-slate-200"
                                    >
                                        {chapter.posts.map((post, idx) => (
                                            <li key={post._id}>
                                                <button
                                                    onClick={() => {
                                                        setActivePostId(post._id);
                                                        setIsSidebarOpen(false); // Close on mobile
                                                        window.scrollTo({ top: 0, behavior: 'smooth' });
                                                    }}
                                                    className={cn(
                                                        "text-left w-full text-sm py-1.5 px-2 rounded-md transition-all line-clamp-1",
                                                        activePostId === post._id
                                                            ? "bg-amber-100 text-amber-900 font-semibold text-base"
                                                            : "text-slate-800 font-medium hover:text-black hover:bg-white/50"
                                                    )}
                                                >
                                                    {post.title}
                                                </button>
                                            </li>
                                        ))}
                                    </motion.ul>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>

                <div className="p-4 border-t border-[#e5e0d5] bg-[#ece8df]">
                    <button onClick={() => setIsReading(false)} className="flex items-center gap-2 text-sm text-slate-800 hover:text-amber-700 font-sans font-bold uppercase tracking-wider">
                        <ArrowLeft size={16} /> Quay lại trang bìa
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main className={cn(
                "flex-1 transition-all duration-300 min-h-screen",
                "md:ml-80" // Offset for sidebar
            )}>
                {activePost ? (
                    <article className="max-w-3xl mx-auto px-5 py-20 md:py-24">
                        {/* Paper Texture Overlay */}
                        <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-20 pointer-events-none mix-blend-multiply"></div>

                        <div className="mb-10 text-center">
                            <span className="text-amber-700 font-sans text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
                                {chapters.find(c => c.id === activeChapterId)?.title}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 font-serif">
                                {activePost.title}
                            </h1>
                            <div className="flex items-center justify-center gap-4 text-slate-700 italic text-sm font-serif font-medium">
                                <span>{Math.ceil(activePost.readingTime || 5)} phút đọc</span>
                                <span>•</span>
                                <span>Le Phuc Hai</span>
                            </div>
                        </div>

                        {activePost.mainImage && (
                            <div className="relative w-full aspect-video mb-10 rounded-sm overflow-hidden shadow-md grayscale-[10%]">
                                <Image
                                    src={urlForImage(activePost.mainImage).url()}
                                    alt={activePost.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="prose prose-lg prose-slate prose-p:text-black prose-p:font-medium prose-p:leading-loose prose-p:font-serif prose-headings:font-sans prose-headings:font-extrabold prose-headings:text-black prose-li:text-black prose-li:font-medium prose-strong:text-black prose-strong:font-bold prose-a:text-amber-700 max-w-none">
                            <PortableText value={activePost.body} components={portableTextComponents} />
                        </div>

                        {/* Navigation Footer */}
                        <div className="mt-20 pt-12 border-t border-[#e5e0d5] flex justify-between items-center font-sans">
                            <button
                                onClick={handlePrevPage}
                                disabled={activePostIndex === 0}
                                className="flex items-center gap-2 text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                            >
                                <ArrowLeft size={16} /> Previous
                            </button>

                            <span className="text-xs tracking-widest text-[#d4d4d4] uppercase">Page {activePostIndex + 1} of {allPosts.length}</span>

                            <button
                                onClick={handleNextPage}
                                disabled={activePostIndex === allPosts.length - 1}
                                className="flex items-center gap-2 text-slate-900 font-bold hover:text-amber-700 transition-colors"
                            >
                                Next Chapter <ChevronRight size={16} />
                            </button>
                        </div>

                    </article>
                ) : (
                    <div className="flex h-screen items-center justify-center text-slate-400 italic">
                        Select a chapter to begin reading...
                    </div>
                )}
            </main>
        </div>
    );
}
