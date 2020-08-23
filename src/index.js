import readlineSync from 'readline-sync';

const startGame = (gameLogic) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let i = 0; i < 3; i += 1) {
    const [result, description, question] = gameLogic();
    console.log(description, question);
    const answer = readlineSync.question('Enter you answer please: ');
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\n Let's try again, ${name}`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}`);
    }
  }
};

export default startGame;
