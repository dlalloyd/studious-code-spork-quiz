var startBtn = document.getElementById("startBtn");
var submitBtn = document.querySelector("#submitBtn");
var highScoreBtn = document.querySelector("#highScoreBtn");

// var clearButton = document.querySelector("#clearBtn");
// var userInitialsSpan = document.querySelector("#userhighscores");
// var userResultSpan = document.querySelector("#final-score");

var timerEl = document.getElementById("timercountdown");
var questions = document.querySelector("#questions");
var choices = Array.from(document.querySelectorAll(".choice-text"));

var remainingTime = 60;
var scorePoints = 20;
var qMax = 4;

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let availableQuestions = [];

// Function that starts the timer.
function countdown() {
  var timeInterval = setInterval(function () {
    if (remainingTime > 1) {
      timerEl.textContent = remainingTime;
      remainingTime--;
    } else if (remainingTime === 1) {
      timerEl.textContent = remainingTime;
      remainingTime--;
    } else {
      timerEl.textContent = "";
      clearInterval(timeInterval);
      hideAnswer();
      showEnd();
    }
  }, 1000);
}

let quiz = [
  {
    question: "commonly used data types do not include:",
    choice1: "strings",
    choice2: "booleans",
    choice3: "alerts",
    choice4: "numbers",
    answer: 3,
  },
  {
    question: "the condition in an if/else statement is enclosed within ___.",
    choice1: "quotes",
    choice2: "curly brackets",
    choice3: "parentheses",
    choice4: "square brackets",
    answer: 3,
  },
  {
    question: "arrays in javascript can be used to store ___.",
    choice1: "numbers and strings",
    choice2: "other arrays",
    choice3: "booleans",
    choice4: "all of the above",
    answer: 4,
  },
  {
    question:
      "string values must be enclosed within ___ when being assigned to variables.",
    choice1: "commas",
    choice2: "curly bracket",
    choice3: "quotes",
    choice4: "parentheses",
    answer: 3,
  },
  {
    question:
      "a very useful tool used during development and debugging for printing current content to the debugger is:",
    choice1: "javascript",
    choice2: "terminal/bash",
    choice3: "for loops",
    choice4: "console.log",
    answer: 4,
  },
];
// Function that starts the quiz; timer starts, home screen hidden & question screen shown, score in local storage is reset.
startButton.addEventListener("click", function () {
  console.log("this works");
  localStorage.setItem("recentScore", score);
  hideHome();
  showAnswer();
  countdown();
});

// This should generate questions and ddisplay them on the screen
function newQuestion() {
  questionCount = 0;
  score = 0;
  availableQuestions = [...quiz];
  newQuestion;
}

// this function  starts the quiz and Stores the questions array into the availableQuestions array.
function startQuiz() {
  questionCount = 0;
  score = 0;
  availableQuestions = [...quiz];
  newQuestion();
}

startQuiz();
