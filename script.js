/* =====================================================
   GLOBAL VARIABLES
===================================================== */

let currentQuestionIndex = -1;

let userInformation = {};

let userAnswers = [];

let totalQuestions = QUESTIONS.length;

/* =====================================================
   DOM ELEMENTS
===================================================== */

const pages = document.querySelectorAll(".page");

const landingPage = document.getElementById("landingPage");
const basicInfoPage = document.getElementById("basicInfoPage");
const questionPage = document.getElementById("questionPage");
const loadingPage = document.getElementById("loadingPage");
const resultPage = document.getElementById("resultsPage");

const questionTitle = document.getElementById("questionTitle");
const questionHelper = document.getElementById("questionDescription");
const answerContainer = document.getElementById("answerContainer");

const questionCounter = document.getElementById("questionCounter");
const progressFill = document.getElementById("progressFill");
const progressText = document.getElementById("progressText");
const categoryLabel = document.querySelector(".categoryLabel");

const previousButton = document.getElementById("previousQuestion");
const nextButton = document.getElementById("nextQuestion");
const startButton = document.getElementById("startAssessment");

/* =====================================================
   INITIALIZE
===================================================== */

window.addEventListener("DOMContentLoaded", () => {

    bindEvents();

});

/* =====================================================
   EVENTS
===================================================== */

function bindEvents(){

    startButton.addEventListener("click", () => showPage(basicInfoPage));

    document.getElementById("beginAssessment").addEventListener("click", startAssessment);

    previousButton.addEventListener("click", previousQuestion);

    nextButton.addEventListener("click", nextQuestion);

    document.getElementById("restartAssessment").addEventListener("click", restartAssessment);

    document.getElementById("downloadReport").addEventListener("click", printResult);

}

/* =====================================================
   PAGE CONTROL
===================================================== */

function showPage(page){

    pages.forEach(p=>{

        p.classList.remove("active");

    });

    page.classList.add("active");

}

/* =====================================================
   START
===================================================== */

function startAssessment(){

    const name =
        document.getElementById("name").value.trim();

    const age =
        document.getElementById("age").value.trim();

    const gender =
        document.getElementById("gender").value;

    const lifeStage =
        document.getElementById("lifeStage").value;

    const height =
        document.getElementById("height").value.trim();

    const weight =
        document.getElementById("weight").value.trim();

    if(name===""){

        alert("Vui lòng nhập họ tên.");

        return;

    }

    if(age===""){

        alert("Vui lòng nhập tuổi.");

        return;

    }

    if(gender===""){

        alert("Vui lòng chọn giới tính.");

        return;

    }

    if(lifeStage===""){

        alert("Vui lòng chọn giai đoạn cuộc sống.");

        return;

    }

    if(height===""){

        alert("Vui lòng nhập chiều cao.");

        return;

    }

    if(weight===""){

        alert("Vui lòng nhập cân nặng.");

        return;

    }

    userInformation={

        name,
        age,
        gender,
        lifeStage,
        height,
        weight

    };

    currentQuestionIndex=0;

    userAnswers=new Array(totalQuestions);

    showPage(questionPage);

    renderQuestion();

}

/* =====================================================
   RENDER QUESTION
===================================================== */

function renderQuestion(){

    const question=
        QUESTIONS[currentQuestionIndex];

    categoryLabel.textContent=
        question.category;

    questionCounter.textContent=
        `Câu ${question.id}/${totalQuestions}`;

    progressText.textContent=
        `${Math.round((question.id/totalQuestions)*100)}%`;

    progressFill.style.width=
        `${(question.id/totalQuestions)*100}%`;

    questionTitle.textContent=
        question.question;

    questionHelper.textContent=
        question.helper;

    answerContainer.innerHTML="";

    question.answers.forEach((answer,index)=>{

        const card=document.createElement("div");

        card.className="answerCard";

        if(userAnswers[currentQuestionIndex]===index){

            card.classList.add("selected");

        }

        card.innerHTML=`

            <div class="answerCircle"></div>

            <div class="answerText">

                <strong>${String.fromCharCode(65+index)}.</strong>

                ${answer}

            </div>

        `;

        card.onclick=()=>{

            selectAnswer(index);

        };

        answerContainer.appendChild(card);

    });

    previousButton.disabled=
        currentQuestionIndex===0;

    nextButton.textContent=

        currentQuestionIndex===totalQuestions-1

        ? "Hoàn thành"

        : "Tiếp tục";

}

