import startGame from '../index.js';
import { generateRandomNumber } from '../random-generator.js';

const FindingGreatestCommonDivisor = (x, y) => {
  if (y > x) return FindingGreatestCommonDivisor(y, x);
  if (y === 0) return x;
  return FindingGreatestCommonDivisor(y, x % y);
};

// game logic brain-gcd.js, see index.js
const generateLogicGreatestCommonDivisor = () => {
  const a = generateRandomNumber(1, 25);
  const b = generateRandomNumber(1, 75);
  const result = String(FindingGreatestCommonDivisor(a, b));
  const description = 'Find the greatest common divisor of given numbers.';
  const questions = `Questions: ${a} and ${b}`;
  return [result, description, questions];
};

export default () => startGame(generateLogicGreatestCommonDivisor);
