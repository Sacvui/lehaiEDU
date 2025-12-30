import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { About } from "@/components/sections/About";
import { LatestInsights } from "@/components/sections/LatestInsights";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans selection:bg-blue-100 selection:text-blue-900">
      <Header />
      <Hero />
      <Services />
      <About />
      <LatestInsights />

      {/* Simple Footer Placeholder */}
      <footer className="py-12 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center">
        <p className="text-slate-500 text-sm">© 2025 Le Phuc Hai. All rights reserved.</p>
      </footer>
    </main>
  );
}
