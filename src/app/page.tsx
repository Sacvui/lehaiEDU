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


    </main>
  );
}
