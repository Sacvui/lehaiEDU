
import fs from 'fs';
import path from 'path';
import { ncs_series_post } from './blog_posts_ncs_series';

function portableTextToMarkdown(body: any[]): string {
    if (!body || !Array.isArray(body)) return '';

    return body.map(block => {
        if (block._type === 'block') {
            const childrenText = block.children?.map((child: any) => child.text).join('') || '';

            if (block.style === 'h2') return `\n## ${childrenText}\n`;
            if (block.style === 'h3') return `\n### ${childrenText}\n`;
            if (block.style === 'blockquote') return `\n> ${childrenText}\n`;
            if (block.listItem === 'bullet') return `- ${childrenText}`;
            if (block.listItem === 'number') return `1. ${childrenText}`; // Simplified numbering

            return `\n${childrenText}\n`;
        }
        return '';
    }).join('\n');
}

function exportPosts() {
    let content = '# Tổng Hợp Series NCS101 - Lê Phúc Hải\n\n';

    ncs_series_post.forEach((post, index) => {
        content += `-------------------------------------------------\n`;
        content += `# Bài ${index + 1}: ${post.title}\n\n`;
        content += `**Mô tả ngắn:** ${post.excerpt}\n\n`;
        content += `**NỘI DUNG CHI TIẾT:**\n`;
        content += portableTextToMarkdown(post.body);
        content += `\n\n`;
    });

    const outputPath = path.resolve(process.cwd(), 'NCS101_Full_Compilation.md');
    fs.writeFileSync(outputPath, content, 'utf-8');
    console.log(`✅ Successfully exported ${ncs_series_post.length} posts to: ${outputPath}`);
}

exportPosts();
