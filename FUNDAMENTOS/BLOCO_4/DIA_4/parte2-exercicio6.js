/*
6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
Valor de teste: N = 5 .
Valor esperado no retorno da função: 1+2+3+4+5 = 15 .
*/

function sum1toN(n) {
  let acc = 0;

  for (let index = 1; index <= n; index++) {
    acc+=index;
  }
  return acc;
}

const sum = sum1toN(5);
console.log(sum);