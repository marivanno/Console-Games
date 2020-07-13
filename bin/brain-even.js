import readlineSync from 'readline-sync';

function braineven() {
  let i = 0;
  let b;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  while (i < 3) {
    const random = Math.floor(Math.random() * 1000);
    console.log(`Question: ${random}? `);
    const answer = readlineSync.question('Enter you answer please: ');
    if (answer === 'yes' || answer === 'no' || answer === 'Yes' || answer === 'No') {
      if (random % 2 === 0 && (answer === 'yes' || answer === 'Yes')) {
        console.log('Correct!');
        i += 1;
        b = true;
      }
      if (random % 2 !== 0 && (answer === 'yes' || answer === 'Yes')) {
        console.log(`${answer} is wrong answer ;(. Correct answer was "No".\n Let's try again, ${name}`);
        i += 3;
        b = false;
      }
      if (random % 2 !== 0 && (answer === 'no' || answer === 'No')) {
        console.log('Correct!');
        i += 1;
        b = true;
      }
      if (random % 2 === 0 && (answer === 'no' || answer === 'No')) {
        console.log(`${answer} is wrong answer ;(. Correct answer was "Yes".\n Let's try again, ${name}`);
        i += 3;
        b = false;
      }
      if (b === true && i === 3) {
        console.log(`Congratulations, ${name}!`);
      }
    } else return console.log(`${answer} is wrong answer ;(. Answer "yes" if the number is even, otherwise answer "no"..\n Let's try again, ${name}`);
  }
  return true;
}

braineven();
