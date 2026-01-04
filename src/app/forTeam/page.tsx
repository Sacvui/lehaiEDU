
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
            _id: 'manual-foreword',
            title: 'Lời Mở Đầu: Gửi những người em, những người đồng đội',
            slug: { current: 'loi-noi-dau' },
            readingTime: 6,
            body: [
                {
                    _type: 'block',
                    style: 'normal',
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
                    children: [{ _type: 'span', text: '15 năm trước, tôi cũng là một chàng sinh viên mới ra trường, đầy nhiệt huyết nhưng cũng đầy hoang mang. Tôi đã từng bị từ chối, từng thất bại, từng làm sai báo cáo và bị sếp mắng đến mức muốn bỏ nghề. Những đêm thức trắng làm thầu, những chuyến công tác tỉnh xa nhà hàng tháng trời... tất cả những "vết sẹo" đó đã hun đúc nên tôi của ngày hôm nay.' }]
                },
                {
                    _type: 'block',
                    style: 'blockquote',
                    children: [{ _type: 'span', text: '"Thành công không phải là đích đến, mà là những bài học chúng ta nhặt được trên đường đi."' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Cuốn sách nhỏ này không phải là giáo trình. Nó không chứa đựng những lý thuyết đao to búa lớn. Nó là tập hợp những ghi chép chân thực nhất, những "bí kíp" sinh tồn mà tôi ước gì có ai đó đã nói cho tôi nghe khi tôi 20 tuổi.\n\nTôi cùng đội ngũ biên tập đã dành rất nhiều tâm huyết để hệ thống hóa nó lại, không phải để dạy đời, mà để **chia sẻ**. Để các bạn không phải mất 10 năm dò đường như tôi. Để các bạn có thể đi nhanh hơn, vững vàng hơn.\n\nHãy coi đây là món quà tôi dành tặng cho Team. Đừng đọc nó như sách giáo khoa. Hãy đọc nó như đang ngồi cà phê với tôi, nghe tôi kể chuyện nghề.\n\nMong rằng các bạn sẽ tìm thấy chính mình đâu đó trong những trang sách này.' }]
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
            title: 'Người Đồng Hành Cùng Bạn',
            slug: { current: 'gioi-thieu-tac-gia' },
            readingTime: 4,
            body: [
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: '1. Lê Phúc Hải - Người kể chuyện Data' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Nhiều người biết đến tôi qua các chức danh hào nhoáng: Giám đốc Phát triển Kinh doanh Quốc gia, Quản lý Thương mại Cấp cao... Nhưng sâu thẳm, tôi chỉ xem mình là một người đam mê giải quyết vấn đề.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Từ những ngày đầu làm kỹ thuật tại FPT Software, tôi đã luôn trăn trở: "Làm sao để công nghệ thực sự phục vụ con người, chứ không phải làm khổ con người?". Câu hỏi đó đã dẫn dắt tôi đi qua Coca-Cola, Mondelez, Japfa, Nova Group... Ở mỗi nơi, tôi đều học được những bài học vô giá về Con người và Hệ thống.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Hiện tại, bên cạnh công việc điều hành, tôi dành phần lớn thời gian cho đam mê lớn nhất: **Giáo dục**. Tại giảng đường ĐH Tôn Đức Thắng và ĐH FPT, tôi không dạy sinh viên học thuộc lòng. Tôi dạy các bạn tư duy phản biện, dạy cách đối mặt với thất bại và khát khao vươn lên.' }]
                },
                {
                    _type: 'block',
                    style: 'h2',
                    children: [{ _type: 'span', text: '2. TS. Carmen Châu - Người bảo chứng Khoa học' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Đồng hành cùng tôi trong dự án này là Tiến sĩ Carmen Châu. Cô không chỉ là một nhà nghiên cứu hàn lâm sắc sảo, mà còn là một "chiến binh" Sales & Marketing thực thụ.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Carmen đã từng tự mình gây dựng doanh số tăng trưởng 1200% cho OKXE, từng lăn lộn với các dự án Activation cho Aeon Mall, Guardian. Cô hiểu rõ áp lực của KPI, của doanh số.' }]
                },
                {
                    _type: 'block',
                    style: 'normal',
                    children: [{ _type: 'span', text: 'Sự kết hợp giữa tư duy thực chiến của tôi và sự chặt chẽ khoa học của Carmen chính là linh hồn của cuốn sách này. Chúng tôi muốn mang đến cho các bạn những kiến thức vừa sâu sắc về mặt học thuật, vừa sát sườn với thực tế doanh nghiệp.' }]
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
