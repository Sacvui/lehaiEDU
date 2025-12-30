import { createClient } from '@sanity/client'

const client = createClient({
    projectId: '58r14tlr',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN, // You'll need to add this
})

// Sample data
const categories = [
    {
        _type: 'category',
        title: 'Digital Transformation',
        slug: { current: 'digital-transformation' },
        description: 'Strategies and insights for enterprise digital transformation',
        color: '#d97706',
    },
    {
        _type: 'category',
        title: 'Research & Innovation',
        slug: { current: 'research-innovation' },
        description: 'Academic research, methodologies, and innovation insights',
        color: '#0891b2',
    },
    {
        _type: 'category',
        title: 'Enterprise Strategy',
        slug: { current: 'enterprise-strategy' },
        description: 'Business strategy, leadership, and organizational transformation',
        color: '#ea580c',
    },
    {
        _type: 'category',
        title: 'AI & Technology',
        slug: { current: 'ai-technology' },
        description: 'Artificial intelligence, blockchain, and emerging technologies',
        color: '#8b5cf6',
    },
    {
        _type: 'category',
        title: 'Case Studies',
        slug: { current: 'case-studies' },
        description: 'Real-world implementation stories and lessons learned',
        color: '#059669',
    },
]

const authors = [
    {
        _type: 'author',
        name: 'Le Phuc Hai',
        slug: { current: 'le-phuc-hai' },
        role: 'PhD Researcher & Digital Transformation Expert',
        bio: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'PhD Researcher specializing in digital transformation and enterprise innovation. Over 10 years of experience consulting with Vietnamese and international enterprises. Founder of NCSKIT and AMMEDTECH.',
                    },
                ],
            },
        ],
        social: {
            linkedin: 'https://www.linkedin.com/in/lephuchai',
            website: 'https://lehai.edu.vn',
        },
    },
    {
        _type: 'author',
        name: 'HaiLP',
        slug: { current: 'hailp' },
        role: 'Enterprise Consultant',
        bio: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Enterprise consultant with deep expertise in organizational transformation and strategic planning.',
                    },
                ],
            },
        ],
        social: {
            linkedin: 'https://www.linkedin.com/in/lephuchai',
            website: 'https://lehai.edu.vn',
        },
    },
    {
        _type: 'author',
        name: 'Lê Phúc Hải',
        slug: { current: 'le-phuc-hai-vn' },
        role: 'Researcher & Speaker',
        bio: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Passionate about bridging the gap between academic research and practical business applications.',
                    },
                ],
            },
        ],
        social: {
            linkedin: 'https://www.linkedin.com/in/lephuchai',
            website: 'https://lehai.edu.vn',
        },
    },
]

