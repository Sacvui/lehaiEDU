import React, { lazy, Suspense } from 'react';

const Hero = lazy(() => import('@/components/sections/Hero').then(m => ({ default: m.Hero })));
const Services = lazy(() => import('@/components/sections/Services').then(m => ({ default: m.Services })));
const About = lazy(() => import('@/components/sections/About').then(m => ({ default: m.About })));
const Mentorship = lazy(() => import('@/components/sections/Mentorship').then(m => ({ default: m.Mentorship })));
const LatestInsights = lazy(() => import('@/components/sections/LatestInsights').then(m => ({ default: m.LatestInsights })));
const Contact = lazy(() => import('@/components/sections/Contact').then(m => ({ default: m.Contact })));

function SectionSkeleton() {
  return <div className="h-96 animate-pulse bg-slate-100 dark:bg-slate-900" />;
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Suspense fallback={<div className="h-screen bg-slate-50 dark:bg-slate-950" />}>
        <Hero />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Services />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <About />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Mentorship />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <LatestInsights />
      </Suspense>
      
      <Suspense fallback={<SectionSkeleton />}>
        <Contact />
      </Suspense>
    </main>
  );
}
