/* eslint-disable no-console,no-var,no-unused-vars,no-shadow, max-len */

// Arrow functions
// Notazione compatta per la dichiarazione di funzioni

const sum = (a, b) => a + b;

const assignProperty = (object) => ({ ...object, newProperty: true });

const fruits = [
  'apple',
  'mango',
  'pear',
  'orange',
];

const recipes = [
  {
    name: 'Torta di Mele',
    ingredients: ['apples', 'cinnamon', 'sugar'],
  },
  {
    name: 'Torta al Cioccolato',
    ingredients: ['chocolate', 'cocoa', 'sugar'],
  },
];

const filterFruits = (fruitsArray, fruits) => fruitsArray.filter((f) => fruits.includes(f));
const addWaterToIngredients = (recipes) => recipes.map((i) => ({ ...i, ingredients: [...i.ingredients, 'water'] }));
const recipeComplexity = (recipes) => recipes.reduce((acc, curr) => ({
  ...acc,
  [curr.name]: curr.ingredients.length,
}), {});
(() => {
  console.log('fruits', fruits);
  console.log('recipes', recipes);

  console.log('only mango and pear', filterFruits(fruits, ['mango', 'pear']));
  console.log('recipes with water', addWaterToIngredients(recipes));
  console.log('recipes complexity', recipeComplexity(recipes));
})();
