import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f0a_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f0a_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
            <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl mx-auto text-center space-y-8">
                    {/* 404 Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm font-mono">
                        <span className="animate-pulse">●</span>
                        <span>ERROR 404</span>
                    </div>

                    {/* Glitch effect text */}
                    <div className="relative">
                        <h1 className="text-[150px] sm:text-[200px] md:text-[280px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-br from-cyan-500 to-blue-600 opacity-20 select-none">
                            404
                        </h1>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold">
                                404
                            </h1>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white">
                            Page Not Found
                        </h2>
                        <p className="text-slate-400 text-lg max-w-md mx-auto leading-relaxed">
                            The page you&apos;re looking for doesn&apos;t exist or has been moved. 
                            Let&apos;s get you back on track.
                        </p>
                    </div>

                    {/* Action buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link href="/">
                            <Button className="w-full sm:w-auto gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold px-8 py-6 text-lg rounded-full">
                                <Home className="w-5 h-5" aria-hidden="true" />
                                Back to Home
                            </Button>
                        </Link>
                        
                        <Link 
                            href="/"
                            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-6 text-lg rounded-full border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 hover:bg-slate-800/50 transition-all"
                        >
                            <ArrowLeft className="w-5 h-5" aria-hidden="true" />
                            Go Back
                        </Link>
                    </div>

                    {/* Quick links */}
                    <div className="pt-8 border-t border-slate-800">
                        <p className="text-sm text-slate-500 mb-4">Or explore:</p>
                        <div className="flex flex-wrap items-center justify-center gap-3">
                            <Link href="/blog" className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all text-sm">
                                Blog
                            </Link>
                            <Link href="/about" className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all text-sm">
                                About
                            </Link>
                            <Link href="/cv" className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all text-sm">
                                CV
                            </Link>
                            <Link href="/books" className="px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-cyan-500/50 transition-all text-sm">
                                Books
                            </Link>
                        </div>
                    </div>

                    {/* Terminal-style decoration */}
                    <div className="mt-12 p-4 rounded-xl bg-slate-900/50 border border-slate-800 font-mono text-left">
                        <div className="flex items-center gap-2 mb-2 text-xs text-slate-500">
                            <span className="w-3 h-3 rounded-full bg-red-500"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                            <span className="ml-2">debug@lehai:~</span>
                        </div>
                        <p className="text-sm text-slate-400">
                            <span className="text-cyan-400">$</span> looking_for={'{'} page: <span className="text-amber-400">&quot;404&quot;</span> {'}'}
                        </p>
                        <p className="text-sm text-slate-400 mt-1">
                            <span className="text-cyan-400">$</span> result: <span className="text-red-400">NOT_FOUND</span>
                        </p>
                        <p className="text-sm text-slate-400 mt-1">
                            <span className="text-cyan-400">$</span> suggestion: <span className="text-green-400">&quot;Return to home or explore our content&quot;</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
