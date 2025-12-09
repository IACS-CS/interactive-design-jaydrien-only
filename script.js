console.log("Hello, Interactive Graphic Design!");
// This is the main JavaScript file for the Interactive Graphic Design project.

// Variable to hold the correct answer text for each question
let correct = 0;
// Variable to track the current question number. Also used to determine the current image shown.
let questionNumber = 0;
// Variable to track which question comes next (auto-advance on correct answer)
let nextQuestion = 2;
// Variable to store the timeout ID so we can cancel it if needed
let autoAdvanceTimeout = null;
// Variable to track a simple numeric score. The progress bar will show
// the `score` value's first character inside `.progress-first`.
let score = 0;
// Initialize: hide choice buttons on page load (questionNumber starts at 0, which is < 1)
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".questionchoices").classList.add("hidden");
  // Initialize the progress bar display on load
  if (typeof updateProgressBar === "function") updateProgressBar();
});

// AI-generated code starts here
// Student prompt was: How do I change the prompt text so that it changes when the button is pressed?

// Helper function: change the text inside the <div class="prompt"><p>...</p></div>
function setPromptText(newText) {
  // Find the <p> inside the element with class "prompt"
  var promptParagraph = document.querySelector(".prompt p");

  // If the element exists, set its HTML content (allows formatting like <b> and <span>)
  if (promptParagraph) {
    promptParagraph.innerHTML = newText;
  }
}

// Helper function: set the text for the two choice buttons
function setChoiceText(firstText, secondText) {
  // Find the container that holds the choice buttons
  var container = document.querySelector(".questionchoices");
  if (!container) return; // nothing to do if the container isn't present

  // Get all buttons inside that container (expect two)
  var buttons = container.querySelectorAll("button");

  // If a firstText was provided, set it on the first button
  if (firstText && buttons[0]) {
    buttons[0].textContent = firstText;
  }

  // If a secondText was provided, set it on the second button
  if (secondText && buttons[1]) {
    buttons[1].textContent = secondText;
  }
}
// Function: change the image based on the current question number
function updateImage() {
  var imageElement = document.querySelector(".spongebobimage img");
  if (!imageElement) return;

  // Set the image source based on the question number
  // Map each question to its corresponding image file
  var imageMap = {
    1: "./images/spongebob.png",
    2: "./images/goodkrabbypatty.png",
    3: "./images/goodkrabbypatty.png",
    4: "./images/patrick.png",
    5: "./images/superhero.png",
    6: "./images/gary.png",
    7: "./images/plankton.png",
    8: "./images/boatinglicense.png",
    9: "./images/kingneptune.png",
    10: "./images/pineapple.jpg",
  };

  // Look up the image file for the current question number
  var imageSrc = imageMap[questionNumber];

  // If a mapping exists for this question, update the img src
  if (imageSrc) {
    imageElement.src = imageSrc;
  }
}

// Helper function: schedule the next question to load after 5 seconds on correct answer
function scheduleNextQuestion() {
  // Clear any existing timeout (in case user clicked multiple times)
  if (autoAdvanceTimeout) {
    clearTimeout(autoAdvanceTimeout);
  }

  // Schedule the next question to load after 4000 milliseconds (4 seconds)
  autoAdvanceTimeout = setTimeout(function () {
    // Call the next question function dynamically
    var nextQuestionFunc = window["question" + nextQuestion];
    if (nextQuestionFunc) {
      nextQuestionFunc();
      // Increment nextQuestion for the following correct answer
      nextQuestion = nextQuestion + 1;
    }
  }, 1000);
}
// Update the small progress bar: only the first character reflects `score`.
function updateProgressBar() {
  var el = document.querySelector(".progress-first");
  if (!el) return;
  el.textContent = score;
}

// New: set data attributes for correctness so behavior follows the button when shuffled
function setChoiceDataAttributes(firstIsCorrect) {
  var container = document.querySelector(".questionchoices");
  if (!container) return;
  var buttons = container.querySelectorAll("button");

  // If firstIsCorrect is true, first button is correct; otherwise second is correct
  if (buttons[0])
    buttons[0].dataset.answer = firstIsCorrect ? "correct" : "incorrect";
  if (buttons[1])
    buttons[1].dataset.answer = firstIsCorrect ? "incorrect" : "correct";
}

