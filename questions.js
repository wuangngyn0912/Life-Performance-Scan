const QUESTIONS = [

/* =====================================================
   MỤC TIÊU
===================================================== */

{
    id: 1,

    category: "Mục tiêu",

    question: "Khi bắt đầu một ngày mới, việc đầu tiên bạn thường làm là gì?",

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

    question: "Khi gặp khó khăn, áp lực hoặc một kế hoạch quan trọng không đi như mong muốn, phản ứng thường gặp của bạn là gì?",

    helper: "Hãy chọn đáp án phản ánh đúng bản thân bạn trong phần lớn thời gian.",

    answers: [

        "Dễ mất động lực, tự nghi ngờ bản thân hoặc muốn buông.",

        "Vẫn tiếp tục, nhưng chủ yếu vì trách nhiệm, áp lực hoặc vì không còn lựa chọn khác.",

        "Cần một khoảng thời gian để ổn định lại, sau đó cố gắng quay lại với việc cần làm.",

        "Bình tĩnh nhìn lại vấn đề, điều chỉnh cách làm và tiếp tục theo đuổi mục tiêu.",

        "Rút ra bài học, điều chỉnh hệ thống hành động và dùng thất bại đó để làm rõ hơn con đường mình đang xây dựng."

    ]

},

{
    id: 4,

    category: "Mục tiêu",

    question: "Trong 30 ngày gần đây, bạn có cảm giác \"Tôi biết rõ điều quan trọng nhất mình cần tập trung\" thường xuyên đến mức nào?",

    helper: "Đánh giá dựa trên 30 ngày gần đây.",

    answers: [

        "Gần như không có. Tôi thường bị cuốn theo việc phát sinh.",

        "Thỉnh thoảng có, nhưng biết là một chuyện, làm được lại là chuyện khác.",

        "Khoảng một nửa thời gian. Có ngày rõ, có ngày khá loay hoay.",

        "Phần lớn thời gian. Tôi thường biết việc nào cần ưu tiên trước.",

        "Gần như mỗi ngày. Ưu tiên ngày, tuần và mục tiêu dài hạn của tôi khá ăn khớp với nhau."

    ]

},

/* =====================================================
   NĂNG LƯỢNG THỂ CHẤT
===================================================== */

{
    id: 5,

    category: "Năng lượng thể chất",

    question: "Khoảng 3 giờ chiều, trạng thái năng lượng thường gặp của bạn là gì?",

    helper: "Đánh giá mức năng lượng tự nhiên của bạn.",

    answers: [

        "Tụt năng lượng rõ rệt, rất buồn ngủ hoặc gần như chỉ muốn nằm nghỉ.",

        "Lờ đờ, dễ đói, thèm đồ ngọt/cà phê/trà sữa hoặc cần nạp gì đó mới kéo tiếp được.",

        "Năng lượng giảm nhưng vẫn xử lý được các việc quen thuộc, ít đòi hỏi tập trung sâu.",

        "Năng lượng tương đối ổn, vẫn làm việc được mà không cần dựa nhiều vào đồ uống kích thích hay ăn vặt.",

        "Năng lượng ổn định, đầu óc còn đủ tỉnh để xử lý một việc quan trọng hoặc một phiên tập trung sâu."

    ]

},

{
    id: 6,

    category: "Năng lượng thể chất",

    question: "Sau một ngày làm việc bình thường, buổi tối bạn thường ở trạng thái nào?",

    helper: "",

    answers: [

        "Kiệt sức, gần như không còn sức cho việc cá nhân.",

        "Chỉ muốn nằm, lướt điện thoại hoặc nghỉ thụ động.",

        "Vẫn làm được vài việc nhà/cá nhân cơ bản nhưng không còn nhiều hứng thú.",

        "Còn đủ sức để hiện diện với gia đình, vận động nhẹ hoặc làm điều mình thích.",

        "Năng lượng còn tương đối ổn, có thể tận hưởng buổi tối mà không cảm thấy đang \"gồng\"."

    ]

},

{
    id: 7,

    category: "Năng lượng thể chất",

    question: "Khi thức dậy buổi sáng, cơ thể bạn thường phản ứng thế nào?",

    helper: "",

    answers: [

        "Mệt rõ rệt, cảm giác như chưa được phục hồi.",

        "Cần ngủ thêm hoặc mất khá lâu mới tỉnh.",

        "Bình thường, sau một lúc hoặc sau cà phê mới bắt nhịp được.",

        "Khá tỉnh táo sau một thời gian chuyển tiếp ngắn.",

        "Cơ thể sẵn sàng bắt đầu ngày mới trong vòng 15–30 phút đầu."

    ]

},

{
    id: 8,

    category: "Năng lượng thể chất",

    question: "Trong 30 ngày gần đây, bạn lắng nghe tín hiệu cơ thể của mình như thế nào?",

    helper: "",

    answers: [

        "Tôi thường bỏ qua các dấu hiệu mệt, đau, căng hoặc xuống sức.",

        "Tôi nhận ra cơ thể đang không ổn nhưng thường trì hoãn việc chăm sóc.",

        "Tôi có ngày chăm sóc tốt, có ngày buông khá nhiều.",

        "Tôi biết vài thói quen giúp mình khỏe hơn và duy trì được phần lớn thời gian.",

        "Tôi chủ động quản trị giấc ngủ, vận động, dinh dưỡng và phục hồi như một phần của hiệu suất sống."

    ]

},

{
    id: 9,

    category: "Năng lượng thể chất",

    question: "Khi phải leo liên tục 4 tầng cầu thang hoặc vận động gắng sức vừa phải, bạn thường thấy thế nào?",

    helper: "",

    answers: [

        "Tôi thường né những hoạt động như vậy vì biết mình sẽ rất mệt.",

        "Tôi làm được nhưng thở gấp, mệt rõ và hồi phục chậm.",

        "Tôi làm được, cần vài phút để cơ thể trở lại bình thường.",

        "Tôi hơi tăng nhịp thở nhưng hồi phục khá nhanh.",

        "Cơ thể phản ứng tốt, hồi phục nhanh và cho tôi cảm giác mình có nền thể lực ổn."

    ]

},

{
    id: 10,

    category: "Năng lượng thể chất",

    question: "Khi vô tình nhìn thấy mình trong gương, phản ứng thường gặp của bạn là gì?",

    helper: "Hãy chọn cảm nhận đầu tiên xuất hiện.",

    answers: [

        "Tôi thường né tránh nhìn kỹ hoặc không muốn đối diện với tình trạng cơ thể hiện tại.",

        "Tôi dễ chú ý vào những điểm chưa hài lòng và cảm thấy mất tự tin hoặc nản.",

        "Tôi thấy bình thường, chưa quá hài lòng nhưng cũng chưa có động lực rõ để thay đổi.",

        "Tôi ghi nhận được một số điểm tích cực và biết mình cần cải thiện điều gì để khỏe, đẹp và tự tin hơn.",

        "Tôi có cảm giác kết nối và tôn trọng cơ thể mình; việc chăm sóc cơ thể là một phần tự nhiên trong cách tôi giữ năng lượng và chất lượng sống."

    ]

},
/* =====================================================
   NĂNG LƯỢNG CẢM XÚC
===================================================== */

{
    id: 11,

    category: "Năng lượng cảm xúc",

    question: "Khi nhận một lời góp ý khá thẳng, phản ứng thường gặp của bạn là gì?",

    helper: "Hãy chọn phản ứng xảy ra thường xuyên nhất.",

    answers: [

        "Nghĩ về nó rất lâu và dễ tự trách bản thân.",

        "Khó chịu, phòng thủ hoặc mất tinh thần trong một khoảng thời gian.",

        "Vẫn lắng nghe được, nhưng cảm xúc bị ảnh hưởng khá rõ.",

        "Tách được phần hữu ích khỏi cách người khác nói và biết mình cần điều chỉnh gì.",

        "Chủ động hỏi thêm để hiểu đúng, rút ra bài học và vẫn giữ được sự tôn trọng với bản thân."

    ]

},

{
    id: 12,

    category: "Năng lượng cảm xúc",

    question: "Khi một kế hoạch quan trọng thất bại, bạn thường mất bao lâu để lấy lại tinh thần?",

    helper: "",

    answers: [

        "Hơn một tuần, đôi khi còn kéo dài lâu hơn.",

        "Vài ngày, và sự tự tin của tôi bị ảnh hưởng đáng kể.",

        "Khoảng một ngày để ổn định lại cảm xúc.",

        "Vài giờ, sau đó tôi có thể nghĩ đến bước tiếp theo.",

        "Tôi cho phép mình xử lý cảm xúc, rút kinh nghiệm và điều chỉnh hướng đi khá nhanh."

    ]

},

{
    id: 13,

    category: "Năng lượng cảm xúc",

    question: "Trong 30 ngày gần đây, trạng thái cảm xúc xuất hiện nhiều nhất ở bạn là gì?",

    helper: "",

    answers: [

        "Lo lắng, căng thẳng hoặc bất an.",

        "Áp lực, dễ mệt, dễ cáu và khó thật sự thư giãn.",

        "Không thấy vui, đôi khi chán hoặc trống rỗng; vẫn hoàn thành mọi việc cho xong nghĩa vụ nhưng không thấy nhiều ý nghĩa.",

        "Tương đối ổn định; không phải lúc nào cũng hứng khởi nhưng nhìn chung vẫn bình tĩnh, có kết nối và làm chủ nhịp sống.",

        "Có cảm giác sống động, rõ hướng và có động lực; đồng thời vẫn có khả năng nghỉ ngơi mà không thấy tội lỗi."

    ]

},

{
    id: 14,

    category: "Năng lượng cảm xúc",

    question: "Buổi tối trước khi ngủ, đầu óc bạn thường ở trạng thái nào?",

    helper: "",

    answers: [

        "Không ngừng suy nghĩ, rất khó \"tắt não\".",

        "Lo cho ngày mai hoặc tua lại những chuyện đã xảy ra.",

        "Nghĩ linh tinh, lướt điện thoại hoặc để bản thân mệt tự ngủ.",

        "Có thể thư giãn nếu có đủ thời gian chuyển tiếp.",

        "Có nhịp wind-down khá ổn định, giúp tâm trí và cơ thể biết đã đến lúc nghỉ."

    ]

},

/* =====================================================
   HIỆU SUẤT TƯ DUY
===================================================== */

{
    id: 15,

    category: "Hiệu suất tư duy",

    question: "Khi đang làm một việc quan trọng mà điện thoại báo tin nhắn, bạn thường làm gì?",

    helper: "",

    answers: [

        "Xem ngay gần như theo phản xạ.",

        "Cố nhịn nhưng thường kiểm tra sau vài phút.",

        "Làm nốt một đoạn rồi xem, nhưng sự tập trung đã bị ảnh hưởng.",

        "Tắt hoặc để xa thông báo trong các phiên cần tập trung.",

        "Có hệ thống làm việc sâu: chặn xao nhãng, xử lý tin nhắn theo khung giờ và bảo vệ năng lượng nhận thức."

    ]

},

{
    id: 16,

    category: "Hiệu suất tư duy",

    question: "Khi một vấn đề mới, phức tạp xuất hiện, phản ứng đầu tiên của bạn thường là gì?",

    helper: "",

    answers: [

        "Hoảng hoặc thấy quá tải.",

        "Trì hoãn vì chưa biết bắt đầu từ đâu.",

        "Tìm thông tin, hỏi người khác hoặc Google trước khi thật sự định nghĩa vấn đề.",

        "Bình tĩnh xác định vấn đề, dữ kiện cần có và bước xử lý tiếp theo.",

        "Làm rõ ràng buộc, tạo vài phương án, thử nhanh và điều chỉnh dựa trên dữ liệu thực tế."

    ]

},

{
    id: 17,

    category: "Hiệu suất tư duy",

    question: "Trong một tuần làm việc bình thường, bạn có bao nhiêu phiên tập trung sâu trên 60 phút?",

    helper: "",

    answers: [

        "Gần như không có.",

        "Có nhưng hiếm, thường là tình cờ khi không bị ai làm phiền.",

        "Có khoảng 1–2 phiên nếu tuần đó thuận lợi.",

        "Có vài phiên được chủ động sắp xếp cho việc quan trọng.",

        "Tôi bảo vệ đều đặn các phiên tập trung sâu cho những việc có giá trị cao nhất."

    ]

},

{
    id: 18,

    category: "Hiệu suất tư duy",

    question: "Cuối ngày làm việc, cảm giác thường gặp của bạn là gì?",

    helper: "",

    answers: [

        "Rất bận nhưng không rõ mình đã tạo ra kết quả gì đáng kể.",

        "Làm nhiều việc, nhưng việc quan trọng nhất vẫn còn dang dở.",

        "Hoàn thành khá nhiều việc trong kế hoạch nhưng năng lượng giảm rõ.",

        "Hoàn thành được 1–3 việc quan trọng và vẫn còn năng lượng ở mức chấp nhận được.",

        "Tạo ra kết quả có ý nghĩa, biết rõ bước tiếp theo và kết thúc ngày mà không bị cạn kiệt."

    ]

},

/* =====================================================
   MÔI TRƯỜNG
===================================================== */

{
    id: 19,

    category: "Môi trường",

    question: "Khi bạn muốn xây dựng một thói quen tốt hoặc thay đổi tích cực, môi trường xung quanh thường tác động thế nào?",

    helper: "",

    answers: [

        "Thường kéo tôi ngược lại hoặc khiến việc thay đổi khó hơn.",

        "Không phản đối trực tiếp nhưng cũng không hỗ trợ.",

        "Trung lập, tôi phải tự dựa vào ý chí là chính.",

        "Có một số người hoặc điều kiện giúp tôi duy trì thay đổi.",

        "Tôi có môi trường, người đồng hành hoặc cơ chế nhắc nhở khiến hành vi tốt trở nên dễ thực hiện hơn."

    ]

},

{
    id: 20,

    category: "Môi trường",

    question: "Nếu gặp một vấn đề lớn vào lúc rất khó khăn, ví dụ giữa đêm hoặc khi tinh thần xuống thấp, bạn có ai để tìm đến không?",

    helper: "",

    answers: [

        "Gần như không có ai.",

        "Có một người, nhưng tôi thường ngại làm phiền hoặc không chắc họ giúp được.",

        "Có 1–2 người có thể lắng nghe, nhưng hỗ trợ còn khá giới hạn.",

        "Có vài người đáng tin cho hỗ trợ cảm xúc hoặc thực tế.",

        "Tôi có mạng lưới hỗ trợ rõ ràng và biết nên tìm ai cho từng loại vấn đề."

    ]

},
/* =====================================================
   MÔI TRƯỜNG
===================================================== */

{
    id: 21,

    category: "Môi trường",

    question: "Không gian làm việc/sống hiện tại ảnh hưởng đến khả năng tập trung và phục hồi của bạn như thế nào?",

    helper: "",

    answers: [

        "Rất nhiều thứ gây nhiễu, bừa bộn hoặc khiến tôi dễ mất tập trung và nhanh mệt.",

        "Tôi vẫn xoay xở được, nhưng không gian hiện tại thường làm tôi tốn thêm năng lượng để bắt đầu hoặc duy trì tập trung.",

        "Tạm ổn cho sinh hoạt/làm việc cơ bản, nhưng chưa thật sự hỗ trợ tôi làm việc sâu hoặc nghỉ ngơi chất lượng.",

        "Khá gọn gàng, ít nhiễu và có một số khu vực/thói quen giúp tôi dễ tập trung hơn.",

        "Được sắp xếp có chủ đích: nơi làm việc, nghỉ ngơi và sinh hoạt tương đối rõ ràng, giúp tôi dễ vào việc, dễ hồi phục và ít bị kéo năng lượng."

    ]

},

{
    id: 22,

    category: "Môi trường",

    question: "Nhìn lại 12 tháng qua, môi trường vận hành của bạn — gồm lịch trình, văn hóa làm việc, kỳ vọng từ người xung quanh, mức độ nhiễu và hệ thống hỗ trợ — đang tác động đến bạn như thế nào?",

    helper: "",

    answers: [

        "Kéo tôi xuống rõ rệt; tôi thường bị cuốn vào nhịp sống/làm việc khiến mình mệt và mất phương hướng.",

        "Giúp tôi duy trì được trách nhiệm cơ bản, nhưng thường làm tôi hao năng lượng nhiều hơn mức cần thiết.",

        "Tốt xấu lẫn lộn; có lúc hỗ trợ tôi, có lúc lại khiến tôi bị phân tán hoặc quá tải.",

        "Có nhiều yếu tố hỗ trợ tôi phát triển hơn trước, dù vẫn còn một số điểm gây rò rỉ năng lượng.",

        "Tôi đã chủ động thiết kế lại lịch trình, ranh giới, cách làm việc hoặc các nguồn hỗ trợ để môi trường giúp mình vận hành tốt hơn."

    ]

},

/* =====================================================
   TÀI CHÍNH
===================================================== */

{
    id: 23,

    category: "Tài chính",

    question: "Nếu thu nhập của bạn giữ nguyên trong 3 năm tới, bạn cảm thấy thế nào?",

    helper: "",

    answers: [

        "Rất lo vì nền tảng hiện tại không đủ an toàn.",

        "Thất vọng hoặc mắc kẹt vì không thấy dư địa cho tương lai.",

        "Chấp nhận được, nhưng sẽ không có nhiều khoảng trống để đầu tư cho mục tiêu lớn hơn.",

        "Khá ổn, vẫn có thể duy trì cuộc sống và đầu tư cho một số mục tiêu quan trọng.",

        "Tài chính hiện tại đã có hệ thống đủ tốt để tạo sự chủ động, tích lũy và lựa chọn cho tương lai."

    ]

},

{
    id: 24,

    category: "Tài chính",

    question: "Điều nào mô tả đúng nhất cách bạn đang vận hành tài chính cá nhân?",

    helper: "",

    answers: [

        "Khá phản ứng, thường xuyên căng thẳng hoặc tránh nhìn vào con số thật.",

        "Đủ sống nhưng dễ bị động khi có phát sinh.",

        "Có theo dõi cơ bản nhưng chưa đều hoặc chưa có chiến lược rõ.",

        "Có ngân sách, tích lũy và một phần đầu tư/dự phòng tương đối ổn.",

        "Tài chính được thiết kế như một hệ thống hỗ trợ tự do, hiệu suất và lựa chọn sống dài hạn."

    ]

},

/* =====================================================
   MỐI QUAN HỆ
===================================================== */

{
    id: 25,

    category: "Mối quan hệ",

    question: "Các mối quan hệ quan trọng hiện tại đang tác động thế nào đến năng lượng của bạn?",

    helper: "",

    answers: [

        "Thường gây căng thẳng, tổn thương hoặc cảm giác cô đơn.",

        "Có kết nối nhưng tôi vẫn cảm thấy thiếu được hiểu, thiếu hỗ trợ hoặc phải gồng nhiều.",

        "Tạm ổn, chủ yếu mang tính chức năng hơn là thật sự nuôi dưỡng.",

        "Có một số mối quan hệ khiến tôi thấy được hỗ trợ, lắng nghe và có thêm năng lượng.",

        "Tôi có các mối quan hệ được nuôi dưỡng có chủ đích, có ranh giới lành mạnh và có sự phát triển hai chiều."

    ]

},

{
    id: 26,

    category: "Mối quan hệ",

    question: "Trong 1 tháng qua, sau khi tiếp xúc với những người bạn gặp hoặc nói chuyện thường xuyên nhất, bạn thường cảm thấy thế nào?",

    helper: "",

    answers: [

        "Kiệt sức, căng thẳng hoặc cần thời gian hồi phục sau khi tương tác.",

        "Vừa có kết nối vừa thấy mệt, vì phải nghe nhiều, chiều nhiều hoặc giữ nhiều cảm xúc.",

        "Không khác biệt nhiều; các tương tác chủ yếu mang tính trách nhiệm hoặc xã giao.",

        "Thường thấy nhẹ hơn, được lắng nghe hoặc có thêm năng lượng để tiếp tục ngày của mình.",

        "Cảm thấy được nuôi dưỡng, rõ ràng và vững hơn; các mối quan hệ thường xuyên giúp tôi sống và làm việc tốt hơn."

    ]

},

{
    id: 27,

    category: "Mối quan hệ",

    question: "Trong các mối quan hệ thường xuyên, bạn đang giữ ranh giới cá nhân như thế nào?",

    helper: "",

    answers: [

        "Tôi thường ôm nhiều việc/cảm xúc của người khác và dễ kiệt sức vì không biết dừng ở đâu.",

        "Tôi hay nhận lời, chiều lòng hoặc tránh làm người khác thất vọng, dù sau đó thấy mệt.",

        "Tôi có ý thức về ranh giới nhưng duy trì chưa đều; nhiều lúc vẫn bị kéo theo kỳ vọng của người khác.",

        "Tôi biết nói rõ nhu cầu, giới hạn và điều mình có thể/không thể làm trong phần lớn tình huống.",

        "Tôi có các ranh giới lành mạnh và cách tương tác rõ ràng, giúp các mối quan hệ quan trọng trở thành nguồn hỗ trợ thay vì nguồn rò rỉ năng lượng."

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

        "Tôi lo lắng hoặc né tránh nhìn thẳng vào tình trạng sức khỏe của mình.",

        "Tôi biết có vấn đề cần cải thiện nhưng chưa biết bắt đầu từ đâu hoặc chưa duy trì được.",

        "Tạm ổn, nhưng thói quen sức khỏe còn khá thất thường.",

        "Đang cải thiện, đã có một số thói quen nền tảng giúp tôi khỏe hơn.",

        "Tôi xem sức khỏe là nền tảng hiệu suất và chủ động theo dõi, điều chỉnh trước khi cơ thể xuống cấp."

    ]

},

{
    id: 29,

    category: "Sức khỏe & Cuộc sống",

    question: "Nếu duy trì lối sống hiện tại thêm 5 năm, bạn nghĩ mình sẽ ra sao?",

    helper: "",

    answers: [

        "Có nguy cơ xuống sức rõ rệt hoặc kiệt quệ hơn hiện tại.",

        "Có thể tệ hơn, dù chưa đến mức báo động ngay.",

        "Có lẽ không thay đổi nhiều: vẫn vận hành được nhưng chưa thật sự khỏe và tốt hơn.",

        "Có thể khỏe hơn một chút vì tôi đã bắt đầu có vài thói quen tốt.",

        "Có khả năng khỏe hơn rõ rệt vì những thói quen hiện tại đang có tính tích lũy tích cực."

    ]

},

{
    id: 30,

    category: "Sức khỏe & Cuộc sống",

    question: "Nếu nhìn lại cuộc sống hiện tại, câu nào mô tả đúng nhất với bạn?",

    helper: "",

    answers: [

        "Đây không phải cuộc sống tôi mong muốn và tôi cảm thấy khá mắc kẹt.",

        "Tôi đang loay hoay, biết mình cần thay đổi nhưng chưa rõ bắt đầu từ đâu.",

        "Có nhiều thứ ổn, nhưng vẫn thiếu sự ăn khớp giữa công việc, năng lượng, sức khỏe và ý nghĩa sống.",

        "Tôi đang đi đúng hướng, dù vẫn còn nhiều điểm cần tối ưu.",

        "Tôi đang chủ động xây dựng một cuộc sống mà kết quả, năng lượng và chất lượng sống hỗ trợ lẫn nhau."

    ]

}

];
