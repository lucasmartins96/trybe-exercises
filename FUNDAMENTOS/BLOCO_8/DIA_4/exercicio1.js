
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

/*
1 - Dada uma matriz de matrizes, transforme em uma única matriz.
*/
function flatten() {
  return arrays.reduce((acc, arrItem) => acc.concat(arrItem));
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);