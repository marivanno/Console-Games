import startGame from '../index.js';
import { generaterArray } from '../random-generator.js';

const playProgression = () => {
  const description = 'What number is missing in the progression?';
  const [arr, answer] = generaterArray();
  const question = arr.join(', ');
  const result = String(answer);
  return [result, description, question];
};
export default () => startGame(playProgression);
