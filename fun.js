var mealSelect = document.querySelector(".meal-select");
var audio = document.querySelector("audio");
var whatsForDinner = document.querySelector(".whats-for-dinner");
var addRecipe = document.querySelector(".add-a-recipe");
var add = document.querySelector("add");
var pleaseDont = document.querySelector("please-dont");


addRecipe.addEventListener('click', corgify);

function corgify() {
  whatsForDinner.innerText = "Heckin\' Pupperinos";
  // addRecipe.innerText = "MAKE IT STOP";
  audio.src = "/Users/nolancaine/turing/m1/projects/whats-for-dinner/assets/angel_edit.mp3";
  randomMealDiv.innerHTML = `
    <div class="doge"></div>
  `;
  mealSelect.innerHTML = `
    <div class="doge2"></div>
  `;
  document.body.style.background = "url(/Users/nolancaine/turing/m1/projects/whats-for-dinner/assets/164860646.jpeg) 100% 0% / cover no-repeat";
  addRecipe.addEventListener('click', abort);
}

function abort() {
  addRecipe.removeEventListener('click', abort);
  whatsForDinner.innerText = "What\'s for Dinner?";
  document.body.style.background = "url(/Users/nolancaine/turing/m1/projects/whats-for-dinner/assets/burger-friends.jpg) 0% 0% / cover no-repeat";
  mealSelect.innerHTML = `
  <div class="form-container">
    <h2 class="looking-for">What are you looking for?<span class="asterisk">*</span></h2>
    <form>
      <label for="side"><input id="side" type="radio" value="Side" name="meal">Side</label>
      <label for="main-dish"><input id="main-dish" type="radio" value="Main Dish" name="meal">Main Dish</label>
      <label for="dessert"><input id="dessert" type="radio" value="Dessert" name="meal">Dessert</label>
      <label for="entire-meal"><input id="entire-meal" type="radio" value="Entire Meal" name="meal">Entire Meal</label>
      <input type="submit" class="lets-cook btn" value="LET'S COOK!">
    </form>
  </div>
  `;
  randomMealDiv.innerHTML = "";
  audio.src = "";
}
