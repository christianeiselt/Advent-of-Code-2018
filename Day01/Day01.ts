import * as fs from 'fs';

const text = fs.readFileSync('Input/Day01_puzzle.txt', 'utf8');
const splitLines = (str: string) => str.split(/\r?\n/);
const changes = splitLines(text);

let resultingFrequency: number = 0;
let frequencies: number[] = [];
let duplicateFrequency = 0;
let duplicate = false;
let sum = 0;
let loop = 0;

while (!duplicate) {
  for (let i = 0; i < changes.length; i++) {
    const number = parseInt(changes[i]);

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
