import startGame from '../index.js';
import generateRandomNumber from '../randomGenerator.js';

// game logic brain-even.js, see index.js
const getDataGameRound = () => {
  const number = generateRandomNumber(1, 1000);
  const result = number % 2 === 0 ? 'yes' : 'no';
  const description = 'What is the result of the expression?';
  const question = `Question: ${number} ?`;
  return [result, description, question];
};

export default () => startGame(getDataGameRound);
