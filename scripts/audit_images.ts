
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
import { series_c_2 } from './blog_posts_series_c_2'
import { dms_failure_post } from './blog_posts_dms_failure';
import { dms_evolution_post } from './blog_posts_dms_evolution';
import { r101_series } from './blog_posts_r101';
import { python101_series } from './blog_posts_python101';
import { book_intro } from './blog_posts_book'
import { bi_ai_post } from './blog_posts_bi_ai'
import { ncs_series_post } from './blog_posts_ncs_series'
import { dms_post } from './blog_posts_dms'

const posts = [
    ...batch1, ...batch2, ...batch3, ...batch4, ...batch5, ...batch6,
    ...series_a_1, ...series_a_2,
    ...series_b_1, ...series_b_2,
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

console.log('--- AUDIT REPORT ---');
posts.forEach((post: any) => {
    if (!post.coverImage) {
        console.log(`[MISSING_KEY] | ${post.title} | ${post.slug.current}`);
    } else {
        const imagePath = path.join(process.cwd(), 'public', post.coverImage);
        if (!fs.existsSync(imagePath)) {
            console.log(`[MISSING_FILE] | ${post.title} | ${post.coverImage}`);
        }
    }
});
console.log('--- END REPORT ---');
