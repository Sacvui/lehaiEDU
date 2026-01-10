
export const book_chapter_1 = [
    {
        title: 'Chương 1: Re-Research - Hành Trình Tìm Lại Đam Mê Học Thuật',
        slug: { current: 'book-chapter-1-mindset' },
        publishedAt: new Date('2026-01-01').toISOString(),
        excerpt: 'Chương mở đầu dành cho những ai đang cảm thấy "lạc lối" giữa áp lực công bố quốc tế và sự thay đổi chóng mặt của công nghệ. Hãy cùng định vị lại "Cái tôi" (Identity) của người làm nghiên cứu.',
        categorySlug: 'book-re-research',
        coverImage: '/blog/research_series_1_mindset.png',
        featured: true,
        readingTime: 45, // Tổng hợp 3 bài
        tags: ['Book Chapter', 'Mindset', 'Research Identity', 'Passion'],
        body: [
            // --- LỜI MỞ ĐẦU: HAI MORNING ---
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Hai Morning: Cà phê và Sự thật mất lòng' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chào buổi sáng. \n\nTôi ghét sự giả tạo. Trong giới học thuật, người ta hay dùng những từ ngữ hoa mỹ để che đậy sự rỗng tuếch. "Tháp ngà", "Tri thức nhân loại", "Cống hiến"... Nghe thì sang đấy, nhưng có cơm áo gạo tiền không? \n\nCuốn sách này không dạy bạn cách trở thành một "Giáo sư giấy". Tôi viết nó cho những ai đang vật lộn giữa hai dòng nước: Một bên là áp lực KPI cơm áo, một bên là khao khát làm được cái gì đó "ra hồn" cho đời. \n\nNếu bạn chịu được sự thật mất lòng, thì mời lật trang.' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '---\n' }],
            },

            // --- BÀI 1 REMASTERED ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 1: Cái chết của "Ngọn lửa"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Ngày đầu nộp hồ sơ PhD, ai chẳng hừng hực khí thế. "Tôi sẽ thay đổi thế giới!". "Tôi sẽ tìm ra chân lý!". \n\n3 năm sau. \n"Thầy ơi cho em ra trường đi, khổ quá rồi!". \n\nChuyện gì đã xảy ra? Chúng ta bị nghiền nát. Bị nghiền nát bởi áp lực công bố (Publish or Perish). Bị bào mòn bởi những bình luận cay nghiệt của Reviewer số 2. Và đáng sợ nhất: Bị lạc hậu trước con quái vật AI.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. PhD không phải là "Học vị", nó là "Tư duy"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng lấy cái bằng Tiến sĩ để lòe thiên hạ. Cái bằng chỉ là tờ giấy. Giá trị thật nằm ở **Critical Thinking** (Tư duy phản biện).\n\nNgười thường nhìn thấy A và tin là A. \nPhD nhìn thấy A, nhưng hỏi: "Tại sao lại là A? Trong bối cảnh B thì A có đúng không? Có biến số ẩn C nào chi phối A không?". \n\nĐó mới là thứ khiến doanh nghiệp trả lương ngàn đô cho bạn. Họ mua cái đầu lạnh (Cool Head), chứ không mua tờ giấy A4.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Tò mò là liều "Doping" duy nhất' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Làm sao để ngồi lì 8 tiếng/ngày đọc mấy bài báo chán ngắt bằng tiếng Anh? Tiền ư? Không đủ đâu. Danh vọng ư? Còn xa lắm. \n\nThứ duy nhất giữ bạn không bỏ cuộc là sự **Tò mò** (Curiosity). \n"Tại sao khách hàng lại hành xử kỳ quặc thế nhỉ?". "Tại sao mô hình ông kia chạy ra, mình chạy lại xịt?". \n\nHãy nuôi dưỡng sự tò mò đó. Khi nào hết tò mò, hãy nghỉ làm nghiên cứu. Thật đấy.' }],
            },

            // --- BRIDGE 1 -> 2 ---
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '\nCó tư duy rồi, nhưng tư duy mà không có định hướng thì sẽ thành kẻ "mơ mộng hão huyền". Làm sao để chọn một con đường (Topic) vừa sức, ra tiền, mà lại không bị... đi tù (đạo đức)?\n' }],
            },

            // --- BÀI 2 REMASTERED ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 2: Nghệ thuật "Chọn Kèo" (Topic Selection)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Sai lầm kinh điển của "Tân binh": Thích đao to búa lớn. \n"Tác động của Biến đổi khí hậu toàn cầu đến... Kinh tế vĩ mô Việt Nam". \n\nThôi xin các cụ. Các cụ làm trong 3 năm hay 30 năm? Hãy chọn một cái ngách (Niche) thật hẹp thôi. Nhưng đào thật sâu.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Tam giác vàng: Hẹp - Mới - Khả thi' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '- **Narrow (Hẹp):** Đừng nghiên cứu "Nhân viên". Hãy nghiên cứu "Nhân viên Gen Z làm việc từ xa bị Burnout".\n- **Novel (Mới):** Đừng làm cái người ta làm nát rồi. Hãy nhét chữ "AI", "Blockchain", "Covid", "Khủng hoảng kinh tế" vào bối cảnh. Reviewer thích những thứ "trending".\n- **Feasible (Khả thi):** Quan trọng nhất. Có xin được số liệu không? Không có số liệu thì ý tưởng triệu đô cũng vứt sọt rác.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Biến "Nỗi đau" thành "Câu hỏi"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Sếp kêu: "Sao bọn Sales dạo này lười thế?". Đó là than vãn. \nNhiệm vụ của bạn là chuyển ngữ sang tiếng người (học thuật): \n> "Tác động của Chính sách Thưởng phạt (Reward/Punishment) đến Động lực làm việc nội tại (Intrinsic Motivation) của Nhân viên Kinh doanh: Vai trò điều tiết của Văn hóa Doanh nghiệp."\n\nThấy sang mồm hơn chưa? Đó chính là đẳng cấp của Re-Research.' }],
            },

            // --- BRIDGE 2 -> 3 ---
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '\nChọn được kèo thơm rồi. Giờ làm sao biết thiên hạ đã chém gió gì về nó chưa? Để mình khỏi chém lại cái cũ. Đó là lúc phải đi "hóng hớt" (Literature Review).\n' }],
            },

            // --- BÀI 3 REMASTERED ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 3: Đọc như một Kẻ cắp (Smart Reading)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng đọc sách giáo khoa nữa. Hãy đọc báo (Journal Articles). Tại sao? Vì sách giáo khoa là kiến thức của 10 năm trước. Báo Q1 là kiến thức của ngày hôm qua. Muốn đi đầu, phải đọc báo.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Đừng đọc từng chữ' }],
            },
            {
                _type: 'normal', // Fix typo: use 'normal' instead of undefined block style if needed, but keeping consistent
                style: 'normal',
                children: [{ _type: 'span', text: 'Một bài báo 20 trang. Bạn đọc hết thì đến mùa quýt. Hãy đọc khôn (Smart Reading):\n1. Đọc Title & Abstract: Xem có liên quan không? (5 giây).\n2. Đọc Conclusion: Xem nó tìm ra cái gì? (1 phút).\n3. Đọc Introduction (đoạn cuối): Xem mục tiêu nghiên cứu là gì? (1 phút).\n4. Nếu thấy hay -> Mới đọc phần còn lại.\n\nThời gian của bạn là vàng. Đừng phung phí vào những bài báo rác.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Tìm "Khe hở" (Finding the Gap)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Mọi bài báo đều có điểm yếu (Limitations). Tác giả thường giấu nó ở cuối bài. Hãy đọc kỹ phần "Limitations and Future Directions". \n\n- Tác giả bảo: "Nghiên cứu này chỉ làm ở Mỹ". -> Bùm! Bạn làm lại y hệt ở Việt Nam. Đó là Context Gap.\n- Tác giả bảo: "Nghiên cứu này chưa xét đến yếu tố cảm xúc". -> Bùm! Bạn thêm biến "Cảm xúc" vào mô hình. Đó là Model Gap.\n\nĐấy, đề tài ở đó chứ đâu. Cứ tìm chỗ người ta chưa làm mà lao vào.' }],
            },

            // --- LỜI KẾT CHƯƠNG ---
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '---\n\nKết thúc Chương 1. Tôi hy vọng bạn đã bớt "ngáo" và bắt đầu nhìn nghiên cứu với con mắt thực tế hơn. Đừng mơ mộng nữa. Hãy bắt tay vào tìm một cái "Ngách" (Niche) và đào thật sâu đi.\n\nỞ chương sau, tôi sẽ phát cho bạn bộ đồ nghề: R, Python, SmartPLS. Chuẩn bị tinh thần đi, sẽ hơi đau đầu đấy, nhưng mà... phê!' }],
            },
        ]
    }
];
