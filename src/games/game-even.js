import readlineSync from 'readline-sync';
import welcome from '../bin/brain-games';
import { hi, randInt, isEven } from '..';

const brainEven = (name, counter) => {
  if (counter === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const min = 5;
  const max = 35;
  const question = randInt(min, max);
  console.log(`Question: ${question}`);
  const myAnswer = isEven(question);
  const youAnswer = readlineSync.question('Your answer: ');
  if (youAnswer === myAnswer) {
    console.log('Correct!');
    const newCounter = counter - 1;
    brainEven(name, newCounter);
  } else {
    console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${myAnswer}'.
Let's try again, ${name}!`);
  }
};

const startGameEven = () => {
  welcome();
  console.log('Answer "yes" if number even otherwise answer "no".');
  const name = hi();
  const counter = 3;
  return brainEven(name, counter);
};

export default startGameEven;
