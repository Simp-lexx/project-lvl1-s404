#!/usr/bin/env node
import { hi, brainEven } from '..';
import welcome from './brain-games';

welcome();
console.log('Answer "yes" if number even otherwise answer "no".');
const name = hi();
const countAttempts = 3;

brainEven(name, countAttempts);
