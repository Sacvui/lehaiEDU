import Image from 'next/image'
import Link from 'next/link'
import { PortableText } from '@portabletext/react'
import { portableTextComponents } from '@/components/PortableTextComponents'
import { urlForImage } from '@/sanity/lib/image'
import { ArrowLeft, CheckCircle, Star } from 'lucide-react'

interface BookLandingPageProps {
    post: any
    relatedPosts: any[]
}

export function BookLandingPage({ post, relatedPosts }: BookLandingPageProps) {
    return (
        <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-teal-500 selection:text-white">
            {/* Navigation */}
            <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
                <div className="container mx-auto px-6 h-16 flex items-center justify-between">
                    <Link href="/blog" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
                        <ArrowLeft className="w-4 h-4" />
                        <span className="text-sm font-medium tracking-wide">BACK TO INTELLIGENCE</span>
                    </Link>
                    <div className="flex items-center gap-4">
                        <span className="px-3 py-1 bg-teal-500/10 text-teal-400 text-xs font-bold tracking-wider rounded-full border border-teal-500/20">
                            PROJECT NEXT
                        </span>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-teal-900/40 via-slate-950 to-slate-950" />

                <div className="container mx-auto px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left Column: Text */}
                        <div className="space-y-8">
                            <div className="space-y-2">
                                <h2 className="text-teal-500 font-bold tracking-[0.2em] text-sm uppercase">
                                    Official Release
                                </h2>
                                <h1 className="text-5xl lg:text-7xl font-bold leading-tight tracking-tight text-white">
                                    300 Nursery <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-200 to-teal-500">
                                        Rhymes
                                    </span>
                                </h1>
                                <p className="text-xl lg:text-2xl text-slate-400 font-light tracking-wide mt-4">
                                    From Intern to CEO: A Strategic Blueprint
                                </p>
                            </div>

                            <p className="text-lg text-slate-300 leading-relaxed max-w-xl border-l-2 border-teal-500/50 pl-6">
                                {post.excerpt}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                <button className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-bold rounded-none transition-all tracking-wider text-sm">
                                    READ INTRODUCTION
                                </button>
                                <button className="px-8 py-4 bg-transparent border border-slate-700 hover:border-teal-500 text-slate-300 hover:text-white font-bold rounded-none transition-all tracking-wider text-sm">
                                    JOIN WAITLIST
                                </button>
                            </div>

                            <div className="flex items-center gap-2 text-xs text-slate-500 uppercase tracking-widest pt-8">
                                <CheckCircle className="w-4 h-4 text-teal-500" />
                                Verified by NCSKIT.ORG
                            </div>
                        </div>

                        {/* Right Column: Image */}
                        <div className="relative group perspective-1000">
                            {/* Glow Effect */}
                            <div className="absolute -inset-4 bg-teal-500/20 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-700" />

                            {post.mainImage && (
                                <div className="relative transform group-hover:-translate-y-2 transition-transform duration-700 ease-out">
                                    <Image
                                        src={urlForImage(post.mainImage).url()}
                                        alt={post.mainImage.alt || post.title}
                                        width={800}
                                        height={800}
                                        className="w-full h-auto drop-shadow-2xl"
                                        priority
                                    />
                                    {/* Reflection */}
                                    <div className="absolute -bottom-10 left-0 right-0 h-10 bg-gradient-to-b from-slate-950/20 to-slate-950/90 blur-lg transform scale-y-[-1] opacity-50 pointer-events-none" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="bg-white text-slate-900 py-20 lg:py-32">
                <div className="container mx-auto px-6 max-w-4xl">
                    <div className="prose prose-lg lg:prose-xl max-w-none pt-10">
                        {/* Custom Portable Text Logic could go here, for now using standard */}
                        <PortableText
                            value={post.body}
                            components={{
                                ...portableTextComponents,
                                block: {
                                    normal: ({ children }) => <p className="text-slate-600 leading-relaxed mb-6 font-light">{children}</p>,
                                    h2: ({ children }) => <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-8 tracking-tight border-l-4 border-teal-500 pl-4">{children}</h2>,
                                    blockquote: ({ children }) => <blockquote className="text-2xl font-serif italic text-slate-800 border-l-0 pl-0 py-8 my-8 text-center">{children}</blockquote>
                                }
                            }}
                        />
                    </div>
                </div>
            </main>

            {/* Footer / Author */}
            <footer className="bg-slate-50 border-t border-slate-200 py-20">
                <div className="container mx-auto px-6 max-w-4xl text-center">
                    <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                        The Architect Behind The Project
                    </h3>
                    <div className="flex flex-col items-center gap-6">
                        {post.author?.image && (
                            <Image
                                src={urlForImage(post.author.image).url()}
                                alt={post.author.name}
                                width={120}
                                height={120}
                                className="rounded-full ring-4 ring-white shadow-lg"
                            />
                        )}
                        <div className="space-y-2">
                            <h4 className="text-2xl font-bold text-slate-900">{post.author?.name}</h4>
                            <p className="text-slate-500">{post.author?.role}</p>
                        </div>
                        <div className="max-w-2xl text-slate-600 leading-relaxed">
                            <PortableText value={post.author?.bio} />
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
