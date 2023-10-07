/* eslint-disable no-console,no-var,no-unused-vars,no-shadow, max-len */

const assert = require('assert');

// Dichiarare variabili

// Crea una funzione che ritorna un dizionario con chiave username e chiave fistName
// le chiavi sono date in input, quando manca uno di questi parametri, la funzione fara' fallback
// su dei valori di default

// Facciamo un refactor per eliminare l'uso di var, ma mantenere lo stesso significato logico nel nostro file.

var defaultUsername = 'user';
var defaultFirstName = 'Gianni';

var userAge = 22;

function createUser(
  username,
  firstName,
) {
  let newUserUsername = username;
  let newUserFirstName = firstName;
  if (!username || username === '') {
    newUserUsername = defaultUsername;
  }
  if (!firstName || firstName === '') {
    newUserFirstName = defaultFirstName;
  }
  return {
    username: newUserUsername,
    firstName: newUserFirstName,
  };
}

// Shadowing
// E' possibile, ridichiarare una variabile con lo stesso nome, in un diverso scope
// In questo caso, la variabile userAge, a cosa fa riferimento?

// Come mai assegniamo le proprieta' al dizionario di ritorno in questo modo? Quale e' la differenza tra questa modalita'
// e la classica, chiave:valore?
function createUserWithAge(
  username,
  firstName,
  userAge,
) {
  return {
    username,
    firstName,
    userAge,
  };
}

// function createUser(
//     username = defaultUsername,
//     firstName = defaultFirstName,
// ) {
//     return {
//         username: username === "" ? defaultUsername : username,
//         firstName: firstName === "" ? defaultFirstName : firstName,
//     }
// }

(function main() {
  const userOne = createUser('user1', 'Paolo');
  assert.deepEqual(userOne, { username: 'user1', firstName: 'Paolo' });
  console.log('userOne', userOne);

  const userWithDefaultUsername = createUser(null, 'Giovanni');
  assert.deepEqual(userWithDefaultUsername, { username: defaultUsername, firstName: 'Giovanni' });
  console.log('userWithDefaultUsername', userWithDefaultUsername);

  const userWithDefaultFirstName = createUser('john', null);
  assert.deepEqual(userWithDefaultFirstName, { username: 'john', firstName: defaultFirstName });
  console.log('userWithDefaultFirstName', userWithDefaultFirstName);

  const userWithAge = createUserWithAge('user1', 'Paolo', 27);
  assert.deepEqual(userWithAge, { username: 'user1', firstName: 'Paolo', age: 27 });
  console.log('userWithAge', userWithAge);
}());
