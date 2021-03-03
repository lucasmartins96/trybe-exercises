/*
4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda .

*/
function showMaxLengthName(strArray) {
  let maxLengthName = strArray[0];

  for (const key in strArray) {
    if (maxLengthName.length < strArray[key].length){
      maxLengthName = strArray[key];
    }
  }
  return maxLengthName;
}

const index = showMaxLengthName(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']);
console.log(index);