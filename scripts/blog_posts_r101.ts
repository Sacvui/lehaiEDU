
export const r101_series = [
    {
        title: 'R101 - Bài 1: R là cái quái gì mà dân tình mê mẩn? (Kèm Hướng Dẫn Cài Đặt 5 Phút) 🚀',
        slug: { current: 'r101-bai-1-intro-install' },
        publishedAt: new Date().toISOString(),
        excerpt: 'Bạn đã bao giờ phát điên vì file Excel 500MB treo máy? Hay nhìn bảng kết quả SPSS xấu đau xấu đớn? Chào mừng đến với R - tình yêu đích thực của dân Data Analyst.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/r101_lesson1_cover_1767437733009.png', // Placeholder, will update with real path
        featured: true,
        readingTime: 10,
        tags: ['R101', 'Data Analysis', 'R Programming', 'Góc nhìn HaiLP'],
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
                children: [{ _type: 'span', text: 'Để chạy được R, chúng ta cần 2 thứ: \n1.  **R (Engine):** Cái lõi để tính toán. (Giống như cái động cơ xe).\n2.  **RStudio (IDE):** Cái giao diện đẹp đẽ để mình viết code. (Giống như cái vỏ xe, vô lăng, ghế ngồi).\n\n**Bước 1: Tải và cài R**\n*   Vào link: [cloud.r-project.org](https://cloud.r-project.org/)\n*   Chọn "Download R for Windows" (hoặc Mac).\n*   Bấm "install for the first time" -> Tải về -> Next liên tục đến khi xong.\n\n**Bước 2: Tải và cài RStudio**\n*   Vào link: [posit.co/download/rstudio-desktop](https://posit.co/download/rstudio-desktop/)\n*   Tải bản FREE -> Cài đặt Next liên tục.\n\nXong! Giờ bạn mở RStudio lên. Nó sẽ có 4 ô cửa sổ. Đừng hoảng, bài sau tôi sẽ chỉ các bạn múa trên 4 cái ô này.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. Chạy dòng code đầu tiên: Hello World' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Trong R, bạn có thể dùng nó như một cái máy tính bỏ túi siêu cấp.\nGõ vào ô Console (góc dưới bên trái):\n\n`1 + 1`\n\nRồi ấn Enter. Nó sẽ ra:\n`[1] 2`\n\nChúc mừng! Bạn đã trở thành Coder! (Đùa đấy).\n\nThử cái này "ngầu" hơn nhé. Vẽ biểu đồ ngay lập tức:\n`plot(cars)`\nBùm! Một biểu đồ phân tán (Scatter plot) hiện ra ở góc phải. \n\nThấy chưa? R không hề đáng sợ. Nó chỉ là một công cụ, và Series R101 này sẽ biến nó thành vũ khí trong tay bạn. Hẹn gặp lại ở Bài 2: Dọn rác dữ liệu!' }],
            }
        ]
    },
    {
        title: 'R101 - Bài 2: Dọn Rác Dữ Liệu (Data Cleaning) - Ác Mộng Của Mọi Researcher 🧹',
        slug: { current: 'r101-bai-2-data-cleaning' },
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        excerpt: 'Dữ liệu thực tế không bao giờ đẹp như trong sách giáo khoa. Nó lộn xộn, thiếu hụt (NA), sai format. Nếu không biết dọn rác (Clean Data), bạn chạy mô hình kiểu gì cũng ra rác.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/r101_lesson2_cover_1767437733009.png', // Placeholder
        featured: false,
        readingTime: 12,
        tags: ['R101', 'Data Cleaning', 'Wrangling', 'Góc nhìn HaiLP'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Có một sự thật đắng lòng: Dân làm Data dành 80% thời gian để **Dọn dữ liệu (Data Cleaning)** và chỉ 20% thời gian để chạy mô hình.\n\nSếp đưa bạn file Excel khách hàng. Và hỡi ôi:\n*   Cột Tuổi thì có người ghi "25", có người ghi "hai mươi lăm".\n*   Cột Thu nhập thì có người bỏ trống (NA).\n*   Cột Giới tính thì lúc "Male", lúc "M", lúc "Nam".\n\nNém cái đống này vào SPSS hay chạy hồi quy là lỗi tung tóe ngay. Hôm nay tôi sẽ hướng dẫn các bạn dùng bộ chổi thần thánh **`tidyverse`** trong R để dọn sạch đống rác này.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Tải bộ dữ liệu mẫu (Thực hành ngay!)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Tôi đã chuẩn bị sẵn một file CSV "bẩn bựa" đúng chuẩn thực tế cho các bạn thực hành.\n\n👉 **[Tải file marketing_sample.csv tại đây](/datasets/marketing_sample.csv)**\n\nTải về, lưu vào một thư mục (ví dụ `D:/R_Project`).\nMở RStudio lên, tạo một script mới (File -> New File -> R Script) và bắt đầu gõ theo tôi.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Nhập khẩu dữ liệu (Import)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đầu tiên phải gọi "thần chú" (Load thư viện). Nếu chưa có thì cài: `install.packages("tidyverse")`.\n\n`library(tidyverse)`\n\nSau đó đọc file:\n`df <- read_csv("D:/R_Project/marketing_sample.csv")`\n\n(Lưu ý: R dùng dấu gạch chéo `/` chứ không phải gạch ngược `\\` như Windows nhé).\n\nGõ `View(df)` để xem dữ liệu. Bạn sẽ thấy ngay sự lộn xộn: Có mấy ô ghi `NA` (Not Available), có ô trống hoác.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. Xử lý dữ liệu thiếu (Missing Values - NA)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Rất nhiều dòng bị thiếu thông tin. Giờ làm sao?\n\n**Cách 1: Nhà giàu đạp đổ (Xóa hết dòng thiếu)**\n`clean_df <- df %>% drop_na()`\nLệnh này sẽ xóa phăng tất cả dòng nào có ít nhất 1 ô trống. Sạch sẽ, nhưng mất dữ liệu. Nếu data ít thì đừng dùng.\n\n**Cách 2: Điền vào chỗ trống (Imputation)**\nVí dụ cột Tuổi (Age) bị thiếu. Ta có thể điền bằng giá trị trung bình (Mean) của cả cột.\n`df <- df %>% mutate(Age = replace_na(Age, mean(Age, na.rm = TRUE)))`\n\n(Hàm `mutate` là để tạo/sửa cột mới. `na.rm = TRUE` là bảo R hãy tính trung bình các số có sẵn thôi, kệ mấy thằng NA ra).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '4. Lọc và Chọn (Filter & Select)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Sếp bảo: "Chỉ lấy cho anh khách hàng Nữ ở Hà Nội thôi".\n\nDễ ợt:\n`female_hanoi <- df %>% filter(Gender == "Female" & Location == "Hanoi")`\n\nSếp bảo tiếp: "Bảng nhiều cột quá, chỉ giữ lại cột Tuổi và Thu nhập để anh xem".\n\n`mini_df <- df %>% select(Age, Income)`\n\nCác bạn thấy ngôn ngữ R nó tự nhiên không? `filter` là lọc, `select` là chọn. Đọc sao viết vậy. Đây chính là sức mạnh của `dplyr` trong `tidyverse`. Học xong cái này bạn sẽ thấy Excel mệt mỏi vô cùng.\n\n**Bài tập về nhà:** Hãy thử tính Thu nhập trung bình của khách hàng Nam tại TP.HCM trong file trên. Đáp án post dưới comment nhé!' }],
            }
        ]
    },
    {
        title: 'R101 - Bài 3: Vẽ Hình Nghệ Thuật Với ggplot2 - Đừng Làm Xấu Mặt Excel Nữa 🎨',
        slug: { current: 'r101-bai-3-data-viz-ggplot2' },
        publishedAt: new Date(Date.now() - 172800000).toISOString(),
        excerpt: 'Nếu data là nguyên liệu, thì biểu đồ (Chart) là món ăn. Excel nấu món này chín nhưng trình bày... xấu. ggplot2 của R là nhà hàng Michelin 3 sao về khoản trình bày.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/r101_lesson3_cover_1767438616732.png',
        featured: false,
        readingTime: 12,
        tags: ['R101', 'Data Visualization', 'ggplot2', 'Góc nhìn HaiLP'],
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
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Thực hành 1: Biểu đồ cột (Bar Chart) - So sánh Thu nhập' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Muốn so sánh Thu nhập trung bình giữa Nam và Nữ?\n\n`ggplot(df, aes(x = Gender, y = Income, fill = Gender)) + geom_col()`\n\nNó vẽ ra ngay. Nhưng chưa đẹp. Muốn đẹp thì thêm gia vị (theme) vào:\n\n`ggplot(df, aes(x = Gender, y = Income, fill = Gender)) +`\n`  geom_col() +`\n`  theme_minimal() +`  (Giao diện tối giản)\n`  labs(title = "Thu nhập theo giới tính", x = "", y = "VND")`\n\nBùm! Trông sang hơn hẳn chưa?' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Thực hành 2: Biểu đồ phân tán (Scatter Plot) - Mối quan hệ' }],
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
        publishedAt: new Date(Date.now() - 259200000).toISOString(),
        excerpt: 'Mean, Median, Mode là gì? Tại sao "Thu nhập bình quân" lại là cú lừa thế kỷ? Hãy cùng giải mã những con số biết nói.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/r101_lesson4_cover_1767438634611.png',
        featured: false,
        readingTime: 12,
        tags: ['R101', 'Descriptive Statistics', 'Table 1', 'Góc nhìn HaiLP'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Trước khi chạy mô hình cao siêu, bạn phải hiểu dữ liệu của mình mặt mũi ra sao đã. Đó là nhiệm vụ của **Thống kê mô tả (Descriptive Statistics)**.\n\nNhưng cẩn thận, những con số này biết nói dối đấy. Ví dụ kinh điển: Lớp có 9 bạn nghèo rớt mồng tơi (thu nhập 5 triệu/tháng). Bỗng nhiên tỷ phú Phạm Nhật Vượng bước vào lớp (thu nhập 1000 tỷ/tháng). \n-> Bùm! Thu nhập TRUNG BÌNH (Mean) của cả lớp vọt lên 100 tỷ/tháng. \n-> Kết luận: Cả lớp giàu nứt đố đổ vách? Sai bét!\n\nĐó là lý do ta cần phân biệt Mean và Median.' }],
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
                children: [{ _type: 'span', text: '2. Độ lệch chuẩn (Standard Deviation - SD)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Có 2 nhân viên Sale cùng bán được trung bình 100 triệu/tháng.\n*   Ông A: Tháng nào cũng tèn tèn 100 triệu.\n*   Ông B: Tháng thì 0 đồng, tháng thì 200 triệu.\n\nAi ổn định hơn? Ông A. Làm sao biết? Nhìn **SD**.\nSD càng nhỏ -> Càng ổn định (Dữ liệu rúc vào nhau).\nSD càng to -> Càng bấp bênh (Dữ liệu nhảy múa).\n\nTrong R: `sd(df$Income)`' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. Table 1 thần thánh (Dành cho dân nghiên cứu)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Làm bài báo khoa học thì cái bảng đầu tiên (Table 1) luôn là "Thông tin nhân khẩu học". Ngồi đếm tay trong Excel thì mòn mỏi thanh xuân.\n\nTrong R, chỉ 1 dòng code với gói `tableone`:\n\n`library(tableone)`\n`CreateTableOne(data = df)`\n\nNó tự động tính hết: Có bao nhiêu Nam/Nữ (%), Tuổi trung bình bao nhiêu (SD), Thu nhập Median bao nhiêu (IQR)... rồi xuất ra bảng đẹp long lanh. Dân chơi là phải thế!' }],
            }
        ]
    }
];
