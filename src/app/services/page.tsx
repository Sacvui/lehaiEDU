import { Metadata } from 'next'
import { ServicesContent } from '@/components/services/ServicesContent'

export const metadata: Metadata = {
    title: 'Services & Solutions | Le Phuc Hai - PhD Researcher & Digital Strategist',
    description: 'Explore strategic consulting services: fwd LIFEchain for supply chain transparency, ncsStat for academic research, and digital transformation solutions for enterprises.',
    keywords: ['consulting', 'digital transformation', 'supply chain', 'blockchain', 'statistics', 'research'],
}

export default function ServicesPage() {
    return <ServicesContent />
}
