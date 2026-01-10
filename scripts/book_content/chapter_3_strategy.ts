
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
                children: [{ _type: 'span', text: 'Hai Morning: Chào mừng đến Địa ngục (Q1)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chào buổi sáng. \n\nBạn đã viết xong bài báo. Bạn thấy nó hay tuyệt vời. Bạn nộp cho tạp chí Q1. 3 ngày sau: "Desk Reject" (Từ chối ngay vòng gửi xe). \n\nCảm giác thế nào? Muốn đập máy tính không? \nĐừng. Đó là Luật chơi. Nếu muốn thắng, bạn phải hiểu luật. \nChương này tôi sẽ hướng dẫn bạn cách "đóng gói" sản phẩm (bài báo) sao cho nó lọt qua khe cửa hẹp của những gã gác cổng khó tính nhất.' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '---\n' }],
            },

            // --- PHẦN 1: IMRAD - CÔNG THỨC VIẾT VĂN KIẾM TIỀN ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 1: IMRaD - Không phải cấu trúc, mà là "Kịch bản bán hàng"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Reviewer Q1 cực kỳ bận (và lười). Họ chỉ có 5 phút để quyết định số phận bài báo của bạn. Hãy viết theo chuẩn IMRaD để giúp họ đọc nhanh nhất.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Introduction (Lời chào hàng)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng vòng vo "Lịch sử 4000 năm". Hãy đi thẳng vào vấn đề (The Hook):\n- **Hook:** "AI đang cướp việc của con người." (Gây sốc).\n- **Gap:** "Nhưng chưa ai nghiên cứu xem AI cướp việc của... Tiến sĩ như thế nào." (Chỉ ra khoảng trống).\n- **Contribution:** "Bài này sẽ trả lời câu hỏi đó." (Giải pháp).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Discussion (Chốt đơn)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Phần Discussion chính là lúc bạn "chốt sales". \nĐừng chỉ lải nhải lại kết quả. Hãy nói về Hàm ý (Implications). \n"Nghiên cứu này giúp các Tập đoàn tiết kiệm tỷ đô bằng cách..." -> Đó mới là thứ người ta muốn nghe.' }],
            },

            // --- PHẦN 2: CHỌN MẶT GỬI VÀNG ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 2: Chọn Chiến trường (Target Journal)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Gửi nhầm tạp chí = Tự sát. \nĐừng gửi bài về "Tâm lý học" sang tạp chí "Kỹ thuật Xây dựng" (trừ khi bạn nghiên cứu tâm lý của... cục gạch).' }],
            },
            {
                _type: 'block',
                style: 'blockquote',
                children: [{ _type: 'span', text: '⚠️ [CẢNH BÁO]: Tránh xa tạp chí Săn mồi (Predatory). \nBọn chúng sẽ gửi email dụ dỗ bạn: "Kính thưa giáo sư đại tài...", "Đăng bài trong 3 ngày...". \nĐừng tin. Bỏ tiền vào đó là mất cả chì lẫn chài. Hãy check kỹ trên Scopus/Scimago.' }],
            },

            // --- PHẦN 3: ĐỐI MẶT REVIEWER 2 ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 3: Reviewer 2 - Kẻ Hủy Diệt' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Reviewer số 2 luôn là một huyền thoại. Hắn sẽ tìm ra những lỗi nhỏ nhặt nhất để hành hạ bạn. "Tại sao không trích dẫn bài của ông X?" (Khả năng cao hắn chính là ông X). \n\nChiến thuật đối phó: "Bánh mì kẹp thịt" (Sandwich Method).\n- **Lớp Vỏ (Khen):** "Cảm ơn Reviewer vì nhận xét quá sắc sảo." (Nịnh nọt tí không chết ai).\n- **Lớp Nhân (Giải trình):** Trả lời từng ý một. Nếu sai thì nhận và sửa. Nếu đúng thì nhẹ nhàng giải thích (kèm dẫn chứng).\n- **Lớp Vỏ (Biết ơn):** "Nhờ có ngài mà bài báo sáng sủa hẳn ra."\n\nHãy nhớ: Thái độ hơn Trình độ. Đừng cãi tay đôi với giám khảo.' }],
            },

            // --- PHẦN 4: ĐẠO ĐỨC (ETHICS) ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 4: Lời thề danh dự' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Cuối cùng. Áp lực ra bài rất lớn. Nhưng đừng vì thế mà làm bậy.\n- Đừng bịa số liệu: AI nó quét ra đấy.\n- Đừng đạo văn: Nhục lắm.\n\nHãy làm khoa học tử tế. Chậm một chút cũng được, nhưng đêm về ngủ ngon.' }],
            },

            // --- LỜI KẾT SÁCH ---
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '---\n\nVậy là kết thúc hành trình "Re-Research". \nTừ Mindset (Tư duy), đến Skillset (Công cụ), và cuối cùng là Strategy (Chiến lược). \nTôi hy vọng cuốn sách nhỏ này đã giúp bạn bớt cô đơn trên con đường học thuật chông gai. \n\nHãy nhớ: Nghiên cứu khoa học là một cuộc dạo chơi nghiêm túc. Hãy chơi hết mình, nhưng đừng quên tận hưởng niềm vui khám phá.\n\nChúc bạn sớm có bài Q1 đầu đời!\n\n**Sidewalk Professor Hải Rong Chơi & Carmen Châu**\n(Verified by NCSKIT.ORG)' }],
            },
        ]
    }
];
