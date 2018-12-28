#!/usr/bin/env node
import hi from '..';
import readlineSync from 'readline-sync';
import welcome from './brain-games';

const rule = () => console.log('Answer "yes" if number even otherwise answer "no".');
const randInt = () => Math.floor(Math.random() * 20) + 1;

welcome();
rule();
const name = hi();

const brainEven = (num, counter) => {
  console.log(`Question: ${num}`);
  const myAnswer = (num % 2 === 0) ? 'yes' : 'no';
  const youAnswer = readlineSync.question('Your answer: ');
  // let counter = 3;
  if (youAnswer === myAnswer) {
    if (counter > 1) {
      console.log('Correct!');
      return brainEven(randInt(), counter - 1);
    }
    console.log(`Congratulations, ${name}!`);
    // return counter;
  } else {
    console.log(`'${youAnswer}' is wrong answer ;(. Correct answer was '${myAnswer}'.
Let's try again, ${name}!`);
  }
  return counter;
};

brainEven(randInt(), 3);
