let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 6: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
let oddCounter = 0;
for (let index=0; index<numbers.length; index++) {
  if (numbers[index]%2 > 0){
    oddCounter++;
  }
}

//verifica se o contador>0 utilizando if ternário
(oddCounter>0) ? console.log(`O array tem ${oddCounter} valores ímpares`) : console.log(`Nenhum valor ímpar encontrado`);
