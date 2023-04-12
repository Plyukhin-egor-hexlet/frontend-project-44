import readlineSync from 'readline-sync';

const userAnswer = () => readlineSync.question('Your answer: ');

export const question = (exp) => {
  console.log(`Question: ${exp}`);
};

let trueCounter = 0;
const i = 3;


export const check = (func, userName, correctAnswer) => {
  const userAns = userAnswer();
  const corAns = correctAnswer.toString();
  if (corAns === userAns) { 
    console.log('Correct!');
    trueCounter += 1;
    if (trueCounter < i) { 
      func();
    } else if (trueCounter === i) { 
      console.log(`Congratulations, ${userName}!`);
    }
  } else { 
    console.log(`'${userAns}' is wrong answer ;(. Correct answer was '${corAns}'.`);
    console.log(`Let's try again, ${userName}!`);
  }
};