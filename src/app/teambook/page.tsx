
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
            title: 'Lời Tựa: Tấm Bản Đồ Cho Người Làm Nghiên Cứu',
            slug: { current: 'loi-noi-dau' },
            readingTime: 5,
            body: [
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: 'Kính gửi Quý độc giả,' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Trong hành trình 15 năm làm nghề và giảng dạy, tôi đã chứng kiến vô số bạn trẻ đầy nhiệt huyết nhưng lại lạc lối trong ma trận của thông tin và công cụ. Các bạn giỏi kỹ năng, nhưng thiếu tư duy nền tảng. Hoặc ngược lại, các bạn nắm vững lý thuyết nhưng lại lúng túng khi đối mặt với dữ liệu thực tế.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Cuốn sách "Intern to Researcher" này không đơn thuần là một tuyển tập các bài viết blog. Nó là nỗ lực của tôi nhằm hệ thống hóa lại con đường phát triển năng lực nghiên cứu một cách bài bản nhất.' }]
                },
                {
                    _type: 'block',
                    style: 'h4',
                    children: [{ _type: 'span', text: 'Cấu trúc cuốn sách được biên tập theo dòng chảy tư duy logic:' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '**1. Chương 1: Tư Duy Nền Tảng (The Mindset)** - Trước khi học cách chạy mô hình hay phân tích số liệu, bạn cần học cách đặt câu hỏi. Một người làm nghiên cứu giỏi không phải là người có câu trả lời hay nhất, mà là người biết đặt câu hỏi đúng ngay từ đầu.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '**2. Chương 2 & 3: Vũ Khí & Chiến Lược (The Toolset & Skillset)** - Khi tư duy đã thông suốt, bạn cần những vũ khí sắc bén. Tại đây, chúng ta sẽ làm chủ R, Python và các mô hình định lượng để biến dữ liệu thô thành những "insight" đắt giá.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '**3. Chương 4: Tầm Nhìn (The Vision)** - Cuối cùng, nghiên cứu để làm gì? Để phục vụ chiến lược, để ra quyết định và để kiến tạo giá trị. Đó là đích đến cuối cùng của một Researcher chuyên nghiệp.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Mời bạn lật giở từng trang, không phải để đọc nhanh, mà để suy ngẫm và thực hành.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Trân trọng,\n**Lê Phúc Hải**' }]
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
