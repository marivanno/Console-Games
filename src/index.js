import readlineSync from 'readline-sync';

const startGame = (gameLogic) => {
// Displaying a greeting and initializing variables for the loop.
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let count = 0;
  let isResult = true;
  while (count < 3 && isResult === true) {
  // Accept incoming data.
    const [result, description, question] = gameLogic();
    // Displaying desqription and question.
    console.log(description);
    console.log(question);
    // User to enter a response.
    const answer = readlineSync.question('Enter you answer please: ');
    // Cheking for valid result
    if (result === answer) {
      console.log('Correct!');
      count += 1;
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.\n Let's try again, ${name}`);
      isResult = false;
    }
    if (count === 3 && isResult === true) {
      console.log(`Congratulations, ${name}`);
    }
  }
};

export default startGame;
