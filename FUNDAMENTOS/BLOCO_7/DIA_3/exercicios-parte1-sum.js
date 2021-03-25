const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
//1 - Teste se o retorno de sum(4, 5) é 9
const expected9 = sum(5, 4);
assert.strictEqual(expected9, 9, 'Resultado diferente de 9');

//2 - Teste se o retorno de sum(0, 0) é 0
const expected0 = sum(0, 0);
assert.strictEqual(expected0, 0, 'Resultado diferente de 0');