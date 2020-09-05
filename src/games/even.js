import startGame from '../index.js';
import { generateRandomNumber } from '../random-generator.js';

// game logic brain-even.js, see index.js
const generateLogicBrainEvenGame = () => {
  const number = generateRandomNumber(1, 1000);
  const result = number % 2 === 0 ? 'yes' : 'no';
  const description = 'What is the result of the expression?';
  const questions = `Question: ${number} ?`;
  return [result, description, questions];
};

export default () => startGame(generateLogicBrainEvenGame);
