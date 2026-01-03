
export const dms_post = [
    {
        title: 'DMS: 5 Chiêu Trò "Qua Mặt" Hệ Thống Của Sales (Sếp Không Hề Biết) ',
        slug: { current: 'dms-5-chieu-tro-qua-mat' },
        publishedAt: new Date().toISOString(),
        excerpt: 'Sếp tưởng lắp DMS xong là rung đùi quản lý được Sales? Nhầm to! Sales nhà mình thông minh hơn máy nhiều. Cùng bóc trần 5 chiêu "ảo ma canada" mà anh em hay dùng để lách luật.',
        categorySlug: 'rtm-distribution', // Or 'commercial-optimization' if available, defaulting to RTM
        coverImage: '/blog/dms_tricks_cover.png', // Custom generated image
        featured: true,
        readingTime: 10,
        tags: ['DMS', 'Sales Tricks', 'Góc nhìn HaiLP', 'Quản trị hệ thống'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chào các bạn, Hải đây.\n\nHôm trước ngồi cafe với ông anh Giám đốc vùng (RSM) của một hãng FMCG lớn. Ông than: "Hải ơi, anh đầu tư cái hệ thống DMS (Distribution Management System) mấy tỷ bạc, tưởng là quản chặt được quân, ai dè doanh số vẫn ảo, tồn kho vẫn lệch. Anh nghi tụi nó hack hệ thống quá!"\n\nTôi cười bảo: "Hack gì anh ơi. Tụi nó hack cơm (human hack) chứ hack máy làm gì cho mệt."\n\nLà một người từng lăn lội từ Salesman lên Director, tôi lạ gì mấy cái "văn" của anh em. Hôm nay, tôi sẽ làm "kẻ phản bội" để bật mí cho các sếp 5 chiêu trò kinh điển mà Sales hay dùng để qua mặt DMS. (Anh em Sales đọc xong đừng ném đá tôi nhé, tôi chỉ muốn tốt cho công ty thôi!).' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Chiêu 1: Fake GPS - "Ngồi quán nét check-in toàn thành phố"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đây là chiêu sơ đẳng nhất (Level 1).\n\nCách làm: Tải cái app "Fake GPS" trên Android về. Chọn tọa độ cửa hàng. Bấm nút. Thế là máy DMS nhận diện "À, thằng Tèo đang ở cửa hàng cô Ba". Trong khi thực tế thằng Tèo đang nằm ngủ ở nhà hoặc ngồi đánh Liên Quân.\n\nCách trị: \n1. Chặn Developer Mode: App DMS xịn phải phát hiện được điện thoại đang bật chế độ nhà phát triển (Developer Options) hoặc Mock Location. Nếu bật -> Không cho chấm công.\n2. Soi Heatmap: Cuối ngày mở bản đồ nhiệt ra. Nếu thấy các điểm viếng thăm nằm trên một đường thẳng tắp (hoặc di chuyển với tốc độ ánh sáng) -> Fake lòi.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Chiêu 2: Check-in Hộ - "Tình đồng chí thắm thiết"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Level cao hơn tí. Hôm nay Tèo ốm (hoặc lười). Tèo nhờ Tý (tuyến bên cạnh): "Mày cầm máy tao đi chấm công hộ cái". Thế là Tý 2 tay 2 súng, chạy xô cả 2 tuyến. \n\nCách trị:\n1. Dùng AI nhận diện khuôn mặt: Check-in là phải selfie. Nếu mặt thằng Tý mà hiện lên máy thằng Tèo -> Báo động đỏ.\n2. Kiểm tra thời gian viếng thăm (Duration): Một cuộc viếng thăm chuẩn phải mất 5-10 phút (chào hỏi, kiểm tồn, order). Nếu thấy lịch sử viếng thăm toàn 30 giây -> Chắc chắn là chạy show chấm công cho có.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Chiêu 3: Xào Số Tồn Kho (Cooking Data) - "Kho ảo"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chiêu này nguy hiểm nhất, ảnh hưởng trực tiếp đến túi tiền công ty (Level Max).\n\nBối cảnh: Cuối tháng, thiếu số. Sales "nhờ" Nhà phân phối (NPP) nhập 100 thùng hàng nhưng không giao về kho NPP mà gửi tạm ở... kho công ty (hoặc kho nhà Sales). Trên hệ thống DMS thì hàng đã xuất (Sell-in ngon). Nhưng thực tế hàng vẫn nằm một chỗ. Tháng sau Sales lại làm thủ tục "trả hàng" hoặc âm thầm tuồn ra ngoài bán phá giá.\n\nCách trị: \n1. Audit đột xuất: Giám sát phải xuống đếm kho NPP bất thình lình. Lệch 1 thùng phạt 10 thùng.\n2. QR Code từng thùng: Quét mã thùng nào là thùng đó chết, không "xào" đi xào lại được.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Chiêu 4: Chia Nhỏ Đơn Hàng (Splitting Orders)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Công ty quy định KPI: Phải đạt 30 đơn hàng/ngày (LPPC). Sales bán được có 10 đơn to. Làm sao cho đủ chỉ tiêu? \nSales xé nhỏ 1 đơn to thành 3 đơn nhỏ (cho 3 cửa hàng khác nhau, hoặc cùng 1 cửa hàng nhưng nhập 3 lần trong ngày). \n-> Kết quả: LPPC đẹp như mơ, nhưng thực tế độ phủ (Coverage) không tăng tẹo nào.\n\nCách trị: Phân tích dữ liệu Drop Size (Giá trị trung bình đơn hàng). Nếu thấy Sales nào có LPPC cao chót vót nhưng Drop Size bé tí tẹo -> Đích thị là thánh "xé đơn".' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Chiêu 5: Chụp Ảnh "Ma" - "Bức ảnh check-in huyền thoại"' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Công ty bắt chụp ảnh trưng bày làm bằng chứng. Sales lười bày biện, bèn lưu sẵn một cái ảnh trưng bày đẹp long lanh (từ tháng trước, hoặc từ cửa hàng khác) vào máy. Đến nơi chỉ việc lôi ra upload lên.\n\nCó trường hợp hài hước hơn: Sales chụp lại... màn hình máy tính có cái ảnh trưng bày.\n\nCách trị:\n1. Chặn upload từ thư viện (Gallery): Bắt buộc chụp live từ Camera app DMS.\n2. Watermark: App tự đóng dấu tọa độ GPS và Thời gian thực lên ảnh. Hết đường chối cãi.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Lời Kết: Công Nghệ Chỉ Là Công Cụ' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'DMS rất mạnh, nhưng nó không phải là cây đũa thần. "Con người tạo ra hệ thống, thì con người cũng phá được hệ thống".\n\nMuốn trị tận gốc, sếp không thể chỉ nương vào máy móc. Sếp phải:\n1. Đi thị trường (Go Market): Đừng ngồi phòng lạnh nhìn Dashboard. Hãy xỏ giày vào và đi cùng nhân viên.\n2. Thiết kế lương thưởng (Incentive): Đừng ép số quá mức khiến nhân viên buộc phải gian lận để mưu sinh. Hãy thưởng cho hành vi ĐÚNG (Right Behavior) chứ đừng chỉ thưởng cho Kết quả (Result).\n\nChúc các sếp quản trị tin anh em, nhưng đừng tin tuyệt đối nhé! ' }],
            }
        ]
    }
];
