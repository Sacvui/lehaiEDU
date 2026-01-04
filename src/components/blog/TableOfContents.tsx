'use client';

import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { List } from 'lucide-react';

interface Heading {
    id: string;
    text: string;
    level: number;
}

interface TableOfContentsProps {
    headings: Heading[];
}

export function TableOfContents({ headings }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            { rootMargin: '-10% 0px -80% 0px' }
        );

        headings.forEach((heading) => {
            const element = document.getElementById(heading.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [headings]);

    if (headings.length === 0) return null;

    return (
        <div className="hidden xl:block w-full sticky top-28 self-start max-h-[80vh] overflow-y-auto pr-4">
            <div className="bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm border border-slate-200 dark:border-slate-800 rounded-xl p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-slate-900 dark:text-slate-100 font-semibold uppercase tracking-wider text-xs">
                    <List className="w-4 h-4" />
                    Mục lục
                </div>
                <nav className="flex flex-col gap-1">
                    {headings.map((heading) => (
                        <a
                            key={heading.id}
                            href={`#${heading.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                document.getElementById(heading.id)?.scrollIntoView({
                                    behavior: 'smooth',
                                });
                                setActiveId(heading.id);
                            }}
                            className={cn(
                                'text-sm transition-all duration-200 line-clamp-2 block py-1 border-l-2 pl-3',
                                heading.level === 3 && 'ml-2 text-xs',
                                activeId === heading.id
                                    ? 'border-amber-500 text-amber-700 dark:text-amber-400 font-medium'
                                    : 'border-transparent text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:border-slate-300'
                            )}
                        >
                            {heading.text}
                        </a>
                    ))}
                </nav>
            </div>
        </div>
    );
}
