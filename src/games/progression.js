import startGame from '../index.js';

const playProgression = () => {
  const description = 'What number is missing in the progression?';
  let a = Math.floor(Math.random() * 9);
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(a);
    a += 2;
  }
  const b = Math.floor(Math.random() * 10);
  const arr2 = [];
  for (let i = 0; i < 10; i += 1) {
    if (arr[i] === arr[b]) {
      arr2.push('..');
    } else arr2.push(arr[i]);
  }
  // console.log(`Question: ${arr2.join(', ')}`);
  const question = arr2.join(', ');
  const result = String(arr[b]);
  return [result, description, question];
};
const newRun = () => startGame(playProgression);

export default newRun;
