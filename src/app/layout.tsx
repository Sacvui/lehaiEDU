import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Lê Phúc Hải | Strategic Leadership & Digital Transformation',
  description: 'Official website of Le Phuc Hai - National Business Development Director & PhD Researcher. Insights on RTM, Logistics, Leadership and Academic Research.',
  keywords: ['Le Phuc Hai', 'RTM', 'Logistics', 'Business Strategy', 'Academic Research', 'PhD Journey', 'Mentorship'],
  openGraph: {
    title: 'Lê Phúc Hải | Strategic Leadership & Digital Transformation',
    description: 'Insights on RTM, Logistics, Leadership and Academic Research.',
    url: 'https://lehai.edu.vn',
    siteName: 'Le Phuc Hai Official',
    images: [
      {
        url: 'https://lehai.edu.vn/uploads/profile-founder.jpg',
        width: 1200,
        height: 630,
        alt: 'Le Phuc Hai Profile',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lê Phúc Hải | Strategic Leadership & Digital Transformation',
    description: 'Insights from a Scholar-Practitioner.',
    images: ['https://lehai.edu.vn/uploads/profile-founder.jpg'],
    creator: '@hailp',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${inter.className} bg-slate-950 min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
