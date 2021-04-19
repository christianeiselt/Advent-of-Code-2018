import { readInput } from '../utils';

export default class Day01 {
  private const rawInput: string = readInput('input.txt');
  private const input: number[] = this.rawInput.split('\n').map(Number);
  
  static PartOne() {
  let resultingFrequency: number = 0;
  const frequencies: number[] = [];
  let duplicateFrequency = 0;
  let duplicate = false;
  let sum = 0;
  let loop = 0;

  while (!duplicate) {
    for (let i = 0; i < input.length; i += 1) {
      const number = input[i];

      if (!Number.isNaN(number)) {
        resultingFrequency += number;

        if (
          !Object.prototype.hasOwnProperty.call(
            frequencies,
            resultingFrequency,
          )
        ) {
          frequencies[resultingFrequency] = resultingFrequency;
        } else if (duplicate === false) {
          duplicate = true;
          duplicateFrequency = resultingFrequency;
        } else {
          //
        }
      }
    }

    if (sum === 0) {
      sum = resultingFrequency;
    }
    loop += 1;
  }

  // eslint-disable-next-line no-console
  console.log(`The resulting frequency after 1 loop is: ${sum}.`);
  if (duplicate === true) {
    // eslint-disable-next-line no-console
    console.log(
      `The first frequency was reached twice during the loop ${loop} and is: ${duplicateFrequency}.`,
    );
  }
}
  
