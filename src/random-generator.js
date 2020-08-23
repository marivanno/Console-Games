const randomNumber = (number) => Math.floor(Math.random() * number);
export const generaterArray = () => {
  let a = randomNumber(10);
  const b = randomNumber(10);
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(a);
    if (arr[i] === arr[b]) {
      arr.push('..');
      a += 2;
    }
    a += 2;
  }
  return [arr, arr[b] + 2];
};

export default randomNumber;

