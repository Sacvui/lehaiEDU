
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

    // --- MANUAL INTRO CONTENT (Authentic & Raw) ---
    const introPosts = [
        {
            _id: 'manual-foreword',
            title: 'Lời Tựa: Tại sao tôi viết cuốn sách này?',
            slug: { current: 'loi-noi-dau' },
            readingTime: 3,
            body: [
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: 'Thú thật đi, bạn có đang thấy lạc lõng không?' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Chào bạn. Nếu bạn tìm đến cuốn sách này, tôi đoán bạn đang gặp rắc rối. Có thể là áp lực phải có bài đăng tạp chí Q1/Q2 để bảo vệ luận án. Có thể là cảm giác "ngợp" trước hàng núi kiến thức phương pháp nghiên cứu khô khan. Hoặc tệ hơn, bạn bắt đầu tự hỏi: "Mình học cái này để làm gì?"' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Tôi hiểu. Vì tôi đã từng ở đó. 10 năm trước, tôi cũng là một nghiên cứu sinh (NCS) đầy hoang mang. Tôi vật lộn với những con số vô hồn, những lời nhận xét lạnh lùng của Reviewer, và sự cô đơn trong chính hành trình tri thức của mình.' }]
                },
                {
                    _type: 'block',
                    style: 'blockquote',
                    children: [{ _type: 'span', text: 'Cuốn sách này không dạy bạn cách trở thành Giáo sư. Nó dạy bạn cách "sống sót" và tìm lại niềm vui trong nghiên cứu.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Tôi gọi nó là "Re-Research" - Tái định nghĩa Nghiên cứu. Không phải là những lý thuyết sáo rỗng trên tháp ngà. Đây là những kỹ chiến thuật thực dụng nhất (Pragmatic Strategies) được đúc kết từ máu và nước mắt, để giúp bạn đi từ con số 0 đến bài báo công bố quốc tế đầu tiên.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Hãy coi đây là cuốn nhật ký chiến đấu của một người đi trước. Tôi đã ngã, và tôi muốn chỉ cho bạn chỗ để tránh.' }]
                }
            ]
        }
    ];

    // --- BRIDGE CONTENT: CHAPTER INTROS ---

    const chap1_intro = {
        _id: 'chap1-intro',
        title: 'Chương 1: Xây dựng lại "Cái Đầu" (Mindset)',
        slug: { current: 'chap1-intro' },
        readingTime: 4,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Tư duy sai, làm gì cũng sai' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Đa số NCS thất bại không phải vì dốt, mà vì ảo tưởng. Ảo tưởng mình phải giải cứu thế giới, ảo tưởng mình phải tìm ra chân lý vĩ đại. Tỉnh lại đi. Nghiên cứu là một nghề (Profession), và bài báo là sản phẩm (Product).' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Chương này sẽ đập tan những ảo mộng đó. Chúng ta sẽ cùng nhau xây dựng lại một hệ tư duy mới: Thực tế hơn, khiêm tốn hơn, nhưng sắc bén hơn.' }] }
        ]
    };

    const chap2_intro = {
        _id: 'chap2-intro',
        title: 'Chương 2: Mài giũa "Vũ Khí" (Skillset)',
        slug: { current: 'chap2-intro' },
        readingTime: 4,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Từ Excel đến Python/R' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Bạn có thể đào đất bằng tay không? Được, nhưng bao giờ xong? Công cụ (Tools) sinh ra là để giải phóng con người. Đừng tự hào vì mình "cần cù" làm thủ công. Hãy tự hào vì mình biết dùng máy múc.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Tôi sẽ không dạy bạn trở thành Lập trình viên. Tôi chỉ đưa cho bạn những "đoạn mã thần thánh" (Snippets) để bạn copy-paste và giải quyết việc của mình trong 5 phút thay vì 5 ngày.' }] }
        ]
    };

    const chap3_intro = {
        _id: 'chap3-intro',
        title: 'Chương 3: Chiến lược "Săn" Q1 (Strategy)',
        slug: { current: 'chap3-intro' },
        readingTime: 4,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Viết hay không bằng "Bán" giỏi' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Một bài nghiên cứu tốt nằm trong ngăn kéo là một bài nghiên cứu chết. Giá trị của bạn được đo bằng Impact Factor (Hệ số ảnh hưởng).' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Làm sao để vượt qua vòng gửi xe (Desk Reject)? Làm sao để đối phó với Reviewer khó tính? Chương này là nghệ thuật "bán mình" và thương thuyết với những người gác cổng tri thức.' }] }
        ]
    };

    const chap4_intro = {
        _id: 'chap4-intro',
        title: 'Chương 4: Tương lai của Nghiên cứu (Future)',
        slug: { current: 'chap4-intro' },
        readingTime: 4,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'AI sẽ thay thế chúng ta?' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Câu trả lời là CÓ, nếu bạn chỉ là một "Thợ viết báo". Nhưng là KHÔNG, nếu bạn là một "Kiến trúc sư tri thức".' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Hãy cùng nhìn về tương lai, nơi AI là cộng sự (Co-pilot), còn bạn là người cầm lái.' }] }
        ]
    };

    // --- EXPANDED AUTHOR BIO (Authentic) ---
    const detailedAuthors = {
        _id: 'manual-authors',
        title: 'Về Tác giả',
        slug: { current: 'gioi-thieu-tac-gia' },
        readingTime: 3,
        body: [
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'Hải "Sidewalk" - Người dẫn đường' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Tôi tự gọi mình là "Giáo sư vỉa hè" (Sidewalk Professor). Không phải vì tôi dạy ở vỉa hè, mà vì tôi thích mang những kiến thức hàn lâm từ tháp ngà xuống mặt đất. Tôi tin rằng lý thuyết hay nhất là lý thuyết dùng được.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Tôi không hứa giúp bạn thành thiên tài. Tôi chỉ hứa giúp bạn bớt khổ.' }] },

            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: 'TS. Carmen Châu - Người giữ lửa' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Là một nhà nghiên cứu chính thống được đào tạo bài bản tại New Zealand, cô ấy là chốt chặn cuối cùng về mặt học thuật cho cuốn sách này. Cô ấy đảm bảo rằng những chiến thuật "đường phố" của tôi vẫn tuân thủ những chuẩn mực khắt khe nhất của khoa học.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Cảm ơn bạn đã tin tưởng chọn chúng tôi làm người đồng hành.' }] }
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
            title: 'LỜI TỰA',
            posts: [introPosts[0], detailedAuthors] // Use expanded authors
        },
        {
            id: 'chap1',
            title: 'CHƯƠNG 1: THE MINDSET (TƯ DUY)',
            posts: [chap1_intro, ...chap1_mindset] // Inject Bridge Post
        },
        {
            id: 'chap2',
            title: 'CHƯƠNG 2: THE SKILLSET (CÔNG CỤ)',
            posts: [chap2_intro, ...chap2_tools] // Inject Bridge Post
        },
        {
            id: 'chap3',
            title: 'CHƯƠNG 3: THE STRATEGY (CHIẾN LƯỢC)',
            posts: [chap3_intro, ...chap3_strategy] // Inject Bridge Post
        },
        {
            id: 'chap4',
            title: 'CHƯƠNG 4: THE FUTURE (TƯƠNG LAI)',
            posts: [chap4_intro, ...chap4_future] // Inject Bridge Post
        }
    ];

    return (
        <BookReader chapters={chapters} fontClass={merriweather.className} />
    );
}
