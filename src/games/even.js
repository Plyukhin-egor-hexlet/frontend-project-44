import whatIsYourName from '../cli.js';
import { question, check } from '../index.js';
import { randomNumber } from '../utils.js';

const userName = whatIsYourName();
console.log('Answer "yes" if the number is even, otherwise answer "no".');


const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  } else {
    return 'no';
  }
};

const evenCheck = () => {
  const number = randomNumber();
  question(number);
  const correctAnswer = isEven(number);
  check(evenCheck, userName, correctAnswer); 
};

export default evenCheck;