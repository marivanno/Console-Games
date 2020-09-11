export const generateRandomNumber = (min, max) => {
  const result = min + Math.random() * (max + 1 - min);
  return Math.floor(result);
};

export const generateArrayProgression = (sizeProgression) => {
  let a = generateRandomNumber(1, 15);
  const hiddenNumber = generateRandomNumber(1, 15);
  const arr = [];
  for (let i = 0; i < sizeProgression; i += 1) {
    arr.push(a);
    if (arr[i] === arr[hiddenNumber]) {
      arr.push('..');
      a += 2;
    }
    a += 2;
  }
  return [arr, arr[hiddenNumber] + 2];
};

export const generateRandomOperator = (arr) => {
  const arrWithOperators = [...arr];
  return arrWithOperators[generateRandomNumber(0, 2)];
};
