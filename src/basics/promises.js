/* eslint-disable no-console,no-var,no-unused-vars,no-shadow, max-len */

const sleep = (ms) => new Promise((resolve) => {
  setTimeout(resolve, ms);
});

const sleepWithError = (ms) => new Promise((resolve, reject) => {
  if (ms === 1000) {
    reject(new Error('ms should be more then 1000'));
  }
  setTimeout(resolve, ms);
});

(function main() {
  console.log('hello from', new Date().toISOString());

  sleep(2000).then(() => {
    console.log('hello from sleep', new Date().toISOString());
    // Cosa possiamo fare per evitare che il programma crashi inaspettatamente?
    sleepWithError(1000);
  });
}());
