import readlineSync from 'readline-sync';

const startGame = (roundData) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  for (let countOfRound = 0; countOfRound < 3; countOfRound += 1) {
    const [result, description, question] = roundData();
    console.log(description, question);
    const answer = readlineSync.question('Enter you answer please: ');
    if (result === answer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\n Let's try again, ${name}!`);
      break;
    }
    if (countOfRound === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default startGame;
