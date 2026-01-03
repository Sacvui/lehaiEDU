
export const r101_series = [
    {
        title: 'R101 - Bài 1: R là cái quái gì mà dân tình mê mẩn? (Kèm Hướng Dẫn Cài Đặt 5 Phút) 🚀',
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
                children: [{ _type: 'span', text: 'Chào các bạn, Hải đây.\n\nNếu các bạn đang làm Marketing, HR hay Kinh doanh, chắc hẳn các bạn đã quá quen với Excel. Excel tuyệt vời, không ai phủ nhận. Nhưng... \n\nCó bao giờ bạn mở một file Excel nặng tầm 500MB lên và máy tính của bạn bắt đầu kêu như máy cày, rồi màn hình "Not Responding" quay đều quay đều chưa? Tôi thì bị rồi, và tôi suýt đập máy. \n\nHoặc có bao giờ bạn chạy mô hình trên SPSS, copy cái bảng kết quả ra Word/PowerPoint và thấy nó... xấu đau xấu đớn, format lệch lạc, nhìn chán chả buồn đọc không?\n\nĐó là lúc bạn cần đến **R**.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Tại sao lại là R mà không phải Python hay cái khác?' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Thực ra Python cũng rất xịn, nhất là cho dân Engineering/AI. Nhưng với dân Kinh tế/Xã hội như chúng ta, R là "chân ái" vì:\n\n*   **Nó sinh ra để làm thống kê:** Python là ngôn ngữ đa năng (làm web, game...), còn R sinh ra từ đầu chỉ để phục vụ tính toán. Các hàm thống kê của nó cực kỳ chuyên sâu và chuẩn xác.\n*   **Khả năng vẽ hình "Vô đối":** Với gói `ggplot2`, R đè bẹp tất cả các đối thủ về khoản visual. Bạn có thể vẽ những biểu đồ đẹp như tạp chí The Economist chỉ với vài dòng code.\n*   **Miễn phí 100%:** SPSS giá cả ngàn đô (hoặc bạn phải dùng crack lén lút). R thì free, cài ở đâu cũng được, không sợ bản quyền.\n*   **Reproducible Research (Nghiên cứu có thể lặp lại):** Đây là cái hay nhất. Bạn viết code 1 lần, tháng sau có data mới, bấm nút "Run" cái là xong. Không phải ngồi click chuột thủ công làm lại từ đầu như Excel.' }],
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
                asset: {
                    _type: 'reference',
                    _ref: 'image-r101_body_l1_interface',
                },
                alt: 'Giao diện RStudio 4 góc',
                caption: 'Giao diện RStudio: Góc trên trái là Bếp (Source), dưới trái là Chỗ thử món (Console), trên phải là Tủ lạnh (Environment), dưới phải là Tủ chén (Files/Plots).'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '**Giải ngố:**\n*   **Source (Góc 1):** Nơi viết công thức nấu ăn (lưu lại được).\n*   **Console (Góc 2):** Nơi nấu thử. Gõ `1 + 1` Enter cái nó ra `2` luôn. Tắt máy là mất.\n*   **Environment (Góc 3):** Kho nguyên liệu. Bạn nhập file excel vào, biến số nó sẽ nằm ở đây.\n*   **Files/Plots (Góc 4):** Nơi hiển thị biểu đồ vẽ ra. Đẹp hay xấu là nhìn vào đây.' }],
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
        title: 'R101 - Bài 2: Dọn Rác Dữ Liệu (Data Cleaning) - Ác Mộng Của Mọi Researcher 🧹',
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
                children: [{ _type: 'span', text: 'Sếp gửi cho bạn file `customer_data.csv`. Bạn hý hửng mở ra và... ối giời ơi:\n*   Cột tuổi thì có ông điền "chín mươi", ông điền "90".\n*   Cột thu nhập thì ông điền số, ông điền "5 củ".\n*   Cột giới tính thì "Nam", "Male", "M", "Boy" loạn xì ngầu.\n\nNếu đưa đống rác này vào chạy SPSS hay Excel thì nó báo lỗi ngay. R có một cái máy hút bụi cực mạnh tên là `dplyr`.' }],
            },
            {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: 'image-r101_body_l2_cleaning',
                },
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
                children: [{ _type: 'span', text: '*   **Lọc khách hàng (Filter):** Chỉ lấy khách VIP?\n    `df_vip <- filter(df, Customer_Type == "VIP")`\n\n*   **Chọn cột (Select):** Bảng 100 cột, chỉ lấy cột Tên và Tuổi?\n    `df_small <- select(df, Name, Age)`\n\n*   **Tạo biến mới (Mutate):** Muốn tính Lương Năm = Lương Tháng * 12?\n    `df <- mutate(df, Annual_Income = Monthly_Income * 12)`\n\n*   **Sắp xếp (Arrange):** Ai giàu nhất đứng đầu?\n    `df <- arrange(df, desc(Income))`\n\nThấy chưa? Viết code mà như viết văn tả cảnh vậy. `filter` là lọc, `arrange` là sắp xếp. Dễ hiểu đến phát khóc.' }],
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
        title: 'R101 - Bài 3: Vẽ Hình Nghệ Thuật Với ggplot2 - Đừng Làm Xấu Mặt Excel Nữa 🎨',
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
                children: [{ _type: 'span', text: 'Có một câu nói rất hay: "A picture is worth a thousand numbers". Các sếp không có thời gian đọc bảng số liệu của bạn đâu. Họ chỉ nhìn vào biểu đồ 3 giây để ra quyết định.\n\nNhưng khổ nỗi, biểu đồ mặc định của Excel nó... phèn. Màu mè lòe loẹt, 3D sến súa.\nHôm nay tôi giới thiệu với các bạn **`ggplot2`** - vũ khí hạng nặng của R, được dùng để vẽ biểu đồ cho các báo cáo của New York Times hay BBC.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Tư duy "Grammar of Graphics"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '`gg` viết tắt của Grammar of Graphics (Ngữ pháp đồ họa). Vẽ hình trong R giống như xếp hình Lego, bạn xếp từng lớp (Layer) lên nhau:\n1. **Data:** Nền móng (Dữ liệu của bạn)\n2. **Aesthetics (aes):** Trục X là gì? Trục Y là gì? Màu sắc theo cột nào?\n3. **Geometries (geom):** Vẽ cái gì? (Cột, đường, chấm...)\n\nCông thức thần thánh:\n`ggplot(data, aes(x=..., y=...)) + geom_...()`' }],
            },
            {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: 'image-r101_body_l3_ggplot',
                },
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
        title: 'R101 - Bài 4: Thống Kê Mô Tả - Kể Chuyện Bằng Những Con Số 📊',
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
                children: [{ _type: 'span', text: 'Trước khi chạy mô hình cao siêu, bạn phải hiểu dữ liệu của mình mặt mũi ra sao đã. Đó là nhiệm vụ của **Thống kê mô tả (Descriptive Statistics)**.\n\nNhưng cẩn thận, những con số này biết nói dối đấy. Ví dụ kinh điển: Lớp có 9 bạn nghèo rớt mồng tơi (thu nhập 5 triệu/tháng). Bỗng nhiên tỷ phú Phạm Nhật Vượng bước vào lớp (thu nhập 1000 tỷ/tháng). \n-> Bùm! Thu nhập TRUNG BÌNH (Mean) của cả lớp vọt lên 100 tỷ/tháng. \n-> Kết luận: Cả lớp giàu nứt đố đổ vách? Sai bét!\n\nĐó là lý do ta cần phân biệt Mean và Median.' }],
            },
            {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: 'image-r101_body_l4_dist',
                },
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
                children: [{ _type: 'span', text: '*   **Mean (Trung bình):** Cộng lại chia đều. Dễ bị tỷ phú làm lệch.\n*   **Median (Trung vị):** Thằng đứng chính giữa. Tỷ phú vào thì kệ tỷ phú, thằng đứng giữa vẫn nghèo. -> Dùng khi dữ liệu có biến động lớn (Outlier).\n*   **Mode (Yếu vị):** Giá trị xuất hiện nhiều nhất. (Hợp để tìm "Size áo nào bán chạy nhất").\n\nTrong R:\n`mean(df$Income)`\n`median(df$Income)`' }],
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
                children: [{ _type: 'span', text: '3. Table 1 thần thánh' }],
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
        title: 'R101 - Bài 5: Kiểm Định Thang Đo: Cronbach\'s Alpha & EFA - Đừng "Đốt Nhà" Trước Khi Xây 🧐',
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
                children: [{ _type: 'span', text: 'Nhiều bạn newbie hăm hở lao vào chạy hồi quy ngay lập tức. Giống như đi xây nhà lầu mà xây trên nền cát vậy. Nó sập lúc nào không hay.\n\nTrong nghiên cứu khoa học, trước khi xem "X có tác động đến Y không", ta phải xem "X và Y có được đo lường chuẩn xác không".\n\nCó 2 khái niệm bạn phải khắc cốt ghi tâm:\n1. **Độ tin cậy (Reliability):** Đo lường sự ổn định, nhất quán của thang đo. (Công cụ: Cronbach\'s Alpha).\n2. **Giá trị (Validity):** Đo lường xem nó có đo đúng cái cần đo không, hay đo nhầm sang cái khác? (Công cụ: EFA - Phân tích nhân tố khám phá).' }],
            },
            {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: 'image-r101_body_l5_efa',
                },
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
                children: [{ _type: 'span', text: 'Giả sử bạn dùng 3 câu hỏi (Sat1, Sat2, Sat3) để đo lường "Sự hài lòng". Nếu một khách hàng trả lời Sat1 = 5 điểm (Rất hài lòng), Sat2 cũng phải tầm 4-5 điểm. Chứ Sat2 mà tụt xuống 1 điểm thì chứng tỏ bộ câu hỏi này "nội bộ lủng củng".\n\nTrong R, ta dùng gói `psych`:\n\n`library(psych)`\n`alpha(df %>% select(Sat1, Sat2, Sat3))`\n\nNhìn vào chỉ số **raw_alpha**:\n*   > 0.7 (xanh): Ngon lành. Đoàn kết tốt.\n*   0.6 - 0.7: Tạm chấp nhận (với nghiên cứu mới).\n*   < 0.6: Vứt. Nội bộ lục đục. Cần loại bỏ câu hỏi làm rầu nồi canh.\n\n⚠️ **Lưu ý xương máu:** Đừng thấy thấp là xóa câu hỏi vô tội vạ. Phải xem xét lý thuyết (như tôi đã nói trong bài NCS101). Nếu xóa mà làm mất ý nghĩa của khái niệm thì thà để thấp còn hơn.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. EFA (Exploratory Factor Analysis): Gom nhóm tinh gọn' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Bạn có 20 câu hỏi loằng ngoằng. Máy tính (và người đọc) sẽ bị overload.\nEFA giúp bạn "gom" 20 câu này thành 3-4 nhóm (Nhân tố) chính. Ví dụ: Gom 3 câu về lương thưởng vào nhóm "Tài chính". Gom 4 câu về đồng nghiệp vào nhóm "Môi trường".\n\nChạy EFA trong R:\n\n`fa(r = cor(df_scale), nfactors = 3, rotate = "varimax")`\n\n(Trong đó `nfactors` là số nhóm bạn mong muốn).\n\nĐọc kết quả:\n1. **KMO:** Phải > 0.5 (Đủ điều kiện phân tích).\n2. **Bartlett Test:** P-value phải < 0.05 (Các biến có tương quan).\n3. **Extraction Loadings:** Phải > 0.5. Biến nào < 0.5 là "không thuộc về nhóm nào" -> Loại.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Tổng kết Module kiểm định' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nếu Cronbach Alpha là vòng gửi xe, thì EFA là vòng sơ khảo. Qua được 2 ải này thì dữ liệu của bạn mới "đủ tuổi" để chạy hồi quy. Nhiều bạn làm đến đây là rụng như sung rụng vì dữ liệu rác. Nên nhớ bài 1 tôi nói gì không? **Data Cleaning là quan trọng nhất!**' }],
            }
        ]
    },
    {
        title: 'R101 - Bài 6: Tương Quan & Hồi Quy Tuyến Tính (Regression) - Đi Tìm Chân Lý 🎯',
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
                children: [{ _type: 'span', text: 'Chào mừng các bạn đến với trận chung kết. Sau khi làm sạch dữ liệu, vẽ hình đẹp đẽ, kiểm định thang đo ok, giờ là lúc ta "thịt" bộ dữ liệu để lòi ra kết quả cuối cùng.\n\nMục tiêu: Tìm xem Lương (Salary), Đồng nghiệp (Colleague), Sếp (Boss) -> Cái nào làm Nhân viên Hài lòng (Satisfaction) nhất?' }],
            },
            {
                _type: 'image',
                asset: {
                    _type: 'reference',
                    _ref: 'image-r101_body_l6_regression',
                },
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
                children: [{ _type: 'span', text: 'Trước khi chạy mô hình, hãy xem các cặp biến có "tình ý" gì với nhau không.\n\n`library(ggcorrplot)`\n`corr <- cor(df_final)`\n`ggcorrplot(corr, lab = TRUE)`\n\nNó sẽ vẽ ra một cái bản đồ nhiệt (Heatmap):\n*   Màu đỏ đậm (Gần 1): Tương quan dương cực mạnh (Lương tăng -> Hài lòng tăng).\n*   Màu xanh đậm (Gần -1): Tương quan âm (Áp lực tăng -> Hài lòng giảm).\n*   Màu trắng (Gần 0): Chả liên quan gì.\n\nNếu thấy biến Độc lập (X) mà tương quan quá mạnh với nhau (> 0.9) thì cẩn thận: Có thể bị **Đa cộng tuyến** (Hai ông chồng cùng nói một lúc, không biết nghe ông nào).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Hồi quy tuyến tính (Linear Regression)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Câu thần chú gọi Rồng Thần trong R:\n\n`model <- lm(Satisfaction ~ Salary + Colleague + Boss, data = df_final)`\n`summary(model)`\n\nBảng kết quả hiện ra. Nhìn vào đâu?\n\n **P-value (Pr(>|t|)):** Tìm những dòng có dấu sao *** (< 0.001) hoặc * (< 0.05). Đó là những yếu tố có ý nghĩa thống kê.\n **Estimate (Beta):** Hệ số tác động. \n   - Estimate dương: Tác động thuận chiều.\n   - Estimate âm: Tác động ngược chiều.\n   - Số càng to (về trị tuyệt đối) -> Tác động càng mạnh.\n **R-squared:** Mô hình giải thích được bao nhiêu % (như bài NCS101 đã nói).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. Đừng quên kiểm tra sức khỏe mô hình (Assumptions)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chạy ra kết quả chưa xong đâu. Phải khám sức khỏe cho nó. Nếu mô hình bị bệnh, kết quả là vô nghĩa.\n\n*   **Đa cộng tuyến (Multicollinearity):** Dùng hàm `vif(model)`. Nếu VIF > 10 (hoặc khắt khe là > 5) -> Bị bệnh. Phải loại biến.\n*   **Phân phối chuẩn của phần dư:** `plot(model, which = 2)`. Các điểm phải nằm trên đường chéo.\n\nLàm nghiên cứu là phải kỹ tính. Reviewer soi mấy cái này kỹ lắm. Đừng để bị bắt bài nhé!\n\nVậy là kết thúc Series R101 cơ bản. Từ con số 0, giờ bạn đã biết cài R, vẽ hình, kiểm định và chạy hồi quy. Bạn đã hơn 90% dân số thế giới về khoản này rồi đấy. Chúc mừng!' }],
            }
        ]
    }
];
