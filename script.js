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
function wrongChoice1(wrongChoice) {
  // This function makes the left button the wrong choice
  var wrongChoice1 = document.querySelector(".button1 button");
  // If the element exists, set its text content to the provided string
  if (wrongChoice1) {
    wrongChoice1.textContent = wrongChoice;
  }
}

// When the user clicks the "Question one" button, call this function
function question1() {
  // Update the prompt to a question about SpongeBob
  setPromptText("Question 1: What street does SpongeBob live at?");

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
