'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Rocket, GraduationCap, BookOpen, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

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

  const navItems = [
    { label: 'About', href: '#about', icon: User },
    { label: 'Research (NCSKIT)', href: 'https://ncskit.org', icon: GraduationCap, external: true },
    { label: 'Solutions', href: '#solutions', icon: Rocket },
    { label: 'Blog', href: '/blog', icon: BookOpen },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hailp/', icon: User, external: true },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-slate-200 dark:border-slate-800 py-3'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-700 flex items-center justify-center shadow-lg group-hover:shadow-cyan-500/20 transition-all overflow-hidden relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20"></div>
            <img src="/icon.svg" alt="Logo" className="w-7 h-7 relative z-10" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg leading-none text-slate-900 dark:text-white group-hover:text-cyan-400 transition-colors">
              Le Phuc Hai
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400 font-medium tracking-wide">
              PHD RESEARCHER & FOUNDER
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              target={item.external ? '_blank' : undefined}
              className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5"
            >
              {item.icon && <item.icon className="w-4 h-4" />}
              {item.label}
            </Link>
          ))}
          <Button className="rounded-full px-6 bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors">
            Book Consultation
          </Button>
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 shadow-xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-base font-medium text-slate-700 dark:text-slate-200 py-2 hover:text-blue-600 dark:hover:text-blue-400 border-b border-slate-100 dark:border-slate-900 last:border-0"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Button className="w-full rounded-lg">Book Consultation</Button>
        </div>
      )}
    </header>
  );
}
