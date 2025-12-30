import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import path from 'path'

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const client = createClient({
    projectId: '58r14tlr',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN, // Ensure this is set in your environment or replace temporarily
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
    {
        _type: 'category',
        title: 'Academic Corner',
        slug: { current: 'academic-corner' },
        description: 'Guidance for PhD candidates, researchers, and academic writing.',
        color: '#6366f1',
    },
    {
        _type: 'category',
        title: 'Logistics & Supply Chain',
        slug: { current: 'logistics-supply-chain' },
        description: 'Optimizing flow of goods and information in global markets',
        color: '#3b82f6',
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
]

const posts = [
    // --- Existing Posts Updated ---
    {
        _type: 'post',
        title: 'Chuyển Đổi Số: Tư Duy Chiến Lược Cho Doanh Nghiệp Việt',
        slug: { current: 'chuyen-doi-so-tu-duy-chien-luoc' },
        categorySlug: 'digital-transformation',
        excerpt:
            'Chuyển đổi số không chỉ là áp dụng công nghệ, mà là sự thay đổi toàn diện về tư duy, văn hóa và quy trình vận hành. Bài viết phân tích sâu về lộ trình phù hợp cho doanh nghiệp Việt.',
        publishedAt: new Date('2024-12-15').toISOString(),
        featured: true,
        readingTime: 10,
        tags: ['digital transformation', 'strategy', 'leadership', 'SME'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Nội dung chi tiết về chuyển đổi số...' }] }],
    },
    {
        _type: 'post',
        title: 'Triển Khai AI: Từ Hype Đến Hiệu Quả Thực Tế',
        slug: { current: 'trien-khai-ai-hieu-qua-thuc-te' },
        categorySlug: 'ai-technology',
        excerpt:
            'Gạt bỏ những lời đồn thổi (hype), bài viết này đi sâu vào cách ứng dụng AI thực dụng nhất để giải quyết các bài toán cụ thể về vận hành và tối ưu chi phí.',
        publishedAt: new Date('2024-12-20').toISOString(),
        featured: true,
        readingTime: 8,
        tags: ['artificial intelligence', 'AI implementation', 'cost optimization'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Nội dung chi tiết về AI thực chiến...' }] }],
    },
    {
        _type: 'post',
        title: 'Leadership 4.0: Lãnh Đạo Trong Kỷ Nguyên Bất Định',
        slug: { current: 'leadership-4-0-ky-nguyen-bat-dinh' },
        categorySlug: 'enterprise-strategy',
        excerpt:
            'Trong kỷ nguyên VUCA (Biến động, Bất định, Phức tạp, Mơ hồ), phong cách lãnh đạo mệnh lệnh truyền thống đã lỗi thời. Leadership 4.0 đòi hỏi khả năng thích ứng và trao quyền.',
        publishedAt: new Date('2024-12-28').toISOString(),
        featured: false,
        readingTime: 6,
        tags: ['leadership', 'management', 'future of work', 'culture'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Nội dung chi tiết về Leadership 4.0...' }] }],
    },
    // --- New Posts ---
    {
        _type: 'post',
        title: 'Supply Chain Resilience: Lessons from Global Disruptions',
        slug: { current: 'supply-chain-resilience-lessons' },
        categorySlug: 'logistics-supply-chain',
        excerpt: 'Analyzing how recent global events have reshaped supply chain strategies from "Just-in-Time" to "Just-in-Case".',
        publishedAt: new Date('2024-11-10').toISOString(),
        featured: false,
        readingTime: 7,
        tags: ['supply chain', 'logistics', 'resilience', 'global trade'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Content about supply chain resilience...' }] }],
    },
    {
        _type: 'post',
        title: 'The Role of Big Data in Modern Retail',
        slug: { current: 'role-of-big-data-modern-retail' },
        categorySlug: 'digital-transformation',
        excerpt: 'How retailers are using big data analytics to personalize customer experiences and optimize inventory management.',
        publishedAt: new Date('2024-11-25').toISOString(),
        featured: false,
        readingTime: 5,
        tags: ['retail', 'big data', 'analytics', 'customer experience'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Content about big data in retail...' }] }],
    },
    {
        _type: 'post',
        title: 'Innovation Ecosystems: Building Bridges Between Academia and Industry',
        slug: { current: 'innovation-ecosystems-academia-industry' },
        categorySlug: 'research-innovation',
        excerpt: 'Why collaboration between universities and corporations is the engine of national innovation, with a focus on Vietnam context.',
        publishedAt: new Date('2024-10-15').toISOString(),
        featured: true,
        readingTime: 9,
        tags: ['innovation', 'academia', 'industry', 'collaboration'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Content about innovation ecosystems...' }] }],
    },
    {
        _type: 'post',
        title: 'Blockchain in Logistics: Beyond the Hype',
        slug: { current: 'blockchain-logistics-beyond-hype' },
        categorySlug: 'ai-technology',
        excerpt: 'Examining real-world use cases of blockchain for transparency and traceability in complex supply chains.',
        publishedAt: new Date('2024-12-05').toISOString(),
        featured: false,
        readingTime: 6,
        tags: ['blockchain', 'logistics', 'technology'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Content about blockchain in logistics...' }] }],
    },
    {
        _type: 'post',
        title: 'Cultural Barriers to Digital Transformation',
        slug: { current: 'cultural-barriers-digital-transformation' },
        categorySlug: 'enterprise-strategy',
        excerpt: 'Why 70% of digital transformations fail, and how cultural resistance is often the silent killer of innovation projects.',
        publishedAt: new Date('2024-11-01').toISOString(),
        featured: true,
        readingTime: 8,
        tags: ['culture', 'change management', 'strategy'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Content about cultural barriers...' }] }],
    },
    {
        _type: 'post',
        title: 'Green Logistics: Sustainability as a Competitive Advantage',
        slug: { current: 'green-logistics-sustainability' },
        categorySlug: 'logistics-supply-chain',
        excerpt: 'How sustainable practices in logistics are moving from a compliance requirement to a core competitive differentiator.',
        publishedAt: new Date('2024-12-12').toISOString(),
        featured: false,
        readingTime: 5,
        tags: ['sustainability', 'green logistics', 'esg'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Content about green logistics...' }] }],
    },
    {
        _type: 'post',
        title: 'The Future of Work: Hybrid Models and Digital Nomads',
        slug: { current: 'future-of-work-hybrid-models' },
        categorySlug: 'case-studies',
        excerpt: 'Case studies of Vietnamese companies successfully adapting to hybrid work models post-pandemic.',
        publishedAt: new Date('2024-10-30').toISOString(),
        featured: false,
        readingTime: 6,
        tags: ['future of work', 'remote work', 'case study', 'hr'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Content about hybrid work...' }] }],
    },
    {
        _type: 'post',
        title: 'Data Privacy in the Age of AI',
        slug: { current: 'data-privacy-age-of-ai' },
        categorySlug: 'ai-technology',
        excerpt: 'Navigating the complex landscape of data privacy regulations while leveraging the power of Artificial Intelligence.',
        publishedAt: new Date('2024-12-25').toISOString(),
        featured: false,
        readingTime: 7,
        tags: ['privacy', 'ai', 'ethics', 'regulation'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Content about data privacy...' }] }],
    },
    {
        _type: 'post',
        title: 'KPIs for Digital Era: Measuring What Matters',
        slug: { current: 'kpis-digital-era' },
        categorySlug: 'enterprise-strategy',
        excerpt: 'Traditional financial KPIs are not enough. Introducing new metrics for measuring digital engagement and innovation velocity.',
        publishedAt: new Date('2024-11-18').toISOString(),
        featured: false,
        readingTime: 6,
        tags: ['kpi', 'measurement', 'performance', 'strategy'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Content about digital KPIs...' }] }],
    },
    // --- Academic Posts ---
    {
        _type: 'post',
        title: 'How to Conduct a Systematic Literature Review with AI',
        slug: { current: 'systematic-literature-review-ai' },
        categorySlug: 'academic-corner',
        excerpt: 'Stop drowning in papers. Learn how to use RAG-based AI tools to synthesize hundreds of citations in minutes.',
        publishedAt: new Date('2025-01-05').toISOString(),
        featured: true,
        readingTime: 12,
        tags: ['research', 'ai', 'phd', 'methodology'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Detailed guide on AI for literature review...' }] }],
    },
    {
        _type: 'post',
        title: 'Navigating the Gap Between Academia and Industry',
        slug: { current: 'navigating-gap-academia-industry' },
        categorySlug: 'academic-corner',
        excerpt: 'Why "Scholar-Practitioners" are the future of business leadership, and how to balance both worlds effectively.',
        publishedAt: new Date('2025-01-02').toISOString(),
        featured: true,
        readingTime: 8,
        tags: ['career', 'academia', 'industry', 'leadership'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Insights on bridging the gap...' }] }],
    },
    {
        _type: 'post',
        title: 'Tips for Young Researchers: Publishing in Scopus/WoS',
        slug: { current: 'publishing-tips-scopus-wos' },
        categorySlug: 'academic-corner',
        excerpt: 'A practical roadmap from abstract submission to final acceptance in high-impact journals.',
        publishedAt: new Date('2024-12-29').toISOString(),
        featured: false,
        readingTime: 10,
        tags: ['publishing', 'research', 'scopus', 'wos'],
        body: [{ _type: 'block', children: [{ _type: 'span', text: 'Guide to academic publishing...' }] }],
    },
]

async function importData() {
    try {
        console.log('🚀 Starting updated import...')

        // Import categories
        console.log('📚 Importing categories...')
        for (const category of categories) {
            const docId = `category-${category.slug.current}`
            await client.createOrReplace({ ...category, _id: docId })
            console.log(`✅ Processed category: ${category.title}`)
        }

        // Import authors
        console.log('👤 Importing authors...')
        for (const author of authors) {
            const docId = `author-${author.slug.current}`
            await client.createOrReplace({ ...author, _id: docId })
            console.log(`✅ Processed author: ${author.name}`)
        }

        // Fetch to get IDs
        const createdCategories = await client.fetch('*[_type == "category"]')
        const createdAuthors = await client.fetch('*[_type == "author"]')
        const defaultAuthor = createdAuthors[0]

        // Import posts
        console.log('📝 Importing blog posts...')
        for (const post of posts) {
            // Find category ID based on helper property
            const categoryMatch = createdCategories.find((c: any) => c.slug.current === post.categorySlug)

            // Remove helper property before saving to Sanity
            const { categorySlug, ...postData } = post

            const postWithRefs = {
                ...postData,
                categories: categoryMatch ? [{ _type: 'reference', _ref: categoryMatch._id }] : [],
                author: { _type: 'reference', _ref: defaultAuthor._id },
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
