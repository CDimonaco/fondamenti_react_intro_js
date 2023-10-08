const recipes = [
  {
    name: 'Torta di Mele',
    ingredients: ['apples', 'cinnamon', 'sugar'],
  },
  {
    name: 'Torta al Cioccolato',
    ingredients: ['chocolate', 'cocoa', 'sugar'],
  },
  {
    name: 'Ricotta e pere',
    ingredients: ['ricotta', 'pere', 'farina'],
  },
];

const newCard = (recipe) => {
  const fragment = document.createElement('div');
  fragment.classList.add('col-4');

  fragment.innerHTML = `
    <div class="card" style="width: 18rem;">
        <img src="https://placehold.co/400" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="" class="btn btn-primary search-link" target="_blank">Cerca su google</a>
        </div>
        </div>
    `;

  fragment.getElementsByClassName('card-title')[0].innerHTML = recipe.name;

  const ingredients = document.createElement('ol');
  recipe.ingredients.forEach((i) => {
    const ingredient = document.createElement('li');
    ingredient.innerHTML = i;
    ingredients.appendChild(ingredient);
  });

  fragment.getElementsByClassName('card-text')[0].replaceWith(ingredients);

  const ctaButton = fragment.getElementsByClassName('search-link')[0];
  ctaButton.setAttribute('href', `https://www.google.com/search?q=${recipe.name}`);
  return fragment;
};

const onDocumentLoad = () => {
  const recipesContainer = document.getElementById('recipes-container');
  recipes.forEach((r) => {
    const recipeCard = newCard(r);
    recipesContainer.appendChild(recipeCard);
  });
};

document.addEventListener('DOMContentLoaded', onDocumentLoad, false);
