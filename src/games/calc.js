import startGame from '../index.js';
import { generateRandomNumber } from '../random-generator.js';

// game logic brain-calc.js, see index.js
const generateLogicBrainCalcGame = () => {
  const peterArr = ['+', '-', '*'];
  const rch = peterArr[Math.floor(Math.random() * 3)];
  const a = generateRandomNumber(2, 10);
  const b = generateRandomNumber(5, 15);
  const result2 = `${a} ${rch} ${b}`;
  // eslint-disable-next-line no-eval
  const result = String(eval(result2));
  const description = 'What is the result of the expression?';
  const questions = `Question: ${result2} ?`;
  return [result, description, questions];
};

export default () => startGame(generateLogicBrainCalcGame);
