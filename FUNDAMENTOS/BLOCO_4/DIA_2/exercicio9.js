//Exercício 9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let twentyFiveNumbers = [];

for (let number=1; number<26; number++) {
  twentyFiveNumbers.push(number);
}

for (let index=0; index<twentyFiveNumbers.length; index++) {
  console.log(`${twentyFiveNumbers[index]} / 2 = ${twentyFiveNumbers[index]/2}`);
}