const posts = [
    {
        _type: 'post',
        title: 'Digital Transformation: Không Phải Chuyện "Sang Chảnh" Mà Là Sống Còn',
        slug: { current: 'digital-transformation-khong-phai-sang-chanh' },
        excerpt:
            'Nhiều doanh nghiệp vẫn nghĩ chuyển đổi số là chuyện của "người khác". Nhưng thực tế, đây không còn là lựa chọn mà là yêu cầu bắt buộc để tồn tại trong thời đại này.',
        publishedAt: new Date('2024-12-15').toISOString(),
        featured: true,
        readingTime: 8,
        tags: ['digital transformation', 'SME', 'Vietnam', 'strategy'],
        body: [
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Chuyển Đổi Số - Câu Chuyện Không Còn Xa Lạ' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Hồi còn làm tư vấn cho một doanh nghiệp phân phối ở Sài Gòn, tôi được nghe câu: "Anh ơi, công ty mình bán hàng truyền thống mấy chục năm rồi, chuyển đổi số làm gì cho mệt?" 😅',
                    },
                ],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Hai năm sau, khi Covid ập đến, chính vị sếp đó gọi điện lúc 11h đêm: "Anh Hai ơi, giờ làm sao bây giờ? Khách hàng không ra đường được, nhân viên làm việc từ xa không biết quản lý thế nào..."',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Vậy Chuyển Đổi Số Là Gì?' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Đơn giản thôi: Chuyển đổi số không phải là mua một đống phần mềm đắt tiền rồi bắt nhân viên dùng. Nó là việc thay đổi cách bạn làm việc, phục vụ khách hàng, và điều hành doanh nghiệp bằng công nghệ.',
                    },
                ],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Ví dụ thực tế: Thay vì nhân viên sale ghi chép đơn hàng bằng tay, gửi email cho kho, rồi kho gọi điện xác nhận → Giờ họ dùng app, khách đặt hàng trực tiếp, kho nhận thông báo real-time, ship hàng ngay. Đơn giản, nhanh, ít lỗi.',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '5 Bước Bắt Đầu (Không Cần Ngân Sách Khủng)' }],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: '1. Đánh Giá Thực Trạng' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Ngồi xuống, liệt kê những việc đang làm thủ công, mất thời gian, hay sai sót nhiều. Đó chính là điểm bắt đầu.',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: '2. Bắt Đầu Từ "Quick Wins"' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Chọn 1-2 việc đơn giản để số hóa trước. Ví dụ: Dùng Google Sheets thay vì Excel offline, dùng Trello để quản lý công việc. Miễn phí mà hiệu quả!',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: '3. Đầu Tư Vào Con Người' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Công nghệ chỉ là công cụ. Nếu nhân viên không biết dùng hoặc không muốn dùng, mua phần mềm đắt tiền cũng vô ích. Đào tạo là chìa khóa!',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: '4. Chọn Công Nghệ Phù Hợp' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Đừng nghe sales nói gì cũng tin. Hỏi bạn bè, tìm hiểu review, thử nghiệm trước khi quyết định. Nhiều giải pháp có bản free hoặc trial 30 ngày.',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: '5. Đo Lường & Cải Tiến' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Sau 3-6 tháng, nhìn lại xem có cải thiện gì không. Tiết kiệm được bao nhiêu thời gian? Giảm được bao nhiêu lỗi? Doanh thu có tăng không?',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Câu Chuyện Thành Công Thực Tế' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Một khách hàng của tôi - công ty phân phối dược phẩm - bắt đầu từ việc số hóa quản lý kho. Sau 1 năm:',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: '40% tăng hiệu suất vận hành' }],
            },
            {
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: '60% giảm lỗi nhập liệu' }],
            },
            {
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: '2x tăng trưởng khách hàng' }],
            },
            {
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: '30% tiết kiệm chi phí vận hành' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Và quan trọng nhất: Họ sống sót qua Covid trong khi nhiều đối thủ phải đóng cửa.',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Kết Luận' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Chuyển đổi số không phải chuyện "một sớm một chiều". Nó là hành trình. Bắt đầu nhỏ, học hỏi liên tục, và điều chỉnh theo đường đi.',
                    },
                ],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Và nhớ: Công nghệ chỉ là công cụ. Yếu tố con người và chiến lược mới là chìa khóa thành công! 🚀',
                    },
                ],
            },
        ],
        seo: {
            metaTitle: 'Chuyển Đổi Số Cho Doanh Nghiệp Việt: Hướng Dẫn Thực Chiến | Le Phuc Hai',
            metaDescription:
                'Hướng dẫn chi tiết về chuyển đổi số cho doanh nghiệp Việt. Từ kinh nghiệm 10+ năm tư vấn. Tăng hiệu suất 40%, giảm chi phí 30%.',
            keywords: ['chuyển đổi số', 'digital transformation', 'doanh nghiệp Việt', 'SME'],
        },
    },
    {
        _type: 'post',
        title: 'AI Trong Doanh Nghiệp: Đừng Tin Hype, Hãy Làm Thực Tế',
        slug: { current: 'ai-trong-doanh-nghiep-thuc-te' },
        excerpt:
            'AI đang hot, nhưng 80% dự án AI thất bại. Vậy làm sao để triển khai AI đúng cách? Chia sẻ từ kinh nghiệm thực chiến.',
        publishedAt: new Date('2024-12-20').toISOString(),
        featured: true,
        readingTime: 7,
        tags: ['AI', 'artificial intelligence', 'enterprise', 'implementation'],
        body: [
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'AI - Từ Buzzword Đến Reality Check' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Tuần trước có một CEO hỏi tôi: "Anh Hải ơi, công ty em cần AI không? Giờ ai cũng nói AI, em sợ bị tụt hậu." 😄',
                    },
                ],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Câu trả lời của tôi: "Anh cần giải quyết vấn đề gì trước? AI là công cụ, không phải mục tiêu."',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'AI Thực Sự Là Gì?' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Quên mấy cái phim Hollywood đi. AI trong doanh nghiệp đơn giản là: Máy tính học từ dữ liệu để đưa ra quyết định hoặc dự đoán.',
                    },
                ],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Ví dụ thực tế:',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Chatbot trả lời khách hàng 24/7' }],
            },
            {
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Dự đoán nhu cầu hàng hóa để tránh hết hàng' }],
            },
            {
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Phát hiện gian lận trong giao dịch' }],
            },
            {
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Tự động phân loại email, hóa đơn' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Tại Sao 80% Dự Án AI Thất Bại?' }],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: '1. Không Có Dữ Liệu Chất Lượng' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'AI cần dữ liệu như người cần ăn. Nếu dữ liệu của bạn lộn xộn, sai sót, thiếu thốn → AI sẽ cho ra kết quả tệ.',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: '2. Kỳ Vọng Không Thực Tế' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'AI không phải phép màu. Nó không thể giải quyết mọi vấn đề. Nhiều người mua AI như mua "thuốc tiên" rồi thất vọng.',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: '3. Thiếu Chuyên Gia' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Triển khai AI cần người hiểu cả business lẫn technology. Không phải thuê một data scientist là xong.',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Roadmap Triển Khai AI Đúng Cách' }],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Bước 1: Xác Định Vấn Đề Cụ Thể' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Đừng nói "em muốn dùng AI". Hãy nói "em muốn giảm 50% thời gian xử lý đơn hàng" hoặc "em muốn dự đoán khách hàng sắp rời bỏ".',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Bước 2: Chuẩn Bị Dữ Liệu' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Thu thập, làm sạch, tổ chức dữ liệu. Đây là bước tốn thời gian nhất (60-70% effort) nhưng quan trọng nhất.',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Bước 3: Pilot (Thử Nghiệm Nhỏ)' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Đừng triển khai toàn công ty ngay. Chọn 1 bộ phận, 1 quy trình để test. Học hỏi, điều chỉnh.',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h3',
                children: [{ _type: 'span', text: 'Bước 4: Đo Lường ROI' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Sau 3-6 tháng, đánh giá: Tiết kiệm được bao nhiêu? Tăng doanh thu bao nhiêu? Có đáng để mở rộng không?',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Case Study: AI Trong Y Tế' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Tại AMMEDTECH, chúng tôi triển khai AI để phân tích hình ảnh y khoa. Kết quả:',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: '70% giảm thời gian chẩn đoán' }],
            },
            {
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: '95% độ chính xác (ngang bác sĩ giàu kinh nghiệm)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                listItem: 'bullet',
                children: [{ _type: 'span', text: 'Bác sĩ có thêm thời gian chăm sóc bệnh nhân' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Nhưng phải mất 18 tháng chuẩn bị dữ liệu và 6 tháng pilot mới đạt được kết quả này!',
                    },
                ],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Lời Khuyên Cuối Cùng' }],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'AI là tương lai, nhưng đừng vội vàng. Hãy bắt đầu từ những vấn đề cụ thể, có dữ liệu tốt, và kiên nhẫn.',
                    },
                ],
            },
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Và nhớ: AI không thay thế con người, mà giúp con người làm việc thông minh hơn! 🤖✨',
                    },
                ],
            },
        ],
        seo: {
            metaTitle: 'Triển Khai AI Trong Doanh Nghiệp: Hướng Dẫn Thực Chiến | HaiLP',
            metaDescription:
                'Cách triển khai AI đúng cách trong doanh nghiệp. Tránh 80% thất bại. Case study thực tế từ y tế, phân phối.',
            keywords: ['AI doanh nghiệp', 'triển khai AI', 'artificial intelligence', 'AI implementation'],
        },
    },
    // Add more posts here...
]

