
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

// import { Merriweather } from 'next/font/google';

// const merriweather = Merriweather({
//     subsets: ['vietnamese'],
//     weight: ['300', '400', '700', '900'],
//     display: 'swap',
// });

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
            _id: 'manual-foreword',
            title: 'Lời Mở Đầu: Gửi những người em, những người đồng đội',
            slug: { current: 'loi-noi-dau' },
            readingTime: 6,
            body: [
                {
                    _type: 'block',
                    style: 'h3',
                    children: [{ _type: 'span', text: 'Chào các bạn,' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Tôi viết những dòng này không phải với tư cách một người Sếp, một Giám đốc hay một Tiến sĩ. Tôi viết với tâm thế của một người anh đi trước, người đã từng chật vật tìm đường giống như các bạn bây giờ.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '15 năm, một chặng đường không quá dài nhưng đủ để nếm trải đủ vị ngọt bùi cay đắng. Từ một chàng sinh viên thực tập (Intern) ngáo ngơ, bị mắng xối xả vì file Excel lỗi, cho đến khi ngồi ở vị trí điều hành chiến lược. Cuốn sách này chính là cuốn nhật ký ghi lại hành trình đó, được sắp xếp lại theo **trục thời gian** phát triển của một đời người đi làm.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Tôi muốn các bạn hình dung sự nghiệp như một dòng chảy liên tục. Chúng ta sẽ đi từ việc "Xây nền" (Tư duy), đến "Mài rìu" (Công cụ), rồi mới bước ra "Chiến trường" (Quản trị) và cuối cùng là nhìn về "Bầu trời" (Tương lai).' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Mong rằng các bạn sẽ tìm thấy chính mình đâu đó trong từng giai đoạn của cuốn sách này.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Thân mến,\nAnh Hải.' }]
                }
            ]
        },
        {
            _id: 'manual-authors',
            title: 'Đội Ngũ Tác Giả & Biên Tập',
            slug: { current: 'gioi-thieu-tac-gia' },
            readingTime: 4,
            body: [
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: '1. Tác giả nội dung: Lê Phúc Hải (Mr.)' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Toàn bộ nội dung, câu chuyện và các đúc kết thực chiến trong cuốn sách này đều được viết trực tiếp bởi anh Lê Phúc Hải.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: '"Tôi không thuê người viết hộ (Ghostwriter) vì tôi tin rằng chỉ có người trong cuộc mới kể được câu chuyện của chính mình một cách trung thực nhất."' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Anh Hải hiện là Giám đốc Phát triển Kinh doanh Quốc gia và là Giảng viên Doanh nhân tại nhiều trường đại học. Phong cách viết của anh thiên về kể chuyện (Storytelling), dùng những ví dụ đời thường để giải thích các khái niệm quản trị phức tạp.' }]
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: '2. Hiệu đính & Bảo chứng khoa học: TS. Carmen Châu (Ms.)' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Để đảm bảo cuốn sách không chỉ dừng lại ở kinh nghiệm cá nhân chủ quan, Tiến sĩ Carmen Châu (Nguyễn Lê Thị Ngọc Châu) đảm nhận vai trò Cố vấn Khoa học.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Cô chịu trách nhiệm rà soát toàn bộ các mô hình lý thuyết, đối chiếu với các nghiên cứu học thuật chuẩn mực, đảm bảo rằng những gì được viết ra đều có cơ sở khoa học (Evidence-based Management).' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'TS. Carmen Châu có hơn 10 năm kinh nghiệm trong lĩnh vực Marketing & Sales, từng giữ các vị trí quản lý nòng cốt tại OKXE và CommerceX, mang đến góc nhìn cân bằng giữa Học thuật và Thực tế.' }]
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
            title: 'Chặng 1: Xây Dựng Nền Tảng (0-2 năm)',
            posts: dedup(part1_mindset).slice(0, 15)
        },
        {
            id: 'part2',
            title: 'Chặng 2: Trang Bị Vũ Khí Dữ Liệu (2-5 năm)',
            posts: dedup(part2_skills)
        },
        {
            id: 'part3',
            title: 'Chặng 3: Tư Duy Quản Trị Chiến Lược (5-10 năm)',
            posts: dedup(part3_business)
        },
        {
            id: 'part4',
            title: 'Chặng 4: Tầm Nhìn Lãnh Đạo & Công Nghệ (10+ năm)',
            posts: dedup(part4_future)
        }
    ];

    return (
        <BookReader chapters={chapters} fontClass={""} />
    );
}
