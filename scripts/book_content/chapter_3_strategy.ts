
export const book_chapter_3 = [
    {
        title: 'Chương 3: The Strategy - Nghệ Thuật "Săn" Q1',
        slug: { current: 'book-chapter-3-strategy' },
        publishedAt: new Date('2026-02-01').toISOString(), // Future date
        excerpt: 'Viết xong bài báo mới chỉ là một nửa chặng đường. Nửa còn lại là cuộc chiến sinh tồn với Reviewer số 2. Chương này sẽ chia sẻ những "mánh lới" (chiến thuật) để đưa bài báo của bạn từ file Word lên tạp chí Q1.',
        categorySlug: 'book-re-research',
        coverImage: '/blog/re_research_cover_sidewalk_prof_1768054499766.png',
        featured: true,
        readingTime: 45,
        tags: ['Book Chapter', 'Strategy', 'IMRaD', 'Publication', 'Reviewer 2'],
        body: [
            // --- LỜI DẪN NHẬP: HAI MORNING ---
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Hai Morning: Nghiên cứu là một Cuộc chơi (Game)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chào buổi sáng. \n\nNhiều bạn nghĩ làm nghiên cứu là ngồi trong tháp ngà, thắp đèn dầu viết sách thánh hiền. Tỉnh lại đi! Nghiên cứu khoa học ngày nay là một ngành công nghiệp (Academic Industry). Nó có luật chơi, có kẻ bán (tác giả), người mua (tạp chí), và những gã bảo vệ khó tính (Reviewer).\n\nNếu bạn viết bài theo kiểu "hữu xạ tự nhiên hương", bạn sẽ thất bại. Bạn cần chiến lược. Chương này tôi sẽ chỉ cho bạn cách chơi cái game này.' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '---\n' }],
            },

            // --- PHẦN 1: IMRAD - CÔNG THỨC ĐÓNG GÓI ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 1: Đóng gói sản phẩm (The Packaging)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Reviewer Q1 rất bận (và lười). Họ không đọc từng chữ đâu. Họ "quét" (scan) bài của bạn theo một cấu trúc chuẩn gọi là IMRaD. Lệch sóng là Reject ngay.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. I - Introduction (Cái Phễu Ngược)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng mở bài kiểu "Từ ngàn xưa...". Hãy đi thẳng vào vấn đề:\n- Hook: Thế giới đang sốt xình xịch cái gì? (Ví dụ: Gen AI).\n- Problem: Nhưng người ta đang cãi nhau cái gì? (Người bảo AI tốt, kẻ bảo AI xấu).\n- Gap: Có cái gì chưa ai nghiên cứu? (Chưa ai xem xét AI ảnh hưởng đến Hạnh phúc của... Nhân viên Vệ sinh).\n- Contribution: Bài này tôi lấp cái lỗ hổng đó như thế nào?' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. M - Methods (Công thức nấu ăn)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nguyên tắc vàng: Reproducibility (Tái lập được). Bạn phải viết sao cho một người lạ ở Châu Phi đọc xong cũng làm lại y hệt được. Giấu nghề là chết.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. R - Results (Sự thật trần trụi)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Có sao nói vậy. Đừng chém gió ở đây. Hãy để bảng biểu và hình vẽ (như đã học ở Chương 2) lên tiếng.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '4. D - Discussion (Nghệ thuật bán hàng)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đây là chỗ để bạn "bán" bài báo của mình cho các CEO và Chính phủ. \n- Đừng chỉ nói: "X tác động đến Y".\n- Hãy nói: "Vì X tác động đến Y, nên CEO cần phải tăng lương ngay, Chính phủ cần ra luật ngay...". Đó là Managerial Implications (Hàm ý quản trị).' }],
            },

            // --- PHẦN 2: CHỌN MẶT GỬI VÀNG ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 2: Chọn chiến trường (Journal Selection)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Bài ngon mà gửi nhầm chỗ cũng chết. Đừng gửi bài Marketing vào tạp chí Kỹ thuật (bị Reject là cái chắc). Và CẨN THẬN với lũ tạp chí săn mồi (Predatory).' }],
            },
            {
                _type: 'block',
                style: 'blockquote',
                children: [{ _type: 'span', text: '⚠️ [DẤU HIỆU LỪA ĐẢO]:\n- Email mời mọc: "Kính thưa giáo sư đại tài..." (Nịnh bợ).\n- Cam kết: "Đăng bài trong 3 ngày" (Reviewer thánh thần à mà đọc trong 3 ngày?)\n- Phí xử lý rẻ bèo hoặc không minh bạch.\n\nDính vào nó là vết nhơ muôn đời. Hãy check kỹ trên Scopus/Scimago trước khi nộp.' }],
            },

            // --- PHẦN 3: ĐỐI MẶT REVIEWER 2 ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 3: Chiến thuật "Bánh mì kẹp thịt" (Reviewer Survival)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Reviewer số 2 là "kẻ hủy diệt". Hắn sẽ chê bài bạn tơi tả. Đừng khóc. Đừng chửi lại (dù muốn lắm). Hãy dùng chiến thuật "Bánh mì kẹp thịt":\n\n- Lớp vỏ trên (Ngọt ngào): "Cảm ơn Reviewer vì nhận xét quá sâu sắc, quá tuyệt vời..." (Dù trong lòng đang chửi thầm).\n- Lớp nhân (Rắn rỏi): Giải trình chi tiết từng ý. Cái nào sai thì nhận và sửa. Cái nào mình đúng thì dẫn chứng tài liệu (Reference) để bảo vệ.\n- Lớp vỏ dưới (Biết ơn): "Một lần nữa, xin đa tạ ngài đã giúp bài tôi hoàn thiện hơn."\n\nThái độ (Attitude) quan trọng hơn Trình độ. Hãy ngoan!' }],
            },

            // --- PHẦN 4: ĐẠO ĐỨC (ETHICS) ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 4: Lời thề Hippocrates của nhà nghiên cứu' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Cuối cùng, tôi muốn nói về Đạo đức. Áp lực "Publish or Perish" (Xuất bản hay là Chết) rất kinh khủng. Nhưng đừng vì thế mà bán rẻ linh hồn.\n- Đừng Bịa số liệu (Fabrication): Thà kết quả xấu mà thật, còn hơn đẹp mà giả.\n- Đừng Đạo văn (Plagiarism): AI bây giờ nó quét được hết.\n\nĐừng để 10 năm sau, khi con bạn Google tên bố/mẹ nó, kết quả hiện ra là: "Tiến sĩ X bị thu hồi bằng vì gian lận". Nhục lắm.' }],
            },

            // --- LỜI KẾT SÁCH ---
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '---\n\nKhép lại cuốn sách "Re-Research". Hành trình từ một "Thợ viết báo" đến một "Sidewalk Professor" (Học giả dấn thân) không hề dễ dàng. Nó là một cuộc dạo chơi, nhưng là một cuộc dạo chơi nghiêm túc và đầy mồ hôi.\n\nChúc các bạn chân cứng đá mềm. Hẹn gặp lại trên đỉnh vinh quang (Q1)!\n\n**Sidewalk Professor Hải Rong Chơi & Carmen Châu**\n(Verified by NCSKIT.ORG)' }],
            },
        ]
    }
];
