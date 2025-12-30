import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Le Phuc Hai | Business & Academic Profile",
  description: "Sharing insights on Business Development, Strategy, and Academic Research. A personal portfolio connecting practical business solutions with academic knowledge.",
  openGraph: {
    title: "Le Phuc Hai | Business & Academic Profile",
    description: "Connect with me for Business Strategy and Academic Collaboration.",
    url: 'https://lehai.edu.vn',
    siteName: 'Le Hai Education',
    images: [
      {
        url: 'https://lehai.edu.vn/uploads/profile-founder.jpg', // Ensure this image path is valid/public
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
    title: "Le Phuc Hai | Business & Academic Profile",
    description: "Sharing insights on Business Development and Research.",
    images: ['https://lehai.edu.vn/uploads/profile-founder.jpg'],
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
