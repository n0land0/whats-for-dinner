// Query Selectors
var form = document.querySelector("form");
var buttonLetsCook = document.querySelector(".lets-cook");
var cookpot = document.querySelector(".cookpot-container");

var radioSide = document.getElementById("side");
var radioMainDish = document.getElementById("main-dish");
var radioDessert = document.getElementById("dessert");
var radioEntireMeal = document.getElementById("entire-meal");

// Event Listeners
  // buttonLetsCook.addEventListener('', makeMeal);
  // form.addEventListener('submit', testMe);
form.addEventListener('submit', makeMeal);

// Event Handlers
// Form submit - click Let's Cook button
function makeMeal() {
  event.preventDefault(); // stop page reload
  hideImage(cookpot);
  // take input from form radio buttons and access relevant array
  checkRadiosAndSuggest(radioSide, sides);
  checkRadiosAndSuggest(radioMainDish, mains);
  checkRadiosAndSuggest(radioDessert, desserts);
  checkEntireMealAndSuggest(radioEntireMeal, sides, mains, desserts);
  // checkRadiosAndSuggest(radioEntireMeal, );
}
// Check if a certain radio button is selected,
// and if so, generate the appropriate div on the right
function checkRadiosAndSuggest(element, array) {
  if (element.checked) {
    cookpot.innerHTML = `
      <div class="random-meal">
        <h3>You should make:</h3>
        <p>${array[randomIndex(array)]}!</p>
      </div>
    `;
  }
}
// Sketch out entire Meal
function checkEntireMealAndSuggest(element, array1, array2, array3) {
  if (element.checked) {
    cookpot.innerHTML = `
      <div class="random-meal">
        <h3>You should make:</h3>
        <p>${array2[randomIndex(array2)]} with a side of ${array1[randomIndex(array1)]} and ${array3[randomIndex(array3)]} for dessert!</p>
      </div>
    `;
  }
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



// Random Index Generator
function randomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

// Sketch event handler for radio >>> array return
// if this radio button is checked, return a random element from this array

// Sketch Conditionals
// if (radioSide.checked) {
//   console.log("checked");
// }

// Test function
function testMe(event) {
  event.preventDefault();
  console.log("YOU\'RE DOING GREAT!");
}