/* =====================================================
   SELECT ANSWER
===================================================== */

function selectAnswer(index){

    userAnswers[currentQuestionIndex]=index;

    renderQuestion();

}
/* =====================================================
   NEXT QUESTION
===================================================== */

function nextQuestion() {

    if (userAnswers[currentQuestionIndex] === undefined) {

        alert("Vui lòng chọn một đáp án trước khi tiếp tục.");

        return;

    }

    if (currentQuestionIndex < totalQuestions - 1) {

        currentQuestionIndex++;

        renderQuestion();

        return;

    }

    finishAssessment();

}

/* =====================================================
   PREVIOUS QUESTION
===================================================== */

function previousQuestion() {

    if (currentQuestionIndex === 0) return;

    currentQuestionIndex--;

    renderQuestion();

}

/* =====================================================
   FINISH
===================================================== */

function finishAssessment(){

    showPage(loadingPage);

    simulateLoading();

}

/* =====================================================
   LOADING ANIMATION
===================================================== */

function simulateLoading(){

    const steps=document.querySelectorAll(".loadingStep");

    let current=0;

    const timer=setInterval(()=>{

        if(current>0){

            steps[current-1].classList.remove("active");

        }

        if(current<steps.length){

            steps[current].classList.add("active");

            current++;

        }

        else{

            clearInterval(timer);

            calculateResults();

        }

    },700);

}

/* =====================================================
   CALCULATE SCORES
===================================================== */

function calculateResults(){

    const categoryScores={};

    const categoryMaximum={};

    let totalScore=0;

    QUESTIONS.forEach((question,index)=>{

        const score=userAnswers[index]+1;

        totalScore+=score;

        if(!categoryScores[question.category]){

            categoryScores[question.category]=0;

            categoryMaximum[question.category]=0;

        }

        categoryScores[question.category]+=score;

        categoryMaximum[question.category]+=5;

    });

    const maxScore=QUESTIONS.length*5;

    const percentage=Math.round(

        totalScore/maxScore*100

    );

    const categoryPercentages={};

    Object.keys(categoryScores).forEach(category=>{

        categoryPercentages[category]=Math.round(

            categoryScores[category]/

            categoryMaximum[category]*100

        );

    });

    displayResults(

        percentage,

        totalScore,

        categoryPercentages

    );

}

/* =====================================================
   PERFORMANCE LEVEL
===================================================== */

function getPerformanceLevel(score){

    return PERFORMANCE_LEVELS.find(level=>{

        return score>=level.min &&

               score<=level.max;

    });

}

/* =====================================================
   STRONGEST / WEAKEST
===================================================== */

function findBestCategories(categories){

    const entries=Object.entries(categories);

    const maxValue=Math.max(...entries.map(([,val])=>val));

    return entries

        .filter(([,val])=>val>=maxValue-5)

        .map(([key])=>key);

}

function findWorstCategories(categories){

    const entries=Object.entries(categories);

    const minValue=Math.min(...entries.map(([,val])=>val));

    return entries

        .filter(([,val])=>val<=minValue+5)

        .map(([key])=>key);

}

/* =====================================================
   RECOMMENDATION LEVEL
===================================================== */

function recommendationLevel(score){

    if(score>=85) return "excellent";

    if(score>=70) return "good";

    if(score>=55) return "average";

    return "low";

}

/* =====================================================
   DISPLAY RESULTS
===================================================== */

function displayResults(

    overall,

    totalScore,

    categoryScores

){

    showPage(resultPage);

    const performance=

        getPerformanceLevel(overall);

    document.getElementById(

        "performanceStage"

    ).textContent=

        performance.title;

    document.getElementById(

        "overallPoints"

    ).textContent=

        totalScore+" / 150";

    document.getElementById(

        "finalPercentage"

    ).textContent=

        overall+"%";

    document.getElementById("scoreInsightText").textContent=

        performance.description;

    document.getElementById("scoreInsightScore").textContent=

        overall+"%";

    document.getElementById("scoreInsightStage").textContent=

        performance.title.replace(/^[^\p{L}]+/u, "").trim();

    renderStageExplanation(performance);

    buildCategoryScores(categoryScores);

    buildRadarChart(categoryScores);

    buildInsights(categoryScores);

}

/* =====================================================
   RADAR CHART
===================================================== */

let radarChartInstance = null;

