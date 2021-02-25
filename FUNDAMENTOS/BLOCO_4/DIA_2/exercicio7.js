let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 6: Utilizando for, descubra qual o menor valor contido no array e imprima-o
let menorValor = 100;

for (let i=0; i<numbers.length; i++) {
  if (numbers[i]<menorValor) {
    menorValor=numbers[i];
  }
}
console.log(`Menor valor é: ${menorValor}`);