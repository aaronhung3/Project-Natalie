const quizData = [
    {
        question: "1. What is Yule's middle name?",
        options: ["Yuley", "Branch", "B", "The Greatest"],
        answer: "B"
    },
    {
        question: "2. What is Aaron's favorite food?",
        options: ["Natalie", "Chocolate cookie", "Beaver", "Pasta"],
        answer: "Pasta"
    },
    {
        question: "3. Where was Aaron born?",
        options: ["Boston", "Taiwan", "The jungle", "In a beaver dam"],
        answer: "Boston"
    },
    {
        question: "4. What is Aaron's favorite memory with Natalie?",
        options: ["WAHOOO", "Botanical Garden", "Christmas", "Valorant"],
        answer: "Christmas"
    },
    {
        question: "5. Who is Yule's favorite person in the world?",
        options: ["Bulb", "Natalie", "Elephante", "Mr. Sub"],
        answer: "Natalie"
    },
];

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");

let currentQuestion = 0;
let score = 0;
let wrongAnswer = [];

function showQuestion() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;

  optionsElement.innerHTML = "";
  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;

  if (selectedButton.innerText === answer) {
    score++;
  }

  currentQuestion++;

  if (selectedButton.innerText != answer) {
    wrongAnswer.push(currentQuestion);
  }
  

  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
    if (score < 5) {
        quiz.innerHTML = `
            <h1>Quiz Completed! Fail...</h1>
            <p>Your score: ${score}/${quizData.length}</p>
            <p>Questions Wrong: ${wrongAnswer}</p>
            <button id="resetButton">Retry</button>
        `;
        var retry = document.getElementById("resetButton");
        if (retry.addEventListener) {
            retry.addEventListener("click", resetButton, false);
        }
    } else if (score === 5) {
        quiz.innerHTML = `
            <h1>Good Job! 100%!</h1>
            <p>Your score: ${score}/${quizData.length}</p>
            <button id="nextButton">Collect Rewards!</button>
        `;
        var next = document.getElementById("nextButton");
        if (next.addEventListener) {
            next.addEventListener("click", nextButton, false);
        }
    }
}

function resetButton() {
    location.reload();
}
function nextButton() {
    location.href = "message.html";
}

showQuestion();