// New handler: single entry to check correctness from the button element
function handleChoice(buttonEl) {
  if (!buttonEl) return;
  var answer = buttonEl.dataset.answer;
  if (answer === "correct") {
    // Display "Correct!" in bold and green, followed by the explanation
    setPromptText(
      "<b style='color: forestgreen;'>Correct!</b> " +
        correct +
        " <b style='color: forestgreen;'>You are a real SpongeBob fan!</b>"
    );
    // Schedule the next question to auto-load after 5 seconds
    scheduleNextQuestion();
    // Increment score and update the progress bar (only the first character changes)
    score = score + 1;
    updateProgressBar();
  } else {
    // Display "Incorrect." in bold and red, followed by the explanation
    setPromptText(
      "<b style='color: red;'>Incorrect.</b> " +
        correct +
        " <b style='color: red;'>You are not a real SpongeBob fan.</b>"
    );
  }
  // Hide buttons using CSS class instead of direct style manipulation
  document.querySelector(".questionchoices").classList.add("hidden");
  // Show the image when an answer is chosen
  document.querySelector(".spongebobimage").classList.remove("hidden");
}

// When the user clicks the "Question one" button, call this function
function question1() {
  // Update the prompt to a question about SpongeBob
  setPromptText("Question 1: What street does SpongeBob live on?");
  // Set both choice buttons so it's clear what's being asked
  setChoiceText("Conch St", "Pineapple St");
  // Mark which button is correct BEFORE shuffling so the data attribute moves with the node
  setChoiceDataAttributes(true); // first button (Conch St) is correct for question1
  shuffleChoiceButtons(); // randomize their order
  // Show items using CSS class instead of direct style manipulation
  document.querySelector(".questionchoices").classList.remove("hidden");
  // Hide the image during the question
  document.querySelector(".spongebobimage").classList.add("hidden");
  // This variable will be used in the prompt text to change based on the question
  correct = "SpongeBob lives on Conch St.";
  score = 0; // reset score at the start of question 1
  questionNumber = 1;
  nextQuestion = 2;
  // Clear any pending auto-advance timeout when (re)starting question 1
  if (autoAdvanceTimeout) {
    clearTimeout(autoAdvanceTimeout);
    autoAdvanceTimeout = null;
  }
  // Reset score when restarting the quiz at question 1
  score = 0;
  updateProgressBar();
  updateImage(); // change the image to match this question
}

// When the user clicks the "Question two" button, call this function
function question2() {
  // Update the prompt with another question (keep wording simple for students)
  setPromptText(
    "Question 2: Why does SpongeBob work at his job at the Krusty Krab even though it is done for little to no pay?"
  );
  setChoiceText("Because he loves his job", "Because he was brainwashed to");
  // For question2 the first choice is the correct one
  setChoiceDataAttributes(true);
  shuffleChoiceButtons(); // randomize their order
  // Show buttons using CSS class
  document.querySelector(".questionchoices").classList.remove("hidden");
  // Hide the image during the question
  document.querySelector(".spongebobimage").classList.add("hidden");
  correct = "SpongeBob loves his job at the Krusty Krab.";
  questionNumber = 2;
  updateImage(); // change the image to match this question
}

