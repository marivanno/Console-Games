import startGame from '../index.js';

const gcd = () => {
// Euclidean algorithm for finding gcd
  function NOD(x, y) {
    if (y > x) return NOD(y, x);
    if (y === 0) return x;
    return NOD(y, x % y);
  }
  // Generate random number
  const a = Math.floor(Math.random() * 25);
  const b = Math.floor(Math.random() * 75);
  // Assign constants result question and description
  const result = String(NOD(a, b));
  const description = 'Find the greatest common divisor of given numbers.';
  const questions = `Questions: ${a} ${b}`;
  return [result, description, questions];
};

const newRun = () => startGame(gcd);
export default newRun;
