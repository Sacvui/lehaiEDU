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
            <div className={cn("min-h-screen bg-[#1a1a2e] text-slate-100 font-serif relative overflow-hidden flex flex-col items-center justify-center p-8", fontClass)}>
                {/* Background Decor - Dark Academia Theme */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1a1a2e] to-slate-900 opacity-90 z-0"></div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl w-full grid md:grid-cols-2 gap-16 items-center z-10 relative"
                >
                    {/* Cover Image - Full View (No Crop) */}
                    <div className="relative w-full h-[500px] md:h-[650px] flex items-center justify-center">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-amber-500/20 blur-[100px] rounded-full pointer-events-none"></div>

                        <div className="relative h-full w-full drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 ease-out">
                            <Image
                                src="/blog/re_research_cover_v6_final_badge_1768056318088.png"
                                alt="Re-Research Book Cover"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Intro Text - Left Align on Desktop */}
                    <div className="space-y-8 text-center md:text-left text-slate-200">
                        <div>
                            <p className="text-amber-400 font-sans tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6 flex items-center justify-center md:justify-start gap-3">
                                <span className="w-8 h-[1px] bg-amber-400"></span>
                                The Official Handbook
                            </p>
                            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white mb-6 drop-shadow-lg">
                                Re-Research
                            </h1>
                            <p className="text-xl md:text-2xl text-slate-300 font-light italic leading-relaxed">
                                "Nghiên cứu khoa học: <br /> Một cuộc dạo chơi nghiêm túc"
                            </p>
                        </div>

                        <div className="w-24 h-1 bg-amber-500 mx-auto md:mx-0 shadow-[0_0_20px_rgba(245,158,11,0.5)]"></div>

                        <p className="text-lg leading-relaxed text-slate-300 max-w-lg font-serif opacity-90">
                            Một lộ trình được biên tập bài bản, dẫn dắt bạn đi từ <strong>Tư duy cốt lõi</strong> (Mindset), trang bị <strong>Công cụ phân tích</strong> (Skillset) đến <strong>Chiến lược xuất bản</strong> (Strategy).
                        </p>

                        <div className="pt-4 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
                            <button
                                onClick={handleStartReading}
                                className="group relative px-10 py-4 bg-amber-600/90 hover:bg-amber-500 text-white font-sans font-bold tracking-wider transition-all rounded-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 overflow-hidden"
                            >
                                <span className="relative z-10 flex items-center gap-3">
                                    ĐỌC SÁCH NGAY <BookOpen className="w-5 h-5 group-hover:animate-pulse" />
                                </span>
                            </button>
                        </div>

                        <p className="text-xs text-slate-500 font-sans uppercase tracking-widest mt-12">
                            Lehai Education • Verifed by NCSKIT.ORG
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
                                <span>Hải Rong Chơi</span>
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

                        <div className="book-content max-w-none mx-auto">
                            <style jsx global>{`
                                .book-content p, 
                                .book-content li, 
                                .book-content span {
                                    color: #000000 !important;
                                    font-weight: 500 !important;
                                    line-height: 1.8 !important;
                                    opacity: 1 !important;
                                }
                                .book-content h1, 
                                .book-content h2, 
                                .book-content h3, 
                                .book-content h4, 
                                .book-content strong {
                                    color: #000000 !important;
                                    font-weight: 800 !important;
                                }
                                .book-content a {
                                    color: #b45309 !important; /* Amber-700 */
                                    text-decoration: underline;
                                }
                            `}</style>
                            <PortableText
                                value={activePost.body}
                                components={{
                                    ...portableTextComponents,
                                    block: {
                                        // @ts-ignore - Spreading optional block types
                                        ...(portableTextComponents.block || {}),
                                        normal: ({ children }: any) => (
                                            <p className="text-xl mb-6 font-serif text-black font-medium leading-relaxed">
                                                {children}
                                            </p>
                                        ),
                                        h1: ({ children }: any) => <h1 className="text-4xl mt-12 mb-6 font-sans font-extrabold text-black">{children}</h1>,
                                        h2: ({ children }: any) => <h2 className="text-3xl mt-10 mb-5 font-sans font-bold text-black">{children}</h2>,
                                        h3: ({ children }: any) => <h3 className="text-2xl mt-8 mb-4 font-sans font-bold text-black">{children}</h3>,
                                        h4: ({ children }: any) => <h4 className="text-xl mt-6 mb-3 font-sans font-bold text-black">{children}</h4>,
                                    },
                                    list: {
                                        bullet: ({ children }: any) => <ul className="list-disc list-inside space-y-2 mb-6 text-xl text-black font-medium">{children}</ul>,
                                        number: ({ children }: any) => <ol className="list-decimal list-inside space-y-2 mb-6 text-xl text-black font-medium">{children}</ol>,
                                    },
                                    listItem: {
                                        bullet: ({ children }: any) => <li className="ml-4 marker:text-black">{children}</li>,
                                        number: ({ children }: any) => <li className="ml-4 marker:text-black">{children}</li>,
                                    },
                                } as any}
                            />
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
