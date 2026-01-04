
async function test() {
    try { await import('./blog_posts_4'); console.log('4 OK'); } catch (e) { console.error('4 FAIL', e); }
}
test();
