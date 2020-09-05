import startGame from '../index.js';
import { generateArrayProgression } from '../random-generator.js';

// game logic brain-progression.js
const playProgression = () => {
  const description = 'What number is missing in the progression?';
  const [arr, answer] = generateArrayProgression(15);
  const question = arr.join(', ');
  const result = String(answer);
  return [result, description, question];
};
export default () => startGame(playProgression);
