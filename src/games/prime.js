import startGame from '../index.js';
import { generateRandomNumber } from '../random-generator.js';

const chekPrimeNumber = (num) => {
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
const generateLogicPrimeNumber = () => {
  const number = generateRandomNumber(1, 500);
  const result = chekPrimeNumber(number) ? 'yes' : 'no';
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = `Questions: ${number}`;
  return [result, description, questions];
};

export default () => startGame(generateLogicPrimeNumber);
