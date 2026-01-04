
import React from 'react';
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";
import BookReader from './BookReader';

// Fetch ALL posts sorted by date (to get a good mix)
// We will manually group them in JS
const QUERY = groq`
  *[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    publishedAt,
    excerpt,
    body,
    mainImage,
    "categories": categories[]->title,
    "categorySlugs": categories[]->slug.current,
    "tags": tags,
    readingTime
  }
`;

export const metadata = {
    title: 'Intern to C-Level: The Handbook | Lehai Education',
    description: 'Tài liệu đào tạo nội bộ độc quyền.',
    robots: {
        index: false, // Internal only
        follow: false
    }
};

export default async function ForTeamPage() {
    const posts = await client.fetch(QUERY, {}, { next: { revalidate: 60 } });

    // GROUPING LOGIC
    // 1. Introduction (Look for specific intro post or generic intro)
    // 2. Part I: Mindset (Career, Academic, NCS)
    // 3. Part II: Skills (R, Python, Data)
    // 4. Part III: Business (Strategy, RTM, Tech)

    // Helper to check category
    const hasCat = (post: any, slugs: string[]) =>
        post.categorySlugs?.some((s: string) => slugs.includes(s));

    // Helper to check tags
    const hasTag = (post: any, tags: string[]) =>
        post.tags?.some((t: string) => tags.includes(t));

    const part1_mindset = posts.filter((p: any) =>
        hasCat(p, ['mentorship-career', 'academic-corner', 'book-intern-to-ceo']) ||
        hasTag(p, ['NCS101', 'PhD Life', 'Career'])
    );

    const part2_skills = posts.filter((p: any) =>
        hasCat(p, ['data-analysis']) ||
        hasTag(p, ['R101', 'Python101', 'Quantitative'])
    );

    const part3_business = posts.filter((p: any) =>
        hasCat(p, ['enterprise-strategy', 'logistics-supply-chain', 'rtm-distribution', 'strategic-leadership']) ||
        hasTag(p, ['Business', 'Strategy', 'RTM'])
    );

    const part4_future = posts.filter((p: any) =>
        hasCat(p, ['ai-technology', 'digital-transformation']) ||
        hasTag(p, ['AI', 'Tech', 'Future'])
    );

    // Filter out duplicates (if any post matches multiple, prioritize P1 > P2 > P3 > P4)
    // Quick dedup logic:
    const assignedIds = new Set();

    const dedup = (list: any[]) => {
        const clean = list.filter(p => !assignedIds.has(p._id));
        clean.forEach(p => assignedIds.add(p._id));
        return clean;
    };

    const chapters = [
        {
            id: 'part1',
            title: 'Phần I: Tư Duy & Định Hướng (Mindset)',
            posts: dedup(part1_mindset).slice(0, 15) // Limit to 15 for "50 pages" feel initially? No, let's load what we use.
        },
        {
            id: 'part2',
            title: 'Phần II: Vũ Khí & Kỹ Năng (The Toolkit)',
            posts: dedup(part2_skills)
        },
        {
            id: 'part3',
            title: 'Phần III: Chiến Trường & Thực Thi (Business)',
            posts: dedup(part3_business)
        },
        {
            id: 'part4',
            title: 'Phần IV: Vươn Ra Biển Lớn (Future Tech)',
            posts: dedup(part4_future)
        }
    ];

    return (
        <BookReader chapters={chapters} />
    );
}
