const QUESTIONS = [

/* =====================================================
   MỤC TIÊU
===================================================== */

{
    id: 1,

    category: "Mục tiêu",

    question: "Khi bắt đầu một ngày mới, việc đầu tiên bạn thường làm là:",

    helper: "Chọn đáp án mô tả đúng bạn nhất.",

    answers: [

        "Lao ngay vào tin nhắn, email hoặc những việc đang chờ xử lý.",

        "Làm việc dễ nhất hoặc việc gấp nhất trước để có cảm giác đang tiến lên.",

        "Nhìn qua các việc cần làm và lên kế hoạch nhanh, nhưng vẫn dễ bị cuốn theo phát sinh trong ngày.",

        "Xác định 1–3 việc quan trọng nhất trong ngày và bắt đầu bằng một việc có giá trị cao.",

        "Kết nối lại với mục tiêu lớn hơn, chọn việc có đòn bẩy nhất trong ngày và chủ động bảo vệ thời gian để làm việc đó."

    ]

},

{
    id: 2,

    category: "Mục tiêu",

    question: "Nếu mỗi ngày có thêm 2 giờ rảnh trong một tháng, bạn nhiều khả năng sẽ dùng thời gian đó để làm gì?",

    helper: "Chọn đáp án gần với bạn nhất.",

    answers: [

        "Nghỉ ngơi, giải trí hoặc ngủ bù vì hiện tại đã quá mệt.",

        "Xử lý việc tồn đọng để bớt cảm giác bị dí.",

        "Học thêm, đọc thêm hoặc thử một điều mới, nhưng chưa chắc gắn với một ưu tiên rõ ràng.",

        "Đẩy tiến độ một mục tiêu hoặc dự án cụ thể đang cần kết quả trong hiện tại.",

        "Xây dựng một năng lực, hệ thống hoặc tài sản dài hạn giúp mình tạo nhiều kết quả hơn trong tương lai mà không phải gồng thêm."

    ]

},

{
    id: 3,

    category: "Mục tiêu",

    question: "Khi gặp khó khăn, áp lực hoặc liên tiếp thất bại, điều nào mô tả đúng bạn nhất?",

    helper: "Hãy chọn đáp án phản ánh đúng bản thân bạn trong phần lớn thời gian.",

    answers: [

        "Tôi rất dễ bỏ cuộc hoặc mất động lực.",

        "Tôi vẫn cố gắng nhưng thường chỉ vì trách nhiệm hoặc áp lực từ bên ngoài.",

        "Tôi cố gắng tiếp tục nhờ kỷ luật của bản thân, dù đôi khi cũng hoài nghi.",

        "Tôi là người đã đặt mục tiêu thì sẽ cố gắng theo đuổi đến cùng và hoàn thành nó, dù đôi khi hành trình đó cũng khá áp lực.",

        "Tôi đang theo đuổi một mục tiêu đủ lớn và ý nghĩa, nên mỗi ngày thức dậy tôi đều biết mình đang xây dựng con người và cuộc sống mà mình thật sự mong muốn."

    ]

},

{
    id: 4,

    category: "Mục tiêu",

    question: "Trong tháng vừa rồi, bạn có bao nhiêu ngày cảm thấy: 'Tôi biết rất rõ điều quan trọng nhất mình cần tập trung'?",

    helper: "Đánh giá dựa trên 30 ngày gần đây.",

    answers: [

        "Gần như không có.",

        "Thỉnh thoảng.",

        "Khoảng một nửa.",

        "Phần lớn thời gian.",

        "Gần như mỗi ngày."

    ]

},

/* =====================================================
   NĂNG LƯỢNG THỂ CHẤT
===================================================== */

{
    id: 5,

    category: "Năng lượng thể chất",

    question: "3 giờ chiều, không uống cà phê hay nạp thêm đường, bạn thường:",

    helper: "Đánh giá mức năng lượng tự nhiên của bạn.",

    answers: [

        "Muốn nằm nghỉ.",

        "Lờ đờ.",

        "Bình thường.",

        "Vẫn tỉnh táo.",

        "Đủ năng lượng để tiếp tục."

    ]

},

{
    id: 6,

    category: "Năng lượng thể chất",

    question: "Sau một ngày làm việc bình thường, bạn thường:",

    helper: "",

    answers: [

        "Kiệt sức.",

        "Chỉ muốn nằm.",

        "Vẫn làm được việc nhà.",

        "Còn sức cho gia đình hoặc sở thích.",

        "Vẫn còn nhiều năng lượng."

    ]

},

{
    id: 7,

    category: "Năng lượng thể chất",

    question: "Khi thức dậy buổi sáng:",

    helper: "",

    answers: [

        "Mệt.",

        "Muốn ngủ thêm.",

        "Bình thường.",

        "Khá tỉnh táo.",

        "Sẵn sàng bắt đầu ngày mới."

    ]

},

{
    id: 8,

    category: "Năng lượng thể chất",

    question: "Nếu cuối tuần không có kế hoạch gì, cơ thể bạn thường:",

    helper: "",

    answers: [

        "Ngủ bù gần hết.",

        "Nghỉ rất nhiều mới hồi.",

        "Nghỉ vừa đủ.",

        "Chủ động vận động.",

        "Tràn đầy năng lượng."

    ]

},

{
    id: 9,

    category: "Năng lượng thể chất",

    question: "Bạn vừa leo liên tục 4 tầng cầu thang:",

    helper: "",

    answers: [

        "Rất mệt.",

        "Thở gấp trên 30 giây.",

        "Hồi lại trong khoảng 15 giây.",

        "Chỉ hơi tăng nhịp thở.",

        "Hầu như không ảnh hưởng."

    ]

},

{
    id: 10,

    category: "Năng lượng thể chất",

    question: "Bạn vô tình nhìn thấy mình trong gương:",

    helper: "Hãy chọn cảm nhận đầu tiên xuất hiện.",

    answers: [

        "Tôi tránh soi gương để không phải nhìn thấy mình.",

        "Thất vọng.",

        "Bình thường.",

        "Khá hài lòng.",

        "Tự hào."

    ]

},
/* =====================================================
   NĂNG LƯỢNG CẢM XÚC
===================================================== */

{
    id: 11,

    category: "Năng lượng cảm xúc",

    question: "Khi nhận được một lời góp ý khá thẳng, phản ứng thường gặp của bạn là:",

    helper: "Hãy chọn phản ứng xảy ra thường xuyên nhất.",

    answers: [

        "Nghĩ về nó rất lâu và dễ tự trách bản thân.",

        "Khó chịu hoặc mất tinh thần trong một khoảng thời gian.",

        "Bình tĩnh nhìn nhận nhưng vẫn bị ảnh hưởng.",

        "Chọn lọc điều hữu ích và nhanh chóng bước tiếp.",

        "Xem đó là cơ hội để học hỏi và hoàn thiện bản thân."

    ]

},

{
    id: 12,

    category: "Năng lượng cảm xúc",

    question: "Một kế hoạch quan trọng thất bại, bạn mất bao lâu để lấy lại tinh thần?",

    helper: "",

    answers: [

        "Hơn 1 tuần.",

        "Vài ngày.",

        "Khoảng 1 ngày.",

        "Vài giờ.",

        "Gần như ngay lập tức."

    ]

},

{
    id: 13,

    category: "Năng lượng cảm xúc",

    question: "Trong 30 ngày gần đây, trạng thái cảm xúc xuất hiện nhiều nhất ở bạn là:",

    helper: "",

    answers: [

        "Lo lắng, căng thẳng hoặc bất an.",

        "Áp lực, dễ mệt, dễ cáu và khó thư giãn.",

        "Không thấy vui, đôi khi cảm thấy chán hoặc trống rỗng; vẫn hoàn thành mọi việc nhưng không thật sự thấy có ý nghĩa.",

        "Ổn định và cân bằng; dù có áp lực nhưng vẫn thấy bình tĩnh và làm chủ nhịp sống của mình.",

        "Hứng khởi, tràn đầy năng lượng và chủ động tiến về những điều mình muốn xây dựng."

    ]

},

{
    id: 14,

    category: "Năng lượng cảm xúc",

    question: "Buổi tối trước khi ngủ, đầu bạn thường:",

    helper: "",

    answers: [

        "Không ngừng suy nghĩ, rất khó tắt não.",

        "Lo cho ngày mai.",

        "Nghĩ linh tinh.",

        "Khá bình yên.",

        "Thư giãn, dễ ngủ."

    ]

},

/* =====================================================
   HIỆU SUẤT TƯ DUY
===================================================== */

{
    id: 15,

    category: "Hiệu suất tư duy",

    question: "Bạn đang làm việc quan trọng, điện thoại báo tin:",

    helper: "",

    answers: [

        "Xem ngay.",

        "Xem sau vài phút.",

        "Làm xong việc rồi mới xem.",

        "Tắt thông báo.",

        "Hầu như không bị ảnh hưởng."

    ]

},

{
    id: 16,

    category: "Hiệu suất tư duy",

    question: "Một vấn đề mới xuất hiện:",

    helper: "",

    answers: [

        "Hoảng.",

        "Trì hoãn.",

        "Google ngay để tìm câu trả lời.",

        "Bình tĩnh phân tích.",

        "Hứng thú tìm lời giải."

    ]

},

{
    id: 17,

    category: "Hiệu suất tư duy",

    question: "Một ngày bạn có bao nhiêu khoảng tập trung sâu trên 60 phút?",

    helper: "",

    answers: [

        "Không có.",

        "Một.",

        "Hai.",

        "Ba.",

        "Hơn ba."

    ]

},

{
    id: 18,

    category: "Hiệu suất tư duy",

    question: "Cuối ngày bạn thường:",

    helper: "",

    answers: [

        "Rất bận nhưng không biết mình đã tạo ra điều gì.",

        "Làm rất nhiều nhưng việc quan trọng vẫn còn.",

        "Hoàn thành phần lớn kế hoạch.",

        "Hoàn thành việc quan trọng nhưng kiệt sức.",

        "Hoàn thành việc quan trọng và vẫn còn nhiều năng lượng."

    ]

},

/* =====================================================
   MÔI TRƯỜNG
===================================================== */

{
    id: 19,

    category: "Môi trường",

    question: "Khi bạn muốn xây dựng một thói quen hoặc thay đổi tích cực, người xung quanh thường:",

    helper: "",

    answers: [

        "Cản trở.",

        "Không ủng hộ.",

        "Trung lập.",

        "Khuyến khích.",

        "Chủ động đồng hành."

    ]

},

{
    id: 20,

    category: "Môi trường",

    question: "Nếu gặp một vấn đề lớn lúc 2 giờ sáng, bạn có thể gọi cho bao nhiêu người?",

    helper: "",

    answers: [

        "Không có ai.",

        "Một người.",

        "2–3 người.",

        "Vài người.",

        "Rất nhiều người."

    ]

},
/* =====================================================
   MÔI TRƯỜNG
===================================================== */

{
    id: 21,

    category: "Môi trường",

    question: "Không gian làm việc khiến bạn:",

    helper: "",

    answers: [

        "Rất dễ mất tập trung.",

        "Khó tập trung.",

        "Tạm ổn.",

        "Khá hiệu quả.",

        "Muốn ngồi vào là làm."

    ]

},

{
    id: 22,

    category: "Môi trường",

    question: "Nhìn lại 12 tháng qua, môi trường sống/làm việc:",

    helper: "",

    answers: [

        "Kéo mình xuống.",

        "Làm mình mệt.",

        "Không thay đổi nhiều.",

        "Giúp mình phát triển.",

        "Giúp mình thành phiên bản tốt hơn."

    ]

},

/* =====================================================
   TÀI CHÍNH
===================================================== */

{
    id: 23,

    category: "Tài chính",

    question: "Nếu thu nhập giữ nguyên trong 3 năm tới:",

    helper: "",

    answers: [

        "Rất lo.",

        "Thất vọng.",

        "Chấp nhận được.",

        "Khá hài lòng.",

        "Hoàn toàn hài lòng."

    ]

},

{
    id: 24,

    category: "Tài chính",

    question: "Điều mô tả đúng nhất tình hình tài chính hiện tại của bạn là:",

    helper: "",

    answers: [

        "Luôn căng thẳng vì tiền.",

        "Đủ sống.",

        "Có tích lũy nhỏ.",

        "Nền tảng khá ổn.",

        "Tiền không còn là mối bận tâm."

    ]

},

/* =====================================================
   MỐI QUAN HỆ
===================================================== */

{
    id: 25,

    category: "Mối quan hệ",

    question: "Mức độ hài lòng của bạn với các mối quan hệ quan trọng là:",

    helper: "",

    answers: [

        "Rất không hài lòng.",

        "Chưa hài lòng.",

        "Bình thường.",

        "Khá hài lòng.",

        "Rất hài lòng."

    ]

},

{
    id: 26,

    category: "Mối quan hệ",

    question: "Sau khi gặp những người thân thiết, bạn thường cảm thấy:",

    helper: "",

    answers: [

        "Kiệt sức.",

        "Mệt.",

        "Không khác biệt.",

        "Được tiếp thêm năng lượng.",

        "Tràn đầy năng lượng."

    ]

},

{
    id: 27,

    category: "Mối quan hệ",

    question: "Nếu gặp một biến cố lớn trong cuộc sống, bạn sẽ có:",

    helper: "",

    answers: [

        "Chỉ có thể tự xoay xở.",

        "Một người sẵn sàng giúp đỡ.",

        "Vài người sẵn sàng giúp đỡ.",

        "Một mạng lưới hỗ trợ tốt.",

        "Rất nhiều người luôn đồng hành."

    ]

},

/* =====================================================
   SỨC KHỎE & CUỘC SỐNG
===================================================== */

{
    id: 28,

    category: "Sức khỏe & Cuộc sống",

    question: "Bạn hài lòng với sức khỏe hiện tại của mình ở mức nào?",

    helper: "",

    answers: [

        "Rất không hài lòng.",

        "Không hài lòng.",

        "Tạm ổn.",

        "Khá hài lòng.",

        "Rất hài lòng."

    ]

},

{
    id: 29,

    category: "Sức khỏe & Cuộc sống",

    question: "Nếu duy trì lối sống hiện tại thêm 5 năm, bạn nghĩ sức khỏe của mình sẽ:",

    helper: "",

    answers: [

        "Tệ hơn rất nhiều.",

        "Xấu hơn.",

        "Không thay đổi.",

        "Khỏe hơn một chút.",

        "Khỏe hơn rất nhiều."

    ]

},

{
    id: 30,

    category: "Sức khỏe & Cuộc sống",

    question: "Nếu nhìn lại cuộc sống hiện tại, bạn cảm thấy:",

    helper: "",

    answers: [

        "Đây không phải cuộc sống mình mong muốn.",

        "Mình vẫn đang loay hoay tìm hướng đi.",

        "Có nhiều điều ổn nhưng vẫn còn thiếu một điều gì đó.",

        "Mình đang đi đúng hướng.",

        "Mình thật sự yêu cuộc sống mình đang xây dựng."

    ]

}

];
