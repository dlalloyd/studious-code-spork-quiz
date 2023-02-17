var currentTime = document.getElementById("timercountdown ");
var timer = document.getElementById("startBtn");
var questions = document.querySelector("start-screen");
var wrapper = document.querySelector("#wrapper");

var score = 0;
var questionIndex = 0;

var remainingTime = 60;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement("ul");

var quiz = [
  {
    QUestIon: "commonly used data types do not include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts",
  },
  {
    QUestIon: "the condition in an if/else statement is enclosed within ___.",
    choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
    answer: "parentheses",
  },
  {
    QUestIon: "arrays in javascript can be used to store ___.",
    choices: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    answer: "all of the above",
  },
  {
    QUestIon:
      "string values must be enclosed within ___ when being assigned to variables.",
    choices: ["commas", "curly brackets", "quotes", "parentheses"],
    answer: "quotes",
  },
  {
    QUestIon:
      "a very useful tool used during development and debugging for printing current content to the debugger is:",
    choices: ["javascript", "terminal/bash", "for loops", "console.log"],
    answer: "console.log",
  },
];

// Function that starts the timer button.
timer.addEventListener("click", function () {
  if (holdInterval === 0) {
    holdInterval = setInterval(function () {
      remainingTime--;
      currentTime.textContent = "Time: " + remainingTime;

      if (remainingTime <= 0) {
        clearInterval(holdInterval);
        allDone();
        currentTime.textContent = "Time is up!";
      }
    }, 1000);
  }
  render(questionIndex);
});

// Function that shows questions screen .
function render(questionIndex) {
  questions.innerHTML = "";
  ulCreate.innerHTML = "";

  for (var i = 0; i < quiz.length; i++) {
    var userQuiz = quiz[questionIndex].QUestIon;
    var userChoices = quiz[questionIndex].choices;
    questions.textContent = userQuiz;
  }

  userChoices.forEach(function (newItem) {
    var listItem = document.createElement("li");
    listItem.textContent = newItem;
    questions.appendChild(ulCreate);
    ulCreate.appendChild(listItem);
    listItem.addEventListener("click", compare);
  });
}

console.log("js works");

// Function to compare choices with answers
function compare(event) {
  var element = event.target;

  if (element.matches("li")) {
    var createDiv = document.createElement("div");
    createDiv.setAttribute("id", "createDiv");

    if (element.textContent == quiz[questionIndex].answer) {
      score++;
      createDiv.textContent =
        "You got it right! The answer is:" + quiz[questionIndex].answer;
    } else {
      remainingTime = remainingTime - penalty;
      createDiv.textContent =
        "You got it wrong! The correct answer is:" + quiz[questionIndex].answer;
    }
  }

  questionIndex++;

  if (questionIndex >= quiz.length) {
    allDone();
    createDiv.textContent =
      "End of quiz!" +
      " " +
      "You got  " +
      score +
      "/" +
      quiz.length +
      " Correct!";
  } else {
    render(questionIndex);
  }

  questions.appendChild(createDiv);
}
