import startGame from '../index.js';

const even = () => {
  // Generate random number
  const random = Math.floor(Math.random() * 1000);
  // Check is an even number
  const result = random % 2 === 0 ? 'yes' : 'no';
  // Assign constants result question and description
  const description = 'What is the result of the expression?';
  const questions = `Question: ${random} ?`;

  return [result, description, questions];
};

const newRun = () => startGame(even);
export default newRun;
