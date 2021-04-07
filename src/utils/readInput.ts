import { readFileSync } from 'fs';
import getCallerFile from 'get-caller-file';

export const readInput = (fileName: string) => {
  const file = getCallerFile()
    .split('/')
    .slice(0, -1)
    .concat(fileName)
    .join('/');

  return readFileSync(file).toString();
};