function buildRadarChart(scores){

    const ctx =
        document.getElementById("radarChart").getContext("2d");

    const labels = Object.keys(scores);
    const data = Object.values(scores);

    if(radarChartInstance){

        radarChartInstance.destroy();

    }

    radarChartInstance = new Chart(ctx, {

        type:"radar",

        data:{

            labels,

            datasets:[{

                label:"Life Performance",

                data,

                backgroundColor:"rgba(37,99,235,.25)",

                borderColor:"#38bdf8",

                borderWidth:2,

                pointBackgroundColor:"#2563eb",

                pointBorderColor:"#ffffff",

                pointRadius:5 // Slightly larger dots to match the big design

            }]

        },

options:{

            responsive:true,

            maintainAspectRatio:false, // Tắt tỉ lệ mặc định để ưu tiên chiều cao CSS đã cài ở Bước 1

            layout: {
                padding: {
                    top: 15,
                    bottom: 15,
                    left: 55,  // Khoảng đệm hai bên vừa đủ để chữ không bị tràn viền
                    right: 55
                }
            },

            scales:{

                r:{

                    min:0,

                    max:100,

                    ticks:{

                        stepSize:20,

                        color:"#d6d6d6",

                        backdropColor:"transparent",
                        
                        font: { size: 11 } 

                    },

                    grid:{

                        color:"rgba(255,255,255,.15)"

                    },

                    angleLines:{

                        color:"rgba(255,255,255,.15)"

                    },

                    pointLabels:{

                        color:"#ffffff",

                        font:{ 
                            size: 13,        // 13px giúp chữ gọn gàng hơn, không bị kích vỡ khung
                            weight: '600',   // Độ đậm vừa phải giúp dễ đọc
                            family: "'Inter', sans-serif"
                        },
                        
                        padding: 10 // Thu hẹp khoảng cách giữa chữ và đỉnh mạng nhện để nhường chỗ cho vòng tròn

                    }

                }

            },

            plugins:{

                legend:{ display:false }

            }

        }});}

/* =====================================================
   CATEGORY BARS
===================================================== */

function renderStageExplanation(performance){

    const container = document.getElementById("stageDetailContent");

    const explanations = {

        survival: {
            title: "Nếu bạn đang ở vùng Survival",
            body: [
                "Bạn có thể đang vận hành phần lớn thời gian trong chế độ sinh tồn. Năng lượng bị tiêu hao nhanh, khả năng phục hồi chưa đủ, và những việc cơ bản trong cuộc sống cũng có thể lấy đi rất nhiều sức.",
                "Tiềm năng của bạn đang bị che bởi sự quá tải, thiếu phục hồi, thiếu hỗ trợ hoặc một nhịp sống chưa còn phù hợp.",
                "Điều cần làm không phải là ép bản thân cố thêm. Điều cần làm là tìm ra điểm nào đang làm bạn rò rỉ năng lượng mạnh nhất, và sửa từ gốc rễ này."
            ]
        },

        draining: {
            title: "Nếu bạn đang ở vùng Draining",
            body: [
                "Bạn vẫn đang vận hành được. Nhưng cái giá phải trả khá cao. Có thể bạn vẫn hoàn thành công việc, chăm sóc gia đình và giữ trách nhiệm, nhưng bên trong bạn biết mình đang phải gồng.",
                "Tiềm năng lớn nhất của bạn nằm ở việc giảm hao phí. Khi bớt rò rỉ năng lượng vào việc gấp, cảm xúc, môi trường nhiễu hoặc những kỳ vọng không rõ ràng, bạn có thể tạo ra kết quả tốt hơn mà không cần làm nhiều hơn.",
                "Đồng thời, bạn cũng có thể tìm ra những đòn bẩy khiến bạn phục hồi và sạc pin tốt hơn."
            ]
        },

        emerging: {
            title: "Nếu bạn đang ở vùng Emerging",
            body: [
                "Bạn đã có nền tảng. Nhưng hiệu suất chưa ổn định. Có ngày bạn làm rất tốt, có ngày bạn bị kéo đi bởi việc vụn, cảm xúc, tin nhắn, lịch trình hoặc sự mệt mỏi.",
                "Đây là vùng có nhiều tiềm năng mở khóa nhất. Bạn không cần thay đổi toàn bộ cuộc sống.",
                "Bạn cần xác định đúng 2–3 điểm nghẽn đang làm hiệu suất lên xuống thất thường. Khi tìm được đúng cơ chế của mình, hiệu suất có thể tăng lên rất rõ mà không cần thêm áp lực."
            ]
        },

        performing: {
            title: "Nếu bạn đang ở vùng Performing",
            body: [
                "Bạn đang vận hành khá tốt. Bạn có khả năng tạo kết quả và có một số thói quen tốt. Nhưng vùng Performing cũng có một cái bẫy: vì bạn đang làm tốt, bạn dễ nghĩ rằng cách duy nhất để tốt hơn là làm nhiều hơn, nhận thêm trách nhiệm hoặc nâng tiêu chuẩn lên nữa.",
                "Ở giai đoạn này, đòn bẩy không nằm ở nỗ lực nhiều hơn. Đòn bẩy nằm ở việc thiết kế hệ thống thông minh hơn để có thể tạo ra nhiều kết quả hơn nữa.",
                "Để làm được điều này, bạn cần biết đâu là vùng tạo hiệu suất cao nhất của mình, đâu là hoạt động có giá trị cao nhất, đâu là điểm rò rỉ nhỏ nhưng lặp lại mỗi ngày, và điều gì giúp bạn duy trì phong độ mà không kiệt sức."
            ]
        },

        thriving: {
            title: "Nếu bạn đang ở vùng Thriving",
            body: [
                "Chúc mừng bạn, bạn đang nằm trong danh sách những người xuất sắc với tảng hiệu suất sống cao. Bạn có khả năng tạo kết quả, giữ năng lượng và duy trì chất lượng sống ở mức cao hơn mặt bằng chung. Đây là một lợi thế rất lớn khiến bạn đạt được nhiều kết quả trong cuộc sống, tiến gần với mục đích cuộc đời mà vẫn cảm thấy tích cực, cân bằng.",
            ]
        }

    };

    const explanation = explanations[performance.key] || explanations.emerging;

    container.innerHTML = `

        <h3>${explanation.title}</h3>

        ${explanation.body.map(paragraph => `<p>${paragraph}</p>`).join("")}

    `;

}

