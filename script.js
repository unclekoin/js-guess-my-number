'use strict';
const number = document.querySelector('.number');
let guess = document.querySelector('.guess');
const score = document.querySelector('.score');
const message = document.querySelector('.message');
const checkBtn = document.querySelector('.check');
const againBtn = document.querySelector('.again');
let counter = 20;

let secretNumber = Math.trunc(Math.random() * 20) + 1;

againBtn.addEventListener('click', () => {
  counter = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  message.textContent = 'Start guessing...';
  score.textContent = counter;
  number.textContent = '?';
  guess.value = '';

  document.body.style.backgroundColor = '#222222';
  number.style.width = '15rem';
});

checkBtn.addEventListener('click', () => {
  let guessValue = Number(guess.value);

  if (!guessValue) {
    message.textContent = '⛔️ No number!';
  } else if (guessValue === secretNumber) {
    message.textContent = '🏆 Correct Number!';
    number.textContent = secretNumber;
    document.body.style.backgroundColor = '#60b347';
    number.style.width = '30rem';
  } else if (guessValue > secretNumber) {
    if (counter > 1) {
      message.textContent = '📈 Too high!';
      counter--;
      score.textContent = counter;
    } else {
      message.textContent = '💥 Game over!';
      score.textContent = 0;
    }
  } else if (guessValue < secretNumber) {
    if (counter > 1) {
      message.textContent = '📉 Too low!';
      counter--;
      score.textContent = counter;
    } else {
      message.textContent = '💥 Game over!';
      score.textContent = 0;
    }
  }
});
