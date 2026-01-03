
import { createClient } from '@sanity/client'
import dotenv from 'dotenv'
import path from 'path'

// Load environment variables
dotenv.config({ path: path.resolve(__dirname, '../.env.local') })

const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN,
    useCdn: false,
})

async function verify() {
    const query = `*[_type == "post" && slug.current in ["r101-bai-1-intro-install", "r101-bai-2-data-cleaning"]]{ title, slug }`
    const posts = await client.fetch(query)

    console.log(`Found ${posts.length} R101 posts:`);
    posts.forEach((p: any) => console.log(` - ${p.title} (${p.slug.current})`));

    if (posts.length === 2) {
        console.log("SUCCESS: All R101 posts found.");
        process.exit(0);
    } else {
        console.log("FAILURE: Missing posts.");
        process.exit(1);
    }
}

verify();
