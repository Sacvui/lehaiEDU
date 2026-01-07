
import { createClient } from '@sanity/client'
import * as dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') })

const client = createClient({
    projectId: '58r14tlr',
    dataset: 'production',
    useCdn: false, // We want fresh data
    apiVersion: '2024-01-01',
    token: process.env.SANITY_WRITE_TOKEN,
})

async function auditContent() {
    try {
        console.log('🔍 Starting Content Audit...');

        // 1. Get Total Count
        const totalPosts = await client.fetch(`count(*[_type == "post"])`);
        console.log(`\n📊 Total Posts: ${totalPosts}`);

        if (totalPosts === 0) {
            console.log('❌ CRITICAL: Database is empty!');
            return;
        }

        // 2. Count by Category
        const postsByCategory = await client.fetch(`
            *[_type == "post"] {
                title,
                "category": categories[0]->title
            }
        `);

        const categoryCounts: Record<string, number> = {};
        postsByCategory.forEach((p: any) => {
            const cat = p.category || 'Uncategorized';
            categoryCounts[cat] = (categoryCounts[cat] || 0) + 1;
        });

        console.log('\n📁 Posts by Category:');
        Object.entries(categoryCounts).forEach(([cat, count]) => {
            console.log(`   - ${cat}: ${count}`);
        });

        // 3. Check Specific Series (NCS101)
        const ncsPosts = await client.fetch(`*[_type == "post" && "NCS101" in tags] { title }`);
        console.log(`\n🎓 NCS101 Series Status:`);
        if (ncsPosts.length === 0) {
            console.log('   ❌ No NCS101 posts found.');
        } else {
            console.log(`   ✅ Found ${ncsPosts.length} posts:`);
            ncsPosts.forEach((p: any) => console.log(`      - ${p.title}`));
        }

    } catch (error) {
        console.error('❌ Error connecting to Sanity:', error.message);
    }
}

auditContent();
