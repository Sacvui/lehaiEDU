export const series_c_1 = [
    {
        title: '[Logistics Masterclass #1] Inventory: Kho bãi không phải cái kho chứa đồ ',
        slug: { current: 'logistics-masterclass-1-inventory' },
        publishedAt: new Date(Date.now() - 5000000).toISOString(),
        excerpt: 'Nhiều sếp cứ nghĩ kho bãi chỉ là chỗ vứt hàng vào. Sai lầm! Tồn kho là tiền "chết" nằm im. Bài toán JIT (Just-in-Time) vs JIC (Just-in-Case) và câu chuyện đau đầu của dân Supply Chain.',
        categorySlug: 'logistics-supply-chain',
        featured: true,
        readingTime: 10,
        tags: ['Inventory', 'Supply Chain', 'JIT', 'JIC', 'Logistics'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chào các bạn, Hải đây. Lại là câu chuyện "bếp núc" của doanh nghiệp.\n\nHồi còn làm ở Coca-Cola hay Japfa, mỗi lần họp S&OP (Sales & Operations Planning), không khí luôn căng như dây đàn. Ông Sales thì gào lên: "Tại sao hết hàng? Kho làm ăn kiểu gì vậy?". Ông Kho thì cãi: "Hàng cũ ế đầy ra đấy, nhập thêm về để chuột gặm à?".' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đây là mâu thuẫn kinh điển. Sales luôn muốn tồn kho nhiều (để bán cho sướng), còn Finance và Logistics luôn muốn tồn kho ít (để xoay vòng vốn và giảm chi phí). Làm sao cân bằng? Đó là nghệ thuật của Inventory Management.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'JIT (Just-in-Time) vs JIC (Just-in-Case)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'JIT (Vừa đủ): Triết lý kiểu Toyota. Hàng về cái là sản xuất/bán ngay. Kho gần như trống rỗng. Lợi là tiền không bị chôn vốn, kho gọn gàng. Hại là nếu nhà cung cấp hắt hơi sổ mũi một cái, hay tàu kẹt ở kênh Suez một phát, là đứt chuỗi ngay. Nhớ vụ chip bán dẫn thời Covid không? Chết vì JIT đấy.' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'JIC (Phòng hờ): Kiểu mua lúa tích trữ mùa đông. Lúc nào kho cũng đầy ắp (Safety Stock cao). Lợi là khách gọi cái có hàng ngay, Sales rất sướng. Hại là tiền nằm chết một chỗ, chi phí lưu kho, bảo hiểm, hư hỏng tăng vọt.' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Vậy chọn cái nào? Kinh nghiệm của Hải với tư cách National BD Director là: Đừng cực đoan.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Phân loại hàng theo ABC Analysis' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng đối xử với tất cả các mã hàng (SKU) như nhau.\n\n Nhóm A (Best Seller): 20% mã hàng mang lại 80% doanh thu. Nhóm này phải áp dụng JIC, tuyệt đối không được đứt hàng. Đứt hàng nhóm này là mất khách, mất thị phần. Tồn kho an toàn phải cao.\n Nhóm C (Hàng chậm/Slow moving): Mấy món cả năm bán được vài cái. Áp dụng JIT hoặc Dropshipping. Khi nào có đơn thì đặt, hoặc giữ tồn kho cực thấp. Đừng tiếc rẻ mà ôm đống này, nó là cục nợ đấy.' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Tóm lại: Tồn kho là con dao hai lưỡi. Nhiều quá thì chết đuối trong nợ, ít quá thì chết khát vì mất doanh thu. Người làm Supply Chain giỏi là người biết múa trên dây giữa hai thái cực này.' }],
            }
        ]
    },
    {
        title: '[Logistics Masterclass #2] Transportation: Đừng chở gió - Bài toán tối ưu vận tải ',
        slug: { current: 'logistics-masterclass-2-transportation' },
        publishedAt: new Date(Date.now() - 15000000).toISOString(),
        excerpt: 'Xe tải chạy rỗng chiều về (Empty backhaul) là nỗi đau của mọi công ty Logistics. Làm sao để "ghép đơn", "đi chung" và tối ưu hóa Load Factor? Chiến thuật Milk-run là gì?',
        categorySlug: 'logistics-supply-chain',
        featured: false,
        readingTime: 12,
        tags: ['Transportation', 'Optimization', 'Milk-run', 'Cost Saving'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Chi phí vận tải (Transport Cost) thường chiếm 50-60% tổng chi phí Logistics. Cắt được chi phí này là lãi ròng tăng ngay lập tức. Nhưng cắt kiểu gì?' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Kẻ thù số 1: Chở gió (Empty Backhaul)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Xe tải chở hàng từ Sài Gòn đi Nha Trang bán. Lúc đi thì đầy ắp (Full Truck Load). Lúc về thì thùng xe trống rỗng. Nhưng tiền xăng, tiền tài xế, tiền cầu đường vẫn phải trả đủ cho cả 2 chiều. Đó là lãng phí khủng khiếp.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Giải pháp 1: Kết hợp (Collaboration)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Ngày xưa Hải làm cho một công ty FMCG. Xe mình chở hàng ra miền Trung. Thay vì chạy xe không về, bên Hải liên hệ với một công ty vật liệu xây dựng ở miền Trung cần chuyển hàng vào Nam. Hai bên bắt tay nhau (Backhaul sharing). Thế là chi phí giảm được 30% cho mỗi bên. Đừng đi một mình, hãy đi cùng nhau.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Giải pháp 2: Milk-run (Vắt sữa bò)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Thay vì mỗi nhà cung cấp chở hàng lẻ tẻ đến kho của mình (vừa tốn xe, vừa kẹt cổng kho), Hải cho 1 chiếc xe tải lớn của mình chạy một vòng qua các nhà cung cấp A -> B -> C để gom hàng, rồi đem về kho. Giống như đi vắt sữa từng con bò vậy.\n\nKết quả: Tăng độ đầy thùng xe (Load Factor), giảm số lượng chuyến xe (Trip reduction), và quan trọng nhất là mình chủ động được thời gian hàng về.' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Làm Logistics không phải là thuê đại cái xe tải là xong. Đó là cả một bài toán quy hoạch tuyến tính (Linear Programming) mà đôi khi phải dùng đến AI mới giải nổi.' }],
            }
        ]
    },
    {
        title: '[Logistics Masterclass #3] Cold Chain: Chuỗi cung ứng lạnh - Cuộc chơi của nhà giàu ',
        slug: { current: 'logistics-masterclass-3-cold-chain' },
        publishedAt: new Date(Date.now() - 25000000).toISOString(),
        excerpt: 'Làm hàng khô (Dry goods) đã khó, làm hàng lạnh (Fresh/Frozen) còn khó gấp 10 lần. Nhiệt độ chỉ cần lệch 2 độ C là đi tong cả container tôm hùm. Những "bẫy" chết người trong Cold Chain.',
        categorySlug: 'logistics-supply-chain',
        featured: false,
        readingTime: 15,
        tags: ['Cold Chain', 'FMCG', 'Quality Control', 'Logistics'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Các bạn hay nghe nói "Logistics Việt Nam chi phí cao". Một phần lớn là do chuỗi cung ứng lạnh (Cold Chain) của chúng ta còn yếu. Hải từng nếm mùi cay đắng với mảng này.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Nhiệt độ là ông chủ' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Bình thường, giao thùng mì tôm trễ 1 ngày chẳng sao. Nhưng giao thùng kem hay thùng sữa chua mà xe bị hỏng máy lạnh giữa đường 2 tiếng thôi, là coi như đổ bỏ cả xe. Vi khuẩn nó không chờ đợi ai cả.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Điểm gãy (Breaking Point): Loading & Unloading' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Xe lạnh xịn, kho lạnh xịn. Nhưng lúc chuyển hàng từ xe vào kho, nhân viên... để thùng hàng phơi nắng 15 phút rồi mới bốc vào. Thế là xong! Hiện tượng "Sốc nhiệt" xảy ra. Bên ngoài thùng thì lạnh, nhưng bên trong lõi sản phẩm đã bắt đầu biến chất.\n\nGiải pháp là gì? Phải có Dock seal (đệm che kín đuôi xe) và quy trình thao tác cực nhanh. Súng bắn nhiệt độ phải là vật bất ly thân của thủ kho.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Monitor or Die' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Ngày nay không ai tin vào sổ tay tài xế ("Anh thề là máy lạnh chạy suốt"). Chúng ta dùng Data Logger. Một con chip nhỏ xíu thả vào thùng hàng. Nó ghi lại nhiệt độ mỗi 5 phút/lần. Cuối hành trình cắm vào máy tính, nó vẽ ra biểu đồ. Lộ ra ngay lúc nào tài xế tắt máy lạnh để tiết kiệm dầu. Trong Cold Chain, Dữ liệu là quan tòa trung thực nhất.' }],
            }
        ]
    },
    {
        title: '[Logistics Masterclass #4] Procurement: Nghệ thuật mua hàng - Mua rẻ chưa chắc đã ngon ',
        slug: { current: 'logistics-masterclass-4-procurement' },
        publishedAt: new Date(Date.now() - 35000000).toISOString(),
        excerpt: 'Procurement (Thu mua chiến lược) khác gì với Purchasing (Mua hàng sự vụ)? Tại sao chọn nhà cung cấp rẻ nhất thường là con đường dẫn đến thảm họa?',
        categorySlug: 'logistics-supply-chain',
        featured: false,
        readingTime: 12,
        tags: ['Procurement', 'Sourcing', 'TCO', 'Supplier Management'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Sếp nào cũng thích nhân viên mua hàng giá rẻ. "Thằng A báo giá 10 đồng, thằng B báo 8 đồng, chọn B ngay cho anh!". Rất nhiều công ty chết vì tư duy này.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Khái niệm TCO (Total Cost of Ownership)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Giá mua (Price) chỉ là phần nổi của tảng băng chìm. TCO mới là tổng chi phí thực sự.\n\nVí dụ: Bạn mua cái máy in rẻ hơn 2 triệu. Nhưng mực in của nó đắt gấp đôi, hay kẹt giấy, mỗi lần sửa tốn cả ngày chờ đợi (dừng sản xuất). Tính ra sau 1 năm, cái máy "rẻ" đó đắt hơn cái máy xịn gấp 3 lần.\n\nHải luôn training cho nhân viên Procurement: "Đừng nhìn vào Price Tag, hãy nhìn vào Life Cycle Cost". Mua đắt một tí mà bền, dịch vụ hậu mãi tốt, giao hàng đúng hẹn (OTIF), thì vẫn là Rẻ.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Đa dạng hóa nguồn cung (Supplier Diversification)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng bao giờ bỏ tất cả trứng vào một giỏ. Nếu bạn chỉ có 1 nhà cung cấp duy nhất (vì họ rẻ nhất), ngày mai nhà máy họ cháy, hay họ giận dỗi không bán nữa, là bạn "đứng hình" toàn bộ dây chuyền sản xuất. \n\nNguyên tắc vàng: Ít nhất 2-3 nhà cung cấp cho các nguyên liệu chiến lược (Strategic materials). Cho họ cạnh tranh nhau, mình vừa an toàn, vừa có giá tốt hơn (nhưng đừng ép họ chết, hãy Win-Win).' }],
            }
        ]
    },
    {
        title: '[Logistics Masterclass #5] Crisis Management: Đứt gãy chuỗi cung ứng - Bài học xương máu từ Covid ',
        slug: { current: 'logistics-masterclass-5-crisis-management' },
        publishedAt: new Date(Date.now() - 45000000).toISOString(),
        excerpt: 'Khi thiên nga đen xuất hiện (Covid, chiến tranh, tắc biên), kế hoạch hoàn hảo cũng vứt sọt rác. Làm sao xây dựng chuỗi cung ứng "nhựa sống" (Resilient Supply Chain)?',
        categorySlug: 'logistics-supply-chain',
        featured: false,
        readingTime: 18,
        tags: ['Crisis Management', 'Resilience', 'Risk Management', 'Supply Chain'],
        body: [
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Covid-19 là bài kiểm tra tàn khốc nhất lịch sử Supply Chain. Hải nhớ như in cái thời điểm phong tỏa 2021 TPHCM. Xe hàng không chạy được, nhân viên kho bị kẹt ở nhà, giấy đi đường thay đổi từng giờ.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Efficiency (Hiệu quả) vs Resilience (Sự dẻo dai)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Trước đây, ai cũng tôn sùng Lean (tinh gọn) và Efficiency (Hiệu quả, chi phí thấp nhất). Kho phải min, nhân sự phải min. Nhưng khi khủng hoảng ập đến, những chuỗi cung ứng "tinh gọn" quá mức lại là những thằng gãy đầu tiên vì không có bộ đệm (Buffer).\n\nXu hướng mới bây giờ là Resilience (Sự dẻo dai). Chấp nhận tốn kém hơn một chút (tồn kho nhiều hơn, sourcing ở gần hơn dù đắt hơn - Nearshoring) để khi có biến, mình vẫn sống sót.' }],
            },
            {
                _type: 'block',
                style: 'h2',
                children: [{ _type: 'span', text: 'Kịch bản giả định (Scenario Planning)' }],
            },
            {
                _type: 'block',
                style: 'normal',
                children: [{ _type: 'span', text: 'Đừng chờ nước đến chân mới nhảy. Hãy tập diễn tập.\n- Nếu Trung Quốc đóng biên thì sao? Mua nguyên liệu ở đâu thay thế?\n- Nếu kho chính bị phong tỏa thì sao? Có kho vệ tinh nào backup không?\n\nNgười lãnh đạo Supply Chain giỏi là người luôn có Plan B, Plan C trong túi áo. Trong thời bình thì nhìn họ có vẻ lo xa hâm dở, nhưng trong thời loạn, họ là người hùng cứu cả công ty.' }],
            }
        ]
    }
];
