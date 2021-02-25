//Exercício 9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let vinteCinco = [];

for (let i=1; i<26; i++) {
  vinteCinco.push(i);
}

for (let j=0; j<vinteCinco.length; j++) {
  console.log(`${vinteCinco[j]} / 2 = ${vinteCinco[j]/2}`);
}