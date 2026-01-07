import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import { batch1 } from './blog_posts_1.ts'
import { batch2 } from './blog_posts_2.ts'
import { batch3 } from './blog_posts_3.ts'
import { batch4 } from './blog_posts_4.ts'
import { batch5 } from './blog_posts_5.ts'
import { batch6 } from './blog_posts_6.ts'
import { series_a_1 } from './blog_posts_series_a_1.ts'
import { series_a_2 } from './blog_posts_series_a_2.ts'
import { series_b_1 } from './blog_posts_series_b_1.ts'
import { series_b_2 } from './blog_posts_series_b_2.ts'
import { series_c_1 } from './blog_posts_series_c_1.ts'
import { series_c_2 } from './blog_posts_series_c_2.ts'
import { dms_failure_post } from './blog_posts_dms_failure.ts';
import { dms_evolution_post } from './blog_posts_dms_evolution.ts';
import { r101_series } from './blog_posts_r101.ts';
import { python101_series } from './blog_posts_python101.ts';
import { book_intro } from './blog_posts_book.ts'
import { bi_ai_post } from './blog_posts_bi_ai.ts'
import { ncs_series_post } from './blog_posts_ncs_series.ts'
import { dms_post } from './blog_posts_dms.ts'

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
        title: 'Data Analysis',
        slug: { current: 'data-analysis' },
        description: 'Quantitative analysis, statistics, and data visualization using R and other tools.',
        color: '#4f46e5',
    },
    {
        _type: 'category',
        title: 'Strategic Leadership',
        slug: { current: 'strategic-leadership' },
        description: 'Insights for managers and business leaders.',
        color: '#be123c',
    },
    {
        _type: 'category',
        title: 'Book: Intern to CEO',
        slug: { current: 'book-intern-to-ceo' },
        description: 'Dự án sách 300 Bài Hát Thiếu Nhi: From Intern to CEO',
        color: '#f59e0b',
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
    ...series_c_1, ...series_c_2,
    ...book_intro,
    ...bi_ai_post,
    ...ncs_series_post,
    ...dms_post,
    ...dms_failure_post,
    ...dms_evolution_post,
    ...r101_series,
    ...python101_series
];

async function importData() {
    try {
        console.log('🚀 Starting import of ' + posts.length + ' posts...')

        // 1. Delete all existing data -> DISABLED FOR SAFETY
        // console.log('🗑️ Clearing existing blog posts...')
        // await client.delete({ query: '*[_type == "post"]' })

        // Filter posts if args provided
        const args = process.argv.slice(2);
        let postsToImport = posts;

        const slugArg = args.find(arg => arg.startsWith('--slug='));
        if (slugArg) {
            const slug = slugArg.split('=')[1];
            postsToImport = posts.filter(p => p.slug.current === slug);
            console.log(`🎯 Filtering: Only importing post with slug "${slug}"`);
        }

        console.log('📝 Importing ' + postsToImport.length + ' blog posts...')
        let count = 0;
        for (const post of postsToImport) {
            count++;
            const randomAuthor = authors[Math.floor(Math.random() * authors.length)]
            const authorId = `author-${randomAuthor.slug.current}`
            const categoryId = `category-${post.categorySlug}`
            const docId = `post-${post.slug.current}`

            // Handle Image Upload (Cover)
            let mainImage = undefined;

            // Define Default Covers Map
            const DEFAULT_COVERS: Record<string, string> = {
                'research-innovation': '/blog/cover_research_lab.png',
                'academic-corner': '/blog/cover_research_lab.png',
                'ncs101': '/blog/cover_research_lab.png',
                'r101': '/blog/cover_research_lab.png',
                'python101': '/blog/cover_research_lab.png',
                'data-analysis': '/blog/cover_research_lab.png',

                'enterprise-strategy': '/blog/cover_business_hub.png',
                'strategic-leadership': '/blog/cover_business_hub.png',
                'rtm-distribution': '/blog/cover_business_hub.png',
                'logistics-supply-chain': '/blog/cover_business_hub.png',

                'digital-transformation': '/blog/cover_tech_trends.png',
                'ai-technology': '/blog/cover_tech_trends.png',
                'case-studies': '/blog/cover_tech_trends.png',

                'mentorship-career': '/blog/cover_career_growth.png',
                'book-intern-to-ceo': '/blog/cover_career_growth.png'
            };

            let coverImagePath = (post as any).coverImage;

            // 1. If no cover image provided, or file doesn't exist, use default
            if (!coverImagePath || !fs.existsSync(path.join(process.cwd(), 'public', coverImagePath))) {
                console.warn(`   ⚠️ Missing cover for "${post.title}". Using default for category: ${post.categorySlug}`);
                coverImagePath = DEFAULT_COVERS[post.categorySlug] || '/blog/_cover_placeholder.png';
            }

            if (coverImagePath) {
                const imagePath = path.join(process.cwd(), 'public', coverImagePath);
                if (fs.existsSync(imagePath)) {
                    // console.log(`   Uploading cover image: ${path.basename(imagePath)}...`);
                    try {
                        const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
                            filename: path.basename(imagePath)
                        });
                        mainImage = {
                            _type: 'image',
                            asset: {
                                _type: "reference",
                                _ref: imageAsset._id
                            },
                            alt: post.title // Add alt text
                        };
                    } catch (err) {
                        console.error(`   Failed to upload cover image: ${err}`);
                    }
                } else {
                    console.error(`   ❌ Critical: Fallback image not found: ${imagePath}`);
                }
            }

            // Handle Body Images (Inline)
            if (post.body) {
                for (const block of post.body) {
                    if (block._type === 'image' && (block as any).localPath) {
                        const bodyImagePath = path.join(process.cwd(), 'public', (block as any).localPath);
                        if (fs.existsSync(bodyImagePath)) {
                            console.log(`   Uploading inline image: ${(block as any).localPath}...`);
                            try {
                                const imageAsset = await client.assets.upload('image', fs.createReadStream(bodyImagePath), {
                                    filename: path.basename(bodyImagePath)
                                });
                                // Update the block to be a valid Sanity image object
                                (block as any).asset = {
                                    _type: "reference",
                                    _ref: imageAsset._id
                                };
                                delete (block as any).localPath; // Remove the temp path
                            } catch (err) {
                                console.error(`   Failed to upload inline image: ${err}`);
                            }
                        } else {
                            console.warn(`   ⚠️ Inline image not found: ${bodyImagePath}`);
                        }
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
