
export const python101_series = [
    {
        title: 'Python101 - Bài 1: Setup Môi Trường Nghiên Cứu "Chanh Sả" (Jupyter Lab)',
        slug: { current: 'python101-bai-1-setup-research-env' },
        publishedAt: new Date().toISOString(),
        excerpt: 'Dẹp bỏ nỗi ám ảnh "màn hình đen xì" của Coder. Dân kinh tế làm nghiên cứu là phải dùng Jupyter Lab - vừa viết văn, vừa chạy code, đẹp như file Word.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/python101_lesson1_cover_placeholder.png',
        featured: true,
        readingTime: 10,
        tags: ['Python101', 'Quantitative', 'Quantitative Research', 'Jupyter', 'Anaconda', 'Góc nhìn HaiLP'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chào các bạn Researcher tương lai. \n\nNhiều bạn nghe đến Python là nghĩ ngay đến mấy ông IT đầu to mắt cận ngồi gõ code đen xì. SAI! Python ngày nay là vũ khí tối thượng của dân Phân tích Dữ liệu (Data Analyst) và Nghiên cứu Định lượng (Quantitative Researcher).\n\nTại sao dân Marketing/Quản trị nên học Python?\n1. Xử lý Big Data: Excel 1 triệu dòng là treo máy. Python xử lý 10 triệu dòng vẫn mượt.\n2. Thống kê chuyên sâu: Các thư viện như `statsmodels`, `pingouin` mạnh ngang ngửa SPSS/AMOS.\n3. Tự động hóa: Viết code 1 lần, tháng sau có số liệu mới bấm nút là xong báo cáo.\n\nHôm nay ta sẽ cài đặt Anaconda - cái "Vali cứu thương" chứa sẵn mọi thứ bạn cần.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Cài đặt Anaconda (5 phút)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng cài Python trần (Python.org). Hãy cài Anaconda Distribution.\n\n- Bước 1: Vào [anaconda.com/download](https://www.anaconda.com/download)\n- Bước 2: Tải bản Windows/Mac về và cài đặt (Next liên tục).\n\nXong. Bạn đã có trong tay cả một kho vũ khí hạng nặng: Python, Jupyter, Pandas, Matplotlib... không cần cài lẻ tẻ.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Jupyter Lab - Giao diện "Văn võ song toàn"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Mở Start Menu, gõ `Anaconda Navigator`, xong bấm **Launch Jupyter Lab**.\n\nNó sẽ mở ra một trang web. Đây chính là nơi ta làm việc. Nó cho phép bạn:\n*   Viết văn bản (Markdown) để giải thích (như Word).\n*   Viết code chạy ra kết quả ngay bên dưới.' }],
            },
            {
                _type: 'code',
                language: 'python',
                code: 'print("Xin chào, tôi là Researcher 4.0!")\n# Kết quả: Xin chào, tôi là Researcher 4.0!'
            }
        ]
    },
    {
        title: 'Python101 - Bài 2: Xử Lý Thang Đo Likert Với Pandas (Quên VLOOKUP Đi)',
        slug: { current: 'python101-bai-2-pandas-likert' },
        publishedAt: new Date(Date.now() - 86400000).toISOString(),
        excerpt: 'Dữ liệu khảo sát về thường rất rác: Missing value, thang đo 1-5 lẫn lộn text. Pandas sẽ giúp bạn làm sạch dữ liệu nhanh hơn người yêu cũ trở mặt.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/python101_lesson2_cover_placeholder.png',
        featured: false,
        readingTime: 12,
        tags: ['Python101', 'Pandas', 'Data Cleaning', 'Likert Scale', 'Quantitative'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Trong nghiên cứu định lượng, dữ liệu thô (Raw Data) từ Google Form về thường rất hầm bà lằng. Ví dụ:\n- Cột Giới tính: "Nam", "Male", "M".\n- Cột Hài lòng: 1, 2, 3, 4, 5 (nhưng có ô trống).\n\nDùng Excel filter bằng tay thì đến mùa quýt. Hãy dùng thư viện Pandas.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Load dữ liệu' }],
            },
            {
                _type: 'code',
                language: 'python',
                code: 'import pandas as pd\n\n# Đọc file excel\ndf = pd.read_excel("survey_data.xlsx")\n\n# Xem 5 dòng đầu\ndf.head()'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Xử lý Missing Value (NA)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Quy tắc nghiên cứu: Nếu thiếu ít (<5%) thì điền giá trị trung bình (Mean imputation). Nếu thiếu nhiều thì xóa.\n\n`df = df.fillna(df.mean())` (Điền NA bằng trung bình - Chỉ áp dụng cho cột số nhé).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. Tính điểm trung bình nhân tố (Compute Mean Score)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Bạn có 3 câu hỏi cho biến Hài lòng (SAT1, SAT2, SAT3). Bạn cần tính biến tổng SAT.\n\n`df["SAT"] = df[["SAT1", "SAT2", "SAT3"]].mean(axis=1)`\n\nQuá nhanh, quá nguy hiểm. Không cần gõ hàm Average kéo mỏi tay như Excel.' }],
            }
        ]
    },
    {
        title: 'Python101 - Bài 3: Kiểm Định Cronbach\'s Alpha & EFA Trong Python',
        slug: { current: 'python101-bai-3-reliability-efa' },
        publishedAt: new Date(Date.now() - 172800000).toISOString(),
        excerpt: 'Ai bảo Python không chạy được Cronbach Alpha hay EFA? Thư viện `pingouin` và `factor_analyzer` sẽ khiến fan SPSS phải trầm trồ.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/python101_lesson3_cover_placeholder.png',
        featured: false,
        readingTime: 15,
        tags: ['Python101', 'Quantitative', 'Cronbach Alpha', 'EFA', 'Factor Analysis', 'Pingouin'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đây là bài quan trọng nhất cho dân làm luận văn/nghiên cứu. Kiểm định độ tin cậy và giá trị thang đo.\n\nTrong R có gói `psych`. Trong Python chúng ta có `pingouin` (con chim cánh cụt xinh xắn) và `factor_analyzer`.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Cronbach\'s Alpha với Pingouin' }],
            },
            {
                _type: 'code',
                language: 'python',
                code: 'import pingouin as pg\n\n# Chọn các cột SAT1, SAT2, SAT3\nsat_items = df[["SAT1", "SAT2", "SAT3"]]\n\n# Tính Alpha\nalpha = pg.cronbach_alpha(data=sat_items)\nprint(alpha)\n# Kết quả: (0.85, array([0.8, 0.9])) -> 0.85 là ngon rồi!'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. EFA (Phân tích nhân tố) với factor_analyzer' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'SPSS chạy EFA phải bấm click click chục lần. Python chạy 3 dòng code.\n\n`from factor_analyzer import FactorAnalyzer`\n`fa = FactorAnalyzer(n_factors=3, rotation="varimax")`\n`fa.fit(df_items)`\n`print(fa.loadings_)` (Xem ma trận tà trọng)\n\nKết quả ra y hệt SPSS, nhưng copy paste vào báo cáo chuyên nghiệp hơn nhiều.' }],
            }
        ]
    },
    {
        title: 'Python101 - Bài 4: Hồi Quy Tuyến Tính (Linear Regression) - Tìm Yếu Tố Tác Động',
        slug: { current: 'python101-bai-4-regression' },
        publishedAt: new Date(Date.now() - 259200000).toISOString(),
        excerpt: 'Yếu tố nào ảnh hưởng mạnh nhất đến Lòng trung thành? Giá cả? Chất lượng? Hay Thương hiệu? Hồi quy tuyến tính với `statsmodels` sẽ cho bạn câu trả lời chuẩn xác.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/python101_lesson4_cover_placeholder.png',
        featured: false,
        readingTime: 15,
        tags: ['Python101', 'Quantitative', 'Marketing Analytics', 'Regression', 'Statsmodels', 'Hypothesis Testing'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Scikit-learn (sklearn) rất mạnh về dự báo (Machine Learning), nhưng với dân nghiên cứu cần đọc P-value và R-square, thì `statsmodels` mới là chân ái.\n\nNó in ra cái bảng kết quả đẹp y chang các tạp chí khoa học yêu cầu.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Chạy mô hình OLS' }],
            },
            {
                _type: 'code',
                language: 'python',
                code: 'import statsmodels.api as sm\n\n# Biến phụ thuộc (Y) và Độc lập (X)\nX = df[["Price", "Quality", "Brand"]]\nY = df["Loyalty"]\n\n# Thêm hằng số chặn (Intercept)\nX = sm.add_constant(X)\n\n# Chạy mô hình\nmodel = sm.OLS(Y, X).fit()\nprint(model.summary())'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nhìn vào bảng kết quả:\n- R-squared: Mô hình giải thích được bao nhiêu %.\n- P>|t| (P-value): Nếu < 0.05 là có ý nghĩa.\n- Coef (Hệ số): Tác động dương hay âm.\n\nQuá chuẩn bài bản nghiên cứu khoa học!' }],
            }
        ]
    },
    {
        title: 'Python101 - Bài 5: Phân Khúc Khách Hàng (Segmentation) Với K-Means Clustering',
        slug: { current: 'python101-bai-5-segmentation-kmeans' },
        publishedAt: new Date(Date.now() - 345600000).toISOString(),
        excerpt: 'Chia khách hàng thành các nhóm "Sang chảnh", "Bình dân", "Săn sale" một cách tự động bằng Máy học (Machine Learning). Đỉnh cao của Marketing Analytics.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/python101_lesson5_cover_placeholder.png',
        featured: false,
        readingTime: 15,
        tags: ['Python101', 'Quantitative', 'Marketing Analytics', 'Segmentation', 'K-Means', 'Clustering'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'SPSS làm cái này (Cluster Analysis) khá tù. Python với `scikit-learn` làm việc này cực mượt và visual cực đẹp.\n\nGiả sử bạn có dữ liệu Chi tiêu (Spending) và Thu nhập (Income) của khách hàng. Bạn muốn chia họ thành 3 nhóm.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'K-Means Clustering' }],
            },
            {
                _type: 'code',
                language: 'python',
                code: 'from sklearn.cluster import KMeans\nimport seaborn as sns\n\n# Chọn dữ liệu\nX = df[["Income", "Spending"]]\n\n# Chia làm 3 nhóm\nkmeans = KMeans(n_clusters=3)\ndf["Cluster"] = kmeans.fit_predict(X)\n\n# Vẽ hình xem thử\nsns.scatterplot(data=df, x="Income", y="Spending", hue="Cluster", palette="viridis")'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Kết quả là một biểu đồ với 3 cụm màu khác nhau. Bạn sẽ thấy rõ:\n- Nhóm 1: Thu nhập cao, tiêu ít (Kiệt sỉ).\n- Nhóm 2: Thu nhập cao, tiêu nhiều (Vip).\n- Nhóm 3: Thu nhập thấp, tiêu nhiều (Nguy hiểm).\n\nTừ đó Marketing sẽ có chiến lược riêng cho từng nhóm. Đây chính là Data-driven Marketing!' }],
            }
        ]
    },
    {
        title: 'Python101 - Bài 6: A/B Testing - So Sánh Hiệu Quả Chiến Dịch (T-test & ANOVA)',

        slug: { current: 'python101-bai-6-ab-testing-ttest-anova' },
        publishedAt: new Date(Date.now() - 432000000).toISOString(),
        excerpt: 'Sếp hỏi: "Landing Page A hay B bán hàng tốt hơn?". "Khách miền Bắc hay miền Nam chi tiêu nhiều hơn?". T-test và ANOVA trong Python sẽ giúp bạn trả lời bằng con số P-value đầy thuyết phục.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/python101_lesson6_cover_placeholder.png',
        featured: false,
        readingTime: 12,
        tags: ['Python101', 'Quantitative', 'A/B Testing', 'T-test', 'ANOVA', 'Marketing Analytics'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Trong Marketing hiện đại, A/B Testing là vua. Nhưng làm sao biết sự chênh lệch giữa A và B là "thật" hay chỉ do may mắn ngẫu nhiên?\n\nCâu trả lời là dùng kiểm định so sánh giá trị trung bình (Compare Means). Python có thư viện `pingouin` và `scipy` cân hết việc này.' }],
            },
            {
                _type: 'image',
                localPath: '/blog/python101_body_l6_abtesting_1767447996168.png',
                alt: 'A/B Testing Visualization',
                caption: 'Nhìn bằng mắt thường thấy cột B cao hơn A. Nhưng cao hơn có ý nghĩa thống kê không? Hãy hỏi P-value.'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Independent T-test: So sánh 2 nhóm độc lập' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Ví dụ: So sánh chi tiêu của khách hàng Nam và Nữ.\n\n`import pingouin as pg`\n`res = pg.ttest(df_male["Spending"], df_female["Spending"])`\n`print(res)`\n\nNếu p-val < 0.05: Chúc mừng, sự khác biệt là thật. Marketing nên có chiến lược riêng cho từng nhóm.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. One-way ANOVA: So sánh nhiều nhóm' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Ví dụ: So sánh hiệu quả của 3 mẫu quảng cáo (Ad A, Ad B, Ad C).\n\n`res = pg.anova(data=df, dv="CTR", between="Ad_Type")`\n`print(res)`\n\nNếu p-unc < 0.05 -> Các mẫu quảng cáo có hiệu quả khác nhau. Để biết cụ thể ông nào hơn ông nào, ta dùng `pg.pairwise_tests(..., subject="Ad_Type")` (Hậu kiểm Post-hoc).' }],
            }
        ]
    },
    {
        title: 'Python101 - Bài 7: Chi-Square Test & Cross-tab - Tìm Mối Liên Hệ Giữa Các Dòng Sản Phẩm',
        slug: { current: 'python101-bai-7-chi-square' },
        publishedAt: new Date(Date.now() - 518400000).toISOString(),
        excerpt: 'Liệu Giới tính (Nam/Nữ) có ảnh hưởng đến việc chọn mua iPhone hay Samsung không? Hay là ngẫu nhiên? Chi-Square Test sẽ vạch trần mối liên hệ bí ẩn này.',
        categorySlug: 'data-analysis',
        coverImage: '/blog/python101_lesson7_cover_placeholder.png',
        featured: false,
        readingTime: 10,
        tags: ['Python101', 'Quantitative', 'Chi-Square', 'Association', 'Marketing Analytics'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'T-test dùng cho biến số (Doanh thu, Điểm số...). Còn nếu bạn muốn tìm mối liên hệ giữa các biến phân loại (Categorical) thì sao?\nVí dụ: Nam giới thì hay mua màu đen, Nữ giới hay mua màu hồng. Đây là định kiến hay sự thật?\n\nCông cụ: **Chi-Square Test of Independence**.' }],
            },
            {
                _type: 'image',
                localPath: '/blog/python101_body_l7_chisquare_1767448019536.png',
                alt: 'Chi-Square Analysis Visual',
                caption: 'Bảng chéo (Crosstab) thể hiện tần suất xuất hiện của các cặp giá trị. Chi-Square sẽ tính xem phân phối này có ngẫu nhiên không.'
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Tạo bảng chéo (Crosstab)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: '`ct = pd.crosstab(df["Gender"], df["Product_Color"])`\n`print(ct)`\n\nBạn sẽ thấy bảng tần số. Nhưng nhìn bảng chưa đủ kết luận.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Chạy kiểm định Chi-Square' }],
            },
            {
                _type: 'code',
                language: 'python',
                code: 'from scipy.stats import chi2_contingency\n\nchi2, p, dof, expected = chi2_contingency(ct)\nprint(f"P-value: {p}")'
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Nếu P-value < 0.05: Có mối liên hệ (Association). Tức là Giới tính CÓ ảnh hưởng đến việc chọn màu sắc.\nMarketing Action: Chạy ads màu hồng target vào nữ, màu đen target vào nam.\n\nĐấy, nghiên cứu định lượng trong kinh doanh nó thực dụng như thế đấy!' }],
            }
        ]
    }
];
