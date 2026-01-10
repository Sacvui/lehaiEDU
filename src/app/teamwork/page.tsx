
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

export const dynamic = 'force-dynamic';

export default async function ForTeamPage() {
    // Fetch ALL posts
    const allPosts = await client.fetch(QUERY, {}, { next: { revalidate: 0 } });

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

    // --- MANUAL INTRO CONTENT (Hai Morning Style: Punchy & Persuasive) ---
    const introPosts = [
        {
            _id: 'manual-foreword',
            title: 'Lời Tựa: Đừng đọc cuốn này nếu bạn muốn nhàn',
            slug: { current: 'loi-noi-dau' },
            readingTime: 3,
            body: [
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: 'Chào buổi sáng. Cà phê chưa?' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Nếu bạn đang tìm một cuốn giáo trình ru ngủ để lấy bằng Tiến sĩ giấy, hãy gấp trang web này lại. Nghiêm túc đấy. Cuốn sách này không dành cho bạn.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '15 năm trước, tôi là một gã Intern "chạy bằng cơm", chỉ biết copy-paste Excel 10.000 dòng trong vô vọng. Sếp ném cái báo cáo 3D xanh đỏ vào mặt tôi: "Mày vẽ tranh cho trẻ con xem à? Insight đâu? Tiền nằm ở đâu?".' }]
                },
                {
                    _type: 'block',
                    style: 'blockquote',
                    children: [{ _type: 'span', text: 'Cú "tát" đó làm tôi tỉnh ngộ. Hóa ra, tôi chẳng biết gì cả.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Cuốn sách này là tập hợp những "vết sẹo" của tôi. Từ một gã thợ gõ phím trở thành một Data Strategist (Người hoạch định chiến lược dựa trên dữ liệu). Tôi viết nó để bạn KHÔNG PHẢI đi vào vết xe đổ đó nữa.' }]
                },
                {
                    _type: 'block',
                    style: 'h4',
                    children: [{ _type: 'span', text: 'Bạn sẽ nhận được gì?' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Không lý thuyết suông. Không thuật ngữ đánh đố. Chỉ có Chiến lược thực chiến (Battle-tested Strategies). Cầm sách lên là phải dùng được ngay vào luận án, vào công việc.' }]
                }
            ]
        }
    ];

    // --- BRIDGE CONTENT: CHAPTER INTROS ---
    // Editorial Note: Applying Storytelling/Anecdotal hooks

    const chap1_intro = {
        _id: 'chap1-intro',
        title: 'Chương 1: Những cú lừa của Tư duy',
        slug: { current: 'chap1-intro' },
        readingTime: 4,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Cái bẫy của sự nhiệt tình' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Nhiệt tình + Ngu dốt = Phá hoại. Câu này hơi phũ nhưng đúng trong ngành dữ liệu. Đừng vội lao vào làm khi chưa biết mình đang giải quyết bài toán gì.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Trong chương này, tôi sẽ kể cho bạn nghe về những lần tôi "tưởng bở". Tưởng khách hàng thích rẻ (hóa ra họ thích sang). Tưởng quảng cáo nhiều là tốt (hóa ra là spam). Tư duy sai thì có chạy code bằng trời cũng chỉ ra rác (Garbage In, Garbage Out).' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Hãy học cách "nghi ngờ" mọi thứ, kể cả cảm nhận của chính mình.' }] }
        ]
    };

    const chap2_intro = {
        _id: 'chap2-intro',
        title: 'Chương 2: Đừng dùng dao mổ trâu giết gà',
        slug: { current: 'chap2-intro' },
        readingTime: 4,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Nỗi đau mang tên "Excel has stopped working"' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Bạn đã bao giờ ngồi chờ cái file Excel xoay vòng vòng 15 phút rồi... văng luôn chưa? Tôi bị rồi. Mất trắng báo cáo lúc 5 giờ chiều thứ Sáu.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Lúc đó tôi mới chịu học Code. Không phải để làm lập trình viên, mà để thoát khổ. 3 dòng code Python chạy xong việc của 3 tiếng hì hục click chuột. Chương này là bộ "đồ nghề" sinh tồn. Học đi, nhàn cái thân.' }] }
        ]
    };

    const chap3_intro = {
        _id: 'chap3-intro',
        title: 'Chương 3: Tiền nằm ở đâu?',
        slug: { current: 'chap3-intro' },
        readingTime: 4,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Biến số thành Dollar' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Sếp không quan tâm R-squared hay P-value là cái quái gì đâu. Sếp chỉ quan tâm: "Làm thế nào để tăng doanh số?".' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Chương này tôi sẽ chỉ cách bạn "dịch" những con số khô khan thành chiến lược sặc mùi tiền. Hồi quy để dự báo doanh số. Phân cụm để "bắt" đúng khách giàu. Đây là lúc bạn tỏa sáng.' }] }
        ]
    };

    const chap4_intro = {
        _id: 'chap4-intro',
        title: 'Chương 4: Ai rồi cũng phải làm Sếp',
        slug: { current: 'chap4-intro' },
        readingTime: 4,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Thoát khỏi cái giếng' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Làm chuyên môn mãi cũng chán. Đến một lúc, bạn sẽ phải đứng mũi chịu sào. Lúc này, kỹ năng không còn là code nữa, mà là tầm nhìn. Là AI, là xu hướng, là quản trị con người.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Đừng để mình là "thợ", hãy là "thầy". Chương cuối này là hành trang cho những ngày bạn không còn ngồi gõ phím nữa.' }] }
        ]
    };

    // --- EXPANDED AUTHOR BIO (Short & Punchy) ---
    const detailedAuthors = {
        _id: 'manual-authors',
        title: 'Người kể chuyện & Kẻ kìm cương',
        slug: { current: 'gioi-thieu-tac-gia' },
        readingTime: 3,
        body: [
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Hải Rong Chơi - Kẻ Ngoại Đạo' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Tôi không phải Giáo sư đầu ngành. Tôi là dân làm ăn (Business) đi lạc vào chốn học thuật. Tôi ghét lý thuyết suông. Với tôi, Nghiên cứu mà không "ra tiền" hoặc "ra chiến lược" là Nghiên cứu chết.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Tôi viết cuốn sách này để "trả nợ". Trả nợ những người thầy đã mắng tôi, và trả nợ chính tuổi trẻ ngông cuồng của mình.' }] },

            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'TS. Carmen Châu - Kẻ Kìm Cương' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Nếu tôi là gã đầu đường xó chợ thích bay nhảy, thì Carmen Châu (PhD) là người giữ tôi lại trên mặt đất.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Sự chỉn chu, khắt khe và nền tảng học thuật vững chắc của cô ấy chính là thứ khiến cuốn sách này trở nên "nghiêm túc" (như cái tên của nó). Sự kết hợp giữa "Data lạnh lùng" và "Trái tim nóng" chính là linh hồn của Re-Research.' }] }
        ]
    };

    // --- CHAPTER 1: MINDSET (TƯ DUY) ---
    const chap1_mindset = findMany([
        'book-chapter-1-mindset',
    ]);

    // --- CHAPTER 2: SKILLSET (CÔNG CỤ) ---
    const chap2_tools = findMany([
        'book-chapter-2-skillset',
    ]);

    // --- CHAPTER 3: STRATEGY (CHIẾN LƯỢC) ---
    const chap3_strategy = findMany([
        'book-chapter-3-strategy',
    ]);

    // --- CHAPTER 4: LEADERSHIP (LÃNH ĐẠO) ---
    const chap4_future = findMany([
        'book-chapter-intro', // Placeholder if needed or keep empty for now
    ]);

    const chapters = [
        {
            id: 'intro',
            title: 'PHẦN MỞ ĐẦU',
            posts: [introPosts[0], detailedAuthors] // Use expanded authors
        },
        {
            id: 'chap1',
            title: 'CHƯƠNG 1: TƯ DUY NỀN TẢNG (THE MINDSET)',
            posts: [chap1_intro, ...chap1_mindset] // Inject Bridge Post
        },
        {
            id: 'chap2',
            title: 'CHƯƠNG 2: XÂY DỰNG VŨ KHÍ (THE SKILLSET)',
            posts: [chap2_intro, ...chap2_tools] // Inject Bridge Post
        },
        {
            id: 'chap3',
            title: 'CHƯƠNG 3: PHÂN TÍCH & CHIẾN LƯỢC (THE STRATEGY)',
            posts: [chap3_intro, ...chap3_strategy] // Inject Bridge Post
        },
        {
            id: 'chap4',
            title: 'CHƯƠNG 4: TẦM NHÌN C-LEVEL (THE FUTURE)',
            posts: [chap4_intro, ...chap4_future] // Inject Bridge Post
        }
    ];

    return (
        <BookReader chapters={chapters} fontClass={merriweather.className} />
    );
}
