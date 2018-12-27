#!/usr/bin/env node
import hi from '..';
import readlineSync from 'readline-sync';
import welcome from './brain-games';

const rule = () => console.log('Answer "yes" if number even otherwise answer "no".');
const randInt = () => Math.floor(Math.random() * 20) + 1;
// let ran = randInt();

const brainEven = (name, num) => {
  console.log(`Question: ${num}`);
  const myAnswer = (num % 2 === 0) ? 'yes' : 'no';
  const youAnswer = readlineSync.question('Your answer: ');
  const counter = 3;
  const iter = (n, count) => {
    let acc = count;
    if (acc === 0) {
      console.log(`Congratulations, ${name}!`);
    } else if (youAnswer !== myAnswer) {
      console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${myAnswer}'.\n
      Let's try again, ${name}!`);
    } else {
      console.log('Correct!');
      acc -= 1;
    }
    return iter(randInt, acc);
  };
  return iter(num, counter);
};

welcome();
rule();
const name = hi();
brainEven(name, randInt());
