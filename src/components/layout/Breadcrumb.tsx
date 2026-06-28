'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href: string;
}

const routeLabels: Record<string, string> = {
    '': 'Home',
    'about': 'About',
    'blog': 'Blog',
    'books': 'Books',
    'consulting': 'Consulting',
    'contact': 'Contact',
    'cv': 'CV',
    'mentorship': 'Mentorship',
    'services': 'Services',
    'teamwork': 'Teamwork',
    'privacy': 'Privacy Policy',
    'terms': 'Terms of Service',
};

export function Breadcrumb() {
    const pathname = usePathname();
    
    // Skip for home page
    if (pathname === '/') return null;

    // Parse pathname into segments
    const segments = pathname.split('/').filter(Boolean);
    
    // Skip if no valid segments
    if (segments.length === 0) return null;

    const breadcrumbs: BreadcrumbItem[] = [
        { label: 'Home', href: '/' }
    ];

    let currentPath = '';
    segments.forEach((segment, index) => {
        currentPath += `/${segment}`;
        
        // Check if it's a slug (blog post) or known route
        const isSlug = index === segments.length - 1 && (segments[0] === 'blog');
        const label = isSlug 
            ? (segment.length > 30 ? segment.slice(0, 30) + '...' : segment) 
            : (routeLabels[segment] || segment);
        
        breadcrumbs.push({
            label,
            href: currentPath,
        });
    });

    return (
        <nav className="py-4" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2 text-sm">
                {breadcrumbs.map((item, index) => (
                    <li key={item.href} className="flex items-center gap-2">
                        {index > 0 && (
                            <ChevronRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
                        )}
                        {index === breadcrumbs.length - 1 ? (
                            <span className="text-slate-900 dark:text-white font-medium">
                                {item.label}
                            </span>
                        ) : (
                            <Link
                                href={item.href}
                                className="text-slate-500 dark:text-slate-400 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
                            >
                                {index === 0 && <Home className="w-4 h-4 inline mr-1" />}
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
}
