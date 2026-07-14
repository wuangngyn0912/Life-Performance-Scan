/* ==========================================================
   PERFORMANCE LEVELS
========================================================== */

const PERFORMANCE_LEVELS = [

{
    min:85,
    max:100,

    title:"🌟 THRIVING",

    color:"#22c55e",

    description:
    "Bạn đang xây dựng một cuộc sống có định hướng rõ ràng, giàu năng lượng và cân bằng. Hãy tiếp tục duy trì các thói quen tốt và không ngừng phát triển."

},

{
    min:70,
    max:84,

    title:"🚀 PERFORMING",

    color:"#3b82f6",

    description:
    "Bạn đang có nền tảng khá tốt. Chỉ cần cải thiện một vài lĩnh vực còn yếu để tạo ra bước tiến lớn hơn."

},

{
    min:55,
    max:69,

    title:"📈 EMERGING",

    color:"#f59e0b",

    description:
    "Bạn đang trên con đường phát triển nhưng vẫn còn nhiều cơ hội để tối ưu cuộc sống và hiệu suất."

},

{
    min:40,
    max:54,

    title:"⚠️ DRAINING",

    color:"#f97316",

    description:
    "Một số lĩnh vực quan trọng đang tiêu hao năng lượng của bạn. Đây là thời điểm thích hợp để thay đổi."

},

{
    min:0,
    max:39,

    title:"🔴 SURVIVAL",

    color:"#ef4444",

    description:
    "Bạn đang ở trạng thái sinh tồn nhiều hơn là phát triển. Hãy bắt đầu bằng những thay đổi nhỏ nhưng đều đặn."

}

];

/* ==========================================================
   CATEGORY INFORMATION
========================================================== */

const CATEGORY_INFORMATION = {

    "Mục tiêu":{

        icon:"🎯",

        description:"Mức độ rõ ràng về định hướng, mục tiêu và ý nghĩa cuộc sống."

    },

    "Năng lượng thể chất":{

        icon:"💪",

        description:"Sức khỏe, thể lực và mức năng lượng mỗi ngày."

    },

    "Năng lượng cảm xúc":{

        icon:"❤️",

        description:"Khả năng kiểm soát cảm xúc và phục hồi sau áp lực."

    },

    "Hiệu suất tư duy":{

        icon:"🧠",

        description:"Khả năng tập trung, tư duy và giải quyết vấn đề."

    },

    "Môi trường":{

        icon:"🌱",

        description:"Những người và không gian xung quanh có hỗ trợ sự phát triển của bạn hay không."

    },

    "Tài chính":{

        icon:"💰",

        description:"Mức độ ổn định và tự do tài chính."

    },

    "Mối quan hệ":{

        icon:"🤝",

        description:"Chất lượng các mối quan hệ quan trọng."

    },

    "Sức khỏe & Cuộc sống":{

        icon:"🌍",

        description:"Mức độ hài lòng với sức khỏe và cuộc sống hiện tại."

    }

};
/* ==========================================================
   RECOMMENDATIONS
========================================================== */

