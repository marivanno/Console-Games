const generateRandomNumber = (min, max) => {
  const result = min + Math.random() * (max + 1 - min);
  return Math.floor(result);
};

export default generateRandomNumber;
