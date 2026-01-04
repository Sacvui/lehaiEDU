
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
            title: 'Lời Tựa: Đừng đọc cuốn này nếu bạn muốn nhàn',
            slug: { current: 'loi-noi-dau' },
            readingTime: 5,
            body: [
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: '15 năm trước, tôi là một gã Intern "ngáo ngơ".' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Ngày đầu đi làm, sếp quăng cho một file Excel 10.000 dòng. Tôi hì hục copy-paste cả buổi chiều, vẽ ra mấy cái biểu đồ 3D xanh đỏ tím vàng nhìn rất "nguy hiểm". Hí hửng đem lên trình, sếp nhìn đúng 3 giây rồi hỏi một câu rụng rời tay chân:' }]
                },
                {
                    _type: 'block',
                    style: 'blockquote',
                    children: [{ _type: 'span', text: '"Mày vẽ cái này để lòe thiên hạ à? Insight đâu? Tao cần biết tại sao doanh số tụt, chứ không cần mày tô màu cho báo cáo!"' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Lúc đó tôi mới "ngớ" người ra. Hóa ra, tôi chẳng biết gì cả. Tôi tưởng mình biết Excel, biết vẽ chart là oai. Nhưng thực ra, tôi chỉ là một cái máy gõ phím chạy bằng cơm.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Cuốn sách này không phải giáo trình đại học. Nó là tập hợp những cú "tát" của cuộc đời để tôi tỉnh ra. Từ một gã làm việc chân tay (Intern) thành một người biết dùng cái đầu để tư duy (Researcher/Leader).' }]
                },
                {
                    _type: 'block',
                    style: 'h4',
                    children: [{ _type: 'span', text: 'Tại sao lại là "Researcher"?' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Ở Việt Nam, người ta hay nghĩ Researcher là mấy ông đầu to mắt cận ngồi trong phòng thí nghiệm. SAII LẦM! Trong kinh doanh, Researcher là những "Spec Ops" (Lực lượng đặc nhiệm). Họ không đoán mò. Họ dùng dữ liệu để chỉ cho sếp biết tiền đang rơi ở đâu.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Nếu bạn chán cảnh làm việc cảm tính, chán cảnh bị sếp "xoay" như chong chóng vì không có số liệu bảo vệ quan điểm... thì xin chúc mừng. Bạn tìm đúng chỗ rồi.' }]
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

    // --- EXPANDED AUTHOR BIO ---
    const detailedAuthors = {
        _id: 'manual-authors',
        title: 'Ban Biên Tập & Cố Vấn Chuyên Môn',
        slug: { current: 'gioi-thieu-tac-gia' },
        readingTime: 10,
        body: [
            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '1. Chủ biên: Le Phuc Hai (Mr.)' }] },
            { _type: 'block', style: 'blockquote', children: [{ _type: 'span', text: '"Tôi không dạy lý thuyết. Tôi chia sẻ những vết sẹo của mình để các bạn không phải dẫm vào nó nữa."' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Anh Lê Phúc Hải hiện là **Giám đốc Phát triển Kinh doanh Quốc gia (National Business Development Director)** và là Giảng viên Doanh nhân tại nhiều trường đại học lớn.' }] },
            { _type: 'block', style: 'h4', children: [{ _type: 'span', text: 'Kinh nghiệm thực chiến:' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '- 15+ năm kinh nghiệm trong lĩnh vực Quản trị Chiến lược & Phân tích Dữ liệu.\n- Từng giữ vị trí C-Level tại các tập đoàn đa quốc gia.\n- Mentor cho hàng trăm sinh viên và nhân sự trẻ phát triển sự nghiệp.' }] },
            { _type: 'block', style: 'h4', children: [{ _type: 'span', text: 'Triết lý giáo dục:' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Anh theo đuổi triết lý "Thực học - Thực nghiệp". Mọi kiến thức anh chia sẻ đều phải trả lời được câu hỏi: "Cái này áp dụng vào công việc ngày mai như thế nào?". Phong cách giảng dạy của anh nổi tiếng với sự gần gũi, hài hước (Hai Morning) nhưng cực kỳ sâu sắc.' }] },

            { _type: 'block', style: 'h2', children: [{ _type: 'span', text: '2. Cố vấn Khoa học: TS. Carmen Châu (Ms.)' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '**Tiến sĩ (PhD) chuyên ngành Marketing.**' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Cô chịu trách nhiệm bảo chứng tính khoa học cho toàn bộ nội dung trong cuốn sách này. Nếu anh Hải mang đến hơi thở của chiến trường ác liệt, thì cô Châu mang đến sự chuẩn mực, chặt chẽ của tháp ngà học thuật.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Sự kết hợp này đảm bảo rằng: Những gì bạn học được vừa **dùng được ngay**, lại vừa **đúng chuẩn quốc tế**.' }] }
        ]
    };

    // --- CHAPTER 1: MINDSET (TƯ DUY) ---
    const chap1_mindset = findMany([
        'NCS101 - Bài 1', 'NCS101 - Bài 2', 'NCS101 - Bài 3', 'NCS101 - Bài 10',
    ]);

    // --- CHAPTER 2: SKILLSET (CÔNG CỤ) ---
    const chap2_tools = findMany([
        'R101 - Bài 1', 'Python101 - Bài 1', 'R101 - Bài 2', 'R101 - Bài 3', 'R101 - Bài 8',
    ]);

    // --- CHAPTER 3: STRATEGY (CHIẾN LƯỢC) ---
    const chap3_strategy = findMany([
        'NCS101 - Bài 6', 'Python101 - Bài 5', 'R101 - Bài 6', 'Python101 - Bài 6',
    ]);

    // --- CHAPTER 4: LEADERSHIP (LÃNH ĐẠO) ---
    const chap4_future = findMany([
        'BI vs AI', 'Project Next',
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
