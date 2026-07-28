const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const recipeContainer = document.getElementById("recipeContainer");

searchBtn.addEventListener("click", getRecipes);
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    getRecipes();
  }
});

async function getRecipes() {
  const recipeName = searchInput.value;

  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${recipeName}`;
  const response = await fetch(url);

  const data = await response.json();
  displayRecipes(data.meals);

  searchInput.value = "";
}

function displayRecipes(recipes) {
  recipeContainer.innerHTML = "";

  if (!recipes) {
    recipeContainer.innerHTML = "<h3 class='text-center'>No recipe found</h3>";
    return;
  }

  recipes.forEach((recipe) => {
    recipeContainer.innerHTML += `
        <div class="col-md-4 mb-4">
            <div class="card h-100">
                <img src="${recipe.strMealThumb}" class="card-img-top">
                <div class="card-body">
                    <h5>${recipe.strMeal}</h5>
                    <p>${recipe.strCategory}</p>
                    <p>${recipe.strInstructions}</p>
                </div>
            </div>
        </div>
    `;
  });
}
