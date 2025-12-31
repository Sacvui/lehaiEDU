'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, Clock, ChevronLeft, ChevronRight } from 'lucide-react';
import { sanityFetch } from '@/sanity/lib/fetch';
import { RECENT_POSTS_QUERY } from '@/sanity/lib/queries';
import { urlForImage } from '@/sanity/lib/image';
import { motion, AnimatePresence } from "framer-motion";
import React, { useState, useEffect } from "react";

const MOCK_ARTICLES = [
    {
        _id: '1',
        title: "The Future of Pharmaceutical Supply Chains with Blockchain",
        slug: { current: 'blockchain-pharma' },
        publishedAt: new Date().toISOString(),
        categories: ["Blockchain"],
        readingTime: 5,
        excerpt: "Exploring how blockchain technology is revolutionizing pharmaceutical distribution.",
        mainImage: null
    },
    {
        _id: '2',
        title: "AI-Driven Decision Making in Developing Economies",
        slug: { current: 'ai-decision-making' },
        publishedAt: new Date().toISOString(),
        categories: ["AI"],
        readingTime: 8,
        excerpt: "How artificial intelligence is transforming business strategy in emerging markets.",
        mainImage: null
    },
    {
        _id: '3',
        title: "Digital Transformation Maturity: A 2025 Outlook",
        slug: { current: 'dt-maturity-2025' },
        publishedAt: new Date().toISOString(),
        categories: ["Leadership"],
        readingTime: 6,
        excerpt: "Key insights into digital transformation trends and maturity models.",
        mainImage: null
    }
];

export function LatestInsights() {
    const [articles, setArticles] = useState<any[]>(MOCK_ARTICLES);
    const [loading, setLoading] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const fetchedArticles = await sanityFetch<any[]>({ query: RECENT_POSTS_QUERY });
                if (fetchedArticles && fetchedArticles.length > 0) {
                    setArticles(fetchedArticles);
                }
            } catch (error) {
                console.error("Failed to fetch articles:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchArticles();
    }, []);

    // Auto-play carousel
    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(timer);
    }, [currentIndex, articles.length]);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % articles.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + articles.length) % articles.length);
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    if (!articles || articles.length === 0) {
        return null;
    }

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <section id="blog" className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden border-t border-slate-800">
            {/* Background effects */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent"></div>
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

            <div className="container mx-auto px-4 md:px-6 relative z-10">
                {/* Header */}
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                            Intelligence <span className="text-slate-500">&</span>{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                                Insights
                            </span>
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl">
                            Khám phá những góc nhìn sâu sắc về doanh nghiệp và nghiên cứu khoa học.
                        </p>
                    </div>
                    <Link
                        href="/blog"
                        className="hidden md:flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors group"
                    >
                        Xem tất cả <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Main Carousel */}
                    <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-3xl">
                        <AnimatePresence initial={false} custom={direction}>
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: "spring", stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 }
                                }}
                                className="absolute inset-0"
                            >
                                <Link
                                    href={`/blog/${articles[currentIndex].slug.current}`}
                                    className="block h-full group"
                                >
                                    <div className="relative h-full bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all">
                                        {/* Background Image */}
                                        <div className="absolute inset-0">
                                            {articles[currentIndex].mainImage ? (
                                                <Image
                                                    src={urlForImage(articles[currentIndex].mainImage).width(1200).height(800).url()}
                                                    alt={articles[currentIndex].title}
                                                    fill
                                                    className="object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                                                />
                                            ) : (
                                                <div className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900"></div>
                                            )}
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent"></div>
                                        </div>

                                        {/* Content */}
                                        <div className="relative h-full flex flex-col justify-end p-8 md:p-12">
                                            {/* Category Badge */}
                                            {articles[currentIndex].categories && articles[currentIndex].categories.length > 0 && (
                                                <div className="mb-6">
                                                    <span className="inline-block px-4 py-2 rounded-full bg-cyan-500/20 backdrop-blur border border-cyan-500/50 text-sm font-bold text-cyan-400 uppercase tracking-wider">
                                                        {articles[currentIndex].categories[0]}
                                                    </span>
                                                </div>
                                            )}

                                            {/* Title */}
                                            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors leading-tight max-w-4xl">
                                                {articles[currentIndex].title}
                                            </h3>

                                            {/* Excerpt */}
                                            {articles[currentIndex].excerpt && (
                                                <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-6 line-clamp-2 max-w-3xl">
                                                    {articles[currentIndex].excerpt}
                                                </p>
                                            )}

                                            {/* Meta Info */}
                                            <div className="flex items-center gap-6 text-sm text-slate-400">
                                                <span className="flex items-center gap-2">
                                                    <Calendar className="w-4 h-4" />
                                                    {new Date(articles[currentIndex].publishedAt).toLocaleDateString('vi-VN')}
                                                </span>
                                                {articles[currentIndex].readingTime && (
                                                    <span className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4" />
                                                        {articles[currentIndex].readingTime} phút đọc
                                                    </span>
                                                )}
                                            </div>

                                            {/* Read More */}
                                            <div className="mt-8 inline-flex items-center text-cyan-400 font-bold text-lg group-hover:translate-x-2 transition-transform">
                                                Đọc ngay <ArrowRight className="w-5 h-5 ml-2" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        </AnimatePresence>

                        {/* Navigation Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 hover:border-cyan-500 text-white hover:text-cyan-400 transition-all flex items-center justify-center group z-10"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 backdrop-blur border border-slate-700 hover:border-cyan-500 text-white hover:text-cyan-400 transition-all flex items-center justify-center group z-10"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="flex items-center justify-center gap-3 mt-8">
                        {articles.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => goToSlide(index)}
                                className={`transition-all ${index === currentIndex
                                        ? 'w-12 h-3 bg-cyan-500'
                                        : 'w-3 h-3 bg-slate-700 hover:bg-slate-600'
                                    } rounded-full`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>

                {/* Mobile CTA */}
                <div className="md:hidden mt-8 text-center">
                    <Link
                        href="/blog"
                        className="inline-flex items-center text-cyan-400 font-semibold hover:text-cyan-300 transition-colors"
                    >
                        Xem tất cả bài viết <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
