const question = [
    {
        question: "Which CSS property creates a flexible layout system?",
        answer: [
            { text: "Float", correct: false },
            { text: "Display: flex", correct: true },
            { text: "position: absolute", correct: false },
            { text: "z-index", correct: false }
        ]
    },
    {
        question: "What will typeof null return in JavaScript?",
        answer: [
            { text: "Null", correct: false },
            { text: "Undefined", correct: false },
            { text: "Object", correct: true },
            { text: "Boolean", correct: false }
        ]
    },
    {
        question: "Which HTTP status code means “Unauthorized”?",
        answer: [
            { text: "200", correct: false },
            { text: "301", correct: false },
            { text: "401", correct: true },
            { text: "500", correct: false }
        ]
    },
    {
        question: "In JavaScript, which method converts JSON data into an object?",
        answer: [
            { text: "JSON.stringify()", correct: false },
            { text: "JSON.parse()", correct: true },
            { text: "JSON.convert()", correct: false },
            { text: "JSON.object()", correct: false }
        ]
    },
    {
        question: "Which SQL command removes all records but keeps the table structure?",
        answer: [
            { text: "DELETE", correct: false },
            { text: "REMOVE", correct: false },
            { text: "DROP", correct: false },
            { text: "TRUNCATE", correct: true }
        ]
    },
    {
        question: "Which data structure works on LIFO principle?",
        answer: [
            { text: "Stack", correct: true },
            { text: "Linked List", correct: false },
            { text: "Array", correct: false },
            { text: "Queue", correct: false }
        ]
    },
    {
        question: "Which React hook is used for side effects?",
        answer: [
            { text: "useState", correct: false },
            { text: "useEffect", correct: true },
            { text: "useRef", correct: false },
            { text: "useMemo", correct: false }
        ]
    },
    {
        question: "Which CSS unit is relative to the root element font size?",
        answer: [
            { text: "em", correct: false },
            { text: "px", correct: false },
            { text: "rem", correct: true },
            { text: "vh", correct: false }
        ]
    },
    {
        question: "What is the default port number for HTTPS?",
        answer: [
            { text: "21", correct: false },
            { text: "80", correct: false },
            { text: "443", correct: true },
            { text: "8080", correct: false }
        ]
    },
    {
        question: "Which method is used to stop event bubbling in JavaScript?",
        answer: [
            { text: "preventDefault()", correct: false },
            { text: "stopPropagation()", correct: true },
            { text: "stopEvent()", correct: false },
            { text: "cancelBubble()", correct: false }
        ]
    }
];

const questionElement = document.getElementById("q");
const answerButtons = document.getElementById("ans");
const nextButton = document.getElementById("next");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();

    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;

    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answer.forEach(answer =>{
        const button = document.createElement("button");

        button.innerHTML = answer.text;
        button.classList.add("btn");

        answerButtons.appendChild(button);

        if(answer.correct){
            button.dataset.correct = answer.correct;
        }

        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";

    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;

    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button =>{

        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }

        button.disabled = true;
    });

    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of 10!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style .display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < question.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", () =>{
    if(currentQuestionIndex < question.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();
