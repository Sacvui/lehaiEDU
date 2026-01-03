
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

function calculateBookSize() {
    let totalWords = 0;
    let totalImages = 0;
    let totalPosts = posts.length;

    console.log(`Analyzing ${totalPosts} posts...`);

    posts.forEach(post => {
        let postWords = 0;
        let postImages = 0;

        if (post.body) {
            post.body.forEach((block: any) => {
                if (block._type === 'block' && block.children) {
                    block.children.forEach((child: any) => {
                        if (child.text) {
                            postWords += countWords(child.text);
                        }
                    });
                } else if (block._type === 'image') {
                    postImages++;
                }
            });
        }
        totalWords += postWords;
        totalImages += postImages;
        // console.log(`- ${post.title}: ${postWords} words, ${postImages} images`);
    });

    // Estimation Logic for A5 Book
    // Average words per A5 page (standard font size 11/12, normal margins): ~250-300 words. Let's use 280.
    const WORDS_PER_PAGE = 280;
    // Image space: Assume an image takes up roughly 1/2 of a page on average.
    const IMAGE_PAGE_EQUIVALENT = 0.4;

    const textPages = totalWords / WORDS_PER_PAGE;
    const imagePages = totalImages * IMAGE_PAGE_EQUIVALENT;
    const totalPages = Math.ceil(textPages + imagePages);

    const result = `
------------------------------------------------
TOTAL POSTS: ${totalPosts}
TOTAL WORDS: ${totalWords.toLocaleString()} words
TOTAL IMAGES: ${totalImages}
------------------------------------------------
ESTIMATED A5 BOOK SIZE (Font 11pt, Standard Margins):
Text Pages: ~${Math.round(textPages)}
Image Space: ~${Math.round(imagePages)} pages
GRAND TOTAL: ~${totalPages} PAGES
------------------------------------------------
`;
    console.log(result);
    // Write to file for easy reading
    const fs = require('fs');
    fs.writeFileSync('book_size_report.txt', result);
}

calculateBookSize();
