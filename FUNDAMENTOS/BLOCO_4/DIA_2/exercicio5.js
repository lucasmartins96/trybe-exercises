let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Exercício 5: Utilizando for, descubra qual o maior valor contido no array e imprima-o
let highestNumber = 0;
for (let index=0; index<numbers.length; index++) {
  if (numbers[index]>highestNumber){
    highestNumber=numbers[index];
  }
}
console.log(`Maior valor é: ${highestNumber}`);

