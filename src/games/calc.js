import whatIsYourName from '../cli.js';
import { question, check } from '../index.js';
import { randomNumber } from '../utils.js';

const userName = whatIsYourName();
console.log('What is the result of the expression?');

const randomOperation = () => {
  const operationsList = ['+', '-', '*'];
  const operation = Math.floor(Math.random() * operationsList.length);
  return operationsList[operation];
};

const calc = (a, b, op) => {
  let correctAnswer = 0;
  switch (op) {
    case '+':
      correctAnswer = a + b;
      break;
    case '-':
      correctAnswer = a - b;
      break;
    case '*':
      correctAnswer = a * b;
      break;
    default:
  }
  return correctAnswer;
};


const brainCalc = () => {
  const a = randomNumber(10);
  const b = randomNumber(10);
  const op = randomOperation();
  question(`${a} ${op} ${b}`);
  const correctAnswer = calc(a, b, op);
  check(brainCalc, userName, correctAnswer);
};

export default brainCalc;