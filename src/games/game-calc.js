import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';
import { randInt } from '../bin/brain-games';

const minRandRange = 5;
const maxRandRange = 35;
const minOperRange = 0;
const maxOperRange = 2;

const operResult = (pair, operator) => {
  const a = car(pair);
  const b = cdr(pair);
  let result = 0;
  if (operator === 0) {
    result = a + b;
  } else if (operator === 1) {
    result = a - b;
  } else result = a * b;
  return result;
};

const strOper = (operator) => {
  let sign = '';
  if (operator === 0) {
    sign = '+';
  } else if (operator === 1) {
    sign = '-';
  } else sign = '*';
  return sign;
};

const brainCalc = (name, counter) => {
  if (counter === 0) {
    console.log(`Congratulations, ${name}!`);
    return;
  }
  const a = randInt(minRandRange, maxRandRange);
  const b = randInt(minRandRange, maxRandRange);
  const question = cons(a, b);
  const operator = randInt(minOperRange, maxOperRange);
  const signOper = strOper(operator);
  const myResult = operResult(question, operator);
  const strQuestion = `${car(question)} ${signOper} ${cdr(question)}`;
  console.log(`Question: ${strQuestion}`);
  const youResult = Number(readlineSync.question('Your answer: '));
  if (youResult === myResult) {
    console.log('Correct!');
    const newCounter = counter - 1;
    brainCalc(name, newCounter);
  } else {
    console.log(`'${youResult}' is wrong answer ;(. Correct answer was '${myResult}'.
Let's try again, ${name}!`);
  }
};

export default brainCalc;
