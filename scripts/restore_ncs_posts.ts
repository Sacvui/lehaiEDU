
import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import path from 'path'
import fs from 'fs'
import { ncs_series_post } from './blog_posts_ncs_series.ts'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const client = createClient({
    projectId: '58r14tlr',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN,
})

// Need to define authors/categories just in case they are missing, but for now we assume they exist or we just link to them.
// The original script creates them. Let's create the specific category to be safe.
const category = {
    _type: 'category',
    title: 'Academic Corner',
    slug: { current: 'academic-corner' },
    description: 'Guidance for PhD candidates, researchers, and academic writing.',
    color: '#6366f1',
};

// We will use existing authors logic or just pick one. 
// For simplicity, let's hardcode a reference to 'le-phuc-hai-vn' or find one.
// The original script picks randomly. We'll pick 'le-phuc-hai-vn' as default.
const authorId = 'author-le-phuc-hai-vn';

async function restoreNCS() {
    try {
        console.log('🚀 Starting restoration of ' + ncs_series_post.length + ' NCS101 posts...')

        // Ensure category exists
        console.log('📚 Ensuring category exists...');
        const categoryId = `category-${category.slug.current}`
        await client.createOrReplace({ ...category, _id: categoryId })

        let count = 0;
        for (const post of ncs_series_post) {
            count++;
            const docId = `post-${post.slug.current}`

            // Handle Image Upload logic simplified
            let mainImage = undefined;
            let coverImagePath = (post as any).coverImage;

            // Default cover fallback logic
            if (!coverImagePath || !fs.existsSync(path.join(process.cwd(), 'public', coverImagePath))) {
                console.warn(`   ⚠️ Missing cover for "${post.title}". Using default.`);
                coverImagePath = '/blog/cover_research_lab.png';
            }

            if (coverImagePath) {
                const imagePath = path.join(process.cwd(), 'public', coverImagePath);
                if (fs.existsSync(imagePath)) {
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
                            alt: post.title
                        };
                    } catch (err) {
                        console.error(`   Failed to upload cover image: ${err}`);
                    }
                }
            }

            // Handle Body Images (Inline)
            if (post.body) {
                for (const block of post.body) {
                    if (block._type === 'image' && (block as any).localPath) {
                        const bodyImagePath = path.join(process.cwd(), 'public', (block as any).localPath);
                        if (fs.existsSync(bodyImagePath)) {
                            // Logic to upload inline images
                            try {
                                const imageAsset = await client.assets.upload('image', fs.createReadStream(bodyImagePath), {
                                    filename: path.basename(bodyImagePath)
                                });
                                (block as any).asset = { _type: "reference", _ref: imageAsset._id };
                                delete (block as any).localPath;
                            } catch (e) { console.error('Failed inline image', e) }
                        }
                    }
                }
            }

            const { categorySlug, coverImage, ...postData } = post as any;

            const postWithRefs = {
                ...postData,
                _type: 'post',
                categories: [{ _type: 'reference', _ref: categoryId }],
                author: { _type: 'reference', _ref: authorId }, // Simplification: all go to Le Phuc Hai
                _id: docId,
                mainImage: mainImage
            }

            await client.createOrReplace(postWithRefs)
            console.log(`✅ [${count}/${ncs_series_post.length}] Restored: ${post.title}`)
        }
        console.log('🎉 Restoration completed!');

    } catch (error) {
        console.error('❌ Error during restore:', error)
    }
}

restoreNCS();
