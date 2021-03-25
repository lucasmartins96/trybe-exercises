const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// implemente seus testes aqui
//1 - Teste se o retorno de sum(4, 5) é 9
const expected = sum(5, 4);
assert.strictEqual(expected, 9, 'Resultado diferente de 9');
