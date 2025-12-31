import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import { batch1 } from './blog_posts_1'
import { batch2 } from './blog_posts_2'
import { batch3 } from './blog_posts_3'
import { batch4 } from './blog_posts_4'
import { batch5 } from './blog_posts_5'
import { batch6 } from './blog_posts_6'
import { series_a_1 } from './blog_posts_series_a_1'
import { series_a_2 } from './blog_posts_series_a_2'
import { series_b_1 } from './blog_posts_series_b_1'
import { series_b_2 } from './blog_posts_series_b_2'
import { series_c_1 } from './blog_posts_series_c_1'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const client = createClient({
    projectId: '58r14tlr',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN,
})

// ... (Categories and Authors definitions remain unchanged) ...
// Categories
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
    {
        _type: 'category',
        title: 'Mentorship & Career',
        slug: { current: 'mentorship-career' },
        description: 'Career advice and soft skills for students and young professionals.',
        color: '#db2777',
    },
    {
        _type: 'category',
        title: 'RTM Distribution',
        slug: { current: 'rtm-distribution' },
        description: 'Route-to-Market strategies and channel management mastery.',
        color: '#dc2626',
    },
    {
        _type: 'category',
        title: 'Strategic Leadership',
        slug: { current: 'strategic-leadership' },
        description: 'Insights for managers and business leaders.',
        color: '#be123c',
    },
]

// Authors
const authors = [
    {
        _type: 'author',
        name: 'Lê Phúc Hải',
        slug: { current: 'le-phuc-hai-vn' },
        role: 'National Business Development Director',
        bio: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'National Business Development Director with over 13 years of experience. Hybrid Scholar-Practitioner bridging academia and industry.',
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
        name: 'Le Phuc Hai',
        slug: { current: 'le-phuc-hai-en' },
        role: 'National Business Development Director',
        bio: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Expert in Strategic Leadership and Digital Transformation.',
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
        role: 'Tech & Strategy Enthusiast',
        bio: [
            {
                _type: 'block',
                children: [
                    {
                        _type: 'span',
                        text: 'Sharing practical insights on RTM, DMS and Academic Research.',
                    },
                ],
            },
        ],
        social: {
            linkedin: 'https://www.linkedin.com/in/lephuchai',
            website: 'https://lehai.edu.vn',
        },
    }
]

const posts = [
    ...batch1, ...batch2, ...batch3, ...batch4, ...batch5, ...batch6,
    ...series_a_1, ...series_a_2,
    ...series_b_1, ...series_b_2,
    ...series_c_1
];

async function importData() {
    try {
        console.log('🚀 Starting import of ' + posts.length + ' posts...')

        // 1. Delete all existing data
        console.log('🗑️ Clearing existing blog posts...')
        await client.delete({ query: '*[_type == "post"]' })

        // 2. Import Categories
        console.log('📚 Importing categories...')
        for (const category of categories) {
            const categoryId = `category-${category.slug.current}`
            await client.createOrReplace({ ...category, _id: categoryId })
        }

        // 3. Import Authors
        console.log('👤 Importing authors...')
        for (const author of authors) {
            const authorId = `author-${author.slug.current}`
            await client.createOrReplace({ ...author, _id: authorId })
        }

        // 4. Import Posts
        console.log('📝 Importing blog posts...')
        let count = 0;
        for (const post of posts) {
            count++;
            const randomAuthor = authors[Math.floor(Math.random() * authors.length)]
            const authorId = `author-${randomAuthor.slug.current}`
            const categoryId = `category-${post.categorySlug}`
            const docId = `post-${post.slug.current}`

            // Handle Image Upload
            let mainImage = undefined;
            // Check for 'coverImage' property in post object (will be added to ts files)
            if ((post as any).coverImage) {
                const imagePath = path.join(process.cwd(), 'public', (post as any).coverImage);
                if (fs.existsSync(imagePath)) {
                    console.log(`   Uploading image for ${post.title}...`);
                    try {
                        const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
                            filename: path.basename(imagePath)
                        });
                        mainImage = {
                            _type: 'image',
                            asset: {
                                _type: "reference",
                                _ref: imageAsset._id
                            }
                        };
                    } catch (err) {
                        console.error(`   Failed to upload image: ${err}`);
                    }
                }
            }

            const { categorySlug, coverImage, ...postData } = post as any;

            const postWithRefs = {
                ...postData,
                _type: 'post',
                categories: [{ _type: 'reference', _ref: categoryId }],
                author: { _type: 'reference', _ref: authorId },
                _id: docId,
                mainImage: mainImage // Assign the uploaded image
            }

            await client.createOrReplace(postWithRefs)
            console.log(`✅ [${count}/${posts.length}] Created: ${post.title}`)
        }

        console.log('🎉 Import completed successfully!')
    } catch (error) {
        console.error('❌ Error during import:', error)
    }
}

importData()