function buildCategoryScores(scores){

    const container=

        document.getElementById(

            "categoryScores"

        );

    container.innerHTML="";

    Object.entries(scores).forEach(([name,value])=>{

        const info=

            CATEGORY_INFORMATION[name];

        const row=document.createElement("div");

        row.className="categoryScore";

        row.innerHTML=`

        <div class="categoryHeader">

            <span>${info.icon} ${name}</span>

            <span>${value}%</span>

        </div>

        <div class="categoryBar">

            <div

            class="categoryFill"

            style="width:${value}%">

            </div>

        </div>

        `;

        container.appendChild(row);

    });

}

/* =====================================================
   BUILD INSIGHTS
===================================================== */

function buildInsights(scores){

    const bestCategories=

        findBestCategories(scores);

    const worstCategories=

        findWorstCategories(scores);

    const strength=

        document.getElementById(

            "strengthContainer"

        );

    const weakness=

        document.getElementById(

            "weaknessContainer"

        );

    const recommendation=

        document.getElementById(

            "recommendationContainer"

        );

    strength.innerHTML="";

    weakness.innerHTML="";

    recommendation.innerHTML="";

    strength.innerHTML=

        bestCategories.map(cat=>{

            const data=

                RECOMMENDATIONS[cat][

                    recommendationLevel(scores[cat])

                ];

            return `

            <div class="insightCard">

                <h3>${cat}</h3>

                <p>${data.title}</p>

            </div>

            `;

        }).join("");

    weakness.innerHTML=

        worstCategories.map(cat=>{

            const data=

                RECOMMENDATIONS[cat][

                    recommendationLevel(scores[cat])

                ];

            return `

            <div class="insightCard">

                <h3>${cat}</h3>

                <p>${data.title}</p>

            </div>

            `;

        }).join("");

    worstCategories.forEach(cat=>{

        const data=

            RECOMMENDATIONS[cat][

                recommendationLevel(scores[cat])

            ];

        data.recommendations.forEach(item=>{

            const li=document.createElement("li");

            li.textContent=item;

            recommendation.appendChild(li);

        });

    });

}

/* =====================================================
   RESTART
===================================================== */

function restartAssessment(){

    currentQuestionIndex=-1;

    userAnswers=[];

    showPage(landingPage);

}

/* =====================================================
   DOWNLOAD RESULT
===================================================== */

function printResult(){

    window.print();

}
