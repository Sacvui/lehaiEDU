
import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const client = createClient({
    projectId: '58r14tlr',
    dataset: 'production',
    useCdn: false, // Force fresh data
    apiVersion: '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN,
})

async function verifyLesson2() {
    console.log("Verifying NCS Lesson 2 content...");

    // Fetch NCS101 Lesson 2. Slug logic in script is usually 'ncs-101-bai-2-topic' or similar. 
    // I need to be sure about the slug from the file content I just read.
    // Based on previous file reads, it's typically sequential.
    // Let's search by title if slug is uncertain, or just list all NCS posts.

    const query = `*[_type == "post" && slug.current == "ncs-101-bai-2-finding-topic"][0]{
        title,
        slug,
        body
    }`;

    try {
        const posts = await client.fetch(query);
        if (!posts || posts.length === 0) {
            console.error("❌ Post not found!");
            return;
        }

        let resultMsg = "";

        // posts is actually a SINGLE object now because of [0] in query, but loop logic was set for array.
        // Quick fix: arrayify
        const postsArray = Array.isArray(posts) ? posts : [posts];

        postsArray.forEach(post => {
            const bodyText = JSON.stringify(post.body);
            resultMsg += `\nChecking Post: ${post.title}\n`;

            if (bodyText.includes("mất vệ sinh")) {
                resultMsg += "RESULT: FAILED - OLD TRANSLATION ('mất vệ sinh') FOUND.\n";
            } else if (bodyText.includes("yếu tố duy trì")) {
                resultMsg += "RESULT: SUCCESS - NEW TRANSLATION ('yếu tố duy trì') FOUND.\n";
            } else {
                resultMsg += "RESULT: UNKNOWN - Could not find match.\n";
            }
            // Context
            const index = bodyText.indexOf("Hygiene Factor");
            if (index !== -1) {
                resultMsg += "Context: " + bodyText.substring(index - 50, index + 150) + "\n";
            }
        });

        console.log(resultMsg);
        fs.writeFileSync('lesson2_check.txt', resultMsg);

    } catch (err) {
        console.error("Fetch error:", err);
    }
}

verifyLesson2();
