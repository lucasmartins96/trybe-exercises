let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 6: Utilizando for, descubra qual o menor valor contido no array e imprima-o
let smallestNumber = 100;

for (let index=0; index<numbers.length; index++) {
  if (numbers[index]<smallestNumber) {
    smallestNumber=numbers[index];
  }
}
console.log(`Menor valor é: ${smallestNumber}`);