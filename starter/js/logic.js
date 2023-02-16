var currentTime = document.getElementById("timercountdown ");
var timer = document.getElementById("startBtn");
var questions = document.querySelector("start-screen");
var wrapper = document.querySelector("#wrapper");

var score = 0;
var questionIndex = 0;

var remainingTime = 60;
var scorePoints = 20;
var qMax = 4;

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

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let availableQuestions = [];

let quiz = [
  {
    question: "commonly used data types do not include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    question: "the condition in an if/else statement is enclosed within ___.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    question: "arrays in javascript can be used to store ___.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    question:
      "string values must be enclosed within ___ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    question:
      "a very useful tool used during development and debugging for printing current content to the debugger is:",
    choices: ["javascript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

// Function that starts the quiz; timer starts, home screen hidden & question screen shown, score in local storage is reset.
startBtn.addEventListener("click", function () {
  localStorage.setItem("recentScore", score);
  hideHome();
  showAnswer();
  countdown();
});

console.log("js works");

// Function for username display on highscores

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
