import startGame from '../index.js';
import randomNumber from '../random-generator.js';

const calc = () => {
  // Create an array with operation signs
  const peterArr = ['+', '-', '*'];
  const rch = peterArr[Math.floor(Math.random() * 3)];
  // Generate random number
  const a = randomNumber(100);
  const b = randomNumber(100);
  // Assign constants result question and description
  const result2 = `${a} ${rch} ${b}`;
  // eslint-disable-next-line no-eval
  const result = String(eval(result2));
  const description = 'What is the result of the expression?';
  const questions = `Question: ${result2} ?`;
  return [result, description, questions];
};

export default () => startGame(calc);
