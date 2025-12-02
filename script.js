console.log("Hello, Interactive Graphic Design!");
// This is the main JavaScript file for the Interactive Graphic Design project.

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


// When the user clicks the "Question one" button, call this function
function question1() {
  // Update the prompt to a question about SpongeBob
  setPromptText("Question 1: What street does SpongeBob live on?");
  // Set both choice buttons so it's clear what's being asked
  setChoiceText("Conch St", "Pineapple St");
  document.querySelector(".questionchoices").style.opacity = 1;
  document.querySelector(".questionchoices").style.position = "static";
  
}


// When the user clicks the "Question two" button, call this function
function question2() {
  // Update the prompt with another question (keep wording simple for students)
  setPromptText("Question 2: Why does SpongeBob work at his job at the Krusty Krab?");
}

// When the user clicks the "Question three" button, call this function
function question3() {
  // Update the prompt with a third example question
  setPromptText("Question 3: What is the name of SpongeBob's best friend?");
}

// AI-generated code ends here
// Choices change their status of being correct. Left button won't always be correct, and vice versa.
function choice1() {
  setPromptText("Correct! SpongeBob lives on Conch St.");
  document.querySelector(".questionchoices").style.opacity = 0;
  document.querySelector(".questionchoices").style.position = "absolute";
}

function choice2() {
  setPromptText("Incorrect. SpongeBob actually lives on Conch St.");
  document.querySelector(".questionchoices").style.opacity = 0;
  document.querySelector(".questionchoices").style.position = "absolute";
}