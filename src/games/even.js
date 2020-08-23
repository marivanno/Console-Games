import startGame from '../index.js';
import randomNumber from '../random-generator.js';

const even = () => {
  // Generate random number
  const number = randomNumber(1000);
  // Check is an even number
  const result = number % 2 === 0 ? 'yes' : 'no';
  // Assign constants result question and description
  const description = 'What is the result of the expression?';
  const questions = `Question: ${number} ?`;

  return [result, description, questions];
};

export default () => startGame(even);
