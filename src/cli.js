import readlineSync from 'readline-sync';

const helloName = () => {
  const name = readlineSync.question('What is you name? \n');
  console.log(`Hello, ${name}!`);
};
export default helloName;
