
export const r101_series = [
    {
        title: 'R101 - Bài 1: R là cái quái gì mà dân tình mê mẩn? (Kèm Hướng Dẫn Cài Đặt 5 Phút)',
        slug: { current: 'r101-bai-1-intro-install' },
        publishedAt: new Date(Date.now() - 432000000).toISOString(),
        excerpt: 'Bạn đã bao giờ phát điên vì file Excel 500MB treo máy? Hay nhìn bảng kết quả SPSS xấu đau xấu đớn? Chào mừng đến với R - tình yêu đích thực của dân Data Analyst.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/r101_lesson1_cover_1767437895311.png',
        featured: true,
        readingTime: 10,
        tags: ['Quantitative', 'R101', 'Data Analysis', 'R Programming', 'Góc nhìn HaiLP'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chào các bạn, Hải đây.\n\nNếu các bạn đang làm Marketing, HR hay Kinh doanh, chắc hẳn các bạn đã quá quen với Excel. Excel tuyệt vời, không ai phủ nhận. Nhưng... \n\nCó bao giờ bạn mở một file Excel nặng tầm 500MB lên và máy tính của bạn bắt đầu kêu như máy cày, rồi màn hình "Not Responding" quay đều quay đều chưa? Tôi thì bị rồi, và tôi suýt đập máy. \n\nHoặc có bao giờ bạn chạy mô hình trên SPSS, copy cái bảng kết quả ra Word/PowerPoint và thấy nó... xấu đau xấu đớn, format lệch lạc, nhìn chán chả buồn đọc không?\n\nĐó là lúc bạn cần đến R.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Tại sao lại là R mà không phải Python hay cái khác?' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Thực ra Python cũng rất xịn, nhất là cho dân Engineering/AI. Nhưng với dân Kinh tế/Xã hội như chúng ta, R là "chân ái" vì:\n\n- Nó sinh ra để làm thống kê: Python là ngôn ngữ đa năng (làm web, game...), còn R sinh ra từ đầu chỉ để phục vụ tính toán. Các hàm thống kê của nó cực kỳ chuyên sâu và chuẩn xác.\n- Khả năng vẽ hình "Vô đối": Với gói `ggplot2`, R đè bẹp tất cả các đối thủ về khoản visual. Bạn có thể vẽ những biểu đồ đẹp như tạp chí The Economist chỉ với vài dòng code.\n- Miễn phí 100%: SPSS giá cả ngàn đô (hoặc bạn phải dùng crack lén lút). R thì free, cài ở đâu cũng được, không sợ bản quyền.\n- Reproducible Research (Nghiên cứu có thể lặp lại): Đây là cái hay nhất. Bạn viết code 1 lần, tháng sau có data mới, bấm nút "Run" cái là xong. Không phải ngồi click chuột thủ công làm lại từ đầu như Excel.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Cài đặt R & RStudio trong 5 phút (Dễ hơn cài game)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Để chạy được R, chúng ta cần 2 thứ: \n1.  **R (Engine):** Cái lõi để tính toán. (Giống như cái động cơ xe).\n2.  **RStudio (IDE):** Cái giao diện đẹp đẽ để mình viết code. (Giống như cái vỏ xe, vô lăng, ghế ngồi).\n\nLink tải đây (chọn bản Free nhé): [Posit.co](https://posit.co/download/rstudio-desktop/)\nSau khi cài xong, mở RStudio lên, bạn sẽ thấy nó chia làm 4 góc như "Bánh chưng" thế này:' }],
            },
            {
                _type: 'image',
                localPath: '/blog/r101_body_l1_interface_1767441094620.png',
                alt: 'Giao diện RStudio 4 góc',
                caption: 'Giao diện RStudio: Góc trên trái là Bếp (Source), dưới trái là Chỗ thử món (Console), trên phải là Tủ lạnh (Environment), dưới phải là Tủ chén (Files/Plots).'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Giải ngố:\n- Source (Góc 1): Nơi viết công thức nấu ăn (lưu lại được).\n- Console (Góc 2): Nơi nấu thử. Gõ `1 + 1` Enter cái nó ra `2` luôn. Tắt máy là mất.\n- Environment (Góc 3): Kho nguyên liệu. Bạn nhập file excel vào, biến số nó sẽ nằm ở đây.\n- Files/Plots (Góc 4): Nơi hiển thị biểu đồ vẽ ra. Đẹp hay xấu là nhìn vào đây.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. Chạy dòng code đầu tiên: Hello World' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Mở RStudio lên, gõ dòng này vào Console rồi Enter:\n\n`print("Xin chào, tôi là Researcher cool ngầu!")`\n\nNó hiện ra:\n`[1] "Xin chào, tôi là Researcher cool ngầu!"`\n\nChúc mừng! Bạn đã chính thức trở thành "Coder". Dễ quá mức quy định đúng không? Hẹn gặp lại ở bài sau chúng ta sẽ "bẻ khóa" Dữ liệu.' }],
            }
        ]
    },
    {
        title: 'R101 - Bài 2: Dọn Rác Dữ Liệu (Data Cleaning) - Ác Mộng Của Mọi Researcher',
        slug: { current: 'r101-bai-2-data-cleaning' },
        publishedAt: new Date(Date.now() - 345600000).toISOString(),
        excerpt: '80% thời gian làm Data là để... dọn rác. Thiếu dữ liệu (NA), sai định dạng, dư khoảng trắng. Đừng lo, gói `tidyverse` sẽ là cái chổi thần kỳ của bạn.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/r101_lesson2_cover_1767437910547.png',
        featured: false,
        readingTime: 12,
        tags: ['Quantitative', 'R101', 'Data Cleaning', 'dplyr', 'Góc nhìn HaiLP'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Sếp gửi cho bạn file `customer_data.csv`. Bạn hý hửng mở ra và... ối giời ơi:\n- Cột tuổi thì có ông điền "chín mươi", ông điền "90".\n- Cột thu nhập thì ông điền số, ông điền "5 củ".\n- Cột giới tính thì "Nam", "Male", "M", "Boy" loạn xì ngầu.\n\nNếu đưa đống rác này vào chạy SPSS hay Excel thì nó báo lỗi ngay. R có một cái máy hút bụi cực mạnh tên là `dplyr`.' }],
            },
            {
                _type: 'image',
                localPath: '/blog/r101_body_l2_cleaning_1767441110597.png',
                alt: 'Data Cleaning Process',
                caption: 'Quy trình dọn rác: Input Rác -> Qua phễu lọc -> Output Sạch bong kin kít.'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Load dữ liệu & Thư viện' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '`library(tidyverse)`  (Gọi chổi thần)\n`df <- read_csv("marketing_sample.csv")` (Đọc file)\n\nLệnh `read_csv` hay hơn `read.csv` của R gốc nhiều. Nó thông minh hơn, tự đoán định dạng (số hay chữ) chuẩn hơn.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Các tuyệt chiêu dọn nhà' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '- Lọc khách hàng (Filter): Chỉ lấy khách VIP?\n    `df_vip <- filter(df, Customer_Type == "VIP")`\n\n- Chọn cột (Select): Bảng 100 cột, chỉ lấy cột Tên và Tuổi?\n    `df_small <- select(df, Name, Age)`\n\n- Tạo biến mới (Mutate): Muốn tính Lương Năm = Lương Tháng * 12?\n    `df <- mutate(df, Annual_Income = Monthly_Income * 12)`\n\n- Sắp xếp (Arrange): Ai giàu nhất đứng đầu?\n    `df <- arrange(df, desc(Income))`\n\nThấy chưa? Viết code mà như viết văn tả cảnh vậy. `filter` là lọc, `arrange` là sắp xếp. Dễ hiểu đến phát khóc.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Ví dụ thực tế (Simulation)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Giả sử ta có bảng dữ liệu gốc:' }],
            },
            {
                _type: 'code',
                language: 'markdown',
                code: '| ID | Name   | Age | Income   |\n|----|--------|-----|----------|\n| 1  | Tuan   | 25  | 1000     |\n| 2  | Huong  | NA  | 2000     |\n| 3  | Lan    | 30  | NA       |'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chạy lệnh dọn rác:\n`df_clean <- df %>% drop_na()`\n\nKết quả (Bùm!):' }],
            },
            {
                _type: 'code',
                language: 'markdown',
                code: '| ID | Name   | Age | Income   |\n|----|--------|-----|----------|\n| 1  | Tuan   | 25  | 1000     |'
            }
        ]
    },
    {
        title: 'R101 - Bài 3: Vẽ Hình Nghệ Thuật Với ggplot2 - Đừng Làm Xấu Mặt Excel Nữa',
        slug: { current: 'r101-bai-3-data-viz-ggplot2' },
        publishedAt: new Date(Date.now() - 259200000).toISOString(),
        excerpt: 'Nếu data là nguyên liệu, thì biểu đồ (Chart) là món ăn. Excel nấu món này chín nhưng trình bày... xấu. ggplot2 của R là nhà hàng Michelin 3 sao về khoản trình bày.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/r101_lesson3_cover_1767438616732.png',
        featured: false,
        readingTime: 12,
        tags: ['Quantitative', 'R101', 'Data Visualization', 'ggplot2', 'Góc nhìn HaiLP'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Có một câu nói rất hay: "A picture is worth a thousand numbers". \n\n*Business Insight:* Sếp của bạn (C-level) cực kỳ bận. Họ không có thời gian soi từng con số. Một biểu đồ tốt phải giúp họ nắm bắt "đại ý" trong vòng 3 giây. Nếu cần > 5 giây để hiểu, biểu đồ đó thất bại. Đây gọi là nguyên tắc **"Giảm tải nhận thức" (Cognitive Load Reduction)**.\n\nExcel thường vi phạm điều này với mấy cái hiệu ứng 3D, bóng đổ (Shadow) lòe loẹt làm rối mắt. `ggplot2` của R đi theo tư duy tối giản (Minimalism) của Edward Tufte - Tối đa hóa **Tỷ lệ Dữ liệu-Mực in (Data-Ink Ratio)**.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Tư duy "Grammar of Graphics"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '`gg` viết tắt của Grammar of Graphics (Ngữ pháp đồ họa). Vẽ hình trong R giống như xếp hình Lego, bạn xếp từng lớp (Layer) lên nhau:\n1. Data: Nền móng (Dữ liệu của bạn)\n2. Aesthetics (aes): Trục X là gì? Trục Y là gì? Màu sắc theo cột nào?\n3. Geometries (geom): Vẽ cái gì? (Cột, đường, chấm...)\n\nCông thức thần thánh:\n`ggplot(data, aes(x=..., y=...)) + geom_...()`' }],
            },
            {
                _type: 'image',
                localPath: '/blog/r101_body_l3_ggplot_1767441132505.png',
                alt: 'ggplot2 Layers Infographic',
                caption: 'Tư duy xếp hình Lego của ggplot2: Cứ xếp chồng từng lớp lên là thành tác phẩm.'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Thực hành 1: Biểu đồ cột (Bar Chart)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Muốn so sánh Thu nhập trung bình giữa Nam và Nữ?\n\n`ggplot(df, aes(x = Gender, y = Income, fill = Gender)) + geom_col()`\n\nNó vẽ ra ngay. Nhưng chưa đẹp. Muốn đẹp thì thêm gia vị (theme) vào:\n\n`ggplot(df, aes(x = Gender, y = Income, fill = Gender)) +`\n`  geom_col() +`\n`  theme_minimal() +`  (Giao diện tối giản)\n`  labs(title = "Thu nhập theo giới tính", x = "", y = "VND")`\n\nBùm! Trông sang hơn hẳn chưa?' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Thực hành 2: Biểu đồ phân tán (Scatter Plot)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Muốn xem Tuổi càng cao thì Thu nhập càng cao hay thấp?\n\n`ggplot(df, aes(x = Age, y = Income)) +`\n`  geom_point() +` (Vẽ các chấm điểm)\n`  geom_smooth(method = "lm")` (Vẽ thêm đường xu hướng)\n\nBạn sẽ thấy ngay một đường thẳng đi lên (hoặc đi xuống). Excel vẽ cái này mất cả buổi, R vẽ mất 1 dòng code.\n\nKết luận: Đừng vẽ hình 3D lòe loẹt nữa. Hãy vẽ đơn giản nhưng tinh tế. Đó là đẳng cấp.' }],
            }
        ]
    },
    {
        title: 'R101 - Bài 4: Thống Kê Mô Tả - Kể Chuyện Bằng Những Con Số',
        slug: { current: 'r101-bai-4-descriptive-stats' },
        publishedAt: new Date(Date.now() - 172800000).toISOString(),
        excerpt: 'Mean, Median, Mode là gì? Tại sao "Thu nhập bình quân" lại là cú lừa thế kỷ? Hãy cùng giải mã những con số biết nói.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/r101_lesson4_cover_1767438634611.png',
        featured: false,
        readingTime: 12,
        tags: ['Quantitative', 'R101', 'Descriptive Statistics', 'Table 1', 'Góc nhìn HaiLP'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Trước khi chạy mô hình cao siêu, bạn phải hiểu dữ liệu của mình mặt mũi ra sao đã. Đó là nhiệm vụ của Thống kê mô tả (Descriptive Statistics).\n\nNhưng cẩn thận, những con số này biết nói dối đấy. Ví dụ kinh điển: Lớp có 9 bạn nghèo rớt mồng tơi (thu nhập 5 triệu/tháng). Bỗng nhiên tỷ phú Phạm Nhật Vượng bước vào lớp (thu nhập 1000 tỷ/tháng). \n-> Bùm! Thu nhập TRUNG BÌNH (Mean) của cả lớp vọt lên 100 tỷ/tháng. \n-> Kết luận: Cả lớp giàu nứt đố đổ vách? Sai bét!\n\nĐó là lý do ta cần phân biệt Mean và Median.' }],
            },
            {
                _type: 'image',
                localPath: '/blog/r101_body_l4_dist_1767441203566.png',
                alt: 'Mean vs Median Distribution',
                caption: 'Khi dữ liệu bị lệch (như Thu nhập), Mean (Trung bình) sẽ bị kéo lệch đi. Median (Trung vị) mới là chân ái.'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Bộ ba quyền lực: Mean - Median - Mode' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '- Mean (Trung bình): Cộng lại chia đều. Dễ bị tỷ phú làm lệch.\n- Median (Trung vị): Thằng đứng chính giữa. Tỷ phú vào thì kệ tỷ phú, thằng đứng giữa vẫn nghèo. -> Dùng khi dữ liệu có biến động lớn (Outlier).\n- Mode (Yếu vị): Giá trị xuất hiện nhiều nhất. (Hợp để tìm "Size áo nào bán chạy nhất").\n\nTrong R:\n`mean(df$Income)`\n`median(df$Income)`' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Độ lệch chuẩn (SD) - Ai ổn định hơn?' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Có 2 nhân viên Sale cùng bán được trung bình 100 triệu/tháng. Nhưng ông A tháng nào cũng 100tr, ông B tháng 0 đồng tháng 200tr. \nNhìn **SD** để biết:\nSD ông A = 0 (Rất ổn định).\nSD ông B = 100 (Rất bấp bênh).\n\nTrong R: `sd(df$Income)`' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. Có "bình thường" không? (Kiểm định phân phối chuẩn)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Mean và SD chỉ có ý nghĩa khi dữ liệu phân phối chuẩn (hình chuông). Nếu dữ liệu méo mó, dùng Median an toàn hơn.\n\n*Góc nhìn khoa học: Để chắc chắn, hãy dùng Shapiro-Wilk test:*\n`shapiro.test(df$Income)`\n- Nếu p < 0.05 -> Không chuẩn -> Nên báo cáo Median (IQR).\n- Nếu p > 0.05 -> Chuẩn -> Báo cáo Mean (SD).\n\nLàm đúng quy trình này thì Reviewer chỉ có gật gù khen bạn chuyên nghiệp.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '4. Table 1 thần thánh' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Làm bài báo khoa học thì cái bảng đầu tiên (Table 1) luôn là "Thông tin nhân khẩu học".\n\nTrong R, chỉ 1 dòng code với gói `tableone`:\n\n`library(tableone)`\n`CreateTableOne(data = df)`\n\nKết quả nó tự vẽ ra (tưởng tượng nhé):' }],
            },
            {
                _type: 'code',
                language: 'markdown',
                code: '|              | Overall    | Male       | Female     | P-value |\n|--------------|------------|------------|------------|---------|\n| n            | 100        | 45         | 55         |         |\n| Age (mean (SD)) | 34.5 (10.2)| 35.1 (9.8) | 33.9 (10.5)| 0.452   |\n| Income (median)| 15.5       | 16.0       | 15.0       | 0.123   |'
            }
        ]
    },
    {
        title: 'R101 - Bài 5: Kiểm Định Thang Đo: Cronbach\'s Alpha & EFA - Đừng "Đốt Nhà" Trước Khi Xây',
        slug: { current: 'r101-bai-5-cronbach-efa' },
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        excerpt: 'Việc đầu tiên của mọi nghiên cứu là xem "thước đo" có chuẩn không. Thước cong mà đòi đo đường thẳng thì vứt. Cronbach Alpha và EFA chính là bộ đôi kiểm chứng chất lượng thước đo này.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/r101_lesson5_cover_1767438987405.png',
        featured: false,
        readingTime: 15,
        tags: ['Quantitative', 'R101', 'Cronbach Alpha', 'EFA', 'Reliability', 'Góc nhìn HaiLP'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nhiều bạn newbie hăm hở lao vào chạy hồi quy ngay lập tức. Giống như đi xây nhà lầu mà xây trên nền cát vậy. Nó sập lúc nào không hay.\n\nTrong nghiên cứu khoa học, trước khi xem "X có tác động đến Y không", ta phải xem "X và Y có được đo lường chuẩn xác không".\n\nCó 2 khái niệm bạn phải khắc cốt ghi tâm:\n1. Độ tin cậy (Reliability): Đo lường sự ổn định, nhất quán của thang đo. (Công cụ: Cronbach\'s Alpha).\n2. Giá trị (Validity): Đo lường xem nó có đo đúng cái cần đo không, hay đo nhầm sang cái khác? (Công cụ: EFA - Phân tích nhân tố khám phá).' }],
            },
            {
                _type: 'image',
                localPath: '/blog/r101_body_l5_efa_1767441222051.png',
                alt: 'EFA Concept Visual',
                caption: 'EFA giúp gom nhóm các câu hỏi rời rạc (Q1, Q2...) thành các khái niệm lớn (Factor 1, Factor 2).'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Cronbach\'s Alpha: Kiểm tra độ "Đoàn kết"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Giả sử bạn dùng 3 câu hỏi (Sat1, Sat2, Sat3) để đo lường "Sự hài lòng". Nếu một khách hàng trả lời Sat1 = 5 điểm (Rất hài lòng), Sat2 cũng phải tầm 4-5 điểm. Chứ Sat2 mà tụt xuống 1 điểm thì chứng tỏ bộ câu hỏi này "nội bộ lủng củng".\n\nTrong R, ta dùng gói `psych`:\n\n`library(psych)`\n`alpha(df %>% select(Sat1, Sat2, Sat3), check.keys=TRUE)`\n\nNhìn vào 2 chỉ số:\n1. raw_alpha: > 0.7 là ngon lành.\n2. r.drop (Item-total Correlation): Phải > 0.3. Nếu nhỏ hơn 0.3 nghĩa là câu hỏi đó "lạc quẻ", cần xóa.\n\nLưu ý: Nếu có câu hỏi ngược (Reverse items), nhớ thêm `check.keys=TRUE` để R tự động đảo chiều cho đúng.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. EFA (Exploratory Factor Analysis): Gom nhóm tinh gọn' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Bạn không thể "mơ" ra số nhóm được. Phải dùng thuật toán để chọn số nhóm tối ưu (Eigenvalues > 1).\n\nBước 1: Vẽ biểu đồ đá cuội (Scree Plot) xem nên chọn mấy nhóm\n`fa.parallel(df_scale)` -> Nó sẽ gợi ý dòng "Parallel analysis suggests n factors".\n\nBước 2: Chạy EFA chính thức\n`fa(r = cor(df_scale), nfactors = 3, rotate = "promax")`\n*(Thay số 3 bằng số gợi ý ở trên)*\n\nDân kinh tế ưu tiên xoay Promax (xoay xiên) hơn Varimax (vuông góc) vì các khái niệm xã hội thường dính dây mơ rễ má với nhau.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Tổng kết Module kiểm định' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nếu Cronbach Alpha là vòng gửi xe, thì EFA là vòng sơ khảo. Qua được 2 ải này thì dữ liệu của bạn mới "đủ tuổi" để chạy hồi quy. Nhiều bạn làm đến đây là rụng như sung rụng vì dữ liệu rác. Nên nhớ bài 1 tôi nói gì không? Data Cleaning là quan trọng nhất!' }],
            }
        ]
    },
    {
        title: 'R101 - Bài 6: Tương Quan & Hồi Quy Tuyến Tính (Regression) - Đi Tìm Chân Lý',
        slug: { current: 'r101-bai-6-regression' },
        publishedAt: new Date(Date.now() - 60000).toISOString(),
        excerpt: 'Đây rồi! "Trùm cuối" của nghiên cứu định lượng. Hồi quy tuyến tính sẽ trả lời câu hỏi triệu đô: Yếu tố nào tác động mạnh nhất đến sự hài lòng của khách hàng?',
        categorySlug: 'data-analysis',
        coverImage: '/blog/r101_lesson6_cover_1767439003143.png',
        featured: false,
        readingTime: 15,
        tags: ['Quantitative', 'R101', 'Correlation', 'Regression', 'P-value', 'Góc nhìn HaiLP'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chào mừng các bạn đến với trận chung kết. Sau khi làm sạch dữ liệu, vẽ hình đẹp đẽ, kiểm định thang đo ok, giờ là lúc ta "thịt" bộ dữ liệu để lòi ra kết quả cuối cùng.\n\nMục tiêu: Tìm xem Lương (Salary), Đồng nghiệp (Colleague), Sếp (Boss) -> Yếu tố nào dự báo "tốt nhất" sự Hài lòng (Satisfaction)?\n\n*Lưu ý: Hồi quy cho ta biết mối liên hệ (Association), không chắc chắn là Nhân quả (Causation). Tuy nhiên trong kinh doanh, nếu lý thuyết hỗ trợ, ta có thể dùng nó để ra quyết định.*' }],
            },
            {
                _type: 'image',
                localPath: '/blog/r101_body_l6_regression_1767441242977.png',
                alt: 'Regression Slope Visual',
                caption: 'Đường thẳng hồi quy (màu cam) sẽ cố gắng đi qua giữa đám mây điểm. Khoảng cách từ điểm đến đường thẳng gọi là Phần dư (Residual).'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Ma trận tương quan (Correlation Matrix)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Trước khi chạy mô hình, hãy xem các cặp biến có "tình ý" gì với nhau không.\n\n`library(ggcorrplot)`\n`corr <- cor(df_final)`\n`ggcorrplot(corr, lab = TRUE)`\n\nNó sẽ vẽ ra một cái bản đồ nhiệt (Heatmap):\n- Màu đỏ đậm (Gần 1): Tương quan dương cực mạnh (Lương tăng -> Hài lòng tăng).\n- Màu xanh đậm (Gần -1): Tương quan âm (Áp lực tăng -> Hài lòng giảm).\n- Màu trắng (Gần 0): Chả liên quan gì.\n\nNếu thấy biến Độc lập (X) mà tương quan quá mạnh với nhau (> 0.9) thì cẩn thận: Có thể bị Đa cộng tuyến (Hai ông chồng cùng nói một lúc, không biết nghe ông nào).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Hồi quy tuyến tính (Linear Regression)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Câu thần chú gọi Rồng Thần trong R:\n\n`model <- lm(Satisfaction ~ Salary + Colleague + Boss, data = df_final)`\n`summary(model)`\n\nBảng kết quả hiện ra. Nhìn vào đâu?\n\n P-value (Pr(>|t|)): Tìm những dòng có dấu sao *** (< 0.001) hoặc * (< 0.05). Đó là những yếu tố có ý nghĩa thống kê.\n Estimate (Beta): Hệ số tác động. \n   - Estimate dương: Tác động thuận chiều.\n   - Estimate âm: Tác động ngược chiều.\n   - Số càng to (về trị tuyệt đối) -> Tác động càng mạnh.\n R-squared: Mô hình giải thích được bao nhiêu % (như bài NCS101 đã nói).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. Đừng quên kiểm tra sức khỏe mô hình (Assumptions)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chạy ra kết quả chưa xong đâu. Phải khám sức khỏe cho nó.\n\n*Insight:* Tại sao phải soi phần dư (Residuals)? Phần dư chính là những gì mô hình *không giải thích được*. \n- Nếu phần dư lộn xộn ngẫu nhiên -> Tốt.\n- Nếu phần dư có quy luật (VD: Mô hình dự báo sai lệch nhiều ở nhóm Thu nhập cao) -> Chứng tỏ bạn đang bỏ sót một biến quan trọng nào đó. Hiện tượng này gọi là **Thiên lệch do biến bị bỏ sót (Omitted Variable Bias)**.\n- Những điểm ngoại lai (Outliers) trong phần dư đôi khi lại là "Mỏ vàng" - **Thị trường ngách (Niche Market)** mà đối thủ bỏ qua.\n\nChecklist:\n- Đa cộng tuyến (Multicollinearity): `vif(model)` > 5 là báo động.\n- Phân phối chuẩn của phần dư: `plot(model, which = 2)`. Các điểm phải ôm sát đường chéo.' }],
            }
        ]
    },
    {
        title: 'R101 - Bài 7: So Sánh Khác Biệt: T-test & ANOVA - Cuộc Chiến Giữa Các Phe Phái',
        slug: { current: 'r101-bai-7-ttest-anova' },
        publishedAt: new Date().toISOString(),
        excerpt: 'Sếp hỏi: "Khách hàng Nam và Nữ, ai hài lòng hơn?". "Khách miền Bắc, Trung, Nam, ai chịu chi hơn?". Đừng đoán mò. Hãy dùng T-test và ANOVA để trả lời sếp bằng con số biết nói.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/r101_lesson7_cover_placeholder.png',
        featured: false,
        readingTime: 12,
        tags: ['Quantitative', 'R101', 'T-test', 'ANOVA', 'Hypothesis Testing', 'Góc nhìn HaiLP'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Trong kinh doanh và nghiên cứu, chúng ta suốt ngày phải đi so sánh.\n- Sếp hỏi: "Chạy quảng cáo Facebook hiệu quả hơn hay Google hiệu quả hơn?"\n- HR hỏi: "Nhân viên nam hay nữ có lương cao hơn?"\n- Marketing hỏi: "Khách hàng ở HN, ĐN, SG, ai mua hàng nhiều nhất?"\n\nTrả lời bằng cảm tính ("Em thấy hình như...") là ra đường ở ngay. Phải dùng kiểm định thống kê. Có 2 vũ khí chính:' }],
            },
            {
                _type: 'image',
                localPath: '/blog/r101_body_l7_comparison.png',
                alt: 'T-test vs ANOVA comparison',
                caption: 'T-test dùng để so sánh 2 phe (Nam vs Nữ). ANOVA dùng để "đấu lộn xộn" 3 phe trở lên (Bắc - Trung - Nam).'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. T-test: Cuộc đấu tay đôi (2 nhóm)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Dùng khi bạn muốn so sánh TRUNG BÌNH của 2 nhóm biến định tính (Ví dụ: Giới tính -> Nam/Nữ).\n\nCú pháp siêu ngắn gọn trong R:\n`t.test(Income ~ Gender, data = df)`\n\n(Dịch: So sánh Thu nhập (Income) theo Giới tính (Gender)).\n\nĐọc kết quả:\nNhìn vào P-value:\n- Nếu P < 0.05: Có sự khác biệt "có ý nghĩa thống kê". (Ví dụ: Nam lương cao hơn Nữ thật sự, chứ không phải do ngẫu nhiên).\n- Nếu P > 0.05: Không có sự khác biệt (Hai nhóm như nhau).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Ví dụ: Sếp hỏi "Nam với Nữ ai lương cao hơn?"' }],
            },
            {
                _type: 'code',
                language: 'markdown',
                code: 'Result:\nmean in group Female: 15.5 triệu\nmean in group Male: 16.2 triệu\np-value = 0.03\n\n-> Kết luận: P < 0.05, vậy là có sự khác biệt. Nam lương cao hơn Nữ thật (dù chỉ chênh nhau 0.7 triệu).'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. ANOVA: Tam Quốc Diễn Nghĩa (> 2 nhóm)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nếu bạn có 3 nhóm trở lên (Ví dụ: Vùng miền -> Bắc, Trung, Nam), dùng T-test so từng cặp thì rất mất thời gian và dễ sai. Hãy dùng ANOVA (Analysis of Variance).\n\nCú pháp:\n`model_aov <- aov(Income ~ Region, data = df)`\n`summary(model_aov)`\n\nĐọc kết quả:\nCũng nhìn P-value (< 0.05). Nếu < 0.05, chứng tỏ "Ít nhất có một ông khác biệt với mấy ông còn lại".\n\nNhưng ông nào khác? Bắc khác Nam? Hay Trung khác Nam? \nĐể biết cụ thể, ta dùng thêm "kính lúp" TukeyHSD:\n`TukeyHSD(model_aov)`\n\nNó sẽ so sánh từng cặp cho bạn: Bắc-Trung, Bắc-Nam, Trung-Nam. Cặp nào P < 0.05 là cặp đó khác nhau.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. Visual hóa sự khác biệt' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Số liệu khô khan khó thuyết phục sếp. Hãy vẽ cái Boxplot:\n\n`ggplot(df, aes(x = Region, y = Income, fill = Region)) +`\n`  geom_boxplot() +`\n`  theme_minimal()`\n\nNhìn vào biểu đồ, sếp sẽ thấy ngay cái hộp nào cao hơn, hộp nào thấp hơn. Trực quan sinh động!' }],
            }
        ]
    },
    {
        title: 'R101 - Bài 8: R Markdown - Viết Báo Cáo Tự Động (Tạm Biệt Copy-Paste)',
        slug: { current: 'r101-bai-8-rmarkdown' },
        publishedAt: new Date().toISOString(),
        excerpt: 'Bạn chạy mô hình xong, copy bảng ra Excel, rồi dán vào Word, rồi chỉnh font, rồi sếp bắt chạy lại mô hình... Ôi ác mộng! R Markdown sẽ cứu rỗi cuộc đời bạn.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/r101_lesson8_cover_placeholder.png',
        featured: false,
        readingTime: 12,
        tags: ['Quantitative', 'R101', 'R Markdown', 'Reporting', 'Automated Report', 'Góc nhìn HaiLP'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Kịch bản quen thuộc: Bạn hì hụi làm báo cáo cả tuần. Sếp bảo: "Em ơi, dữ liệu này cũ rồi, cập nhật số liệu mới đi".\n\nThế là bạn phải: Chạy lại SPSS -> Copy kết quả -> Paste lại vào Word -> Định dạng lại bảng -> Vẽ lại hình -> Copy vào Word... Sai một ly đi một dặm.\n\nVới R Markdown, bạn chỉ cần bấm nút KNIT. Bùm! Báo cáo mới toanh (PDF/Word/HTML) hiện ra trong 3 giây. Dữ liệu thay đổi? Kệ nó, code tự chạy lại.' }],
            },
            {
                _type: 'image',
                localPath: '/blog/r101_body_l8_rmarkdown.png',
                alt: 'RMarkdown Workflow',
                caption: 'Quy trình "Nhà máy" R Markdown: Nguyên liệu là Code + Text. Bấm nút Knit là ra thành phẩm Báo cáo đẹp lung linh.'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Cấu trúc một file R Markdown (.Rmd)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nó có 3 phần:\n\n- YAML Header (Đầu bài): Khai báo tên bài, tác giả, loại file xuất ra (Word hay PDF).\n- Text (Văn bản): Viết như viết Word bình thường (hoặc dùng Markdown).\n- Code Chunks (Khối lệnh): Chỗ để viết code R. Được rào lại bằng 3 dấu huyền ```{r} ... ```.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Ví dụ thực chiến' }],
            },
            {
                _type: 'code',
                language: 'markdown',
                code: '---\ntitle: "Báo cáo doanh số tháng 10"\nauthor: "HaiLP"\noutput: word_document\n---\n\n## 1. Doanh số tổng quan\nTháng này doanh số tăng trưởng mạnh.\n\n```{r}\nsummary(df$Sales)\n```\n\n## 2. Biểu đồ xu hướng\nBiểu đồ dưới đây cho thấy xu hướng tăng dần đều:\n\n```{r}\nggplot(df, aes(x=Date, y=Sales)) + geom_line()\n```'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. Nút Knit thần thánh' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Bạn bấm nút cái icon Cuộn len (Knit) trên thanh công cụ. RStudio sẽ tự động:\n1. Chạy tất cả các dòng code.\n2. Lấy kết quả (bảng, hình) chèn đúng vào vị trí bạn muốn.\n3. Xuất ra file Word đẹp đẽ.\n\nSếp bảo sửa số liệu? Cập nhật file excel đầu vào, bấm Knit lại. Xong. Thời gian tiết kiệm được để đi uống cafe sướng hơn không?\n\nVậy là trọn bộ R101 đã hoàn tất (8 bài). Nếu các bạn muốn "đổi gió" sang Python (ngôn ngữ hot nhất hiện nay cho AI), hãy đón chờ series Python101: Phân Tích Định Lượng sắp lên sóng nhé!' }],
            }
        ]
    }
];
