/* eslint-disable no-console,no-var,no-unused-vars,no-shadow, max-len */

const assert = require('assert');

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

const user = {
  firstName: 'antonio',
  lastName: 'esposito',
  age: 17,
};

const grades = new Map();
grades.set('carmine', 7);
grades.set('david', true);

// Mutabilita' e immutabilita'
// Nonostante recipes e fruits siano due variabili COSTANTI, e quindi non possano essere riassegnate
// possiamo tuttavia, mutare il loro contenuto, ovvero gli array.
// Questo perche' gli array sono degli oggetti, e come tutti gli oggetti dispongono di metodi
// tali metodi possono modificali in place, oppure ritornare una copia aggiornata con il contenuto
// delle nuove operazioni.
// Nello scrivere javascript moderno e funzionale, che e' alla base di react, e' sempre preferibile
// un approccio IMMUTABILE

function addNewRecipe(name, ingredients) {
  recipes.push({ name, ingredients });
}

function addNewRecipeImmutable(name, ingredients) {
  return recipes.concat(recipes, { name, ingredients });
}

function addFavouriteColorToUserImmutable(color) {
  return { ...user, color };
}

// La stessa funzione con lo spread operator
// function addNewRecipeImmutable(name, ingredients) {
//     return [...recipes, { name, ingredients }];
//  }

(function main() {
  fruits.push('avocado');
  assert.deepEqual(fruits, [
    'apple',
    'mango',
    'pear',
    'orange',
    'avocado',
  ]);
  console.log('fruits', fruits);

  addNewRecipe('Farinata', ['farina', 'toscana']);
  assert.deepEqual(recipes, [
    {
      name: 'Torta di Mele',
      ingredients: ['apples', 'cinnamon', 'sugar'],
    },
    {
      name: 'Torta al Cioccolato',
      ingredients: ['chocolate', 'cocoa', 'sugar'],
    },
    {
      name: 'Farinata',
      ingredients: ['farina', 'toscana'],
    },
  ]);
  console.log('recipes', recipes);

  const newRecipes = addNewRecipeImmutable('Farinata 2', ['farina', 'toscana']);
  console.log('newRecipes', newRecipes);
  console.log('recipes', recipes);

  console.log('grades', grades);

  const userWithColor = addFavouriteColorToUserImmutable('blue');
  console.log('userWithColor', userWithColor);
  console.log('user', user);
}());
