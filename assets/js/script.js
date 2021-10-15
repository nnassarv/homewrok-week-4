var viewHighScores = document.querySelector("#view-high-scores");
var timerEl = document.querySelector("#quiz-timer");
var startButton = document.querySelector("#start-button");
var questionsEl = document.querySelector("#quiz-questions");
var optionsEl = document.querySelector("#answer-options");
var resultsEl = document.querySelector("#quiz-results");
var saveScoresEl = document.querySelector("#save-high-scores");




var testQuestion = {
    question: "what is the property to find array length?",
    options: ["length", "size", "len"],
    answer: "length"
}


function showQuestion(curQuestion) {
    // i want to print the question
    questionsEl.textContent = curQuestion.question;
    optionsEl.textContent = curQuestion.options;
    
    for (var i = 0; i < curQuestion.options.length; i++) {
        console.log(curQuestion.options[i]);
    }

}

showQuestion(testQuestion);
