'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Mail, Twitter, User, GraduationCap, Rocket, BookOpen, TrendingUp, Zap, FlaskConical, Menu, X, ChevronDown, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface NavItem {
  label: string;
  href: string;
  icon?: any;
  desc?: string;
  external?: boolean;
  submenu?: NavItem[];
  items?: NavItem[];
}

const navItems: NavItem[] = [
  {
    label: 'About',
    href: '/#about',
    icon: User,
    submenu: [
      { label: 'My Profile', href: '/#about', icon: User, desc: 'Professional Bio & Journey' },
      { label: 'Research (NCSKIT)', href: 'https://ncskit.org', icon: GraduationCap, desc: 'Academic Research Platform', external: true },
      { label: 'AM Medtech', href: 'https://ammedtech.com', icon: Rocket, desc: 'Digital Transformation Agnecy', external: true },
      { label: 'LinkedIn', href: 'https://www.linkedin.com/in/hailp/', icon: Linkedin, desc: 'Professional Network', external: true },
    ]
  },
  { label: 'Solutions', href: '#solutions', icon: Rocket },
  { label: 'Books', href: '/books', icon: BookOpen },
  {
    label: 'Học Tập (Blog)',
    href: '/blog',
    icon: TrendingUp,
    label: 'Learning Hub',
    href: '/blog',
    icon: TrendingUp,
    submenu: [
      {
        label: 'NCS101',
        href: '/blog?tag=NCS101',
        icon: GraduationCap,
        desc: 'Từ "con nai vàng" thành "cáo già" học thuật',
        items: [
          { label: 'Mindset', href: '/blog/ncs-101-bai-1-mindset' },
          { label: 'Survival Guide', href: '/blog?tag=NCS101' },
          { label: 'Academic Writing', href: '/blog?category=academic-corner' },
        ]
      },
      {
        label: 'R101',
        href: '/blog?tag=R101',
        icon: FlaskConical,
        desc: 'Code R không khó, chỉ cần... copy paste',
        items: [
          { label: 'Crash Course', href: '/blog/r101-bai-1-intro-r' },
          { label: 'Data Cleaning', href: '/blog/r101-bai-2-data-cleaning' },
          { label: 'Visual & Report', href: '/blog?tag=R101' },
        ]
      },
      {
        label: 'Research Methodology',
        href: '/blog?category=research-methods',
        icon: BookOpen,
        desc: 'Nền tảng võ công, tránh tẩu hỏa nhập ma',
        items: [
          { label: 'Quantitative', href: '/blog?tag=quantitative' },
          { label: 'Qualitative', href: '/blog?tag=qualitative' },
          { label: 'Literature Review', href: '/blog?tag=literature-review' },
        ]
      },
      {
        label: 'Thesis Masterclass',
        href: '/blog?tag=thesis-script',
        icon: Zap,
        desc: 'Văn mẫu "mì ăn liền" cho luận văn',
        items: [
          { label: 'Thesis Structure', href: '/blog?tag=thesis-structure' },
          { label: 'Introduction Script', href: '/blog?tag=thesis-intro' },
          { label: 'Conclusion Script', href: '/blog?tag=thesis-conclusion' },
        ]
      },
    ]
  },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);

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
            <div key={item.label} className="relative group">
              <Link
                href={item.href}
                target={item.external ? '_blank' : undefined}
                className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors flex items-center gap-1.5 py-2"
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                {item.label}
                {item.submenu && <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />}
              </Link>

              {/* Desktop Dropdown Menu */}
              {item.submenu && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top w-[500px]">
                  <div className="bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-4 grid grid-cols-2 gap-4">
                    {item.submenu.map((subItem, idx) => (
                      <div key={subItem.label} className={cn("flex flex-col gap-2 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors group/item", idx === 0 ? "col-span-2 md:col-span-1 row-span-2 bg-slate-50/50 dark:bg-slate-800/50" : "col-span-2 md:col-span-1")}>
                        <Link href={subItem.href} className="flex items-start gap-3">
                          <div className="mt-1 p-1.5 rounded-md bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 group-hover/item:bg-blue-100 dark:group-hover/item:bg-slate-700 transition-colors">
                            {subItem.icon && <subItem.icon className="w-4 h-4" />}
                          </div>
                          <div>
                            <div className="text-sm font-semibold text-slate-900 dark:text-white group-hover/item:text-blue-600 dark:group-hover/item:text-blue-400">
                              {subItem.label}
                            </div>
                            <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 mb-2">
                              {subItem.desc}
                            </div>
                          </div>
                        </Link>

                        {/* Nested Items - Desktop */}
                        {subItem.items && (
                          <div className="pl-[38px] flex flex-col gap-1 border-l border-slate-200 dark:border-slate-700 ml-4">
                            {subItem.items.map((nest) => (
                              <Link
                                key={nest.label}
                                href={nest.href}
                                className="text-xs text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 py-1 pl-3 transition-colors relative before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1.5 before:h-px before:bg-slate-300 dark:before:bg-slate-600 hover:before:bg-blue-500"
                              >
                                {nest.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 shadow-xl p-4 flex flex-col gap-2 animate-in slide-in-from-top-2 h-[calc(100dvh-80px)] overflow-y-auto pb-20">
          {navItems.map((item) => (
            <div key={item.label}>
              {item.submenu ? (
                <div className="border-b border-slate-100 dark:border-slate-800 pb-2">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between text-base font-medium text-slate-700 dark:text-slate-200 py-4 hover:text-blue-600 dark:hover:text-blue-400"
                  >
                    <span className="flex items-center gap-3">
                      {item.icon && <item.icon className="w-5 h-5" />}
                      {item.label}
                    </span>
                    <ChevronDown className={cn("w-5 h-5 transition-transform", activeDropdown === item.label ? "rotate-180" : "")} />
                  </button>

                  {/* Level 1 Expansion */}
                  {activeDropdown === item.label && (
                    <div className="pl-4 flex flex-col gap-4 mt-2">
                      {item.submenu.map((subItem) => (
                        <div key={subItem.label} className="flex flex-col gap-1">
                          <div className="flex items-center justify-between py-2">
                            <Link
                              href={subItem.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="flex items-center gap-3 text-base font-semibold text-slate-800 dark:text-slate-200"
                            >
                              {subItem.icon && <subItem.icon className="w-4 h-4" />}
                              <span>{subItem.label}</span>
                            </Link>

                            {/* Level 2 Expander Button */}
                            {subItem.items && (
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  setActiveSubDropdown(activeSubDropdown === subItem.label ? null : subItem.label);
                                }}
                                className="p-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                              >
                                <ChevronDown className={cn("w-4 h-4 transition-transform", activeSubDropdown === subItem.label ? "rotate-180" : "")} />
                              </button>
                            )}
                          </div>

                          {/* Level 2 Expansion - Mobile with Animation logic */}
                          {subItem.items && activeSubDropdown === subItem.label && (
                            <div className="pl-8 flex flex-col border-l-2 border-slate-100 dark:border-slate-800 ml-2 animate-in slide-in-from-top-1 fade-in duration-200">
                              {subItem.items.map(nest => (
                                <Link
                                  key={nest.label}
                                  href={nest.href}
                                  className="text-sm text-slate-600 dark:text-slate-400 py-3 pl-3 hover:text-blue-600 dark:hover:text-blue-400 block"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {nest.label}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-3 text-base font-medium text-slate-700 dark:text-slate-200 py-4 hover:text-blue-600 dark:hover:text-blue-400 border-b border-slate-100 dark:border-slate-900 last:border-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.icon && <item.icon className="w-5 h-5" />}
                  {item.label}
                </Link>
              )}
            </div>
          ))}
          <Button className="w-full rounded-lg mt-6 py-6 text-lg">Book Consultation</Button>
        </div>
      )}
    </header>
  );
}
