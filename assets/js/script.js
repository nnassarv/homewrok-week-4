var viewHighScores = document.querySelector("#view-high-scores");
var timerEl = document.querySelector("#quiz-timer");
var startButton = document.querySelector("#start-button");
var questionsEl = document.querySelector("#quiz-questions");
var optionsEl = document.querySelector("#answer-options");
var resultsEl = document.querySelector("#quiz-results");
var saveScoresEl = document.querySelector("#save-high-scores");
// buttons for the answer options
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
// question text
var questionText = document.getElementById("question-text");

// Questions for the quiz
var jsQuiz = [
  {
    question: "what is the property to find the array length?",
    options: ["length", "size", "len"],
    answer: "length",
  },
  {
    question: "Inside which HTML element do we put the JavaScript file?",
    options: ["<script>", "<js>", "<java>"],
    answer: "<script>",
  },
  {
    question:
      "A JavaScript file can also be linked with the <link> HTML element?",
    options: ["false", "true"],
    answer: "false",
  },
  {
    question:
      "In what section of the HTML file must the JavaScript file be inserted?",
    options: ["<body>", "<head>", "<footer>"],
    answer: "<body>",
  },
  {
    question: "JavaScript can be internal or external to the HTML file?",
    options: ["true", "false"],
    answer: "true",
  },
  {
    question:
      "What characters do you use to add comments in a JavaScript file?",
    options: ["//", "<!-- -->", "*"],
    answer: "//",
  },
];
// console.log(jsQuiz[1].options[1]);

var activeQuestionIndex = 0;
function increaseActiveQuestionIndex() {
  if (btn1.clicked == true) {
} return (activeQuestionIndex = activeQuestionIndex + 1);
console.log("answer clicked");
}

console.log("active question idex " + activeQuestionIndex);

// event listeners for answer buttons
btn1.addEventListener("click", increaseActiveQuestionIndex);
btn2.addEventListener("click", increaseActiveQuestionIndex);
btn3.addEventListener("click", increaseActiveQuestionIndex);
btn4.addEventListener("click", increaseActiveQuestionIndex);

// Function to display the questions
function showQuestion(curQuestion) {
  // i want to print the question
  questionText.textContent = curQuestion.question;
  // I want to print the options for the corresponding question
  btn1.textContent = curQuestion.options[0];
  btn2.textContent = curQuestion.options[1];
  btn3.textContent = curQuestion.options[2];
  btn4.textContent = curQuestion.options[3];
}
showQuestion(jsQuiz[1]);

// showQuestion(jsQuiz[activeQuestion])

// jsQuiz.forEach(function (question) {
//     showQuestion(question);
// })

// Function for the timer
var startCountdown = function () {
  var count = 5;

  // declare timer callback function
  var countdown = function () {
    // display the count value in html
    timerEl.textContent = "Time Left: " + count + " seconds";
    // decrease the count number
    count--;

    if (count < -1) {
      // kill timer
      clearInterval(timer);
      timerEl.textContent = "Time is up!!!";
    }
  };

  // set interval
  var timer = setInterval(countdown, 1000);
};

// start timer and quiz on click of start button
startButton.textContent = "Start Quiz";
startButton.addEventListener("click", startCountdown);
