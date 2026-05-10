import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ["latin"], display: 'swap' });

export const metadata: Metadata = {
  metadataBase: new URL('https://lehai.edu.vn'),
  title: {
    default: 'NCS Lê Phúc Hải | Chuyên Gia Chuyển Đổi Số & Quản Trị Chiến Lược',
    template: '%s | NCS Lê Phúc Hải'
  },
  description: 'Website chính thức của NCS Lê Phúc Hải - Founder fwd LIFEchain, Chuyên gia tư vấn Chuyển đổi số, Giám đốc Phát triển Kinh doanh. Chia sẻ kiến thức về RTM, Blockchain Nông nghiệp, và Nghiên cứu khoa học.',
  keywords: ['Lê Phúc Hải', 'Le Phuc Hai', 'fwd LIFEchain', 'Blockchain Agriculture', 'Transparent Agriculture', 'Chuyển đổi số', 'Digital Transformation', 'RTM', 'Logistics', 'Nghiên cứu sinh', 'PhD Researcher', 'Tư vấn chiến lược', 'AM Medtech', 'NCSKIT'],
  openGraph: {
    title: {
      default: 'NCS Lê Phúc Hải | Chuyên Gia Chuyển Đổi Số & Quản Trị Chiến Lược',
      template: '%s | NCS Lê Phúc Hải'
    },
    description: 'Chia sẻ kiến thức về Chuyển đổi số, Quản trị chiến lược và Nghiên cứu khoa học.',
    url: 'https://lehai.edu.vn',
    siteName: 'Le Phuc Hai Official',
    images: [
      {
        url: '/uploads/profile-founder.jpg',
        width: 1200,
        height: 630,
        alt: 'NCS Lê Phúc Hải - Chuyên Gia Chuyển Đổi Số',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: {
      default: 'NCS Lê Phúc Hải | Scholar-Practitioner',
      template: '%s | NCS Lê Phúc Hải'
    },
    description: 'Hành trình kết nối tri thức hàn lâm và thực tiễn quản trị.',
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
                'https://chain.fwdlife.vn',
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
