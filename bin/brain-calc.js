#!/usr/bin/env node
import readlineSync from 'readline-sync';

function braincalc() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('What is the result of the expression?');
  let i = 0;
  let j = true;
  while (i < 3 && j === true) {
    const peterArr = ['+', '-', '*'];
    const rch = peterArr[Math.floor(Math.random() * 3)];
    const a = Math.floor(Math.random() * 100);
    const b = Math.floor(Math.random() * 100);
    const result = `${a} ${rch} ${b}`;
    // eslint-disable-next-line no-eval
    const result2 = eval(result);
    console.log(`Question: ${result}`);
    const answer = readlineSync.question('Enter you answer please: ');
    if (+result2 === +answer) {
      console.log('Correct!');
      i += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result2}.\n Let's try again, ${name}`);
      j = false;
    }
    if (i === 3 && j === true) {
      console.log(`Congratulations, ${name}`);
    }
  }
}

braincalc();
