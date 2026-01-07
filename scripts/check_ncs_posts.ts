
import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const client = createClient({
    projectId: '58r14tlr',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN,
})

async function checkPosts() {
    try {
        console.log('Checking for posts with tag "NCS101"...');
        const posts = await client.fetch(`*[_type == "post" && "NCS101" in tags] { title, slug, tags }`);
        console.log(`Found ${posts.length} posts with tag "NCS101":`);
        posts.forEach(p => console.log(` - ${p.title} (slug: ${p.slug?.current})`));

        console.log('Checking for posts with slug starting with "ncs-101"...');
        const postsBySlug = await client.fetch(`*[_type == "post" && slug.current match "ncs-101*"] { title, slug, tags }`);
        console.log(`Found ${postsBySlug.length} posts with slug match:`);
        postsBySlug.forEach(p => console.log(` - ${p.title} (tags: ${p.tags})`));

    } catch (error) {
        console.error('Error fetching:', error);
    }
}

checkPosts();
