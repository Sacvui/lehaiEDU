
export const dms_failure_post = [
    {
        title: 'DMS "Nghĩa Địa": Tại Sao 70% Dự Án Triển Khai Thất Bại? ',
        slug: { current: 'dms-nghia-dia-trien-khai-that-bai' },
        publishedAt: new Date().toISOString(),
        excerpt: 'Bạn bỏ ra vài tỷ mua DMS. 6 tháng sau, Sales vẫn đặt hàng qua Zalo, số liệu trên hệ thống thì "ảo tung chảo". Chào mừng đến với "nghĩa địa" của những dự án công nghệ chết yểu. Tại sao?',
        categorySlug: 'rtm-distribution',
        coverImage: '/blog/dms_failure_cover.png',
        featured: true,
        readingTime: 15,
        tags: ['DMS', 'Project Failure', 'Góc nhìn HaiLP', 'Digital Transformation'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chào các bạn, Hải đây.\n\nTrong suốt 15 năm làm nghề, tôi đã chứng kiến (và trực tiếp đi dọn dẹp) không biết bao nhiêu cái "bãi chiến trường" mang tên DMS (Distribution Management System). Có những tập đoàn lớn, tiền không thiếu, thuê tư vấn Big 4, mua giải pháp SAP/Oracle triệu đô, nhưng cuối cùng dự án vẫn nằm đắp chiếu hoặc thoi thóp thở oxy.\n\nTheo thống kê không chính thức (nhưng rất đau lòng) của tôi: 70% các dự án DMS tại Việt Nam không đạt được kỳ vọng ban đầu, hoặc tệ hơn là thất bại toàn tập sau 1 năm.\n\nTại sao vậy? Tại sao một công cụ quyền năng như thế lại trở thành gánh nặng? Hôm nay, chúng ta sẽ cùng mổ xẻ những cái "xác chết" này để tìm ra nguyên nhân. Bài viết này sẽ hơi đau, nhưng thuốc đắng giã tật.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '1. Sai lầm "Chiếc Đũa Thần" (The Magic Wand Fallacy)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đây là căn bệnh phổ biến nhất của các Sếp. \n\nTriệu chứng: Công ty đang loạn cào cào. Sales thì lười, NPP thì gian lận, quy trình thì lủng củng. Sếp nghĩ: "À, chắc do mình quản lý thủ công nên thế. Giờ mua cái phần mềm xịn về là tự nhiên mọi thứ sẽ vào guồng, Sales sẽ ngoan, số sẽ chuẩn."\n\nSai! Sai bét nhè!\n\nCông nghệ chỉ là chất xúc tác (Accelerator). Nếu quy trình của bạn đang "rác" (Bad Process), thì khi áp dụng công nghệ vào, bạn sẽ có một "quy trình rác tự động hóa" (Automated Bad Process) với tốc độ xả rác nhanh gấp 10 lần.\n\nBài học: Trước khi mua DMS, hãy sửa cái quy trình bán hàng (Sales Process) cho chuẩn bằng cơm đã. Chuẩn hóa tuyến bán hàng (MCP), chuẩn hóa chính sách (Trade Scheme), chuẩn hóa dữ liệu. Đừng bắt phần mềm phải đi sửa lỗi hệ thống quản trị của bạn.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '2. Dữ liệu rác (Garbage In, Garbage Out)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'DMS sống nhờ dữ liệu (Master Data). Nhưng 90% công ty khi bắt đầu triển khai đều có bộ Master Data nát như tương bần.\n\n Danh sách khách hàng: Một bà tạp hóa "Cô Ba" được Sales A tạo, Sales B tạo, NPP tạo... thành 3 mã khác nhau (Duplicate). Địa chỉ thì "Cạnh cây đa đầu làng". Số điện thoại thì "0909090909".\n Danh mục sản phẩm (SKU): Mã cũ, mã mới, mã khuyến mãi lộn tùng phèo.\n\nKhi nạp cái đống rác này vào hệ thống DMS mới, Sales đi tuyến sẽ không tìm thấy khách, đặt hàng sai mã. Sau 1 tuần ức chế, họ vứt máy DMS ở nhà và quay lại... ghi sổ tay cho nhanh.\n\nBài học: "Data Cleaning" là bước sống còn. Phải cử đội quân đi từng ngõ, gõ từng nhà, verify từng toạ độ GPS, chụp ảnh từng bảng hiệu để làm sạch dữ liệu TRƯỚC khi Go-live. Đừng tiếc tiền cho bước này.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '3. Cuộc chiến vương quyền: Salesman vs The System' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Bạn nghĩ anh em Sales sẽ hào hứng đón nhận DMS? Mơ đi.\n\nVới Sếp, DMS là công cụ quản lý. Với Sales, DMS là cái "vòng kim cô", là "còng số 8". Tự nhiên đang tự do tự tại, giờ đi đâu cũng bị GPS soi, làm gì cũng phải chụp ảnh báo cáo, sai một ly là bị trừ lương.\n\nHọ sẽ chống đối. \n Nhẹ thì: "Máy lag quá anh ơi", "Hết pin", "Mạng yếu không chấm công được".\n Nặng thì: Đình công, hoặc dùng các chiêu trò "hack" như tôi đã kể bài trước (Fake GPS).\n\nNếu Sếp chỉ dùng DMS như một cây gậy (Cảnh sát) để trừng phạt, dự án chắc chắn thất bại. Anh em sẽ tìm cách phá cho hỏng hệ thống.\n\nBài học: Phải dùng củ cà rốt. Phải cho Sales thấy DMS giúp họ KIẾM TIỀN dễ hơn (tự động tính thưởng, gợi ý đơn hàng, tra cứu tồn kho). Hãy biến DMS thành trợ lý (Assistant) chứ không phải cai ngục (Policeman).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '4. Vendor "Đem con bỏ chợ"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chọn đối tác triển khai (Vendor) cũng là một canh bạc. Nhiều công ty phần mềm chỉ giỏi... code (Technical), chứ mù tịt về nghiệp vụ phân phối (Business Domain).\n\nHọ đưa cho bạn một cái phần mềm chuẩn (Standard) và bảo: "Anh dùng đi, cả thế giới dùng thế này". Nhưng ngành của bạn là Kem (Frozen) quy trình nó khác ngành Mì tôm (Dry), khác ngành Dược (OTC).\n\nKhi phát sinh vấn đề (ví dụ: cần split đơn, cần quản lý date cận), Vendor bảo: "Cái này phải Customize, tốn thêm 20.000$ và 3 tháng code". Sếp xót tiền không làm. Sales dùng thấy bất tiện. Thế là đắp chiếu.\n\nBài học: Mua giải pháp (Solution), đừng mua code. Hãy chọn Vendor nào có đội ngũ tư vấn am hiểu ngành của bạn, dám cãi bạn khi bạn đưa ra yêu cầu sai, và cam kết đồng hành (Support) dài hạn.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: '5. Sếp "Cưỡi Ngựa Xem Hoa"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Lỗi cuối cùng và to nhất: Lỗi tại Sếp.\n\nNhiều lãnh đạo ký hợp đồng xong là khoán trắng cho IT hoặc Giám đốc Kinh doanh. "Các chú cứ làm đi, bao giờ xong báo anh". \n\nDự án DMS là dự án thay đổi cốt lõi (Core Transformation), nó động chạm đến miếng cơm manh áo, thói quen làm việc của hàng nghìn con người. Nếu "Tướng" không ra trận, không sâu sát, không quyết liệt xử lý các mâu thuẫn lợi ích, thì "Quân" sẽ tan rã ngay.\n\nSếp phải là người đầu tiên mở Dashboard ra xem vào mỗi sáng thứ 2. Nếu Sếp không dùng, đừng mong nhân viên dùng.\n\nLời kết:' }],
            },
            {
                _type: 'block',
                style: 'blockquote',
                children: [{ _type: 'span', text: 'DMS không phải là liều thuốc tiên. Nó là một cuộc phẫu thuật đau đớn để cắt bỏ ung nhọt. Muốn thành công, bạn phải chuẩn bị sẵn sàng cả về Thể lực (Ngân sách), Trí lực (Dữ liệu/Quy trình) và quan trọng nhất là Tinh thần (Quyết tâm chính trị).' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng để tiền của mình biến thành đống sắt vụn trong "nghĩa địa" công nghệ. Hãy làm thật, ăn thật!\n\nChúc các bạn có một dự án DMS thành công rực rỡ (hoặc ít nhất là sống sót qua năm đầu tiên)! ' }],
            }
        ]
    }
];
