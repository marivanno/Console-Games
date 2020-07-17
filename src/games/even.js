import startGame from '../index.js';

const even = () => {
  const random = Math.floor(Math.random() * 1000);
  const result = random % 2 === 0 ? 'yes' : 'no';
  const description = 'What is the result of the expression?';
  const questions = `Question: ${random} ?`;

  return [result, description, questions];
};

const newRun = () => startGame(even);
export default newRun;