async function importData() {
    try {
        console.log('🚀 Starting import...')

        // Import categories
        console.log('📚 Importing categories...')
        for (const category of categories) {
            await client.create(category)
            console.log(`✅ Created category: ${category.title}`)
        }

        // Import authors
        console.log('👤 Importing authors...')
        for (const author of authors) {
            await client.create(author)
            console.log(`✅ Created author: ${author.name}`)
        }

        // Get category and author IDs
        const createdCategories = await client.fetch('*[_type == "category"]')
        const createdAuthors = await client.fetch('*[_type == "author"]')

        // Import posts with references
        console.log('📝 Importing blog posts...')
        for (const post of posts) {
            // Find matching category
            const categoryRef = createdCategories.find((c: any) =>
                post.title.includes('Digital Transformation')
                    ? c.slug.current === 'digital-transformation'
                    : c.slug.current === 'ai-technology'
            )

            // Random author
            const authorRef = createdAuthors[Math.floor(Math.random() * createdAuthors.length)]

            const postWithRefs = {
                ...post,
                categories: categoryRef ? [{ _type: 'reference', _ref: categoryRef._id }] : [],
                author: { _type: 'reference', _ref: authorRef._id },
            }

            await client.create(postWithRefs)
            console.log(`✅ Created post: ${post.title}`)
        }

        console.log('🎉 Import completed successfully!')
    } catch (error) {
        console.error('❌ Error during import:', error)
    }
}

importData()
