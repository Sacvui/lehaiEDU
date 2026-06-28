'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { User, Handshake, BookOpen, Users, FileText, Menu, X, Mail } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'About', href: '/about', icon: User },
  { label: 'Services', href: '/services', icon: Handshake },
  { label: 'Blog', href: '/blog', icon: BookOpen },
  { label: 'Mentorship', href: '/mentorship', icon: Users },
  { label: 'Books', href: '/books', icon: FileText },
  { label: 'CV', href: '/cv', icon: FileText },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/20 transition-all">
            <img src="/icon.svg" alt="Logo" className="w-6 h-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none text-slate-900 dark:text-white">
              Le Phuc Hai
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 tracking-wide">
              PhD Researcher
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact">
            <Button size="sm" className="ml-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800">
              <Mail className="w-4 h-4 mr-2" />
              Contact
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-600 dark:text-slate-300"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl">
          <nav className="flex flex-col p-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 text-base font-medium text-slate-700 dark:text-slate-200 py-3 border-b border-slate-100 dark:border-slate-800 last:border-0"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
            <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="mt-4">
              <Button className="w-full">
                <Mail className="w-4 h-4 mr-2" />
                Contact
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
