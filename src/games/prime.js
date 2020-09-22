import startGame from '../index.js';
import generateRandomNumber from '../randomGenerator.js';

const isChekPrimeNumber = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

// game logic brain-prime.js, see index.js
const getGameData = () => {
  const number = generateRandomNumber(1, 500);
  const result = isChekPrimeNumber(number) ? 'yes' : 'no';
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = `Questions: ${number}`;
  return [result, description, question];
};

export default () => startGame(getGameData);
