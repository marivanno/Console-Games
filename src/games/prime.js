import startGame from '../index.js';

const prime = () => {
  const NOD = (num) => {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= num / 2; i += 1) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const number = Math.floor(Math.random() * 1000);
  const result = NOD(number) ? 'yes' : 'no';
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = `Questions: ${number}`;
  return [result, description, questions];
};

const newRun = () => startGame(prime);

export default newRun;
