console.log("Hello, Interactive Graphic Design!");
// This is the main JavaScript file for the Interactive Graphic Design project.

// Variable to hold the correct answer text for each question
let correct = 0;
// AI-generated code starts here
// Student prompt was: How do I change the prompt text so that it changes when the button is pressed?

// Helper function: change the text inside the <div class="prompt"><p>...</p></div>
function setPromptText(newText) {
  // Find the <p> inside the element with class "prompt"
  var promptParagraph = document.querySelector(".prompt p");

  // If the element exists, set its text content to the provided string
  if (promptParagraph) {
    promptParagraph.textContent = newText;
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
    setPromptText("Correct! " + correct);
  } else {
    setPromptText("Incorrect. " + correct);
  }
  document.querySelector(".questionchoices").style.opacity = 0;
  document.querySelector(".questionchoices").style.position = "absolute";
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
  document.querySelector(".questionchoices").style.opacity = 1;
  document.querySelector(".questionchoices").style.position = "static";
  // This variable will be used in the prompt text to change based on the question
  correct = "SpongeBob lives on Conch St.";
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
  document.querySelector(".questionchoices").style.opacity = 1;
  document.querySelector(".questionchoices").style.position = "static";
  correct = "SpongeBob loves his job at the Krusty Krab.";
}

// When the user clicks the "Question three" button, call this function
function question3() {
  // Update the prompt with a third example question
  setPromptText("Question 3: What is SpongeBob's favorite thing?");
  setChoiceText("Jellyfishing", "Krabby Patties");
  // For question3 the second choice (Krabby Patties) is correct
  setChoiceDataAttributes(false);
  shuffleChoiceButtons(); // randomize their order
  document.querySelector(".questionchoices").style.opacity = 1;
  document.querySelector(".questionchoices").style.position = "static";
  correct = "SpongeBob's favorite thing is making Krabby Patties.";
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
