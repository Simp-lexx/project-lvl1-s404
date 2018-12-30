import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { randInt } from '../bin/brain-games';

const minRandRange = 1;
const maxRandRange = 100;

const gcdFind = (pair) => {
  const first = car(pair);
  const second = cdr(pair);
  if (first === second) return first;
  const divider = (a, b) => {
    if (a === 0 || b === 0) return 0;
    const greater = (a > b) ? a : b;
    const lesser = (a < b) ? a : b;
    const mod = greater % lesser;
    if (mod === 0) {
      return lesser;
    }
    return divider(lesser, mod);
  };
  return divider(first, second);
};

const brainGcd = (name, counter) => {
  if (counter === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const a = randInt(minRandRange, maxRandRange);
  const b = randInt(minRandRange, maxRandRange);
  const question = cons(a, b);
  const myResult = gcdFind(question);
  const strQuestion = `${car(question)} ${cdr(question)}`;
  console.log(`Question: ${strQuestion}`);
  const youResult = Number(readlineSync.question('Your answer: '));
  if (youResult === myResult) {
    console.log('Correct!');
    const newCounter = counter - 1;
    brainGcd(name, newCounter);
  } else {
    console.log(`'${youResult}' is wrong answer ;(. Correct answer was '${myResult}'.
Let's try again, ${name}!`);
  }
};

export default brainGcd;
