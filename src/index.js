import readlineSync from 'readline-sync';

export const hi = () => {
    console.log('Welcome to the Brain Games!');
    const reqName = readlineSync.question('May I have your name? ');
    console.log(`Hello ${reqName} !`);
};
