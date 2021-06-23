'use strict';
const number = document.querySelector('.number');
let guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let counter = 20;
let highscoreCounter = 0;

const displayMessage = (message) => {
  document.querySelector('.message').textContent = message;
}

againBtn.addEventListener('click', () => {
  
  counter = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  score.textContent = counter;
  number.textContent = '?';
  guess.value = '';

  document.body.style.backgroundColor = '#222222';
  number.style.width = '15rem';
});

checkBtn.addEventListener('click', () => {
  let guessValue = Number(guess.value);

  if (!guessValue) {

    displayMessage('⛔️ No number!');

  } else if (guessValue === secretNumber) {

    displayMessage('🏆 Correct Number!');

    number.textContent = secretNumber;

    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';

    if (counter > highscoreCounter) highscoreCounter = counter;

    highscore.textContent = highscoreCounter;

  } else if (guessValue !== secretNumber) {

    if (counter > 1) {
      const msg = guessValue > secretNumber
        ? '📈 Too high!'
        : '📉 Too low!';
      
      displayMessage(msg);

      counter--;
      score.textContent = counter;

    } else {

      displayMessage('💥 Game over!');
      score.textContent = 0;

    }
  }
});
