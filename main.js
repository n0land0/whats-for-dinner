// Query Selectors
var form = document.querySelector("form");
var buttonLetsCook = document.querySelector(".lets-cook");
var cookpot = document.querySelector(".cookpot-container");

// Event Listeners
  // buttonLetsCook.addEventListener('', makeMeal);
  // form.addEventListener('submit', testMe);
form.addEventListener('submit', makeMeal);

// Event Handlers
function makeMeal() {
  event.preventDefault(); // stop page reload
  hideImage(cookpot);
  console.log("working");
}



// Show/Hide fxns
function show(element) {
  element.classList.remove("hidden");
}

function hide(element) {
  element.classList.add("hidden");
}

function hideImage(element) {
  element.classList.add("hide-background-image");
}






// Test function
function testMe(event) {
  event.preventDefault();
  console.log("YOU\'RE DOING GREAT!");
}
