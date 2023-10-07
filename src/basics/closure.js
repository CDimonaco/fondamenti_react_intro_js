/* eslint-disable no-console,no-var,no-unused-vars,no-shadow, max-len */

// Possiamo definire closure l'insieme del contesto di esecuzione e dei suoi dati

const courseName = 'Fondamenti di react';

function makeHello() {
  const headline = 'Salve, il corso';

  return function makeHelloWithName(name) {
    return `${headline} ${courseName} saluta ${name}`;
  };
}

const helloer = makeHello();

(function main() {
  console.log(helloer('david'));
  console.log(helloer('carmine'));
}());