// When the user clicks the "Question three" button, call this function
function question3() {
  // Update the prompt with a third example question
  setPromptText("Question 3: What is SpongeBob's favorite thing?");
  setChoiceText("Jellyfishing", "Krabby Patties");
  // For question3 the second choice (Krabby Patties) is correct
  setChoiceDataAttributes(false);
  shuffleChoiceButtons(); // randomize their order
  // Show buttons using CSS class
  document.querySelector(".questionchoices").classList.remove("hidden");
  // Hide the image during the question
  document.querySelector(".spongebobimage").classList.add("hidden");
  correct = "SpongeBob's favorite thing is making Krabby Patties.";
  questionNumber = 3;
  updateImage(); // change the image to match this question
}
function question4() {
  setPromptText("Question 4: Who is SpongeBob's best friend?");
  setChoiceText("Patrick Star", "Spat, his spatula");
  setChoiceDataAttributes(true);
  shuffleChoiceButtons();
  document.querySelector(".questionchoices").classList.remove("hidden");
  document.querySelector(".spongebobimage").classList.add("hidden");
  correct = "SpongeBob's best friend is Patrick Star.";
  questionNumber = 4;
  updateImage(); // change the image to match this question
}
function question5() {
  setPromptText("Question 5: Has SpongeBob ever been a superhero?");
  setChoiceText("No", "Yes");
  setChoiceDataAttributes(false);
  shuffleChoiceButtons();
  document.querySelector(".questionchoices").classList.remove("hidden");
  document.querySelector(".spongebobimage").classList.add("hidden");
  correct = "SpongeBob has been a superhero called 'The Quickster'.";
  questionNumber = 5;
  updateImage(); // change the image to match this question
}
function question6() {
  setPromptText("Question 6: Is Jerry really different from Larry?");
  setChoiceText("Yes, very", "No, not at all");
  setChoiceDataAttributes(true);
  shuffleChoiceButtons();
  document.querySelector(".questionchoices").classList.remove("hidden");
  document.querySelector(".spongebobimage").classList.add("hidden");
  correct =
    "Jerry is very different from Larry. Why did you have to go, Gary???";
  questionNumber = 6;
  updateImage(); // change the image to match this question
}
function question7() {
  setPromptText("Question 7: Does SpongeBob hate Plankton?");
  setChoiceText("Yes", "No");
  setChoiceDataAttributes(false);
  shuffleChoiceButtons();
  document.querySelector(".questionchoices").classList.remove("hidden");
  document.querySelector(".spongebobimage").classList.add("hidden");
  correct = "SpongeBob does not hate Plankton.";
  questionNumber = 7;
  updateImage(); // change the image to match this question
}
function question8() {
  setPromptText("Question 8: Will SpongeBob ever get his boating license?");
  setChoiceText("Never", "One day he will");
  setChoiceDataAttributes(true);
  shuffleChoiceButtons();
  document.querySelector(".questionchoices").classList.remove("hidden");
  document.querySelector(".spongebobimage").classList.add("hidden");
  correct = "SpongeBob is never going to get his boating license.";
  questionNumber = 8;
  updateImage(); // change the image to match this question
}
function question9() {
  setPromptText("Question 9: Has SpongeBob ever defeated a god?");
  setChoiceText("Yes", "No");
  setChoiceDataAttributes(true);
  shuffleChoiceButtons();
  document.querySelector(".questionchoices").classList.remove("hidden");
  document.querySelector(".spongebobimage").classList.add("hidden");
  correct = "SpongeBob has defeated a god; King Neptune.";
  questionNumber = 9;
  updateImage(); // change the image to match this question
}
function question10() {
  setPromptText(
    "Question 10: Has SpongeBob ever had to move out of his old Pineapple house?"
  );
  setChoiceText("Yes", "No");
  setChoiceDataAttributes(true);
  shuffleChoiceButtons();
  document.querySelector(".questionchoices").classList.remove("hidden");
  document.querySelector(".spongebobimage").classList.add("hidden");
  correct = "SpongeBob has had to move out of his old Pineapple house.";
  questionNumber = 10;
  updateImage(); // change the image to match this question
}
function question11() {
  setPromptText(
    "Congratulations! You have completed the SpongeBob quiz. You are the realest of SpongeBob fans!"
  );
  // Hide choice buttons and image at the end of the game
  document.querySelector(".questionchoices").classList.add("hidden");
  document.querySelector(".spongebobimage").classList.add("hidden");
}
// Shuffle the choice buttons by reordering the DOM nodes.
// This preserves event listeners, classes, and data-* attributes.
function shuffleChoiceButtons() {
  var container = document.querySelector(".questionchoices");
  if (!container) return;

  // Convert live HTMLCollection into a static array
  var nodes = Array.from(container.children);

  // Fisher–Yates shuffle the array
  for (var i = nodes.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = nodes[i];
    nodes[i] = nodes[j];
    nodes[j] = temp;
  }

  // Append nodes back in shuffled order (moves existing nodes)
  nodes.forEach(function (node) {
    container.appendChild(node);
  });
}
