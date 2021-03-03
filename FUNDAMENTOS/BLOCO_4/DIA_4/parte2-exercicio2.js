/*
2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1];
Valor esperado no retorno da função: 4 .

*/
function showArrayHighestValueIndex(numArray) {
  let highestValueIndex = 0;

  for (let index = 0; index < numArray.length; index+=1) {
    if (numArray[highestValueIndex] < numArray[index]) {
      highestValueIndex = index;
    }
  }
  return highestValueIndex;
}

const index = showArrayHighestValueIndex([2, 3, 6, 7, 10, 1]);
console.log(index);