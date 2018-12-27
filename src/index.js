import readlineSync from 'readline-sync';

const hi = () => {
  // console.log('Welcome to the Brain Games!');
  const reqName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${reqName}!`);
  return reqName;
};

export default hi;
