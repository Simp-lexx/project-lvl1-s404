import readlineSync from 'readline-sync';

export const hi = () => {
  const reqName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${reqName}!`);
  return reqName;
};

export const randInt = (min, max) => Math.round(Math.random() * (max - min + 1)) + min;
