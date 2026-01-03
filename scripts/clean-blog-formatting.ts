
import fs from 'fs';
import path from 'path';

// Directory containing scripts
const SCRIPTS_DIR = path.join(process.cwd(), 'scripts');

// File pattern to match
const FILE_PATTERN = /^blog_posts_.*\.ts$/;

// Emoji Regex (Broad range)
const EMOJI_REGEX = /[\u{1F600}-\u{1F64F}\u{1F300}-\u{1F5FF}\u{1F680}-\u{1F6FF}\u{1F1E0}-\u{1F1FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F900}-\u{1F9FF}\u{1F018}-\u{1F270}\u{238C}\u{2B06}\u{2B07}\u{2934}\u{2935}\u{200d}\u{fe0f}]/gu;

function cleanText(text: string): string {
    // 1. Remove Emojis
    let cleaned = text.replace(EMOJI_REGEX, '');
    // 2. Remove Asterisks (*)
    cleaned = cleaned.replace(/\*/g, '');
    // 3. Cleanup double spaces created by removals
    cleaned = cleaned.replace(/\s+/g, ' ');
    return cleaned;
}

function processFiles() {
    console.log("Starting cleanup process...");

    const files = fs.readdirSync(SCRIPTS_DIR).filter(file => FILE_PATTERN.test(file));

    files.forEach(file => {
        const filePath = path.join(SCRIPTS_DIR, file);
        console.log(`Processing: ${file}`);

        let content = fs.readFileSync(filePath, 'utf-8');

        // Match content fields: text: '...', excerpt: '...', title: '...'
        // We handle single quoted strings that might contain escaped quotes.
        // Regex explanation:
        // (text|excerpt|title|tags)  -> Capture key
        // :\s*                       -> Colon and whitespace
        // '                          -> Opening quote
        // ((?:[^'\\]|\\.)*)          -> Capture content (anything not quote or backslash, OR escaped char)
        // '                          -> Closing quote

        // Note: 'tags' is an array of strings, usually ['tag1', 'tag2']. 
        // We probably shouldn't blindly regex 'tags' key with this pattern because it matches ['...'].
        // Let's stick to text, excerpt, title which are usually simple strings.
        // But the user DOES want to remove * from body text too.

        const stringRegex = /(text|excerpt|title):\s*'((?:[^'\\]|\\.)*)'/g;

        const newContent = content.replace(stringRegex, (match, key, value) => {
            const cleanedValue = cleanText(value);
            // Reconstruct the line
            return `${key}: '${cleanedValue}'`;
        });

        if (content !== newContent) {
            fs.writeFileSync(filePath, newContent, 'utf-8');
            console.log(`  -> Cleaned and saved.`);
        } else {
            console.log(`  -> No changes needed.`);
        }
    });

    console.log("Cleanup complete!");
}

processFiles();
