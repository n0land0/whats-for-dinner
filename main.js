// Query Selectors
var form = document.querySelector("form");
var buttonLetsCook = document.querySelector(".lets-cook");
var randomMealDiv = document.querySelector(".cookpot-container");
var addRecipe = document.querySelector(".add-a-recipe");

var radioSide = document.getElementById("side");
var radioMainDish = document.getElementById("main-dish");
var radioDessert = document.getElementById("dessert");
var radioEntireMeal = document.getElementById("entire-meal");

var radiosAll = document.querySelectorAll('input[type="radio"]');

// var audio = document.querySelector("audio");
// Event Listeners
// form.addEventListener('submit', makeMeal);
form.addEventListener('submit', delayMeal);
// addRecipe.addEventListener('click', playTune);

// Event Handlers
function clearMeal() {
  event.preventDefault();
  showImage(randomMealDiv);
  randomMealDiv.innerHTML = "";
  for (var i = 0; i < radiosAll.length; i++) {
    if (radiosAll[i].checked) {
      radiosAll[i].checked = false;
    }
  }
  buttonLetsCook.disabled = false;
}
// Form submit - click Let's Cook button
// buttonLetsCook.onclick = setTimeout(makeMeal, 2000);

function delayMeal() {
  event.preventDefault();
  for (var i = 0; i < radiosAll.length; i++) {
    if (radiosAll[i].checked) {
      hideImage(randomMealDiv);
      randomMealDiv.innerHTML = "";
      showAnimation(randomMealDiv);
      window.setTimeout(makeMeal, 3000);
    }
  }
  buttonLetsCook.disabled = true;
}

function makeMeal() {
  hideAnimation(randomMealDiv);
  // event.preventDefault(); // stop page reload
  // for (var i = 0; i < radiosAll.length; i++) {
  //   if (radiosAll[i].checked) {
  //     hideImage(randomMealDiv);
  //   }
  // }
  // take input from form radio buttons and access relevant array
  checkRadiosAndSuggest(radioSide, sides);
  checkRadiosAndSuggest(radioMainDish, mains);
  checkRadiosAndSuggest(radioDessert, desserts);
  checkEntireMealAndSuggest(radioEntireMeal, sides, mains, desserts);
  // buttonLetsCook.disabled = true;
}

// Check if a certain radio button is selected,
// and if so, generate the appropriate div on the right
function checkRadiosAndSuggest(mealElement, mealArray) {
  if (mealElement.checked) {
    randomMealDiv.innerHTML = `
      <div class="random-meal">
        <h3 class="you-should-make">You should make:</h3>
        <div class="meal-container">
          <p class="this-meal">${mealArray[randomIndex(mealArray)]}!</p>
        </div>
        <div class="clear-container">
          <button class="clear btn">CLEAR</button>
        </div>
      </div>
    `;
    var buttonClear = document.querySelector(".clear");
    buttonClear.addEventListener('click', clearMeal);
  }
}

function checkEntireMealAndSuggest(mealElement, mealArray1, mealArray2, mealArray3) {
  if (mealElement.checked) {
    randomMealDiv.innerHTML = `
      <div class="random-meal">
        <h3 class="you-should-make">You should make:</h3>
        <div class="meal-container">
          <p class="this-meal">${mealArray2[randomIndex(mealArray2)]} with a side of ${mealArray1[randomIndex(mealArray1)]} and ${mealArray3[randomIndex(mealArray3)]} for dessert!</p>
        </div>
        <div class="clear-container">
          <button class="clear btn">CLEAR</button>
        </div>
      </div>
    `;
    var buttonClear = document.querySelector(".clear");
    buttonClear.addEventListener('click', clearMeal);
  }
}

// Show/Hide fxns
function hideImage(element) {
  element.classList.add("hide-background-image");
}

function showImage(element) {
  element.classList.remove("hide-background-image");
}

function showAnimation(element) {
  element.classList.add("cook-animation");
}

function hideAnimation(element) {
  element.classList.remove("cook-animation");
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