const RECOMMENDATIONS = {

    "Mục tiêu":{

        excellent:{
            title:"Bạn có định hướng rất rõ ràng.",
            strengths:[
                "Biết điều gì quan trọng nhất.",
                "Có mục tiêu dài hạn rõ ràng.",
                "Ít bị phân tâm bởi những việc không cần thiết."
            ],
            recommendations:[
                "Tiếp tục đặt mục tiêu lớn hơn.",
                "Đánh giá lại mục tiêu mỗi quý.",
                "Chia sẻ tầm nhìn của bạn để truyền cảm hứng cho người khác."
            ]
        },

        good:{
            title:"Bạn có định hướng khá tốt.",
            strengths:[
                "Biết ưu tiên.",
                "Có mục tiêu tương đối rõ."
            ],
            recommendations:[
                "Viết mục tiêu 3 năm và 10 năm.",
                "Dành nhiều thời gian hơn cho việc quan trọng."
            ]
        },

        average:{
            title:"Bạn vẫn còn thiếu sự rõ ràng.",
            strengths:[
                "Đã bắt đầu suy nghĩ về tương lai."
            ],
            recommendations:[
                "Viết ra điều bạn thật sự mong muốn.",
                "Xác định 3 giá trị quan trọng nhất.",
                "Đặt mục tiêu cho 90 ngày tới."
            ]
        },

        low:{
            title:"Bạn đang thiếu định hướng rõ ràng.",
            strengths:[],
            recommendations:[
                "Viết lại mục tiêu cuộc sống.",
                "Giảm thời gian lướt mạng xã hội.",
                "Dành 15 phút mỗi ngày để suy nghĩ về tương lai."
            ]
        }

    },

    "Năng lượng thể chất":{

        excellent:{
            title:"Bạn có nền tảng thể chất rất tốt.",
            strengths:[
                "Nguồn năng lượng ổn định.",
                "Khả năng phục hồi tốt.",
                "Thể lực tốt."
            ],
            recommendations:[
                "Tiếp tục duy trì tập luyện.",
                "Ngủ đủ 7–8 giờ.",
                "Theo dõi sức khỏe định kỳ."
            ]
        },

        good:{
            title:"Thể chất của bạn khá tốt.",
            strengths:[
                "Có đủ năng lượng cho công việc."
            ],
            recommendations:[
                "Tăng vận động.",
                "Ăn nhiều rau và protein.",
                "Hạn chế thức khuya."
            ]
        },

        average:{
            title:"Thể chất ở mức trung bình.",
            strengths:[],
            recommendations:[
                "Đi bộ 30 phút mỗi ngày.",
                "Uống đủ nước.",
                "Ngủ đúng giờ."
            ]
        },

        low:{
            title:"Cơ thể đang phát tín hiệu cần được chăm sóc.",
            strengths:[],
            recommendations:[
                "Ưu tiên giấc ngủ.",
                "Khám sức khỏe nếu cần.",
                "Bắt đầu tập luyện nhẹ nhàng."
            ]
        }

    },

    "Năng lượng cảm xúc":{

        excellent:{
            title:"Bạn kiểm soát cảm xúc rất tốt.",
            strengths:[
                "Bình tĩnh trước áp lực.",
                "Phục hồi nhanh sau thất bại."
            ],
            recommendations:[
                "Tiếp tục duy trì thói quen biết ơn.",
                "Thiền hoặc viết nhật ký."
            ]
        },

        good:{
            title:"Bạn khá cân bằng về cảm xúc.",
            strengths:[
                "Ít bị cảm xúc tiêu cực chi phối."
            ],
            recommendations:[
                "Dành thời gian nghỉ ngơi hợp lý.",
                "Học thêm kỹ năng quản lý cảm xúc."
            ]
        },

        average:{
            title:"Cảm xúc của bạn chưa thật sự ổn định.",
            strengths:[],
            recommendations:[
                "Ngủ đủ.",
                "Giảm căng thẳng.",
                "Viết nhật ký cảm xúc."
            ]
        },

        low:{
            title:"Cảm xúc đang tiêu hao nhiều năng lượng.",
            strengths:[],
            recommendations:[
                "Nghỉ ngơi nhiều hơn.",
                "Chia sẻ với người tin tưởng.",
                "Nếu kéo dài, hãy tìm chuyên gia hỗ trợ."
            ]
        }

    },

    "Hiệu suất tư duy":{

        excellent:{
            title:"Bạn có khả năng tập trung rất cao.",
            strengths:[
                "Tư duy rõ ràng.",
                "Giải quyết vấn đề tốt."
            ],
            recommendations:[
                "Tiếp tục làm việc Deep Work.",
                "Giảm tối đa thông báo điện thoại."
            ]
        },

        good:{
            title:"Bạn làm việc khá hiệu quả.",
            strengths:[
                "Biết ưu tiên công việc."
            ],
            recommendations:[
                "Tăng thời gian tập trung sâu.",
                "Lập kế hoạch mỗi sáng."
            ]
        },

        average:{
            title:"Bạn có thể cải thiện hiệu suất đáng kể.",
            strengths:[],
            recommendations:[
                "Áp dụng Pomodoro.",
                "Làm việc theo từng khung giờ."
            ]
        },

        low:{
            title:"Bạn đang bị phân tán quá nhiều.",
            strengths:[],
            recommendations:[
                "Tắt thông báo.",
                "Giới hạn mạng xã hội.",
                "Mỗi ngày chỉ tập trung vào 3 việc quan trọng nhất."
            ]
        }

    },
        "Môi trường": {

        excellent: {
            title: "Môi trường của bạn đang thúc đẩy sự phát triển.",
            strengths: [
                "Được những người xung quanh ủng hộ.",
                "Có không gian học tập/làm việc hiệu quả.",
                "Môi trường giúp bạn tiến bộ mỗi ngày."
            ],
            recommendations: [
                "Tiếp tục duy trì các mối quan hệ tích cực.",
                "Chủ động kết nối với những người giỏi hơn.",
                "Trở thành nguồn cảm hứng cho người khác."
            ]
        },

        good: {
            title: "Môi trường hiện tại khá tích cực.",
            strengths: [
                "Có sự hỗ trợ khi cần.",
                "Không gian làm việc tương đối tốt."
            ],
            recommendations: [
                "Tối ưu góc học tập hoặc làm việc.",
                "Dành nhiều thời gian hơn với những người tích cực."
            ]
        },

        average: {
            title: "Môi trường của bạn ở mức trung bình.",
            strengths: [],
            recommendations: [
                "Loại bỏ những yếu tố gây xao nhãng.",
                "Tham gia các cộng đồng học tập hoặc phát triển bản thân.",
                "Sắp xếp lại không gian làm việc."
            ]
        },

        low: {
            title: "Môi trường đang cản trở sự phát triển của bạn.",
            strengths: [],
            recommendations: [
                "Hạn chế tiếp xúc với những ảnh hưởng tiêu cực.",
                "Xây dựng một môi trường học tập và làm việc tốt hơn.",
                "Tìm kiếm những người có cùng mục tiêu để đồng hành."
            ]
        }

    },

    "Tài chính": {

        excellent: {
            title: "Bạn có nền tảng tài chính rất tốt.",
            strengths: [
                "Ít áp lực về tiền bạc.",
                "Có khả năng lập kế hoạch tài chính.",
                "Tài chính hỗ trợ mục tiêu dài hạn."
            ],
            recommendations: [
                "Tiếp tục đầu tư cho bản thân.",
                "Đa dạng hóa nguồn thu nhập.",
                "Lập kế hoạch tài chính dài hạn."
            ]
        },

        good: {
            title: "Tình hình tài chính của bạn khá ổn định.",
            strengths: [
                "Có khả năng kiểm soát chi tiêu."
            ],
            recommendations: [
                "Tăng tỷ lệ tiết kiệm.",
                "Học thêm về đầu tư và quản lý tài chính."
            ]
        },

        average: {
            title: "Tài chính ở mức chấp nhận được.",
            strengths: [],
            recommendations: [
                "Theo dõi thu nhập và chi tiêu hằng tháng.",
                "Xây dựng quỹ dự phòng.",
                "Nâng cao kỹ năng để tăng thu nhập."
            ]
        },

        low: {
            title: "Tài chính đang là một áp lực đáng kể.",
            strengths: [],
            recommendations: [
                "Lập ngân sách chi tiêu rõ ràng.",
                "Giảm các khoản chi không cần thiết.",
                "Tìm thêm nguồn thu nhập phù hợp."
            ]
        }

    },

    "Mối quan hệ": {

        excellent: {
            title: "Bạn có những mối quan hệ chất lượng.",
            strengths: [
                "Được nhiều người tin tưởng.",
                "Có mạng lưới hỗ trợ mạnh mẽ.",
                "Các mối quan hệ mang lại năng lượng tích cực."
            ],
            recommendations: [
                "Tiếp tục dành thời gian cho những người quan trọng.",
                "Biết ơn và duy trì các mối quan hệ tốt đẹp.",
                "Hỗ trợ người khác khi có thể."
            ]
        },

        good: {
            title: "Bạn có nền tảng các mối quan hệ khá tốt.",
            strengths: [
                "Có người sẵn sàng hỗ trợ khi cần."
            ],
            recommendations: [
                "Chủ động giữ liên lạc với những người quan trọng.",
                "Dành thời gian chất lượng cho gia đình và bạn bè."
            ]
        },

        average: {
            title: "Các mối quan hệ của bạn còn có thể cải thiện.",
            strengths: [],
            recommendations: [
                "Lắng nghe nhiều hơn.",
                "Chủ động kết nối với mọi người.",
                "Giải quyết các xung đột một cách tích cực."
            ]
        },

        low: {
            title: "Bạn đang thiếu sự kết nối với những người xung quanh.",
            strengths: [],
            recommendations: [
                "Chủ động xây dựng các mối quan hệ tích cực.",
                "Đừng ngại tìm kiếm sự giúp đỡ khi cần.",
                "Dành nhiều thời gian hơn cho gia đình và bạn bè."
            ]
        }

    },

    "Sức khỏe & Cuộc sống": {

        excellent: {
            title: "Bạn đang xây dựng một cuộc sống cân bằng và khỏe mạnh.",
            strengths: [
                "Hài lòng với cuộc sống hiện tại.",
                "Có lối sống lành mạnh.",
                "Đang phát triển theo hướng tích cực."
            ],
            recommendations: [
                "Tiếp tục duy trì các thói quen tốt.",
                "Đặt ra những mục tiêu lớn hơn.",
                "Giữ cân bằng giữa công việc và cuộc sống."
            ]
        },

        good: {
            title: "Bạn đang đi đúng hướng.",
            strengths: [
                "Có nền tảng sức khỏe và cuộc sống khá tốt."
            ],
            recommendations: [
                "Duy trì các thói quen tích cực.",
                "Quan tâm hơn đến sức khỏe tinh thần."
            ]
        },

        average: {
            title: "Bạn còn nhiều cơ hội để cải thiện chất lượng cuộc sống.",
            strengths: [],
            recommendations: [
                "Chăm sóc sức khỏe đều đặn.",
                "Dành thời gian cho bản thân.",
                "Xây dựng thêm những thói quen tốt."
            ]
        },

        low: {
            title: "Đây là thời điểm bạn nên ưu tiên sức khỏe và cuộc sống của mình.",
            strengths: [],
            recommendations: [
                "Ngủ đủ giấc và ăn uống lành mạnh.",
                "Tập thể dục đều đặn.",
                "Bắt đầu thay đổi từ những thói quen nhỏ mỗi ngày."
            ]
        }

    }

};
