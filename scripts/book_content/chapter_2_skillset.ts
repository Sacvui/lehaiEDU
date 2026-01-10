
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
                children: [{ _type: 'span', text: 'Hai Morning: Đừng dùng dao mổ trâu giết gà' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chào buổi sáng. \n\nTôi thấy nhiều bạn sắm Macbook 50 triệu về chỉ để... gõ Word. Phí của giời. \nLàm nghiên cứu cũng vậy. Các bạn có trong tay những con quái vật (R, Python) nhưng lại chỉ dùng Excel để cộng trừ nhân chia. \n\nChương này tôi không dạy Code (lên Youtube mà học). Tôi dạy bạn cách tư duy: Khi nào thì dùng dao gọt hoa quả (Excel), khi nào thì vác đại bác (Python) ra bắn.' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '---\n' }],
            },

            // --- PHẦN 1: SMARTPLS - CỖ MÁY KIẾM CƠM (THE CASH COW) ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 1: SmartPLS - Cỗ máy in bằng' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nói thẳng luôn: Muốn ra trường sớm thì học SmartPLS. \nTại sao? Vì nó dễ. Kéo thả như chơi Lego. Dữ liệu méo mó, ít ỏi nó cũng nuốt trôi hết. Nó là cứu cánh cho những bộ dữ liệu "nát".' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Quy trình 3 bước (Dễ như ăn kẹo)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '- **Bước 1: Check hàng (Measurement Model):** Thang đo có xịn không? \n   + Cronbach Alpha > 0.7: Đủ tin cậy.\n   + AVE > 0.5: Đủ chất lượng.\n   + HTMT < 0.85: Không bị trùng lặp.\n- **Bước 2: Check giá (Structural Model):** Giả thuyết có được chấp nhận không? (P-value < 0.05). \n- **Bước 3: Check lãi (R-square):** Mô hình giải thích được bao nhiêu % hiện tượng? Càng cao càng oai.' }],
            },
            {
                _type: 'block',
                style: 'blockquote',
                children: [{ _type: 'span', text: '💡 [LỜI KHUYÊN]: Khi chạy ra kết quả xấu, đừng vội xóa dữ liệu. Hãy xem lại lý thuyết. Đôi khi kết quả "fail" lại là một phát hiện chấn động đấy.' }],
            },

            // --- BRIDGE 1 -> 2 ---
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '\nSmartPLS cho ra kết quả, nhưng hình vẽ của nó thì xấu đau đớn. Muốn bài đăng Q1, hình phải đẹp như tác phẩm nghệ thuật. Đó là lúc bạn cần gọi tên "R".\n' }],
            },

            // --- PHẦN 2: R - HỌA SĨ TÀI BA (THE ARTIST) ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 2: R - Vẽ hình để "Lòe" thiên hạ' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Excel vẽ hình nhìn rất... văn phòng. R vẽ hình nhìn rất... bác học.\nChỉ một dòng code `ggplot`, bạn có thể vẽ ra những biểu đồ long lanh, phức tạp mà Excel khóc thét.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Tại sao phải khổ sở học code?' }],
            },
            {
                _type: 'normal', // Typo fix: style: 'normal'
                style: 'normal',
                children: [{ _type: 'span', text: 'Vì nó Tái sử dụng (Reusable). \nBạn hì hục click chuột 3 tiếng vẽ xong cái bieur đồ trong Excel. Sếp bảo: "Đổi màu đỏ thành xanh nhé". Bạn lại hì hục click lại từ đầu.\nVới R? Sửa chữ "red" thành "blue". Bấm Run. Xong trong 1 giây. Đẳng cấp là ở chỗ đó.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Tư duy "Bóc tách" (Layers)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'R dạy bạn tư duy tách bạch: Dữ liệu là dữ liệu, Hình thức là hình thức. \nBạn có thể khoác lên bộ dữ liệu cũ những "bộ cánh" mới toanh. Hôm nay vẽ biểu đồ cột, mai chán vẽ biểu đồ nhiệt (Heatmap). Quyền lực nằm trong tay bạn.' }],
            },

            // --- BRIDGE 2 -> 3 ---
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '\nR rất tuyệt để vẽ và chạy thống kê. Nhưng nếu sếp vứt cho bạn 1 triệu dòng dữ liệu từ Shopee và bảo: "Tìm xem đứa nào đang chửi công ty mình?". Lúc đó R sẽ thở dốc. Đã đến lúc gọi bố già Python.\n' }],
            },

            // --- PHẦN 3: PYTHON - ÔNG TRÙM DỮ LIỆU (THE BOSS) ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 3: Python - Nuốt trọn Big Data' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Python không phải là con rắn. Nó là con quái vật. \nNó có thể cạo (Scrape) toàn bộ dữ liệu trên web về máy bạn trong lúc bạn đang ngủ. Nó có thể đọc (NLP) hàng ngàn comment khách hàng để biết họ vui hay buồn.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Tự động hóa sự lười biếng' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Tôi từng mất 2 ngày cuối tuần để gộp 50 file báo cáo doanh số. \nSau khi biết Python, tôi viết 5 dòng code. Bấm Enter. Đi pha cafe. Quay lại xong rồi. \nĐừng làm việc chăm chỉ. Hãy làm việc thông minh.' }],
            },

            // --- PHẦN 4: AI COPILOT - NGƯỜI CỘNG SỰ (THE PARTNER) ---
            {
                _type: 'block',
                style: 'h1',
                children: [{ _type: 'span', text: 'Phần 4: AI Copilot - Code bằng mồm' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Tin vui: Bạn KHÔNG CẦN phải nhớ cú pháp code nữa. \nChatGPT, Claude, Cursor ra đời để làm nô lệ cho bạn. \nBạn chỉ cần ra lệnh: "Viết cho tao code Python để cào dữ liệu giá Iphone trên Tiki". Nó sẽ viết. \n\nKỹ năng quan trọng nhất bây giờ không phải là Code, mà là Prompt Engineering (Kỹ năng ra lệnh). Biết hỏi đúng, AI sẽ cho câu trả lời đúng.' }],
            },

            // --- LỜI KẾT CHƯƠNG ---
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '---\n\nXong nhé. Giờ bạn đã có súng (SmartPLS), có gươm (R) và có cả xe tăng (Python). Nhưng mang đống vũ khí này ra trận mà không có Chiến thuật thì cũng chỉ làm bia đỡ đạn thôi. \n\nChương sau: **The Strategy**. Tôi sẽ chia sẻ bí kíp sinh tồn giữa bầy sói (Reviewer) và cách để bài báo của bạn "sống sót" qua vòng gửi xe.' }],
            },
        ]
    }
];
