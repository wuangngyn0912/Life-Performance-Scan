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

function findBestCategory(categories){

    let best=null;

    let value=-1;

    Object.entries(categories).forEach(([key,val])=>{

        if(val>value){

            value=val;

            best=key;

        }

    });

    return best;

}

function findWorstCategory(categories){

    let worst=null;

    let value=999;

    Object.entries(categories).forEach(([key,val])=>{

        if(val<value){

            value=val;

            worst=key;

        }

    });

    return worst;

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

        overall+" / 100";

    document.getElementById(

        "finalPercentage"

    ).textContent=

        overall+"%";

    document.getElementById(

        "performanceDescription"

    ).textContent=

        performance.description;

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

            maintainAspectRatio:true,

            // CRITICAL FIX: Adds a safe zone inside the canvas boundaries 
            // so long outer category text strings never get sliced off
            layout: {
                padding: 40 
            },

            scales:{

                r:{

                    min:0,

                    max:100,

                    ticks:{

                        stepSize:20,

                        color:"#d6d6d6",

                        backdropColor:"transparent",
                        
                        font: { size: 12 } // Size of grid numbers (0, 20, 40, etc.)

                    },

                    grid:{

                        color:"rgba(255,255,255,.15)"

                    },

                    angleLines:{

                        color:"rgba(255,255,255,.15)"

                    },

                    pointLabels:{

                        color:"#ffffff",

                        // CRITICAL FIX: Makes the outer words much larger & clearer
                        font:{ 
                            size: 16,        // Increased from 12 to 16
                            weight: 'bold',  // Bold text makes it easier to scan
                            family: "'Inter', sans-serif"
                        },
                        
                        padding: 15 // Adds buffer space between the web lines and the text

                    }

                }

            },

            plugins:{

                legend:{ display:false }

            }

        }

    });

}

/* =====================================================
   CATEGORY BARS
===================================================== */

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

    const best=

        findBestCategory(scores);

    const worst=

        findWorstCategory(scores);

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

    const bestData=

        RECOMMENDATIONS[best][

            recommendationLevel(

                scores[best]

            )

        ];

    const worstData=

        RECOMMENDATIONS[worst][

            recommendationLevel(

                scores[worst]

            )

        ];

    strength.innerHTML=

    `

    <div class="insightCard">

        <h3>${best}</h3>

        <p>${bestData.title}</p>

    </div>

    `;

    weakness.innerHTML=

    `

    <div class="insightCard">

        <h3>${worst}</h3>

        <p>${worstData.title}</p>

    </div>

    `;

    worstData.recommendations.forEach(item=>{

        const li=document.createElement("li");

        li.textContent=item;

        recommendation.appendChild(li);

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