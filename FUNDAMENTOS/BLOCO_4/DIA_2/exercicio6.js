let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 6: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"
let contadorDeImpares = 0;
for (let i=0; i<numbers.length; i++) {
  if (numbers[i]%2 > 0){
    contadorDeImpares++;
  }
}

//verifica se o contador>0 utilizando if ternário
(contadorDeImpares>0)?console.log(`O array tem ${contadorDeImpares} valores ímpares`):console.log(`Nenhum valor ímpar encontrado`);
