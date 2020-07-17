import readlineSync from 'readline-sync';

const startGame = (fun) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let i = 0;
  let j = true;
  while (i < 3 && j === true) {
    const [result, description, question] = fun();
    console.log(description);
    console.log(question);
    const answer = readlineSync.question('Enter you answer please: ');
    if (result === answer) {
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
};

export default startGame;
