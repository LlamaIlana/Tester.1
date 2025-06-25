// script.js gggghh

// Show a welcome message in the console
console.log("Hello! Welcome to my website.");

// Show a popup alert when the page loads
alert("Welcome to my site!");

// Change the content of a paragraph with id="message"
function updateMessage() {
  const message = document.getElementById("message");
  message.textContent = "You clicked the button!";
}

// Wait for the DOM to be ready before attaching the function
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("clickMe");
  button.addEventListener("click", updateMessage);
});
