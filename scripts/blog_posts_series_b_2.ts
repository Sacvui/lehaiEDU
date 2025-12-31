export const series_b_2 = [
    {
        title: '[Research Zero-to-Pro #6] Data Analysis: SPSS/SmartPLS cho người sợ Toán - 3 Bảng là đủ 🧮',
        slug: { current: 'research-series-6-data-analysis' },
        publishedAt: new Date(Date.now() - 1600000000).toISOString(),
        excerpt: 'Bạn mở phần mềm SPSS/SmartPLS lên và mồ hôi hột đổ ra? Hàng ngàn con số nhảy múa? Bình tĩnh. Là một người làm Business đi làm nghiên cứu, Hải sẽ chỉ bạn cách đọc kết quả "nhanh-gọn-lẹ".',
        categorySlug: 'academic-corner',
        coverImage: '/blog/research_series_4_methodology.png',
        featured: false,
        readingTime: 20,
        tags: ['Data Analysis', 'SPSS', 'SmartPLS', 'Statistics', 'Series B'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nỗi sợ lớn nhất của dân xã hội (Social Science) khi làm nghiên cứu là TOÁN. Nghe đến phương sai, độ lệch chuẩn, p-value là muốn xỉu.\n\nTin vui đây: Ở kỷ nguyên SmartPLS 4.0, bạn không cần phải là thần đồng toán học. Phần mềm nó tính hết rồi. Nhiệm vụ của bạn là biết "Đọc lệnh" (Interpret) - tức là biết con số nào là Tốt (Pass), con số nào là Xấu (Fail).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Quy trình 2 bước thần thánh' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Hãy tưởng tượng bạn đang kiểm tra chất lượng một chiếc xe máy. Có 2 bước:\n1.  **Kiểm tra từng bộ phận (Measurement Model):** Lốp có căng không? Phanh có ăn không?\n2.  **Chạy thử (Structural Model):** Xe có chạy nhanh không? Động cơ có mạnh không?' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Bước 1: Measurement Model (Đo lường thang đo)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Bạn cần check 3 chỉ số này:\n\n*   **Cronbach\'s Alpha & Reliability:** Độ tin cậy. Hiểu nôm na là các câu hỏi trong 1 thang đo có "nhất quán" với nhau không. **Yêu cầu: > 0.7** là Đạt. (Nếu 0.6-0.7 thì châm chước được).\n*   **AVE (Average Variance Extracted):** Độ hội tụ. Tức là các câu hỏi có tập trung vào vấn đề chính không hay lan man. **Yêu cầu: > 0.5**.\n*   **HTMT:** Độ phân biệt. Tức là Khái niệm A và Khái niệm B có khác nhau không hay trùng lắp. **Yêu cầu: < 0.85**.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Bước 2: Structural Model (Kiểm định giả thuyết)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đây là lúc xem kết quả A có tác động lên B không.\n\n*   **p-value:** Chỉ số quyền lực nhất. **p < 0.05** (nhỏ hơn 0.05) => Có ý nghĩa thống kê (Giả thuyết được chấp nhận). Các bạn cứ thấy chỗ nào màu xanh lá cây là sướng, màu đỏ là buồn.\n*   **R-square:** Mức độ giải thích của mô hình. Tức là các biến độc lập giải thích được bao nhiêu % sự thay đổi của biến phụ thuộc. Ví dụ R2 = 0.5 nghĩa là giải thích được 50%. (Trong Social Science: 0.25 là Yếu, 0.5 Trung bình, 0.75 Mạnh).' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Xong! Copy các bảng đó ra Word, tô màu, viết nhận xét theo văn mẫu. Thế là xong chương 4 (Kết quả). Dễ không? 😉' }],
            }
        ]
    },
    {
        title: '[Research Zero-to-Pro #7] Structuring: Công thức IMRaD - Khung xương của bài báo chuẩn ISI 💃',
        slug: { current: 'research-series-7-structuring' },
        publishedAt: new Date(Date.now() - 1700000000).toISOString(),
        excerpt: 'Bạn viết bài báo như viết tiểu thuyết, lan man, không đầu không đuôi? Hèn gì bị Reject. Hãy học công thức IMRaD - tiêu chuẩn vàng của giới học thuật thế giới.',
        categorySlug: 'academic-corner',
        featured: false,
        readingTime: 18,
        tags: ['Academic Writing', 'IMRaD', 'Paper Structure', 'Publication', 'Series B'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Một bài báo khoa học không phải là nơi để bạn khoe chữ (trừ khi bạn làm ngành Văn học). Nó là một báo cáo kỹ thuật (Technical Report) cần sự súc tích, rõ ràng và tuân thủ cấu trúc chuẩn.\n\nCấu trúc đó là **IMRaD**: **I**ntroduction - **M**ethods - **R**esults - **a**nd - **D**iscussion.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Introduction (Mở bài): Chiếc Phễu Ngược' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đi từ cái chung đến cái riêng.\n- **Bối cảnh (Context):** Thế giới đang xảy ra chuyện gì? (Ví dụ: Covid làm thay đổi hành vi du lịch).\n- **Vấn đề (Problem):** Có gì chưa ổn? (Nhưng các cty du lịch chưa biết cách thích ứng).\n- **Khoảng trống (Gap):** Các nghiên cứu trước chưa chỉ ra được yếu tố X.\n- **Mục tiêu (Objective):** Bài này sinh ra để giải quyết yếu tố X đó.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Methods (Phương pháp): Cuốn sách nấu ăn' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Phần này phải viết cực kỳ chi tiết (Detail) để người khác đọc xong có thể làm lại y chang (Replicate).\n- Mẫu (Sample): Ai? Bao nhiêu người? Lấy ở đâu?\n- Thang đo (Measures): Lấy của ông nào? Có chỉnh sửa gì không?\n- Quy trình (Procedure): Thu thập dữ liệu trong bao lâu?' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. Results (Kết quả): Sự thật trần trụi' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chỉ trình bày con số. Không chém gió, không bình luận. Dùng biểu đồ (Chart) và Bảng (Table) để trực quan hóa. Nguyên tắc: Đã vẽ hình thì thôi bảng, đã bảng thì thôi hình (đỡ tốn diện tích giấy của tạp chí).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '4. Discussion (Bàn luận): Phần quan trọng nhất (Chiếm 40%)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đây là lúc bạn tỏa sáng (Show off).\n- **Giải thích:** Tại sao H1 lại được chấp nhận? (Tại vì văn hóa VN nó thế...).\n- **So sánh:** Kết quả này giống hay khác ông A, ông B? Nếu khác thì tại sao?\n- **Đóng góp (Implication):** Sếp doanh nghiệp đọc bài này xong thì áp dụng được gì để kiếm tiền? Nhà nước đọc xong đẻ ra chính sách gì?' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Viết đúng form này, Reviewer đọc vào thấy "sướng" vì họ tìm thông tin rất nhanh. Đừng bắt họ chơi trốn tìm trong mớ chữ của bạn.' }],
            }
        ]
    },
    {
        title: '[Research Zero-to-Pro #8] Selecting Journal: Chọn mặt gửi vàng - Bí kíp săn tạp chí Q3/Q4 🎯',
        slug: { current: 'research-series-8-selecting-journal' },
        publishedAt: new Date(Date.now() - 1800000000).toISOString(),
        excerpt: 'Bài bạn viết hay như rồng bay phượng múa, nhưng gửi nhầm tạp chí thì cũng "đắp chiếu" ngàn thu. Làm sao phân biệt tạp chí xịn (Scopus) và tạp chí dỏm (Predatory)?',
        categorySlug: 'academic-corner',
        featured: false,
        readingTime: 20,
        tags: ['Journal Selection', 'Scopus', 'Q3', 'Q4', 'Predatory Journal', 'Series B'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chọn tạp chí cũng như chọn trường đại học cho con. Chọn sai là hỏng cả tương lai.\n\nNhiều bạn mới (Newbie) hay mắc bệnh "trèo cao ngã đau". Mới bài đầu tay mà cứ nhắm Nature, Science (Q1 Top Tier) mà phang. Tỷ lệ từ chối 95-98%. Gửi đi 3 tháng nó trả về, mất thời gian.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Chiến lược "Biết người biết ta"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Với người mới, Chiến lược thông minh là: **Nhắm Q3 hoặc Q4 (trong Scopus/Web of Science).**\n\nTại sao?\n1.  Quy trình review đỡ gắt hơn (nhưng vẫn chuẩn mực).\n2.  Tỷ lệ chấp nhận (Acceptance Rate) cao hơn (tầm 20-30%).\n3.  Đủ điều kiện để bảo vệ Thạc sĩ, Tiến sĩ ở VN và nhiều nước Châu Âu.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Công cụ tìm tạp chí (Journal Finders)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng đi hỏi lung tung. Hãy dùng AI của các nhà xuất bản lớn.\n\n*   **Elsevier Journal Finder**\n*   **Springer Journal Suggester**\n*   **Taylor & Francis Journal Suggester**\n\nBạn chỉ cần Paste cái Tên bài (Title) và Tóm tắt (Abstract) của bạn vào. Bấm nút. Nó sẽ list ra 10 tạp chí phù hợp nhất, kèm các thông số quan trọng:\n- **Impact Factor:** Chỉ số ảnh hưởng (càng cao càng xịn).\n- **Acceptance Rate:** Tỷ lệ nhận (chọn cái nào >20% cho an toàn).\n- **Time to 1st Decision:** Thời gian chờ (chọn cái nào < 3 tháng thôi, đợi cả năm chắc chết già).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Cảnh bảo: Tạp chí săn mồi (Predatory Journals)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nếu một ngày đẹp trời, bạn nhận được email: "Dear Dr. Hai, bạn là một thiên tài. Hãy gửi bài cho chúng tôi. Chúng tôi cam kết đăng trong 3 ngày. Phí 500$".\n\n**XÓA NGAY! BLOCK NGAY!**\n\nĐó là lũ lừa đảo. Tạp chí khoa học chân chính KHÔNG BAO GIỜ mời mọc kiểu rẻ tiền đó. Đăng bài trên đó là vết nhơ trong hồ sơ, sau này nhục không để đâu cho hết. Hãy check kỹ trên danh sách **Beall\'s List** hoặc tra cứu trong Scopus trước khi gửi.' }],
            }
        ]
    },
    {
        title: '[Research Zero-to-Pro #9] Submission & Revision: Đối mặt với "Hung thần" Reviewer 2 👹',
        slug: { current: 'research-series-9-submission' },
        publishedAt: new Date(Date.now() - 1900000000).toISOString(),
        excerpt: 'Nhận email "Major Revision" (Sửa lớn) là tin vui hay buồn? Tuyệt chiêu viết Response Letter (Thư giải trình) để thuần hóa những Reviewer khó tính nhất.',
        categorySlug: 'academic-corner',
        featured: false,
        readingTime: 20,
        tags: ['Peer Review', 'Revision', 'Response Letter', 'Academic Publishing', 'Series B'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Gửi bài đi xong (Submission), là chuỗi ngày chờ đợi trong lo âu. Ngày nào cũng F5 email. Rồi một ngày, email đến. Tim đập thình thịch.\n\nCó 3 kịch bản:\n1.  **Desk Reject:** Bị loại ngay từ vòng gửi xe. (Buồn 1 chút, rồi tìm báo khác gửi).\n2.  **Accepted (hiếm lắm):** Nhận luôn không cần sửa. (Chỉ có trong mơ).\n3.  **Revise and Resubmit (Phổ biến):** Yêu cầu sửa chữa. Đây là TIN MỪNG! Tức là cửa đã hé mở được 50%.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Huyền thoại "Reviewer 2"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Thường mỗi bài sẽ có 2-3 người phản biện kín. Có một "lời nguyền" vui: Reviewer 1 thường rất dễ thương, khen ngợi. Nhưng Reviewer 2 luôn là một gã đồ tể, chê bai thậm tệ, vạch lá tìm sâu, lời lẽ cay nghiệt.\n\nĐừng tự ái. Đừng chửi lại. Hãy nhớ: Mục đích của họ là giúp bài mình tốt lên (và họ làm miễn phí cơ mà).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Tuyệt chiêu Response Letter' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Bạn phải viết một bức thư giải trình dài hơn cả bài báo, trả lời từng câu hỏi (Point-by-point).\n\n**Chiến thuật:**\n*   **Luôn Biết ơn:** Mở đầu bằng "We sincerely thank the Reviewer for the insightful comments...". Dù ổng chửi mình ngu cũng phải cảm ơn.\n*   **Đồng ý một nửa:** Nếu ổng bắt sửa cái gì hợp lý -> Sửa ngay. Ghi: "Done. We have modified..." (Tô màu vàng trong bài).\n*   **Từ chối khéo:** Nếu ổng bắt sửa cái vô lý (ví dụ đòi lấy thêm mẫu trong khi hết tiền). Hãy giải thích: "Chúng tôi đồng ý là ý tưởng này hay. Tuy nhiên do giới hạn nguồn lực... nên chúng tôi xin phép ghi nhận vào phần Limitation để nghiên cứu sau".' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Thái độ quyết định tất cả. Hãy cầu thị. 90% các bài Revise and Resubmit sẽ được Accept nếu tác giả chịu khó sửa.' }],
            }
        ]
    },
    {
        title: '[Research Zero-to-Pro #10] Ethics & Future: Đừng bán linh hồn cho quỷ dữ 😈',
        slug: { current: 'research-series-10-ethics' },
        publishedAt: new Date(Date.now() - 2000000000).toISOString(),
        excerpt: 'Trong cơn say chạy theo số lượng bài báo (KPI), nhiều người đã đánh mất liêm chính khoa học. Đạo văn, bịa số liệu là con đường ngắn nhất để hủy hoại sự nghiệp.',
        categorySlug: 'academic-corner',
        featured: false,
        readingTime: 15,
        tags: ['Research Ethics', 'Plagiarism', 'Integrity', 'Future Career', 'Series B'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Bài cuối cùng của Series Research, Hải không nói về kỹ thuật nữa. Hải nói về **ĐẠO ĐỨC (Ethics)**.\n\nÁp lực "Publish or Perish" (Xuất bản hay là Chết) rất kinh khủng, nhất là với các bạn làm Tiến sĩ hay giảng viên cần KPI. Nhiều người đã nhắm mắt làm liều.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Hai cái tội "chết người"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '**1. Plagiarism (Đạo văn):**\nCầm bài của người khác, dịch sang tiếng Việt, xào nấu lại rồi nhận là của mình. Đừng dại. Turnitin và các phần mềm AI giờ nó khôn lắm. Nó quét ra cấu trúc câu, ý tưởng giống nhau là nó báo đỏ lòm. Một lần dính chàm là cả đời không ngóc đầu lên được trong giới học thuật.\n\n**2. Fabrication (Bịa số liệu):**\nLười đi khảo sát, ngồi nhà tự điền 500 phiếu cho số liệu nó đẹp. Reviewer xịn họ nhìn vào bảng phân phối chuẩn (Normal Distribution) là họ biết ngay số liệu "nhân tạo". Đừng đùa với lửa.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Legacy (Di sản) của bạn là gì?' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nghiên cứu khoa học vất vả lắm. Cô đơn lắm. Nhưng cái cảm giác khi bạn đóng góp được một hạt cát nhỏ bé vào kho tàng tri thức nhân loại, nó thiêng liêng lắm.\n\nSau này con cháu google tên bạn, thấy bài báo của bạn nằm trên ScienceDirect, được trích dẫn khắp nơi. Đó là Di sản. Tiền bạc tiêu rồi cũng hết, nhưng tri thức (Knowledge) thì còn mãi.\n\nHải chúc các bạn giữ vững cái tâm trong sáng và cái đầu lạnh trên con đường chông gai này. Hẹn gặp lại các bạn ở đỉnh vinh quang Q1! 🎓🚀' }],
            }
        ]
    }
];
