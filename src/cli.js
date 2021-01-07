import readlineSync from 'readline-sync';

const helloName = () => {
  const name = readlineSync.question('May I have your name? \n');
  console.log(`Hello, ${name}!`);
};
export default helloName;
