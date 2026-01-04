
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
    // Editorial Note: These intros serve as the 'glue' (Narrative Bridge)

    const chap1_intro = {
        _id: 'chap1-intro',
        title: 'Lời dẫn Chương 1: Đừng bắt đầu bằng Dữ liệu',
        slug: { current: 'chap1-intro' },
        readingTime: 4,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Tư duy đi trước, Công cụ theo sau' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Sai lầm kinh điển của người làm dữ liệu non trẻ là nôn nóng muốn nhảy vào "chạy tool" ngay. Nhưng Dữ liệu (Data) chỉ là nguyên liệu. Tư duy (Mindset) mới là công thức nấu ăn.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Để tránh việc tạo ra những báo cáo "rác" (Garbage In, Garbage Out), chương này sẽ giúp bạn set-up lại bộ não:' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '1. **NCS101 - Bài 1 & 2:** Chúng ta học cách tìm vấn đề. Một câu hỏi nghiên cứu (Research Question) tồi sẽ dẫn đến toàn bộ dự án vứt đi.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '2. **NCS101 - Bài 3:** Học kỹ năng đọc tài liệu (Literature Review). Đừng phát minh lại cái bánh xe, hãy xem thế giới họ đã làm gì.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '3. **NCS101 - Bài 10:** Cái tâm của người làm nghiên cứu (Ethics). Trung thực với số liệu là yêu cầu tối thượng.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Giữ cái đầu lạnh, và bắt đầu thôi.' }] }
        ]
    };

    const chap2_intro = {
        _id: 'chap2-intro',
        title: 'Lời dẫn Chương 2: Làm chủ Vũ khí',
        slug: { current: 'chap2-intro' },
        readingTime: 4,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Excel là không đủ.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Khi bài toán trở nên phức tạp, bạn cần những vũ khí hạng nặng hơn. Đừng lo lắng nếu bạn chưa từng code. R và Python sinh ra là để phục vụ phân tích, không phải để làm khó bạn.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Lộ trình trang bị vũ khí của chúng ta như sau:' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '1. **Nhập môn (R101/Python101 - Bài 1):** Cài đặt môi trường. Vượt qua nỗi sợ "màn hình đen".' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '2. **Làm sạch (Bài 2):** 80% thời gian của bạn sẽ dành cho việc "dọn rác" dữ liệu. Hãy học cách làm nó thật nhanh.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '3. **Trực quan hóa (Bài 3):** Biến con số thành hình ảnh biết nói. Sếp của bạn không có thời gian đọc bảng số liệu đâu.' }] }
        ]
    };

    const chap3_intro = {
        _id: 'chap3-intro',
        title: 'Lời dẫn Chương 3: Phân tích & Ra quyết định',
        slug: { current: 'chap3-intro' },
        readingTime: 4,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Để số liệu kể chuyện' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Đây là phần "thịt" của cuốn sách. Chúng ta sẽ áp dụng Tư duy (Chương 1) và Công cụ (Chương 2) để giải quyết các bài toán Business cụ thể.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '- Muốn biết yếu tố nào tác động đến Doanh thu? -> Đọc bài **Hồi quy (Regression)**.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '- Muốn biết khách hàng của mình là ai? -> Đọc bài **Phân khúc (Clustering)**.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '- Muốn biết chiến dịch A hay B tốt hơn? -> Đọc bài **Kiểm định giả thuyết (Hypothesis Testing)**.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Đừng học vẹt công thức. Hãy hiểu ý nghĩa kinh doanh đằng sau mỗi con số p-value.' }] }
        ]
    };

    const chap4_intro = {
        _id: 'chap4-intro',
        title: 'Lời dẫn Chương 4: Tầm nhìn Lãnh đạo',
        slug: { current: 'chap4-intro' },
        readingTime: 4,
        body: [
            { _type: 'block', style: 'h3', children: [{ _type: 'span', text: 'Từ Specialist đến Strategist' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Bạn đã giỏi chuyên môn, tốt. Nhưng để ngồi vào ghế C-Level, bạn cần thoát khỏi cái hố sâu của chuyên môn hẹp.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Chương cuối này là những cuộc thảo luận về bức tranh lớn:' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '- **BI vs AI:** Công nghệ đang thay đổi cuộc chơi như thế nào? Bạn sẽ điều khiển AI hay để AI thay thế bạn?' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: '- **Project Next:** Tương lai của ngành dữ liệu và con đường sự nghiệp của bạn.' }] },
            { _type: 'block', style: 'normal', children: [{ _type: 'span', text: 'Khép lại cuốn sách, nhưng mở ra sự nghiệp của bạn.' }] }
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
