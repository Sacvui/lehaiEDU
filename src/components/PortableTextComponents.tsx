import { PortableText, PortableTextComponents } from '@portabletext/react'
import Image from 'next/image'
import { urlForImage } from '@/sanity/lib/image'

// Helper to generate IDs
const slugify = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .normalize('NFD') // Split accents
        .replace(/[\u0300-\u036f]/g, '') // Remove accents
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '');
}

export const portableTextComponents: PortableTextComponents = {
    types: {
        image: ({ value }) => {
            if (!value?.asset?._ref) {
                return null
            }
            return (
                <div className="my-8 rounded-xl overflow-hidden relative group">
                    <Image
                        src={urlForImage(value).url()}
                        alt={value.alt || 'Blog image'}
                        width={800}
                        height={600}
                        className="w-full h-auto"
                    />
                    {/* Watermark Overlay */}
                    <div className="absolute bottom-3 right-3 bg-black/50 backdrop-blur-sm px-2 py-1 rounded text-[10px] text-white/80 font-medium select-none pointer-events-none">
                        lehai.edu.vn
                    </div>

                    {value.caption && (
                        <p className="text-sm text-slate-500 dark:text-slate-400 text-center mt-2 italic">
                            {value.caption}
                        </p>
                    )}
                </div>
            )
        },
    },
    block: {
        h1: ({ children, value }) => (
            <h1 id={slugify(value.children[0]?.text || '')} className="text-4xl font-bold text-slate-900 dark:text-white mt-12 mb-6 scroll-mt-24">
                {children}
            </h1>
        ),
        h2: ({ children, value }) => (
            <h2 id={slugify(value.children[0]?.text || '')} className="text-3xl font-bold text-slate-900 dark:text-white mt-10 mb-5 scroll-mt-24">
                {children}
            </h2>
        ),
        h3: ({ children, value }) => (
            <h3 id={slugify(value.children[0]?.text || '')} className="text-2xl font-bold text-slate-900 dark:text-white mt-8 mb-4 scroll-mt-24">
                {children}
            </h3>
        ),
        h4: ({ children }) => (
            <h4 className="text-xl font-bold text-slate-900 dark:text-white mt-6 mb-3">
                {children}
            </h4>
        ),
        normal: ({ children }) => (
            <p className="text-lg text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {children}
            </p>
        ),
        blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-amber-600 pl-6 py-2 my-8 italic text-slate-600 dark:text-slate-400 bg-amber-50/50 dark:bg-amber-950/20 rounded-r-lg">
                {children}
            </blockquote>
        ),
    },
    list: {
        bullet: ({ children }) => (
            <ul className="list-disc list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
                {children}
            </ul>
        ),
        number: ({ children }) => (
            <ol className="list-decimal list-inside space-y-2 mb-6 text-slate-700 dark:text-slate-300">
                {children}
            </ol>
        ),
    },
    listItem: {
        bullet: ({ children }) => (
            <li className="ml-4">{children}</li>
        ),
        number: ({ children }) => (
            <li className="ml-4">{children}</li>
        ),
    },
    marks: {
        strong: ({ children }) => (
            <strong className="font-bold text-slate-900 dark:text-white">{children}</strong>
        ),
        em: ({ children }) => (
            <em className="italic">{children}</em>
        ),
        code: ({ children }) => (
            <code className="bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded text-sm font-mono text-amber-700 dark:text-amber-400">
                {children}
            </code>
        ),
        link: ({ children, value }) => {
            const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined
            return (
                <a
                    href={value.href}
                    rel={rel}
                    className="text-amber-700 dark:text-amber-400 hover:text-amber-800 dark:hover:text-amber-300 underline underline-offset-4 transition-colors"
                >
                    {children}
                </a>
            )
        },
    },
}
