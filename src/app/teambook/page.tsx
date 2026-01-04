
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
                    children: [{ _type: 'span', text: 'Nếu bạn đang cầm trên tay cuốn cẩm nang này, có lẽ bạn đang tìm kiếm một "tấm bản đồ" cho sự nghiệp của mình. Tôi cũng từng như vậy. Từng là một Intern "ngáo ngơ", từng bị sếp mắng vì không biết vẽ chart, và từng hoang mang không biết Research là cái quái gì.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '"Intern to Researcher" không phải là giáo trình khô khan. Nó là tập hợp những gì "xương máu" nhất tôi đúc kết được sau 15 năm chinh chiến. Tôi viết nó với giọng văn của một người anh đi trước, kể lại cho đàn em nghe về cách để sống sót và vươn lên.' }]
                },
                {
                    _type: 'block',
                    style: 'h4',
                    children: [{ _type: 'span', text: 'Ai là một "Researcher"?' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Đừng nhầm lẫn. Researcher không chỉ là những học giả (Academic Scholars) ngồi trong tháp ngà nghiên cứu. Trong thời đại này, Researcher còn là những Nhà lãnh đạo doanh nghiệp (Business Leaders) biết dùng dữ liệu để ra quyết định.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Dù bạn muốn trở thành tiến sĩ hay một giám đốc chiến lược, tư duy nghiên cứu (Research Mindset) đều là vũ khí quan trọng nhất.' }]
                },
                {
                    _type: 'block',
                    style: 'h4',
                    children: [{ _type: 'span', text: 'Lộ trình 4 chặng của chúng ta:' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '1. Chương 1 (Mindset): Xây lại tư duy. Bỏ ngay cái kiểu "em tưởng", "em nghĩ". Làm Research là phải nói có sách, mách có chứng.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '2. Chương 2 (Skillset): Trang bị công cụ. R, Python, SPSS... không đáng sợ như bạn nghĩ đâu.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '3. Chương 3 & 4 (Strategy & Vision): Dùng dữ liệu để ra quyết định sống còn và hoạch định chiến lược tầm cao.' }]
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
        }
    ];
    // --- BRIDGE CONTENT: CHAPTER INTROS ---
    // These help glue the blog posts together into a cohesive book
    const chap1_intro = {
        _id: 'chap1-intro',
        title: 'Dẫn nhập Chương 1: Tại sao phải có Tư duy trước?',
        slug: { current: 'chap1-intro' },
        readingTime: 3,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Đừng vội lao vào chạy Tool!' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Sai lầm lớn nhất của các bạn trẻ (và cả tôi ngày xưa) là cứ thấy dữ liệu là lao vào vẽ biểu đồ. Hậu quả là vẽ ra những thứ "vô hồn", đúng về mặt kỹ thuật nhưng sai về mặt bản chất.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Chương này sẽ giúp bạn "thắng lại" một nhịp. Chúng ta sẽ cùng nhau học cách đặt câu hỏi nghiên cứu trúng đích, cách đọc tài liệu nhanh và hiệu quả, cũng như rèn luyện tư duy phản biện (Critical Thinking) trước khi bắt tay vào xử lý bất kỳ con số nào. Hãy bắt đầu bằng việc xác định lại tâm thế của một người làm nghiên cứu.' }] }
        ]
    };

    const chap2_intro = {
        _id: 'chap2-intro',
        title: 'Dẫn nhập Chương 2: Làm chủ Vũ khí trong tay',
        slug: { current: 'chap2-intro' },
        readingTime: 3,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Từ Tư duy đến Hành động' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Khi tư duy đã thông suốt, bạn cần những công cụ đủ mạnh để hiện thực hóa ý tưởng. Excel là tốt, nhưng chưa đủ. Để đi xa hơn trong thế giới dữ liệu lớn, bạn cần làm chủ R và Python.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Đừng sợ code. Code chỉ là ngôn ngữ để bạn giao tiếp với máy tính. Chương này tôi sẽ cầm tay chỉ việc, giúp bạn đi từ con số 0 đến lúc tự tay chạy được những dòng code phân tích đầu tiên.' }] }
        ]
    };

    const chap3_intro = {
        _id: 'chap3-intro',
        title: 'Dẫn nhập Chương 3: Phân tích để ra Chiến lược',
        slug: { current: 'chap3-intro' },
        readingTime: 3,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Số liệu biết nói' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Có tư duy, có công cụ, giờ là lúc "nấu cỗ". Dữ liệu thô (Raw Data) tựa như nguyên liệu tươi sống ở ngoài chợ. Nhiệm vụ của bạn là chế biến nó thành món ăn ngon (Insight) để phục vụ thực khách (Sếp/Khách hàng).' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Trong phần này, chúng ta sẽ đi sâu vào các kỹ thuật phân tích cốt lõi như Hồi quy, Phân khúc khách hàng, và Kiểm định A/B để tìm ra câu trả lời cho các bài toán kinh doanh hóc búa.' }] }
        ]
    };

    const chap4_intro = {
        _id: 'chap4-intro',
        title: 'Dẫn nhập Chương 4: Tầm nhìn C-Level',
        slug: { current: 'chap4-intro' },
        readingTime: 3,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Vượt lên trên những con số' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Làm thợ thì dễ, làm thầy mới khó. Để vươn lên vị trí C-Level (Giám đốc), bạn không thể cứ cắm mặt vào máy tính chạy mô hình mãi được. Bạn cần hiểu về bức tranh lớn hơn: Chiến lược công ty, Xu hướng công nghệ (AI), và Quản trị con người.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Chương cuối này là những lời nhắn nhủ tâm huyết nhất của tôi dành cho thế hệ lãnh đạo kế cận, những người sẽ cầm lái con thuyền doanh nghiệp trong tương lai.' }] }
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
