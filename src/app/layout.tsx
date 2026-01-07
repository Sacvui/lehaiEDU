import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://lehai.edu.vn'),
  title: {
    default: 'Lê Phúc Hải | Strategic Leadership & Digital Transformation',
    template: '%s | Lê Phúc Hải'
  },
  description: 'Official website of Le Phuc Hai - National Business Development Director & PhD Researcher. Insights on RTM, Logistics, Leadership and Academic Research.',
  keywords: ['Le Phuc Hai', 'RTM', 'Logistics', 'Business Strategy', 'Academic Research', 'PhD Journey', 'Mentorship'],
  openGraph: {
    title: {
      default: 'Lê Phúc Hải | Strategic Leadership & Digital Transformation',
      template: '%s | Lê Phúc Hải'
    },
    description: 'Insights on RTM, Logistics, Leadership and Academic Research.',
    url: 'https://lehai.edu.vn',
    siteName: 'Le Phuc Hai Official',
    images: [
      {
        url: '/uploads/profile-founder.jpg',
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
    title: {
      default: 'Lê Phúc Hải | Strategic Leadership & Digital Transformation',
      template: '%s | Lê Phúc Hải'
    },
    description: 'Insights from a Scholar-Practitioner.',
    images: ['/uploads/profile-founder.jpg'],
    creator: '@hailp',
  },
  manifest: '/manifest.json',
};

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Le Phuc Hai',
              url: 'https://lehai.edu.vn',
              image: 'https://lehai.edu.vn/uploads/profile-founder.jpg',
              sameAs: [
                'https://www.linkedin.com/in/lephuchai',
                'https://www.facebook.com/hailp',
                'https://ammedtech.com'
              ],
              jobTitle: 'National Business Development Director',
              worksFor: {
                '@type': 'Organization',
                name: 'AM Medtech'
              },
              description: 'Expert in Strategic Leadership, Digital Transformation, and Research.'
            })
          }}
        />
      </body>
    </html>
  );
}
