
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

import { Merriweather } from 'next/font/google';

const merriweather = Merriweather({
    subsets: ['vietnamese'],
    weight: ['300', '400', '700', '900'],
    display: 'swap',
});

export default async function ForTeamPage() {
    // Fetch ALL posts
    const allPosts = await client.fetch(QUERY, {}, { next: { revalidate: 60 } });

    // --- HELPER TO FIND POSTS BY TITLE KEYWORD OR SLUG ---
    // This allows us to "Curate" the book order manually
    const find = (keyword: string) => {
        return allPosts.find((p: any) =>
            p.title.toLowerCase().includes(keyword.toLowerCase()) ||
            p.slug.current.includes(keyword)
        );
    };

    const findMany = (keywords: string[]) => {
        return keywords.map(k => find(k)).filter(Boolean); // Remove undefined/not found
    };

    // --- MANUAL INTRO CONTENT ---
    const introPosts = [
        {
            _id: 'manual-foreword',
            title: 'Lời Tựa: Viết cho những ngày chông chênh nhất',
            slug: { current: 'loi-noi-dau' },
            readingTime: 5,
            body: [
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: 'Chào các bạn, Hải đây.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Nếu bạn đang cầm trên tay (hoặc lướt trên màn hình) cuốn cẩm nang này, có lẽ bạn đang tìm kiếm một "tấm bản đồ" cho sự nghiệp của mình. Tôi cũng từng như vậy. Từng là một Intern "ngáo ngơ", từng bị sếp mắng vì không biết vẽ chart, và từng hoang  mang không biết Research là cái quái gì.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '"Intern to Researcher" không phải là giáo trình khô khan. Nó là tập hợp những gì "xương máu" nhất tôi đúc kết được sau 15 năm chinh chiến. Tôi viết nó với giọng văn của một người anh đi trước, kể lại cho đàn em nghe về cách để sống sót và vươn lên.' }]
                },
                {
                    _type: 'block',
                    style: 'h4',
                    children: [{ _type: 'span', text: 'Lộ trình này dành cho ai?' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Dành cho những bạn không chấp nhận sự hời hợt. Dành cho những ai muốn làm việc dựa trên bằng chứng (Evidence-based) chứ không phải cảm tính.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Chúng ta sẽ đi cùng nhau qua 4 chặng:' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '👉 **Chương 1 (Mindset):** Xây lại tư duy. Bỏ ngay cái kiểu "em tưởng", "em nghĩ". Làm Research là phải nói có sách, mách có chứng.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '👉 **Chương 2 (Skillset):** Trang bị "súng đạn". R, Python, SPSS... không đáng sợ như bạn nghĩ đâu. Tôi làm được, bạn cũng làm được.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '👉 **Chương 3 & 4 (Strategy):** Dùng dữ liệu để ra quyết định sống còn. Đây là lúc bạn chuyển mình từ "Thợ làm số" thành "Nhà tư vấn".' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Hành trình vạn dặm bắt đầu từ bước chân đầu tiên. Hãy lật trang tiếp theo và bắt chiến ngay thôi!' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Chúc các bạn một ngày làm việc đầy năng lượng (Hai Morning)! \n\n**Lê Phúc Hải**' }]
                }
            ]
        },
        {
            _id: 'manual-authors',
            title: 'Ban Biên Tập & Cố Vấn Chuyên Môn',
            slug: { current: 'gioi-thieu-tac-gia' },
            readingTime: 3,
            body: [
                { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Để đảm bảo tính chính xác và hàn lâm cho ấn phẩm này, đội ngũ biên tập đã làm việc nghiêm túc để đối chiếu các kiến thức thực chiến với các chuẩn mực khoa học quốc tế.' }] },
                { _type: 'block', style: 'h3', children: [{ _type: 'span', text: '1. Chủ biên: Le Phuc Hai (Mr.)' }] },
                { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Giám đốc Phát triển Kinh doanh Quốc gia & Giảng viên Doanh nhân. Tác giả chịu trách nhiệm về khung nội dung và các bài học thực chiến.' }] },
                { _type: 'block', style: 'h3', children: [{ _type: 'span', text: '2. Cố vấn Khoa học: TS. Carmen Châu (Ms.)' }] },
                { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Tiến sĩ Marketing (PhD). Chịu trách nhiệm hiệu đính, kiểm tra các phương pháp nghiên cứu (Methodology) và đảm bảo tính Evidence-based cho các lập luận trong sách.' }] }
            ]
        }
    ];

    // --- CHAPTER 1: MINDSET (TƯ DUY) ---
    // Focus: Critical Thinking, Research Mindset
    const chap1_mindset = findMany([
        'NCS101 - Bài 1', // Mindset
        'NCS101 - Bài 2', // Finding Problems
        'NCS101 - Bài 3', // Reading Skills
        'NCS101 - Bài 10', // Ethics
    ]);

    // --- CHAPTER 2: SKILLSET (CÔNG CỤ) ---
    // Focus: Hard Skills (R, Python, Data)
    const chap2_tools = findMany([
        'R101 - Bài 1', // Intro R
        'Python101 - Bài 1', // Intro Python
        'R101 - Bài 2', // Cleaning
        'R101 - Bài 3', // Visualization
        'R101 - Bài 8', // Reporting
    ]);

    // --- CHAPTER 3: STRATEGY (CHIẾN LƯỢC) ---
    // Focus: Applying Data to Business
    const chap3_strategy = findMany([
        'NCS101 - Bài 6', // Analysis Framework
        'Python101 - Bài 5', // Segmentation
        'R101 - Bài 6', // Regression
        'Python101 - Bài 6', // A/B Testing
    ]);

    // --- CHAPTER 4: LEADERSHIP (LÃNH ĐẠO) ---
    // Focus: Big Picture
    const chap4_future = findMany([
        'BI vs AI', // Tech Vision
        'Project Next', // Leadership
    ]);

    const chapters = [
        {
            id: 'intro',
            title: 'PHẦN MỞ ĐẦU',
            posts: introPosts as any[]
        },
        {
            id: 'chap1',
            title: 'CHƯƠNG 1: TƯ DUY NỀN TẢNG (THE MINDSET)',
            posts: chap1_mindset
        },
        {
            id: 'chap2',
            title: 'CHƯƠNG 2: XÂY DỰNG VŨ KHÍ (THE SKILLSET)',
            posts: chap2_tools
        },
        {
            id: 'chap3',
            title: 'CHƯƠNG 3: PHÂN TÍCH & CHIẾN LƯỢC (THE STRATEGY)',
            posts: chap3_strategy
        },
        {
            id: 'chap4',
            title: 'CHƯƠNG 4: TẦM NHÌN C-LEVEL (THE FUTURE)',
            posts: chap4_future
        }
    ];

    return (
        <BookReader chapters={chapters} fontClass={merriweather.className} />
    );
}
