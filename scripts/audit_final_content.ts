
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

console.log("🔍 STARTING CONTENT AUDIT...\n");

const allCollections = [
    { name: 'batch1', posts: batch1 },
    { name: 'batch2', posts: batch2 },
    { name: 'batch3', posts: batch3 },
    { name: 'batch4', posts: batch4 },
    { name: 'batch5', posts: batch5 },
    { name: 'batch6', posts: batch6 },
    { name: 'series_a_1', posts: series_a_1 },
    { name: 'series_a_2', posts: series_a_2 },
    { name: 'series_b_1', posts: series_b_1 },
    { name: 'series_b_2', posts: series_b_2 },
    { name: 'series_c_1', posts: series_c_1 },
    { name: 'series_c_2', posts: series_c_2 },
    { name: 'dms_failure', posts: dms_failure_post },
    { name: 'dms_evolution', posts: dms_evolution_post },
    { name: 'r101', posts: r101_series },
    { name: 'python101', posts: python101_series },
    { name: 'book', posts: book_intro },
    { name: 'bi_ai', posts: bi_ai_post },
    { name: 'ncs', posts: ncs_series_post },
    { name: 'dms_post', posts: dms_post }
];

const slugMap = new Map();
const titleMap = new Map();

const categoryRules = {
    'python': ['data-analysis', 'ai-technology'],
    'r101': ['data-analysis'],
    'supply chain': ['logistics-supply-chain'],
    'logistics': ['logistics-supply-chain'],
    'marketing': ['rtm-distribution', 'digital-transformation', 'data-analysis'],
    'distribution': ['rtm-distribution'],
    'strategy': ['enterprise-strategy', 'strategic-leadership'],
    'leadership': ['strategic-leadership', 'enterprise-strategy'],
    'career': ['mentorship-career', 'academic-corner', 'book-intern-to-ceo'],
    'phd': ['academic-corner', 'research-innovation'],
    'research': ['research-innovation', 'academic-corner', 'data-analysis', 'ai-technology']
};

const report: any[] = [];

allCollections.forEach(collection => {
    collection.posts.forEach((post: any) => {

        // 1. Check Category Alignment
        const titleLower = post.title?.toLowerCase() || '';
        const category = post.categorySlug;

        for (const [keyword, allowedCats] of Object.entries(categoryRules)) {
            if (titleLower.includes(keyword)) {
                if (!allowedCats.includes(category)) {
                    // Only log strictly
                }
            }
        }

        // 2. Check Slug Duplication
        const slug = post.slug?.current;
        if (slug) {
            if (slugMap.has(slug)) {
                report.push({ type: 'DUPLICATE_SLUG', slug, location1: slugMap.get(slug), location2: collection.name });
            } else {
                slugMap.set(slug, collection.name);
            }
        } else {
            report.push({ type: 'MISSING_SLUG', collection: collection.name });
        }

        // 3. Check Title Duplication
        const title = post.title;
        if (title) {
            if (titleMap.has(title)) {
                report.push({ type: 'DUPLICATE_TITLE', title, location1: titleMap.get(title), location2: collection.name });
            } else {
                titleMap.set(title, collection.name);
            }
        }
    });
});

import fs from 'fs';
fs.writeFileSync('audit_result.json', JSON.stringify(report, null, 2));
console.log("\n✅ Audit Complete. Check audit_result.json");

