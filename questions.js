//questions stored as an object
var questionContainerElement = document.getElementById("question-container");
var startBtn = document.getElementById("start-btn");
var questionElement = document.getElementById("question");
var answerElement = document.getElementById("answer-buttons");
var currentQuestionIndex;
var randomQuestion;
var isAnswered = false;


var questions = [
  {
    question: "How do  you create a function in Javascript",
    choices: ["function = myFunction()", "function:my Function()", "function myFunction()", "function-myFunction()"],
    answer: "function myFunction()"
  },
  {
    question: "How does a FOR loop start ?",
      choices: ["for(i <=7; i++)", "for(i = 0; i <=7; i++)", "for(i = 0; i <= 5)", "for i = 1 to 7"],
      answer: "for(i = 0; i <=7; i++)"
    }, 
    { question: "Which event occurs when the user clicks on an HTML element ?",
      choices: ["onclick", "onmouseclick", "onmouseover", "onchange"],
      answer: "onclick"
    },
    { question: "How do you declare a Javascript variable ?",
    choices: ["variable carName", "v carName", "var carName", "var CarName"],
    answer: "var carName"
  },
  { question: "How do you write 'Hello World' in an alert box ?",
  choices: ["msgBox('Hello World)", "alertBox('Hello World')", "alert('Hello World')", "msg('Hello World')"],
  answer: "alert('Hello World')"
},
];

startBtn.addEventListener("click", startQuiz);

function startQuiz () {
  startBtn.style.visibility = "hidden";
  questionContainerElement.removeAttribute("class", "hide");
}

function showQuestion (questions, questionElement) {
  var output = [];
  var answers;
  for (var i = 0; i < questions.length; i++) {
    randomQuestion = questions[i].question;
   }
}
 



