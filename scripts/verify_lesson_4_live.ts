
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

async function verifyPost() {
    try {
        console.log('🔍 Checking live data for Lesson 4...');
        const post = await client.fetch(`*[_type == "post" && slug.current == "ncs-101-bai-4-methodology"][0]`);

        if (!post) {
            console.log('❌ Post NOT found!');
            return;
        }

        console.log('✅ Post Found:');
        console.log('   Title:', post.title);
        console.log('   Excerpt:', post.excerpt.substring(0, 100) + '...');

        // Check for specific recent changes in Body
        const bodyText = JSON.stringify(post.body);
        const hasQuantTitle = bodyText.includes('Quăng Lưới Bắt Cả Đàn');
        const hasQualTitle = bodyText.includes('Lặn Sâu Xuống Đáy');
        const hasConclusion = bodyText.includes('Dù chọn Lưới hay Bình lặn');
        const hasBias = bodyText.includes('bị bias bởi quan điểm cá nhân');

        console.log('\n🔎 Content Verification:');
        console.log('   - "Quăng Lưới Bắt Cả Đàn":', hasQuantTitle ? '✅ OK' : '❌ MISSING (Still old version?)');
        console.log('   - "Lặn Sâu Xuống Đáy":', hasQualTitle ? '✅ OK' : '❌ MISSING');
        console.log('   - "Bị bias bởi quan điểm cá nhân":', hasBias ? '✅ OK' : '❌ MISSING');
        console.log('   - Conclusion "Lưới hay Bình lặn":', hasConclusion ? '✅ OK' : '❌ MISSING');

    } catch (error) {
        console.error('❌ Error:', error.message);
    }
}

verifyPost();
