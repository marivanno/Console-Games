import readlineSync from 'readline-sync';

function NOD(x, y) {
  if (y > x) return NOD(y, x);
  if (!y) return x;
  return NOD(y, x % y);
}

function braingcd() {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Find the greatest common divisor of given numbers.');
  let i = 0;
  let j = true;
  while (i < 3 && j === true) {
    const a = Math.floor(Math.random() * 25);
    const b = Math.floor(Math.random() * 75);
    const result = NOD(a, b);
    console.log(`Question: ${a} ${b}`);
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

braingcd();
