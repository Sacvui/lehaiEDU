import { Metadata } from 'next'
import { MentorshipContent } from '@/components/mentorship/MentorshipContent'

export const metadata: Metadata = {
    title: 'Mentorship & Academic Guidance | Le Phuc Hai - PhD Researcher',
    description: 'Join my research mentorship program for PhD candidates and students. Get expert guidance on thesis writing, research methodology, statistical analysis, and academic publishing.',
    keywords: ['mentorship', 'PhD', 'thesis', 'research', 'academic', 'ncsStat'],
}

export default function MentorshipPage() {
    return <MentorshipContent />
}
