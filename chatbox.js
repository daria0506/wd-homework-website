// 1. The questions array contains objects with questions, options, correct answers, and feedback messages.
let questions = [
    {
        question: "What is Artigio Bakery known for?",
        options: {
            a: "Mobile phones",
            b: "Car parts",
            c: "Fresh pastries",
            d: "Main courses"
        },
        correctAnswer: "c",
        correctResponse: "Correct! Artigio Bakery offers fresh pastries.",
        incorrectResponse: "Incorrect. The correct answer is fresh pastries."
    },
    {
        question: "Can customers place special orders at Artigio Bakery?",
        options: {
            a: "Yes",
            b: "No"
        },
        correctAnswer: "a",
        correctResponse: "Correct! Customers can contact us for special orders.",
        incorrectResponse: "Incorrect. Special orders are available."
    },
    {
        question: "Which item is part of our bakery selection?",
        options: {
            a: "Sandwiches",
            b: "Cinnamon rolls",
            c: "Soup",
            d: "Noodles"
        },
        correctAnswer: "b",
        correctResponse: "Correct! Cinnamon rolls are one of our sweet bakery products.",
        incorrectResponse: "Incorrect. Cinnamon rolls are part of our bakery selection."
    },
    {
        question: "What page should customers visit to contact the bakery?",
        options: {
            a: "Music page",
            b: "Weather page",
            c: "Gaming page",
            d: "Contact page"
        },
        correctAnswer: "d",
        correctResponse: "Correct! The Contact page is used for customer messages.",
        incorrectResponse: "Incorrect. Customers should use the Contact page."
    }
];

let currentQuestionIndex = 0;
let chatContainer = document.getElementById("chat-container");
let chatForm = document.getElementById("chat-form");
let userInput = document.getElementById("user-input");
displayQuestion();

// 2. The displayQuestion function creates and appends an element for the current question in the chat container.
function displayQuestion() {
  let currentQuestion = questions[currentQuestionIndex];
  let optionsHTML = Object.keys(currentQuestion.options)
    .map(key => `${key}. ${currentQuestion.options[key]}`)
    .join("<br>");

  let botResponse = document.createElement("div");
  botResponse.classList.add("message");
  botResponse.innerHTML = `<strong>ChatBot:</strong> ${currentQuestion.question}<br>${optionsHTML}`;
  chatContainer.appendChild(botResponse);
}

// Optional helper
function scrollChatContainerToBottom() {
  let chatContainer = document.getElementById("chat-container");
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// 3. The event listener for the form prevents default submit, processes user response, checks if correct, and displays feedback.
chatForm.addEventListener("submit", function(event) {
  event.preventDefault();

  let userResponse = userInput.value.toLowerCase();

  let userMessage = document.createElement("div");
  userMessage.classList.add("message");
  userMessage.innerHTML = `<strong>You:</strong> ${userResponse}`;
  chatContainer.appendChild(userMessage);

  let currentQuestion = questions[currentQuestionIndex];
  let botResponse = document.createElement("div");
  botResponse.classList.add("message");
  botResponse.innerHTML = `<strong>ChatBot:</strong> `;

  if (userResponse === currentQuestion.correctAnswer) {
    botResponse.innerHTML += currentQuestion.correctResponse;
  } else {
    botResponse.innerHTML += currentQuestion.incorrectResponse;
  }

  chatContainer.appendChild(botResponse);

  currentQuestionIndex = (currentQuestionIndex + 1) % questions.length;
  userInput.value = "";
  displayQuestion();

  scrollChatContainerToBottom();
});