import startGame from '../index.js';
import { generateRandomNumber } from '../randomGenerator.js';

const findGcd = (x, y) => {
  if (y === 0) return x;
  if (y > x) return findGcd(y, x);
  return findGcd(y, x % y);
};

// game logic brain-gcd.js, see index.js
const getGameData = () => {
  const a = generateRandomNumber(1, 25);
  const b = generateRandomNumber(1, 75);
  const result = String(findGcd(a, b));
  const description = 'Find the greatest common divisor of given numbers.';
  const question = `Questions: ${a} and ${b}`;
  return [result, description, question];
};

export default () => startGame(getGameData);
