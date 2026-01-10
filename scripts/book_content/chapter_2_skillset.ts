
export const book_chapter_2 = [
    {
        title: 'Chương 2: The Skillset - Vũ Khí Của Người "Thợ Săn" Tri Thức',
        slug: { current: 'book-chapter-2-skillset' },
        publishedAt: new Date('2026-01-15').toISOString(), // Future date
        excerpt: 'Tư duy đúng (Mindset) là ngọn hải đăng, nhưng Kỹ năng (Skillset) mới là con tàu đưa bạn ra khơi. Chương này sẽ trang bị cho bạn bộ "Vũ khí" tối thượng: Từ R (Vẽ hình), Python (Xử lý dữ liệu) đến SmartPLS (Chạy mô hình) và đặc biệt là AI Copilot.',
        categorySlug: 'book-re-research',
        coverImage: '/blog/re_research_cover_sidewalk_prof_1768054499766.png', // Reuse Book Cover for consistency or specific chapter cover later
        featured: true,
        readingTime: 60,
        tags: ['Book Chapter', 'Skillset', 'R', 'Python', 'SmartPLS', 'AI'],
        body: [
            // --- LỜI DẪN NHẬP: HAI MORNING ---
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Hai Morning: Đừng làm "Nô lệ" cho Công cụ' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chào buổi sáng. \n\nTôi từng thấy nhiều bạn NCS "nghiện" chạy mô hình. Gặp dữ liệu nào cũng ném vào chạy, ra kết quả xanh đỏ tím vàng rồi vỗ tay khen hay, dù chẳng hiểu bản chất nó là gì. Đó là hội chứng "Button Pusher" - Thợ bấm nút.\n\nTrong chương này, tôi sẽ giới thiệu với bạn những món vũ khí hạng nặng: R, Python, SmartPLS. Nhưng xin hãy nhớ: Vũ khí dù sắc bén đến đâu cũng chỉ là cục sắt vô tri nếu người cầm nó không có tư duy chiến lược. Hãy học công cụ để làm Chủ nó, chứ đừng để nó dắt mũi mình.\n\nHãy coi R hay Python là những "người giúp việc" tận tụy. Còn bạn, bạn là Kiến trúc sư.' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '---\n' }],
            },

            // --- PHẦN 1: SMARTPLS - CỖ MÁY CHIẾN ĐẤU (THE ENGINE) ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 1: SmartPLS - "Cỗ xe tăng" của Nghiên cứu sinh' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nếu bạn làm nghiên cứu hành vi (Marketing, HR, Quản trị), 90% khả năng bạn sẽ dùng mô hình SEM (Structural Equation Modeling). Và SmartPLS chính là cỗ xe tăng lầm lũi nhưng hiệu quả nhất hiện nay.\n\nKhác với AMOS đỏng đảnh (cần dữ liệu phân phối chuẩn, mẫu lớn), SmartPLS "ăn tạp" hơn nhiều. Dữ liệu hơi méo? Mẫu hơi bé? Nó xử được tuốt. Nhưng chính vì dễ dãi nên nó cũng dễ sinh ra ảo tưởng.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Quy trình "Nấu Lẩu" 3 bước' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Hãy tưởng tượng chạy mô hình như nấu một nồi lẩu:\n\n- Bước 0: Sơ chế (Data Cleaning): Cá phải tươi. Missing Data (dữ liệu khuyết) và Outliers (dị biệt) phải bị loại bỏ thẳng tay.\n- Bước 1: Nếm nước dùng (Measurement Model): Thang đo có chuẩn không? \n   + Cronbach Alpha & CR > 0.7 (Độ tin cậy).\n   + AVE > 0.5 (Độ hội tụ).\n   + HTMT < 0.85 (Giá trị phân biệt - Hai khái niệm phải khác nhau, đừng để "tình yêu" và "thích" là một).\n- Bước 2: Thưởng thức (Structural Model): Giờ mới xem X có tác động đến Y không (P-value < 0.05). Và quan trọng hơn: Tác động mạnh hay yếu (f2)?' }],
            },
            {
                _type: 'block',
                style: 'blockquote',
                children: [{ _type: 'span', text: '💡 [MẸO NHÀ NGHỀ]: Đừng chỉ nhìn P-value. Một nghiên cứu "sexy" là nghiên cứu tìm ra những tác động MẠNH (f2 lớn) hoặc những biến Điều tiết (Moderator) bất ngờ. Ví dụ: "Tiền làm tăng hạnh phúc" (Thường thôi). Nhưng "Tiền chỉ làm tăng hạnh phúc khi bạn... nghèo" (Đây là Biến điều tiết -> Hay hơn nhiều!).' }],
            },

            // --- BRIDGE 1 -> 2 ---
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '\nChạy mô hình xong rồi, có kết quả rồi. Nhưng chẳng lẽ copy cái bảng kết quả xấu xí của phần mềm vào luận án? Không! Chúng ta cần trang điểm cho nó. Và R chính là chuyên gia trang điểm đại tài.\n' }],
            },

            // --- PHẦN 2: R - NGHỆ THUẬT VISUAL (THE ARTIST) ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 2: R & ggplot2 - Khi Số Liệu Biết Múa' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Excel vẽ hình không xấu, nhưng nó... quê. Trong giới học thuật đỉnh cao (Q1), người ta nhìn vào biểu đồ là biết ngay đẳng cấp. `ggplot2` của R chính là chuẩn mực của vẻ đẹp học thuật (Academic Aesthetic).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Vì sao R lại "thần thánh"?' }],
            },
            {
                _type: 'normal', // Typo fix: style: 'normal'
                style: 'normal',
                children: [{ _type: 'span', text: '- Tái lập (Reproducible): Bạn viết code 1 lần. Tháng sau có dữ liệu mới, bấm nút "Run" là xong. Excel thì phải ngồi vẽ lại từ đầu.\n- Miễn phí: SPSS/AMOS giá cả ngàn đô. R miễn phí trọn đời.\n- Cộng đồng: Hàng triệu nhà khoa học dùng R. Bạn gặp lỗi gì, Google cái là ra ngay.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Tư duy "Xếp hình" (Layers)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'R không vẽ hình kiểu "Mì ăn liền" chọn mẫu có sẵn. R vẽ theo tư duy lớp (Layer):\n- Lớp 1: Dữ liệu (Data)\n- Lớp 2: Trục tọa độ (Aesthetics)\n- Lớp 3: Hình học (Geometries - Cột, Đường, Tròn...)\n- Lớp 4: Trang trí (Theme, Color)\n\nChính vì thế nó cực kỳ linh hoạt. Bạn muốn vẽ gì cũng được, miễn là bạn tưởng tượng ra.' }],
            },

            // --- BRIDGE 2 -> 3 ---
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '\nR vẽ hình đẹp, nhưng xử lý dữ liệu lớn (Big Data) thì hơi... chậm. Nếu bạn phải xử lý hàng triệu dòng dữ liệu từ sàn thương mại điện tử hay mạng xã hội, bạn cần một con quái vật khác: Python.\n' }],
            },

            // --- PHẦN 3: PYTHON - CON DAO THỤY SỸ (THE AUTOMATOR) ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 3: Python - Tự Động Hóa Nỗi Đau' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nỗi đau lớn nhất của việc làm nghiên cứu là gì? Là Dọn rác dữ liệu (Data Cleaning). File excel khách hàng thì lộn xộn, tên cột thì sai, vietnamese thi khong dau. Làm tay thì đến tết Congo.\n\nPython với thư viện `Pandas` sinh ra để dọn rác. Nó có thể xử lý file Excel 10 triệu dòng trong tích tắc.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Pandas - Excel phiên bản Tiên hiệp' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Hãy quên VLOOKUP đi. Trong Python, lệnh `merge` mạnh gấp 10 lần. Bạn có thể gộp 100 file excel từ 100 chi nhánh lại thành 1 file tổng chỉ với... 3 dòng code. \n\nVí dụ Case Study: Bạn cần phân tích sentiment (cảm xúc) của 10.000 bình luận trên Shopee về sản phẩm của bạn. Đọc bằng mắt à? Không. Python dùng thư viện xử lý ngôn ngữ tự nhiên (NLP) để đọc hộ bạn, và chấm điểm xem khách đang khen hay chửi.' }],
            },

            // --- PHẦN 4: AI COPILOT - VŨ KHÍ BÍ MẬT (NEW) ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 4: AI Copilot - "Bộ xương trợ lực" (Exoskeleton)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng sợ code! Ngày xưa muốn dùng R/Python phải học code hộc máu mồm. Ngày nay, bạn có AI (ChatGPT, Claude, Cursor).\n\nBạn không cần nhớ cú pháp `ggplot(df, aes(x=...))`. Bạn chỉ cần bảo AI:\n> "Hãy viết code R vẽ biểu đồ tương quan giữa Lương và Hài Lòng, đẹp chuẩn APA, màu xanh navy."\n\nNó sẽ viết code cho bạn. Việc của bạn là copy-paste và chạy.\n\nĐây chính là tư duy "Re-Research": Chúng ta không học cách làm thợ (viết từng dòng code). Chúng ta học cách làm Kiến trúc sư (Ra đề bài cho AI). AI là đôi tay, còn bạn là bộ não.' }],
            },

            // --- LỜI KẾT CHƯƠNG ---
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '---\n\nKhép lại Chương 2, bạn đã thấy "tủ đồ nghề" của mình đầy đặn hơn chưa? Đừng cố học hết tất cả cùng lúc. Hãy bắt đầu từ SmartPLS (để xong luận án), sau đó dùng AI để học thêm chút R vẽ hình cho đẹp. \n\nCó Mindset rồi, có Skillset rồi. Nhưng làm sao để dùng nó chiến thắng trong cuộc đua công bố quốc tế? Hẹn gặp lại ở **Chương 3: The Strategy** - Nơi những "Lão hồ ly" bàn chuyện chiến lược.' }],
            },
        ]
    }
];
