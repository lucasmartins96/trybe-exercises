/*
3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 .

*/
function showArrayLowestValueIndex(numArray) {
  let lowestValueIndex = 0;

  for (let index = 0; index < numArray.length; index+=1) {
    if (numArray[lowestValueIndex] > numArray[index]) {
      lowestValueIndex = index;
    }
  }
  return lowestValueIndex;
}

const index = showArrayLowestValueIndex([2, 4, 6, 7, 10, 0, -3]);
console.log(index);