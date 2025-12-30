import type { Metadata } from 'next';
import CVPageContent from './CVPageContent'; // We'll move the content to a client component

export const metadata: Metadata = {
    title: 'Curriculum Vitae | Le Phuc Hai',
    description: 'Professional experience and academic background of Le Phuc Hai - National Business Development Director.',
    openGraph: {
        title: 'Curriculum Vitae | Le Phuc Hai',
        description: 'Explore the professional journey and academic contributions of Le Phuc Hai.',
        images: ['https://lehai.edu.vn/uploads/profile.jpg'],
    },
};

export default function CVPage() {
    return <CVPageContent />;
}
