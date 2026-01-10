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
        <div className={cn("min-h-screen bg-[#fdfbf7] flex relative selection:bg-amber-200 selection:text-amber-900", fontClass)}>
            {/* Reading Progress Bar (Sticky Top) */}
            <div className="fixed top-0 left-0 right-0 h-1 bg-slate-200 z-[60]">
                <motion.div
                    className="h-full bg-amber-600"
                    initial={{ width: "0%" }}
                    animate={{ width: `${((activePostIndex + 1) / allPosts.length) * 100}%` }}
                    transition={{ duration: 0.3 }}
                />
            </div>

            {/* Mobile Sidebar Toggle */}
            <button
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                className="fixed top-4 left-4 z-50 p-3 bg-white/90 backdrop-blur border border-slate-200 text-slate-800 rounded-full md:hidden shadow-lg hover:bg-amber-50 active:scale-95 transition-all"
            >
                {isSidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Sidebar (TOC) */}
            <aside className={cn(
                "fixed inset-y-0 left-0 w-80 bg-[#f5f2eb] border-r border-[#e5e0d5] z-40 transform transition-transform duration-300 md:translate-x-0 overflow-hidden flex flex-col shadow-2xl md:shadow-none",
                isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            )}>
                <div className="p-6 border-b border-[#e5e0d5] bg-[#ece8df]">
                    <h2 className="font-bold text-slate-900 uppercase tracking-widest text-xs flex items-center gap-2">
                        <BookOpen size={14} className="text-amber-700" /> Mục lục
                    </h2>
                    <p className="text-xs text-slate-500 mt-2 font-serif italic">Phiên bản "Đại Phẫu"</p>
                </div>

                <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent">
                    {chapters.map((chapter) => (
                        <div key={chapter.id} className="pb-2 border-b border-slate-200/50 last:border-0">
                            <div
                                onClick={() => setActiveChapterId(chapter.id === activeChapterId ? '' : chapter.id)}
                                className="flex items-center justify-between cursor-pointer group py-2 select-none"
                            >
                                <h3 className={cn(
                                    "font-bold text-sm md:text-base transition-colors",
                                    activeChapterId === chapter.id ? "text-amber-900" : "text-slate-700 group-hover:text-amber-700"
                                )}>
                                    {chapter.title}
                                </h3>
                                <ChevronDown
                                    size={16}
                                    className={cn("transition-transform text-slate-400", activeChapterId === chapter.id && "rotate-180 text-amber-600")}
                                />
                            </div>

                            <AnimatePresence>
                                {(activeChapterId === chapter.id || true) && (
                                    <motion.ul
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="space-y-1 pl-4 border-l-[1.5px] border-slate-300 ml-1"
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
                                                        "text-left w-full text-sm py-2 px-3 rounded-md transition-all line-clamp-2 leading-snug",
                                                        activePostId === post._id
                                                            ? "bg-amber-100/80 text-amber-900 font-bold shadow-sm"
                                                            : "text-slate-600 hover:text-slate-900 hover:bg-black/5"
                                                    )}
                                                >
                                                    {idx + 1}. {post.title}
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
                    <button onClick={() => setIsReading(false)} className="flex items-center gap-2 text-xs md:text-sm text-slate-700 hover:text-amber-700 font-sans font-bold uppercase tracking-wider w-full justify-center transition-colors">
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
                    <article className="max-w-3xl mx-auto px-6 md:px-12 py-20 md:py-28 relative">
                        {/* Page Number Indicator (Floating Top Right) */}
                        <div className="absolute top-8 right-8 md:right-12 text-slate-400 font-sans text-xs font-bold uppercase tracking-widest select-none">
                            Trang {activePostIndex + 1} / {allPosts.length}
                        </div>

                        {/* Paper Texture Overlay */}
                        <div className="fixed inset-0 bg-[url('https://www.transparenttextures.com/patterns/cream-paper.png')] opacity-40 pointer-events-none mix-blend-multiply"></div>

                        <div className="mb-12 text-center">
                            <span className="text-amber-600 font-sans text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-6 block">
                                {chapters.find(c => c.id === activeChapterId)?.title}
                            </span>
                            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight mb-6 font-serif tracking-tight">
                                {activePost.title}
                            </h1>
                            <div className="flex items-center justify-center gap-4 text-slate-500 italic text-sm font-serif font-medium">
                                <span className="flex items-center gap-1"><BookOpen size={14} /> {Math.ceil(activePost.readingTime || 5)} phút đọc</span>
                                <span>•</span>
                                <span className="text-amber-700 font-bold">Sidewalk Professor</span>
                            </div>
                        </div>

                        {activePost.mainImage && (
                            <div className="relative w-full aspect-[21/9] mb-12 rounded-sm overflow-hidden shadow-lg grayscale-[20%] sepia-[10%]">
                                <Image
                                    src={urlForImage(activePost.mainImage).url()}
                                    alt={activePost.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        )}

                        <div className="book-content max-w-none mx-auto relative z-10">
                            <style jsx global>{`
                                .book-content p, 
                                .book-content li {
                                    font-family: 'Merriweather', serif; /* Ensure Serif */
                                    color: #1a1a1a !important; /* Almost black */
                                    font-size: 1.15rem !important; /* 18px */
                                    line-height: 1.9 !important; /* Comfortable spacing */
                                    margin-bottom: 1.5rem !important;
                                }
                                .book-content h1, 
                                .book-content h2, 
                                .book-content h3 {
                                    font-family: 'Inter', sans-serif; /* Headings are Sans */
                                    color: #0f172a !important; /* Slate 900 */
                                    font-weight: 800 !important;
                                    letter-spacing: -0.02em !important;
                                }
                                .book-content strong {
                                    font-weight: 700 !important;
                                    color: #000000 !important;
                                }
                                .book-content blockquote {
                                    border-left: 4px solid #f59e0b !important; /* Amber border */
                                    padding-left: 1.5rem !important;
                                    font-style: italic !important;
                                    color: #475569 !important; /* Slate 600 */
                                    background: #fffbeb !important; /* Amber 50 */
                                    padding: 1.5rem !important;
                                    border-radius: 0 0.5rem 0.5rem 0;
                                    margin: 2rem 0 !important;
                                }
                                .book-content a {
                                    color: #d97706 !important; /* Amber-600 */
                                    text-decoration: underline;
                                    text-underline-offset: 4px;
                                }
                            `}</style>
                            <PortableText
                                value={activePost.body}
                                components={portableTextComponents as any}
                            />
                        </div>

                        {/* Navigation Footer - BIG PAGE NUMBERS */}
                        <div className="mt-24 pt-12 border-t-2 border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 font-sans">
                            <button
                                onClick={handlePrevPage}
                                disabled={activePostIndex === 0}
                                className="group flex items-center gap-3 text-slate-500 hover:text-slate-900 disabled:opacity-30 disabled:cursor-not-allowed transition-colors order-2 md:order-1"
                            >
                                <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-100 transition-colors">
                                    <ArrowLeft size={16} />
                                </div>
                                <span className="font-bold text-sm uppercase tracking-wider hidden md:inline">Trang trước</span>
                            </button>

                            {/* CENTER BIG PAGE NUMBER */}
                            <div className="flex flex-col items-center order-1 md:order-2">
                                <span className="text-4xl font-black text-slate-200 select-none">
                                    {activePostIndex + 1}
                                </span>
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                                    / {allPosts.length}
                                </span>
                            </div>

                            <button
                                onClick={handleNextPage}
                                disabled={activePostIndex === allPosts.length - 1}
                                className="group flex items-center gap-3 text-slate-900 hover:text-black font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-colors order-3"
                            >
                                <span className="font-bold text-sm uppercase tracking-wider hidden md:inline">Trang sau</span>
                                <div className="w-10 h-10 rounded-full bg-amber-500 text-white flex items-center justify-center shadow-lg group-hover:bg-amber-600 group-hover:scale-110 transition-all">
                                    <ChevronRight size={18} />
                                </div>
                            </button>
                        </div>

                        {/* BOTTOM PADDING */}
                        <div className="h-20"></div>

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
