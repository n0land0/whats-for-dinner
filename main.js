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

// Event Listeners
form.addEventListener('submit', delayMeal);

// Clear button
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
// Form submit - Let's Cook button
function delayMeal() {
  event.preventDefault();
  for (var i = 0; i < radiosAll.length; i++) {
    if (radiosAll[i].checked) {
      hideImage(randomMealDiv);
      randomMealDiv.innerHTML = "";
      showAnimation(randomMealDiv);
      window.setTimeout(makeMeal, 3000);
      buttonLetsCook.disabled = true;
    }
  }
}

function makeMeal() {
  hideAnimation(randomMealDiv);
  checkRadiosAndSuggest(radioSide, sides);
  checkRadiosAndSuggest(radioMainDish, mains);
  checkRadiosAndSuggest(radioDessert, desserts);
  checkEntireMealAndSuggest(radioEntireMeal, sides, mains, desserts);
}

// Check if a certain radio button is selected,
// and if so, generate the appropriate div on the right
  // side/main/dessert
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
  // entire meal
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
