import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Breadcrumb } from '@/components/layout/Breadcrumb'

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
  preload: true,
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.lephuchai.com'),
  title: {
    default: 'Le Phuc Hai | PhD Researcher & Digital Transformation Expert',
    template: '%s | Le Phuc Hai'
  },
  description: 'Official website of Le Phuc Hai (Lê Phúc Hải) - Founder of fwd LIFEchain, PhD Researcher, and Digital Transformation Expert. Specializing in RTM, Blockchain Agriculture, and Advanced Statistics (ncsStat).',
  keywords: [
    'Le Phuc Hai', 'Lê Phúc Hải', 'fwd LIFEchain', 'Blockchain Agriculture', 
    'Nông nghiệp minh bạch', 'Chuyển đổi số', 'Digital Transformation', 
    'RTM Distribution', 'Logistics Supply Chain', 'PhD Researcher', 
    'Nghiên cứu sinh', 'Tư vấn chiến lược', 'AM Medtech', 'ncsStat', 
    'Advanced Statistics R', 'Data Analytics Vietnam'
  ],
  openGraph: {
    title: {
      default: 'Le Phuc Hai | PhD Researcher & Business Strategist',
      template: '%s | Le Phuc Hai'
    },
    description: 'Bridging academic rigor and business strategy. Expert in Digital Transformation and Blockchain Agriculture.',
    url: 'https://www.lephuchai.com',
    siteName: 'Le Phuc Hai Official',
    images: [
      {
        url: '/uploads/profile-founder.jpg',
        width: 1200,
        height: 630,
        alt: 'Le Phuc Hai - PhD Researcher & Founder',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'Le Phuc Hai | Scholar-Practitioner',
      template: '%s | Le Phuc Hai'
    },
    description: 'Expertise in Digital Transformation and academic research methodology.',
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
        <div className="container mx-auto px-4 md:px-6 pt-24">
          <Breadcrumb />
        </div>
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
              alternateName: 'Lê Phúc Hải',
              url: 'https://www.lephuchai.com',
              image: 'https://www.lephuchai.com/uploads/profile-founder.jpg',
              sameAs: [
                'https://chain.fwdlife.vn',
                'https://www.linkedin.com/in/hailp/',
                'https://ncskit.org',
                'https://ammedtech.com'
              ],
              jobTitle: 'Founder & PhD Researcher',
              worksFor: [
                {
                  '@type': 'Organization',
                  name: 'fwd LIFEchain'
                },
                {
                  '@type': 'Organization',
                  name: 'AM Medtech'
                }
              ],
              description: 'Expert in Strategic Leadership, Digital Transformation, and Advanced Statistical Research. Bridging the gap between academic theory and practical application.',
              knowsAbout: ['Blockchain', 'Digital Transformation', 'Agricultural Supply Chain', 'Statistics', 'R Language', 'Marketing Strategy'],
              alumniOf: {
                '@type': 'CollegeOrUniversity',
                name: 'Ton Duc Thang University'
              }
            })
          }}
        />
      </body>
    </html>
  );
}
