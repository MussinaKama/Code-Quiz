//questions stored as an object

var questionContainerElement = document.getElementById("question-container");
var startBtn = document.getElementById("start-btn");
var questionElement = document.getElementById("question");
var answerElement = document.getElementById("answer-buttons");
var displayedQuestion = document.getElementById("question");
var currentQuestion = 0;
var isAnswered = false;
var count = 75;
var counter = 0;
var finishedTime = 0;

window.onload= function () {
var questions = [
  {
    question: "1. How do  you create a function in Javascript ?",
    choices: ["1. function = myFunction()", "2. function:my Function()", "3. function myFunction()", "4. function-myFunction()"],
    answer: "3. function myFunction()",
  },
  {
    question: "2. How does a FOR loop start ?",
      choices: ["1. for(i <=7; i++)", "2. for (i = 0; i <=7; i++)", "3. for(i = 0; i <= 5)", "4. for i = 1 to 7"],
      answer: "2. for (i = 0; i <=7; i++)",
    }, 
    { question: "3. Which event occurs when the user clicks on an HTML element ?",
      choices: ["1. onclick", "2. onmouseclick", "3. onmouseover", "4. onchange"],
      answer: "1. onclick",
    },
    { question: "4. How do you declare a Javascript variable ?",
    choices: ["1. variable carName", "2. v carName", "3. var carName", "4. var CarName"],
    answer: "3. var carName",
  },
  { question: "5. How do you write 'Hello World' in an alert box ?",
  choices: ["1. msgBox('Hello World)", "2. alertBox('Hello World')", "3. alert('Hello World')", "4. msg('Hello World')"],
  answer: "3. alert('Hello World')",
},
];

if(startBtn){
  startBtn.addEventListener("click", startQuiz);
}
var isFinished = document.getElementById('finished')
if(isFinished){

  isFinished.style.display = "none";
}

function startQuiz () {
  event.preventDefault();
  document.getElementById("hide-this").style.visibility = "hidden";
  questionContainerElement.removeAttribute("class", "hide");
  displayAnswers();
  setTime();
}

function setTime () {
var timer = setInterval(function() {
   count--;
   document.getElementById("timer").textContent = "Time: " + count;
   if (count === 0) {
   clearInterval(timer)
   document.getElementById("timer").textContent = "Time is out!";
   questionContainerElement.setAttribute("class", "hide");
 }
}, 1000);
}

function shuffledQuestions () {
  if (currentQuestion === questions.length){
  
  }
  if (isAnswered) {
    currentQuestion++;
    isAnswered = false;
  }
  displayAnswers();
}
if(answerElement){
answerElement.addEventListener("click", function() {
    isAnswered = true;
    counter++
    if (event.target.innerText === questions[currentQuestion].answer) {
      document.getElementById("userAnswer").textContent = "Correct!";
      checkGameOver();
    
    } else {
      document.getElementById("userAnswer").textContent = "Wrong!";
      count-=15;
      checkGameOver();
    }
    shuffledQuestions();
  
 
});
}
function displayAnswers () {
  displayedQuestion.textContent = questions[currentQuestion].question;
  for (var i = 0; i < questions[currentQuestion].choices.length; i++) {
    document.getElementById("btn" + (i + 1)).textContent = questions[currentQuestion].choices[i];
  }
};

function checkGameOver(){
  if (counter >= 5) {
    questionContainerElement.style.display = "none";
    document.getElementById("timer").style.display = "none";
    document.getElementById('finished').style.display = "block";
    document.getElementById("submit").addEventListener("click", function() {
      event.preventDefault();
      var initials = {
        user: document.getElementById("initials").value.trim().toUpperCase(),
        score: finishedTime,
      } 
      console.log(initials);
      localStorage.setItem("initials", JSON.stringify(initials));
      window.location.href = "score.html";
    })
    finishedTime = count;
  }
}
}




