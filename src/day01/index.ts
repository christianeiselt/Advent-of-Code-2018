import { readInput } from '../utils';

const rawInput: string = readInput('input.txt');
const input: number[] = rawInput.split('\n').map(Number);

let resultingFrequency: number = 0;
let frequencies: number[] = [];
let duplicateFrequency = 0;
let duplicate = false;
let sum = 0;
let loop = 0;

while (!duplicate) {
  for (let i = 0; i < input.length; i++) {
    const number = input[i];

    if (!isNaN(number)) {
      resultingFrequency += number;

      if (!frequencies.hasOwnProperty(resultingFrequency)) {
        frequencies[resultingFrequency] = resultingFrequency;
      } else {
        if (duplicate === false) {
          duplicate = true;
          duplicateFrequency = resultingFrequency;
        }
      }
    }
  }

  if (sum === 0) {
    sum = resultingFrequency;
  }
  loop++;
}

console.log('The resulting frequency after 1 loop is: ' + sum + '.');
if (duplicate === true) {
  console.log(
    'The first frequency was reached twice during the loop ' +
      loop +
      ' and is: ' +
      duplicateFrequency +
      '.',
  );
}
