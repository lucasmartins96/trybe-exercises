/*
4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .

*/
function showMaxLengthName(strArray) {
  let maxLengthIndex = 0;

  for (const key in strArray) {
    if (strArray[maxLengthIndex].length < strArray[key].length){
      maxLengthIndex = key;
    }
  }
  return strArray[maxLengthIndex];
}

const index = showMaxLengthName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
console.log(index);