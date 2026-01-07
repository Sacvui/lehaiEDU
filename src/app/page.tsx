import React from 'react';
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { LatestInsights } from "@/components/sections/LatestInsights";
import { Mentorship } from "@/components/sections/Mentorship";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Hero />
      <Services />
      <About />
      <Mentorship />
      <React.Suspense fallback={<div className="h-96 w-full animate-pulse bg-slate-100 dark:bg-slate-900" />}>
        <LatestInsights />
      </React.Suspense>
    </main>
  );
}
