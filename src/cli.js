import readlineSync from 'readline-sync';
export function helloName() {
    const name = readlineSync.question('What is you name? \n');
    console.log('Hello, ' + name + '!');
};

