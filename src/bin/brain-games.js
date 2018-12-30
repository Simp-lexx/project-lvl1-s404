#!/usr/bin/env node
import brainEven from '../games/game-even';
import brainCalc from '../games/game-calc';
import brainGcd from '../games/game-gcd';
import { hi } from '..';

console.log('Welcome to the Brain Games!');

const name = hi();
const counter = 3;

export const randInt = (min, max) => Math.round(Math.random() * (max - min + 1)) + min;

export const startGameEven = () => {
  console.log('Answer "yes" if number even otherwise answer "no".');
  brainEven(name, counter);
};

export const startGameCalc = () => {
  console.log('What is the result of the expression?');
  brainCalc(name, counter);
};

export const startGameGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  brainGcd(name, counter);
};
