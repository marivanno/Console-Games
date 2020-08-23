import startGame from '../index.js';
import randomNumber from '../random-generator.js';

const prime = () => {
//  Simplicity test
  const chekPrime = (num) => {
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
  // Generate random number
  const number = randomNumber(1000);
  // Assign constants result question and description
  const result = chekPrime(number) ? 'yes' : 'no';
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = `Questions: ${number}`;
  return [result, description, questions];
};

export default () => startGame(prime);
