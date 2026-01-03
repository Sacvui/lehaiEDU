
import { batch1 } from './blog_posts_1'
import { batch2 } from './blog_posts_2'
import { batch3 } from './blog_posts_3'
import { batch4 } from './blog_posts_4'
import { batch5 } from './blog_posts_5'
import { batch6 } from './blog_posts_6'
import { series_a_1 } from './blog_posts_series_a_1'
import { series_a_2 } from './blog_posts_series_a_2'
import { series_c_1 } from './blog_posts_series_c_1'
import { series_c_2 } from './blog_posts_series_c_2'
import { dms_failure_post } from './blog_posts_dms_failure';
import { dms_evolution_post } from './blog_posts_dms_evolution';
import { book_intro } from './blog_posts_book'
import { bi_ai_post } from './blog_posts_bi_ai'
import { ncs_series_post } from './blog_posts_ncs_series'
import { dms_post } from './blog_posts_dms'
import fs from 'fs';

const posts = [
    ...batch1, ...batch2, ...batch3, ...batch4, ...batch5, ...batch6,
    ...series_a_1, ...series_a_2,
    ...series_c_1, ...series_c_2,
    ...book_intro,
    ...bi_ai_post,
    ...ncs_series_post,
    ...dms_post,
    ...dms_failure_post,
    ...dms_evolution_post
];

function countWords(text: string): number {
    return text.trim().split(/\s+/).length;
}

function auditContent() {
    let report = "CONTENT AUDIT REPORT\n====================\n";
    let shortPosts = 0;
    let noImagePosts = 0;

    report += `Total Posts: ${posts.length}\n\n`;
    report += "POSTS NEEDING IMPROVEMENT (< 1000 words OR 0 images):\n";
    report += "-----------------------------------------------------\n";

    posts.forEach(post => {
        let wordCount = 0;
        let imageCount = 0;

        if (post.body) {
            post.body.forEach((block: any) => {
                if (block._type === 'block' && block.children) {
                    block.children.forEach((child: any) => {
                        if (child.text) {
                            wordCount += countWords(child.text);
                        }
                    });
                } else if (block._type === 'image') {
                    imageCount++;
                }
            });
        }

        // Check criteria
        const isShort = wordCount < 1000;
        const hasNoImages = imageCount === 0;

        if (isShort || hasNoImages) {
            if (isShort) shortPosts++;
            if (hasNoImages) noImagePosts++;

            report += `[${isShort ? 'SHORT' : '     '}] [${hasNoImages ? 'NO IMG' : '      '}] ${post.title.substring(0, 50)}... (${wordCount} words, ${imageCount} imgs)\n`;
        }
    });

    report += "\nSUMMARY:\n";
    report += `Posts under 1000 words: ${shortPosts}\n`;
    report += `Posts with NO internal images: ${noImagePosts}\n`;

    console.log(report);
    fs.writeFileSync('content_audit_report.txt', report);
}

auditContent();
