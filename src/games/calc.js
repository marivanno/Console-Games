import startGame from '../index.js';
import generateRandomNumber from '../randomGenerator.js';

const calculateResult = (operator, x, y) => {
  if (operator === '-') {
    return x - y;
  }
  if (operator === '+') {
    return x + y;
  } return x * y;
};

export const generateRandomOperator = (arr) => {
  const arrWithOperators = [...arr];
  return arrWithOperators[generateRandomNumber(0, 2)];
};

// game logic brain-calc.js, see index.js
const getGameData = () => {
  const randomOperator = generateRandomOperator(['-', '+', '*']);
  const a = generateRandomNumber(2, 10);
  const b = generateRandomNumber(5, 15);
  const result = calculateResult(randomOperator, a, b).toString();
  const description = 'What is the result of the expression?';
  const question = `Question: ${a} ${randomOperator} ${b} ?`;
  return [result, description, question];
};

export default () => startGame(getGameData);
