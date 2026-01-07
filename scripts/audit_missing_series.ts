
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

async function auditMissing() {
    try {
        console.log('🔍 Auditing specific missing series...');

        const terms = ['R101', 'Python', 'DMS', 'RTM'];

        for (const term of terms) {
            const posts = await client.fetch(`*[_type == "post" && (title match "${term}*" || "${term}" in tags)] { title }`);
            console.log(`\nChecking "${term}": found ${posts.length} posts.`);
            if (posts.length > 0) {
                posts.forEach(p => console.log(` - ${p.title}`));
            } else {
                console.log(` ❌ CRITICAL: No posts found for ${term}`);
            }
        }

        // Also count total again
        const total = await client.fetch(`count(*[_type == "post"])`);
        console.log(`\n📊 Total Posts in DB: ${total}`);

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

auditMissing();
