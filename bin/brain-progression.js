import readlineSync from 'readline-sync';

function arrstring() {
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
  console.log(`Question: ${arr2.join(', ')}`);
  const result = arr[b];
  return result;
}

function brainprog() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What number is missing in the progression?');
  let i = 0;
  let j = true;
  while (i < 3 && j === true) {
    const result = arrstring();
    const answer = readlineSync.question('Enter you answer please: ');
    if (+result === +answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\n Let's try again, ${name}`);
      j = false;
    }
    if (i === 3 && j === true) {
      console.log(`Congratulations, ${name}`);
    }
  }
}

brainprog();
