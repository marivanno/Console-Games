import startGame from '../index.js';
import randomNumber from '../random-generator.js';

const gcd = () => {
// Euclidean algorithm for finding gcd
  const NOD = (x, y) => {
    if (y > x) return NOD(y, x);
    if (y === 0) return x;
    return NOD(y, x % y);
  }
  // Generate random number
  const a = randomNumber(25);
  const b = randomNumber(75);
  // Assign constants result question and description
  const result = String(NOD(a, b));
  const description = 'Find the greatest common divisor of given numbers.';
  const questions = `Questions: ${a} and ${b}`;
  return [result, description, questions];
};

export default () => startGame(gcd);
