import readlineSync from 'readline-sync';
import { randInt } from '../bin/brain-games';

const isEven = num => (num % 2 === 0);
const minRandRange = 5;
const maxRandRange = 35;

const brainEven = (name, counter) => {
  if (counter === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const question = randInt(minRandRange, maxRandRange);
  console.log(`Question: ${question}`);
  const myAnswer = isEven(question) ? 'yes' : 'no';
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

export default brainEven;
