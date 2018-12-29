import readlineSync from 'readline-sync';

export const hi = () => {
  const reqName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${reqName}!`);
  return reqName;
};

export const randInt = (min, max) => Math.round(Math.random() * (max - min + 1)) + min;

export const isEven = num => ((num % 2 === 0) ? 'yes' : 'no');

export const brainEven = (name, counter) => {
  const min = 5;
  const max = 35;
  const question = randInt(min, max);
  console.log(`Question: ${question}`);
  const myAnswer = isEven(question);
  const youAnswer = readlineSync.question('Your answer: ');
  if (counter === 1) {
    console.log(`Congratulations, ${name}!`);
    return;
  } if (youAnswer === myAnswer) {
    console.log('Correct!');
    const newCounter = counter - 1;
    brainEven(name, newCounter);
  } else {
    console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${myAnswer}'.
Let's try again, ${name}!`);
  }
};
