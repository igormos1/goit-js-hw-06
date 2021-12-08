const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientUl = document.querySelector("#ingredients");

const makeIngredientUl = (array) => {
  return ingredients.map(ingredient => {
    const ingredientsEl = document.createElement('li');
    ingredientsEl.classList.add = ('item');
    ingredientsEl.textContent = ingredient;
    return ingredientsEl;
  });
};

const elements = makeIngredientUl(ingredients);
ingredientUl.append(...elements);