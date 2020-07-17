import readlineSync from 'readline-sync';

const startGame = (fun) => {
// Displaying a greeting and initializing variables for the loop.
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  let i = 0;
  let j = true;
  while (i < 3 && j === true) {
  // Accept incoming data.
    const [result, description, question] = fun();
    // Displaying desqription and question.
    console.log(description);
    console.log(question);
    // User to enter a response.
    const answer = readlineSync.question('Enter you answer please: ');
    // Cheking for valid result
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
