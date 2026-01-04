
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

    // MANUAL INTRO CONTENT (Simulated Posts)
    const introPosts = [
        {
            _id: 'manual-authors',
            title: 'Giới Thiệu Tác Giả',
            slug: { current: 'gioi-thieu-tac-gia' },
            readingTime: 4,
            body: [
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: '1. Tác giả chính: Lê Phúc Hải (Mr.)' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Strategic Leadership & Digital Transformation Expert' }]
                },
                {
                    _type: 'block',
                    style: 'blockquote',
                    children: [{ _type: 'span', text: '"Kinh nghiệm không phải là những gì bạn đã trải qua, mà là những gì bạn đúc kết được từ nó."' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Với hơn 13 năm lăn lộn trên "chiến trường" kinh doanh, từ vị trí ERP Consultant tại FPT Software đến các vị trí quản lý cấp cao (Sales Trainer, Commercial Excellence, Training Manager) tại những tập đoàn đa quốc gia hàng đầu như Coca-Cola, Mondelez Kinh Đô, Japfa Comfeed và Nova Group. Anh Hải sở hữu góc nhìn đa chiều: vừa am hiểu tường tận kỹ thuật hệ thống (DMS, ERP), vừa thấu hiểu sâu sắc tâm lý con người và nghệ thuật quản trị bán hàng.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Học vấn: Đang nghiên cứu Tiến sĩ Quản trị Kinh doanh (DBA) về "Green Marketing". Thạc sĩ QTKD (MBA).' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Giảng dạy: Giảng viên Doanh nhân tại ĐH Tôn Đức Thắng (Khoa Marketing) và ĐH FPT (Khoa QTKD), trực tiếp hướng dẫn sinh viên và Startup.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Dự án tiêu biểu: Triển khai DMS cho Pepsico, Trung Nguyên, BP Castrol; Xây dựng lộ trình đào tạo Sales Force cho Mondelez.' }]
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: '2. Trợ lý khoa học: TS. Carmen Châu (Ms.)' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Academic Advisor & Account Manager' }]
                },
                {
                    _type: 'block',
                    style: 'blockquote',
                    children: [{ _type: 'span', text: '"Dữ liệu biết nói, nếu chúng ta biết lắng nghe."' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Tiến sĩ Carmen Châu (Nguyễn Lê Thị Ngọc Châu) đóng vai trò là Cố vấn Khoa học, đảm bảo tính chính xác và chặt chẽ về mặt học thuật cho các mô hình quản trị trong cuốn sách này. Cô có hơn 10 năm kinh nghiệm thực chiến trong lĩnh vực Marketing, Sales và Quản lý Khách hàng (Account Management).' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Kinh nghiệm: Từng giữ vị trí Key Account Manager, Business Development Manager tại các công ty lớn như CommerceX, OKXE Vietnam (Tăng trưởng 1265% e-contracts), Kids Plaza.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Thế mạnh: Xây dựng chiến lược khách hàng trọng điểm (Key Accounts), Phân tích dữ liệu người dùng (Customer Insight) và Trade Marketing.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    listItem: 'bullet',
                    children: [{ _type: 'span', text: 'Vai trò: Phản biện khoa học, chuẩn hóa các khái niệm học thuật và xây dựng hệ thống case study thực tế.' }]
                }
            ]
        },
        {
            _id: 'manual-foreword',
            title: 'Lời Nói Đầu: Tại sao cuốn sách này ra đời?',
            slug: { current: 'loi-noi-dau' },
            readingTime: 5,
            body: [
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: 'Gửi đội ngũ kế thừa của Lehai Education,' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Cuốn sách bạn đang cầm trên tay (hoặc đang lướt trên màn hình) không phải là giáo trình đại học, càng không phải là tuyển tập những lời khuyên sáo rỗng thường thấy trên LinkedIn.\n\nĐây là những "vết sẹo".\n\nLà tổng hợp 15 năm lăn lộn của tôi từ một gã thực tập sinh (Intern) ngáo ngơ, bị sếp mắng xối xả vì không biết dùng Excel, cho đến khi ngồi vào ghế Giám đốc Điều hành (CEO/Director) của những tập đoàn nghìn tỷ.\n\nTôi viết nó không phải để khoe khoang. Tôi viết để các bạn - những người đi sau - không phải vấp lại những cái hố mà tôi đã từng ngã. Tôi muốn các bạn đi nhanh hơn tôi, xa hơn tôi.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Cuốn sách này chia làm 4 phần, tương ứng với 4 giai đoạn phát triển của một nhân sự cấp cao:\n\n1. Mindset (Tư duy): Sửa cái đầu trước khi sửa cái tay.\n2. Toolkit (Công cụ): Vũ khí của người làm Data & Research.\n3. Strategy (Chiến lược): Hiểu cuộc chơi kinh doanh.\n4. Future (Tương lai): Đón đầu công nghệ AI.' }]
                }
            ]
        },
        {
            _id: 'manual-preface',
            title: 'Lời Tựa: Hướng dẫn sử dụng "Vũ Khi"',
            slug: { current: 'loi-tua' },
            readingTime: 3,
            body: [
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Đừng đọc cuốn sách này một mạch từ đầu đến cuối.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Hãy coi nó là một cuốn từ điển, một hộp công cụ (Toolkit).\n\n- Khi bạn thấy mông lung về sự nghiệp? Hãy đọc Phần I.\n- Khi sếp bắt làm báo cáo phân tích dữ liệu? Hãy mở ngay Phần II.\n- Khi phải lập kế hoạch kinh doanh năm tới? Phần III là dành cho bạn.\n\nHãy đọc, ngẫm, và quan trọng nhất: THỰC HÀNH.\n\nChúc các bạn chân cứng đá mềm.\n\nLe Phuc Hai.' }]
                }
            ]
        }
    ];

    const chapters = [
        {
            id: 'intro',
            title: 'Phần Mở Đầu: Lời Tựa & Nhập Môn',
            posts: introPosts as any[]
        },
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
