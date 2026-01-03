
import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const client = createClient({
    projectId: '58r14tlr', // Hardcoded from import script to verify match
    dataset: 'production',
    useCdn: false, // Ensure we read from source, NOT CDN
    apiVersion: '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN,
})

async function verifyContent() {
    console.log("Verifying content on Sanity...");

    // Fetch the NCS Series post we edited
    const query = `*[_type == "post" && slug.current == "ncs-101-bai-1-mindset"][0]{
        title,
        tags,
        body
    }`;

    try {
        const post = await client.fetch(query);
        if (!post) {
            console.error("❌ Post not found!");
            return;
        }

        console.log(`Title: ${post.title}`);
        console.log(`Tags: ${JSON.stringify(post.tags)}`);

        // Check body for signature
        const bodyText = JSON.stringify(post.body);
        if (bodyText.includes("Hải Morning")) {
            console.log("RESULT: FAILED - OLD CONTENT DETECTED");
        } else if (bodyText.includes("Góc nhìn HaiLP") || JSON.stringify(post.tags).includes("Góc nhìn HaiLP")) {
            console.log("RESULT: SUCCESS - NEW CONTENT DETECTED");
        } else {
            console.log("RESULT: INDETERMINATE - Manual check needed.");
        }

    } catch (err) {
        console.error("Fetch error:", err);
    }
}

verifyContent();
