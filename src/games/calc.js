import startGame from '../index.js';
import generateRandomNumber from '../randomGenerator.js';

const calculateResult = (x, y, sign) => {
  switch (sign) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default: return false;
  }
};

const generateRandomSign = (arr) => {
  const arrWithOperators = [...arr];
  return arrWithOperators[generateRandomNumber(0, 2)];
};

// game logic brain-calc.js, see index.js
const getDataGameRound = () => {
  const randomSign = generateRandomSign(['-', '+', '*']);
  const a = generateRandomNumber(2, 10);
  const b = generateRandomNumber(5, 15);
  const result = calculateResult(a, b, randomSign).toString();
  const description = 'What is the result of the expression?';
  const question = `Question: ${a} ${randomSign} ${b} ?`;
  return [result, description, question];
};

export default () => startGame(getDataGameRound);
