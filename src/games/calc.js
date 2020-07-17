import startGame from '../index.js';

const calc = () => {
  const peterArr = ['+', '-', '*'];
  const rch = peterArr[Math.floor(Math.random() * 3)];
  const a = Math.floor(Math.random() * 100);
  const b = Math.floor(Math.random() * 100);
  const result2 = `${a} ${rch} ${b}`;
  // eslint-disable-next-line no-eval
  const result = String(eval(result2));
  const description = 'What is the result of the expression?';
  const questions = `Question: ${result2} ?`;
  return [result, description, questions];
};

const newRun = () => startGame(calc);
export default newRun;
